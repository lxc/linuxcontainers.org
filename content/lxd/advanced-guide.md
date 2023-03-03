[TOC]

# Introduction

!!! note
	If you haven't set up LXD yet, take a look at the [Getting-Started Guide](/lxd/getting-started-cli/) first.

This guide gives you more information about several features of LXD.


# Configuration of instances
See [How to create instances](/lxd/docs/latest/howto/instances_create) and [How to configure instances](/lxd/docs/latest/howto/instances_configure).

# Cloud-init
See [How to use `cloud-init`](/lxd/docs/latest/cloud-init) and the [`cloud-init` documentation](https://cloudinit.readthedocs.io/en/latest/).

# Server configuration
See [LXD documentation - Server settings](/lxd/docs/master/server) for all Server configuration options.

Below we will introduce some topics, including:

- [Projects](#projects)
- [Security](/lxd/docs/latest/security)
- [Remote servers](/lxd/docs/latest/reference/remote_image_servers/)

## Projects
You can split your server into projects. Each project can have its own instances, profiles etc.

See [LXD documentation - Projects](/lxd/docs/master/projects) for more information and configuration.

# Using `distrobuilder` to build images

For building your own images, you can use [`distrobuilder`](https://github.com/lxc/distrobuilder) (a tool developed by us).

## Install distrobuilder

See [How to install `distrobuilder`](/distrobuilder/docs/latest/howto/install/).

## Write or edit a template
You need an image template (e.g. `ubuntu.yaml`) to give instructions to distrobuilder.

You can start by using one of the example templates below. Modify those templates so they fit your needs.

See [Template details](#template-details) below for an overview of configuration keys.

### Example templates
Standard template (includes all available options): [https://github.com/lxc/distrobuilder/blob/master/doc/examples/scheme.yaml](https://github.com/lxc/distrobuilder/blob/master/doc/examples/scheme.yaml)

Official LXD templates for various distributions: [https://github.com/lxc/lxc-ci/tree/master/images](https://github.com/lxc/lxc-ci/tree/master/images)

### Template details
You can define multiple keys in templates:


| Section: | Description: | Documentation: |
| ---      | ---          | ---            |
| `image`  | defines distribution, architecture, release etc.| see [Image](/distrobuilder/docs/latest/reference/image/) |
| `source` | defines main package source, keys etc. | see [Source](/distrobuilder/docs/latest/reference/source/) |
| `targets` | defines configs for specific targets (e.g. LXD-client, instances etc.) |  see [Targets](/distrobuilder/docs/latest/reference/targets/) |
| `files` | defines generators to modify files | see [Generators](/distrobuilder/docs/latest/reference/generators/) |
| `packages` | defines packages for install or removal; add repositories |   see [Package management](/distrobuilder/docs/latest/reference/packages/) |
| `actions` | defines scripts to be run after specific steps during image building |  see [Actions](/distrobuilder/docs/latest/reference/actions/) |
| `mappings` | maps different terms for architectures for specific distributions (e.g. x86_64: amd64) | see [Mappings](/distrobuilder/docs/latest/reference/mappings/) |


!!! note "Note for VMs"
	You should either build an image with cloud-init support (provides automatic size growth) or set a higher size in the template, because the standard size is relatively small (~4 GB). Alternatively you can also grow it manually.

## Build an image

### Container image
Build a container image with:

	distrobuilder build-lxd filename [target folder]

Replace:

* `filename` - with a template file (e.g. `ubuntu.yaml`).
* (optional)`[target folder]` - with the path to a folder of your choice; if not set, distrobuilder will use the current folder

After the image is built, see [Import images](/lxd/docs/latest/howto/images_copy/#import-an-image-from-files) for how to import your image to LXD.

See [How to build images](/distrobuilder/docs/latest/howto/build/#lxd-image) for details.

### Virtual machine image
Build a virtual machine image with:

	distrobuilder build-lxd filename --vm [target folder]

Replace:

* `filename` - with a template file (e.g. `ubuntu.yaml`).
* (optional)`[target folder]` - with the path to a folder of your choice; if not set, distrobuilder will use the current folder


After the image is built, see [Import images](/lxd/docs/latest/howto/images_copy/#import-an-image-from-files) for how to import your image to LXD.

## More information
[Distrobuilder GitHub repo](https://github.com/lxc/distrobuilder)

[Distrobuilder documentation](/distrobuilder/docs/latest/)

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
