[TOC]

# Installation

## Choose your release
LXD upstream maintains three release branches in parallel:

 * Long term support (LTS) releases: LXD 4.0.x or LXD 3.0.x
 * Feature releases: LXD 4.x

LTS releases are recommended for production environments as they will benefit from regular bugfix
and security updates but will not see new features added or any kind of behavioral change.

To get all the latest features and monthly updates to LXD, use the feature release branch instead.

## Installing a package

### Linux

The easiest way to install LXD on Linux is to install the [snap package](#snap-package), which is available for different Linux distributions.

If this option does not work for you, see the [other installation options](#other-installation-options).

#### Snap package
LXD upstream publishes and tests [snap packages](https://snapcraft.io/lxd) that work for a number of Linux distributions, for example, Ubuntu, Arch Linux, Debian, Fedora and OpenSUSE.

Complete the following steps to install the snap:

1. Check the [provided distributions](https://jenkins.linuxcontainers.org/job/lxd-test-snap-latest-stable/) to see if a snap is available for your Linux distribution.<br/>
   If it is not, use one of the [other installation options](#other-installation-options).

2. Install `snapd`. See the [installation instructions](https://snapcraft.io/docs/core/install) on snapcraft.io.

3. Install the snap package.
   For the latest feature release, use:

        sudo snap install lxd
   For the LXD 4.0 LTS release, use:

        sudo snap install lxd --channel=4.0/stable
   For the LXD 3.0 LTS release, use:

        sudo snap install lxd --channel=3.0/stable

For more information about LXD snap packages (regarding more versions, update management etc.), see [Managing the LXD snap](https://discuss.linuxcontainers.org/t/managing-the-lxd-snap/8178).

!!! note
    On Ubuntu, if you previously had the LXD deb package installed, you can migrate all your existing data over with:

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

    See the [Installation Guide](https://github.com/ganto/copr-lxc4/wiki) for installation instructions.

=== "Gentoo"
    To install the feature branch of LXD on Gentoo, run:

        emerge --ask lxd

### MacOS builds

!!! note
	The builds for MacOS only include the client, not the server.

LXD upstream publishes builds of the LXD client for macOS through [Homebrew](https://brew.sh/).

To install the feature branch of LXD, run:

    brew install lxc

### Windows builds

!!! note
	The builds for Windows only include the client, not the server.

The LXD client on Windows is provided as a [Chocolatey](https://community.chocolatey.org/packages/lxc) package. To install it:

1. Install Chocolatey by following the [installation instructions](https://docs.chocolatey.org/en-us/choco/setup#installing-chocolatey).
2. Install the LXD client:

        choco install lxc

You can also find native builds of the LXD client for Windows on [GitHub](https://github.com/lxc/lxd/actions). To download a specific build:

1. Make sure that you are logged into your GitHub account.
2. Filter for the branch or tag that you are interested in (for example, the latest release tag or `master`).
3. Select the latest build and download the Windows artifact.

## Installing from source
Instructions on building and installing LXD from source [can be found here](https://github.com/lxc/lxd/#installing-lxd-from-source).

# Initial configuration

!!! note
	`instances`
	: means both `containers` and `virtual machines`.

Before you can create an instance, you need to configure LXD.

Run the following command to start the interactive configuration process:

    sudo lxd init

**Quick minimal setup**

To create a non-optimized minimal setup with default options, you can skip the configuration steps by adding the `--auto` flag:

    sudo lxd init --auto

**Note:** Compared to the interactive configuration, the minimal setup will be slower and provide less functionality. Especially the `dir storage backend` (which is used by default) is slower and doesn't provide fast snapshots, fast copy/launch, quotas and optimized backups.

If you want to use an optimized setup, we recommend to go through the interactive configuration process instead.

**Overview of the configuration options:**

`default=no`
: means the feature is disabled by default

| Feature:  | Description: | Basic Configuration Options: | More Information: |
| --- | ------------- | --- | --- |
| Clustering | A Cluster combines several LXD-servers. They share the same distributed database and can be managed uniformly using the LXD client (lxc) or the REST API. | default=`no`; <br> If set to `yes`, you can either connect to an existing cluster or create a new one. | LXD-documentation: <br> [[clustering]] |
| MAAS server | "MAAS is an open-source tool that lets you build a data centre from bare-metal servers." | default=`no`; <br> If set to `yes`, you can connect to an existing MAAS-server and specify the `name`, `URL` and `API key`. | - [maas.io](https://maas.io/) <br> - [maas - install with lxd](https://maas.io/docs/install-with-lxd) |
| Network bridge | Provides network access for the instances. | You can either use an existing bridge (or interface) or let LXD create a new bridge (recommended option). <br> You can also create additional bridges and assign them to instances later. | LXD-documentation: <br> - [[networks]] <br> - [Network interface](https://linuxcontainers.org/lxd/docs/master/instances#type-nic) |
| Storage pools | Instances etc. are stored in storage pools. | For testing purposes you can create a loop-backed storage pool. <br> But for production use it is recommended to use an empty partition (or full disk) instead of loop-backed storages (Reasons include: loop-backed pools are slower and their size can't be reduced). <br> The recommended backends are `ZFS` and `btrfs`. <br> You can also create additional storage pools later. | LXD-documentation: <br> - [[storage]] <br> - [Comparison of methods](https://linuxcontainers.org/lxd/docs/master/storage.html#where-to-store-lxd-data) <br> - [Backend Comparison Chart](https://linuxcontainers.org/lxd/docs/master/storage#feature-comparison) |
| Network Access | Allows access to the server over network. |  default=`no`; <br> If set to `yes`, you can connect to the server over network. <br> You can set a `password` or accept the client certificate manually. | - |
| Automatic Image Update | You can download Images from Image servers, in this case images can be updated automatically. | default=`yes`; <br> If set to `yes`, LXD will update the downloaded images regularly. | LXD-documentation: <br> [[image-handling]] |
| "YAML lxd init preseed" | Will display a summary of your chosen configuration options in the terminal. | default=`no` | - |

## Access control
Access control for LXD is based on group membership.
The root user as well as members of the "lxd" group can interact with the local daemon.

If the "lxd" group is missing on your system, create it, then restart the LXD daemon.
You can then add trusted users to it. Anyone added to this group will have full control over LXD.

Because group membership is normally only applied at login, you may need to either re-open your user session
or use the "newgrp lxd" command in the shell you're going to use to talk to LXD.

!!! warning
	Anyone with access to the LXD socket can fully control LXD, which includes the ability to attach host devices and filesystems, this should therefore only be given to users who would be trusted with root access to the host. You can learn more about LXD security [here](/lxd/docs/master/security).

# Note about virtual machines
Since version 4.0 LXD also natively supports virtual machines and thanks to a built-in agent, they can be used almost like containers.

LXD uses `qemu` to provide the VM functionality.

See [below](#launch-an-instance) for how to start a virtual machine.

You can find more information about virtual machines in our forum[^1].
<!-- You can find more information in the Advanced Guide. -->

!!! note
	For now virtual machines support less features than containers.
    See [Advanced Guide - Instance configuration](/lxd/advanced-guide#difference-between-containers-and-virtual-machines) for details.
    {: .p-noteadm }


# LXD client
The LXD client `lxc` is a command tool to manage your LXD servers.

## Overview
The following command will give you an overview of all available commands and options:

	lxc

Use `lxc [command] --help` for more information about a command, like flags and further options.

## Launch an instance
You can launch an instance with the `lxc launch` command.

To launch a container:

	lxc launch imageserver:imagename instancename

To launch a virtual machine:

	lxc launch imageserver:imagename instancename --vm

In the commands above, replace:

- `imageserver` with the name of a built-in or added image server (e.g. `ubuntu` or `images`).
- `imagename` with the name of an image (e.g. `20.04` or `debian/11`).   See [Section "Images"](#images) for details.
- `instancename` with a name of your choice (e.g. `ubuntuone`). If left empty, LXD will pick a random name.

For example, to create a container based on the Ubuntu `Focal Fossa` image (provided by LXD) with the instancename `ubuntuone`, enter the following command:

	lxc launch ubuntu:20.04 ubuntuone

## Configuration of instances
See [Advanced Guide - Instance Configuration](/lxd/advanced-guide#configuration-of-instances).


## Images
Instances are based on Images, which contain a basic operating system (for example a linux distribution) and some other LXD-related information.

In the following we will use the built-in remote image servers ([see below](#use-remote-image-servers)).

For more options see [Advanced Guide - Advanced options for Images](/lxd/advanced-guide#advanced-options-for-images).

### Use remote image servers
The easiest way is to use a built-in remote image server.

You can get a list of built-in image servers with:

	lxc remote list

LXD comes with 3 default servers:

 1. `ubuntu:` (for stable Ubuntu images)
 2. `ubuntu-daily:` (for daily Ubuntu images)
 3. `images:` (for a [bunch of other distros](https://images.linuxcontainers.org))

#### List images on server

To get a list of remote images on server `images`, type:

	lxc image list images:

**Details:**
_Most details in the list should be self-explanatory._

- Alias with `cloud`
: refers to images with built-in cloud-init support (see [Advanced Guide - Cloud-Init](/lxd/advanced-guide#cloud-init) and [official cloud-init documentation](https://cloudinit.readthedocs.io/en/latest/))

#### Search for images
You can search for images, by applying specific elements (e.g. the name of a distribution).

Show all Debian images:

	lxc image list images: debian

Show all 64-bit Debian images:

	lxc image list images: debian amd64

### Images for virtual machines
It is recommended to use the `cloud` variants of images (visible by the `cloud`-tag in their `ALIAS`).
They include cloud-init and the LXD-agent.
They also increase their size automatically and are tested daily.

## Instance management
List all instances:

    lxc list

### Start/stop
Start an instance:

	lxc start instancename

Stop an instance:

    lxc stop instancename

### Shell/terminal inside container
Get a shell inside a container:

    lxc exec instancename -- /bin/bash

By default you are logged in as root:

```bash
root@containername:~#

```

#### Log in as a user instead
**Note:** In many containers you need to create a user first.

	lxc exec instancename -- su --login username

Exit the container shell, with:

```bash
root@containername:~# exit

```

### Run command from host terminal
Run a single command from host's terminal:

    lxc exec containername -- apt-get update

### Shell/terminal inside virtual machine
You can see your VM boot with:

	lxc console instancename

(detach with ctrl+a-q)

Once booted, VMs with the LXD-agent built-in, can be accessed with:

	lxc exec instancename bash

Exit the VM shell, with:

	exit

### Copy files and folders between container and host
#### Copy from an instance to host

Pull a file with:

    lxc file pull instancename/path-in-container path-on-host

Pull a folder with:

    lxc file pull -r instancename/path-in-container path-on-host

For example:

    lxc file pull instancename/etc/hosts .

#### Copy from host to instance

Push a file with:

    lxc file push path-on-host instancename/path-in-container

Push a folder with:

    lxc file push -r path-on-host instancename/path-in-container

### Remove instance

!!! warning
	This will delete the instance including all snapshots.
	Deletion will be final in most cases and restore is unlikely!
    See [Tips & Tricks in Advanced Guide](/lxd/advanced-guide/#prevent-accidental-deletion-of-an-instance) on how to avoid accidental deletion.

Use:

    lxc delete instancename


# Further information & links

You find more information on the following pages:

- [Advanced Guide](/lxd/advanced-guide)

- [LXD documentation](/lxd/docs/master/index)
    - [Security](/lxd/docs/master/security)
    - [FAQ](/lxd/docs/master/faq)

- [Forum](https://discuss.linuxcontainers.org/)
    - [Tutorials Section](https://discuss.linuxcontainers.org/c/tutorials)

 <!-- footnotes -->

 [^1]: [Running virtual machines with lxd](https://discuss.linuxcontainers.org/t/running-virtual-machines-with-lxd-4-0/7519), including a short howto for a Microsoft Windows VM.

///Footnotes Go Here///
