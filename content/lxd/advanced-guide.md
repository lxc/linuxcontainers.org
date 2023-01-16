[TOC]

# Introduction

!!! note
	If you haven't set up LXD yet, take a look at the [Getting-Started Guide](/lxd/getting-started-cli/) first.

This guide gives you more information about several features of LXD.


# Configuration of instances
See [How to create instances](/lxd/docs/latest/howto/instances_create) and [How to configure instances](/lxd/docs/latest/howto/instances_configure).

# Cloud-init
`cloud-init` is a software for automatic customization of a Linux distribution.

Features include:

* install packages
* apply/edit configuration
* add users
* and more

Requirements:

* Images with cloud-init support: For example, official LXD images that contain the term `cloud` in `ALIAS` have implemented cloud-init support.

## Apply instructions for cloud-init
You can apply instructions for cloud-init inside a LXD profile.

For easier editing, we write the content of the profile in a texteditor and apply the textfile to a new profile.

### Write a cloud-init profile

1. Create a new textfile and name it for example: `cloud-profile1.profile`
2. Open it in a texteditor of your choice and start editing.

Every instruction for cloud-init is applied in section `config`-> `user.user-data` (or other sections for instance data, see [below](#other-config-sections-for-instance-data)):

```
config:
  user.user-data: |
    #cloud-config
    key: value
```

Example:

```
config:
  user.user-data: |
    #cloud-config
    package_upgrade: true
    packages:
      - package1
      - package2

```

This will upgrade all installed packages and install package1 and package2.

#### More instructions for cloud-init
For more instructions see [examples in  the cloud-init documentation](https://cloudinit.readthedocs.io/en/latest/reference/examples.html).

#### Other config-sections for instance data

- `user.meta-data` - see [cloud-init docs - instance metadata](https://cloudinit.readthedocs.io/en/latest/explanation/instancedata.html)
- `user.vendor-data` - see [cloud-init docs - vendordata](https://cloudinit.readthedocs.io/en/latest/explanation/vendordata.html)
- `user.network-config` - see [cloud-init docs - network configuration](https://cloudinit.readthedocs.io/en/latest/reference/network-config.html)

!!! Tip
    You can check whether the syntax is correct with: [cloud-init FAQ - debug user-data](https://cloudinit.readthedocs.io/en/latest/reference/faq.html#how-can-i-debug-my-user-data)

### Apply the profile
After you saved the textfile, we can apply it with the following steps.

Create a new profile in LXD:

	lxc profile create cloud-profile1

Apply the textfile to the new profile:

	cat cloud-profile1.profile | lxc profile edit cloud-profile1

#### Launch the instance with cloud-init
Apply the profile during `lxc launch` with flag `-p`:

	lxc launch imageserver:image instancename -p cloud-profile1

Now cloud-init will start working.

!!! note
	Cloud-init may take a while until it is finished, depending on your instructions.

#### Cloud-init status
You can get the status of cloud-init with:

	cloud-init status

Reports:

`status: running`: means cloud-init is still working

or

`status: done`: means cloud-init has finished work

<br>

You can also use the following flag, which will only respond when cloud-init is finished:

	cloud-init status --wait


### More information
See the [Cloud-init documentation](https://cloudinit.readthedocs.io/en/latest/).


# Server configuration
See [LXD documentation - Server settings](/lxd/docs/master/server) for all Server configuration options.

Below we will introduce some topics, including:

- [Projects](#projects)
- [Security](#security)
- [Remote servers](#remote-servers)

## Projects
You can split your server into projects. Each project can have its own instances, profiles etc.

See [LXD documentation - Projects](/lxd/docs/master/projects) for more information and configuration.

## Security
See [LXD documentation - Security](/lxd/docs/master/security) for details on Server security.

## Remote servers
See [Image handling](/lxd/docs/master/image-handling/) for detailed information.

LXD supports different kinds of remote servers:

* `Simple streams servers`: Pure image servers that use the [simple streams format](https://git.launchpad.net/simplestreams/tree/).
* `Public LXD servers`: Empty LXD servers with no storage pools and no networks that serve solely as image servers. Set the `core.https_address` configuration option (see [Server configuration](/lxd/docs/master/server/#server-configuration)) to `:8443` and do not configure any authentication methods to make the LXD server publicly available over the network on port 8443. Then set the images that you want to share to `public`.
* `LXD servers`: Regular LXD servers that you can manage over a network, and that can also be used as image servers. For security reasons, you should restrict the access to the remote API and configure an authentication method to control access. See [Access to the remote API](/lxd/docs/master/security/#access-to-the-remote-api) and [Remote API authentication](/lxd/docs/master/authentication/) for more information.

### Use a remote simple streams server

To add a simple streams server as a remote, use the following command:

	lxc remote add some-name https://example.com/some/path --protocol=simplestreams

### Use a remote LXD server

To add a LXD server as a remote, use the following command:

	lxc remote add some-name <IP|FQDN|URL> [flags]

Some authentication methods require specific flags (for example, use `lxc remote add some-name <IP|FQDN|URL> --auth-type=candid` for Candid authentication). See [Remote API authentication](/lxd/docs/master/authentication/) for more information.

An example using an IP address:

    lxc remote add remoteserver2 1.2.3.4

This will prompt you to confirm the remote server fingerprint and then ask you for the password or token, depending on the authentication method used by the remote.

### Use remote servers

#### Image list on a remote server
A list of images on that server can be obtained with:

    lxc image list my-images:

#### Launch an instance
Launch an instance based on an image of that server:

    lxc launch some-name:image-name your-instance [--vm]

#### Manage instances on a remote server
You can use the same commands but prefixing the server and instance name like:

    lxc exec remoteserver-name:instancename -- apt-get update

You can replace `apt-get update` with any command the instance supports.

# Images - part 2

## Advanced options for images

1. [Add additional remote (image) servers](#add-remote-servers)
2. [Manually import an image](#import-images)
3. [Build your own image](#build-images)

## Import images
You can import images, that you:

- built yourself (see [Build Images](#build-images)),
- downloaded manually (see [Manual Download](#manual-download))
- exported from images or containers (see [Export Images](#export-images) and [Create Image from Containers](#create-image-from-containers))

#### Import container image

Components:

- lxd.tar.xz
- rootfs.squashfs

Use:

	lxc image import lxd.tar.xz rootfs.squashfs --alias custom-imagename


#### Import virtual-machine image

Components:

- lxd.tar.xz
- disk.qcow2

Use:

	lxc image import lxd.tar.xz disk.qcow2 --alias custom-imagename


### Manual download
You can also download images manually. For that you need to download the components described [above](#import-images).

#### From official LXD image server

!!! note
    It is easier to use the usual method with `lxc launch`. Use manual download only if you have a specific reason, like modification of the files before use for example.

**Link to official image server:**

[https://images.linuxcontainers.org/images/](https://images.linuxcontainers.org/images/)


## Export images
Use:

	lxc image export imagename [target folder] [flags]

Flags:

`--vm` - Query virtual machine images

### Create image from containers
See command:

	lxc publish

## Build images
For building your own images, you can use [`distrobuilder`](https://github.com/lxc/distrobuilder) (a tool developed by us).

### Install distrobuilder
You can install distrobuilder via snap or compile it manually:

#### Install via Snap
See [https://snapcraft.io/distrobuilder](https://snapcraft.io/distrobuilder).

#### Compile
See [Instructions on distrobuilder GitHub repo](https://github.com/lxc/distrobuilder/#installing-from-source).

### Write or edit a template
You need an image template (e.g. `ubuntu.yaml`) to give instructions to distrobuilder.

You can start by using one of the example templates below. Modify those templates so they fit your needs.

See [Template details](#template-details) below for an overview of configuration keys.

#### Example templates
Standard template (includes all available options): [https://github.com/lxc/distrobuilder/blob/master/doc/examples/scheme.yaml](https://github.com/lxc/distrobuilder/blob/master/doc/examples/scheme.yaml)

Official LXD templates for various distributions: [https://github.com/lxc/lxc-ci/tree/master/images](https://github.com/lxc/lxc-ci/tree/master/images)

#### Template details
You can define multiple keys in templates:


| Section: | Description: | Documentation: |
| ---      | ---          | ---            |
| `image`  | defines distribution, architecture, release etc.| see [image.md](https://github.com/lxc/distrobuilder/blob/master/doc/image.md) |
| `source` | defines main package source, keys etc. | see [source.md](https://github.com/lxc/distrobuilder/blob/master/doc/source.md) |
| `targets` | defines configs for specific targets (e.g. LXD-client, instances etc.) |  see [targets.md](https://github.com/lxc/distrobuilder/blob/master/doc/targets.md) |
| `files` | defines generators to modify files | see [generators.md](https://github.com/lxc/distrobuilder/blob/master/doc/generators.md) |
| `packages` | defines packages for install or removal; add repositories |   see [packages.md](https://github.com/lxc/distrobuilder/blob/master/doc/packages.md) |
| `actions` | defines scripts to be run after specific steps during image building |  see [actions.md](https://github.com/lxc/distrobuilder/blob/master/doc/actions.md) |
| `mappings` | maps different terms for architectures for specific distributions (e.g. x86_64: amd64) | see [mappings.md](https://github.com/lxc/distrobuilder/blob/master/doc/mappings.md) |


!!! note "Note for VMs"
	You should either build an image with cloud-init support (provides automatic size growth) or set a higher size in the template, because the standard size is relatively small (~4 GB). Alternatively you can also grow it manually.

### Build an image

#### Container image
Build a container image with:

	distrobuilder build-lxd filename [target folder]

Replace:

* `filename` - with a template file (e.g. `ubuntu.yaml`).
* (optional)`[target folder]` - with the path to a folder of your choice; if not set, distrobuilder will use the current folder

After the image is built, see [Import images](#import-images) for how to import your image to LXD.

See [Building.md on distrobuilder's GitHub repo](https://github.com/lxc/distrobuilder/blob/master/doc/building.md#lxd-image) for details.

#### Virtual machine image
Build a virtual machine image with:

	distrobuilder build-lxd filename --vm [target folder]

Replace:

* `filename` - with a template file (e.g. `ubuntu.yaml`).
* (optional)`[target folder]` - with the path to a folder of your choice; if not set, distrobuilder will use the current folder


After the image is built, see [Import images](#import-images) for how to import your image to LXD.

### More information
[Distrobuilder GitHub repo](https://github.com/lxc/distrobuilder)

[Distrobuilder documentation](https://github.com/lxc/distrobuilder/tree/master/doc)


# Networks
See the LXD documentation for details:

* [Networks documentation](/lxd/docs/latest/networks)
* [Network devices](/lxd/docs/latest/reference/devices_nic)
* [Proxy devices](/lxd/docs/latest/reference/devices_proxy)


# Storage
See the LXD documentation for details:

[Storage documentation](/lxd/docs/latest/storage)


# Command aliases
You can create internal command aliases with:

	lxc alias

List all aliases:

	lxc alias list

Create a new alias:

	lxc alias add <alias> <target>

For example:

	lxc alias add delete "delete -i"

This will link the command `lxc delete` to `lxc delete -i`. So if you run `lxc delete` the LXD-client will run `lxc delete -i` instead.

# Further information & links
You find more information on the following pages:

- [LXD documentation](/lxd/docs/master/index)

- [Forum](https://discuss.linuxcontainers.org/)
    - [Tutorials Section](https://discuss.linuxcontainers.org/c/tutorials)
