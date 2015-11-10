# Installing LXD and the command line tool
## Ubuntu desktop and Ubuntu server
As LXD evolves quite rapidly, we recommend Ubuntu users use our PPA:

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

## Ubuntu Core (snappy)
LXD is available for Ubuntu Core as a Snap package in the store.  
You can install it with:

    sudo snappy install lxd.stgraber

After that, LXD can be interacted with through the "lxc" and "lxd-images" commands.

Users of older version of Snappy (current rpi2 image at least) may have to do:

    sudo ln -sf $(find /var/lib/apps/lxd/ -maxdepth 1 -type d | tail -1) /var/lib/apps/lxd/current
    sudo systemctl restart $(systemctl -a | grep lxd_lxd.*service | awk '{print $1}')

If you end up having to do the above, note that you likely will have to do so with every subsequent update of LXD  
until the snappy tools are updated on your device through a new system image.

## Other distributions
There are currently packages for multiple distributions including Gentoo and, of course, Ubuntu.  
Users of other distributions might find it in their package manager too.

If it is not there yet please download and build LXD from git or use our latest release tarball.

Instructions for both are available [here](/lxd/downloads).

# Importing some images
LXD is image based. Containers must be created from an image and so the image store  
must get some images before you can do much with LXD.

There are three ways to feed that image store:

 1. Use a remote LXD as an image server
 2. Use the lxd-images script to import an image from a non-LXD source
 3. Manually import one using "lxc image import \<file\> --alias \<name\>"

## Using a remote LXD as an image server
Using a remote image server is as simple as adding it as a remote and just using it:

    lxc remote add images images.linuxcontainers.org
    lxc launch images:centos/7/amd64 centos

An image list can be obtained with:

    lxc image list images:

## Using lxd-images to import an image
lxd-images is a python script which knows about non-LXD image servers
and can pull and import images for you.

It currently supports two sources:

 1. A local busybox image made from your existing busybox binary (used for testing)
 2. Ubuntu cloud images taken from the official simplestream feed

Importing a new image can be done with:

    lxd-images import busybox --alias busybox
    lxd-images import ubuntu --alias ubuntu

And then simply using the image to start containers:

    lxc launch busybox my-busybox
    lxc launch ubuntu my-ubuntu

## Manually importing an image
If you already have a lxd-compatible image file, you can import it with:

    lxc image import \<file\> --alias my-alias

And then start a container using:

    lxc launch my-alias my-container

See the [image specification for more details](https://github.com/lxc/lxd/blob/master/specs/image-handling.md).

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

    lxc config set core.https_address [::]
    lxc config set core.trust_password some-password

The first tells LXD to bind all addresses on port 8443.  
The latter sets a trust password to be used when contacting that server.

Now to talk to that remote LXD, you can simply add it with:

    lxc remote add host-a <ip address or DNS>

This will prompt you to confirm the remote server fingerprint and then ask you for the password.

And after that, use all the same command as above but prefixing the container  
and images name with the remote host like:

    lxc exec host-a:first -- apt-get update
