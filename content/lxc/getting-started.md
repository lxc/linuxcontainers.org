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

For your first LXC experience, we recommend you use a recent supported release, such as a recent bugfix release of LXC 6.0.

If using Ubuntu, we recommend you use Ubuntu 18.04 LTS as your container host. LXC bugfix releases are available directly in the distribution package repository shortly after release and those offer a clean (unpatched) upstream experience.

Ubuntu is also one of the few (if not only) Linux distributions to come by default with everything that's needed for safe, unprivileged LXC containers.

On such an Ubuntu system, installing LXC is as simple as:

    sudo apt-get install lxc

Your system will then have all the LXC commands available, all its templates as well as the python3 binding should you want to script LXC.

Use the following command to check whether the Linux kernel has the required configuration:

    lxc-checkconfig

# Create Privileged Containers

Privileged containers are containers that are created by root and run as root.

Privileged containers are the easiest way to get started learning about and experimenting with LXC, but they may not be appropriate for production use. Depending on the host Linux distribution, privileged containers may be protected by some capability dropping, apparmor profiles, selinux context or seccomp policies but ultimately, the processes still run as root and so you should never give access to root inside a privileged container to an untrusted party. Even knowing that privileged containers are less secure, if you still must create privileged containers or they are specifically required for your use case, then creating them is quite simple. By default, LXC will create privileged containers.

Note that the terminal prompts we use here may be different than you see on your computer. The terminal prompts we use here emphasize if we are currently in a host shell or container shell and which user we are.

Create a privileged container with the following command. You can choose any container name that will be memorable for you. LXC's download template will help you select a container image available from https://images.linuxcontainers.org/

    root@host:~# lxc-create --name mycontainer --template download 

If you know the container image you want to use, you can specify the options to be sent to the download template. For example,

    root@host:~# lxc-create --name mycontainer --template download -- --dist alpine --release 3.19 --arch amd64

After creating the container, you can start it.

    root@host:~# lxc-start --name mycontainer

You can see status information about the container.

    root@host:~# lxc-info --name mycontainer
    Name:           mycontainer
    State:          RUNNING
    PID:            3250
    IP:             10.0.3.224
    Link:           vethgmeH9z
     TX bytes:      1.51 KiB
     RX bytes:      2.15 KiB
     Total bytes:   3.66 KiB

You can see status information about all containers.

    root@host:~# lxc-ls --fancy
    NAME        STATE   AUTOSTART GROUPS IPV4       IPV6 UNPRIVILEGED 
    mycontainer RUNNING 0         -      10.0.3.224 -    false        

Start a container shell.

    root@host:~# lxc-attach --name mycontainer --clear-env

Inside the container is where we really get a feeling for what a system container is and how it is like a lightweight virtual machine in many ways. The changes we make inside the container persist. If we later stop the container and restart it, our changes will still be there.

Explore the container.

    root@mycontainer:~# cat /etc/os-release
    NAME="Alpine Linux"
    ID=alpine
    VERSION_ID=3.19.0
    PRETTY_NAME="Alpine Linux v3.19"
    HOME_URL="https://alpinelinux.org/"
    BUG_REPORT_URL="https://gitlab.alpinelinux.org/alpine/aports/-/issues"

Update the package index, upgrade installed packages, and install more packages you would like available.

    root@mycontainer:~# apk update

    root@mycontainer:~# apk add --upgrade apk-tools

    root@mycontainer:~# apk upgrade --available

    root@mycontainer:~# apk add vim python3

Exit the container shell.

    root@mycontainer:~# exit

You can stop the container.

    root@host:~# lxc-stop --name mycontainer

If you will never need the container again, then you can permanently destroy it.

    root@host:~# lxc-destroy --name mycontainer

# Autostart

By default, containers do not start automatically when the host restarts. We may have a service like a web app in the container that should always be up and running. We would like the container to start when the host starts.

