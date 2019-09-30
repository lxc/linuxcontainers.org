
# Installation
## Choose your release
LXD upstream maintains three release branches in parallel:

 * LTS release (LXD 3.0.x or LXD 2.0.x)
 * Feature releases (LXD 3.x)

LTS releases are recommended for production environments as they will benefit from regular bugfix
and security updates but will not see new features added or any kind of behavioral change.

To get all the latest features and monthly updates to LXD, use the feature release branch instead.

## Getting the packages
### Alpine Linux
To install the feature branch of LXD, run:

    apk add lxd

### ArchLinux
Instructions on how to use the AUR package for LXD can be [found here](https://wiki.archlinux.org/index.php/LXD)

Alternatively, the snap package can also be used on ArchLinux (see below).

### Fedora
Instructions on how to use the COPR repository for LXD can be [found here](https://copr.fedorainfracloud.org/coprs/ganto/lxd/).

Alternatively, the snap package can also be used on Fedora (see below).

### Gentoo
To install the feature branch of LXD, run:

    emerge --ask lxd

### Ubuntu
#### Ubuntu (all releases)
The recommended way to install LXD these days is with the snap.

For the latest stable release, use:

    snap install lxd

For the LXD 3.0 stable release, use:

    snap install lxd --channel=3.0/stable

For the LXD 2.0 stable release, use:

    snap install lxd --channel=2.0/stable

If you previously had the LXD deb package installed, you can migrate all your existing data over with:

    lxd.migrate

#### Ubuntu 14.04 LTS (LXD 2.0 deb)
To install the LTS branch of LXD, run:

    apt install -t trusty-backports lxd lxd-client

#### Ubuntu 16.04 LTS (LXD 3.0 deb)
To install the LTS branch of LXD, run:

    apt install lxd lxd-client

To install the feature branch of LXD, run:

    apt install -t xenial-backports lxd lxd-client

### Snap package (ArchLinux, Debian, Fedora, OpenSUSE and Ubuntu)
LXD upstream publishes and tests a snap package which works for a number of Linux distributions.

The list of Linux distributions we currently test our snap for can be [found here](https://jenkins.linuxcontainers.org/job/lxd-test-snap-latest-stable/).

For those distributions, you should first install snapd using [those instructions](https://snapcraft.io/docs/core/install).

After that, you can install LXD with:

    snap install lxd

Alternatively, pass `--channel=3.0/stable` for the LXD 3.0 LTS release or `--channel=2.0/stable` for the LXD 2.0 LTS release.

### MacOS builds
LXD upstream publishes builds of the LXD client for macOS through [Homebrew](https://brew.sh/).

To install the feature branch of LXD, run:

    brew install lxc

### Windows builds
Native builds of the LXD client for Windows can be [found here](https://ci.appveyor.com/project/lxc/lxd/branch/master/artifacts).

### Installing from source
Instructions on building and installing LXD from source [can be found here](https://github.com/lxc/lxd/).

# Initial configuration
Before you can create containers, you need to tell LXD a little bit about your storage and network needs.

This is all done with:

    lxd init

## Access control
Access control for LXD is based on group membership.
The root user as well as members of the "lxd" group can interact with the local daemon.

If the "lxd" group is missing on your system, create it, then restart the LXD daemon.
You can then add trusted users to it. Anyone added to this group will have full control over LXD.

Because group membership is normally only applied at login, you may need to either re-open your user session
or use the "newgrp lxd" command in the shell you're going to use to talk to LXD.

**WARNING**: Anyone with access to the LXD socket can fully control LXD,
which includes the ability to attach host devices and filesystems, this
should therefore only be given to users who would be trusted with root
access to the host. You can learn more about LXD security [here](/lxd/docs/master/security/).

# Creating and using your first container
Creating your first container is as simple as:

    lxc launch ubuntu:18.04 first

That will create and start a new Ubuntu 18.04 container as can be confirmed with:

    lxc list

Your container here is called "first". You also could let LXD give it a random name by
just calling "lxc launch ubuntu:18.04" without a name.

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

# Container images
LXD is image based. Containers must be created from an image and so the image store
must get some images before you can do much with LXD.

There are three ways to feed that image store:

 1. Use one of the the built-in image remotes
 2. Use a remote LXD as an image server
 3. Manually import an image tarball

## Using the built-in image remotes
LXD comes with 3 default remotes providing images:

 1. ubuntu: (for stable Ubuntu images)
 2. ubuntu-daily: (for daily Ubuntu images)
 3. images: (for a [bunch of other distros](https://images.linuxcontainers.org))

To start a container from them, simply do:

    lxc launch ubuntu:16.04 my-ubuntu
    lxc launch ubuntu-daily:18.04 my-ubuntu-dev
    lxc launch images:centos/6/amd64 my-centos

## Using a remote LXD as an image server
Using a remote image server is as simple as adding it as a remote and just using it:

    lxc remote add my-images 1.2.3.4
    lxc launch my-images:image-name your-container

An image list can be obtained with:

    lxc image list my-images:

## Manually importing an image
If you already have a lxd-compatible image file, you can import it with:

    lxc image import <file> --alias my-alias

And then start a container using:

    lxc launch my-alias my-container

See the [image specification for more details](https://github.com/lxc/lxd/blob/master/doc/image-handling.md).

# Multiple hosts
The "lxc" command line tool can talk to multiple LXD servers and defaults to talking to the local one.

Remote operations require the following two commands having been run on the remote server:

    lxc config set core.https_address "[::]"
    lxc config set core.trust_password some-password

The former tells LXD to bind all addresses on port 8443. The latter sets a trust password to be used by new clients.

Now to talk to that remote LXD, you can simply add it with:

    lxc remote add host-a <ip address or DNS>

This will prompt you to confirm the remote server fingerprint and then ask you for the password.

And after that, use all the same command as above but prefixing the container
and images name with the remote host like:

    lxc exec host-a:first -- apt-get update
