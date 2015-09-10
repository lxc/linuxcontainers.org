# Requirements

Hard dependencies:

 * One of glibc, musl libc, uclib or bionic as your C library
 * Linux kernel >= 2.6.32

Extra dependencies for lxc-attach:

 * Linux kernel >= 3.8

Extra dependencies for unprivileged containers:

 * cgmanager or another CGroup manager configuring your system for unprivileged CGroups operation
 * A recent version of shadow including newuidmap and newgidmap
 * Linux kernel >= 3.12

Recommended libraries:

 * libcap (to allow for capability drops)
 * libapparmor (to set a different apparmor profile for the container)
 * libselinux (to set a different selinux context for the container)
 * libseccomp (to set a seccomp policy for the container)
 * libgnutls (for various checksumming)
 * liblua (for the LUA binding)
 * python3-dev (for the python3 binding)

# Installation

In most cases, you'll find recent versions of LXC available for your Linux distribution.  
Either directly in the distribution's package repository or through some backport channel.

For your first LXC experience, we recommend you use a recent supported release,  
such as a recent bugfix release of LXC 1.0.


If using Ubuntu, we recommend you use Ubuntu 14.04 LTS as your container host.  
LXC bugfix releases are available directly in the distribution package repository  
shortly after release and those offer a clean (unpatched) upstream experience.

Ubuntu is also one of the few (if not only) Linux distributions to come by default  
with everything that's needed for safe, unprivileged LXC containers.

On such an Ubuntu system, installing LXC is as simple as:

    sudo apt-get install lxc

Your system will then have all the LXC commands available, all its templates  
as well as the python3 binding should you want to script LXC.


# Creating unprivileged containers as a user

Unprivileged containers are the safest containers.  
Those use a map of uid and gid to allocate a range of uids and gids to a container.  
That means that uid 0 (root) in the container is actually something like uid 100000  
outside the container. So should something go very wrong and an attacker manages  
to escape the container, they'll find themselves with about as many rights as a nobody user.

Unfortunately this also means that the following common operations aren't allowed:

  * mounting most of filesystems
  * creating device nodes
  * any operation against a uid/gid outside of the mapped set

Because of that, most distribution templates simply won't work with those.  
Instead you should use the "download" template which will provide you with pre-built images  
of the distributions that are known to work in such an environment.

Now, everything below assumes a recent Ubuntu system or another Linux distribution which offers  
a similar experience (recent kernel, recent version of shadow, cgmanager and default uid/gid allocation).

First of all, you need to make sure your user has a uid and gid map defined in /etc/subuid and /etc/subgid.  
On Ubuntu systems, a default allocation of 65536 uids and gids is given to every new user on the system,  
so you should already have one. If not, you'll have to use usermod to give yourself one.

Next up is /etc/lxc/lxc-usernet which is used to set network devices quota for unprivileged users.  
By default, your user isn't allowed to create any network device on the host, to change that, add:

    your-username veth lxcbr0 10

This means that "your-username" is allowed to create up to 10 veth devices connected to the lxcbr0 bridge.


With that done, the last step is to create an LXC configuration file.

 * Create the ~/.config/lxc directory if it doesn't exist.
 * Copy /etc/lxc/default.conf to ~/.config/lxc/default.conf
 * Append the following two lines to it:
    * lxc.id\_map = u 0 100000 65536
    * lxc.id\_map = g 0 100000 65536

Those values should match those found in /etc/subuid and /etc/subgid, the values above are those expected  
for the first user on a standard Ubuntu system.

Just before you create your first container, you probably should logout and login again,  
or even reboot your machine to make sure that your user is placed in the right cgroups.  
(This is only required if cgmanager wasn't installed on your machine prior to you installing LXC.)


And now, create your first container with:

    lxc-create -t download -n my-container

The download template will show you a list of distributions, versions and architectures to choose from.  
A good example would be "ubuntu", "trusty" (14.04 LTS) and "i386".


A few seconds later your container will be created and you can start it with:

    lxc-start -n my-container -d

You can then confirm its status with either of:

    lxc-info -n my-container
    lxc-ls -f

And get a shell inside it with:

    lxc-attach -n my-container

Stopping it can be done with:

    lxc-stop -n my-container

And finally removing it with:

    lxc-destroy -n my-container

# Creating unprivileged containers as root

To run a system-wide unprivileged container (that is, an unprivileged container started by root)  
you'll need to follow only a subset of the steps above.

Specifically, you need to manually allocate a uid and gid range to root in /etc/subuid and /etc/subgid.  
And then set that range in /etc/lxc/default.conf using lxc.id\_map entries similar to those above.

And that's it. Root doesn't need network devices quota and uses the  
global configuration file so the other steps don't apply.

Any container you create as root from that point on will be running unprivileged.

# Creating privileged containers

Privileged containers are containers created by root and running as root.  

Depending on the Linux distribution, they may be protected by some capability dropping, apparmor profiles,  
selinux context or seccomp policies but ultimately, the processes still run as root and so you should never  
give access to root inside a privileged container to an untrusted party.

  

If you still have to create privileged containers, it's quite simple. Simply don't do any of the configuration  
described above and LXC will create privileged containers.

So:

    sudo lxc-create -t download -n privileged-container

Will create a new "privileged-container" privileged container on your system using an image from the download template.
