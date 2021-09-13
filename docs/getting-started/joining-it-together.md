---
title: Joining It Together
---

## Goal
In this step we will finally join both data sources together.
We will continue based upon the config file available [here](application-compute-part1-cols.conf).
At the end of the step, we will have all planes departing from Bern Aiport
in the given timeframe along with their readable Destination Airport names, as well as geo-coordinates.

Like in the previous step, we need one more action and one dataObject for our output.

## Define output object

      btl-connected-airports {
        type = CsvFileDataObject
        path = btl-connected-airports
      }

## Define join_departures_airports action

      join_departures_airports {
        type = CustomSparkAction
        inputIds = [stg-departures, int-airports]
        outputIds = [btl-connected-airports]
        transformers = [{
          type = SQLDfsTransformer
          code = {
            btl-connected-airports = """select stg_departures.estdepartureairport, stg_departures.estarrivalairport,
            airports.*
             from stg_departures join int_airports airports on stg_departures.estArrivalAirport = airports.ident"""
          }
        }
        ]
        metadata {
          feed = compute
        }
      }
This time, we changed the Action Type from CopyAction to CustomSparkAction.
Use CustomSparkAction when you need to do complex operations. For instance, CustomSparkAction allows multiple inputs,
which CopyAction does not.
Notice that our input/output fields are now called inputId**s** and outputId**s** and that they take a list of dataObject ids.
Then, instead of allowing for just one transformer, we could potentially have multiple transformers within the same action.
We don't use that for now and just add one transformer of the type SQLDf**s**Transformer.
The **s** is important, since it shows that multiple inputs/output Data Objects are possible.
We could also define a SQLDfTransformer that only knows one input and one output.
Finally, it expects it's code as an object rather than as a string. This is due to the fact that you could have multiple
outputs, in which case you would need to name them in order to distinguish them.
In our case, there is only one output dataObject: btl-connected-airports.
The SQL-Code itself is just a join between the two input Data Objects on the ICAO identifier.
Note that we can just select all columns from airports, since we selected the ones that interest us in the previous step.

## Try it out
You can run the usual *docker run* command:

    docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config demo:latest -c /mnt/config --feed-sel compute

You should now see the resulting files in *data/btl-connected-airports*.
Great! Now we have names and coordinates of destination airports.
Now we are just missing the coordinates of Bern Airport. 
Let's add them in the next step.
