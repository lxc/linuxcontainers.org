# What's LXCFS?

LXCFS is a simple userspace filesystem designed to workaround some current limitations of the Linux kernel.

Specifically, it's providing two main things

 * A cgroupfs-like tree which is container aware and works using CGManager.
 * A set of files which can be bind-mounted over their /proc originals  
   to provide CGroup-aware values.

The code is pretty simple, written in C using libnih and the CGManager API and the resulting filesystem  
can be used on any system that supports FUSE and CGManager.

The main driver for this work was the need to run systemd based containers as a regular unprivileged user  
while still allowing systemd inside the container to interact with cgroups.

# Licensing

LXCFS is free software and is developed under the Apache 2 license.
