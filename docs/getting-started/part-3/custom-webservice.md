---
id: custom-webservice
title: Custom Webservice
---

## Goal
  In the previous examples we worked mainly with data that was available as a file or could be fetched with the built-in `WebserviceFileDataObject`. To fetch data from a webservice the `WebserviceFileDataObject` is sometimes not enough and has to be customized. The reason why the built-in Data Object is not sufficient, is manifold, but it's connected to the way Webservices are designed. Webservices often include design features like: 
* data pagination
* protect resources using rate limiting 
* different authentication mechanisms
* ...

As a result one is often better off writing a CustomWebserviceDataObject tailored to the API of interest than trying to write a generic WebserviceDataObejct that covers all needs. 
The goal of this part is to learn how such a CustomWebserviceDataObject can be implemented.

:::tip
As we are really developing code in this part of the tutorial, it might be a good idea to configure a working development evironment. In the Technical Setup chaptor we introduced the possibilty how one can use intellij for the development. Please [visit](../setup.md) for a more elobarte development experience that manipulating the file in simple text editor.
:::

## Starting point
Again we start with the `application.conf` that resulted from finishing the last part. If you don't have the application.conf from the last part, please copy [this](../config-examples/application-historical-part2.conf) configuration file again to **config/application.conf**.

## Define Data Objects
We start by rewriting the existing `ext-departures` Data Object. In the configuration file, replace the old configuration with its new definition:
```
ext-departures {
  type = CustomWebserviceDataObject
  baseUrl = "https://opensky-network.org/api/flights/departure"
  nRetry = 5
  queryParameters = [{
    airport="LSZB"
    begin=1639609200
    end=1639868400
  },{
    airport="EDDF"
    begin=1639609200
    end=1639868400
  }]
  timeouts {
    connectionTimeoutMs=200000
    readTimeoutMs=200000
  }
}
```

  
The Configuration for this new `ext-departures` includes the type of the Data Object, the base url, where we can fetch the departures, the number of retries, a list of query parameters and timeout options. To have more flexibility we can configure the query parameters now as options instead defining them in the query string. The connection timeout corresponds to the time we wait until the connection is established and the read timeout equals the time we wait until the webservice responds after the request has been submitted. If for example the request cannot be answered in the time configured, we try to automatically resend the request. How many times a failed request will be resend, is controlled by the nRetry parameter.

:::warning
  For the *begin* and *end* you should **not** choose an interval that is larger than a week. Otherwise the webservice will not respond. As the configuration must be as a unix timestamp, have a look at this [website](https://www.unixtimestamp.com/).
:::

To make the Data Object of type `CustomWebserviceDataObject` available the following three files had to be included in our project:  
  - ./src/scala/io/smartdatalake/workflow/dataobject/CustomWebserviceDataObject.scala
  - ./src/scala/io/smartdatalake/util/webservice/ScalaCustomWebserviceClient.scala
  - ./src/scala/io/smartdatalake/util/webservice/WebserviceMethod.scala

In this part we will work exclusively with the `CustomWebserviceDataObject.scala` file.

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
The type is no longer `FileTransferAction`, but instead `CopyAction`. We also changed the feed name. For this part we are mainly interested exectuting this action.

## Try it out
Re-Build the docker image to update the Scala files and then execute this specific feed using the command below
```
  docker build -t smart-data-lake/gs1 .
  docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config smart-data-lake/gs1:latest --config /mnt/config --feed-sel download-departures
```
Nothing should have changed. You should again receive the data as json files in the corresponding `stg-departures` folder. But except of receiving the departures for only one airport the Data Object returns the departures for all configured airports. In this specific case this would be *LSZB* and *EDDF* with the corresponding time window.

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
It is important to notice that the two requests for each airport to the API were not send only once, but twice. This stems from the fact that the method `getDataFrame` of the Data Object 
is called twice in the DAG execution of the Smart Data Lake Builder: Once during the Init Phase, and once again during the Exec Phase. See [the end of the get Airports step](../get-airports) for a more information on that. Before we address and mitigate this behaviour in the next section, we have a look at the `getDataFrame` method and the currently implemented logic displayed in the next code section.
```
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
```
Given the configured query parameters, the requests are first prepared using the request method. If you have a look the implementation of the  `request` method, you notice that we provide some ScalaJCustomWebserviceClient that is based on the *ScalaJ* library. It is also in the `request` method where it one can configure the amount of retries. Afterwards we deserialize the return value from the webservice into the definded case class `Departure`. This result is used to create a dataFrame with the added column *created_at*.  

## Get Data Frame
In this section we will learn how we can avoid sending the requests twice to the API using the execution phase information provided by the smart data lake. We will now implement a simple *if ... else* statement that allows us to simply define the schema of the expected response in the **Init** phase and to actually query the data in the **Exec** phase. We start by defining the *schema* instance variable below
```scala
private var schema : Option[ArrayType] = None
```
in the beginning of the class `CustomWebserviceDataObject`. The previously discussed logic is enclosed in two `// REPLACE BLOCK` comments. Find this section and replace it with the code below
```scala
if(context.phase == ExecutionPhase.Init){
  import org.apache.spark.sql.types._
  // define schema
  schema = Some(ArrayType(StructType(Array(
    StructField("icao24", StringType),
    StructField("firstSeen", IntegerType),
    StructField("estDepartureAirport", StringType),
    StructField("lastSeen", IntegerType),
    StructField("estArrivalAirport", StringType),
    StructField("callsign", StringType),
    StructField("estDepartureAirportHorizDistance", IntegerType),
    StructField("estDepartureAirportVertDistance", IntegerType),
    StructField("estArrivalAirportHorizDistance", IntegerType),
    StructField("estArrivalAirportVertDistance", IntegerType),
    StructField("departureAirportCandidatesCount", IntegerType),
    StructField("arrivalAirportCandidatesCount", IntegerType)
  ))))

  // simply return an empty data frame
  session.emptyDataFrame
} else {
  // place the new implementation of currentQueryParameters below     

  // given the query parameters, generate all requests
  val departureRequests = currentQueryParameters.map(
    param => s"${baseUrl}?airport=${param.airport}&begin=${param.begin}&end=${param.end}"
  )
  // make request
  val departuresResponses = departureRequests.map(request(_))

  // create dataframe with the correct schema and add created_at column with the current timestamp
  val departuresDf = departuresResponses.toDF("responseBinary")
    .withColumn("responseString", byte2String($"responseBinary"))
    .select(from_json($"responseString", schema.get).as("response"))
    .withColumn("created_at", current_timestamp())
    .select(explode($"response").as("record"), $"created_at")
    .select("record.*", "created_at")
  
  // put simple nextState logic below

  departuresDf
}
```
We see that we we need to so some transformations to flatten the result returned by the API. Spark has lots of *User-Defined Functions* (short **udf**) that can be used out of the box. We used such a column based function *from_json* to parse the response string with the right schema.

:::tip
The return type of the response is `Array[Byte]`. To convert that to `Array[String]` the *udf* function `byte2String `has been used. This function is a nice example how one can define such *udfs* by oneselfs.
:::

If you rebuild the docker image and then restart the program you should see that we do not query the API twice anymore.

At the end your config file should look somehting like [this](../config-examples/application-download-part3-custom-webservice.conf) and the Data Object like [this](../config-examples/CustomWebserviceDataObject-1.scala).