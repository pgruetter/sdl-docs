---
id: get-departures-webservice
title: Get Departures webservice
---

## Goal
In the previous examples we worked mainly with data that were available as a file or could be fetched with the built-in WebserviceFileDataObject. To fetch data from a webservice the WebserviceFileDataObject is sometimes not enough and has to be customized. The reason why the built-in Data Object is not sufficient, is manifold, but it's connected to the way Webservices are designed. Webservices often include design features like: 
* data pagination
* protect resources using rate limiting 
* different authentication mechanisms
* ...

As a result, one is often better of to write a CustomWebserviceDataObject tailored to the API of interest than trying to write a generic WebserviceDataObejct. The goal of this part is to build such a CustomWebserviceDataObject. 

## Redefine departures objects
We will start by rewriting our existing `ext-departures` Data Object. In the configuration file replace the `ext-departures` Data Object with its new definition

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

- ext-departures: 
The Configuration for this new `ext-departures` includes the type of the Data Object, the base url, where we can fetch the departures, a list of query parameters, the number of retries and timeout options. In addition, we can now configure multiple query parameters. The connection timeout corresponds to the time we wait until the connection is established and the read timeout equals the time we wait until the webservice responds after the request has been submitted. If for example the request cannot be answered in the time configured, we try to automatically resend the request. How many times a failed request will be resend, is controlled by the nRetry parameter. 

- To use the actual the Data Object with the type `CustomWebserviceDataObject` we added the following three files to our project:
* ./src/scala/io/smartdatalake/workflow/dataobject/CustomWebserviceDataObject.scala
* ./src/scala/io/smartdatalake/util/webservice/ScalaCustomWebserviceClient.scala
* ./src/scala/io/smartdatalake/util/webservice/WebserviceMethod.scala

In this part we will work exclusivly with the `CustomWebserviceDataObject.scala` file. 
## Try it out

Run now the following command to run this specific feed using the command below
    docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config smart-data-lake/gs1:latest --config /mnt/config --feed-sel download-departures
