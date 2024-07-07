[TOC]

# What is Incus?
Incus is a next generation system container and virtual machine manager.

It provides a user experience similar to that of a public cloud. With it, you can easily mix and match both containers and virtual machines, sharing the same underlying storage and network.

Incus is image based and provides images for a [wide number of Linux distributions](https://images.linuxcontainers.org). It provides flexibility and scalability for various use cases, with support for different storage backends and network types and the option to install on hardware ranging from an individual laptop or cloud instance to a full server rack.

When using Incus, you can manage your instances (containers and VMs) with a simple command line tool, directly through the REST API or by using third-party tools and integrations. Incus implements a single REST API for both local and remote access.

The Incus project [was created](/incus/announcement/) by Aleksa Sarai as a community driven alternative to Canonical's LXD.
Today, it's led and maintained by many of the same people that once created LXD.

## Get started
To get a better idea of what Incus is and what it does, you can [try it online](/incus/try-it/)!

Then if you want to run it locally, take a look at our [getting started guide](/incus/docs/main/tutorial/first_steps/).

## Containers and virtual machines
Incus provides support for system containers and virtual machines.

When running a system container, Incus simulates a virtual version of a full operating system. To do this, it uses the functionality provided by the kernel running on the host system.

When running a virtual machine, Incus uses the hardware of the host system, but the kernel is provided by the virtual machine. Therefore, virtual machines can be used to run, for example, a different operating system.

You can learn more about the differences between application containers, system containers and virtual machines in [our documentation](/incus/docs/main/explanation/containers_and_vms/).

# Features
Some of the biggest features of Incus are:

Core API
: * [Secure by design](/incus/docs/main/security) (through unprivileged containers, resource restrictions, authentication, ...)
  * [Intuitive](/incus/docs/main/rest-api) (with a simple, clear API and crisp command line experience)
  * [Scalable](/incus/docs/main/clustering) (from containers on your laptop to clusters of thousands of compute nodes)
  * [Event based](/incus/docs/main/events) (providing logging, operation, and lifecycle events)
  * [Remote usage](/incus/docs/main/remotes) (same API used for local and network access)
  * [Project support](/incus/docs/main/projects) (as a way to compartmentalize sets of images and profiles)

Instances and profiles
: * [Image based](https://images.linuxcontainers.org) (with images for a wide variety of Linux distributions, published daily)
  * [Instances](/incus/docs/main/instances) (containers and virtual-machines)
  * [Configurable through profiles](/incus/docs/main/profiles) (applicable to both containers and virtual machines)

Backup and export
: * [Backup and recovery](/incus/docs/main/backup) (for all objects managed by Incus)
  * [Snapshots](/incus/docs/main/reference/instance_options/#snapshot-scheduling-and-configuration) (to save and restore the state of an instance)
  * [Container and image transfer](/incus/docs/main/image-handling) (between different hosts, using images)
  * [Instance migration](/incus/docs/main/migration) (importing existing instances or transferring them between servers)

Configurability
: * [Multiple storage backends](/incus/docs/main/explanation/storage/) (with configurable storage pools and storage volumes)
  * [Network management](/incus/docs/main/explanation/networks/) (including bridge creation and configuration, cross-host tunnels, ...)
  * [Advanced resource control](/incus/docs/main/reference/instance_options/#resource-limits) (CPU, memory, network I/O, block I/O, disk usage and kernel resources)
  * [Device passthrough](/incus/docs/main/reference/devices/) (USB, GPU, unix character and block devices, NICs, disks and paths)


# Availability
Incus works on any recent Linux distribution.

Incus upstream doesn't directly provide packages, but packages are available in a number of distributions or can be found in 3rd party repositories.

In addition, the Incus client is available for Windows and macOS. You can use the client to connect to an Incus server running on a Linux machine.

Current installation instructions can be found in our [installation guide](/incus/docs/main/installing/).

# Support
Incus has two kind of releases:

 * LTS releases
 * Feature releases

The current LTS release is Incus 6.0 and is supported until June 2029.

Feature releases are pushed out every month or so and contain new features as well as bugfixes.
The normal support length for those releases is of about a month, or until the next release comes out.
Some Linux distributions might offer longer support for particular feature releases that they decided to ship.

Commercial support for Incus can be obtained from [Zabbly](https://zabbly.com/incus).

# Language, licensing and contributions
Incus is written in Go. It is free software and developed under the [Apache 2 license](https://www.apache.org/licenses/LICENSE-2.0).

The Incus source code is available on [GitHub](https://github.com/lxc/incus).

There are no CLA or similar legal agreements required to contribute to Incus. However, we require commits be signed-off (following the DCO - Developer Certificate of Ownership). See the [Contribution guidelines](/incus/docs/main/contributing/) for more information.

[<img src="/static/img/GitHub_Logo.png" alt="GitHub logo" style="display:block;float:none;margin-left:auto;margin-right:auto;padding:1em 0;max-height:120px"/>](https://github.com/lxc/incus)
