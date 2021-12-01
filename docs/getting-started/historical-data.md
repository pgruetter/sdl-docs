---
title: Keeping historical data
---

## Goal

Data generally can be split into two groups:
- Master data: data about objects that evolve over time, e.g. an airport, a person, a product... 
- Transactional data: data about events that took place at a certain point in time, e.g. a flight, payment... 

To keep historical data for these categories different strategies are applied:
- *Master data* should be historized - this means to track the evolution over time by introducing a time dimension. 
  Usually this is modelled with two additional attributes "valid_from" and "valid_to", where "valid_from" is an additional primary key column.
- For *transactional data* normally only the latest state of a specific event is of interest. If an update for an event occurs, the previous information is discarded (or consolidated in special cases).
  Additional care must be taken to keep all historical events, even if they are no longer present in the source system. Often specific housekeeping rules are applied (e.g. retention period), either for legal or cost saving purpose.

## Historization of airport data

## Deduplication of flight data