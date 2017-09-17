![Download icon](/static/img/containers.png)
# News
## LXC 2.1 release announcement <span class="text-muted">5th of September 2017</span>
The LXC team is proud to announce the release of LXC 2.1.  
This release contains a lot of new features introduced since the release of LXC 2.0.

Note that this isn't a LTS release and we'll therefore only be supporting LXC 2.1 for a year.  
Production environments that require longer term support should remain on LXC 2.0 which is supported until June 2021.

## New features
### Resource limit support
Similar to requesting specific cgroup limits users can specify any limits for any resource  
the underlying kernel is ware of by prefixing the name of the limit with "lxc.prlimit."  
in the container's configuration file. For example, to request a limit on the number of processes  
and a specific nice value the configuration file for the container should contain the entries:

    lxc.prlimit.nproc = unlimited
    lxc.prlimit.nice = 4

### Support for unprivileged openvswitch networks
It is now possible to define openvswitch networks as an unprivileged user:

    lxc.net.0.type = veth
    lxc.net.0.link = ovsbr0
    lxc.net.0.flags = up
    lxc.net.0.name = eth0

LXC 2.1. will take care to properly delete the host-side veth device from the  
openvswitch database on shutdown.

### New `lxc.cgroup.dir` key
The `lxc.cgroup.dir` key lets users specify the name of the parent cgroup under  
which the container's cgroup will be created. Setting `lxc.cgroup.dir` will  
override the system-wide setting for `lxc.cgroup.pattern`.

For example, setting `lxc.cgroup.dir = mycontainers` for a container with `lxc.uts.name = c1`  
will cause LXC to create the cgroups `mycontainers/c1` for all controllers in the cgroup hierarchy.

### Support for hybrid cgroup layout
Since the advent of cgroup v2 some init systems have decided to allow for a hybrid mode in which  
cgroup v1 per-controller hierarchies can be used simultaneously with an empty cgroup v2 hierarchy.  
Systems that use this hybrid mode usually have a cgroup layout similar to this one:

      /sys/fs/cgroup/blkio
      /sys/fs/cgroup/devices
      /sys/fs/cgroup/memory
      /sys/fs/cgroup/unified

Where the mountpoint `/sys/fs/cgroup/unified` usually indicates the presence of a cgroup v2 hierarchy.  
This can be confirmed by testing whether `findmnt | grep cgroup2` returns a matching line.  
LXC 2.1 supports this hybrid mode.

### Limiting the number of ptys a container can allocate
Setting `lxc.pty.max` will cause LXC to mount the container's devpts with the requested limit  
on the number of useable ptys. For example, setting `lxc.pty.max = 10` will only allow  
the container to allocate `10` ptys. The default setting is `1024`.

### `bool lxc_config_item_is_supported(const char *key)` API extension
This function let's users query the liblxc whether a specific configuration item is supported for this library.  
This is particularly useful for embedded users that running versions of liblxc that come with significantly  
less configuration options than the standard liblxc library or liblxc's that have backported new configuration items.

### New log API extension

    struct lxc_log {
        const char *name;
        const char *lxcpath;
        const char *file;
        const char *level;
        const char *prefix;
        bool quiet;
    };

    /*!
     *\brief Initialize the log
     *
     *\param log lxc log configuration.
     */
    int lxc_log_init(struct lxc_log *log);

    /*!
     * \brief Close log file.
     */
    void lxc_log_close(void);

These types and functions let users initialize LXC logging. This is useful for users who use the liblxc API directly.

### Deprecation of `lxc-monitord`
Starting with LXC 2.1 the `lxc-monitord` binary is marked as deprecated.  
It is not required anymore to start daemonized containers. Instead, LXC 2.1 switches to an implementation using  
an abstract unix domain socketpair. This has the advantage of spawning one less processes on container startup which is  
important for highly threaded users such as `LXD`.

Also, testing the new implementation on heavy workloads has shown this solution to be more robust and reliable in every way.

### `lxc-copy` create snapshots on `tmpfs`
Place an ephemeral container started with -e flag on a tmpfs.  
Restrictions are that you cannot request the data to be kept while placing the container on a tmpfs,  
that either overlay or aufs backing storage must be used, and that the storage backend of the original  
container must be a directory.

For ephemeral snapshots backed by overlay or aufs filesystems, a fresh tmpfs is mounted over the containers directory  
if the user requests it. This should be the easiest options. Anything else would require us to change the current  
mount-layout of overlay and aufs snapshots. A standard overlay or aufs snapshot clone currently has the layout:

            /var/lib/lxc/CLONE_SNAPSHOT/delta0      <-- upperdir
            /var/lib/lxc/CLONE_SNAPSHOT/rootfs
            /var/lib/lxc/CLONE_SNAPSHOT/olwork
            /var/lib/lxc/CLONE_SNAPSHOT/olwork/work <-- workdir

    with the lowerdir being

            /var/lib/lxc/CLONE_PARENT/rootfs

The fact that upperdir and workdir are not placed in a common subfolder under the container directory  
has the consequence that we cannot simply mount a fresh tmpfs under upperdir and workdir  
because overlay expects them to be on the same filesystem.

Because we mount a fresh tmpfs over the directory of the container the updated /etc/hostname file created  
during the clone residing in the upperdir (currently named "delta0" by default) will be hidden.

Hence, if the user requests that the old name is not to be kept for the clone, we recreate this file on the tmpfs.  
This should be all that is required to restore the exact behaviour we would get with a normal clone.  
NOTE: If the container is rebooted all changes made to it are lost. This is not easy to prevent since each reboot remounts the rootfs again.

## Configuration changes
A lot of configuration keys have been renamed to make the experience of configuring a container much more consistent.  
LXC 2.1 ensures that all keys that have subkeys are properly namespaces via the "." syntax.

### Network configuration
The network configuration keys have all been given a new prefix. Some of them  have also been renamed.  
From LXC 2.1. onwards network configuration keys using the "lxc.network" prefix are considered deprecated.  
They are replaced by network configuration keys using the new "lxc.net" prefix.  
Furthermore, defining network without indices is marked deprecated.  
Consider the following *legacy* network configuration:

    lxc.network.type = veth
    lxc.network.flags = up
    lxc.network.link = lxcbr0
    lxc.network.name = wlp2s0

    lxc.network.type = veth
    lxc.network.flags = up
    lxc.network.link = lxcbr0
    lxc.network.name = eno1

Would define two distinct networks. Starting with LXC 2.1 this should be replaced with:

    lxc.net.0.type = veth
    lxc.net.0.flags = up
    lxc.net.0.link = lxcbr0
    lxc.net.0.name = wlp2s0

    lxc.net.1.type = veth
    lxc.net.1.flags = up
    lxc.net.1.link = lxcbr0
    lxc.net.1.name = eno1

Defining networks only in this manner has the advantage of being consistent and order independent.  
This means an equivalent configuration for the two networks would be:

    lxc.net.1.link = lxcbr0
    lxc.net.0.name = wlp2s0
    lxc.net.0.type = veth

    lxc.net.1.type = veth
    lxc.net.1.flags = up
    lxc.net.0.flags = up
    lxc.net.0.link = lxcbr0
    lxc.net.1.name = eno1


Note that when using multiple definitions of the same key with the same index only the last one  
will be considered by LXC. This is in line with prior LXC version. For example:

    lxc.net.2.link = lxcbr0
    lxc.net.2.link = lxdbr0
    lxc.net.2.link = br0
    lxc.net.2.link = virbr0

would lead to LXC associating the network with `virbr0` since it is the last key in the configuration.

### Table of changed configuration keys
The following table lists the legacy configuration keys on the left side and their corresponding new keys on the right side. Keys that have been entirely removed will have "-" as entry in the "New Key" column and a comment saying "removed" in the "Comments" table.

    Legacy Key                           | New Key                       | Comments
    -------------------------------------|-------------------------------|---------
    lxc.aa_profile                       | lxc.apparmor.profile          |
    lxc.aa_allow_incomplete              | lxc.apparmor.allow_incomplete |
    lxc.console                          | lxc.console.path              |
    lxc.devttydir                        | lxc.tty.dir                   |
    lxc.haltsignal                       | lxc.signal.halt               |
    lxc.id_map                           | lxc.idmap                     |
    lxc.init_cmd                         | lxc.init.cmd                  |
    lxc.init_gid                         | lxc.init.gid                  |
    lxc.init_uid                         | lxc.init.uid                  |
    lxc.kmsg                             | -                             | removed
    lxc.limit                            | lxc.prlimit                   |
    lxc.logfile                          | lxc.log.file                  |
    lxc.loglevel                         | lxc.log.level                 |
    lxc.mount                            | lxc.mount.fstab               |
    lxc.network                          | lxc.net                       |
    lxc.network.                         | lxc.net.[i].                  |
    lxc.network.flags                    | lxc.net.[i].flags             |
    lxc.network.hwaddr                   | lxc.net.[i].hwaddr            |
    lxc.network.ipv4                     | lxc.net.[i].ipv4.address      |
    lxc.network.ipv4.gateway             | lxc.net.[i].ipv4.gateway      |
    lxc.network.ipv6                     | lxc.net.[i].ipv6.address      |
    lxc.network.ipv6.gateway             | lxc.net.[i].ipv6.gateway      |
    lxc.network.link                     | lxc.net.[i].link              |
    lxc.network.macvlan.mode             | lxc.net.[i].macvlan.mode      |
    lxc.network.mtu                      | lxc.net.[i].mtu               |
    lxc.network.name                     | lxc.net.[i].name              |
    lxc.network.script.down              | lxc.net.[i].script.down       |
    lxc.network.script.up                | lxc.net.[i].script.up         |
    lxc.network.type                     | lxc.net.[i].type              |
    lxc.network.veth.pair                | lxc.net.[i].veth.pair         |
    lxc.network.vlan.id                  | lxc.net.[i].vlan.id           |
    lxc.pivotdir                         | -                             | removed
    lxc.pts                              | lxc.pty.max                   |
    lxc.rebootsignal                     | lxc.signal.reboot             |
    lxc.rootfs                           | lxc.rootfs.path               |
    lxc.se_context                       | lxc.selinux.context           |
    lxc.seccomp                          | lxc.seccomp.profile           |
    lxc.stopsignal                       | lxc.signal.stop               |
    lxc.syslog                           | lxc.log.syslog                |
    lxc.tty                              | lxc.tty.max                   |
    lxc.utsname                          | lxc.uts.name                  |

### `lxc-update-config` script
LXC 2.1 comes with a new script `lxc-update-config` which can be used to upgrade existing legacy  
LXC configurations to valid LXC 2.1 configurations by simply passing

    lxc-update-config -c /path/to/config

The script will create a backup of the legacy configuration file first.  
The name of the backup config file will by `<original-config-file-name>.backup`.  
The backup is made in case the upgrade does not yield a useable LXC 2.1 config file.  
After creating the backup the script will replace all legacy configuration keys with their new counterparts.

## Deprecation warnings
LXC 2.1 intends to be fully backward compatible with respect to pre-2.1 configuration files.  
This specifically means that the presence of any deprecated keys should not prevent the container from being useable.  
However, LXC 2.1 will warn about the presence of any deprecated configuration keys.  
On container startup LXC 2.1 will warn *once* with the message:

    The configuration file contains legacy configuration keys.
    Please update your configuration file.

All users are advised to use the aforementioned `lxc-update-config` script to update their configuration files.  
If the container has logging enabled the log will contain warnings for each detected legacy configuration key.  
This is mostly useful for users who prefer to update their configuration files manually.

