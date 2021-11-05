---
id: get-departures-revisited
title: Get Departures revisited
---

## Goal
In the previous examples we worked mainly with data that were available as a file or could be fetched with the built-in WebserviceFileDataObject. To fetch data from a webservice the WebserviceFileDataObject is sometimes not enough and has to be customized. The reason why the built-in Data Object is not sufficient, is manifold, but it's connected to the way Webservices are designed. Webservices often include design features like: 
* data pagination
* protect resources using rate limiting 
* different authenticate mechanisms
* ...

As a result, one is often better of to write a CustomWebserviceDataObject tailored to the API of interest than trying to write a generic WebserviceDataObejct. The goal of this part is to first build such a CustomWebserviceDataObject and then to store the Data Object's state, such that it can be used in follow up requests. This allows for more dynamic requests. For example in the `ext-departures` Data Object we currently query the API with fixed airport, begin and end query parameters. Consequently, we will always query the same time period for a given airport. To demonstrate these incremental queries based on previous state we will start by rewriting our existing `ext-departures` Data Object.

## Redefine departures objects
In the configuration file replace the `ext-departures` Data Object with it's new definition

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

The Configuration for this new `ext-departures` includes the base url, where we can fetch the departures, a list of query parameters, the number of retries and timeout options. In addition, we can now configure multiple query parameters. The connection timeout corresponds to the time we wait until the connection is established and the read timeout equals the time we wait until the webservice responds after the request has been submitted. If for example the request cannot be answered in the time configured, we try to automatically resend the request. How many times a failed request will be resend, is controlled by the nRetry parameter.

The 


---

## Admonitions

:::note

This is a note

:::

:::tip

This is a tip

:::

:::important

This is important

:::

:::caution

This is a caution

:::

:::warning

This is a warning

:::
