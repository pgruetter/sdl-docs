---
id: incremental-mode
title: Incremental Mode
---

## Goal
The goal of this part is to use the Data Object's state, such that it can be used in follow up requests. This allows for more dynamic querying of the API. For example in the `ext-departures` Data Object we currently query the API with fixed airport, begin and end query parameters. Consequently, we will always query the same time period for a given airport. But it would be beneficial to perhaps query always from the last time until the execution of the program. To demonstrate these incremental queries based on previous state we will start by rewriting our configuration file.

## Define Data Objects
We only make the following two minor changes in our config file:
```
stg-departures {
  type = JsonFileDataObject
  path = "~{id}"
  saveMode = Append
}
```
```
download-departures {
  type = CopyAction
  executionMode = { type = DataObjectStateIncrementalMode }
  inputId = ext-departures
  outputId = stg-departures
  metadata {
    feed = download-departures
  }
}
```

- stg-departures: \
By changing the `saveMode` from the default Overwrite to Append mode we ensure that data is incrementally appended to the already stored data instead of overwriting it.

- download-departures: \
Adding the executionMode `DataObjectStateIncrementalMode` to the Data Object allows us to store Information about the Data Object's state in the global state file that is written after each run of the Smart Data Lake Builder.

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

and should be added in the same file outside of the Data Object. For example, add it just below the Departure case class. The state stores always the airport and the nextBegin in unix time to provide the next run the from where the new query has to start. Concerning the state variables `previousState` will basically be used for all the logic of the Data Object and `nextState` will be used to store the state for the next run.

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
Use the same command as before to run the `stg-departures` feed. Nothing should have changed so far, since we only read and write an empty state. You can go to the state file and there under the field `dataObjectsState` you should find the stored empty state. In the next section we will assign a value to `nextState`.

## Define a Query Logic
What we would like to achieve it the following query logic. The starting point is the query parameters provided in the configuration file and no previous state. With these information we query the departures for the two airports in the given time window. Afterwards, we store for each airport the time where the next query beginns. This euqals the end time of the current query. Now the true incremental phase starts as we now have a state as the starting point. The proceeding query will query the API from the begin stored in the previous state until now. 
For this to work, need to make two changes. First the `currentQueryParameters` variable has to be adapted to 
```scala
// if we have query parameters in the state we will use them from now on
val currentQueryParameters = if (previousState.isEmpty) queryParameters.get else previousState.map{
  x => DepartureQueryParameters(x.airport, x.nextBegin, now)
}
```
and second the logic for the next state has to be implemented. The logic for the next state can be placed at the end of the if statement in the `getDataFrame` method.
```scala
// define next state
if(dfCached.isEmpty) {

  // other stuff

  if(previousState.isEmpty){
    nextState = currentQueryParameters.map(params => State(params.airport, params.end))
  } else {
    nextState = previousState.map(params => State(params.airport, now))
  }
}
```