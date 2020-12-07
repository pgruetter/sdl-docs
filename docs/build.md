---
id: build
title: Build
sidebar_label: Build
---

Smart Data Lake Builder is build using [Apache Maven](https://maven.apache.org/).
To build the project, simply clone the GitHub repository and run `mvn install`.
This will resolve all dependencies and build a JAR file to run Smart Data Lake Builder.

### Build Dependencies
Version 1.x
- *Spark 2.4*
- JDK 8 (Spark 2 doesn't support JDK 9 or higher)
- Scala 2.11 or 2.12
- Maven 3.0 (or higher)

Version 2.x
- *Spark 3.x*
- JDK >= 8
- Scala 2.12 (Spark 3 doesn't support scala 2.11 anymore)
- Maven 3.0 (or higher)

### Building JAR with Runtime Dependencies
To generate a JAR file which includes all dependencies, use the profile **fat-jar** which is defined in the pom.xml. Run Maven with `mvn -Pfat-jar package` in this case.
If you don't want to handle dependencies yourself, build Smart Data Lake Builder with this profile now and use it to run the following examples.
You may also choose to activate the profiles hadoop-3.2 (only for Spark 3.x, default ist Hadoop 2.7) and scala-2.11 or scala-2.12 (only for Spark 2.4).
