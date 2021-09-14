---
title: Select Columns
---

## Goal

In this step we write our first Action that modifies data.
We will continue based upon the config file available [here](config-examples//application-download-part1.conf).
When you look at the data in the folder *data/stg-airports/result.csv*, you will notice that we
don't need most of the columns. In this step, we will write a simple *CopyAction* that selects only the columns we
are interested in.

As usual, we need to define an output DataObject and an action. 
We don't need to define a new input DataObject as we will wire our new action to the existing DataObject *stg-airports*. 

## Define output object

Let's use CsvFileDataObject again because that makes it easy for us to check the result.
In more advanced (speak: real-life) scenarios, we would use one of numerous other possibilities, 
such as HiveTableDataObject, SplunkDataObject...
See [this list](https://github.com/smart-data-lake/smart-data-lake/blob/develop-spark3/docs/Reference.md#data-objects) for an overview.
You can also consult the [API docs](https://smartdatalake.ch/docs/site/scaladocs/io/smartdatalake/workflow/dataobject/index.html) to see how to use all those Data Objects.

In a first step, we want to make the airport data more understandable by removing any columns we don't need. 
Since we don't introduce any business logic into the transformation, 
the resulting data object will reside in the integration layer and thus will be called *int-airports*.
Put this in the existing dataObjects section:

      int-airports {
        type = CsvFileDataObject
        path = int-airports
      }

## Define select-airport-cols action 

Next, add these lines in the existing actions section:

      select-airport-cols {
        type = CopyAction
        inputId = stg-airports
        outputId = int-airports
        transformer.sqlCode = "select ident, name, latitude_deg, longitude_deg from stg_airports"
        metadata {
          feed = compute
        }
      }

We just defined a new action called *select-airport-cols*. 
We wired it together with the two DataObjects *stg-airports* and *int-airports*.
A new type of Action was used: CopyAction. This action is intended to copy data from one data object to another
with an optional transformation of the data along the way.
There's different ways to define transformations, in this case we defined it through a sqlCode 
*"select ident, name, latitude_deg, longitude_deg from stg_airports"*

:::caution

Notice that we call our input DataObject stg-airports with a hyphen "-", but in the sql, we call it "stg\_airports" with an underscore "_".
This is due to SQL standard not allowing "-" in unquoted identifiers (e.g. table names). 
Under the hood, Apache Spark SQL is used to execute the query, which implements SQL standard.
SDL works around this by replacing special chars in DataObject names used in SQL statements for you. 
In this case, it automatically replaced "-" with "_"

:::

There are numerous other options available, which you can view in the [API Docs](http://smartdatalake.ch/docs/site/scaladocs/io/smartdatalake/workflow/action/CopyAction.html).



## Try it out
Note that we used a different feed this time, we called it *compute*. 
We will keep expanding the feed *compute* in the next few steps.
This allows us to keep the data we downloaded in the previous steps in our local files and just
try out our new actions.

To execute the pipeline, use the same command as before, but change the feed to compute:

    docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config smart-data-lake/gs1:latest --config /mnt/config --feed-sel compute

Now you should see multiple files in the folder *data/int-airports*. Why is it split accross multiple files?
This is due to the fact that the query runs with Apache Spark under the hood which computes the query in parallel for different portions of the data.
We might work on a small data set for now, but keep in mind that this would scale up horizontally for large amounts of data.

## More on Feeds

SDL gives you precise control on which actions you want to execute. 
For instance if you only want to execute the action that we just wrote, you can type

    docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config smart-data-lake/gs1:latest --config /mnt/config --feed-sel ids:select-airport-cols

SDL also allows you to use combinations of expressions to select the actions you want to execute. You can run

    docker run --rm smart-data-lake/gs1:latest --help

to see all options that are available.

One popular option is to use regular expressions to execute multiple feeds together.
In our case, we can run the entire data pipeline with the following command : 

    docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config smart-data-lake/gs1:latest --config /mnt/config --feed-sel .*

:::caution

In our tutorial, this command will only work if you already have some files under *data/stg-airports* and data/stg-departures.
This is because in the first step, we download files of which SDL doesn't know the schema of in advance.
The init-phase will require that for all Data Objects, the schema is known so that it can check for inconsistencies.
When we already have some files, it will infer the schema based on the files.
One way to prevent this problem is to explicitly provide the schema for the JSON and for the CSV-File, 
which is out of the scope of this part of the tutorial.

:::



## Example of Common Mistake

One common mistake is mixing up the types on Data Objects.
To give you some experience on how to debug your config, you can also try out what happens if you change the type of *stg-airports* to JsonFileDataObject.
You will get an error message which indicates that there might be some format problem, but it is hard to spot :

     Error: cannot resolve '`ident`' given input columns: [stg_airports._corrupt_record]; line 1 pos 7;

The FileTransferAction will save the result from the Webservice with the JsonFileDataObject as file with filetype \*.json. 
Then Spark tries to parse the CSV-records in the \*.json file with a JSON-Parser. It is unable to properly read the data.
However, it generates a column named *_corrupt_record* describing what went wrong. 
If you know Apache Spark, this column will look very familiar to you.
After that, the query fails, because it only finds that column with error messages instead of the actual data.

