---
id: incremental-mode
title: Incremental Mode
---

## Goal
The goal of this part is to use the Data Object's state, such that it can be used in follow up requests. This allows for more dynamic querying of the API. For example in the `ext-departures` Data Object we currently query the API with fixed airport, begin and end query parameters. Consequently, we will always query the same time period for a given airport. But it would be beneficial to perhaps query always from the last time until the execution of the program. To demonstrate these incremental queries based on previous state we will start by rewriting our configuration file.

## Define Data Objects
We only make the following two minor changes in our config file:
```
int-departures {
  type = DeltaLakeTableDataObject
  path = "~{id}"
  table {
    db = "default"
    name = "int_departures"
    primaryKey = [icao24, estdepartureairport, dt]
  }
  saveMode = Append
}
```
```
deduplicate-departures {
  type = DeduplicateAction
  executionMode = { type = DataObjectStateIncrementalMode }
  inputId = ext-departures
  outputId = int-departures
  transformers = [{
    type = SQLDfTransformer
    code = "select ext_departures.*, date_format(from_unixtime(firstseen),'yyyyMMdd') dt from ext_departures"
  },{
    type = ScalaCodeDfTransformer
    code = """
      import org.apache.spark.sql.{DataFrame, SparkSession}
      def transform(session: SparkSession, options: Map[String,String], df: DataFrame, dataObjectId: String) : DataFrame = {
        import session.implicits._
        df.dropDuplicates("icao24", "estdepartureairport", "dt")
      }
      // return as function
      transform _
    """
  }]
  metadata {
    feed = deduplicate-departures
  }
  }
```
- int-departures:  
By changing the `saveMode` from the default Overwrite to Append mode we ensure that data is incrementally appended to the already stored data instead of overwriting it.

- deduplicate-departures:  
Adding the executionMode `DataObjectStateIncrementalMode` to the Data Object allows us to store Information about the Data Object's state in the global state file that is written after each run of the Smart Data Lake Builder.
:::caution
Remeber that the time interval in `ext-departures` should not be larger than a week. As mentioned, we will implement a simple incremental query logic that always queries from the last execution time until the current execution. So please choose a time window that lies in the past week from now.
:::
## Define state variables
To make use of the new configured execution mode, we need state variables. Add the following two variables to our CustomWebserviceDataObject.
```scala  
  private var previousState : Seq[State] = Seq()
  private var nextState : Seq[State] = Seq()
```
The corresponding `State` case class is defined as 

```scala
  case class State(airport: String, nextBegin: Long)
```

and should be added in the same file outside of the Data Object. For example, add it just below the import statements. 
The state stores always the airport and the nextBegin in unix time to tell the next run from where in time the new query has to start. 

Concerning the state variables, `previousState` will basically be used for all the logic of the Data Object and `nextState` will be used to store the state for the next run.

## Read and write state
To actually work with the state we need to implement the `CanCreateIncrementalOutput` trait. This can be done by adding `with CanCreateIncrementalOutput` to the `CustomWebserviceDataObject`. Consequently, we need to implement the functions `setState` and `getState` defined in the trait. 

```scala
override def setState(state: Option[String])(implicit session: SparkSession, context: ActionPipelineContext): Unit = {
  implicit val formats: Formats = DefaultFormats
  dfCached = None
  previousState = JsonMethods.parse(state.getOrElse[String]("[]")).extract[Seq[State]]
}

override def getState: Option[String] = {
  implicit val formats: Formats = DefaultFormats
  Some(Serialization.write(nextState))
}
```
We can see that by implementing these two functions we start using the variables defined in the section before.

## Try it out
We only spoke about this state, but it was never explained where it is stored. To work with state we need to introduce two new configuration parameters, namely `--state-path` and `-n`. 
This allows us to define the folder and name of the state file. To have access to the state file, we specify the path to be in an already mounted folder.

```
  docker build -t smart-data-lake/gs1 .
  docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config smart-data-lake/gs1:latest --config /mnt/config --feed-sel deduplicate-departures --state-path /mnt/data/state -n getting-started
```
Use now this slightly modified command to run the `deduplicate-departures` feed. Nothing should have changed so far, since we only read and write an empty state. 
You can can check that by opening the file `getting-started.<runId>.<attemptId>.json` and having a look at the field `dataObjectsState`. The stored state is currently empty. 
In the next section we will assign a value to `nextState`, such that the is `dataObjectsState` is getting written. 
The two variables `<runId>` and `<attemptId>` describe smart data like intrinsics. 
For each execution the `<runId>` is incremented by one. The `<attemptId>` is normally 1 and only increased by one if smart data lake builder had to recover a failed execution. This recovery mechanism will be part of a future tutorial.

## Define a Query Logic
What we would like to achieve is the following query logic:

The starting point is the query parameters provided in the configuration file and no previous state. 
During the first execution, we query the departures for the two airports in the given time window. 
Afterwards, we store for each airport the `begin`-parameter for the next query. This equals the `end`-parameter of the current query. 
Now the true incremental phase starts as we now have stored the state for the next starting point. We query the API from the `begin` stored in the previous state until now. 
For this to work, we need to make two changes. First add the variable
```
private val now = Instant.now.getEpochSecond

``` 
just below the `nextState` variable. Then modify the `currentQueryParameters` variable according to
```scala
// if we have query parameters in the state we will use them from now on
val currentQueryParameters = if (previousState.isEmpty) queryParameters.get else previousState.map{
  x => DepartureQueryParameters(x.airport, x.nextBegin, now)
}
```
and move it below the comment `// place the new implementation of currentQueryParameters below this line`, which can be found in the `getDataFrame` method. The implemented logic 
```scala
if(previousState.isEmpty){
  nextState = currentQueryParameters.map(params => State(params.airport, params.end))
} else {
  nextState = previousState.map(params => State(params.airport, now))
}
```
for the next state can be placed below the comment `// put simple nextState logic below`. Now you should again build the docker image and run it multiple times. The scenario will be that the first run fetches the data defined in the configuration file, then the proceeding run retrieves the data from the endpoint of the last run until now. And finally the third execution will most probably fail, as only little seconds have been passed and most likely no data is available in such a short time window. Unfortunately, the webservice on opensky-network.org responds with a **404** error code when no data is available, rather than a **200** and an empty response. Therefore, SDL gets a 404 and will fail the execution.