---
sidebar_position: 3
title: Get Airports
description: My document description
---

## Goal

Download airports.csv
Download departures.
Include a config error to see how to debug.
Briefly explain that there is a pre-phase (link to main article).
Explain dag a bit
## Define airport objects
One input object, one output object:

input

    ext_airports {
        type = WebserviceFileDataObject
        url = "https://ourairports.com/data/airports.csv"
    }
output

    stg_airports {
    type = CsvFileDataObject
    path = ext_airports
    }

Explain namin briefly, link to page explaining layers

## Define download_airports action


    download_airports {
    type = FileTransferAction
    inputId = ext_airports
    outputId = stg_airports
    metadata {
    feed = download
    }
    }
Explain action
Explain feed


## Try it out

    docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config demo:latest -c /mnt/config --feed-sel download
:::danger Whoops!
This does not work, can you spot the mistake?

Explanation command
You should see a file named ... in your pwd