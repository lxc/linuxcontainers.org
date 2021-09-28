[TOC]

# What is LXD?
LXD (<a href="#" title="Listen" onclick="document.getElementById('player').play();return false;">[lɛks'di:]&#128264;</a>) is a next generation system container and virtual machine manager. It offers a unified user experience around full Linux systems running inside containers or virtual machines.

LXD is image based and provides images for a [wide number of Linux distributions](https://images.linuxcontainers.org). It provides flexibility and scalability for various use cases, with support for different storage backends and network types and the option to install on hardware ranging from an individual laptop or cloud instance to a full server rack.

When using LXD, you can manage your instances (containers and VMs) with a simple command line tool, directly through the REST API or by using third-party tools and integrations. LXD implements a single REST API for both local and remote access.

The LXD project was founded and is currently led by [Canonical Ltd](https://www.canonical.com) with contributions from a range of other companies and individual contributors.

## Get started
To get a better idea of what LXD is and what it does, you can [try it online](/lxd/try-it/)!

Then if you want to run it locally, take a look at our [getting started guide](/lxd/getting-started-cli/). The following clip gives a quick and easy introduction for standard use cases:

<div class="u-hide--small">
 <script id="asciicast-226224" src="https://asciinema.org/a/226224.js" async></script>
</div>
<div class="u-hide--medium u-hide--large">
 <a href="https://asciinema.org/a/226224" target="_blank"><img src="https://asciinema.org/a/226224.svg" alt="Installation and getting started"></a>
</div>

You can find a series of howtos and tutorials on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLddduKsl-KEhleT9VTR4hbtlNdtMr6cFd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Containers and virtual machines
LXD provides support for system containers and virtual machines.

When running a system container, LXD simulates a virtual version of a full operating system. To do this, it uses the functionality provided by the kernel running on the host system.

When running a virtual machine, LXD uses the hardware of the host system, but the kernel is provided by the virtual machine. Therefore, virtual machines can be used to run, for example, a different operating system.

### Application containers vs. system containers
Application containers (as provided by, for example, Docker or Kubernetes) package a single process or application. System containers, on the other hand, simulate a full operating system and let you run multiple processes at the same time.

Therefore, application containers are suitable to provide separate components, while system containers provide a full solution of libraries, applications, databases and so on. In addition, you can use system containers to create different user spaces and isolate all processes belonging to each user space, which is not what application containers are intended for.

![Application and system containers](/static/img/lxd/application-vs-system-containers.svg "Application and system containers")

### Virtual machines vs. system containers
Virtual machines emulate a physical machine, using the hardware of the host system from a full and completely isolated operating system. System containers, on the other hand, use the OS kernel of the host system instead of creating their own environment. If you run several system containers, they all share the same kernel, which makes them faster and more light-weight than virtual machines.

With LXD, you can create both system containers and virtual machines. You should use a system container to leverage the smaller size and increased performance if all functionality you require is compatible with the kernel of your host operating system. If you need functionality that is not supported by the OS kernel of your host system or you want to run a completely different OS, use a virtual machine.

![Virtual machines and system containers](/static/img/lxd/virtual-machines-vs-system-containers.svg "Virtual machines and system containers")

# Features
Some of the biggest features of LXD are:

Core API
: * [Secure by design](https://linuxcontainers.org/lxd/docs/master/security) (through unprivileged containers, resource restrictions, authentication, ...)
  * [Intuitive](https://linuxcontainers.org/lxd/docs/master/rest-api) (with a simple, clear API and crisp command line experience)
  * [Scalable](https://linuxcontainers.org/lxd/docs/master/clustering) (from containers on your laptop to clusters of thousands of compute nodes)
  * [Event based](https://linuxcontainers.org/lxd/docs/master/events) (providing logging, operation, and lifecycle events)
  * [Remote usage](https://linuxcontainers.org/lxd/docs/master/remotes) (same API used for local and network access)
  * [Project support](https://linuxcontainers.org/lxd/docs/master/projects) (as a way to compartmentalize sets of images and profiles)

Instances and profiles
: * [Image based](https://images.linuxcontainers.org) (with images for a wide variety of Linux distributions, published daily)
  * [Containers](https://linuxcontainers.org/lxd/docs/master/containers) (the most complete implementation of LXD instances)
  * [Virtual machines](https://linuxcontainers.org/lxd/docs/master/virtual-machines) (implemented through the use of qemu)
  * [Configurable through profiles](https://linuxcontainers.org/lxd/docs/master/profiles) (applicable to both containers and virtual machines)

Backup and export
: * [Backup and recovery](https://linuxcontainers.org/lxd/docs/master/backup) (for all objects managed by LXD)
  * [Snapshots](https://linuxcontainers.org/lxd/docs/master/instances#snapshot-scheduling) (to save and restore the state of an instance)
  * [Container and image transfer](https://linuxcontainers.org/lxd/docs/master/image-handling) (between different hosts, using images)
  * [Live migration](https://linuxcontainers.org/lxd/docs/master/migration) (using CRIU)

Configurability
: * [Multiple storage backends](https://linuxcontainers.org/lxd/docs/master/storage) (with configurable storage pools and storage volumes)
  * [Network management](https://linuxcontainers.org/lxd/docs/master/networks) (including bridge creation and configuration, cross-host tunnels, ...)
  * [Advanced resource control](https://linuxcontainers.org/lxd/docs/master/instances#resource-limits-via-) (CPU, memory, network I/O, block I/O, disk usage and kernel resources)
  * [Device passthrough](https://linuxcontainers.org/lxd/docs/master/container-environment) (USB, GPU, unix character and block devices, NICs, disks and paths)


# Availability
LXD works on any recent Linux distribution. LXD upstream directly maintains the Ubuntu packages and also publishes a snap package which can be used with most of the popular Linux distributions.

In addition, the LXD client is available for Windows and macOS. You can use the client to connect to a LXD server running on a Linux machine.

More details can be found on our [getting started](/lxd/getting-started-cli/) page.

[<img src="/static/img/snapstore.svg" alt="Snapstore logo" style="max-height:120px;max-width:200px;padding:0 2em;"/>](https://snapcraft.io/store) [<img src="/static/img/chocolatey.svg" alt="Chocolatey logo" style="max-height:120px;max-width:200px;padding:0 2em;"/>](https://chocolatey.org/) [<img src="/static/img/homebrew.png" alt="Homebrew logo" style="max-height:120px;max-width:200px;padding:0 2em;"/>](https://brew.sh/)

# Third-party integrations

LXD can also be used with other platforms and tools, like Ansible, Juju, Terraform and more.

See the [Third-party integrations](/lxd/third-party-integrations/) page for details.

# Support
LXD has two kind of releases:

 * LTS releases
 * Feature releases

The current LTS release is LXD 4.0, which is supported until June 2025 and gets frequent bugfix and security updates but does not receive any feature additions.

Feature releases are pushed out every month or so and contain new features as well as bugfixes. The normal support length for those releases is of about a month, or until the next release comes out. Some Linux distributions might offer longer support for particular feature releases that they decided to ship.

Commercial support for LXD on Ubuntu LTS releases can be obtained from [Canonical Ltd](http://www.canonical.com).

[<img src="/static/img/canonical.png" alt="Canonical logo" style="display:block;float:none;margin-left:auto;margin-right:auto;padding:1em 0;max-height:120px"/>](http://www.canonical.com)

# Relationship with LXC
LXD isn't a rewrite of LXC, in fact it's building on top of LXC to provide a new, better user experience. Under the hood, LXD uses LXC through liblxc and its Go binding to create and manage the containers.

It's basically an alternative to LXC's tools and distribution template system with the added features that come from being controllable over the network.

# Language, licensing and contributions
LXD is written in Go. It is free software and developed under the [Apache 2 license](https://www.apache.org/licenses/LICENSE-2.0).

The LXD source code is available on [GitHub](https://github.com/lxc/lxd).

There are no CLA or similar legal agreements required to contribute to LXD. However, we require commits be signed-off (following the DCO - Developer Certificate of Ownership). See the [Contribution guidelines](https://github.com/lxc/lxd/blob/master/doc/contributing.md) for more information.

[<img src="/static/img/GitHub_Logo.png" alt="GitHub logo" style="display:block;float:none;margin-left:auto;margin-right:auto;padding:1em 0;max-height:120px"/>](https://github.com/lxc/lxd)

<audio id="player">  <source src="/static/audio/lxd.mp3" type="audio/mpeg">  <source src="/static/audio/lxd.ogg" type="audio/ogg">  <source src="/static/audio/lxd.wav" type="audio/wav"></audio>
