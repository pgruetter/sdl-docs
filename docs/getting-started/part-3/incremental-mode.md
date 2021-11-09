---
id: incremental-mode
title: Incremental Mode
---

## Goal
The goal of this part is to first build such a CustomWebserviceDataObject and then to store the Data Object's state, such that it can be used in follow up requests. This allows for more dynamic requests. For example in the `ext-departures` Data Object we currently query the API with fixed airport, begin and end query parameters. Consequently, we will always query the same time period for a given airport. But it would be beneficial to perhaps query always from the last time until the job will be exectuted. To demonstrate these incremental queries based on previous state we will start by rewriting our existing `ext-departures` Data Object.

## Define Data Object
We only make the following config change 

```
  stg-departures {
    type = JsonFileDataObject
    path = "~{id}"
    saveMode = Append
  }
```
- stg-departures: 
By changing the saveMode from Overwrite to Append we ensure that we incrementally loaded data does not overwrite the existing data, but instead is append.

## Add state variables
To use the state of the DataObject, we will add the following two variables to CustomWebserviceDataObject
```scala  
  private var previousState : Seq[State] = Seq()
  private var nextState : Seq[State] = Seq()
```
The corresponding `State` is defined as 

```
  case class State(airport: String, nextBegin: Long)
```

and should be added in the same file below the Departure case class. We use two state variables. `previousState` will be used for the state of the previous run and `nextState` will be used accordingly to store the state for the next run.

## Implement CanCreatIncrementalOutput trait
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
We can see that by implementing these two functions we actually use the variables defined in the section before.

## Define the next state
The next state just holds the 

```scala
  if(previousState.isEmpty){
    nextState = currentQueryParameters.map(params => State(params.airport, params.end))
  } else {
    nextState = previousState.map(params => State(params.airport, now))
  }
```

## Cosmetics
```scala
// if we have query parameters in the state we will use them from now on
val currentQueryParameters = if (previousState.isEmpty) queryParameters.get else previousState.map{
  x => DepartureQueryParameters(x.airport, x.nextBegin, now)
}
```