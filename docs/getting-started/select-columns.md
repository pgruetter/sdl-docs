---
title: Select Columns
---

## Goal

In this step write our first Action that modifies data.
We will continue based upon the config file available [here](application-download-part1.conf).
When you look at the data in the folder *data/stg-airports/result.csv*, you will notice that we
don't need most of the columns. In this step, we will write a simple CopyAction that selects only the columns we
are interested in.

As usual, we need to define an outputObject and an action. We don't need to define a new inputObject, 
we will wire our new action to the existing  *stg-airports* 

## Define output object

Let's use CsvFileDataObject again. There are numerous other possibilities, such as HiveTableDataObject, SplunkDataObject...
See [this list](https://github.com/smart-data-lake/smart-data-lake/blob/develop-spark3/docs/Reference.md#data-objects) for an overview.
We use CsvFileDataObjects in this part of the tutorial for simplicity.

We're buildiung our Integration Layer of airport data: We are performing a simple Action without any hardcore business logic involved.
Therefore, let's use int-airports as the name of the object.
Put this in the existing dataObjects section:

      int-airports {
        type = CsvFileDataObject
        path = int-airports
      }

## Define select-airport-cols action

Put this in the existing actions section:

      select-airport-cols {
        type = CopyAction
        inputId = stg-airports
        outputId = int-airports
        transformer.sqlCode = "select ident, name, latitude_deg, longitude_deg from stg_airports"
        metadata {
          feed = compute
        }
      }

We just defined a new action called select-airport-cols. We wired it together with the two dataObjects
stg-airports and int-airports.
We used a new type of Action: CopyAction. This action is intended to copy the data from one format to another,
where one transformation of the data can be done along the way.
We defined our transformation with the sqlCode *"select ident, name, latitude_deg, longitude_deg from stg_airports"*

:::caution

Notice that we call our input dataObject stg-airports with a hyphen "-", but in the sql, we call it "stg\_airports" with an underscore "_".
This is due to a limitation in spark, which is used under the hood to execute the query. It does not allow "-" in table names.
SDL works around this by replacing hyphens with underscores for you.

:::

Also note that we used a differente feed this time that we called *compute*. 
We will keep expanding the feed *compute* from now on.
This allows us to keep the data we downloaded in the previous steps in our local files and just
try out our new actions.

## Try it out

This time, we changed the feed to compute:

    docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config smart-data-lake/gs1:latest --config /mnt/config --feed-sel compute

Now you should see multiple files in the folder *data/int-airports*. Why is it split accross multiple files?
This is due to the fact that the query runs with spark under the hood which computes the query in parallel for different portions of the data.
We might work on a small data set for now, but keep in mind that this would scale up horizontally for large amounts of data.

If you want, you can also try out what happens if you change the type of *stg-airports* to JsonFileDataObject.
You will get an error message that hints that there might be some format problem, but it is hard to spot :

     Error: cannot resolve '`ident`' given input columns: [stg_airports._corrupt_record]; line 1 pos 7;

Since Spark tries to parse a CSV-File with a JSON-Parser, it is unable to properly read the data.
However, it generates a column named *_corrupt_record* describing what went wrong.
After that, the query fails, because it only finds that column with error messages instead of the actual data.

In the next step, we will join our data together.

