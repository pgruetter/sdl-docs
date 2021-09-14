---
title: Compute Distances
---

## Goal

In this part, we will compute the distances between departure and arrival airports
so that our railway enthousiast Tom can see which planes could be replaced by rail traffic.


## Define output object
Let's define our final output object for this part:

      btl-distances {
        type = CsvFileDataObject
        path = btl-distances
      }


## Define compute_distances action

How to we compute the distances ? 
The answer is in the file *src/main/scala/com/sample/ComputeDistanceTransformer.scala*.
SDL allows you to write custom code and reference it in the config.
This gives you great flexibility for cases with specific business logic, such as this one.
We have one input and one output: therefore our custom class is a *CustomDfTransformer*.
It takes the input dataframe *df* and calls a User Defined Function called *calculateDistanceInKilometerUdf*
to do the computation.
It expects the column names dep_latitude_deg, dep_longitude_deg, arr_latitude_deg and arr_longitude_deg in the input.
This matches the column names we used in the SQL-Code in the last-step.
We won't go into the details of the Udf. 
You can follow this [stackoverflow link](https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula)
if you want to learn more.

Finally, the transformation writes the result into a column called distance.
It also adds a column *could_be_done_by_rail* to the output that simply checks if the distance is smaller than 500 km.

In order to wire this CustomTransformation into our config, we add the following action:

      compute_distances {
        type = CopyAction
        inputId = btl-departures-arrivals-airports
        outputId = btl-distances
        transformer.class-name = com.sample.ComputeDistanceTransformer
    
        metadata {
          feed = compute
        }
      }

We used a CopyAction and told it to execute the code in the class *com.sample.ComputeDistanceTransformer*.
We could also have used a CustomSparkAction like in the previous step, 
but this would have required more to write since it requires lists of inputs, outputs and transformers.


## Try it out

You can execute the usual *docker run* command :

    docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config demo:latest -c /mnt/config --feed-sel compute

Under *data/btl-distances* you can now see the final result. 

### The Execution DAG

In the console, you probably started noticing some ASCII Art that looks like this:

                         ┌─────┐
                         │start│
                         └┬──┬─┘
                          │  │
                          │  └───────────────────┐
                          v                      │
     ┌─────────────────────────────────────────┐ │
     │select-airport-cols SUCCEEDED PT4.421793S│ │
     └───────────────┬─────────────────────────┘ │
                     │                           │
                     v                           v
     ┌──────────────────────────────────────────────┐
     │join_departures_airports SUCCEEDED PT2.938995S│
     └──────────────────────┬───────────────────────┘
                            │
                            v
       ┌────────────────────────────────────────┐
       │compute_distances SUCCEEDED PT1.160045S│
       └────────────────────────────────────────┘

This is the Execution DAG of our data pipeline. 
It shows you how SDL determined that the Data Objects and actions should be wired together.
If you don't get the results you expect, it's good to check if the DAG looks correct.

**Congratulations!**
You successfully recreated the conf-file that is contained in the Docker Image, that you ran in the first step.
If you look at [the docker command on the first step](setup.md), you will notice that there was no path specified for the conf-file.
Per default, SDL looks for the config under *src/main/resources*, which is also part of the Docker Image that you created.


## Coming Next in Part 2
Deduplication, Historization...
