![Download icon](/static/img/containers.png)
# News
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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
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
 * core: Add new lxc.init\_cmd config option to override the default init command (/sbin/init)
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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
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

The current projects maintainers are [Serge Hallyn](https://s3hh.wordpress.com) and [Stéphane Graber](https://www.stgraber.org).
