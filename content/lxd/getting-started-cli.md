[TOC]

# Installation

## Choose your release
LXD upstream maintains different release branches in parallel:

 * Long term support (LTS) releases: currently LXD 5.0.x and LXD 4.0.x
 * Feature releases: LXD 5.x

LTS releases are recommended for production environments as they will benefit from regular bugfix and security updates but will not see new features added or any kind of behavioral change.

To get all the latest features and monthly updates to LXD, use the feature release branch instead.

## Installing a package

### Linux

The easiest way to install LXD on Linux is to install the [snap package](#snap-package), which is available for different Linux distributions.

If this option does not work for you, see the [other installation options](#other-installation-options).

#### Snap package
LXD upstream publishes and tests [snap packages](https://snapcraft.io/lxd) that work for a number of Linux distributions, for example, Ubuntu, Arch Linux, Debian, Fedora and OpenSUSE.

Complete the following steps to install the snap:

1. Check the [provided distributions](https://jenkins.linuxcontainers.org/job/lxd-test-snap-latest-stable/) to see if a snap is available for your Linux distribution.
   If it is not, use one of the [other installation options](#other-installation-options).

2. Install `snapd`. See the [installation instructions](https://snapcraft.io/docs/core/install) on snapcraft.io.

3. Install the snap package.
   For the latest feature release, use:

        sudo snap install lxd
   For the LXD 5.0 LTS release, use:

        sudo snap install lxd --channel=5.0/stable

For more information about LXD snap packages (regarding more versions, update management etc.), see [Managing the LXD snap](https://discuss.linuxcontainers.org/t/managing-the-lxd-snap/8178).

!!! note
    On Ubuntu 18.04, if you previously had the LXD deb package installed, you can migrate all your existing data over with:

        sudo lxd.migrate

#### Other installation options

Some Linux distributions provide installation options other than the snap package.

=== "Alpine Linux"
    To install the feature branch of LXD on Alpine Linux, run:

        apk add lxd

=== "Arch Linux"
    To install the feature branch of LXD on Arch Linux, run:

        pacman -S lxd

=== "Fedora"
    Fedora RPM packages for LXC/LXD are available in the [COPR repository](https://copr.fedorainfracloud.org/coprs/ganto/lxc4/).

    To install the LXD package for the feature branch, run:

        dnf copr enable ganto/lxc4
        dnf install lxd

    See the [Installation Guide](https://github.com/ganto/copr-lxc4/wiki) for more detailed installation instructions.

=== "Gentoo"
    To install the feature branch of LXD on Gentoo, run:

        emerge --ask lxd

### Other operating systems

!!! note
	The builds for other operating systems include only the client, not the server.

=== "macOS"
    LXD upstream publishes builds of the LXD client for macOS through [Homebrew](https://brew.sh/).

    To install the feature branch of LXD, run:

        brew install lxc

=== "Windows"

    The LXD client on Windows is provided as a [Chocolatey](https://community.chocolatey.org/packages/lxc) package. To install it:

    1. Install Chocolatey by following the [installation instructions](https://docs.chocolatey.org/en-us/choco/setup#installing-chocolatey).
    2. Install the LXD client:

            choco install lxc

You can also find native builds of the LXD client on [GitHub](https://github.com/lxc/lxd/actions). To download a specific build:

1. Make sure that you are logged into your GitHub account.
2. Filter for the branch or tag that you are interested in (for example, the latest release tag or `master`).
3. Select the latest build and download the suitable artifact.

## Installing from source
To build and install LXD from source, follow the instructions in [Installing LXD from source](/lxd/docs/latest/installing#installing-lxd-from-source).

# Initial configuration

Before you can create a LXD instance (a container or a virtual machine), you must configure LXD.

See [How to initialize LXD](/lxd/docs/latest/howto/initialize/) for instructions.

# Security and access control
Access control for LXD is based on group membership. The root user and all members of the `lxd` group can interact with the local daemon.

If the `lxd` group is missing on your system, create it and restart the LXD daemon. You can then add trusted users to the group. Anyone added to this group will have full control over LXD.

Because group membership is normally only applied at login, you might need to either re-open your user session or use the `newgrp lxd` command in the shell you're using to talk to LXD.

!!! warning
	Anyone with access to the LXD socket can fully control LXD, which includes the ability to attach host devices and file systems. Therefore, you should only give access to users who would be trusted with root access to the host.

    You can learn more about LXD security [here](/lxd/docs/latest/security).

# Instances

See [Instances](/lxd/docs/latest/instances).

# Images
Instances are based on images, which contain a basic operating system (for example a Linux distribution) and some other LXD-related information.

In the following we will use the built-in remote image servers ([see below](#use-remote-image-servers)).

For more options see [Advanced Guide - Advanced options for Images](/lxd/advanced-guide#advanced-options-for-images).

## Use remote image servers
The easiest way is to use a built-in remote image server.

You can get a list of built-in image servers with:

	lxc remote list

LXD comes with 3 default servers:

 1. `ubuntu:` (for stable Ubuntu images)
 2. `ubuntu-daily:` (for daily Ubuntu images)
 3. `images:` (for a [bunch of other distros](https://images.linuxcontainers.org))

### List images on server

To get a list of remote images on server `images`, type:

	lxc image list images:

**Details:**

_Most details in the list should be self-explanatory._

- Alias with `cloud`: refers to images with built-in cloud-init support (see [Advanced Guide - Cloud-Init](/lxd/advanced-guide#cloud-init) and [official cloud-init documentation](https://cloudinit.readthedocs.io/en/latest/))

### Search for images
You can search for images, by applying specific elements (e.g. the name of a distribution).

Show all Debian images:

	lxc image list images: debian

Show all 64-bit Debian images:

	lxc image list images: debian amd64

## Images for virtual machines
It is recommended to use the `cloud` variants of images (visible by the `cloud`-tag in their `ALIAS`). They include cloud-init and the LXD-agent. They also increase their size automatically and are tested daily.

# Further information & links

You find more information on the following pages:

- [Advanced Guide](/lxd/advanced-guide)

- [LXD documentation](/lxd/docs/latest/index)
    - [Security](/lxd/docs/latest/security)
    - [FAQ](/lxd/docs/latest/faq)

- [Forum](https://discuss.linuxcontainers.org/)
    - [Tutorials Section](https://discuss.linuxcontainers.org/c/tutorials)

 <!-- footnotes -->

 [^1]: [Running virtual machines with lxd](https://discuss.linuxcontainers.org/t/running-virtual-machines-with-lxd-4-0/7519), including a short howto for a Microsoft Windows VM.

///Footnotes Go Here///
