---
id: firstRun
title: First Run
sidebar_label: First Run
---

1. For simplicity, put all files in one working directory: The smartdatalake-jar-with-dependencies, the application.conf and the sample CSV file.
1. Execute the feed:

   `java -jar smartdatalake-jar-with-dependencies.jar --feed-sel getting-started`

1. Check to see if the target folder was created and contains the Excel file.

Note, that you need to run the jar file with Java 8 (or higher).

Use `--help` to see additional command line parameters and options.

The `-c` option for example can be used to define one ore more locations of your configurations files, if SDLB should not look for the application.conf resource in your classpath.
You can define configuration files directly or directories which contain configuration files.
If a directory is given, all configuration files found in this directory and it's subdirectories will be merged together.

If you placed the CSV file in another directory, you need to define it's location in your application.conf instead of just providing the name of the CSV file.

That's it!   
You just successfully ran your first Smart Data Lake feed.