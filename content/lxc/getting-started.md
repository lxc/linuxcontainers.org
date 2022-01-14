# Requirements

Hard dependencies:

 * One of glibc, musl libc, uclib or bionic as your C library
 * Linux kernel >= 2.6.32

Extra dependencies for lxc-attach:

 * Linux kernel >= 3.8

Extra dependencies for unprivileged containers:

 * libpam-cgfs configuring your system for unprivileged CGroups operation
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

In most cases, you'll find recent versions of LXC available for your Linux distribution. Either directly in the distribution's package repository or through some backport channel.

For your first LXC experience, we recommend you use a recent supported release, such as a recent bugfix release of LXC 4.0.


If using Ubuntu, we recommend you use Ubuntu 18.04 LTS as your container host. LXC bugfix releases are available directly in the distribution package repository shortly after release and those offer a clean (unpatched) upstream experience.

Ubuntu is also one of the few (if not only) Linux distributions to come by default with everything that's needed for safe, unprivileged LXC containers.

On such an Ubuntu system, installing LXC is as simple as:

    sudo apt-get install lxc

or

    sudo snap install lxd

Your system will then have all the LXC commands available, all its templates as well as the python3 binding should you want to script LXC.

Use the following command to check whether the Linux kernel has the required configuration:

    lxc-checkconfig

# Creating unprivileged containers as a user

Unprivileged containers are the safest containers. Those use a map of uid and gid to allocate a range of uids and gids to a container. That means that uid 0 (root) in the container is actually something like uid 100000 outside the container. So should something go very wrong and an attacker manages to escape the container, they'll find themselves with about as many rights as a nobody user.

Unfortunately this also means that the following common operations aren't allowed:

  * mounting of most filesystems
  * creating device nodes
  * any operation against a uid/gid outside of the mapped set

Because of that, most distribution templates simply won't work with those. Instead you should use the "download" template which will provide you with pre-built images of the distributions that are known to work in such an environment.

The following instructions assume the use of a recent Ubuntu system or an alternate Linux distribution offering a similar experience, i.e., a recent kernel and a recent version of shadow, as well as libpam-cgfs and default uid/gid allocation.

First of all, you need to make sure your user has a uid and gid map defined in /etc/subuid and /etc/subgid. On Ubuntu systems, a default allocation of 65536 uids and gids is given to every new user on the system, so you should already have one. If not, you'll have to use usermod to give yourself one.

Next up is /etc/lxc/lxc-usernet which is used to set network devices quota for unprivileged users. By default, your user isn't allowed to create any network device on the host, to change that, add:

    echo "$(id -un) veth lxcbr0 10" | sudo tee -a /etc/lxc/lxc-usernet

This means that "your-username" is allowed to create up to 10 veth devices connected to the lxcbr0 bridge.


With that done, the last step is to create an LXC configuration file.

 * Create the ~/.config/lxc directory if it doesn't exist.
 * Copy /etc/lxc/default.conf to ~/.config/lxc/default.conf
 * Append the following two lines to it:
    * lxc.idmap = u 0 100000 65536
    * lxc.idmap = g 0 100000 65536

Those values should match those found in /etc/subuid and /etc/subgid, the values above are those expected for the first user on a standard Ubuntu system.

    mkdir -p ~/.config/lxc
    cp /etc/lxc/default.conf ~/.config/lxc/default.conf
    MS_UID="$(grep "$(id -un)" /etc/subuid  | cut -d : -f 2)"
    ME_UID="$(grep "$(id -un)" /etc/subuid  | cut -d : -f 3)"
    MS_GID="$(grep "$(id -un)" /etc/subgid  | cut -d : -f 2)"
    ME_GID="$(grep "$(id -un)" /etc/subgid  | cut -d : -f 3)"
    echo "lxc.idmap = u 0 $MS_UID $ME_UID" >> ~/.config/lxc/default.conf
    echo "lxc.idmap = g 0 $MS_GID $ME_GID" >> ~/.config/lxc/default.conf

The current Ubuntu LTS 20.04 requires this extra step:

    export DOWNLOAD_KEYSERVER="hkp://keyserver.ubuntu.com"

And now, create your first container with:

    systemd-run --unit=my-unit --user --scope -p "Delegate=yes" -- lxc-create -t download -n my-container

The download template will show you a list of distributions, versions and architectures to choose from. A good example would be "ubuntu", "focal" (20.04 LTS) and "amd64".

To run unprivileged containers as an unprivileged user, the user must be allocated an empty delegated cgroup (this is required because of the leaf-node and delegation model of cgroup2, not because of liblxc). See [cgroups: Full cgroup2 support](/lxc/news/2020_03_25_13_03.html#cgroups-full-cgroup2-support) for more information.

It is not possible to simply start a container from a shell as a user and automatically delegate a cgroup. Therefore, you need to wrap each call to any of the `lxc-*` commands in a `systemd-run` command. For example, to start a container, use the following command instead of just `lxc-start my-container`:

    systemd-run --unit=my-unit --user --scope -p "Delegate=yes" -- lxc-start my-container

NOTE: If libpam-cgfs was not installed on the host machine prior to installing LXC, you need to ensure your user belongs to the right cgroups before creating your first container. You can accomplish this by logging out and logging back in, or by rebooting the host machine.

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

To run a system-wide unprivileged container (that is, an unprivileged container started by root) you'll need to follow only a subset of the steps above.

Specifically, you need to manually allocate a uid and gid range to root in /etc/subuid and /etc/subgid. And then set that range in /etc/lxc/default.conf using lxc.idmap entries similar to those above.

And that's it. Root doesn't need network devices quota and uses the global configuration file so the other steps don't apply.

Any container you create as root from that point on will be running unprivileged.

# Creating privileged containers

Privileged containers are containers created by root and running as root.

Depending on the Linux distribution, they may be protected by some capability dropping, apparmor profiles, selinux context or seccomp policies but ultimately, the processes still run as root and so you should never give access to root inside a privileged container to an untrusted party.



If you still have to create privileged containers, it's quite simple. Simply don't do any of the configuration described above and LXC will create privileged containers.

So:

    sudo lxc-create -t download -n privileged-container

Will create a new "privileged-container" privileged container on your system using an image from the download template.


# Distribution LXC documentation
- [Ubuntu](https://ubuntu.com/server/docs/containers-lxc)
- [Debian](https://wiki.debian.org/LXC/CGroupV2#LXC_containers_started_by_non-root)
- [Arch Linux](https://wiki.archlinux.org/title/Linux_Containers#Enable_support_to_run_unprivileged_containers_(optional))
- [Fedora](https://fedoraproject.org/wiki/LXC)
