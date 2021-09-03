---
sidebar_position: 1
id: setup
title: Technical Setup
description: My document description

---

## Requirements

To run this example you just need two things:

- [Docker](https://www.docker.com/get-started)
- The source code of the example.


## Build docker image



    docker build -t demo .

## Run docker image

Change to the directory you want to work in.

Create in the current working dir two folders: data and config.

Run: 

    docker run --rm -v ${PWD}/data:/mnt/data -v ${PWD}/config:/mnt/config demo:latest -c /mnt/config --feed-sel download

You should see ...