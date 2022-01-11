---
id: executionPhases
title: Execution Phases
---

:::warning
This page is under review and currently not visible in the menu.
:::

### Execution phases - early validation
Execution of a SmartDataLakeBuilder run is designed with "early validation" in mind. This means it tries to fail as early as possible if something is wrong.
Execution therefore involves the following phases.
1. Parse configuration: configuration is parsed and validated
2. DAG prepare: Preconditions are validated. This includes testing Connections and DataObject structures which must exists.
3. DAG init: Lineage of Actions according to the DAG is created and validated. For Spark Actions this involves the validation of the DataFrame lineage. A column which doesn't exist but is referenced in a later Action will fail the execution.
4. DAG exec: Execution of Actions, data is effectively (and only) transferred during this phase.
