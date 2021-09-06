---
id: setup
title: Technical Setup
---

## Requirements

To run this example you just need two things:

- [Docker](https://www.docker.com/get-started)
- The [source code of the example](https://github.com/smart-data-lake/getting-started).


## Build docker image

- Download the source code of the example either via git or by [downloading the zip](https://github.com/smart-data-lake/getting-started/archive/refs/heads/master.zip) and extracting it.
- Open up a terminal and change to the folder with the source that contains the file called Dockerfile.
- Then run:


    docker build -t smart-data-lake/gs1 .

## Run docker image

Let's see smart datalake in action!
Then run the following commands in the same terminal: to see  :

    mkdir data
    docker run --rm -v ${PWD}/data:/mnt/data smart-data-lake/gs1:latest --feed-sel download

This creates a folder in the current directory named *data* and then 
executes a simple data pipeline that downloads two files from two different websites into that directory.

When the execution is complete, you should see them in the *data* folder.
Wonder what happened ? You will create the data pipeline that does just this in the first steps of this guide.

**Congratulations!** You're now all setup! Head over to the next step to analyse these files...