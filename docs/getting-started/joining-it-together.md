---
title: Joining It Together
---

## Goal
So now we have data from departures in our stage layer, and we have cleaned data for airports in our integration layer.
In this step we will finally join both data sources together.
We will continue based on the config file available [here](config-examples/application-compute-part1-cols.conf).
At the end of the step, we will have all planes departing from Bern Airport
in the given timeframe along with their readable destination airport names, as well as geo-coordinates.

Like in the previous step, we need one more action and one DataObject for our output.

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

Now it gets interesting, a couple of things to note here:
- This time, we changed the Action Type from CopyAction to CustomSparkAction.
Use CustomSparkAction when you need to do complex operations. For instance, CustomSparkAction allows multiple inputs,
which CopyAction does not.
- Our input/output fields are now called inputId**s** and outputId**s** and that they take a list of DataObject ids.
- Instead of allowing for just one transformer, we could potentially have multiple transformers within the same action that
get executed on after the other. 
We don't use that for now and just add one transformer of type SQLDf**s**Transformer.
Again, the **s** is important, since it shows that multiple inputs/output Data Objects are possible.
We could also define a SQLDfTransformer that only knows one input and one output.
- Finally, it expects it's code as an object rather than as a string. This is due to the fact that you could have multiple
outputs, in which case you would need to name them in order to distinguish them.
In our case, there is only one output DataObject: *btl-connected-airports*.
The SQL-Code itself is just a join between the two input Data Objects on the ICAO identifier.
Note that we can just select all columns from airports, since we selected the ones that interest us in the previous step.

:::tip Tip: Use only one output
As you can see, with CustomSparkAction it's possible to read from multiple inputs and write to multiple outputs.
We usually discourage writing to multiple data objects in one action though. 
At some point, you will want to use the metadata from SDL to analyze your data lineage. If you have a CustomSparkAction
with multiple inputs and multiple outputs (m:n), SDL assumes that all outputs depends on all inputs. This might add
some dependencies between DataObjects that don't really exist in the CustomSparkAction.
Always using one data object as output will make your data lineage more detailed and clear.
:::

## Try it out
You can run the usual *docker run* command:

    docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config demo:latest -c /mnt/config --feed-sel compute

You should now see the resulting files in *data/btl-connected-airports*.
Great! Now we have names and coordinates of destination airports.
We are just missing the coordinates of Bern Airport. 
Let's add them in the next step.
