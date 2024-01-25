# What's LXC?

LXC is a userspace interface for the Linux kernel containment features. Through a powerful API and simple tools, it lets Linux users easily create and manage system or application containers.

# Features
Current LXC uses the following kernel features to contain processes:

 * Kernel namespaces (ipc, uts, mount, pid, network and user)
 * Apparmor and SELinux profiles
 * Seccomp policies
 * Chroots (using pivot\_root)
 * Kernel capabilities
 * CGroups (control groups)

LXC containers are often considered as something in the middle between a chroot and a full fledged virtual machine. The goal of LXC is to create an environment as close as possible to a standard Linux installation but without the need for a separate kernel.

# Components
LXC is currently made of a few separate components:

 * The liblxc library
 * Several language bindings for the API:
    * [python3](https://github.com/lxc/python3-lxc)
    * [lua](https://github.com/lxc/lua-lxc)
    * [Go](https://github.com/lxc/go-lxc)
    * [ruby](https://github.com/lxc/ruby-lxc)
    * [Haskell](https://github.com/fizruk/lxc)
 * A set of standard tools to control the containers
 * Distribution container templates

# Licensing
LXC is free software, most of the code is released under the terms of the GNU LGPLv2.1+ license, some Android compatibility bits are released under a standard 2-clause BSD license and some binaries and templates are released under the GNU GPLv2 license.

The default license for the project is the GNU LGPLv2.1+.

# Support
LXC's stable release support relies on the Linux distributions and their own commitment to pushing stable fixes and security updates.

Based on the needs and available resources from the various distributions, specific versions of LXC can enjoy long term support with frequent bugfix updates.

Other releases will typically be maintained on a best effort basis which typically means until the next stable release is out.

## Extended support
LXC 5.0 and 4.0 are long term support releases:

 - LXC 5.0 will be supported until June 1st 2027
 - LXC 4.0 will be supported until June 1st 2025
