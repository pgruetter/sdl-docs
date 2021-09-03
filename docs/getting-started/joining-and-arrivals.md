---
sidebar_position: 5
title: Get Departure and Arrival Coordinates
description: My document description
---

## Goal

Extend join_departures_airports action

## Define output object
btl_connected_airports

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
    }, {
    type = SQLDfsTransformer
    code = {
    btl_connected_airports = """select btl_departures_airports.dep_name, arrs.name as arr_name,
    btl_departures_airports.estdepartureairport, btl_departures_airports.estarrivalairport,
    btl_departures_airports.dep_latitude_deg, btl_departures_airports.dep_longitude_deg,
    arrs.latitude_deg as arr_latitude_deg, arrs.longitude_deg as arr_longitude_deg
    from btl_departures_airports join stg_airports arrs on btl_departures_airports.estArrivalAirport = arrs.ident"""
    }
    }
    ]
    metadata {
    feed = compute
    }
    }

Explain transformation input to the next, in the same action.
Action vs transformation

## Try it out

    docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config demo:latest -c /mnt/config --feed-sel compute
Same command.
Sample config for this step:
