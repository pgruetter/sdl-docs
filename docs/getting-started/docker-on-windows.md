---
id: docker-on-windows
title: Notes for Windows Users
---

## Free Docker alternative for Windows
You can use Docker Desktop for Windows together with Windows command line or Windows Linux Subsystem (WSL2) for this tutorial. But note that Docker Desktop for Windows needs a license for commercial use
beginning of 2022.

There is a free alternative for Linux or WSL2 called Podman from Redhat, which has a compatible command line and also the Dockerfiles are compatible, see [podman.io](https://podman.io/).
Further advantages are that Podman is more lightweight - it doesn't need a service and root privileges to run containers.
Install podman on WSL2 Ubuntu:

    . /etc/os-release
    echo "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${VERSION_ID}/ /" | sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list
    curl -L "https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${VERSION_ID}/Release.key" | sudo apt-key add -
    sudo apt-get update
    sudo apt-get -y upgrade
    sudo apt-get -y install podman

## Using podman compose
For [part 2 of this guide](delta-lake-format), you need docker compose.
For Windows, you can use the altenative podman compose.
Install podman-compose for podman in WSL2:

    sudo apt install python3-pip
    sudo pip3 install podman-compose

After starting `podman-compose up` in the getting-started folder you should now be able to open Polynote on port localhost:8192, as WSL2 automatically publishes all ports on Windows.
If the port is not accessible, you can use `wsl hostname -I` on Windows command line to get the IP adress of WSL, and then access Polynote over {ip-address}:8192.