Suppose we have already created and started a container named `mycontainer` as described above.

    root@host:~# lxc-ls --fancy
    NAME        STATE   AUTOSTART GROUPS IPV4       IPV6 UNPRIVILEGED 
    mycontainer RUNNING 0         -      10.0.3.30  -    false        

We can reconfigure the container to autostart by added a line to the container's configuration.

    root@host:~# echo "lxc.start.auto = 1" >>/var/lib/lxc/mycontainer/config

After configuring the container, we can reboot the host to test that the container does, in fact, autostart.

    root@host:~# reboot

After allowing the host some time to reboot and signing back into the host's shell, we see that the container is running and has the autostart property set to 1.

    root@host:~# lxc-ls --fancy
    NAME        STATE   AUTOSTART GROUPS IPV4       IPV6 UNPRIVILEGED 
    mycontainer RUNNING 1         -      10.0.3.30  -    false

It works!

If we want several of the containers we create to have autostart, then we might prefer to create a new configuration file to use with `lxc-create`.

    root@host:~# cp /etc/lxc/default.conf /etc/lxc/autostart.conf

    root@host:~# echo "lxc.start.auto = 1" >>/etc/lxc/autostart.conf

    root@host:~# lxc-create --name containera --config /etc/lxc/autostart.conf --template download -- --dist alpine --release 3.19 --arch amd64

As yet another option, if we want *all* of our containers to autostart, then we can modify the default LXC configuration directly.

For safe keeping, create a backup of the original LXC `default.conf` file.

    root@host:~# cp /etc/lxc/default.conf /etc/lxc/default.conf.original

Now modify the default configuration.

    root@host:~# echo "lxc.start.auto = 1" >>/etc/lxc/default.conf

All containers we create using the default configuration file from now on will have autostart. For example,

     root@host:~# lxc-create --name containerb --template download -- --dist alpine --release 3.19 --arch amd64

# IP Address

Above, the output of `lxc-info --name mycontainer` and `lxc-ls --fancy` have shown us that `mycontainer` has an IP address on the host's local network.

If we start a container and check the output of `lxc-ls` immediately, we will see that the container does not yet have an IP address.

    root@host:~# lxc-stop --name mycontainer

    root@host:~# lxc-start --name mycontainer && lxc-ls --fancy
    NAME        STATE   AUTOSTART GROUPS IPV4 IPV6 UNPRIVILEGED
    mycontainer RUNNING 1         -      -    -    false

If we wait about 5 seconds and check again, then the container does have an IP address.

    root@host:~# lxc-ls --fancy
    NAME        STATE   AUTOSTART GROUPS IPV4       IPV6 UNPRIVILEGED
    mycontainer RUNNING 1         -      10.0.3.152 -    false

