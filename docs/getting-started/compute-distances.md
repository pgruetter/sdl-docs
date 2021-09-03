---
sidebar_position: 6
title: Compute Distances
id: compute_distances
sidebar_label: Compute Distances
---

## Goal



## Define output object
btl_connected_airports

input

    btl_connected_airports {
    type = CsvFileDataObject
    path = connected-airports
    }
output


## Define compute_distances action

    compute_distances {
    type = CopyAction
    inputId = btl_connected_airports
    outputId = btl_distances
    transformer.class-name = com.sample.ComputeDistanceTransformer
    
        metadata {
          feed = compute
        }
}
Explain CustomTransformations.
Code in Repo, already in the Dockerfile


## Try it out

    docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config demo:latest -c /mnt/config --feed-sel .*
 Run the whole example feed .*

We made it!

## Coming Next in Part 2
Deduplication
Historization...
