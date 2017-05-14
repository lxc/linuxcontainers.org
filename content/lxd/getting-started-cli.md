![Logo](/static/img/containers.png)

# Installing LXD and the command line tool

The simplest way to get the latest version of LXD is to install the snap
package. This will work regardless of what operating system release you have
installed. Just check that [snap support is installed](https://snapcraft.io/docs/core/install),
then run:

    sudo snap install lxd

It should be noted that the server certificate generation can take a long time
if you're working on a device like the rpi2 so it might be a few minutes before
LXD will respond to the lxc command.

## Classic packages for Ubuntu desktop and server
Ubuntu 16.04 LTS users can install LXD with:

    apt-get install lxd

Ubuntu 14.04 LTS users can also install LXD using backports:

    apt-get -t trusty-backports install lxd

Alternatively, to get the latest upstream release, a PPA is available:

    add-apt-repository ppa:ubuntu-lxc/lxd-stable
    apt-get update
    apt-get dist-upgrade
    apt-get install lxd

The package creates a new "lxd" group which contains all users allowed to talk to  
lxd over the local unix socket. All members of the "admin" and "sudoers" groups are automatically added.  
If your user isn't a member of one of these groups, you'll need to manually add your user to the "lxd" group.

Because group membership is only applied at login, you then either need to close  
and re-open your user session or use the "newgrp lxd" command in the shell you're going to interact with lxd from.

    newgrp lxd

Then to do the initial configuration of the LXD daemon, including, if you want to, setting up optimized storage (ZFS),  
making the deamon visible on the network and configuring networking for the containers:

    sudo lxd init

## Classic packages for other distributions
There are currently packages for multiple distributions including Gentoo and, of course, Ubuntu.  
Users of other distributions might find it in their package manager too.

If it is not there yet please download and build LXD from git or use our latest release tarball.

Instructions for both are available [here](/lxd/downloads/).

# Importing some images
LXD is image based. Containers must be created from an image and so the image store  
must get some images before you can do much with LXD.

There are three ways to feed that image store:

 1. Use a remote LXD as an image server
 2. Use the built-in image remotes
 3. Manually import one using

        lxc image import <file> --alias <name>

## Using a remote LXD as an image server
Using a remote image server is as simple as adding it as a remote and just using it:

    lxc remote add images 1.2.3.4
    lxc launch images:image-name your-container

An image list can be obtained with:

    lxc image list images:

## Using the built-in image remotes
LXD comes with 3 default remotes providing images:

 1. ubuntu: (for stable Ubuntu images)
 2. ubuntu-daily: (for daily Ubuntu images)
 3. images: (for a bunch of other distros)

To start a container from them, simply do:

    lxc launch ubuntu:14.04 my-ubuntu
    lxc launch ubuntu-daily:16.04 my-ubuntu-dev
    lxc launch images:centos/6/amd64 my-centos

## Manually importing an image
If you already have a lxd-compatible image file, you can import it with:

    lxc image import \<file\> --alias my-alias

And then start a container using:

    lxc launch my-alias my-container

See the [image specification for more details](https://github.com/lxc/lxd/blob/master/doc/image-handling.md).

# Creating and using your first container
Assuming that you imported an Ubuntu cloud image using the "ubuntu" alias, you can create your first container with:

    lxc launch ubuntu first

That will create and start a new ubuntu container as can be confirmed with:

    lxc list

Your container here is called "first". You also could let LXD give it a random name by  
just calling "lxc launch ubuntu" without a name.

Now that your container is running, you can get a shell inside it with:

    lxc exec first -- /bin/bash

Or just run a command directly:

    lxc exec first -- apt-get update

To pull a file from the container, use:

    lxc file pull first/etc/hosts .

To push one, use:

    lxc file push hosts first/tmp/

To stop the container, simply do:

    lxc stop first

And to remove it entirely:

    lxc delete first

# Multiple hosts
The "lxc" command line tool can talk to multiple LXD servers.  
It defaults to talking to the local one using a local UNIX socket.

Remote operations require the following two commands having been run on the remote server:

    lxc config set core.https_address "[::]"
    lxc config set core.trust_password some-password

The first tells LXD to bind all addresses on port 8443.  
The latter sets a trust password to be used when contacting that server.

Now to talk to that remote LXD, you can simply add it with:

    lxc remote add host-a <ip address or DNS>

This will prompt you to confirm the remote server fingerprint and then ask you for the password.

And after that, use all the same command as above but prefixing the container  
and images name with the remote host like:

    lxc exec host-a:first -- apt-get update
