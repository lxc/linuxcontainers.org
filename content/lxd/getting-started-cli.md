[TOC]

# Installation

## Choose your release
LXD upstream maintains different release branches in parallel:

 * Long term support (LTS) releases: currently LXD 4.0.x and LXD 3.0.x
 * Feature releases: LXD 4.x

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
   For the LXD 4.0 LTS release, use:

        sudo snap install lxd --channel=4.0/stable

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
To build and install LXD from source, follow the instructions in [Installing LXD from source](/lxd/docs/master/#installing-lxd-from-source).

# Initial configuration

!!! note
	"Instances" means both containers and virtual machines.

Before you can create an instance, you need to configure LXD.

Run the following command to start the interactive configuration process:

    sudo lxd init

See [Interactive setup options](#interactive-setup-options) for an explanation of the different configuration options.

To create a non-optimized minimal setup with default options, you can skip the configuration steps by adding the `--minimal` flag:

    sudo lxd init --minimal

!!! note
    Compared to the interactive configuration, the minimal setup will be slower and provide less functionality. Especially the `dir storage backend` (which is used by default) is slower and doesn't provide fast snapshots, fast copy/launch, quotas and optimized backups.

    If you want to use an optimized setup, go through the interactive configuration process instead.

## Security and access control
Access control for LXD is based on group membership. The root user and all members of the `lxd` group can interact with the local daemon.

If the `lxd` group is missing on your system, create it and restart the LXD daemon. You can then add trusted users to the group. Anyone added to this group will have full control over LXD.

Because group membership is normally only applied at login, you might need to either re-open your user session or use the `newgrp lxd` command in the shell you're using to talk to LXD.

!!! warning
	Anyone with access to the LXD socket can fully control LXD, which includes the ability to attach host devices and file systems. Therefore, you should only give access to users who would be trusted with root access to the host.

    You can learn more about LXD security [here](/lxd/docs/master/security).

## Interactive setup options

You can configure the following options during the initial configuration of LXD.

`default=no` means the feature is disabled by default.

| Feature  | Description | Basic configuration options | More information |
| --- | ------------- | --- | --- |
| Clustering | A cluster combines several LXD servers. They share the same distributed database and can be managed uniformly using the LXD client (lxc) or the REST API. | default=`no`; <br> If set to `yes`, you can either connect to an existing cluster or create a new one. | LXD documentation: <br> [Clustering](/lxd/docs/master/clustering) |
| MAAS server | MAAS is an open-source tool that lets you build a data center from bare-metal servers. | default=`no`; <br> If set to `yes`, you can connect to an existing MAAS server and specify the `name`, `URL` and `API key`. | - [maas.io](https://maas.io/) <br> - [MAAS - How to manage VM hosts](https://maas.io/docs/install-with-lxd) |
| Network bridge | Provides network access for the instances. | You can either use an existing bridge (or interface) or let LXD create a new bridge (recommended). <br> You can also create additional bridges and assign them to instances later. | LXD documentation: <br> - [Networks](/lxd/docs/master/networks) <br> - [Network interface](/lxd/docs/master/instances#type-nic) |
| Storage pools | Instances etc. are stored in storage pools. | For testing purposes, you can create a loop-backed storage pool. <br> But for production use you should use an empty partition (or full disk) instead of loop-backed storages (because loop-backed pools are slower and their size can't be reduced). <br> The recommended backends are `ZFS` and `btrfs`. <br> You can also create additional storage pools later. | LXD documentation: <br> - [Storage](/lxd/docs/master/storage) <br> - [Comparison of methods](/lxd/docs/master/storage.html#where-to-store-lxd-data) <br> - [Backend comparison chart](/lxd/docs/master/storage#feature-comparison) |
| Network access | Allows access to the server over network. |  default=`no`; <br> If set to `yes`, you can connect to the server over network. <br> You can set a `password` or accept the client certificate manually. | - |
| Automatic image update | You can download images from image servers. In this case, images can be updated automatically. | default=`yes`; <br> If set to `yes`, LXD will update the downloaded images regularly. | LXD documentation: <br> [Image handling](/lxd/docs/master/image-handling) |
| YAML lxd init preseed | Will display a summary of your chosen configuration options in the terminal. | default=`no` | - |


# Instances
LXD supports two kinds of instances:

- [Containers](#containers)
- [Virtual machines](#virtual-machines)

See [Virtual machines vs. system containers](/lxd/introduction/#virtual-machines-vs-system-containers) for a comparison of these instance types.

## Containers
Containers are the default instance type for LXD. They are currently the most complete implementation of LXD instances and support more features than virtual machines.

Containers are implemented through the use of `liblxc` (LXC).

## Virtual machines
Virtual machines are natively supported since version 4.0 of LXD. Thanks to a built-in agent, they can be used almost like containers.

LXD uses `qemu` to provide the VM functionality.

!!! note
	Currently, virtual machines support fewer features than containers, but the plan is to support the same set of features for both instance types in the future.

    To see which features are available for virtual machines, check the condition column in the [Instance configuration](/lxd/docs/master/instances#keyvalue-configuration) documentation.

## Launch an instance
Use the `lxc launch` command to launch an instance. You must specify the image that you want to launch and a name for the instance that you are creating.

Images for various operating systems are available on the built-in remote image servers. See [Images](#images) for more information. You must specify the name of the image server and the name of the image.

### Launch a container

Enter the following command to launch a container:

	lxc launch <image_server>:<image_name> <instance_name>

For example, to launch a container with a Ubuntu 20.04 image from the `images` server using the instance name `ubuntu-container`, enter the following command:

    lxc launch images:ubuntu/20.04 ubuntu-container

### Launch a virtual machine

Enter the following command to launch a virtual machine:

	lxc launch <image_server>:<image_name> <instance_name> --vm

For example, to launch a virtual machine with a Ubuntu 20.04 image from the `images` server using the instance name `ubuntu-vm`, enter the following command:

    lxc launch images:ubuntu/20.04 ubuntu-vm --vm

## Manage instances
Use the LXD client tool `lxc` to manage your LXD instances.

The following command gives an overview of all available commands and options:

	lxc

Use `lxc <command> --help` for more information about a command, like flags and further options.

### List instances

Enter the following command to list all instances:

    lxc list

You can filter the instances that are displayed, for example, by type or status:

    lxc list type=container
    lxc list status=running

You can also filter by name. To list several instances, use a regular expression for the name. For example:

    lxc list ubuntu.*

Enter `lxc list --help` to see all filter options.

### Show information about an instance

Enter the following command to show detailed information about an instance:

    lxc info <instance_name>

Add `--show-log` to the command to show the latest log lines for the instance:

    lxc info <instance_name> --show-log

### Start and stop an instance

Enter the following command to start an instance:

	lxc start <instance_name>

You will get an error if the instance does not exist or if it is running already.

Enter the following command to stop an instance:

    lxc stop <instance_name>

You will get an error if the instance does not exist or if it is not running.

### Delete an instance

If you don't need an instance anymore, you can remove it. The instance must be stopped before you can delete it.

Enter the following command to delete an instance:

    lxc delete <instance_name>

!!! warning
	This command permanently deletes the instance and all snapshots.

    See [Prevent accidental deletion of an instance](/lxd/advanced-guide/#prevent-accidental-deletion-of-an-instance) for instructions on how to avoid accidental deletion.

## Configure instances
See [Instance configuration](/lxd/docs/master/instances) in the LXD documentation for a list of configuration options that you can specify for your instances.

The instance configuration consists of different categories:

[Instance properties](/lxd/docs/master/instances#properties)
:   Properties that are set when the instance is created, for example, the instance name and architecture. These properties cannot be changed in the same way as other configuration options.

[Instance options](/lxd/docs/master/instances#keyvalue-configuration)
:   Configuration options related directly to the instance, for example, startup options, security settings, hardware limits, kernel modules, snapshots and user keys.

[Instance devices](/lxd/docs/master/instances#device-types)
:   Devices that are attached to an instance, for example, network interfaces, mount points, USB and GPU devices. These devices can have *instance device options*, depending on the type of the instance device.

Check the condition column for each configuration option to see if it is available for the instance type that you are using.

You can configure these options either when launching an instance or later at runtime. You can also create profiles to store and apply sets of configuration options.

### Specify configuration when launching an instance
To specify instance options when launching an instance, use the `--config` (or `-c` for short) flag with the `lxc launch` command. Note that you can only specify instance options with the `--config` flag. You cannot add and configure instance devices with this method.

For example, to limit the container resources to one vCPU and 192 MiB of RAM, add the following flags:

    lxc launch images:ubuntu/20.04 ubuntu-limited -c limits.cpu=1 -c limits.memory=192MiB

To launch an instance with a full configuration (which can also include instance devices), specify the configuration through a `.yaml` file. Check the contents of an existing instance configuration for the required markup (see [Display instance configuration](#display-instance-configuration)).

For example, to launch a container with the configuration from `config.yaml`, enter the following command:

    lxc launch images:ubuntu/20.04 ubuntu-config < config.yaml

You can also specify configuration options when launching an instance by applying one or more profiles. See [Use profiles](#use-profiles) for more information.

### Update configuration at runtime
To update instance options while the instance is running, use the `lxc config set` command. You need to specify the instance name and the key and value of the instance option:

    lxc config set <instance_name> <option_key>=<option_value> <option_key>=<option_value> ...

For example, to change the memory limit for your container, enter the following command:

    lxc config set ubuntu-limited limits.memory=128MiB

To add and configure an instance device for your instance, use the `lxc config device add` command. You need to specify the instance name, a device name, the device type and maybe device options (depending on the device type):

    lxc config device add <instance_name> <device_name> <device_type> <device_option_key>=<device_option_value> <device_option_key>=<device_option_value> ...

For example, to add the storage at `/share/c1` on the host system to your instance at path `/opt`, enter the following command:

    lxc config device add ubuntu-container disk-storage-device disk source=/share/c1 path=/opt

To configure instance device options for an instance device that you have added already, use the `lxc config device set` command.

### Display instance configuration
Enter the following command to display the current configuration of your instance:

    lxc config show <instance_name> -e

The configuration is displayed in [YAML](https://en.wikipedia.org/wiki/YAML) format.

### Use profiles
Profiles store a set of configuration options. They can contain instance options, instance devices and instance device options.

You can apply any number of profiles to an instance. They are applied in the order they are specified, so the last profile to specify a specific key takes precedence. However, instance-specific configuration always overrides the configuration coming from the profiles.

When applying a profile that contains configuration options that are not suitable for the instance type, these configuration options are ignored and do not result in an error.

If you don't specify any profiles when launching a new instance, the `default` profile is applied automatically. This profile defines a network interface and a root disk. The `default` profile cannot be renamed or removed.

#### View profiles
Enter the following command to display a list of all available profiles:

    lxc profile list

Enter the following command to display the contents of a profile:

    lxc profile show <profile_name>

#### Create an empty profile
Enter the following command to create an empty profile:

    lxc profile create <profile_name>

#### Edit a profile
You can either set specific configuration options or edit the full profile in YAML format.

##### Set specific options for a profile
To set an instance option for a profile, use the `lxc profile set` command. You need to specify the profile name and the key and value of the instance option:

    lxc profile set <profile_name> <option_key>=<option_value> <option_key>=<option_value> ...

To add and configure an instance device for your profile, use the `lxc profile device add` command. You need to specify the profile name, a device name, the device type and maybe device options (depending on the device type):

    lxc profile device add <instance_name> <device_name> <device_type> <device_option_key>=<device_option_value> <device_option_key>=<device_option_value> ...

To configure instance device options for an instance device that you have added to the profile already, use the `lxc profile device set` command.

##### Edit the full profile
Instead of setting each configuration option separately, you can provide all options at once in [YAML](https://en.wikipedia.org/wiki/YAML) format.

Check the contents of an existing profile or instance configuration for the required markup. For example, the `default` profile could look like this:

    config: {}
    description: Default LXD profile
    devices:
      eth0:
        name: eth0
        network: lxdbr0
        type: nic
      root:
        path: /
        pool: default
        type: disk
    name: default
    used_by:

Instance options are provided as array under `config`. Instance devices and instance device options are provided under `devices`.

To edit a profile using your standard terminal editor, enter the following command:

    lxc profile edit <profile_name>

Alternatively, you can create a YAML file (for example, `profile.yaml`) with the configuration and write the configuration to the profile with the following command:

    lxc profile edit <profile_name> < profile.yaml

#### Apply a profile to an instance
Enter the following command to apply a profile to an instance:

    lxc profile add <instance_name> <profile_name>

!!! Tip
    Check the configuration after adding the profile: `lxc config show <instance_name>`

    You will see that your profile is now listed under `profiles`. However, the configuration options from the profile are not shown under `config` (unless you add the `-e` flag). This is because they are taken from the profile and not the configuration of the instance.

    This means that if you edit a profile, the changes are automatically applied to all instances that use the profile.

You can also specify profiles when launching an instance by adding the `--profile`  (or `-p` for short) flag:

    lxc launch <image> <instance_name> -p <profile> -p <profile> ...

#### Remove a profile from an instance
Enter the following command to remove a profile from an instance:

    lxc profile remove <instance_name> <profile_name>

## Run commands
To run commands on your instance, either pass them from the host machine or log on to your container.

### Run commands from the host
To run a single command from the terminal of the host machine, use the `lxc exec` command:

    lxc exec <instance_name> -- <command>

For example, enter the following command to update the package list on your container:

    lxc exec ubuntu-container -- apt-get update

### Get shell access
!!! note
    The following instructions assume that your container has the `/bin/bash` command. If it doesn't, change the command appropriately.

Start a shell in your container to run commands directly in the container. Enter the following command:

    lxc exec <instance_name> -- /bin/bash

By default, you are logged in as root user. If you want to log in as a different user, enter the following command:

    lxc exec <instance_name> -- su --login <user_name>

!!! note
    In many containers, you must create a user first.

To exit the container shell, enter `exit` or press `Ctrl`+`d`.

### Log on to a virtual machine
If you are running a virtual machine, you can log on to its console with the following command:

	lxc console <vm_name>

To detach, press `Ctrl`+`a`-`q`.

## Access files
You can access the files from your container and pull them to the host machine, or push files from the host machine to the container.

### Pull files from the container

Enter the following command to pull a file from the container:

    lxc file pull <instance_name>/<path_to_file> <location_on_host>

For example, to pull the `/etc/hosts` file to the current folder, enter the following command:

    lxc file pull ubuntu-container/etc/hosts .

Instead of pulling the container file into a file on the host system, you can also pull it to stdin and pipe it into another command. This can be useful, for example, to check a log file:

    lxc file pull ubuntu-container/var/log/syslog - | less

To pull a folder with all contents, enter the following command:

    lxc file pull -r <instance_name>/<path_to_folder> <location_on_host>

#### Push files to the container

Enter the following command to push a file to the container:

    lxc file push <location_on_host> <instance_name>/<path_to_file>

To push a folder with all contents, enter the following command:

    lxc file push -r <location_on_host> <instance_name>/<path_to_folder>

# Images
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

- Alias with `cloud`: refers to images with built-in cloud-init support (see [Advanced Guide - Cloud-Init](/lxd/advanced-guide#cloud-init) and [official cloud-init documentation](https://cloudinit.readthedocs.io/en/latest/))

#### Search for images
You can search for images, by applying specific elements (e.g. the name of a distribution).

Show all Debian images:

	lxc image list images: debian

Show all 64-bit Debian images:

	lxc image list images: debian amd64

### Images for virtual machines
It is recommended to use the `cloud` variants of images (visible by the `cloud`-tag in their `ALIAS`). They include cloud-init and the LXD-agent. They also increase their size automatically and are tested daily.

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
