

# What's LXD?
LXD is a next generation system container manager.
It offers a user experience similar to virtual machines but using Linux containers instead.

It's image based with pre-made images available for a [wide number of Linux distributions](https://images.linuxcontainers.org)
and is built around a very powerful, yet pretty simple, REST API.

To get a better idea of what LXD is and what it does, you can [try it online](/lxd/try-it/)!
Then if you want to run it locally, take a look at our [getting started guide](/lxd/getting-started-cli/).

The LXD project was founded and is currently led by [Canonical Ltd](https://www.canonical.com)
with contributions from a range of other companies and individual contributors.

# Design
The core of LXD is a privileged daemon which exposes a REST API over a local unix socket
as well as over the network (if enabled).

Clients, such as the command line tool provided with LXD itself then do everything through that REST API.
It means that whether you're talking to your local host or a remote server, everything works the same way.

# Features
Some of the biggest features of LXD are:

 * Secure by design (unprivileged containers, resource restrictions and much more)
 * Scalable (from containers on your laptop to thousand of compute nodes)
 * Intuitive (simple, clear API and crisp command line experience)
 * Image based (with a wide variety of Linux distributions published daily)
 * Support for Cross-host container and image transfer (including live migration with CRIU)
 * Advanced resource control (cpu, memory, network I/O, block I/O, disk usage and kernel resources)
 * Device passthrough (USB, GPU, unix character and block devices, NICs, disks and paths)
 * Network management (bridge creation and configuration, cross-host tunnels, ...)
 * Storage management (support for multiple storage backends, storage pools and storage volumes)

# Integration with OpenNebula
Starting from [OpenNebula EDGE](https://opennebula.org/get-your-hands-on-v-5-8-edge/) this cloud management platform packs official drivers to manage LXD compute nodes.

Key features:

* Enables **qcow2 backed containers** and regular KVM-like images, giving users more flexibility when deploying their workloads
* Support for snap installed LXD nodes.
* Ceph storage pools shared across all virtualization nodes (both KVM and LXD)
* Seamless LXD public image servers integration in a marketplace-like style. Supports [LXD public image server](https://images.linuxcontainers.org),  [TurnkeyLinux](https://www.turnkeylinux.org) and also the [OpenNebula marketplace](https://marketplace.opennebula.systems/appliance)
* [Multi-container services deployment](https://docs.opennebula.org/5.8/advanced_components/application_flow_and_auto-scaling/overview.html) with auto-scaling.
* Heterogeneous hypervisors cloud deployments with KVM, LXD and VMWare vCenter managed by the same cloud orchestration system

You can check more about the integration in the [OpenNebula doc](http://docs.opennebula.org/stable/deployment/open_cloud_host_setup/lxd_driver.html)

# Integration with OpenStack
The "nova-lxd" project provides an OpenStack Nova plugin that seamlessly integrates
system containers into a regular OpenStack deployment.

With this, users will either get a virtual machine or a container, simply depending on what image or
instance type they select. It's completely transparent and works with the regular OpenStack APIs.

To learn more about LXD and OpenStack, take a look at our [getting started with OpenStack](/lxd/getting-started-openstack/) page.

# Availability
LXD works on any recent Linux distribution. LXD upstream directly maintains the Ubuntu packages
and also publishes a snap package which can be used with most of the popular Linux distributions.

More details can be found on our [getting started](/lxd/getting-started-cli/) page.

# Relationship with LXC
LXD isn't a rewrite of LXC, in fact it's building on top of LXC to provide a new,
better user experience. Under the hood, LXD uses LXC through liblxc and its Go binding
to create and manage the containers.

It's basically an alternative to LXC's tools and distribution template system
with the added features that come from being controllable over the network.

# Language, licensing and contributions
LXD is written in Go, it's free software and is developed under the Apache 2 license.

There are no CLA or similar legal agreements required to contribute to LXD,
however we do require commits be signed-off (following the DCO - Developer Certificate of Ownership).

# Support
LXD has two kind of releases:

 * LTS releases
 * Feature releases

The current LTS is LXD 3.0 which is supported until June 2023 and gets frequent bugfix and security updates
but does not receive any feature addition.

Feature releases are pushed out every month or so and contain new features as well as bugfixes.
The normal support length for those releases is of about a month, or until the next one comes out.
Some Linux distributions may offer longer support for particular feature releases that they decided to ship.

Commercial support for LXD on Ubuntu LTS releases can be obtained from [Canonical Ltd](http://www.canonical.com).

[<img src="/static/img/canonical.png" alt="Canonical logo"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](http://www.canonical.com)
