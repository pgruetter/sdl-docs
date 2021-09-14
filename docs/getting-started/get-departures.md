---
title: Get Departures
---

## Goal

In this step, we will download plane departure data from the REST-Interface described in the previous step using Smart Data Lake Builder.

:::info Smart Data Lake = SDL
Throughout this documentation, we will mostly refer to *SDL* which is just short for *Smart Data Lake*
:::

## Config File

With Smart Data Lake Builder, you describe your data pipelines in a config file using the [HOCON](https://github.com/lightbend/config/blob/master/HOCON.md) format.
All HOCON features are supported so you could also split your configuration into several files. But for this first part, let's just use one file.

A data pipeline is composed of at least two entities: *DataObjects* and *Actions*.

An action defines how one (or multiple) DataObject are copied or transformed into another (or multiple) DataObject.
In every data pipeline, you will have at least one *DataObject* for your input and one for your output.
If you have more than one action, you will also have at least one *DataObject* for each intermediary step between two actions.

In our case, in order to get our departure data, we are going to build one action. Hence, we need one DataObject for our input, and one for our output.
Create a directory called config in your current working directory and an empty file called application.conf. This is where we will define our data pipeline.

## Define departures objects
Add the following lines to your configuration file:

    dataObjects {
      ext-departures {
        type = WebserviceFileDataObject
        url = "https://opensky-network.org/api/flights/departure?airport=LSZB&begin=1630200800&end=1630310979"
      }
      stg-departures {
        type = JsonFileDataObject
        path = {~id}
      }
    }

Here, we first created the DataObjects section. This section will contain our DataObjects of our pipeline.
Inside, we defined two DataObjects to start with.

:::info
The names *ext-departures* and *stg-departures* are called DataObject-ID.
They uniquely define the data object and we will frequently refer to these IDs as does SDL, i.e. in error messages..

You will see further down, that actions also have a name that uniquely identifies them, they are called Action-ID.
:::

- ext-departures:  
This data object acts as a source in our action and defines where we get our departure information from.
We set its type to WebserviceFileDataObject to tell SDL that this is a webservice call returning a file.
SDL comes with a broad set of predefined data object types and can easily be extended. More on that later.
Each type of data object comes with its own set of parameters. For a WebserviceFileDataObject, the only mandatory one is the url, so we set that as well.

- stg-departures:  
This data object acts as a target for our first action, so where and how to download the file to.
We set type to JsonFileDataObject because we know from before that the webservice will return a json file.
Path defines, where the file will be stored. Instead of writing *stg-departures* again,
we used the placeholder *{~id}* which gets replaced by the DataObject-ID.
You could choose any name you want, but most of the time, the name of your dataObject is a good fit.
We defined a relative path - it is relative to the working directory SDL is started in. 
The working directory has been set to the *data* directory in the Dockerfile by setting the JVM Property 
      -Duser.dir=/mnt/data, 
so that's why all your relative paths will start in the *data* directory.

#### Naming Conventions
A quick note on our naming conventions: We typically follow some conventions when naming our data objects and actions.
It follows the layering conventions of our structured Smart Data Lake:
- External data objects are prefixed with "ext"
- Your first action typically copies the data into the Data Lake, without making any changes. 
This layer is called the *Staging Layer*.
DataObjects of the staging layer are prefixed with "stg".
- When applying some basic transformation to your data that does not require any specific business logic, you store the result in the *Integration Layer*. 
Some of these transformations are data deduplication, historization and format standardization.
DataObjects of the Integration Layer are prefixed with "int".
- When applying business logic to your data, you store the result in the *Business Tranformation Layer* or *BTL* for short.
DataObjects of the Business Transformation Layer are prefixed with "btl".

You are of course free to use any other naming conventions, but it's worth to think about one at the beginning of your project.

In our case, we simply copy data exactly as is from an external source. Hence, our output dataObject belongs to the Staging Layer.

## Define download-ext-departures
After the dataObjects section, add the following lines to your configuration file:

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
- The type *FileTransferAction* tells SDL that it should transfer a file from one place to another without any transformation.
In our case, from a location on the web to a place on your machine.
- With inputId and outputId, we wire this action and the two data objects together.
- Finally, we added some metadata to our action. Metadata is used to select the right actions to run. 
In our case, we defined a feed called "download". When starting SDL, we can tell it to execute only actions corresponding to certain feeds.
Multiple actions can be associated with the same feed. 
You can think of feeds as group of actions in your data pipeline, typically processing a data type through multiple layers.
You can group actions together into the same feed if you want to execute them together. 
We will come back to the concept of feeds as our pipeline gets more complex.

:::info
Metadata is not just used to select the right feeds.
Metadata can also help a lot in documenting your data pipelines and making its data lineage understandable and discoverable. 
:::


## Try it out

Let's execute our action. We now come back to a similar *docker run* command as in the [setup step](getting-started/setup.md) of our guide.
The only difference is that we mount 2 volumes instead of one and specify the path to your config file.
Before, we only mounted the data folder so that you could see the results of the execution on your machine.
The config file that was being used was located inside the docker image.
This time, we add another volume with your config-file and tell SDL to use it with the *--config* option.

    docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config smart-data-lake/gs1:latest --config /mnt/config --feed-sel download

After executing it, you will see the file *data/stg_departures/result.json* has been replaced with the output of your pipeline.

:::info
Since both web servers are freely available on the internet, they might restrict your traffic if you try to download the same file over and over again.
:::

In case you run into issues when executing your pipeline and you want to terminate the process
you can use this docker command to list the running containers:

    docker ps

While your feed-execution is running, it will contain
an execution with the image name *smart-data-lake/gs1:latest*.
Use the container id to stop the container by typing:
    
    docker containter stop <container id>


**Congratulations!** You just wrote your first configuration and executed your feed! Now let's get our second input data source...


