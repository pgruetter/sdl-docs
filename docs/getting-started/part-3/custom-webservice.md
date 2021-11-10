---
id: custom-webservice
title: Custom Webservice
---

## Goal
In the previous examples we worked mainly with data that were available as a file or could be fetched with the built-in WebserviceFileDataObject. To fetch data from a webservice the WebserviceFileDataObject is sometimes not enough and has to be customized. The reason why the built-in Data Object is not sufficient, is manifold, but it's connected to the way Webservices are designed. Webservices often include design features like: 
* data pagination
* protect resources using rate limiting 
* different authentication mechanisms
* ...

As a result one is often better of writing a CustomWebserviceDataObject tailored to the API of interest than trying to write a generic WebserviceDataObejct that covers all needs. The goal of this part is to learn how such a CustomWebserviceDataObject can be implemented

## Define Data Objects
We start by rewriting the existing `ext-departures` Data Object. In the configuration file replace old configuration with its new definition
```
ext-departures {
  type = CustomWebserviceDataObject
  baseUrl = "https://opensky-network.org/api/flights/departure"
  nRetry = 5
  queryParameters = [{
    airport="LSZB"
    begin=1630200800
    end=1630310979
  },{
    airport="EDDF"
    begin=1630200800
    end=1630310979
  }]
  timeouts {
    connectionTimeoutMs=200000
    readTimeoutMs=200000
  }
}
```
- ext-departures:    
  The Configuration for this new `ext-departures` includes the type of the Data Object, the base url, where we can fetch the departures, the number of retries, a list of query parameters and timeout options. To have more flexibility we can configure the query parameters now as options instead defining them in the query string. The connection timeout corresponds to the time we wait until the connection is established and the read timeout equals the time we wait until the webservice responds after the request has been submitted. If for example the request cannot be answered in the time configured, we try to automatically resend the request. How many times a failed request will be resend, is controlled by the nRetry parameter. 

To make the Data Object of type `CustomWebserviceDataObject` available the following three files had to be included in our project:  
  - ./src/scala/io/smartdatalake/workflow/dataobject/CustomWebserviceDataObject.scala
  - ./src/scala/io/smartdatalake/util/webservice/ScalaCustomWebserviceClient.scala
  - ./src/scala/io/smartdatalake/util/webservice/WebserviceMethod.scala

In this part we will work exclusivly with the `CustomWebserviceDataObject.scala` file. 

## Define Action
In the config we change again only one action, namely:
```
download-departures {
  type = CopyAction
  inputId = ext-departures
  outputId = stg-departures
  metadata {
    feed = download-departures
  }
}
```
- ext-departures:  
  The type is no longer `FileTransferAction`, but instead `CopyAction`. We also changed the feed name. For this part we are mainly interested exectuting this action.

## Try it out
Execute this specific feed using the command below
```
  docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config smart-data-lake/gs1:latest --config /mnt/config --feed-sel download-departures
```
Nothing should have changed. You should again receive the data as json files in the corresponding `stg-departures` folder.

Having a look at the log, something similar should appear on your screen. 
```
2021-11-10 14:00:32 INFO  ActionDAGRun$ActionEventListener:228 - Action~download-departures[CopyAction]: Prepare started
2021-11-10 14:00:32 INFO  ActionDAGRun$ActionEventListener:237 - Action~download-departures[CopyAction]: Prepare succeeded
2021-11-10 14:00:32 INFO  ActionDAGRun$ActionEventListener:228 - Action~download-departures[CopyAction]: Init started
2021-11-10 14:00:33 INFO  CustomWebserviceDataObject:69 - Success for request https://opensky-network.org/api/flights/departure?airport=LSZB&begin=1630200800&end=1630310979
2021-11-10 14:00:33 INFO  CustomWebserviceDataObject:69 - Success for request https://opensky-network.org/api/flights/departure?airport=EDDF&begin=1630200800&end=1630310979
2021-11-10 14:00:35 INFO  ActionDAGRun$ActionEventListener:237 - Action~download-departures[CopyAction]: Init succeeded
2021-11-10 14:00:35 INFO  ActionDAGRun$ActionEventListener:228 - Action~download-departures[CopyAction]: Exec started
2021-11-10 14:00:35 INFO  CopyAction:158 - (Action~download-departures) getting DataFrame for DataObject~ext-departures
2021-11-10 14:00:36 INFO  CustomWebserviceDataObject:69 - Success for request https://opensky-network.org/api/flights/departure?airport=LSZB&begin=1630200800&end=1630310979
2021-11-10 14:00:37 INFO  CustomWebserviceDataObject:69 - Success for request https://opensky-network.org/api/flights/departure?airport=EDDF&begin=1630200800&end=1630310979
```
It is important to notice that the two requests for each airport to the API were not send only once, but twice. This stems from the fact that the method `getDataFrame` of the Data Object is called twice in the DAG execution of the Smart Data Lake Builder. 

## Cache Data Frame
To avoid the behaviour from the previous section, we start go to the `CustomWebserviceDataObject.scala` file and define the variable
```scala
private var dfCached : Option[DataFrame] = None
```
which will then be used as return variable in the `getDataFrame` method later. To prevent multiple requests simply put the code in the if statement below
```scala
if(dfCached.isEmpty) {
      // given the query parameters, generate all requests
      val departureRequests = currentQueryParameters.map(
        param => s"${baseUrl}?airport=${param.airport}&begin=${param.begin}&end=${param.end}"
      )

      // make request
      val departuresResponses = departureRequests.map(request(_))
      // deserialize the result into a sequence of Departure objects
      val departures = departuresResponses.flatMap(res => JsonMethods.parse(new String(res)).extract[Seq[Departure]])
      // create dataframe and add created_at column with the current timestamp
      val departuresDf = departures.toDF
        .withColumn("created_at", current_timestamp())

      dfCached = Some(departuresDf)
    }
```
and instead of returning the `departuresDf` variable return the `dfCached` variable at the end of the method using
```scala
  dfCached.get
```
If you restart the program you should see that we do not query the api twice anymore.