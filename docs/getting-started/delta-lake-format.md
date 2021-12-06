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

Hive tables with Parquet format are lacking transactions. This means for example that writing and reading the table at the same time could result in failure or empty results. 
In consequence 
* consecutive jobs needs to by synchronized
* it's not recommended having end-user accessing the table while data processing jobs are running
* update and deletes are not supported

There are other options like classical databases which always had a metadata layer, offer transactions but don't integrate easily with Hive metastore and cheap Hadoop file storage.
Nevertheless, Smart Data Lake Builder supports classical databases through the JdbcTableDataObject.
Fortunately there is a new technology called Delta Lake, see also [delta.io](https://delta.io/). It integrates in Hive metastore, supports transactions and stores Parquet files and a transaction log on hadoop filesystems.
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
* change stg-departures to int-departures in inputIds of action join-departures-airports
* change stg_departures to int_departures in first SQLDfsTransformer

To run our data pipeline, first delete the data directory - otherwise DeltaLakeTableDataObject will fail because of existing files in different format.
Then you can execute the usual *docker run* command for all feeds:

    docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config smart-data-lake/gs1:latest -c /mnt/config --feed-sel '.*'

## Reading Delta Lake Format with Spark

Checking our results gets more complicated now - we can't just open delta lake format in a text editor.
But if we could use SQL to query our results, that would be even better. This is possible by using a Spark session.
With spark-shell we could have an interactive command line Spark session, but state-of-the-art is to use notebooks like Jupyter for this.
One of the most advanced notebooks for Scala code we found is Polynote, see [polynote.org](https://polynote.org/).
We will now start Polynote in docker container, and in another container an external Metastore (Derby database) to share the catalog between our experiments and the notebook.
To do so, run the following commands in the projects root directory:
    
    docker-compose build
    mkdir -p data/_metastore
    docker-compose run

You should now be able to access Polynote at localhost:8192. But when you walk-through the Notebook "SelectingData", you wont see any tables & data yet. 
This is because your last pipeline run used an internal metastore, and not yet the external metastore we started with docker-compose.
To configure Spark to use our external metastore, add the following spark properties to the application.conf under global.spark-options:

    "spark.hadoop.javax.jdo.option.ConnectionURL" = "jdbc:derby://metastore:1527/db;create=true"
    "spark.hadoop.javax.jdo.option.ConnectionDriverName" = "org.apache.derby.jdbc.ClientDriver"
    "spark.hadoop.javax.jdo.option.ConnectionUserName" = "sa"
    "spark.hadoop.javax.jdo.option.ConnectionPassword" = "1234"

:::info Docker on Windows
You can use Docker Desktop for Windows together with Windows command line or Windows Linux Subsystem (WSL2) for this tutorial. But note that Docker Desktop for Windows needs a license for commercial use
beginning of 2022.

There is a free alternative for Linux or WSL2 called Podman from Redhat, which has a compatible command line and also the Dockerfiles are compatible, see [https://podman.io/](podman.io).
Further advantages are that Podman is more lightweight - it doesn't need a service and root privileges to run containers.
Install podman on WSL2 Ubuntu:

    . /etc/os-release
    echo "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${VERSION_ID}/ /" | sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list
    curl -L "https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${VERSION_ID}/Release.key" | sudo apt-key add -
    sudo apt-get update
    sudo apt-get -y upgrade
    sudo apt-get -y install podman

Install podman-compose for podman in WSL2:

    sudo apt install python3-pip
    sudo pip3 install podman-compose

After starting `sudo podman-compose up` in the getting-started folder you should now be able to open Polynote on port localhost:8192, as WSL2 automatically publishes all ports on Windows. 
If the port is not accessible, you can use "wsl hostname -I" on Windows command line to get the IP adress of WSL, and then access Polynote over {ip-adresse}:8192.
:::

When you run your data pipeline again, you need to add an additional parameter `--network getting-started_default` to join the virtual network where the metastore is located,
when using podman you need to join the pod where the metastore is located with `--pod getting-started`:

    docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config --network getting-started_default smart-data-lake/gs1:latest -c /mnt/config --feed-sel '.*'

or for podman

    podman run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config --pod getting-started smart-data-lake/gs1:latest -c /mnt/config --feed-sel '.*'

After you run your data pipeline again, you sould now be able to see our DataObjects data in Polynote.
[This](config-examples/application-deltalake-part2.conf) is how the final configuration file should look like. Feel free to play around.

:::tip Delta Lake tuning
You might have seen that our data pipeline with DeltaTableDataObject runs several times a Spark stage with 50 tasks.
This is delta lake reading it's transaction log with Spark. For our data volume 50 tasks are way too much.
You can reduce the number and speed up the execution by setting the following Spark property in your application.conf under "global.spark-options":

    "spark.databricks.delta.snapshotPartitions" = 2
:::

:::tip Spark UI from Polynote
On the right side of Polynote you find a link to the Spark UI for the current notebooks Spark session. 
If it doesn't work try to replace 127.0.0.1 with localhost, if it still doesn't work replace with IP Adress of WSL ("wsl hostname -I"). 
:::

In the next step we are going to care about historical data...