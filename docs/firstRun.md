---
id: firstRun
title: First Run
sidebar_label: First Run
---
To run the example, you should have a jar file (see [Build](build.md)) and the application.conf (see [First Config](firstConfig.md)).

1. For simplicity, put all files in one working directory: The smartdatalake-jar-with-dependencies, the application.conf and the sample CSV file.
   You will notice that the path for the input CSV file wasn't specified, so it's expected to be found in the current working directory.
1. Execute the feed:

   `java -jar smartdatalake-jar-with-dependencies.jar --feed-sel getting-started`

   Change the jar filename accordingly, it will contain the version number.

1. Check to see if the target folder was created and contains the Excel file.

Note, that you need to run the jar file with Java 8 (or higher).

Use `--help` to see additional command line parameters and options.

The `-c` option for example can be used to define one or more locations of your configurations files, if SDLB should not look for the application.conf resource in your classpath.
You can define configuration files directly or directories which contain multiple configuration files.
If a directory is given, all configuration files found in this directory and its subdirectories will be merged together.

If you placed the CSV file in another directory, you need to define its location in your application.conf instead of just providing the name of the CSV file.

## What just happened?
As you can see from the log written, a lot has happened in this simple example already.

First, SDLB read your `application.conf` since we didn't specify another filename and parsed its content. 
Then, given the feed name `getting-started`, SDLB looked for any actions matching this feed name and found one.
It builds up a DAG (directed acyclic graph) which in this case only consists of a Start node and the one action.

Each run constists of different stages which will be explained in more detail later. 
Interesting here is the init phase where SDLB performs the early validation to see if the source file is here and accessible.
If it can't find the file, it's not even starting with processing and stops after a few seconds.

Once the init phase is finished, the CSV file is ready, converted to a Spark DataFrame and finally written to the Excel file.


That's it!   
You just successfully ran your first Smart Data Lake feed.