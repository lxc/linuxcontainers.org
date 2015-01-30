# News
## LXC 1.1.0 release announcement<span class="text-muted">30th of January 2015</span>
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
 * lxc-lua: Now a C binary installed by default (was a lua script)
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
 * core: pivot\_root is now done with the use of lxc.pivotdir, as a result this option is now considered deprecated and will be removed in upcoming releases.
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


## LXC 1.0.7 release announcement<span class="text-muted">5th of December 2014</span>
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


## LXC 1.0.6 release announcement<span class="text-muted">24th of September 2014</span>
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


## LXC 1.0.5 release announcement<span class="text-muted">14th of July 2014</span>
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


## LXC 1.0.4 release announcement<span class="text-muted">13th of June 2014</span>
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


## LXC 1.0.3 release announcement<span class="text-muted">8th of April 2014</span>
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



## LXC 1.0.2 release announcement<span class="text-muted">27th of March 2014</span>
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


## LXC 1.0.1 release announcement<span class="text-muted">6th of March 2014</span>
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

## LXC 1.0.0 release announcement<span class="text-muted">20th of February 2014</span>
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