# Changelog

 * Core:
    * af unix: allow for maximum socket name
    * af\_unix: abstract lxc\_abstract\_unix\_{send,recv}\_fd
    * android: add prlimit implementation for 32bit
    * API: expose function lxc\_log\_init
    * API: add lxc\_config\_item\_is\_supported()
    * caps: add lxc\_{proc,file}\_cap\_is\_set()
    * cgroups: handle hybrid cgroup layouts
    * commands: handle EINTR
    * commands: add lxc\_cmd\_state\_server()
    * commands: switch api to new callback system
    * conf: implement resource limits
    * conf: check for {filecaps,setuid} on new{g,u}idmap
    * conf: use bind-mount for /dev/ptmx
    * conf: add MS\_LAZYTIME to mount options
    * conf: don't send ttys when none are configured
    * conf: send ttys in batches of 2
    * conf: log lxc-user-nic output
    * conf: refactor network deletion
    * conf: rework core functions
    * conf: improve lxc\_map\_ids()
    * conf: use minimal {g,u}id map
    * conf: allow writing uid mappings with euid != 0
    * conf: unstack all mounts atop /dev/console
    * conf{,ile}: warn user once about legacy config
    * confile: add lxc\_get\_idmaps()
    * confile: rework + extend callback system
    * confile: performance tweaks
    * confile: add "lxc.cgroup.dir"
    * confile: list namespaced keys
    * confile: lxc\_getconfig() -> lxc\_get\_config()
    * confile: improve get\_network\_config\_ops()
    * confile: move lxc\_list\_net()
    * confile: lxc\_listconfigs -> lxc\_list\_config\_items
    * confile: rework lxc\_list\_net()
    * confile: lxc.seccomp --> lxc.seccomp.profile
    * confile: lxc.pts --> lxc.pty.max
    * confile: lxc.tty --> lxc.tty.max
    * confile: lxc.net.ipv6 --> lxc.net.ipv6.address
    * confile: lxc.net.ipv4 --> lxc.net.ipv4.address
    * confile: lxc.mount --> lxc.mount.fstab
    * confile: lxc.console --> lxc.console.path
    * confile: lxc.rootfs --> lxc.rootfs.path
    * confile: deprecate lxc.rootfs.backend
    * confile: rename lxc.utsname to lxc.uts.name
    * confile: rename lxc.devttydir to lxc.tty.dir
    * confile: namespace lxc.signal keys
    * confile: namespace lxc.log keys
    * confile: namespace lxc.init keys
    * confile: rename lxc.limit to lxc.prlimit
    * confile: remove lxc.pivotdir
    * confile: remove lxc.kmsg
    * confile: properly namespace security keys
    * doc: adapt to new configuration keys
    * devpts: use max=<count> option on mount
    * lsm/AppArmor: Allow containers to start in AppArmor namespaces
    * lxccontainer: clear whole indexed networks
    * lxccontainer: switch api to new callback system
    * lxc-init: report exec\*() failure
    * lxc-user-nic: keep lines from other {users,links}
    * lxc-user-nic: fix adding database entries
    * lxc-user-nic: check db before trying to delete
    * lxc-user-nic: test privilege over netns on delete
    * lxc-user-nic: rework renaming net devices
    * lxc-user-nic: add new {create,delete} subcommands
    * monitor: simplify abstract socket logic
    * network: don't delete net devs we didn't create
    * network: remove allocation from lxc\_mkifname()
    * network: remove netpipe
    * network: use correct network device name
    * network: stop recording saved physical net devices
    * network: retrieve correct names and ifindices
    * network: use static memory for net device names
    * network: retrieve the host's veth device ifindex
    * network: rework network creation
    * network: delete ovs for unprivileged networks
    * network: log ifindex
    * network: send ifindex for unpriv networks
    * network: return negative idx for legacy networks
    * network: test new network configuration parser
    * network: add new network parser
    * network: preserve backwards compatibility
    * network: add test-suite for configuration items
    * openvswitch: delete ports intelligently
    * README: add CII Best Practices badge to README
    * seccomp: set SCMP\_FLTATR\_ATL\_TSKIP if available
    * start: generalize lxc\_check\_inherited()
    * start: use separate socket on daemonized start
    * start: switch from SOCK\_DGRAM to SOCK\_STREAM
    * start: don't let data\_sock users close the fd
    * start: ensure cgroups are cleaned up
    * start: remove utmp watch
    * start: lxc\_setup() after unshare(CLONE\_NEWCGROUP)
    * start: dup std{in,out,err} to pty slave
    * start: add lxc\_init\_handler()
    * start: add lxc\_free\_handler()
    * start: pin rootfs when privileged
    * storage: add lxc\_storage\_get\_path()
    * storage: add storage\_utils.{c.h}
    * storage: add overlay as valid backend
    * storage: rename files "bdev" -> "storage"
    * storage/aufs: mark deprecated
    * storage/btrfs: rework btrfs storage driver
    * storage/loop: rework loop storage driver
    * storage/lvm: rework lvm backend
    * storage/overlay: rework overlay storage driver
    * storage/overlay: correctly restore from snapshot
    * storage/overlay: correctly handle dependency tracking
    * storage/rbd: rework rbd storage driver
    * storage/zfs: rework zfs storage driver
    * tests: add tests for lxc.cgroup.dir
    * test: add test to get subkeys
    * tests: add unit tests for idmap parser
    * tests: enforce all methods for config items
    * tree-wide: struct bdev -> struct lxc\_storage
    * utils: add lxc\_nic\_exists()
    * utils: switch to has\_fs\_type()
    * utils: add has\_fs\_type() + is\_fs\_type()
    * utils: rework lxc\_deslashify()
    * utils: lxc\_make\_abstract\_socket\_name()
    * utils: add lxc\_safe\_ulong()
    * utils: add lxc\_unstack\_mountpoint()

 * Template:
    * templates/Alpine: Add support for ppc64le
    * templates/Alpine: use dl-cdn.a.o as default mirror instead of random one
    * templates/Alpine: add community repository to default repositories
    * templates/CentOS: use altarch mirror for CentOS on arches other than i386 and x86\_64
    * templates/CentOS: default to CentOS 7
    * templates/debian: Use deb.debian.org as the default Debian mirror
    * templates/debian: Add buster as a valid release
    * templates/opensuse: support leap 42.3
    * templates/opensuse: fix tumbleweed software selection
    * templates/opensuse: add Tumbleweed as supported release
    * templates/ubuntu: support netplan in newer releases by default
    * templates/ubuntu: conditionally move upstart ssh job, as it is now optional.
    * userns.conf: remove obsolete bind-mounts

 * Tools:
    * lxc-execute: print error message when failed
    * lxc-update-config: handle legacy networks
    * tools: add additional cgroup checks
    * tools: add lxc-update-config.in
    * tools/lxc-attach: allow for situations without /dev/tty
    * tools/lxc-checkconfig: Add CONFIG\_NETFILTER\_XT\_MATCH\_COMMENT
    * tools/lxc-checkconfig: verify new[ug]idmap are setuid-root
    * tools/lxc-ls: return all containers by default, new filter - list only defined containers.

