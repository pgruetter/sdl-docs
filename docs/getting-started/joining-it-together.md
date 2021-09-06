---
title: Joining It Together
---

## Goal
In this step we will finally join both data sources together.
We will continue based upon the config file available [here](application-download-part1-cols.conf).
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
    inputIds = [stg_departures, stg_airports]
    outputIds = [btl_connected_airports]
    transformers = [{
    type = SQLDfsTransformer
    code = {
    btl_departures_airports = """select deps.name as dep_name,
    stg_departures.estdepartureairport, stg_departures.estarrivalairport,
    deps.latitude_deg as dep_latitude_deg, deps.longitude_deg as dep_longitude_deg
    from stg_departures join stg_airports deps on stg_departures.estDepartureAirport = deps.ident"""
    }
    }
    ]
    metadata {
    feed = compute
    }
    }
Explain CustomSparkAction,SQLDfsTransformer
Explain other feed
Explain name referencing in the config


## Try it out

    docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config demo:latest -c /mnt/config --feed-sel compute
Explanation command, other feed.

You should see a file named ... in your pwd
Arrivals are missing let s add them
