---
title: Get Airports
---

## Goal

In this step, we will download airports master data from the website described in [setup](getting-started/setup.md) using Smart Data Lake Builder.
Because this step is very similar to the previous, we will make some "mistake" on purpose to demonstrate how to deal with config errors.

Just like in the previous step, we need one action and two DataObjects.
Except for the object and action names, the config to add here is almost identical to the previous step.

You are welcome to try to implement it yourself before continuing. Just as in the previous step,
you can use "download" as feed name.

## Solution
You should now have a file similar to [this](application-download-part1.conf) one.
The only notable difference is that you needed to use the type **CsvFileDataObject** for the airports.csv file,
though you would not get an error at this point if you had chosen another file format, since we interpret the content of it yet.

You can start the same *docker run* command as before and you should see that both directories
stg-airports and stg-departures have new files.
Notice that since both actions have the same feed, the option *--feed-sel download* executes both of them.

## Mess Up the Solution
Now replace your config with the contents of [this](application-download-part1-errors.conf) link.
When you start the *docker run* command again, you will see two errors:

1. The name of the DataObject "NOPEext-departures" does not match with the inputId of the action download-departures.
This is a very common error and the stacktrace should help you to quickly find and correct it


    Exception in thread "main" io.smartdatalake.config.ConfigurationException: (Action~download-departures) [] key not found: DataObject~ext-departures

2. An unknown DataObject type was used. In this example, stg-airports was assigned the type UnicornFileDataObject, which does not exist.


    Exception in thread "main" io.smartdatalake.config.ConfigurationException: (DataObject~stg-airports) ClassNotFoundException: io.smartdatalake.workflow.dataobject.UnicornFileDataObject

## Try fixing it

Try to fix one of the errors and keep the other one to see what happens: Nothing.
Why is that? 

SDL validates your configuration file before executing it's contents.
If the file does not make sense, it will abort before executing anything to minimize the chance that you'll end up in an inconsistent state.

SDL is built do detect configuration errors as early as possible (early-validation). It does this by going through several phases.
1. Validate configuration - validate superfluous attributes, missing mandatory attributes, attribute content and consistency when referencing other configuration objects.
2. *Prepare* run - validate preconditions, e.g. connections and existence of tables and directories.
3. *Init* run - executes the whole feed *without any data* to spot incompatibilities between the Data Objects that cannot be spotted
   by just looking at the config file. For example a column which doesn't exist but is referenced in a later Action will fail the init phase.
4. *Exec* run - only if all previous phases have been passed successfully, execution is started.

When running SDL, you can find "prepare", "init" and "exec" steps for every Action mentioned in the logs.

Early-validation will become more and more valuable with the increasing complexity of your data pipelines.
Speaking of increasing complexity: In the next step, we will begin tranforming our data.



