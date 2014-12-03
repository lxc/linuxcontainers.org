# What's LXD?

LXD is a container "hypervisor" and a new user experience for LXC.

Specifically, it's made of three components:

 * A system-wide daemon (lxd)
 * A command line client (lxc)
 * An OpenStack Nova plugin (nova-compute-lxd)

The daemon exports a REST API both locally and if enabled, over the network.

The command line tool is designed to be a very simple, yet very powerful tool  
to manage all your containers. It can handle connect to multiple container hosts  
and easily give you an overview of all the containers on your network,   
let you create some more where you want them and even move them around while they're running.

The OpenStack plugin then allows you to use your lxd hosts as compute nodes,  
running workloads on containers rather than virtual machines.


LXD is currently in very active development and isn't yet ready for production use.

# Features

Some of the biggest features of LXD are:

 * Secure by design (unprivileged containers, resource restrictions and much more)
 * Scalable (from containers on your laptop to thousand of compute nodes)
 * Intuitive (simple, clear API and crisp command line experience)
 * Image based (no more distribution templates, only good, trusted images)
 * Live migration

# Relationship with LXC

LXD isn't a rewrite of LXC, in fact it's building on top of LXC to provide a new,  
better user experience. Under the scene, LXD uses LXC through liblxc and its Go binding  
to create and manage the containers.

It's basically an alternative to LXC's tools and distribution template system  
with the added features that come from being controllable over the network.

# Licensing

LXD is free software and is developed under the Apache 2 license.