# Downloads
The release tarballs may be found on our [download page](https://linuxcontainers.org/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 2.1.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-2.1).


## LXC 2.0.8 release announcement <span class="text-muted">11th of May 2017</span>
This is the eighth bugfix release for LXC 2.0.

Important:

 * Security fix for CVE-2017-5985
 * All templates have been updated to not set default passwords anymore,  
   instead requiring lxc-attach be used to configure users.  
   This may affect some automated environments that were relying on our  
   default (very much insecure) users.

Bugfixes:

 * Make lxc-start-ephemeral Python 3.2-compatible
 * Fix typo
 * Allow build without sys/capability.h
 * lxc-opensuse: fix default value for release code
 * util: always malloc for setproctitle
 * util: update setproctitle comments
 * confile: clear lxc.network.<n>.ipv{4,6} when empty
 * lxc\_setup\_tios(): Ignore SIGTTOU and SIGTTIN signals
 * Make lxc-net return non-zero on failure
 * seccomp: allow x32 guests on amd64 hosts.
 * Add HAVE\_LIBCAP
 * c/r: only supply --ext-mount-map for bind mounts
 * Added 'mkdir -p' functionality in create\_or\_remove\_cgroup
 * Use LXC\_ROOTFS\_MOUNT in clonehostname hook
 * squeeze is not a supported release anymore, drop the key
 * start: dumb down SIGCHLD from WARN() to NOTICE()
 * log: fix lxc\_unix\_epoch\_to\_utc()
 * cgfsng: make trim() safer
 * seccomp: set SCMP\_FLTATR\_ATL\_TSKIP if available
 * lxc-user-nic: re-order #includes
 * lxc-user-nic: improve + bugfix
 * lxc-user-nic: delete link on failure
 * conf: only try to delete veth when privileged
 * Fix lxc-containers to support multiple bridges
 * Fix mixed tab/spaces in previous patch
 * lxc-alpine: use dl-cdn.a.o as default mirror instead of random one
 * lxc-checkconfig: verify new[ug]idmap are setuid-root
 * [templates] archlinux: resolve conflicting files
 * [templates] archlinux: noneed default\_timezone variable
 * python3: Deal with potential NULL char\*
 * lxc-download.in / allow setting keyserver from env
 * lxc-download.in / Document keyserver change in help
 * Change variable check to match existing style
 * tree-wide: include <sys/sysmacros.h> directly
 * conf/ile: make sure buffer is large enough
 * tree-wide: include <sys/sysmacros.h> directly
 * tests: Support running on IPv6 networks
 * tests: Kill containers (don't wait for shutdown)
 * Fix opening wrong file in suggest\_default\_idmap
 * do not set the root password in the debian template
 * do not set insecure passwords
 * don't set a default password for altlinux, gentoo, openmandriva and pld
 * tools: exit with return code of lxc\_execute()
 * Keep veth.pair.name on network shutdown
 * Makefile: fix static clang init.lxc build
 * Avoid waiting for bridge interface if disabled in sysconfig/lxc | lxc-net via USE\_LXC\_BRIDGE
 * Increased buffer length in print\_stats()
 * avoid assigning  to a variable which is not POSIX shell proof (bug #1498)
 * remove obsolete note about api stability
 * conf: less error prone pointer access
 * conf: lxc\_map\_ids() non-functional changes
 * caps: add lxc_{proc,file}_cap\_is\_set()
 * conf: check for {filecaps,setuid} on new{g,u}idmap
 * conf: improve log when mounting rootfs
 * ls: simplify the judgment condition when list active containers
 * fix typo introduced in #1509
 * attach|unshare: fix the wrong comment
 * caps: skip file capability checks on android
 * autotools: check for cap\_get\_file
 * caps: return false if caps are not supported
 * conf: non-functional changes to setup\_pts()
 * conf: use bind-mount for /dev/ptmx
 * conf: non-functional changes
 * utils: use loop device helpers from LXD
 * create ISSUE\_TEMPLATE.md
 * cgroups: improve cgfsng debugging
 * issue template: fix typo
 * conf: close fd in lxc\_setup\_devpts()
 * conf: non-functional changes
 * utils: tweak lxc\_mount\_proc\_if\_needed()
 * Change sshd template to work with Ubuntu 17.04
 * conf: order mount options
 * conf: add MS\_LAZYTIME to mount options
 * monitor: report errno on exec() error
 * af unix: allow for maximum socket name
 * commands: avoid NULL pointer dereference
 * commands: non-functional changes
 * lxccontainer: avoid NULL pointer dereference
 * monitor: simplify abstract socket logic
 * precise is not the latest LTS, let's use xenial instead
 * fix the wrong exit status
 * conf: non-functional changes lxc\_fill\_autodev()
 * conf: remove /dev/console from lxc\_fill\_autodev()
 * conf: non-functional changes lxc\_setup()
 * conf: non-functional changes to console functions
 * conf: improve lxc\_setup\_dev\_console()
 * conf: lxc\_setup\_ttydir\_console()
 * config: remove /dev/console bind mount
 * doc: document console behavior
 * utils: add lxc\_unstack\_mountpoint()
 * conf: unstack all mounts atop /dev/console
 * console: fail when we cannot allocate peer tty
 * start: remove umount2()
 * conf: non-functional changes
 * utils: handle > 2^31 in lxc\_unstack\_mountpoint()
 * Install systemd units for CentOS
 * Merge `ubuntu` and `debian`case
 * start: add crucial details about lxc\_spawn()

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 2.0.8.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-2.0).


## LXC 1.0.10 release announcement <span class="text-muted">11th of May 2017</span>
This is the tenth bugfix release for LXC 1.0.

Important:

 * Security fix for CVE-2016-10124
 * Security fix for CVE-2017-5985

Bugfixes:

 * attach: simplify lsm\_openat()
 * commands: improve logging
 * utils: add macro \_\_LXC\_NUMSTRLEN
 * tests; Don't cause test failures on cleanup errors
 * conf: clearly report to either use drop or keep
 * attach: close lsm label file descriptor
 * conf, attach: save errno across call to close
 * templates/lxc-debian.in: Fix typo in calling dpkg with --print-foreign-architectures option
 * templates/lxc-debian.in: handle ppc hostarch -> powerpc
 * Fix regression in errno handling cherry-pick
 * don't try to get stuff from /usr/lib/systemd on the host
 * lxc-opensuse: rm poweroff.target -> sigpwr.target copy
 * Add --enable-gnutls option
 * tests: skip unpriv tests on broken overlay module
 * Use AC\_HEADER\_MAJOR to detect major()/minor()/makedev()
 * Make lxc-start-ephemeral Python 3.2-compatible
 * systemd: enable delegate in service file
 * confile: clear lxc.network.<n>.ipv{4,6} when empty
 * seccomp: allow x32 guests on amd64 hosts.
 * squeeze is not a supported release anymore, drop the key
 * seccomp: set SCMP\_FLTATR\_ATL\_TSKIP if available
 * lxc-checkconfig: verify new[ug]idmap are setuid-root
 * python3: Deal with potential NULL char\*
 * lxc-download.in / allow setting keyserver from env
 * lxc-download.in / Document keyserver change in help
 * Change variable check to match existing style
 * tests: Support running on IPv6 networks
 * tests: Kill containers (don't wait for shutdown)
 * Fix opening wrong file in suggest\_default\_idmap
 * lxc\_setup\_tios(): Ignore SIGTTOU and SIGTTIN signals
 * Increased buffer length in print\_stats()
 * remove obsolete note about api stability
 * conf: less error prone pointer access
 * create ISSUE\_TEMPLATE.md
 * issue template: fix typo
 * conf: order mount options
 * commands: avoid NULL pointer dereference
 * commands: non-functional changes
 * lxccontainer: avoid NULL pointer dereference

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.0.10.

Please note that LXC upstream strongly recommends 1.0 users to upgrade to the 2.0 LTS release.  
The 1.0 branch will keep being supported until June 2019, but at this point,  
only critical bugfixes and security updates will be backported.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.0).


## LXC 2.0.7 release announcement <span class="text-muted">23rd of January 2017</span>
This is the seventh bugfix release for LXC 2.0.

The main bugfixes in this release are:

 * attach: Close lsm label file descriptor
 * attach: Non-functional changes
 * attach: Simplify lsm\_openat()
 * caps: Add lxc\_cap\_is\_set()
 * conf: attach: Save errno across call to close
 * conf: Clearly report to either use drop or keep
 * conf: criu: Add make\_anonymous\_mount\_file()
 * conf: Fix suggest\_default\_idmap()
 * configure: Add --enable-gnutls option
 * configure: Check for memfd\_create()
 * configure: Check whether gettid() is declared
 * configure: Do not allow variable length arrays
 * configure: Remove -Werror=vla
 * configure: Use AC\_HEADER\_MAJOR to detect major()/minor()/makedev()
 * conf: Non-functional changes
 * conf: Remove thread-unsafe strsignal + improve log
 * init: Add cgroupfs-mount to Should-Start/Stop sysvinit LSB headers
 * log: Add lxc\_unix\_epoch\_to\_utc()
 * log: Annotate lxc\_unix\_epoch\_to\_utc()
 * log: Drop all timezone conversion functions
 * log: Make sure that date is correctly formatted
 * log: Use lxc\_unix\_epoch\_to\_utc()
 * log: Use N/A if getpid() != gettid() when threaded
 * log: Use thread-safe localtime\_r()
 * lvm: Suppress warnings about leaked files
 * lxccontainer: Log failure to send sig to init pid
 * monitor: Add more logging
 * monitor: Close mainloop on exit if we opened it
 * monitor: Improve log + set log level to DEBUG
 * monitor: Log which pipe fd is currently used
 * monitor: Make lxc-monitord async signal safe
 * monitor: Non-functional changes
 * python3-lxc: Fix api\_test.py on s390x
 * start: Check for CAP\_SETGID before setgroups()
 * start: Fix execute and improve setgroups() calls
 * state: Use async signal safe fun in lxc\_wait()
 * templates: lxc-debian: Don't try to get stuff from /usr/lib/systemd on the host
 * templates: lxc-debian: Fix getty service startup
 * templates: lxc-debian: Fix typo in calling dpkg with --print-foreign-architectures option
 * templates: lxc-debian: Handle ppc hostarch -> powerpc
 * templates: lxc-opensuse: Change openSUSE default release to Leap 42.2
 * templates: lxc-opensuse: Remove libgcc\_s1
 * templates: lxc-opensuse: Remove poweroff.target -> sigpwr.target copy
 * templates: lxc-opensuse: Set to be unconfined by AppArmor
 * templates: lxc-opensuse: Update for Leap 42.2
 * tests; Don't cause test failures on cleanup errors
 * tests: Skip unpriv tests on broken overlay module
 * tools: Improve logging
 * tools: lxc-start: Remove c->is\_defined(c) check
 * tools: lxc-start: Set configfile after load\_config
 * tools: Only check for O\_RDONLY
 * tree-wide: Random macro cleanups
 * tree-wide: Remove any variable length arrays
 * tree-wide: Sic semper assertis!
 * utils: Add macro \_\_LXC\_NUMSTRLEN
 * utils: Add uid, gid, group convenience wrappers

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 2.0.7.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-2.0).


## LXC 2.0.6 release announcement <span class="text-muted">23rd of November 2016</span>
This is the sixth bugfix release for LXC 2.0.

Important:

 * Security fix for CVE-2016-8649

Bugfixes:

 * utils: make detect\_ramfs\_rootfs() return bool
 * tests: add test for detect\_ramfs\_rootfs()
 * add Documentation entries to lxc and lxc@ units
 * mark the python examples as having utf-8 encoding
 * log: sanity check the returned value from snprintf()
 * lxc-alpine: mount /dev/shm as tmpfs
 * archlinux: Do DHCP on eth0
 * archlinux: Fix resolving
 * Drop leftover references to lxc\_strerror()
 * tests: fix image download for s390x
 * tools: fix coding style in lxc\_attach
 * tools: make overlay valid backend
 * tools: better error reporting for lxc-start
 * alpine: Fix installing extra packages
 * lxc-alpine: do not drop setfcap
 * s390x: Fix seccomp handling of personalities
 * tools: correct the argument typo in lxc\_copy
 * Use libtool for liblxc.so
 * c/r: use --external instead of --veth-pair
 * c/r: remember to increment netnr
 * c/r: add checkpoint/restore support for macvlan interfaces
 * ubuntu: Fix package upgrades requiring proc
 * c/r: drop duplicate hunk from macvlan case
 * c/r: use snprintf to compute device name
 * Tweak libtool handling to work with Android
 * tests: add lxc\_error() and lxc\_debug()
 * container start: clone newcgroup immediately
 * use python3\_sitearch for including the python code
 * fix rpm build, include all built files, but only once
 * cgfs: fix invalid free()
 * find OpenSUSE's build also as obs-build
 * improve help text for --fancy and --fancy-format
 * improve wording of the help page for lxc-ls
 * cgfs: add print\_cgfs\_init\_debuginfo()
 * cgfs: skip empty entries under /proc/self/cgroup
 * cgfs: explicitly check for NULL
 * tools: use correct exit code for lxc-stop
 * c/r: explicitly emit bind mounts as criu arguments
 * log: bump LXC\_LOG\_BUFFER\_SIZE to 4096
 * conf: merge network namespace move & rename on shutdown
 * c/r: save criu's stdout during dump too
 * c/r: remove extra \ns from logs
 * c/r: fix off-by-one error
 * c/r: check state before doing a checkpoint/restore
 * start: CLONE\_NEWCGROUP after we have setup cgroups
 * create symlink for /var/run
 * utils: add lxc\_append\_string()
 * cgroups: remove isolated cpus from cpuset.cpus
 * Update Ubuntu release name: add zesty and remove wily
 * templates: add squashfs support to lxc-ubuntu-cloud.in
 * cgroups: skip v2 hierarchy entry
 * also stop lxc-net in runlevels 0 and 6
 * add lxc.egg-info to gitignore
 * install bash completion where pkg-config tells us to
 * conf: do not use %m format specifier
 * debian: Don't depend on libui-dialog-perl
 * cgroups: use %zu format specifier to print size\_t
 * lxc-checkpoint: automatically detect if --external or --veth-pair
 * cgroups: prevent segfault in cgfsng
 * utils: add lxc\_preserve\_ns()
 * start: add netnsfd to lxc\_handler
 * conf: use lxc\_preserve\_ns()
 * attach: use lxc\_preserve\_ns()
 * lxc\_user\_nic: use lxc\_preserve\_ns()
 * conf, start: improve log output
 * conf: explicitly remove veth device from host
 * conf, start: be smarter when deleting networks
 * start, utils: improve preserve\_ns()
 * start, error: improve log + non-functional changes
 * start, namespace: move ns\_info to namespace.{c,h}
 * attach, utils: bugfixes
 * attach: use ns\_info[LXC\_NS\_MAX] struct
 * namespace: always attach to user namespace first
 * cgroup: improve isolcpus handling
 * cgroups: handle non-existent isolcpus file
 * utils: add lxc\_safe\_uint()
 * tests: add unit tests for lxc\_safe\_uint()
 * utils: add lxc\_safe\_int()
 * tests: add unit tests for lxc\_safe\_int()
 * conf/ile: get ip prefix via lxc\_safe\_uint()
 * confile: use lxc\_safe\_u/int in config\_init\_{u,g}id
 * conf/ile: use lxc\_safe\_uint() in config\_pts()
 * conf/ile: use lxc\_safe\_u/int() in config\_start()
 * conf/ile: use lxc\_safe\_uint() in config\_monitor()
 * conf/ile: use lxc\_safe\_uint() in config\_tty()
 * conf/ile: use lxc\_safe\_uint() in config\_kmsg()
 * conf/ile: avoid atoi in config\_lsm\_aa\_incomplete()
 * conf/ile: use lxc\_safe\_uint() in config\_autodev()
 * conf/ile: avoid atoi() in config\_ephemeral()
 * utils: use lxc\_safe\_int()
 * lxc\_monitord: use lxc\_safe\_int() && use exit()
 * start: use lxc\_safe\_int()
 * conf: use lxc\_safe\_{u}int()
 * tools/lxc\_execute: use lxc\_safe\_uint()
 * tools/lxc\_stop: use lxc\_safe\_uint()
 * utils: add lxc\_safe\_long()
 * tests: add unit tests for lxc\_safe\_long()
 * tools/lxc\_stop: use lxc\_safe\_long()
 * tools/lxc\_top: use lxc\_safe\_int()
 * tools/lxc\_ls: use lxc\_safe\_uint()
 * tools/lxc\_autostart: use lxc\_safe\_{int,long}()
 * tools/lxc\_console: use lxc\_safe\_uint()
 * tools: replace non-standard namespace identifiers
 * Configure a static MAC address on the LXC bridge
 * tests: remove overflow tests
 * attach: do not send procfd to attached process

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 2.0.6.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-2.0).


## LXC 1.0.9 release announcement <span class="text-muted">23rd of November 2016</span>
This is the ninth bugfix release for LXC 1.0.

Important:

 * Security fix for CVE-2016-8649

Bugfixes:

 * doc: change "-t" option of lxc-create(1) to being required
 * ubuntu-cloud: Various fixes
 * coverity: avoid null pointer dereference in cgmanager
 * Use /usr/bin/env python3 instead of /usr/bin/python3 project-wide
 * Fetch Debian archive GPG keyrings when they're not available
 * seccomp: handle inverted arch
 * Better handle preserve\_ns behavior
 * Revert "seccomp: handle inverted arch"
 * lxc\_container struct: add comment about moving member fns
 * debian: Fix container creation on missing cache
 * lxc: let lxc-start support wlan phys
 * apparmor: support lxc.aa\_profile = unchanged
 * seccomp: support 32-bit arm on arm64, and 32-bit ppc on ppc64
 * Conditional compilation for ARM and PPC
 * prune\_init\_cgroup: don't dereference NULL
 * fix 'lxc.mount.entry' key when clearing unexpanded config
 * Update get\_item test after the lxc.mount.entry fix
 * Fix seccomp profile on attach of undefined container
 * Return immediately in save\_phys\_nics if not run as root Physical nic is not instantiated in lxc\_create\_network
 * lxc-checkconfig: remove zgrep dependency
 * Refactoring conditional directives.
 * Fix swap calculation
 * python-lxc: Call PyOS\_AfterFork after attaching to a container
 * fix buffer overflow in ifaddrs.c
 * Documenting valueless lxc.cap.drop behaviour
 * NULL pointer deference if nlmsg\_reserve() returns NULL for ifi
 * Don't try to change aa label if we are already apparmor-confined
 * coverity: preserve\_ns returns bool, not int
 * apparmor: recognize 'unconfined' as unconfined.
 * bash completion: the 'have' command was deprecated in favor of '\_have'
 * Set the right variable to NULL when unsetting ipv6\_gateway
 * preserve inherited fds for stop hook
 * avoid printing null string in error message
 * Fix Comment inside Fedora Template
 * doc: Add valueless lxc.cap.drop behaviour to Japanese man page
 * Document clear behaviour of list options
 * fix lockpath removal in Python lxc-ls
 * Document network clear option
 * open\_without\_symlink: Account when prefix is empty string
 * lxc\_setup\_fs: Create /dev/shm folder if it doesn't exist
 * cgmanager: don't make tasks + cgroup.procs +x
 * cleanup: lxc\_container::want\_\* comment descriptions
 * Fix echo statement inside fedora template
 * Use ${utsname} instead of ${UTSNAME} because latter variable is not defined.
 * Ignore any container with a name starting by '.'
 * increase /dev size to 500k ( issue #781)
 * cgfs: prune the init scope from paths
 * doc: add clear behaviour of list options to Japanese lxc.container.conf(5)
 * doc: Add network clear option to Japanese lxc.container.conf(5)
 * apparmor: allow binding /run/{,lock/} -> /var/run/{,lock/}
 * log.c:\_\_lxc\_log\_set\_file: fname cannot be null
 * log.c:\_\_lxc\_log\_set\_file: completely close log file when overriding
 * Allow sysfs remount by mountall
 * cgroups: do not fail if setting devices cgroup fails due to EPERM
 * cgfs: also check for EACCES when writing devices
 * lxc: cgfs: handle lxcfs
 * Fix typo in lxc manpage
 * cgfs: make sure we use valid cgroup mountpoints
 * cgfs: be less verbose
 * doc: improve Japanese lxc-attach(1)
 * doc: improve lxc-unshare(1)
 * open\_without\_symlink: Don't SYSERROR on something else than ELOOP
 * lxc-busybox: Touch /etc/fstab in the container rootfs
 * sync: add LXC\_SYNC\_ERROR to report errors from another process.
 * start: use LXC\_SYNC\_ERROR to report errors.
 * lxc-busybox: Remove warning for dynamically linked Busybox
 * Fix installation of out-of-tree (VPATH) builds
 * use httpredir.debian.org as the default Debian mirror
 * always provide a default mirror for debootstraping Ubuntu
 * lxc-ubuntu: Fix building on secondary architectures
 * update Debian release names
 * fix btrfs\_recursive\_destroy
 * store errno immediately after ioctl
 * fix spelling mistakes spotted by Debian's lintian
 * netlink\_open: close socket on error
 * lxc\_mount\_auto\_mounts(): free memory on failure
 * Ignore temporary files generated by doxygen
 * nicer date format and support for SOURCE\_DATE\_EPOCH in LXC\_GENERATE\_DATE
 * drop obsolete syslog.target from lxc.service.in
 * Update maintainers
 * Check if stdout is a terminal in lxc-checkconfig
 * Fixed - set PyErr when Container.\_\_init\_\_ fails
 * Added `type` to keys in lxc\_list\_nicconfigs
 * Force DHCP client to send hostname
 * sync: fail on unexpected message sizes
 * sync.c: use correct types
 * Added OR statement for cases of ID = rhel in RHEL 7+
 * Unshare netns after setting the userns mappings
 * Allow configuration file values to be quoted
 * Also allow fstype=fuse for fuse filesystems
 * Fix hostname in interface config for apline template
 * Fix redefinition of struct in6\_addr
 * lxc-debian: make sure init is installed
 * plamo: Improve Plamo template
 * AppArmor: add make-rslave to usr.bin.lxc-start
 * Include all lxcmntent.h function declarations on Bionic
 * lxc-debian: fix regression when creating wheezy containers
 * Set up MTU for vlan-type interfaces.
 * templates: avoid noisy perl warnings caused by missing locales
 * Add a prefix to the lxc.pc
 * conf: set pty\_info to NULL after free
 * apparmor: Refresh generated file
 * tools: add missing newline in lxc-create output
 * Use full GPG fingerprint instead of long IDs.
 * utils: Add mips signalfd syscall numbers
 * seccomp: Implement MIPS seccomp handling
 * seccomp: Add mips and mips64 entries to lxc\_config\_parse\_arch
 * seccomp: fix strerror()
 * confile: add more archs to lxc\_config\_parse\_arch()
 * seccomp: add support for s390x
 * seccomp: remove double include and order includes
 * seccomp: non functional changes
 * templates: fedora requires openssl binary
 * set FULL\_PATH\_NAMES=NO in doc/api/Doxyfile
 * console: use correct log name
 * lxczfs: small fixes
 * make rsync deal with sparse files efficiently
 * lxc-create -t debian fails on ppc64el arch
 * utils: fix lxc\_string\_split()
 * Fix spelling of CentOS in the templates
 * mark the python examples as having utf-8 encoding
 * log: sanity check the returned value from snprintf()
 * archlinux: Do DHCP on eth0
 * archlinux: Fix resolving
 * Drop leftover references to lxc\_strerror().
 * s390x: Fix seccomp handling of personalities
 * ubuntu: Fix package upgrades requiring proc
 * use python3\_sitearch for including the python code
 * cgfs: fix invalid free()
 * cgfs: add print\_cgfs\_init\_debuginfo()
 * cgfs: skip empty entries under /proc/self/cgroup
 * tools: use correct exit code for lxc-stop
 * conf: merge network namespace move & rename on shutdown
 * create symlink for /var/run
 * cgfs: explicitly check for NULL
 * templates: add squashfs support to lxc-ubuntu-cloud.in
 * install bash completion where pkg-config tells us to
 * conf: do not use %m format specifier
 * debian: Don't depend on libui-dialog-perl
 * Replace 'index' by 'strchr' for Android build
 * tree-wide: replace readdir\_r() with readdir()
 * attach: do not send procfd to attached process

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.0.9.

Please note that LXC upstream strongly recommends 1.0 users to upgrade to the 2.0 LTS release.  
The 1.0 branch will keep being supported until June 2019, but at this point,  
only critical bugfixes and security updates will be backported.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.0).


