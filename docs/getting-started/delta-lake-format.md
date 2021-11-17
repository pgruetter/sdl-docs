---
title: Delta Lake - a better data format
---

## Goal

Up to now we have used CSV with CsvFileDataObject as file format. We will switch to a more modern data format in this step which supports a catalog, compression and even transactions.

## File formats

Smart Data Lake Builder has built in support for many data formats and technologies. 
An important one is storing files on a Hadoop filesystem, supporting standard file formats such as CSV, Json, Avro, Parquet.
In Part 1 we have used CSV through the CsvFileDataObject. Csv files can be easily checked in a editor or excel, but the format also as many problems, e.g. support of multi-line strings or lack of data type definition.
Often Parquet format is used, as it includes a schema definition and is very space efficient through its columnar compression.

## Catalog

Just storing files on Hadoop filesystem makes it difficult to use them in a SQL engine such as Spark SQL. You need a metadata layer on top which stores table definitions. This is also called a metastore or catalog.
If you start a Spark session, a configuration to connect to an external catalog can be set, or otherwise Spark creates an internal catalog for the session.
We could register our CSV files in this catalog by creating a table via a DDL-statement, including the definition of all columns, path and format of our data.
But you could also directly create and write into a table by using Spark Hive tables. 
Smart Data Lake Builder supports this by the HiveTableDataObject. It always uses Parquet file format in the background as a best practice, although Hive tables could also be created on top of CSV files.

:::info
Hive is a Metadata layer and SQL engine on top of a Hadoop filesystem. Spark uses the metadata layer of Hive, but implements its own SQL engine.
:::

## Transactions

Hive tables with Parquet format are lacking transaction. This means for example that writing and reading the table at the same time could result in failure or empty results. 
In consequence 
* consecutive jobs needs to by synchronized
* it's not recommended having end-user accessing the table while data processing jobs are running
* update and deletes are not supported

There are other options like classical databases which always had a metadata layer, offer transactions but don't integrate with Hive metastore and cheap Hadoop file storage.
Nevertheless, Smart Data Lake Builder supports classical databases through the JdbcTableDataObject.
Fortunately there is a new technology called Delta Lake, see also [https://delta.io/](delta.io). It integrates in Hive metastore, supports transactions and stores Parquet files and a transaction log on hadoop filesystems.
Smart Data Lake Builder supports this by the DeltaLakeTableDataObject, and this is what we are going to use for our airport and departure data now.

## DeltaLakeTableDataObject

Switching to Delta Lake format is easy with Smart Data Lake Builder, just replace CsvFileDataObject with DeltaLakeTableDataObject, and define the table's name:

    int-airports {
        type = DeltaLakeTableDataObject
        path = "~{id}"
        table = {
            db = default
            name = int_airports
        }
    }

Then create a similar data object int-departure, and a new action prepare-departures to fill it:

    int-departures {
        type = DeltaLakeTableDataObject
        path = "~{id}"
        table = {
            db = default
            name = int_departures
        }
    }
    
    prepare-departures {
        type = CopyAction
        inputId = stg-departures
        outputId = int-departures
        metadata {
            feed = compute
        }
    }

Finally, adapt action join-departures-airports:
* change stg-departures to int-departure in inputIds of action join-departures-airports
* change stg_departures to int_departures in first SQLDfsTransformer

To run our data pipeline, first delete the data directory - otherwise DeltaLakeTableDataObject will fail because of existing files in different format.
Then you can execute the usual *docker run* command for all feeds:

    docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config demo:latest -c /mnt/config --feed-sel '.*'

## Reading Delta Lake Format with Spark

Checking our results gets more complicated now - we can't just open delta lake format in a text editor.
But if we could use SQL to query our results, that would be even better. This is possible by using a Spark session.
With spark-shell we could have an interactive command line Spark session, but state-of-the-art is to use notebooks like Jupyter for this.
One of the most advanced notebooks for Scala code we found is Polynote, see [https://polynote.org/](polynote.org).
We will now start Polynote in docker container, and in another container an external Metastore (Derby database) to share the catalog between our experiments and the notebook.
Run the following commands to do so:

    docker-compose build
    docker-compose run

You should now be able to open Polynote on port ...






