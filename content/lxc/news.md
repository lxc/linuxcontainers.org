<h2>News</h2>

<h3>LXC 1.0.6 release announcement<p>24th of September 2014</p></h3>
<p>This is the sixth bugfix release for the LXC 1.0 series.</p>

<p>To make supporting both LXC 1.0 and the future LXC 1.1
   easier, this version introduces the -F argument to lxc-start. This
   argument is a no-op as lxc-start is already running in the
   foreground by default, but as that behavior will change in
   LXC 1.1, introducing -F in 1.0 too allows for writing script
   which will work consistently on upgrades.</p>

<h4>Changes</h4>

<p>
  <ul>
    <li>rootfs_is_blockdev: don't run if no rootfs is specified</li>
    <li>confile: sanity-check netdev-&#62;type before setting
        netdev-&#62;priv elements</li>
    <li>Fix typo in previous patch</li>
    <li>Remove mention of mountcgroups in ubuntu.common config</li>
    <li>remove mountcgroup hook entirely</li>
    <li>Add SIGPWR support to lxc_init</li>
    <li>Sysvinit script fixes</li>
    <li>unprivileged containers: use next available nic name if
        unspecified</li>
    <li>fix typo in btrfs error msg</li>
    <li>apparmor: Allow slave bind mounts</li>
    <li>provide an example SELinux policy for older releases</li>
    <li>print a helpful message if creating unpriv container
        with no idmap</li>
    <li>use non-thread-safe getpwuid and getpwgid for android</li>
    <li>btrfs: support recursive subvolume deletion (v2)</li>
    <li>fix '--log-priority' --&#62; '--logpriority' in main</li>
    <li>Fix a file descriptor leak in the daemonization</li>
    <li>Fix a file descriptor leak in the monitord spawn</li>
    <li>Ensure /dev/pts directory exists on pts setup</li>
    <li>Do not allow snapshots of LVM backed containers</li>
    <li>add lxc.console.logpath</li>
    <li>coverity: don't use newname after null check</li>
    <li>coverity: malloc the right size for btrs_node tree</li>
    <li>introduce --with-distro=raspbian</li>
    <li>cgmanager get/set: clean up child (v2)</li>
    <li>Add extra debugging</li>
    <li>Fix typo in the previous commit...</li>
    <li>do_mount_entry: add nexec, nosuid, nodev, rdonly flags
        if needed at remount</li>
    <li>command socket: use hash if needed</li>
    <li>monitor: fix sockname calculation for long lxcpaths</li>
    <li>show additional info if btrfs subvolume deletion fails
        (issue #315)</li>
    <li>ignore SIGKILL (CTRL-C) and SIGQUIT (CTRL-\) - issue #313</li>
    <li>chmod container dir to 0770 (v2)</li>
    <li>build: Fix support for split build and source dirs</li>
    <li>mount_entry: use statvfs</li>
    <li>lxc_mount_auto_mounts: honor existing nodev etc at
        remounts</li>
    <li>statvfs: do nothing if statvfs does not exist
        (android/bionic)</li>
    <li>Prevent compiler warning by initializing ifindex</li>
    <li>build: don't remove configuration template on clean</li>
    <li>build: Make setup.py run from srcdir to avoid distutils
        errors</li>
    <li>handle hashed command socket names (v2)</li>
    <li>lxc-cgm: fix issue with nested chowning</li>
    <li>Report container exit status to monitord</li>
    <li>support use of 'all' containers when cgmanager supports it</li>
    <li>log: fix quiet mode</li>
    <li>Fix build error(ISO C90 specs violation) in lxc.c</li>
    <li>lxc_map_ids: don't do bogus chekc for newgidmap</li>
    <li>lxc_map_ids: add a comment</li>
    <li>clean autodev dir on container exit</li>
    <li>As discussed on ML, do not clean autodev dir on reboot</li>
    <li>Fix build failure due to slightly different rmdir</li>
    <li>Fix presentation of IPv6 addresses and gateway</li>
  </ul>

  <ul>
    <li>lxc-start: Add -F (foreground) option</li>
  </ul>

  <ul>
    <li>all: Discontinue the use of in-line comments (stable)</li>
    <li>all: Include hostname in DHCP requests</li>
    <li>all: Switch from arch command to uname -m</li>
    <li>altlinux: bugfixes</li>
    <li>archlinux: Properly set default locale in /etc/locale.conf</li>
    <li>centos template: prevent mingetty from calling vhangup(2)</li>
    <li>download: Have wget retry 3 times</li>
    <li>download: Make --keyserver actually work</li>
    <li>gentoo: keep original uid/gid of files/dirs when
        installing</li>
    <li>gentoo: Use portageq to determine portage distdir</li>
    <li>plamo: keep original uid/gid of files/dirs when installing</li>
    <li>plamo: bugfix template</li>
    <li>ssh: send hostname to dhcp server</li>
    <li>ubuntu: don't check for $rootfs/run/shm</li>
    <li>ubuntu: add help string</li>
  </ul>

  <ul>
    <li>lxc-test-{unpriv,usernic.in}: make sure to chgrp as well</li>
    <li>lxc-test-unpriv: test lxc-clone -s</li>
    <li>tests: Call sync before testing a shutdown</li>
    <li>tests: Copy the download cache when available [v2]</li>
    <li>Fix the unprivileged tests cgroup management</li>
  </ul>

  <ul>
    <li>doc: Mention that veth.pair is ignored for unpriv</li>
    <li>doc: Add mention that veth.pair is ignored for unpriv in
        Japanese man</li>
    <li>doc: Add -F option to Japanese lxc-start(1)</li>
    <li>doc: Update the description of SELinux in Japanese
        lxc.container.conf(5)</li>
    <li>doc: Add 'zfs' to the parameter of -B option in
        lxc-create(1)</li>
    <li>doc: add lxc.console.logpath to Japanese
        lxc.container.conf(5)</li>
    <li>doc: language correction</li>
    <li>doc: Fix Japanese translation of lxc.container.conf(5)</li>
    <li>doc: Add destroy option to lxc-snapshot(1)</li>
    <li>doc: Add description about ignoring lxc.cgroup.use when
        using cgmanager</li>
  </ul>
</p>

<p>Those stable fixes were brought to you by 24 individual
   contributors.</p>

<h4>Downloads</h4>
<p>The release tarballs may be found on our
   <a href="/downloads">download page</a> and we expect most
   distributions will very soon ship a packaged version of LXC 1.0.6.
</p>

<p>Should you be interested in individual changes or just
   looking at the detailed development history, our stable branch is
   on <a href="https://github.com/lxc/lxc/tree/stable-1.0">Github</a>.
</p>


<h3>LXC 1.0.5 release announcement<p>14th of July 2014</p></h3>
<p>This is the fifth bugfix release for the LXC 1.0 series.</p>

<h4>seccomp profile</h4>
<p>
  Outside of the usual bugfixes, this release also introduces
  one important change. For systems where LXC is built with seccomp
  support, containers will now have a seccomp profile enabled
  which will prevent calls to the following syscalls:
  kexec_load, open_by_handle_at, init_module, finit_module,
  delete_module.
</p>

<p>This will amongst other things prevent exploits like the
  recently release "shocker" exploit.
</p>

<p>This profile will be applied to any new or existing containers
  using the new-style LXC configurations (using lxc.include of common
  configs), so currently the following distributions:
  centos, debian, fedora, gentoo, oracle, plamo and ubuntu.
</p>

<p>You can turn this off by adding "lxc.seccomp =" in your
  container's configuration.
</p>

<p>If you want to manually turn this on for a container which
  doesn't use the common config mechanism, you can add something like
  "lxc.seccomp = /usr/share/lxc/config/common.seccomp" to the container
  configuration.
</p>

<h4>Changes</h4>
<p>
  <ul>
    <li>core: Fix unprivileged containers to work with recent
        kernels.</li>
    <li>core: Fix building with -Werror=maybe-uninitialized.</li>
    <li>core: seccomp: Don't fail on unresolvable syscalls.</li>
    <li>core: lxc-init: Don't force dropping capabilities.</li>
    <li>core: configure: Split -lcap and -lselinux out of LIBS.</li>
    <li>core: configure: Fix expansion of libexecdir.</li>
    <li>core: seccomp: Support 'all' arch sections.</li>
    <li>core: seccomp: Fix 32-bit rules.</li>
    <li>core: seccomp: Enable a default filter for all templates.</li>
    <li>core: Fix corruption in write_config.</li>
    <li>core: attach: Fix querying for the current personality.</li>
    <li>core: cgmanager: Have cgm_set and cgm_get use absolute
        paths when possible.</li>
    <li>core: cgmanager: Make sure @value is null-terminated in
        cgm_get.</li>
    <li>core: optimization of signal filtering/parsing code.</li>
    <li>core: apparmor: Allow hugetlbfs by default (similar to
        tmpfs and restricted by the hugetlb cgroup controller).</li>
    <li>core: Fix find_fstype_cb to ignore blank lines and
        comments.</li>
  </ul>

  <ul>
    <li>lxc-autostart: Actually respect -P when passed.</li>
    <li>lxc-attach: Fix typo in usage.</li>
    <li>lxc-start: propagate the container exit code.</li>
    <li>lxc-stop: Fix incorrect timeout handling.</li>
    <li>lxc-device: Support --version.</li>
    <li>lxc-ls: Support --version.</li>
    <li>lxc-start-ephemeral: Support --version.</li>
  </ul>

  <ul>
    <li>tests: Avoid the download template when possible.</li>
    <li>tests: Don't fail when HOME isn't defined.</li>
    <li>tests: apparmor: Always end messages with a newline.</li>
    <li>tests: Clarify error message and fix return codes.</li>
    <li>tests: lxc-test-ubuntu doesn't actually need bind9-host.</li>
  </ul>

  <ul>
    <li>lxc-debian: standardize formatting.</li>
    <li>lxc-debian: fix formatting.</li>
  </ul>

  <ul>
    <li>python3: Fix attach_wait and threads.</li>
  </ul>
</p>

<p>Those stable fixes were brought to you by 11 individual
   contributors.</p>

<h4>Downloads</h4>
<p>The release tarballs may be found on our
   <a href="/downloads">download page</a> and we expect most
   distributions will very soon ship a packaged version of LXC 1.0.5.
</p>

<p>Should you be interested in individual changes or just
   looking at the detailed development history, our stable branch is
   on <a href="https://github.com/lxc/lxc/tree/stable-1.0">Github</a>.
</p>


<h3>LXC 1.0.4 release announcement<p>13th of June 2014</p></h3>
<p>This is the fourth bugfix release for the LXC 1.0 series.</p>

<h4>Changes</h4>
<p>
  <ul>
    <li>core: Don't call nih_dbus_setup for cgmanager as it's
        only relevant when using a nih main loop, which we're not.</li>
    <li>core: Fix uncheck realloc in lxc_info. (found by cppcheck)</li>
    <li>core: At startup, manually mark every shared mount entry
        as slave.</li>
    <li>core: Check for pre-existing /dev symlinks before
        attempting to create them.</li>
    <li>core: Fix fd leak. (found by coverity).</li>
    <li>core: Allow all iX86 strings for lxc.arch.</li>
    <li>core: Fix building using clang 3.4.</li>
    <li>core: Fix minor typo in .gitignore.</li>
    <li>core: Add missing MAX_STACK_DEPTH define on
        MUTEX_DEBUGGING builds.</li>
    <li>core: Don't mount /sys/fs/cgroup readonly as this breaks
        at least mountall.</li>
    <li>core: Factor out capability parsing logic.</li>
    <li>core: Tweak the default values of lxc.mount.auto for the
        cgroup and cgroup-full keys to adapt themselves
        depending on whether CAP_SYS_ADMIN has been dropped or
        not.</li>
    <li>core: Support unprivileged create, clone and destroy
        with btrfs.</li>
    <li>core: Support named subsystems with cgmanager.</li>
    <li>core: Use absolute cgroup paths to switch cgroups at
        attach with cgmanager. This allows for unprivileged
        lxc-attach across user sessions of the same user.</li>
    <li>core: Detect whether cgmanager supports name= subsystems.</li>
    <li>core: Use the same ifndef/define format for all headers.</li>
    <li>core: Fix bashism in lxc-devsetup.</li>
    <li>core: Fix a null check after dereference (identified by
        coverity).</li>
    <li>core: Export bdev_specs so that API users can actually use the
        functions taking it as an argument.</li>
    <li>core: Don't destroy the container until we've made sure
        the requested snapshot actually exists.</li>
    <li>core: Retrieve the container personality over the
        command interface rather than through /proc. This is
        required for unprivileged containers attach on the 3.15 kernel
        and higher as access to /proc/$$/personality is now
        restricted to root.</li>
    <li>core: Fix invalid signal number comparison.</li>
    <li>core: Don't let -lcgmanager end up in LIBS.</li>
    <li>core: Correct invalid log message when keeping
        capabilities.</li>
    <li>core: Fix a crash when attempting to snapshot an invalid
        container.</li>
    <li>core: Make it possible for unprivileged containers
        started by root to mount block devices.</li>
    <li>core: Improve startup failure mode to hide irrelevant
        error messages and suggest how to debug the failure.</li>
    <li>core: Validate start hooks path before startup.</li>
    <li>core: Log the whole cgroup path on failure.</li>

    <li>apparmor: Allow writes to sem* and msg*. sysctls</li>
  </ul>

  <ul>
    <li>doc: Fix typo in lxc-clone man page.</li>
    <li>doc: Fix puncation marks in Japanese man pages.</li>
    <li>doc: Fix typo in lxc-ls manpage.</li>
    <li>doc: Correct license on some files and fix FSF address.</li>
    <li>doc: Document lxc.mount.entry relative target.</li>
    <li>doc: Remove TODO file with old items.</li>
    <li>doc: Fix reference to renamed manpage.</li>
    <li>doc: Update japanese documentation to be in sync with
        the english one.</li>
  </ul>

  <ul>
    <li>lxc-autostart: Backport the autoboot/autostart change.<br />

        This is required to resolve problems with autostart on
        systemd systems at least.<br />

        This change adds support for the NULL group in the -g
        option (identified as a comma without any group name).
        Add a new special "onboot" group and set the init
        scripts (sysvinit, systemd and upstart) to all start
        both the NULL and onboot group.<br />

        This won't cause any visible change to existing users
        unless they were already using an "onboot" group that wasn't
        auto-started at boot time.</li>

    <li>lxc-create: Make "none" bdev type work as documented.</li>

    <li>lxc-execute: Fix a memory leak on the exit path.</li>

    <li>lxc-ls: Fix running against nested containers without
        python support.</li>

    <li>lxc-user-nic: Don't crash on missing bridge.</li>
  </ul>

  <ul>
    <li>alpine template: Set correct lxc_arch for x86.</li>

    <li>archlinux template: Add sigpwr handler.</li>
    <li>archlinux template: Fix lxc.root for btrfs backend.</li>

    <li>download template: Retry the GPG setup step 3 times.</li>

    <li>fedora template: Correct some systemd target setups.</li>

    <li>oracle template: Use db_load from inside the container.</li>
    <li>oracle template: Fix warnings/errors from some rpm
        scriptlets.</li>
    <li>oracle template: Fix lxc-patch.py to be 644 (fixes
        rpmlint warning).</li>
    <li>oracle template: Add pts/[1-4] to securetty for
        libvirt-lxc.</li>
    <li>oracle template: Set the hostname on systemd systems.</li>
    <li>oracle template: Fix ssh login under libvirt-lxc.</li>

    <li>plamo template: Don't attempt to configure wireless
        interfaces.</li>

    <li>sshd template: Use correct lxc-init path.</li>
  </ul>

  <ul>
    <li>python3: Slight tweaks to the .py files to work with the
        unofficial python2.7 binding.</li>
    <li>python3: Don't fail network test if hwaddr isn't set by
        the template.</li>
    <li>python3: Don't require a template name be passed to
        create().</li>
    <li>python3: Don't crash on invalid global config keys.</li>
    <li>python3: Fix crash in snapshot().</li>
  </ul>

  <ul>
    <li>tests: Make sure we join all the right cgroups.</li>
    <li>tests: Workaround race condition in lxc-test-autostart.</li>
  </ul>
</p>

<p>Those stable fixes were brought to you by 14 individual
   contributors.</p>

<h4>Downloads</h4>
<p>The release tarballs may be found on our
   <a href="/downloads">download page</a> and we expect most
   distributions will very soon ship a packaged version of LXC 1.0.4.
</p>

<p>Should you be interested in individual changes or just
   looking at the detailed development history, our stable branch is
   on <a href="https://github.com/lxc/lxc/tree/stable-1.0">Github</a>.
</p>


<h3>LXC 1.0.3 release announcement<p>8th of April 2014</p></h3>
<p>This is the third bugfix release for the LXC 1.0 series.</p>

<h4>Changes</h4>
<p>
  <ul>
    <li>core: Always initialize netpipe in lxc_spawn.</li>
    <li>core: Move lxc-monitord.log to LOGPATH instead of LXCPATH.</li>
    <li>core: Make monitord more resilient to unexpected
        termination.</li>
    <li>core: Move lxc-init to /sbin/init.lxc instead of the
        architecture/distro specific multiarch path. Use path
        lookup to find it in the container rather than using an
        hardcoded path.</li>
    <li>core: Set macvlan default mode to private.</li>
    <li>core: Check whether rootfs is shared before running the
        pre-mount hooks.</li>

    <li>apparmor: Update the profiles for current upstream
        apparmor. This includes tweak to the pivot_root targets
        and the addition of the ptrace and signal stanzas. Users
        of older apparmor versions may want to comment the dbus,
        ptrace and signal stanzas if the parser fails to parse
        the profile.</li>
    <li>apparmor: Use an intermediary profile which allows for
        easier generation of complex rules. This discovered a
        few problems with the existing profile which has now
        been fixed. Most of /proc/sys is now properly blocked
        with exceptions for kernel/shm/*, net/*,
        kernel/domainname and kernel/hostname.</li>
    <li>apparmor: block cgroupfs by default in the with-nesting
        profile, users should now be using cgmanager which
        doesn't required this.</li>
    <li>cgmanager: Fix a small cgm_get bug when len == 0.</li>
    <li>lxc-info: Don't print duplicate lines.</li>
    <li>sysvinit script: Fix wait_for_bridge to better parse
        default.conf</li>
    <li>tools: Don't exit -1, instead use more conventional and
        consistent exit codes 0 on success, 1 on failure with
        some (now documented) exceptions for lxc-start.</li>

    <li>archlinux template: Add debugging info for missing
        network link.</li>
    <li>archlinux template: Various fixes and cleanups.</li>
    <li>centos template: Properly set lxc.arch.</li>
    <li>download template: Make it a bit more resilient to
        download failures.</li>
    <li>fedora template: Properly set lxc.arch.</li>
    <li>gentoo template: Make sure sshd is started.</li>
    <li>gentoo template: Fix lack of generated locales.</li>
    <li>gentoo template: Fix lxc-console by setting up a tty.</li>
    <li>oracle template: Fix upgrade problems by introducing a
        patch script that's run on upgrade.</li>

    <li>tests: Add a test for the apparmor profiles.</li>
    <li>tests: Bump timeouts to fix occasional failures on slow
        ARM builders.</li>
    <li>tests: Always propagate http_proxy and https_proxy.</li>
  </ul>
</p>

<h4>Downloads</h4>
<p>The release tarballs may be found on our
   <a href="/downloads">download page</a> and we expect most
   distributions will very soon ship a packaged version of LXC 1.0.3.
</p>

<p>Should you be interested in individual changes or just
   looking at the detailed development history, our stable branch is
   on <a href="https://github.com/lxc/lxc/tree/stable-1.0">Github</a>.
</p>



<h3>LXC 1.0.2 release announcement<p>27th of March 2014</p></h3>
<p>This is the second bugfix release for the LXC 1.0 series.</p>

<h4>Changes</h4>
<p>
  <ul>
    <li>core: Fix parsing lxc.netwotk.type = none</li>
    <li>core: Fix race on shutdown causing SIGPIPE being sent to
        the caller</li>
    <li>core: Attempt to move back all "phys" NICs on shutdown</li>
    <li>core: fix stdin,stdout,stderr fds to use the container's
        own</li>
    <li>core: Fix typo in newgidmap check</li>
    <li>core: Fix {get|clear}_config_item with lxc.mount.auto</li>
    <li>core: Fix a leak of netnsfd</li>
    <li>core: Don't trigger SYSERROR for optional mounts</li>

    <li>cgmanager: Mutex cgmanager access to avoid races,
        corruptions and crashes when using threads.</li>
    <li>cgmanager: Make failure to connect to the daemon a DEBUG
        instead of ERROR (as we fallback to cgfs in that case)</li>
    <li>cgmanager: Avoid stray dbus connection</li>
    <li>cgmanager: Don't attempt to delete invalid cgroups</li>

    <li>lxc-ls: Performance optimization for nesting</li>
    <li>lxc-ls: Fix memory reporting when swap is enabled</li>
    <li>lxc-ls: Update help to contain all supports columns</li>

    <li>man: Update lxc-create manpage to cover the "best"
        backing store</li>
    <li>man: Update lxc-autostart to document -a and -g</li>

    <li>tests: Don't hardcode the cgroup list</li>
    <li>tests: Daemonize in startone (silences the test)</li>
    <li>tests: Support running solely with cgmanager</li>
    <li>tests: Use busybox when possible (speeds up tests)</li>
    <li>tests: Fix fd leak in test-concurent</li>

    <li>templates: Update to consistent userns device list</li>
    <li>busybox template: Don't fail when busybox is a symlink</li>
    <li>centos template: Shutdown on SIGPWR</li>
    <li>centos template: Use a sane default for localtime</li>
    <li>debian template: Symlink /etc/mtab to /proc/mounts</li>
    <li>debian template: Don't eat the argument after -c</li>
    <li>fedora template: Shutdown on SIGPWR</li>
    <li>fedora template: Use a sane default for localtime</li>
    <li>fedora template: Fix building i686 containers on x86_64</li>
    <li>opensuse template: Fix syntax error</li>
  </ul>
</p>

<h4>Downloads</h4>
<p>The release tarballs may be found on our
   <a href="/downloads">download page</a> and we expect most
   distributions will very soon ship a packaged version of LXC 1.0.2.
</p>

<p>Should you be interested in individual changes or just
   looking at the detailed development history, our stable branch is
   on <a href="https://github.com/lxc/lxc/tree/stable-1.0">Github</a>.
</p>


<h3>LXC 1.0.1 release announcement<p>6th of March 2014</p></h3>
<p>This is the first bugfix release for the LXC 1.0 series.</p>

<h4>Changes</h4>
<p>
  <ul>
    <li>core: Detect the use of rshared / and properly work
        around it. This fixes LXC on systemd systems where the mount
        table would be duplicated in the container and
        lxc-attach wouldn't attach to the container's rootfs.</li>
    <li>core: Don't crash on invalid lxc.id_map</li>
    <li>core: Fix attaching when extra cgroups were setup
        after the container started</li>
    <li>core: Fix crash when rebooting container with phys
        interfaces</li>
    <li>core: Better detect and report permission problems</li>
    <li>core: Use common code for any unprivileged action, using
        newuidmap/newgidmap if available and only falling back
        to straight writes to uid_map/gid_map if they're not and
        the user is root</li>
    <li>core: Fix btrfs snapshot restore</li>
    <li>core: Fix race in the cloning code potentially leading
        to data loss</li>
    <li>core: Don't double-map the root uid/gid</li>
    <li>core: Fix snapshot restore for overlayfs</li>
    <li>core: Put logging variables in TLS</li>

    <li>apparmor: Stop using on-exec for profile changes as it's
        been proven unreliable on overlayfs at least</li>
    <li>bash completion: Remove wrong shebang</li>
    <li>cgmanager: Don't keep an active connection after
        container start</li>
    <li>cgmanager: Fix to work with threads</li>
    <li>doc: Update README</li>
    <li>lua: Respect --prefix</li>
    <li>lxc-create: Fix the dir backend to actually respect --dir</li>
    <li>lxc-device: Properly support wlan devices</li>
    <li>lxc-ls: Fix --nesting function to work with unprivileged
        containers</li>
    <li>lxc-start-ephemeral: Set the tmpfs as 0755 instead of 0777</li>
    <li>python3: Export missing get_global_config_item function</li>
    <li>seccomp: Catch violations by init</li>
    <li>systemd: Fix unit file location</li>
    <li>templates: Detect system containers inside
        unprivileged containers (lxc-download)</li>
    <li>tests: Fix potential hang in lxc-test-concurent</li>
    <li>upstart: Don't forward requests for LXC_DOMAIN (dnsmasq)</li>
  </ul>
</p>

<h4>Downloads</h4>
<p>The release tarballs may be found on our
   <a href="/downloads">download page</a> and we expect most
   distributions will very soon ship a packaged version of LXC 1.0.1.
</p>

<p>Should you be interested in individual changes or just
   looking at the detailed development history, our stable branch is
   on <a href="https://github.com/lxc/lxc/tree/stable-1.0">Github</a>.
</p>

<h3>LXC 1.0.0 release announcement<p>20th of February 2014</p></h3>
<h4>Introduction</h4>
<p>It's with great pleasure that the LXC team is announcing the
   release of LXC 1.0!
</p>

<p>This release is a significant milestone for us as it marks the first
   release we consider to be production ready.  It features a
   wide variety of improvements to container security, a
   consistent set of tools, updated documentation and an API
   with multiple bindings.
</p>

<p>Over 60 people contributed their time to this release, making
   it the best LXC release yet!  The result of all that work can
   be seen used in areas as diverse as individual laptops,
   cellphones and cloud instances.  And we are confident that
   with LXC 1.0, we will see LXC's usage expand even more and be used
   for a lot of new and exciting projects.
</p>

<h4>Downloads</h4>
<p>The release tarballs may be found on our
   <a href="/downloads">download page</a> and we expect most
   distributions will very soon ship a packaged version of LXC 1.0.
</p>

<p>Should you be interested in individual changes or just
   looking at the detailed development history, our main repository is
   on <a href="https://github.com/lxc/lxc">Github</a>.
</p>

<h4>New features</h4>
<p>LXC 1.0 is the result of 10 months of development and over a
   thousand commits, including a major rework of the way LXC is
   structured.  It's therefore near impossible to come up with a
   comprehensive list of changes in this release, however here are
   some highlights:
</p>

<ul>
  <li>Support for fully unprivileged containers</li>
  <li>Public stable API (liblxc1)</li>
  <li>Official API bindings for lua and python3 (in tree)</li>
  <li>Official API bindings for
      <a href="https://github.com/lxc/go-lxc">Go</a> and
      <a href="https://github.com/lxc/ruby-lxc">ruby</a>
      (out of tree)</li>
  <li>Flexible backingstore system with support for:
      <ul>
        <li>standard directories (default)</li>
        <li>btrfs</li>
        <li>zfs</li>
        <li>lvm</li>
        <li>loop devices</li>
        <li>aufs</li>
        <li>overlayfs</li>
      </ul></li>
  <li>Support for cloning and snapshotting containers</li>
  <li>A reduced but more complete set of command line tools</li>
  <li>Updated, more complete documentation</li>
  <li>A new way of creating containers based on centrally
      generated images</li>
  <li>Templates letting you create containers running most
      popular distributions</li>
</ul>

<p>A series of blog posts introducing you to LXC and highlighting
   some of LXC 1.0's new features may be found
   <a href="https://www.stgraber.org/2013/12/20/lxc-1-0-blog-post-series/">here</a>.
</p>


<h4>LXC 1.0 moving forward</h4>
<p>LXC 1.0 is the first production ready release of LXC and it
   comes with a commitment from upstream to maintain it until at
   least Ubuntu 14.04 LTS reaches end of life in April 2019.
   That's slightly over 5 years of support!</p>

<p>We will be maintaining a separate stable branch and will
   cherry-pick and backport fixes as appropriate.  It's expected
   that we will have frequent bugfix releases of 1.0 so
   distributions can simply use those and save themselves the
   trouble of having to manually follow our stable branch.
 </p>

<h4>Bug reports and contact information</h4>
<p>Bug reports should be filed on
   <a href="https://github.com/lxc/lxc/issues">Github</a>
   or if you do not wish to create an account, by e-mail to the
   appropriate
   <a href="https://lists.linuxcontainers.org"> mailing-list</a>.
   The same goes for your patches. We tend to prefer patches
   sent to lxc-devel but we also accept pull request directly on
   Github.
</p>

<p>LXC 1.0 is also the first release after the change of project
   maintainers which occurred in September 2013. We'd like to thank
   Daniel Lezcano for all the great work and efforts he's put in
   LXC over the years and wish him the best of luck in his new
   projects!</p>

<p>The current projects maintainers are
   <a href="https://s3hh.wordpress.com">Serge Hallyn</a>
   and <a href="https://www.stgraber.org">St&eacute;phane Graber</a>.
</p>