## LXC 2.0.5 release announcement <span class="text-muted">5th of October 2016</span>
This is the fifth bugfix release for LXC 2.0.

The main bugfixes in this release are:

 * Fix .gitignore after /tools/ split
 * Add lxc-test-utils to .gitignore
 * bdev: use correct overlay module name
 * cleanup: tools: remove --name from lxc-top usage message
 * cleanup: whitespaces in option alignment for lxc-execute
 * Use full GPG fingerprint instead of long IDs.
 * tools: move --rcfile to the common options list
 * tools: set configfile after load\_config
 * doc: add --rcfile to common opts
 * doc: Update Korean lxc-attach(1)
 * doc: Add --rcfile to Korean common opts
 * doc: Add --rcfile to Japanese common opts
 * tools: use exit(EXIT\_\*) everywhere
 * tools: unify exit() calls outside of main()
 * utils: Add mips signalfd syscall numbers
 * seccomp: Implement MIPS seccomp handling
 * seccomp: Add mips and mips64 entries to lxc\_config\_parse\_arch
 * seccomp: fix strerror()
 * confile: add more archs to lxc\_config\_parse\_arch()
 * seccomp: add support for s390x
 * seccomp: remove double include and order includes
 * seccomp: non functional changes
 * templates: use fd 9 instead of 200
 * templates: fedora requires openssl binary
 * tools: use boolean for ret in lxc\_device.c
 * c/r: use /proc/self/tid/children instead of pidfile
 * c/r: Fix pid\_t on some arches
 * templates: Add mips hostarch detection to debian
 * cleanup: replace tabs wth spaces in usage strings
 * remove extra 'ret'
 * c/r: write status only after trying to parse the pid
 * set FULL\_PATH\_NAMES=NO in doc/api/Doxyfile
 * templates: rm halt.target -> sigpwr.target symlink
 * templates: remove creation of bogus directory
 * console: use correct log name
 * configure: add --disable-werror
 * tests: fix get\_item tests
 * templates: use correct cron version in alpine template
 * c/r: zero a smaller than known migrate\_opts struct
 * lxczfs: small fixes
 * c/r: free valid\_opts if necessary
 * make rsync deal with sparse files efficiently
 * lxc-create -t debian fails on ppc64el arch
 * c/r: fix typo in comment
 * cgroup: add new functions for interacting with hierachies
 * utils: add lxc\_deslashify
 * c/r: pass --cgroup-roots on checkpoint
 * cgroup: get rid of weird hack in cgfsng\_escape
 * cgroup: drop cgroup\_canonical\_path
 * c/r: check that cgroup\_num\_hierarchies > 0
 * tools: do not add trailing spaces on lxc-ls -1
 * conf: retrieve mtu from netdev->link
 * conf: try to retrieve mtu from veth
 * c/r: detatch from controlling tty on restore
 * Fix null derefence if attach is called without access to any tty
 * utils: fix lxc\_string\_split()
 * tools: lxc\_deslashify() handle special cases
 * tests: add unit tests for lxc\_deslashify()
 * Fix for ALTLinux container creation in all branches
 * utils: lxc\_deslashify() free memory
 * Fix spelling of CentOS in the templates
 * Define LXC\_DEVEL to detect development releases
 * tools: lxc-checkconfig conditionalize devpts check

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 2.0.5.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-2.0).

## End of life announcement for LXC 1.1 <span class="text-muted">1st of September 2016</span>
LXC 1.1 has now reached its end of life.

This means that the stable-1.1 branch is now closed and we will not be  
doing any more bugfix or security releases for this branch.

Anyone still on LXC 1.1 should upgrade to 2.0 as soon as possible.

As a reminder, we currently support the following releaes:

 * LXC 1.0.x until June 1st 2019
 * LXC 2.0.x until June 1st 2021

## LXC 2.0.4 release announcement <span class="text-muted">15th of August 2016</span>
This is the fourth bugfix release for LXC 2.0.

The main bugfixes in this release are:

 * core: Add a prefix to the lxc.pc
 * core: Add flag in mount\_entry to skip NODEV in case of a persistent dev entry
 * core: Add missing cgroup namespace to ns\_info struct
 * core: attach: setns instead of unshare in lxc-attach
 * core: bdev: Add subdirectories to search path
 * core: bdev: Be smarter about btrfs subvolume detection
 * core: cgfsng: Don't pre-calculate path
 * core: cgfsng: Fix is\_lxcfs() and is\_cgroupfs()
 * core: cgroups: Move cgroup files to common subfolder
 * core: conf: Set pty\_info to NULL after free
 * core: Detect if we should send SIGRTMIN+3
 * core: Replace readdir\_r() with readdir()
 * core: Set up MTU for vlan-type interfaces.
 * core: tools, tests: Reorganize repo
 * c/r: Add support for CRIU's --action-script
 * c/r: Add support for ghost-limit in CRIU
 * c/r: Drop in-flight connections during CRIU dump
 * c/r: Initialize migrate\_opts properly
 * c/r: Make local function static
 * c/r: Replace tmpnam() with mkstemp()
 * c/r: Store criu version
 * c/r: Use PRIu64 format specifier
 * doc: Fix typo found by lintian
 * doc: Update Japanese lxc-attach(1)
 * doc: Update lxc-attach(1)
 * lxc-attach: Add -f option (rcfile)
 * lxc-attach: Cleanup whitespaces
 * lxc-create: Add missing newline in output
 * lxc-ls: Use correct runtime path
 * templates: alpine: Add support for new arch
 * templates: alpine: Mount tmpfs under /run
 * templates: debian: Add more quotes to variables (at least $rootfs should now be covered)
 * templates: debian: Avoid noisy perl warnings caused by missing locales
 * templates: debian: fix regression when creating wheezy containers
 * templates: debian: Make shellcheck (Ubuntu: 0.3.7-5 amd64) most possible happy
 * tests: Add unit tests for lxc\_string\_in\_array()
 * tests: Add unit tests for lxc\_string\_replace()

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 2.0.4.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-2.0).


## LXC 2.0.3 release announcement <span class="text-muted">28th of June 2016</span>
This is the third bugfix release for LXC 2.0.

LXC 2.0.3 was released just minutes after LXC 2.0.2 as we spotted an incorrect  
AppArmor profile included in the LXC 2.0.2 release tarball.

The main bugfixes in this release are:

 * apparmor: Refresh generated file

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 2.0.3.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-2.0).


## LXC 2.0.2 release announcement <span class="text-muted">28th of June 2016</span>
This is the second bugfix release for LXC 2.0.

Please do not use LXC 2.0.2, instead use 2.0.3 which fixes  
an accidental regression in AppArmor coverage.

The main bugfixes in this release are:

 * apparmor: add make-rslave to usr.bin.lxc-start
 * apparmor: Allow bind-mounts and {r}shared/{r}private
 * apparmor: allow mount move
 * apparmor: Update mount states handling
 * core: Drop lxc-devsetup as unneeded by current autodev
 * core: Fix redefinition of struct in6\_addr
 * core: Include all lxcmntent.h function declarations on Bionic
 * c/r: c/r: use criu's "full" mode for cgroups
 * systemd: start containers in foreground when using the lxc@.service
 * templates: debian: Make sure init is installed
 * templates: oracle: Fix console login
 * templates: plamo: Fix various issues
 * templates: ubuntu: Install apt-transport-https by default
 * travis: ensure 'make install' doesn't fail
 * travis: test VPATH builds
 * upstart: Force lxc-instance to behave like a good Upstart client

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 2.0.2.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-2.0).


## LXC 2.0.1 release announcement <span class="text-muted">16th of May 2016</span>
This is the first bugfix release for LXC 2.0.

The main bugfixes in this release are:

 * apparmor: Also allow fstype=fuse for fuse filesystems
 * attach: adapt lxc-attach tests & add test for pty logging
 * attach: don't fail attach on failure to setup a SIGWINCH handler.
 * attach: fix a variety of lxc-attach pts handling issues
 * attach: switch console pty to raw mode (fixes ncurses-based programs)
 * attach: use raw settings of ssh for pty
 * bindings: fixed python-lxc reference to var before assignment in create()
 * bindings: set PyErr when Container.\_\_init\_\_ fails
 * cgfsng: defer to cgfs if needed subsystems are not available
 * cgfsng: don't require that systemd subsystem be mounted
 * core: Added missing `type` to keys in lxc\_list\_nicconfigs
 * core: Allow configuration file values to be quoted
 * core: log: remove duplicate definitons and bump buffer size
 * core: sync: properly fail on unexpected message sizes
 * core: Unshare netns after setting the userns mappings (fixes ownership of /proc/net)
 * core: various fixes as reported by static analysis
 * c/r: add an option to use faster inotify support in CRIU
 * c/r: rearrange things to pass struct migrate\_opts all the way down
 * doc: ignore temporary files generated by doxygen
 * doc: tweak manpage generation date to be compatible with reproducible builds
 * doc: update MAINTAINERS
 * doc: update to translated manpages
 * init: add missing lsb headers to sysvinit scripts
 * init: don't make sysv init scripts dependant on distribution specifics
 * init: drop obsolete syslog.target from lxc.service.in
 * lxc-attach: add logging option to manpage
 * lxc-checkconfig: better render when stdout isn't a terminal
 * lxc-create: fix -B best option
 * lxc-destroy: avoid double print
 * lxc-ls: use fewer syscalls when doing ipc
 * templates: Add apt-transport-https to minbase variant of Ubuntu template
 * templates: fix a typo in the capabilities name for Gentoo (sys\_resource)
 * templates: logic fix in the Centos template for RHEL7+ support
 * templates: tweak Alpine DHCP configuration to send its hostname
 * templates: tweak to network configuration of the Oracle template

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 2.0.1.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-2.0).


