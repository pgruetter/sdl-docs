---
title: Get Departures
---

## Goal

In this step, we will download plane departures data from the REST-Interface described in the previous step using Smart Data Lake Builder.

## Config File

With Smart Data Lake Builder, you describe your data-pipelines in a config-file using the [HOCON](https://github.com/lightbend/config/blob/master/HOCON.md) format.
You can also have split up your configuration accross multiple files, but in this Part, we will only use one file.

A data pipeline is composed of two entities: *DataObjects* and *Actions*.

An action transforms one (or multiple) DataObject into another (or multiple) DataObject.
In every data pipeline, you will have at least one *DataObject* for your input and one for your output.
If you have more than one action, you will also have at least one *DataObject* for each intermediary step between two actions.

In our case, in order to get our departures data, we are going to build one action. Hence we need one dataObject for our input, and one for our output.
Create a directory called config and in your current working directory and an empty file called application.conf. This is where we will define our data pipeline.

## Define departures objects
Add this to the file:

    dataObjects {
      ext-departures {
        type = WebserviceFileDataObject
        url = "https://opensky-network.org/api/flights/departure?airport=LSZB&begin=1630200800&end=1630310979"
      }
      stg-departures {
        type = JsonFileDataObject
        path = ext-departures
      }
    }

Here, we first created the DataObjects section. This section will contain our DataObjects of our pipeline.
Inside, we defined two DataObjects:
- ext-departures: the datasource where we get our data. We set it's type to WebserviceFileDataObject to tell SDL that
it should look for a file on the web. And we provide the url.
- stg-departures: our download of that file. Type JsonFileDataObject tells SDL that the file format is JSON and *path = stg-departures*
tells it to download it to a directory with that name. You could choose any name you want, but most of the time, the name of your dataObject is a good fit.
We defined a relative path - it is relative to the working directory SDL is started in.

- TODO use {~id }^somewhere? dataObjectId?

A quick note on our naming conventions: We typically follow some conventions when naming our dataObjects and actions.
It follows the layering conventions of the structured Data Lake :
- External dataObjects are prefixed with "ext",
- Your first action typically copies the data into the Data Lake, without making any changes. This layer is called the *Staging Layer*.
DataObjects of the staging layer are prefixed with "stg".
- When applying some basic transformation to your data that does not require any specific business logic, you store the result in the *Integration Layer*. 
Some of these transformations are Data Deduplication, Historization and Format Standardization.
DataObjects of the Integration Layer are prefixed with "int".
- When applying business logic to your data, you store the result in the *Business Tranformation Layer*.
DataObjects of the Business Transformation Layer are prefixed with "btl".

In our case, we simply copy the data exactly as is. Hence, our output dataObject belongs to the Staging-Layer.

## Define download-ext-departures
After the dataObjects section, put this to the file:

    actions {
        download-departures {
          type = FileTransferAction
          inputId = ext-departures
          outputId = stg-departures
          metadata {
            feed = download
          }
        }
    }

We added another section called actions, in which, you guessed it, all actions reside.
We defined our action and called it *download-departures*.
- The type *FileTransferAction* tells SDL that it should transfer a file from one place to another.
In our case, from a location on the web to a place on your machine.
- With inputId and outputId, we wire this action and the two dataObjects together.
- Finally, we added some metadata to our action. Metadata is often used to select the actions run.
In our case, we defined a feed called "download". When starting SDL, we can tell it to execute only actions corresponding to certain feeds.
Multiple actions can be associated with the same feed. You can think of feeds as group of actions in your data pipeline, typically processing a data type through all layers.
You can group together actions into the same feed if you want to execute them together. We will come back to feeds as our pipeline gets more complex.


## Try it out

Let's execute our action. We now come back to a similar *docker run* command as in the [setup step](getting-started/setup.md) of our guide.
The only difference is that we mount 2 volumes instead of one and specify the path to your config-file.
Before, we only mounted the data folder so that you could see the results of the execution on your machine.
The config file that was being used was located inside the docker image.
This time, we add another volume with your config-file and tell SDL to use it with the *--config* option.

    docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config smart-data-lake/gs1:latest --config /mnt/config --feed-sel download

After executing it, you will see the file *data/stg_departures/result.json* has been replaced with the output of your pipeline.

:::info
Since both web-servers are freely available on the internet, they might restrict your traffic if you try to download the same file over and over again.
:::

**Congratulations!** You just executed your first feed! Now let's get our second input data source...