If the container does not have an IP address, we may need to [configure the firewall](https://linuxcontainers.org/incus/docs/main/howto/network_bridge_firewalld/). For example, on Ubuntu 22.04


    root@host:~# ufw allow in on lxcbr0
    root@host:~# ufw route allow in on lxcbr0
    root@host:~# ufw route allow out on lxcbr0

where the value `lxcbr0` comes from `LXC_BRIDGE` in `/etc/default/lxc-net`.

If we are going to do something in the container that requires access to the Internet, we need to wait until the container has an IP address. One possibilty is to poll the output of `lxc-info` until it includes an IP address.

    root@host:~# lxc-start --name mycontainer

    root@host:~# while ! lxc-info -n mycontainer | grep -Eq "^IP:\s*[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\s*$"; do sleep 1; done; echo "Container connected!"
    Container connected!

Notice that the IP address `10.0.3.152` is not the same as the IP address `10.0.3.30` that we saw earlier. This is because the IP address is dynamically assigned by the host to the container when the container joins the network.

We can see the current list of leases with the following.

    root@host:~# cat /var/lib/misc/dnsmasq.lxcbr0.leases 
    1705896165 8e:e0:fc:72:79:65 10.0.3.152 mycontainer 01:8e:e0:fc:72:79:65

Stopping the container removes the lease.

    root@host:~# lxc-stop --name mycontainer;

    root@host:~# cat /var/lib/misc/dnsmasq.lxcbr0.leases

Restarting the container creates a new lease possibly with a different IP address.

    root@host:~# lxc-start --name mycontainer

    root@host:~# cat /var/lib/misc/dnsmasq.lxcbr0.leases
    1705896699 26:61:b7:e3:53:73 10.0.3.110 mycontainer 01:26:61:b7:e3:53:73

Don't try this at home but force destroying a container does not clear the container's lease. Be kind. Always stop a container before destroying it.

    root@host:~# lxc-destroy --force --name mycontainer

    root@host:~# cat /var/lib/misc/dnsmasq.lxcbr0.leases
    1705896699 26:61:b7:e3:53:73 10.0.3.110 mycontainer 01:26:61:b7:e3:53:73

## DHCP Reservation

We may need a predictable IP address for the container. We can make a DHCP reservation on the host so the container is assigned the same IP address each time the container joins the local network.

To enable DHCP reservations, we uncomment the `LXC_DHCP_CONFILE` line in `/etc/default/lxc-net`.

    root@host:~# sed -i 's|^#LXC_DHCP_CONFILE=.*$|LXC_DHCP_CONFILE=/etc/lxc/dnsmasq.conf|' /etc/default/lxc-net

Add the DHCP reservation.

    root@host:~# echo "dhcp-host=mycontainer,10.0.3.100" >>/etc/lxc/dnsmasq.conf

Note: the IP address (i.e. `10.0.3.100` in the command above) must be within `LXC_DHCP_RANGE`. To see `LXC_DHCP_RANGE`, open `/etc/lxc/dnsmasq.conf`. Suppose `LXC_DHCP_RANGE="10.0.1.2,10.0.1.254"`. Then the command above should be

    root@host:~# echo "dhcp-host=mycontainer,10.0.1.100" >>/etc/lxc/dnsmasq.conf

instead of the command with `10.0.3.100`. Moreover, the IP address must not already be in use. One way to pick an available IP address is use one of the addresses assigned dynamically while working through the section above.

Restart the `lxc-net` service so the DHCP reservation is enabled.

    root@host:~# service lxc-net restart

Restart the container. (You may need to recreate the container if you destroyed it somewhere along the way.)

    root@host:~# lxc-stop --name mycontainer

    root@host:~# lxc-start --name mycontainer

Wait a few seconds and then check the container's IP address.

    root@host:~# lxc-ls --fancy
    NAME        STATE   AUTOSTART GROUPS IPV4       IPV6 UNPRIVILEGED 
    mycontainer RUNNING 1         -      10.0.3.100 -    false        

Yay! Now we can depend on the container always having the same IP address.

# Add a Volume Mount

A container's file system activity is restricted to `/var/lib/lxc/<container-name>/rootfs`. When a container is destroyed all of `/var/lib/lxc/<container-name>` is also destroyed. You may have multiple containers and would like to share some file system space between them. You may have disposable containers and would like some file system space to outlive the container. In cases like these, you can create a host volume outside the container's `rootfs` and then mount that volume inside the container.

Suppose we have already created and started a container named `mycontainer` as described above.

Create the host volume.

    root@host:~# mkdir -p /host/path/to/volume

To mount the volume inside the container there are two options.

The first option requires two steps: manually create the mount target inside the container and then configure the container mount.

    root@host:~# lxc-attach --name mycontainer --clear-env -- mkdir -p /container/mount/point

    root@host:~# echo "lxc.mount.entry = /host/path/to/volume container/mount/point none bind 0 0" >>/var/lib/lxc/mycontainer/config

The second option requires only one step: use `create=dir` when configuring the mount so that the mount target is automatically created inside the container for you.

    root@host:~# echo "lxc.mount.entry = /host/path/to/volume container/mount/point none bind,create=dir 0 0" >>/var/lib/lxc/mycontainer/config

With either option, note that the container mount target path `container/mount/point` is relative. It does not have a leading `/` character.

After configuring the container, restart it so the new configuration is used.

    root@host:~# lxc-stop --name mycontainer

    root@host:~# lxc-start --name mycontainer

Now that we have created the volume and mounted it in the container, we can test that it works.

On the host, add a text file in the volume.

    root@host:~# echo "host message" >/host/path/to/volume/messages.txt

Start a container shell.

    root@host:~# lxc-attach --name mycontainer --clear-env

The container can see the text file and its content.

    root@mycontainer:~# cat /container/mount/point/messages.txt
    host message

The container can add text to the text file.

    root@mycontainer:~# echo "mycontainer message" >>/container/mount/point/messages.txt

Exit the container shell.

    root@mycontainer:~# exit

The host can see the container's message.
    
    root@host:~# cat /host/path/to/volume/messages.txt 
    host message
    mycontainer message

# Create Unprivileged Containers as Root with Shared UID and GID Ranges

Creating system-wide unprivileged containers (that is, unprivileged containers created and started by root) requires only a few extra steps to organize subordinate user IDs (uid) and subordinate group IDs (gid).

Specifically, you need to manually allocate the subordinate uid and gid ranges to root in `/etc/subuid` and `/etc/subgid` and then set those ranges in `/etc/lxc/default.conf` using `lxc.idmap` entries.

For example, if you have not done anything on your host related to subordinate uid and gid ranges, the following commands may be all you need. Before doing the following, take a look in `/etc/subuid` and `/etc/subgid` to see that the range 100000:65536 is not already in use on your host. If the range is in use, you can use another range.

    echo "root:100000:65536" >>/etc/subuid
    echo "root:100000:65536" >>/etc/subgid
    echo "lxc.idmap = u 0 100000 65536" >>/etc/lxc/default.conf
    echo "lxc.idmap = g 0 100000 65536" >>/etc/lxc/default.conf

That's it! Any container you create as root from now on will be running unprivileged. For example,

    lxc-create --name container1 --template download
    lxc-create --name container2 --template download

Note that all containers created using the modified default configuration in `/etc/lxc/default.conf` will share the same subordinate uid and gid ranges. This may not be as secure as each container having its own subordinate uid and gid ranges.

If you start a container, you can explore the uid range in use as seen from the host side compared to the uid range as seen from the container side.

    lxc-start --name container1
    ps aux
    lxc-attach --name container1 --clear-env -- ps aux

# Create Unprivileged Containers as Root with Separate UID and GID Ranges

By using separate subordinate uid and gid ranges for each container, a security breach in one container will not have access to other containers.

Suppose we want to have two containers, we could do the following. (This assumes `/etc/lxc/default.conf` has not been modified as described above.)

Configure and create the first container with its own uid and gid ranges.

    echo "root:100000:65536" >>/etc/subuid
    echo "root:100000:65536" >>/etc/subgid
    cp /etc/lxc/default.conf /etc/lxc/container1.conf
    echo "lxc.idmap = u 0 100000 65536" >>/etc/lxc/container1.conf
    echo "lxc.idmap = g 0 100000 65536" >>/etc/lxc/container1.conf
    lxc-create --config /etc/lxc/container1.conf --name container1 --template download

Configure and create the second container with different uid and gid ranges.

    echo "root:200000:65536" >>/etc/subuid
    echo "root:200000:65536" >>/etc/subgid
    cp /etc/lxc/default.conf /etc/lxc/container2.conf
    echo "lxc.idmap = u 0 200000 65536" >>/etc/lxc/container2.conf
    echo "lxc.idmap = g 0 200000 65536" >>/etc/lxc/container2.conf
    lxc-create --config /etc/lxc/container2.conf --name container2 --template download

After creating the containers, you can optionally delete the configuration files `/etc/lxc/container1.conf` and `/etc/lxc/container2.conf`.

# Create Unprivileged Containers as a User

Unprivileged containers are the safest containers. Those use a map of uid and gid to allocate a range of uids and gids to a container. That means that uid 0 (root) in the container is actually something like uid 100000 outside the container. So should something go very wrong and an attacker manages to escape the container, they'll find themselves with about as many rights as a nobody user.

Unfortunately this also means that the following common operations aren't allowed:

  * mounting of most filesystems
  * creating device nodes
  * any operation against a uid/gid outside of the mapped set

Because of that, most distribution templates simply won't work with those. Instead you should use the "download" template which will provide you with pre-built images of the distributions that are known to work in such an environment.

The following instructions assume the use of a recent Ubuntu system or an alternate Linux distribution offering a similar experience, i.e., a recent kernel and a recent version of shadow, as well as libpam-cgfs and default uid/gid allocation.

First of all, you need to make sure your user has a uid and gid map defined in `/etc/subuid` and `/etc/subgid`. On Ubuntu systems, a default allocation of 65536 uids and gids is given to every new user on the system, so you should already have one. If not, you'll have to use `usermod` to give yourself one.

Next up is `/etc/lxc/lxc-usernet` which is used to set network devices quota for unprivileged users. By default, your user isn't allowed to create any network device on the host, to change that, add:

    echo "$(id -un) veth lxcbr0 10" | sudo tee -a /etc/lxc/lxc-usernet

This means that "your-username" is allowed to create up to 10 veth devices connected to the lxcbr0 bridge.

With that done, the last step is to create an LXC configuration file.

* Create the `~/.config/lxc` directory if it doesn't exist.
* Copy `/etc/lxc/default.conf` to `~/.config/lxc/default.conf`
* Append the following two lines to it:
    * `lxc.idmap = u 0 100000 65536`
    * `lxc.idmap = g 0 100000 65536`

Those values should match those found in `/etc/subuid` and `/etc/subgid`, the values above are those expected for the first user on a standard Ubuntu system.

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

    systemd-run --unit=my-unit --user --scope -p "Delegate=yes" -- lxc-create --name mycontainer --template download

The download template will show you a list of distributions, versions, and architectures to choose from. A good example would be "ubuntu", "focal" (20.04 LTS), and "amd64". Another good example would be "alpine", "3.19", and "amd64".

To run unprivileged containers as an unprivileged user, the user must be allocated an empty delegated cgroup (this is required because of the leaf-node and delegation model of cgroup2, not because of liblxc). See [cgroups: Full cgroup2 support](/lxc/news/2020_03_25_13_03.html#cgroups-full-cgroup2-support) for more information.

It is not possible to simply start a container from a shell as a user and automatically delegate a cgroup. Therefore, you need to wrap each call to any of the `lxc-*` commands in a `systemd-run` command. For example, to start a container, use the following command instead of just `lxc-start mycontainer`:

    systemd-run --unit=my-unit --user --scope -p "Delegate=yes" -- lxc-start --name mycontainer

NOTE: If libpam-cgfs was not installed on the host machine prior to installing LXC, you need to ensure your user belongs to the right cgroups before creating your first container. You can accomplish this by logging out and logging back in, or by rebooting the host machine.

You can then confirm its status with either of:

    lxc-info --name mycontainer
    lxc-ls --fancy

And get a shell inside it with:

    lxc-attach --name mycontainer --clear-env

Stopping it can be done with:

    lxc-stop --name mycontainer

And finally removing it with:

    lxc-destroy --name mycontainer

# Distribution LXC Documentation
- [Debian](https://wiki.debian.org/LXC/CGroupV2#LXC_containers_started_by_non-root)
- [Arch Linux](https://wiki.archlinux.org/title/Linux_Containers#Enable_support_to_run_unprivileged_containers_(optional))
- [Fedora](https://fedoraproject.org/wiki/LXC)