## LXC 2.0.0 release announcement <span class="text-muted">6th of April 2016</span>
The LXC team is very pleased to announce the release of LXC 2.0!

### Highlights

 * All main LXC commands have now been rewritten in C
    * lxc-ls
    * lxc-device
    * lxc-copy
 * New lxc-copy command taking over the role of lxc-clone and lxc-start-ephemeral
 * Much improved support for checkpoint/restore of containers
 * Completely reworked cgroup handling including support for the cgroup namespace
 * The various command line tools are now much more consistent
 * Re-organized storage backend implementation, including addition of a Ceph RBD backend
 * An enormous amount of bugfixes, most of which will be backported to 1.0 and 1.1 over the next few bugfix releases
 * The C API remains backward compatible with previous versions and is released as 1.2

This release was made possible by contributions (720 commits) from a total of 96 contributors.

### New configuration options

 * lxc.ephemeral: Controls whether the container is ephemeral and so will be destroyed on shutdown
 * lxc.rebootsignal: Allows to override the signal sent for container reboot
 * lxc.hook.destroy: New hook being called on container destruction
 * lxc.hook.stop: Run in the host context with references to the containers just before namespace teardown
 * lxc.init\_uid: Used by lxc-execute to set an alternative user
 * lxc.init\_gid: Used by lxc-execute to set an alternative group
 * lxc.monitor.unshare: Allows unsharing the mount namespace prior to running any hook

### New features

 * API:
    * API version is 1.2, fully backward compatible with 1.1 and 1.0
    * new symbols:
         * New migrate() symbol as an alternative to checkpoint() using a migrate_opts struct to simplify additions
    * python3
         * Support for passing the storage backend to create()
    * lua
         * Add support for get_ips()
         * Add support for get_interfaces()
         * Add support for rename()
 * Core:
    * cgfsng: New cgroup backend driver for recent Linux kernel
    * cgroup: Partial support for the new cgroup hierarchy
    * cgroup: Support for the cgroup namespace
    * checkpoint: Support checkpoint/restore of default LXC containers
    * checkpoint: Support checkpoint/restore of unprivileged containers
    * checkpoint: Support for the page server
    * config: lxc.aa\_profile: Now supports an "unchanged" value
    * config: lxc.init\_cmd: Now supports arguments
    * config: lxc.network.macvlan.mode: Added support for the "passthru" mode
    * config: lxc.rootfs.backend: Allows to override the storage backend (bypasses auto-detection)
    * config: New nesting.conf configuration file to setup container nesting
    * hooks: New LXC\_CGNS\_AWARE environment variable, set to 1 if LXC supports the cgroup namespace (the kernel however may not)
    * hooks: New LXC\_SRC\_NAME environment variable is set in clone hook with the original container name
    * hooks: New LXC\_TARGET environment variable is set with the container goal (stop or reboot)
    * logging: Updated logging timestamps to be a bit more readable
    * lxc-usernet: Support for containers usning a veth interface without bridging
    * lxc-usernet: Support for group-based quotas (use the @ prefix)
    * network: The bridge interface MTU is now used as the default container interface MTU
    * start: The process title is now renamed to be easier to read
    * storage: New Ceph RBD storage backend
 * Documentation:
    * Korean translation of all the man pages
 * Commands:
    * lxc-attach: Use an intermediate pts device to prevent attacks against the parent shell
    * lxc-clone: Support for renaming containers
    * lxc-start-ephemeral: Support for changing bind-mount targets
 * Init systems:
    * systemd: Support for instanced service units
 * Templates
    * New ALTLinux template
    * New Slackware template
    * New SPARCLinux template
    * alpine: Support installing extra packages
    * debian: Default to just "main" enabled, allow enabling other repositories through argument
    * oracle: Set the timezone in the container
    * openssh: Add OpenSSH support
    * ubuntu: New -v option allowing the user to set the debootstrap variant
    * ubuntu-cloud: Support for vendor-data passthrough

### Change in behavior

 * The lxc-autostart container startup order is now reversed (to be correct)
 * The new cgfsng cgroup backend is now the recommended backend
 * lxc.hook.post-stop failures are now fatal to container reboots

Note that several commands have been significantly reworked in this release.  
We don't consider our command line tools as stable ABI so you may need to test and adapt your scripts,  
or better, port them to use our stable C API or one of its bindings.

### Deprecation warnings

The "lxc-clone" and "lxc-start-ephemeral" commands are now considered deprecated and to be replaced by the new lxc-copy.  
Those commands can still be built by using the --enable-legacy flag, however note that they will print a warning when used  
and that they will be removed from upcoming LXC releases.

### Support
This is the second LXC Long Term Support release which we will be supporting until the 1st of June 2021.  
LXC 1.0, our previous Long Term Support release, is still supported until the 1st of June 2019.  
And lastly, the previous stable release, LXC 1.1 will go end of life on the 1st of September 2016.

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 2.0.0.

Should you be interested in individual changes or just looking at the detailed development history,  
our master branch is on [Github](https://github.com/lxc/lxc/tree/master).


## LXC 1.0.8 release announcement <span class="text-muted">9th of November 2015</span>
This is the eight bugfix release for LXC 1.0.

Important:

 * Security fix for CVE-2015-1331
 * Security fix for CVE-2015-1334

Core:

 * Add a nesting.conf which can be included to support nesting containers
 * Add support for CAP\_AUDIT\_READ and CAP\_BLOCK\_SUSPEND
 * Allow autodev without a rootfs
 * Also drop caps in unpriv containers
 * apparmor: Block access to /proc/kcore
 * apparmor: Fix slave bind mounts
 * apparmor: Sync with current git master
 * attach: use \_exit() instead of exit() in the intermediate child process
 * aufs: Support unprivileged clone, mount
 * Call /lib/apparmor/profile-load directly instead of the wrapper
 * cgmanager: attach: never use 'all' controller
 * cgmanager: free line at end of check\_supports\_multiple\_controllers
 * cgmanager: put unprivileged containers under $(curcgroup)/lxc/$(container0
 * Change lxc-clone to use 'rsync -aH' instead of just 'rsync -a' for cloning to fix Launchpad Bug #1441307.
 * clone\_paths: use 'rootfs' for destination directory
 * config: add miscellaneous signals for lxc.\*signal
 * daemonized start: exit children on failure, don't return
 * Define MS\_REC and MS\_SLAVE for Android in bdev.c
 * Define MS\_RELATIME for Android
 * Define O\_PATH and O\_NOFOLLOW for Android
 * detect whether cgmanager\_list\_controllers is available
 * do\_lxcap\_stop: wait until container is stopped
 * don't close std\* fd if opentty fails
 * Enable seccomp by default for unprivileged users.
 * Factorize handle of create=dir and create=file
 * Fix Android build due to missing constant
 * Fix automatic mounts without a rootfs
 * fix build on mpc85xx
 * Fix clearing IPv4/IPv6 addresses
 * Fix container creation without a rootfs
 * Fix control tty issues on attach
 * Fix /dev symlinks without a rootfs
 * Fix dropped fs caps when cloning a container
 * Fix error message when cannot find an lxc-init
 * Fix incomplete destruction of unprivileged ephemeral containers
 * Fix instantiation of multiple vlan interfaces with same id
 * Fix reversed args in mount call
 * Fix verification of start hook without a rootfs
 * Ignore trailing /init.scope in init cgroups
 * Init error\_num to 1
 * init: Support older apparmor
 * In lxc.mount.auto, skip on ENONENT
 * lxc\_monitor: fix memory leak on @fds and close fds
 * lxc\_monitor: free @preg on error
 * lxc\_mount\_auto\_mounts: fix weirdness
 * make cgmanager follow lxc.cgroup.use
 * Make LXC\_CLONE\_KEEPNAME work
 * Make mount\_entry\_create\_\*\_dirs() more robust
 * Make overlayfs mounts work directly
 * Only mount /proc if needed, even without a rootfs
 * only re-open fds if stdin is a tty
 * Only use LOGPATH if lxcpath is unset or default
 * overlay: create workdir if it doesn't exist
 * pass on reboot flag and delete old veth on reboot
 * Prevent from error on umount /proc if userns are used.
 * Remove btrfs subvolumes
 * rpm: added dependency to lxc-libs to lxc package
 * seccomp: add aarch64 support
 * seccomp: add ppc support
 * seccomp: add rule to reject umount -f
 * seccomp: simplify and fix rule parsing
 * Skip control tty code for non-ttys
 * Sort the cgroup memory settings before applying
 * Support unprivileged ephemeral container using aufs
 * Tear down network devices during container halt
 * Uniformly nullify std fds
 * Use /dev/loop-control if it exists
 * Use 'overlay' as fs name when needed
 * use poll instead of select when possible
 * Use POSIX-compliant function names in bash completion
 * Use rdepends when non-thinpool LVM container is cloned
 * When creating container, save configuration if rootfs already exists

Documentation:

 * Add the note related mount in Japanese lxc.container.conf(5)
 * Add about zfs, aufs, overlayfs to '-s' option of lxc-clone(1)
 * Add doc for optional, create=dir and create=file in lxc.container.conf man
 * Add long option for -P in documentation
 * Add LXC-specific mount option in Japanese lxc.container.conf(5)
 * Add options of 'loop' backingstore to lxc-create(1)
 * Add -P lxcpath and --version to lxc-ls manpage
 * Add '--storage-type' option to lxc-start-ephemeral(1)
 * Add the description for -P and --version to English and Japanese lxc-ls(1)
 * Add the description for --version to English and Japanese common\_options
 * Add the use of 'attach' to lxc-start-ephemeral(1)
 * clarify the description of the veth network type in the  manpage.
 * Fix the mistranslation about lxc.group in Japanese lxc.container.conf(5)
 * Fresh CONTRIBUTING
 * Remove unnecessary common options from lxc-user-nic(1)
 * Translate untranslated section titles in Japanese man pages
 * Update MAINTAINERS
 * Update the description of -L option in lxc-autostart(1)
 * Update the description of the veth in the Japanese lxc.container.conf(5)

Bindings:

 * lua: Fix 5.3 compatibility code.
 * lua: fix crash on missing blkio
 * lua: Small fix for 5.3 compatibility.

Tests:

 * enable cgmanager support for Travis CI
 * lxc-test-apparmor: flush the pipe before exiting child
 * lxc-test-symlink: add a test using absolute symlink
 * Update Travis configuration
 * Use 'cgm listcontrollers' list rather than /proc/self/cgroups

Config:

 * lxc-net.conf: use +e at teardown

Templates:

 * lxc-alpine: avoid GNU BRE extensions for better portability
 * lxc-alpine: create /dev/shm before mounting
 * lxc-alpine: fix verification of apk.static binary
 * lxc-alpine: use getopt to parse options
 * lxc-alpine: use yaml for detection of latest release
 * lxc-altlinux: fix parsing of option "--clean": it takes no argument
 * lxc-altlinux: protect possibly unset variable with quotes for -z check
 * lxc-archlinux: Fix systemd-sysctl service
 * lxc-busybox: fix unprivileged containers
 * lxc-centos: Added a more reliable test for yum --releasever
 * lxc-{centos|fedora}: Respect --rootfs
 * lxc-centos: fix big big login delays in Centos 7
 * lxc-centos: Fix booting a Centos 6 container
 * lxc-centos: fix parsing of option "--clean": it takes no argument
 * lxc-centos: fix tab/space mixup in help text.
 * lxc-centos: pass releasever parameter to yum
 * lxc-centos: protect possibly unset variable with quotes for -z check
 * lxc-centos: use `hostname` for DHCP\_HOSTNAME in ifcfg-eth0
 * lxc-debian: Alternative test for dpkg multiarch support
 * lxc-debian: debootstrap failed when $GREP\_OPTIONS is set
 * lxc-debian: document "--clean" in the usage.
 * lxc-debian: Fixed errors if dbus is not installed
 * lxc-debian: fix parsing of option "--clean": it takes no argument.
 * lxc-debian: improve help text
 * lxc-debian: protect possibly unset variable with quotes for -z check
 * lxc-debian: reconfigure locales
 * lxc-debian: skip security updates for unstable/sid
 * lxc-debian: support stretch (Debian 9) images
 * lxc-debian: Test dpkg for multiarch support
 * lxc-download: fix typo in help text.
 * lxc-download: improve help text.
 * lxc-download: make --list more useful.
 * lxc-fedora: Add support for "--mask-tmp"
 * lxc-fedora: Default to 22 but use 20 squashfs
 * lxc-fedora: Default to Fedora 21 as 22 no longer uses yum
 * lxc-fedora: fix parsing of option "--clean": it takes no argument
 * lxc-fedora: In fedora21, the fedora-repos package is needed.
 * lxc-fedora: let help text fit into 80 columns
 * lxc-fedora: manage secondary architectures
 * lxc-fedora: protect possibly unset variable with quotes for -z check
 * lxc-fedora: when using systemd, set lxc.kmsg = 0 in the config
 * lxc-gentoo: Add a hwaddr if there is only one veth
 * lxc-gentoo: Add /dev/shm tmpfs mount entry
 * lxc-gentoo: Fix creation of dev/mqueue and dev/shm
 * lxc-gentoo: Fix the --auth-key flag
 * lxc-gentoo: Fix wget
 * lxc-openmandriva: fix parsing of option "--clean": it takes no argument
 * lxc-openmandriva: protect possibly unset variable with quotes in -z check
 * lxc-opensuse: default release changed to 13.1, as 12.3 reaches  end-of-life soon
 * lxc-opensuse: Disable building openSUSE containers on 13.2/Tumbleweed only if wrong version of build package is installed
 * lxc-opensuse: fix parsing of option "--clean": it takes no argument
 * lxc-opensuse: protect possibly unset variable with quotes in -z check
 * lxc-opensuse: use rpm to determine build version
 * lxc-oracle: Fix /dev/shm
 * lxc-ubuntu-cloud: Never exit 0 when no container is created
 * lxc-ubuntu-cloud: Replace .tar.gz by .tar.xz and don't auto-generate missing tarballs
 * lxc-ubuntu: Drop lucid support and refresh releases list

Commands:

 * Fix grammar in some of the executables "NAME for name of the container" becomes "NAME of the container"
 * lxc-autostart: Fix broken output
 * lxc-checkconfig: Update to work with kernel versions > 3
 * lxc-create: Fix -h with absolute template path
 * lxc-create: Require --template be passed
 * lxc-destroy: actually work if underlying fs is overlayfs
 * lxc-start: added pid parameter
 * lxc-start-ephemeral: fix pep-8 and pyflakes3
 * lxc-start-ephemeral: handle the overlayfs workdir option (v2)
 * lxc-start-ephemeral: Parse passwd directly
 * lxc-usernsexec: reopen fds 0,1,2 separately

Those stable fixes were brought to you by 59 individual contributors.

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.0.8.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.0).


## LXC 1.1.5 release announcement <span class="text-muted">9th of November 2015</span>
This is the fifth bugfix release for LXC 1.1.

Core:

 * Fix handling of process title rename (now only on >= 3.19 kernels)
 * Several improvements to overlayfs/aufs handling
    * Needed directories are created if missing
    * Better handling of absolute paths
    * Better handling of cloning overlayfs containers
 * Ignore trailing /init.scope in cgroup paths (needed for newer systemd)
 * Allow checkpoint/restore of containers using non-bridged veth devices
 * Properly initialize error\_num (exit code tracking for the container)
 * lxc-usernsexec: Re-open fds 0,1,2 separately (only if stdin is a tty)

Init scripts:

 * lxc-net: Start after network-online.target

Commands:

 * lxc-start: Allow preserving the PID namespace too

Templates:

 * archlinux: Fix systemd-sysctl service
 * ubuntu-cloud: Use tar.xz tarballs by default (as tar.gz will soon be discontinued)
 * ubuntu-cloud: Always exit 1 on error

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.1.5.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.1).


## LXC 1.1.4 release announcement <span class="text-muted">6th of October 2015</span>
This is the fourth bugfix release for LXC 1.1.

Important:

 * Security fix for CVE-2015-1335

Core:

 * Check for NULL pointers before calling setenv()
 * Factorize handle of create=dir and create=file
 * Refactor and factorize mount entries
 * Split handle of lxc.mount\* with 3 functions
 * init: Support older apparmor
 * Make LXC\_CLONE\_KEEPNAME work
 * Fix automatic mounts without a rootfs
 * Fix container creation without a rootfs
 * Fix /dev symlinks without a rootfs
 * Allow autodev without a rootfs
 * Only mount /proc if needed, even without a rootfs
 * When creating container, save configuration if rootfs already exists
 * Fix verification of start hook without a rootfs
 * Tear down network devices during container halt
 * coverity: fix mount\_entry\_create\_dir\_file
 * Add a nesting.conf which can be included to support nesting containers
 * Fix reallocation calculation
 * Add bdev\_destroy() and bdev\_destroy\_wrapper()
 * overlayfs\_clone: rsync the mounted rootfs
 * lxc\_rmdir\_onedev: don't fail if path doesn't exist
 * overlayfs\_mount: create delta dir if it doesn't exist
 * ovl\_rsync: make sure to umount
 * Destroy bdevs using bdev\_destroy() from bdev.h
 * Fix indentation
 * cmds: fix abstract socket length problem
 * coverity: drop second (redundant) block
 * Check return value of snprintf in mount\_proc\_if\_needed()
 * Add CAP\_AUDIT\_READ
 * Add CAP\_BLOCK\_SUSPEND
 * Free allocated memory on failure (v2)
 * Define O\_PATH and O\_NOFOLLOW for Android
 * seccomp: add aarch64 support
 * lxc-test-symlink: add a test using absolute symlink
 * lxc\_mount\_auto\_mounts: fix weirdness
 * Fix the type of i in lxc\_mount\_auto\_mounts

Tools:

 * Fix grammar in some of the executables "NAME for name of the container" becomes "NAME of the container"
 * lxc-checkconfig: add some more config options
 * lxc-start-ephemeral: Parse passwd directly

Documentation:

 * Add long option for -P in documentation
 * Add doc for optional, create=dir and create=file in lxc.container.conf man
 * Update lxc.cgroup.use in lxc.system.conf(5)
 * Add the description of common options in lxc-destroy(1)
 * Add LXC-specific mount option in Japanese lxc.container.conf(5)

Templates:

 * lxc-debian: support stretch (Debian 9) images
 * lxc-debian: allow not including contrib/non-free
 * lxc-debian: Test dpkg for multiarch support
 * lxc-debian: Alternative test for dpkg multiarch support in lxc-debian template
 * lxc-ubuntu: ubuntu.common.conf: mount /dev/mqueue
 * lxc-debian: We should only check the kernel architecture.
 * lxc-alpine: avoid GNU BRE extensions for better portability
 * lxc-alpine: use getopt to parse options

Those stable fixes were brought to you by 14 individual contributors.

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.1.4.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.1).


## LXC 1.1.3 release announcement <span class="text-muted">14th of August 2015</span>
This is the third bugfix release for LXC 1.1.

### Changes

Important:

 * Security fix for CVE-2015-1331
 * Security fix for CVE-2015-1334
 * Fix an ABI regression in LXC 1.1 compared to LXC 1.0.  
   Fixing this unfortunately means that binaries built against LXC
   1.1.0, 1.1.1 and 1.1.2 will need rebuilding against LXC 1.1.3.  
   This is however preferable to not having backward compatibility with
   binaries built for LXC 1.0 and its bugfix releases.

Core:

 * apparmor: Call /lib/apparmor/profile-load directly instead of the wrapper
 * aufs: Support unprivileged containers
 * bash: Use POSIX-compliant function names
 * cgmanager: Respect lxc.cgroup.use
 * cgmanager: Use listcontrollers instead of /proc/self/cgroups
 * cgroup: Apply the memory restrictions in the right order
 * clone: Properly handle filesystem capabilities
 * clone: Properly handle hardlinks
 * core: Container logging is now thread safe
 * destroy: Properly remove btrfs subvolumes
 * lua: Support Lua 5.3
 * lxc-net: Fix several bugs
 * lxc-net: Support IPv6
 * lxc-net: Use iproute instead of ifconfig
 * monitor: Fix race conditions in the monitor container interface
 * network: Properly handle veth setup on reboot
 * overlayfs: Create the workdir if missing
 * seccomp: simplify the setup code and fix rule parsing
 * start: Always close fds 0-2 when daemonized
 * start: Better handle some daemonized startup failures
 * start: Improve error message when lxc-init can't be found
 * start: In userns, ignore umount failures for /proc
 * start: When available, use /dev/loop-control to configure the loop devices
 * systemd: Fix startup race condition between lxc-containers and lxc-net
 * Several fixes for small memory leaks (thanks to Coverity)
 * Various improvements to the checkpoint/restore feature
 * Various documentation improvements
 * Various tests improvements

Commands:

 * lxc-autostart: Fix broken output when stdout isn't a tty
 * lxc-checkconfig: support newer kernels

Templates:

 * alpine: Fix /dev/shm handling
 * alpine: Fix verification of the apk binary
 * centos: Fix support for some version of yum
 * debian: Fix debootrstap when GREP\_OPTIONS is set
 * debian: Fix errors when dbus isn't installed
 * debian: Reconfigure locales
 * debian: Skip the security mirror for unstable/sid
 * fedora: Support secondary architectures
 * fedora: Update to the old release repository for Fedora 20
 * gentoo: Fix /dev/mqueue and /dev/shm handling
 * opensuse: Use rpm to determine the build version
 * oracle: Fix /dev/shm handling


Those stable fixes were brought to you by 31 individual contributors.

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.1.3.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.1).


## LXC 1.1.2 release announcement <span class="text-muted">10th of April 2015</span>
This is the second bugfix release for LXC 1.1.

### Changes

 * core: Fix non-tty stdin during attach
 * core: Improved container logging
 * core: Fix cgroup handling for unprivileged containers
 * core: Properly destroy overlayfs based containers
 * core: Fix some multi-threading issues
 * core: Various fixes to checkpoint/restore with CRIU
 * docs: Various manpage updates
 * tests: Fix hang in apparmor test
 * centos: Properly detect the yum version
 * centos: Don't mistakenly change tty.conf of the host
 * gentoo: Fix /dev/shm handling

Those stable fixes were brought to you by 9 individual contributors.

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.1.2.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.1).


## LXC 1.1.1 release announcement <span class="text-muted">16th of March 2015</span>
This is the first bugfix release for LXC 1.1.

### Changes

 * config: Allow FUSE access by default (instead of individually in most templates)
 * Make /proc/sys/net writable when using proc:mixed (required for network config)
 * Set the process title of backgrounded LXC to an identifiable name
 * Fix get\_config\_item with lxc.mount.auto
 * Fix some tty issues with attach
 * Add powerpc support to seccomp
 * oracle: Fix unprivileged lxc-console
 * centos: Fix unprivileged lxc-console
 * plamo: Change way to create objects under /dev in the container
 * lxc-top: Fix long container names rendering
 * LVM: Use rdepends for non-thinpool container clones
 * gentoo: Fix base image download
 * Various manpages update

Those stable fixes were brought to you by 13 individual contributors.

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.1.1.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.1).


## LXC 1.1.0 release announcement <span class="text-muted">30th of January 2015</span>
The LXC team is pleased to announce the release of LXC 1.1.

This release will be supported until January 2016 or 2 months after the next release of LXC,  
whichever comes last.

If you need a long-term supported version of LXC for use in production, we still strongly recommend  
you stick to LXC 1.0 which is supported with frequent stable releases until April 2019.


While not strictly required, it is recommended that LXC 1.1 be used with cgmanager 0.35 (or higher)  
and lxcfs 0.5 (or higher).

### Highlights
LXC 1.1 introduces checkpoint/restore support for containers through CRIU.  
This allows to serialize the container running state to disk, for live migration or for later local restoration  
of the container.

Support for running systemd as the init system inside the container was also greatly improved  
and should now work by default both for privileged and unprivileged containers when combined  
with lxcfs and a recent systemd.

Init scripts have now all been updated to provide the same feature set, which means that a lxcbr0 bridge  
with a DHCP and DNS server (dnsmasq) is now the default for anyone using LXC.  
We currently provide init scripts for systemd, sysvinit and upstart.

This release was made possible by contributions from 84 developers.

### New features
 * lxc-autostart: New -A/--ignore-auto flag (starts all containers)
 * lxc-ls: New "interface" field
 * centos/fedora: Added a root\_password\_expired environment variable (defaults to yes)
 * oracle: Allow installing from arbitrary yum repositories (including medias)
 * oracle: Add Oracle Linux 7 support
 * lxc-ls: Allow filtering containers by group even without --fancy
 * core: Add support for qcow2 images (through qemu-img)
 * lxc-autostart: Add support for the NULL group (any container with lxc.start.auto set to 1 but without a group)
 * core: Track an unexpanded version of the configuration as well as comments (improves formatting of the save configuration)
 * opensuse: Switch to using common configurations
 * core: Allow lxc.cap.keep be set to none
 * archlinux: Switch to using common configurations
 * ubuntu: use btrfs subvolumes and snapshots when available
 * seccomp: Set a default seccomp profile for all distros (blocks dangerous syscalls)
 * core: Add support for Openvswitch bridges
 * core: Add support for lxc.environment (sets extra environment variables)
 * init: Add identical support of systemd, upstart and sysvinit scripts
 * core: Add support for checkpoint and restore of containers using CRIU
 * core: Add a new aa\_allow\_incomplete flag to allow container startup with partial apparmor support
 * lxc-top: Now a C binary installed by default (was a lua script)
 * API: Addition of attach\_interface and detach\_interface
 * lxc-device: Now a C binary installed by default (was a python3 script)
 * lxc-config: Now supports querying lxc.cgroup.(use|pattern)
 * core: Add new lxc.init\_cmd config option to override the default init command (/sbin/init/)
 * lxc-start-ephemeral: Add new --cdir option (copy-on-write mounts)
 * opensuse: Support multiple releases
 * core: lxc.include now allows including directories (includes all the files with a .conf suffix)
 * core: A new common.conf.d configuration directory is available for users and packages to drop configuration snippets to be applied to all containers
 * core: The container\_ttys environment variable is now set by LXC

### Change in behavior
 * lxc-create now requires be passed (-t), use "none" for the old behavior.
 * snapshots are now stored in the container's directory
 * lxc.arch for PER\_LINUX32 is now output as i686
 * lxc-execute: lxc-init is now bind-mounted in the container if it can't be found
 * lxc-start: containers now start daemonized by default
 * core: pivot\_root is now done without the use of lxc.pivotdir, as a result this option is now considered deprecated and will be removed in upcoming releases.
 * core: with the switch to daemonized containers by default, close-all-fds is also now the default.
 * core: lxc.autodev was reworked, it no longer uses /dev/lxc, instead mounting a tmpfs directly on the container's /dev, it also now works with unprivileged containers
 * core: lxc.autodev is now on by default (can be overriden with lxc.autodev=0)
 * core: lxc.kmsg is now disabled by default (can be overriden with lxc.kmsg=1)
 * core: clear\_config\_item now exclusively affects lists (lxc\_list) entries. set\_config\_item should be used for anything else.
 * templates: All templates now use lxc.mount.auto = cgroup:mixed proc:mixed sys:mixed (safe default configuration)

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.1.0, unless they decide to stick to the long term 1.0 release.

Should you be interested in individual changes or just looking at the detailed development history,  
our master branch is on [Github](https://github.com/lxc/lxc/tree/master).


## LXC 1.0.7 release announcement <span class="text-muted">5th of December 2014</span>
This is the seventh bugfix release for the LXC 1.0 series.

### Changes

Core:

 * Include network prefix when ipv4/ipv6 keys are queried
 * apparmor: silence 'silent' mount denials
 * add file/func/line to debug info
 * apparmor: restrict signal and ptrace for processes
 * cgmanager: several fixes
 * lxc: don't call pivot\_root if / is on a ramfs
 * fix lxc.mount.auto clearing
 * conf.c: Define MS\_PRIVATE for Android
 * network: convert param ifname to const.
 * network: check result of if\_nametoindex().
 * network: allow lxc\_network\_move\_by\_index() rename netdev in moving.
 * network: introduce a interface named lxc\_netdev\_isup().
 * lxccontainer.c: rename enter\_to\_ns to enter\_net\_ns
 * lxc\_global\_config\_value can return the default lxc.cgroup.pattern whether root or non-root
 * do\_rootfs\_setup: fix return bugs
 * lxc-start: don't re-try to mount rootfs if we already did so
 * attach: don't use confstr(\_CS\_PATH)
 * lxc\_global\_config\_value: simplify the theme
 * Fixed mismatch on ipvX gateway
 * attach: don't ignore sigint/sigkill if stdin is redirected
 * cgmanager: fix 'attach' with "all" controller support
 * lxc/utils: bugfix freed pointer return value
 * conf.c: change 'instanciate' to 'instantiate'
 * fix wrong nlmsg\_len
 * Remounts bind mounts if read-only flag is provided
 * Allow lxc\_clear\_config\_item to clear idmaps.
 * overlay and aufs clone\_paths: be more robust
 * overlayfs: overlayfs.v22 or higher needs workdir option
 * Fix clone issues
 * Improve veth error cases logging
 * fixed typo in comment
 * audit: added capacity and reserve() to nlmsg
 * rmdir and lxc\_unpriv returns non-negative error codes
 * typofixes - https://github.com/vlajos/misspell\_fixer

Bindings:

 * add src/python-lxc/setup.py into .gitignore

Tests:

 * tests: Fix unpriv test
 * lxc-test-unpriv: don't clear out /etc/lxc/lxc-usernet
 * lxc-test-unpriv: test for different cgroups per subsystem
 * tests: try again when waitpid() sets errno as EINTR

Commands:

 * lxc\_start: ERROR if container is already running.
 * lxc-start: return 0 rather than error if container is already running
 * Make legacy lxc-ls more robust
 * lxc\_info: flush stdout before calling routines which may fork

Templates:

 * Fix typo in lxc-gentoo template
 * busybox template: support for unprivileged containers
 * busybox template: mount fstab when available
 * Fix another gentoo template typo
 * Create the apt proxy in the cache instead of the 1st container
 * lxc-plamo: mount tmpfs on /dev/shm
 * lxc-cirros: support creating+running unprivileged
 * Fix lxc-openmandriva.in typo.
 * Fix lxc-centos.in typo.
 * lxc-opensuse: Disable on 13.2
 * lxc-alpine: make sure /dev/shm is world writeable
 * lxc-alpine: create a default tty for console
 * lxc-debian: added support for package installation
 * lxc-debian: Fix default mirrors
 * lxc-debian: support systemd as PID 1
 * lxc-debian: adjust init system configurations
 * lxc-debian: mask both Wheezy and Jessie udev services
 * lxc-opensuse: Disabling builds on openSUSE Tumbleweed, detection improved.

Documentation:

 * Fix the lxc manpage a bit
 * lxc-create -t option is not optional
 * doc: Update kernel and cgroup info in Japanese lxc(7)
 * tabs/spaces consistency

Those stable fixes were brought to you by 27 individual contributors.

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.0.7.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.0).


## LXC 1.0.6 release announcement <span class="text-muted">24th of September 2014</span>
This is the sixth bugfix release for the LXC 1.0 series.

To make supporting both LXC 1.0 and the future LXC 1.1 easier, this version introduces the -F argument to lxc-start.  
This argument is a no-op as lxc-start is already running in the foreground by default, but as that behavior will change in LXC 1.1,  
introducing -F in 1.0 too allows for writing script which will work consistently on upgrades.

### Changes
Core:

 * rootfs\_is\_blockdev: don't run if no rootfs is specified
 * confile: sanity-check netdev-&#62;type before setting netdev-&#62;priv elements
 * Fix typo in previous patch
 * Remove mention of mountcgroups in ubuntu.common config
 * remove mountcgroup hook entirely
 * Add SIGPWR support to lxc\_init
 * Sysvinit script fixes
 * unprivileged containers: use next available nic name if unspecified
 * fix typo in btrfs error msg
 * apparmor: Allow slave bind mounts
 * provide an example SELinux policy for older releases
 * print a helpful message if creating unpriv container with no idmap
 * use non-thread-safe getpwuid and getpwgid for android
 * btrfs: support recursive subvolume deletion (v2)
 * fix '--log-priority' --&#62; '--logpriority' in main
 * Fix a file descriptor leak in the daemonization
 * Fix a file descriptor leak in the monitord spawn
 * Ensure /dev/pts directory exists on pts setup
 * Do not allow snapshots of LVM backed containers
 * add lxc.console.logpath
 * coverity: don't use newname after null check
 * coverity: malloc the right size for btrs\_node tree
 * introduce --with-distro=raspbian
 * cgmanager get/set: clean up child (v2)
 * Add extra debugging
 * Fix typo in the previous commit...
 * do\_mount\_entry: add nexec, nosuid, nodev, rdonly flags if needed at remount
 * command socket: use hash if needed
 * monitor: fix sockname calculation for long lxcpaths
 * show additional info if btrfs subvolume deletion fails (issue #315)
 * ignore SIGKILL (CTRL-C) and SIGQUIT (CTRL-\) - issue #313
 * chmod container dir to 0770 (v2)
 * build: Fix support for split build and source dirs
 * mount\_entry: use statvfs
 * lxc\_mount\_auto\_mounts: honor existing nodev etc at remounts
 * statvfs: do nothing if statvfs does not exist (android/bionic)
 * Prevent compiler warning by initializing ifindex
 * build: don't remove configuration template on clean
 * build: Make setup.py run from srcdir to avoid distutils errors
 * handle hashed command socket names (v2)
 * lxc-cgm: fix issue with nested chowning
 * Report container exit status to monitord
 * support use of 'all' containers when cgmanager supports it
 * log: fix quiet mode
 * Fix build error(ISO C90 specs violation) in lxc.c
 * lxc\_map\_ids: don't do bogus chekc for newgidmap
 * lxc\_map\_ids: add a comment
 * clean autodev dir on container exit
 * As discussed on ML, do not clean autodev dir on reboot
 * Fix build failure due to slightly different rmdir
 * Fix presentation of IPv6 addresses and gateway

Commands:

 * lxc-start: Add -F (foreground) option

Templates:

 * all: Discontinue the use of in-line comments (stable)
 * all: Include hostname in DHCP requests
 * all: Switch from arch command to uname -m
 * altlinux: bugfixes
 * archlinux: Properly set default locale in /etc/locale.conf
 * centos template: prevent mingetty from calling vhangup(2)
 * download: Have wget retry 3 times
 * download: Make --keyserver actually work
 * gentoo: keep original uid/gid of files/dirs when installing
 * gentoo: Use portageq to determine portage distdir
 * plamo: keep original uid/gid of files/dirs when installing
 * plamo: bugfix template
 * ssh: send hostname to dhcp server
 * ubuntu: don't check for $rootfs/run/shm
 * ubuntu: add help string

Tests:

 * lxc-test-{unpriv,usernic.in}: make sure to chgrp as well
 * lxc-test-unpriv: test lxc-clone -s
 * tests: Call sync before testing a shutdown
 * tests: Copy the download cache when available [v2]
 * Fix the unprivileged tests cgroup management

Documentaiton:

 * doc: Mention that veth.pair is ignored for unpriv
 * doc: Add mention that veth.pair is ignored for unpriv in Japanese man
 * doc: Add -F option to Japanese lxc-start(1)
 * doc: Update the description of SELinux in Japanese lxc.container.conf(5)
 * doc: Add 'zfs' to the parameter of -B option in lxc-create(1)
 * doc: add lxc.console.logpath to Japanese lxc.container.conf(5)
 * doc: language correction
 * doc: Fix Japanese translation of lxc.container.conf(5)
 * doc: Add destroy option to lxc-snapshot(1)
 * doc: Add description about ignoring lxc.cgroup.use when using cgmanager

Those stable fixes were brought to you by 24 individual contributors.

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.0.6.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.0).


## LXC 1.0.5 release announcement <span class="text-muted">14th of July 2014</span>
This is the fifth bugfix release for the LXC 1.0 series.

### seccomp profile
Outside of the usual bugfixes, this release also introduces one important change.  
For systems where LXC is built with seccomp support, containers will now have a seccomp profile enabled  
which will prevent calls to the following syscalls:

 * kexec\_load
 * open\_by\_handle\_at
 * init\_module
 * finit\_module,
 * delete\_module.

This will amongst other things prevent exploits like the recently release "shocker" exploit.

This profile will be applied to any new or existing container that uses the new-style LXC configurations  
(using lxc.include of common configs), so currently the following distributions:  
centos, debian, fedora, gentoo, oracle, plamo and ubuntu.

You can turn this off by adding "lxc.seccomp =" in your container's configuration.

If you want to manually turn this on for a container which doesn't use the common config mechanism,  
you can add something like "lxc.seccomp = /usr/share/lxc/config/common.seccomp" to the container configuration.

### Changes

Core:

 * core: Fix unprivileged containers to work with recent kernels.
 * core: Fix building with -Werror=maybe-uninitialized.
 * core: seccomp: Don't fail on unresolvable syscalls.
 * core: lxc-init: Don't force dropping capabilities.
 * core: configure: Split -lcap and -lselinux out of LIBS.
 * core: configure: Fix expansion of libexecdir.
 * core: seccomp: Support 'all' arch sections.
 * core: seccomp: Fix 32-bit rules.
 * core: seccomp: Enable a default filter for all templates.
 * core: Fix corruption in write\_config.
 * core: attach: Fix querying for the current personality.
 * core: cgmanager: Have cgm\_set and cgm\_get use absolute paths when possible.
 * core: cgmanager: Make sure @value is null-terminated in cgm\_get.
 * core: optimization of signal filtering/parsing code.
 * core: apparmor: Allow hugetlbfs by default (similar to tmpfs and restricted by the hugetlb cgroup controller).
 * core: Fix find\_fstype\_cb to ignore blank lines and comments.

Commands:

 * lxc-autostart: Actually respect -P when passed.
 * lxc-attach: Fix typo in usage.
 * lxc-start: propagate the container exit code.
 * lxc-stop: Fix incorrect timeout handling.
 * lxc-device: Support --version.
 * lxc-ls: Support --version.
 * lxc-start-ephemeral: Support --version.

Tests:

 * tests: Avoid the download template when possible.
 * tests: Don't fail when HOME isn't defined.
 * tests: apparmor: Always end messages with a newline.
 * tests: Clarify error message and fix return codes.
 * tests: lxc-test-ubuntu doesn't actually need bind9-host.

Templates:

 * lxc-debian: standardize formatting.
 * lxc-debian: fix formatting.

Bindings:

 * python3: Fix attach\_wait and threads.

Those stable fixes were brought to you by 11 individual contributors.

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.0.5.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.0).


## LXC 1.0.4 release announcement <span class="text-muted">13th of June 2014</span>
This is the fourth bugfix release for the LXC 1.0 series.

### Changes

Core:

 * core: Don't call nih\_dbus\_setup for cgmanager as it's only relevant when using a nih main loop, which we're not.
 * core: Fix uncheck realloc in lxc\_info. (found by cppcheck)
 * core: At startup, manually mark every shared mount entry as slave.
 * core: Check for pre-existing /dev symlinks before attempting to create them.
 * core: Fix fd leak. (found by coverity).
 * core: Allow all iX86 strings for lxc.arch.
 * core: Fix building using clang 3.4.
 * core: Fix minor typo in .gitignore.
 * core: Add missing MAX\_STACK\_DEPTH define on MUTEX\_DEBUGGING builds.
 * core: Don't mount /sys/fs/cgroup readonly as this breaks at least mountall.
 * core: Factor out capability parsing logic.
 * core: Tweak the default values of lxc.mount.auto for the cgroup and cgroup-full keys to adapt themselves depending on whether CAP\_SYS\_ADMIN has been dropped or not.
 * core: Support unprivileged create, clone and destroy with btrfs.
 * core: Support named subsystems with cgmanager.
 * core: Use absolute cgroup paths to switch cgroups at attach with cgmanager. This allows for unprivileged lxc-attach across user sessions of the same user.
 * core: Detect whether cgmanager supports name= subsystems.
 * core: Use the same ifndef/define format for all headers.
 * core: Fix bashism in lxc-devsetup.
 * core: Fix a null check after dereference (identified by coverity).
 * core: Export bdev\_specs so that API users can actually use the functions taking it as an argument.
 * core: Don't destroy the container until we've made sure the requested snapshot actually exists.
 * core: Retrieve the container personality over the command interface rather than through /proc.  
         This is required for unprivileged containers attach on the 3.15 kernel and higher as access to /proc/$$/personality is now restricted to root.
 * core: Fix invalid signal number comparison.
 * core: Don't let -lcgmanager end up in LIBS.
 * core: Correct invalid log message when keeping capabilities.
 * core: Fix a crash when attempting to snapshot an invalid container.
 * core: Make it possible for unprivileged containers started by root to mount block devices.
 * core: Improve startup failure mode to hide irrelevant error messages and suggest how to debug the failure.
 * core: Validate start hooks path before startup.
 * core: Log the whole cgroup path on failure.
 * apparmor: Allow writes to sem\* and msg\*. sysctls

Documentation:

 * doc: Fix typo in lxc-clone man page.
 * doc: Fix puncation marks in Japanese man pages.
 * doc: Fix typo in lxc-ls manpage.
 * doc: Correct license on some files and fix FSF address.
 * doc: Document lxc.mount.entry relative target.
 * doc: Remove TODO file with old items.
 * doc: Fix reference to renamed manpage.
 * doc: Update japanese documentation to be in sync with the english one.

Commands:

 * lxc-create: Make "none" bdev type work as documented.
 * lxc-execute: Fix a memory leak on the exit path.
 * lxc-ls: Fix running against nested containers without python support.
 * lxc-user-nic: Don't crash on missing bridge.
 * lxc-autostart: Backport the autoboot/autostart change.

        This is required to resolve problems with autostart on
        systemd systems at least.  

        This change adds support for the NULL group in the -g
        option (identified as a comma without any group name).
        Add a new special "onboot" group and set the init
        scripts (sysvinit, systemd and upstart) to all start
        both the NULL and onboot group.  

        This won't cause any visible change to existing users
        unless they were already using an "onboot" group that wasn't
        auto-started at boot time.


Templates:

 * alpine template: Set correct lxc\_arch for x86.
 * archlinux template: Add sigpwr handler.
 * archlinux template: Fix lxc.root for btrfs backend.
 * download template: Retry the GPG setup step 3 times.
 * fedora template: Correct some systemd target setups.
 * oracle template: Use db\_load from inside the container.
 * oracle template: Fix warnings/errors from some rpm scriptlets.
 * oracle template: Fix lxc-patch.py to be 644 (fixes rpmlint warning).
 * oracle template: Add pts/[1-4] to securetty for libvirt-lxc.
 * oracle template: Set the hostname on systemd systems.
 * oracle template: Fix ssh login under libvirt-lxc.
 * plamo template: Don't attempt to configure wireless interfaces.
 * sshd template: Use correct lxc-init path.

Bindings:

 * python3: Slight tweaks to the .py files to work with the unofficial python2.7 binding.
 * python3: Don't fail network test if hwaddr isn't set by the template.
 * python3: Don't require a template name be passed to create().
 * python3: Don't crash on invalid global config keys.
 * python3: Fix crash in snapshot().

Tests:

 * tests: Make sure we join all the right cgroups.
 * tests: Workaround race condition in lxc-test-autostart.

Those stable fixes were brought to you by 14 individual contributors.

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.0.4.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.0).


## LXC 1.0.3 release announcement <span class="text-muted">8th of April 2014</span>
This is the third bugfix release for the LXC 1.0 series.

### Changes

Core:

 * core: Always initialize netpipe in lxc\_spawn.
 * core: Move lxc-monitord.log to LOGPATH instead of LXCPATH.
 * core: Make monitord more resilient to unexpected termination.
 * core: Move lxc-init to /sbin/init.lxc instead of the architecture/distro specific multiarch path.  
         Use path lookup to find it in the container rather than using an hardcoded path.
 * core: Set macvlan default mode to private.
 * core: Check whether rootfs is shared before running the pre-mount hooks.
 * apparmor: Update the profiles for current upstream apparmor.  
        This includes tweak to the pivot\_root targets and the addition of the ptrace and signal stanzas.  
        Users of older apparmor versions may want to comment the dbus, ptrace and signal stanzas  
        if the parser fails to parse the profile.
 * apparmor: Use an intermediary profile which allows for easier generation of complex rules.  
        This discovered a few problems with the existing profile which has now been fixed.  
        Most of /proc/sys is now properly blocked with exceptions for kernel/shm/*, net/*, kernel/domainname and kernel/hostname.
 * apparmor: block cgroupfs by default in the with-nesting profile, users should now be using cgmanager which doesn't required this.
 * cgmanager: Fix a small cgm\_get bug when len == 0.
 * lxc-info: Don't print duplicate lines.
 * sysvinit script: Fix wait\_for\_bridge to better parse default.conf
 * tools: Don't exit -1, instead use more conventional and consistent exit codes 0 on success, 1 on failure with some (now documented) exceptions for lxc-start.

Templates:

 * archlinux template: Add debugging info for missing network link.
 * archlinux template: Various fixes and cleanups.
 * centos template: Properly set lxc.arch.
 * download template: Make it a bit more resilient to download failures.
 * fedora template: Properly set lxc.arch.
 * gentoo template: Make sure sshd is started.
 * gentoo template: Fix lack of generated locales.
 * gentoo template: Fix lxc-console by setting up a tty.
 * oracle template: Fix upgrade problems by introducing a patch script that's run on upgrade.

Tests:

 * tests: Add a test for the apparmor profiles.
 * tests: Bump timeouts to fix occasional failures on slow ARM builders.
 * tests: Always propagate http\_proxy and https\_proxy.

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.0.3.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.0).



## LXC 1.0.2 release announcement <span class="text-muted">27th of March 2014</span>
This is the second bugfix release for the LXC 1.0 series.

### Changes

Core:

 * core: Fix parsing lxc.netwotk.type = none
 * core: Fix race on shutdown causing SIGPIPE being sent to the caller
 * core: Attempt to move back all "phys" NICs on shutdown
 * core: fix stdin,stdout,stderr fds to use the container's own
 * core: Fix typo in newgidmap check
 * core: Fix {get|clear}\_config\_item with lxc.mount.auto
 * core: Fix a leak of netnsfd
 * core: Don't trigger SYSERROR for optional mounts
 * cgmanager: Mutex cgmanager access to avoid races, corruptions and crashes when using threads.
 * cgmanager: Make failure to connect to the daemon a DEBUG instead of ERROR (as we fallback to cgfs in that case)
 * cgmanager: Avoid stray dbus connection
 * cgmanager: Don't attempt to delete invalid cgroups

Commands:

 * lxc-ls: Performance optimization for nesting
 * lxc-ls: Fix memory reporting when swap is enabled
 * lxc-ls: Update help to contain all supports columns

Documentation:

 * man: Update lxc-create manpage to cover the "best" backing store
 * man: Update lxc-autostart to document -a and -g

Tests:

 * tests: Don't hardcode the cgroup list
 * tests: Daemonize in startone (silences the test)
 * tests: Support running solely with cgmanager
 * tests: Use busybox when possible (speeds up tests)
 * tests: Fix fd leak in test-concurent

Templates:

 * templates: Update to consistent userns device list
 * busybox template: Don't fail when busybox is a symlink
 * centos template: Shutdown on SIGPWR
 * centos template: Use a sane default for localtime
 * debian template: Symlink /etc/mtab to /proc/mounts
 * debian template: Don't eat the argument after -c
 * fedora template: Shutdown on SIGPWR
 * fedora template: Use a sane default for localtime
 * fedora template: Fix building i686 containers on x86\_64
 * opensuse template: Fix syntax error

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.0.2.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.0).


## LXC 1.0.1 release announcement <span class="text-muted">6th of March 2014</span>
This is the first bugfix release for the LXC 1.0 series.

### Changes

Core:

 * core: Detect the use of rshared / and properly work around it.  
         This fixes LXC on systemd systems where the mount table would be duplicated in the container and lxc-attach wouldn't attach to the container's rootfs.
 * core: Don't crash on invalid lxc.id\_map
 * core: Fix attaching when extra cgroups were setup after the container started
 * core: Fix crash when rebooting container with phys interfaces
 * core: Better detect and report permission problems
 * core: Use common code for any unprivileged action, using newuidmap/newgidmap if available and only falling back to straight writes to uid\_map/gid\_map if they're not and the user is root.
 * core: Fix btrfs snapshot restore
 * core: Fix race in the cloning code potentially leading to data loss
 * core: Don't double-map the root uid/gid
 * core: Fix snapshot restore for overlayfs
 * core: Put logging variables in TLS

Other:

 * apparmor: Stop using on-exec for profile changes as it's been proven unreliable on overlayfs at least
 * bash completion: Remove wrong shebang
 * cgmanager: Don't keep an active connection after container start
 * cgmanager: Fix to work with threads
 * doc: Update README
 * lua: Respect --prefix
 * lxc-create: Fix the dir backend to actually respect --dir
 * lxc-device: Properly support wlan devices
 * lxc-ls: Fix --nesting function to work with unprivileged containers
 * lxc-start-ephemeral: Set the tmpfs as 0755 instead of 0777
 * python3: Export missing get\_global\_config\_item function
 * seccomp: Catch violations by init
 * systemd: Fix unit file location
 * templates: Detect system containers inside unprivileged containers (lxc-download)
 * tests: Fix potential hang in lxc-test-concurent
 * upstart: Don't forward requests for LXC\_DOMAIN (dnsmasq)

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.0.1.

Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.0).

## LXC 1.0.0 release announcement <span class="text-muted">20th of February 2014</span>
### Introduction
It's with great pleasure that the LXC team is announcing the release of LXC 1.0!

This release is a significant milestone for us as it marks the first release we consider to be production ready.  
It features a wide variety of improvements to container security, a consistent set of tools,  
updated documentation and an API with multiple bindings.

Over 60 people contributed their time to this release, making it the best LXC release yet!  
The result of all that work can be seen used in areas as diverse as individual laptops,  
cellphones and cloud instances. And we are confident that with LXC 1.0, we will see LXC's usage expand even more  
and be used for a lot of new and exciting projects.

### Downloads
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.0.

Should you be interested in individual changes or just looking at the detailed development history,  
our main repository is on [Github](https://github.com/lxc/lxc).

### New features
LXC 1.0 is the result of 10 months of development and over a thousand commits, including a major rework of the way LXC is structured.  
It's therefore near impossible to come up with a comprehensive list of changes in this release,  
however here are some highlights:

 * Support for fully unprivileged containers
 * Public stable API (liblxc1)
 * Official API bindings for lua and python3 (in tree)
 * Official API bindings for [Go](https://github.com/lxc/go-lxc) and [Ruby](https://github.com/lxc/ruby-lxc) (out of tree)
 * Flexible backingstore system with support for:
    * standard directories (default)
    * btrfs
    * zfs
    * lvm
    * loop devices
    * aufs
    * overlayfs
 * Support for cloning and snapshotting containers
 * A reduced but more complete set of command line tools
 * Updated, more complete documentation
 * A new way of creating containers based on centrally generated images
 * Templates letting you create containers running most popular distributions

A series of blog posts introducing you to LXC and highlighting some of LXC 1.0's new features may be found [here](https://www.stgraber.org/2013/12/20/lxc-1-0-blog-post-series/).


### LXC 1.0 moving forward
LXC 1.0 is the first production ready release of LXC and it comes with a commitment from upstream  
to maintain it until at least Ubuntu 14.04 LTS reaches end of life in April 2019.  
That's slightly over 5 years of support!

We will be maintaining a separate stable branch and will cherry-pick and backport fixes as appropriate.  
It's expected that we will have frequent bugfix releases of 1.0 so distributions can simply use those  
and save themselves the trouble of having to manually follow our stable branch.

### Bug reports and contact information
Bug reports should be filed on [Github](https://github.com/lxc/lxc/issues) or if you do not wish to create an account, by e-mail to the appropriate [mailing-list](https://lists.linuxcontainers.org).  
The same goes for your patches. We tend to prefer patches sent to lxc-devel but we also accept pull request directly on Github.

LXC 1.0 is also the first release after the change of project maintainers which occurred in September 2013.  
We'd like to thank Daniel Lezcano for all the great work and efforts he's put in LXC over the years  
and wish him the best of luck in his new projects!

The current projects maintainers are [Serge Hallyn](https://s3hh.wordpress.com), [Stéphane Graber](https://www.stgraber.org) and [Christian Brauner](https://cbrauner.wordpress.com/)
