![Logo](/static/img/containers.png)

# News
## LXD 2.7 release announcement <span class="text-muted">20th of December 2016</span>
### The changes in this release include
New features:

 * New "ipv4.firewall" and "ipv6.firewall" network attributes controlling the generation of iptables FORWARD rules
 * New "ipv4.routes" and "ipv6.routes" network attributes allowing for additional static routes to be set to the network.
 * New "lxd import" command allowing importing of containers when all that exists is the "containers" directory.

Bugfixes:

 * client: Commonize update methods and add PATCH
 * extra/lxc-to-lxd: Add more unsupported config keys
 * extra/lxc-to-lxd: All properties must be strings
 * extra/lxc-to-lxd: Copy rootfs by default, do not move
 * extra/lxc-to-lxd: Show nicer error on missing python3-lxc
 * extra/lxc-to-lxd: Switch to using whitelist
 * i18n: Update french translation
 * lxc/file: Fix off by one error in push
 * lxc: Improve help messages
 * lxc/init: Fix example
 * lxc/launch: Just use init.go's flags()
 * lxd: Common codepath for http client
 * lxd: Don't set InsecureSkipVerify on daemon's tls config
 * lxd: Log daemon version
 * lxd: Make LXD\_DIR 711 by default (needed for unprivileged containers)
 * lxd: Only mark daemon ready once containers are up
 * lxd: Properly validate daemon keys on unset
 * lxd: Refactoring of sub-command code
 * lxd: Use our custom http server when updating HTTPS address too
 * lxd/containers: Add basic logging to container creation
 * lxd/containers: Avoid race condition in network fill function
 * lxd/containers: Blacklist lxc.syslog and lxc.ephemeral
 * lxd/containers: Cleanup leftover temp file
 * lxd/containers: Detect background tasks to allow clean exit on exec
 * lxd/containers: Do mounts in the right order
 * lxd/containers: Don't record last\_state.power twice
 * lxd/containers: Fix container state recording
 * lxd/containers: Fix device hotplug with major/minor set
 * lxd/containers: Fix file push error handling
 * lxd/containers: Fix logging for file\_manip commands
 * lxd/containers: Move FromLXCState out of shared
 * lxd/containers: Return a clear error when replacing a directory
 * lxd/containers: Rework EEXISTS detection on create
 * lxd/networks: Allow for network-specific lease updates
 * lxd/networks: DHCP over TCP has never been implemented
 * lxd/nsexec: Also call setgroups
 * lxd/seccomp: Fix generated seccomp profile
 * lxd/storage: Change ContainerStart to take the name and path to start
 * Makefile: Rework "make dist"
 * shared: Give Architecture handling its own package
 * shared: Give IO progress tracker its own package
 * shared: Give simplestreams client its own package
 * shared: Give version handling its own package
 * shared: Introduce our own formatter
 * shared: Make a helper to compute cert fingerprint
 * shared: Make PrintStack print at the Error level
 * shared: Move WebsocketUpgrader to network.go
 * shared: Rename idmapset\_test\_linux.go to idmapset\_linux\_test.go
 * shared/idmap: Drop debugging code
 * shared/idmap: Fix intersection test
 * shared/simplestreams: Don't depend on custom http handler
 * shared/simplestreams: Pass UserAgent as argument
 * tests: Add pki test
 * tests: Only attach lxdbr0 if it is present on the host
 * tests: Simplify testsuite spawn code
 * tests: Test lxd shutdown

### Try it for yourself
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.0.8 release announcement <span class="text-muted">24th of November 2016</span>
Follow-up bugfix release to fix a regression introduced by the rushed 2.0.7 release.

### The changes since LXD 2.0.7 are

Bugfixes:

 * Don't grab addresses from public remotes

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.6.2 release announcement <span class="text-muted">24th of November 2016</span>
Follow-up bugfix release to fix a regression introduced by the rushed 2.6.1 release.

### The changes in this release include

Bugfixes:

 * Don't grab addresses from public remotes

### Try it for yourself
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.0.7 release announcement <span class="text-muted">24th of November 2016</span>
This is an emergency bugfix release to fix a critical regression in LXD 2.0.6.

The regression was causing pre-existing unprivileged containers to  
potentially start as privileged containers upon restart.

### The changes since LXD 2.0.6 are

Bugfixes:

 * extra/bash: Better parse containers list
 * lxc/copy: Make container copy more robust (Issue #2640)
 * lxd/containers: Don't assign idmaps to privileged containers
 * lxd/containers: Don't break when parsing old containers
 * lxd/containers: Don't double apply templates
 * lxd/containers: Fix concurrent map iteration+modification
 * lxd/containers: Fix idmap handling of pre-idmap containers (Issue #2644)
 * tests: Add tests for file templating (Issue #2642)

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.6.1 release announcement <span class="text-muted">24th of November 2016</span>
This is an emergency bugfix release to fix a critical regression in LXD 2.6.

The regression was causing pre-existing unpriivleged containers to  
potentially start as privileged containers upon restart.

### The changes in this release include

Bugfixes:

 * extra/bash: Better parse containers list
 * lxc/copy: Make container copy more robust (Issue #2640)
 * lxc/init: Remove unicode character from lxc warning
 * lxd/containers: Don't assign idmaps to privileged containers
 * lxd/containers: Don't break when parsing old containers
 * lxd/containers: Don't double apply templates
 * lxd/containers: Fix concurrent map iteration+modification
 * lxd/containers: Fix idmap handling of pre-idmap containers (Issue #2644)
 * tests: Add tests for file templating (Issue #2642)

### Try it for yourself
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.0.6 release announcement <span class="text-muted">23rd of November 2016</span>
This is the sixth bugfix release for LXD 2.0.

### The changes since LXD 2.0.5 are

Minor improvements:

 * Support for container specific uid/gid maps (see userns-idmap.md)

Bugfixes:

 * appveyor: Add config to git (Issue #2537)
 * appveyor: Cleanup appveyor.yml before modifications
 * appveyor: Create archive with platform specifier in its name
 * appveyor: Do verbose testing for test names and timings
 * appveyor: Publish compiled binaries for download
 * client: Rework progress handling
 * doc: Add hacking guide (debugging.md)
 * doc: Add official Windows support in README
 * doc: Bump liblxc version required in README
 * doc: Sort API endpoints in rest-api.md
 * doc: Update README to specify docker installation details
 * doc: Update requirements, we actually require 2.0.0 or higher
 * doc: Use consistent method ordering in rest-api.md
 * extra/bash: Allow dash in parameters to lxc-client bash-completion
 * extra/bash: Fix \_lxd\_profiles in lxc-client bash-completion
 * extra/lxc-to-lxd: Better output with no container
 * extra/lxc-to-lxd: Check that source path exists (disk) (Issue #2572)
 * extra/lxc-to-lxd: Consistent logging
 * extra/lxc-to-lxd: Don't fail dry-run with runnning containers
 * extra/lxc-to-lxd: Drop dependency on pylxd
 * extra/lxc-to-lxd: Fix lxdpath handling
 * extra/lxc-to-lxd: Formatting
 * extra/lxc-to-lxd: Migrate lxc.aa\_profile if set
 * extra/lxc-to-lxd: Print summary and proper exit code
 * lxc/copy: Don't use the operation as a marker of success
 * lxc/copy: Wait on the source operation too
 * lxc/delete: update help text
 * lxc/exec: Set term to "dumb" on windows (Issue #2288)
 * lxc/finger: update help text
 * lxc: Fix tests on Windows/Mac
 * lxc/list: Fix typo in help message
 * lxc/remote: Fix remote add with Go tip
 * lxc/restore: update help text
 * lxc: Use .yaml as the yaml extension in examples
 * lxd/certificates: Export all documented certificate fields
 * lxd/containers: Add /snap/bin to PATH even if only /snap exists
 * lxd/containers: Also clean up apparmor stuff in OnStart when something fails
 * lxd/containers: Attach to userns on file operations
 * lxd/containers: Be more verbose on mkdir failure
 * lxd/containers: Better handle concurrent stop/shutdown
 * lxd/containers: Catch and return more errors in OnStop
 * lxd/containers: Clarify container delete failure error
 * lxd/containers: Don't destroy ephemeral container on restart (Issue #2555)
 * lxd/containers: Don't double delete ephemeral containers
 * lxd/containers: Don't show invalid logs
 * lxd/containers: Fix forkmount to work with 4.8 and higher
 * lxd/containers: Fix invalid filename of metadata on export (Issue #2467)
 * lxd/containers: Improve config validation on update
 * lxd/containers: Improve container error handling
 * lxd/containers: Improve container locking mechanism (Issue #2612)
 * lxd/containers: log OnStart/OnStop hook errors
 * lxd/containers: More reliable container autostart (Issue #2469)
 * lxd/containers: Only load kernel modules if not loaded
 * lxd/containers: Properly validate CPU allowance
 * lxd/containers: Properly validate memory limits (Issue #2483)
 * lxd/containers: Record the err from go-lxc
 * lxd/containers: Remove legacy code from OnStop
 * lxd/containers: Remove unused code
 * lxd/containers: Save properties on publish
 * lxd/containers: Set LXC loglevel to match daemon (Issue #2528)
 * lxd/containers: Skip leading whitespace in raw.lxc
 * lxd/containers: Start storage when necessary in stateful start
 * lxd/containers: Timeout container freeze on stop
 * lxd/images: Detect out of disk space unpack errors (Issue #2201)
 * lxd/images: Don't make unnecessary image copies (Issue #2508)
 * lxd/images: Don't update images at all if interval is 0
 * lxd/images: Store the simplestreams cache to disk (Issue #2487)
 * lxd/init: Detect zfs kernel support
 * lxd/init: Ignore ZFS if in a container
 * lxd/main: Immediately exit when no DB in activateifneeded
 * lxd/migration: Fix a race for collecting logs
 * lxd/migration: Remove debugging by file creation
 * lxd/migration: Start migration storage at the right time (Issue #2505)
 * lxd/storage: Fix 10s delay on removing used ZFS images (Issue #2617)
 * lxd/storage: Freeze before copying in dir backend
 * lxd/storage: Simplify rsync code
 * shared/certificates: Be more thorough when parsing ip addr
 * shared: Disable keepalives in http.Transports
 * shared: Move Linux specific tests away (Issue #2449)
 * shared/simplestreams: Cleanup unused properties
 * tests: Better fix LXD\_DEBUG
 * tests: Cleanup leftover containers
 * tests: Don't depend on main.sh for filemanip
 * tests: Implement LXD\_VERBOSE
 * tests: Reduce verbosity under LXD\_DEBUG
 * travis: Run the client tests
 * travis: Update to match Jenkins Go versions

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.6 release announcement <span class="text-muted">22nd of November 2016</span>
### The changes in this release include
New features:

 * Support for container specific uid/gid maps (see userns-idmap.md)
 * Send progress notification during container migration (API only)
 * Copy the source image properties into the container properties (image. namespace)

Bugfixes:

 * doc: Add hacking guide (debugging.md)
 * doc: Add missing pci options for gpu in configuration.md
 * doc: Bump liblxc version required in README
 * doc: Document user.network-config
 * doc: Exec recording needs an API extension
 * doc: Specify docker installation details in README
 * lxc/delete: Update help text
 * lxc/file: Fix recursive file pull/push on Windows
 * lxc/finger: Update help text
 * lxc/restore: Update help text
 * lxc: Rework progress handling
 * lxd/containers: Actually surface the last used update error
 * lxd/containers: Add /snap/bin to PATH even if only /snap exists
 * lxd/containers: Attach to userns on file operations
 * lxd/containers: Better handle concurent stop/shutdown
 * lxd/containers: Clarify container delete failure error
 * lxd/containers: Correctly set liblxc loglevel to debug when in --debug mode
 * lxd/containers: Don't double delete ephemeral containers
 * lxd/containers: Improve container error handling
 * lxd/containers: Improve container locking mechanism (Issue #2612)
 * lxd/containers: Save properties on publish
 * lxd/containers: Skip leading whitespace in raw.lxc
 * lxd/containers: Start storage when necessary during stateful start
 * lxd/containers: Timeout container freeze on stop
 * lxd/containers: Track speed during network transfers
 * lxd/images: Don't update images at all if interval is 0
 * lxd/main: Immediately exit when no DB in activateifneeded
 * lxd/networks: Fixed minor typo in checkNetwork
 * lxd/networks: Spawn dnsmasq on FAN bridges
 * lxd/storage: Fix 10s delay on removing ZFS used images (Issue #2617)
 * lxd/storage: Freeze container during copy on directory backend
 * scripts/lxc-to-lxd: Better output with no container
 * scripts/lxc-to-lxd: Check that source path exists (disk) (Issue #2572)
 * scripts/lxc-to-lxd: Consistent logging
 * scripts/lxc-to-lxd: Don't fail dry-run with runnning containers
 * scripts/lxc-to-lxd: Drop dependency on pylxd
 * scripts/lxc-to-lxd: Fix lxdpath handling
 * scripts/lxc-to-lxd: Formatting
 * scripts/lxc-to-lxd: Migrate lxc.aa\_profile if set
 * scripts/lxc-to-lxd: Print summary and proper exit code
 * shared/idmapset: Fix typo in Intersects
 * shared/simplestreams: Cleanup unused properties
 * tests: Cleanup leftover containers
 * tests: Don't depend on main.sh for filemanip
 * tests: Implement LXD\_VERBOSE for reduced verbosity
 * tests: Reduce verbosity under LXD\_DEBUG

### Try it for yourself
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.5 release announcement <span class="text-muted">25th of October 2016</span>
### The changes in this release include
New features:

 * lxc/remote: Allow adding a new remote just by FQDN/IP (without a name)
 * lxd/containers: Implement exec output recording in the API
 * lxd/images: Store the simplestreams cache to disk (allows for offline use of those remote images)
 * lxd/certificates: Add support for PUT/PATCH of certificates
 * lxd/containers: Support signal forwarding in exec session
 * lxd/containers: Add support for GPU hotplug ("gpu" device type)

Bugfixes:

 * appveyor: Add appveyor config to git (Issue #2537)
 * client: Disable keepalives in http.Transports
 * client: Fix tests of client on Windows/Mac
 * doc: Add official Windows support to README
 * doc: Sort API endpoints in rest-api
 * doc: Use consistent method ordering in rest-api
 * doc: Use spaces everywhere
 * doc: We actually require 2.0.0 or higher
 * doc: Workaround github markdown renderer
 * examples: Use .yaml as the yaml extension
 * extra: Added the command network to lxc-client bash-completion
 * extra: Allow dash in parameters to lxc-client bash-completion
 * extra: Fix \_lxd\_profiles in lxc-client bash-completion
 * lxc/copy: Don't use the operation as a marker of success
 * lxc/copy: Wait on the source operation too
 * lxc/exec: Set term to "dumb" on windows (Issue #2288)
 * lxc/file: Fix help typo
 * lxc/file: Fix mkdir -p /
 * lxc/file: Normalize paths before sending them to the server (Issue #2557)
 * lxc/init: Fix typo in nictype value for -n
 * lxc/list: Fix typo in lxc list help
 * lxc/push: Fix typo (Issue #2501)
 * lxc/remote: Fix remote add with Go tip
 * lxd/certificates: Export all documented certificate fields
 * lxd/containers: Be more verbose on mkdir failure
 * lxd/containers: Catch and return more errors in OnStop
 * lxd/containers: Clean up apparmor stuff in OnStart when something fails
 * lxd/containers: Don't destroy ephemeral container on restart (Issue #2555)
 * lxd/containers: Don't show invalid logs
 * lxd/containers: exec: Remove unused code
 * lxd/containers: Fix forkmount to work with 4.8 and higher
 * lxd/containers: Fix wording of seccomp error message
 * lxd/containers: Improve config validation on update
 * lxd/containers: Log OnStart/OnStop hook errors
 * lxd/containers: More reliable container autostart (Issue #2469)
 * lxd/containers: Only load kernel modules if not loaded
 * lxd/containers: Properly validate CPU allowance
 * lxd/containers: Properly validate memory limits (Issue #2483)
 * lxd/containers: Record the err from go-lxc
 * lxd/containers: Remove legacy code from OnStop
 * lxd/containers: Report correct dev type in log
 * lxd/containers: Set LXC loglevel to match daemon (Issue #2528)
 * lxd/containers: USB vendorid is mandatory, productid isn't
 * lxd/devices: Be less optimistic about netlink info
 * lxd/devices: Use DEVNAME entry of netlink for usb
 * lxd/images: Detect out of disk space unpack errors (Issue #2201)
 * lxd/images: Don't make unnecessary image copies (Issue #2508)
 * lxd/images: Fix invalid filename of metadata on export (Issue #2467)
 * lxd/init: Detect zfs kernel support
 * lxd/init: Ignore ZFS if in a container
 * lxd/migration: Fix a race for collecting logs
 * lxd/migration: Remove debugging by file creation
 * lxd/migration: Start migration storage at the right time (Issue #2505)
 * lxd/networks: Always allow communication with dnsmasq (Issue #2506)
 * lxd/networks: Always pass --enable-ra with IPv6 (Issue #2481)
 * lxd/networks: Fill DHCP checksums
 * lxd/networks: Fix IPv6 DHCP logic
 * shared/cert: be more thorough when parsing ip addr
 * shared: Move Linux specific tests away (Issue #2449)
 * travis: Run the client tests
 * travis: Update to match Jenkins Go versions

### Try it for yourself
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.4.1 release announcement <span class="text-muted">5th of October 2016</span>
The primary goal for this release is to publish release tarballs that actually report LXD  
as "2.4.1" rather than "2.3" as the release ones mistakenly did.

We're including a couple of bugfixes in the process too.

### The changes in this release include

Bugfixes:

 * shared: Remove logging import
 * tests: add a test to make sure we don't accidentally include new deps
 * extras: Added the command shell to lxc-client bash-completion

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.0.5 release announcement <span class="text-muted">5th of October 2016</span>
This is the fifth bugfix release for LXD 2.0.

### The changes since LXD 2.0.4 are
Note that several migration fixes included in this release depend on a newer go-lxc.  
If building manually, you may need to update your copy of go-lxc.  
If building for a distribution, you may need to update your packaged version of go-lxc to a newer snapshot.

Minor improvements:

 * Support for AppArmor namespacing and stacking
 * Rework LXD daemon logging to be cleaner and more generally useful (Issue #1928)
 * "lxc info CONTAINER" now shows the name of the remote for the container
 * Client errors now include the remote the container is on
 * /snap/bin is included to PATH if present in the container

Bugfixes:

 * doc: Add txqueuelen tweak.
 * doc: Clarify that user\_subvol\_rm\_allowed is needed for btrfs nesting (Issue #2338)
 * doc: Fix the table style of environment.md (Issue: #2410)
 * doc: Fix typos in production-setup.md
 * doc: Remove trailing spaces in production-setup.md
 * doc: Spacing cleanup
 * extras: Containers state checking for start, stop and exec commands
 * extras: Fixed container convert from LXC to LXD
 * fuidshift: expand symlinks to last path component
 * lxc: Drop unused httpAddr property
 * lxc/exec: Document lxc exec -- args
 * lxc/exec: Use os.LookupEnv from go 1.5 to find environment vars
 * lxc: Fix spacing alignment in config.go's examples
 * lxc/help: Send error to stdout (Issue #2301)
 * lxd/apparmor: Be less restrictive when unprivileged
 * lxd-bridge: Fail on dnsmasq failure
 * lxd-bridge: Fix crash in lxd-bridge-proxy
 * lxd: Consistently handle name conflicts
 * lxd/container: Allow unsetting any config key
 * lxd/container\_lxc: handle xattrs
 * lxd/container: Retry generating petnames
 * lxd/container: Return an error on "restart" without force of a paused container (Issue #2311)
 * lxd/container: Rework container operation locking (Issue #2297)
 * lxd/daemon: Do our own socket activation (Issue #2333)
 * lxd/db: Fix int64 handling
 * lxd/db: Make a database backup on schema updates (Issue #2299)
 * lxd/db: Rework DB schema updates
 * lxd/image: Fix support for lzma alone file format (Issue #2360)
 * lxd/image: Tweak squashfs for low-memory systems (Issue #2382)
 * lxd/init: Change default host to all (::)
 * lxd/init: Change validation functions for consistency
 * lxd/init: Default to "dir" when "zfs" isn't available (Issue #2340)
 * lxd/init: Don't fail when passed "all" as an IP
 * lxd/init: Enable compression on new zfs pools
 * lxd/init: Fix listed default value for ZFS pool (Issue #2339)
 * lxd/init: use more intelligent logic for partition sizing
 * lxd/migration: Actually support copying across different CoW based backend types (Issue #2359)
 * lxd/migration: Also show warnings on c/r errors
 * lxd/migration: Bump ghost limit
 * lxd/migration: Don't use ActionScript if it's not available
 * lxd/migration: Preserve snapshot configuration
 * lxd/migration: Resume dumped container on failed restore
 * lxd/migration: Use liblxc's new preserves\_inodes feature
 * lxd/network: Detect bonds
 * lxd/network: Detect openvswitch
 * lxd/network: Fix networkIsInUse
 * lxd/network: Move and rename isOnBridge
 * lxd/profile: Cleaner error on existing profile name
 * lxd/profile: Properly cleanup on profile removal (Issue #2347)
 * lxd/storage: Copy everything on container copy (Issue #2371)
 * lxd/storage: Extra checks and config for ZFS pools
 * Makefile: Don't recursively include test deps
 * README: Add AppVeyor badge (Windows testing)
 * shared: Add GetOwner stub for Windows (fixes #2438)
 * shared: Generate client certificate with proper extended usage info
 * shared: Make TestReaderToChannel transfer smaller
 * shared: New RunCommand wrapper function
 * tests: Add a test to make sure we don't accidentally include new deps
 * tests: add test for GetAllXattr()
 * tests: Fix apparmor version check
 * tests: Fix for newer shellcheck
 * tests: Force UTC timezone
 * tests: Only check leftovers on active LXD
 * tests: skip tests when xatts are not supported

### Try it for yourself
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.4 release announcement <span class="text-muted">4th of October 2016</span>
### The changes in this release include
New features:

 * Add API support for push based migration (with a client acting as relay)
 * Add a new used\_by property to profiles (similar to networks)
 * Update "lxc profile list" to show a table
 * Support configuring NAT through "lxd init"

Bugfixes:

 * lxd/init: Actually add new network to profile
 * lxd/init: Typo fix
 * lxd/migration: Don't use ActionScript if it's not available
 * lxd/network: Allow nil network config
 * lxd/network: Better deal with partially disabled IPv6
 * lxd/network: Fix automatic nat settings
 * lxd/network: Fix IPv6 forwarding logic
 * lxd/network: Fix rare race condition with sysctl
 * lxd/network: Fix typo discovered by lintian
 * lxd/zfs: Extra checks and config for ZFS pools
 * doc: Add AppVeyor badge (Windows testing)
 * Makefile: Don't recursively include test deps
 * shared: Add GetOwner stub for Windows
 * shared: Generate client certificate with proper extended usage info
 * test: Fix apparmor version check
 * test: Fix shellcheck warning
 * test: Force UTC timezone
 * test: Make container cleanup more reliable

### Try it for yourself
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.3 release announcement <span class="text-muted">27th of September 2016</span>
LXD 2.3 includes a few major features we've been working on for months.

The main one is a completely new set of API endpoints, configuration options and commands.  
This allows creating and configuring bridges through LXD, including IPv4  
and IPv6 connectivity, Ubuntu FAN support, cross-host tunnels with GRE  
or VXLAN, various DNS modes, DHCP configuration and MAC filtering.

The other feature we're very excited about is support for AppArmor  
namespaces and stacking. This will allow containers to load apparmor  
profiles and further confine their workloads.

### The changes in this release include
New features:

 * Introduce the new network management API
    * POST to /1.0/networks (see rest-api.md)
    * PUT to /1.0/networks/NAME (see rest-api.md)
    * PATCH to /1.0/networks/NAME (see rest-api.md)
    * DELETE to /1.0/networks/NAME (see rest-api.md)
    * "lxc network" commands
    * Network configuration in "lxd init"
    * The default profile now comes without network configuration
    * The old lxd-bridge code has been removed
    * Details of configuration options in configuration.md
 * Support for AppArmor namespaces and profile stacking
    * On supported kernels, containers will now be able to use apparmor
 * Introduce a new storage.lvm\_mount\_options daemon configuration option
 * Rework log message priorities and add more context to log messages
 * "lxc info" now shows the remote name in its output
 * The client now includes the remote name in error messages

Bugfixes:

 * apparmor: Be less restrictive when unprivileged
 * apparmor: create an apparmor namespace for each container
 * doc: Fix rest-api for PATCH addition
 * doc: Fix the table sytle of environment.md
 * extras: Containers state checking for start, stop and exec commands in bash completion
 * extras: Fixed container convert from LXC to LXD
 * extras: Update bash completion for current options
 * lxc: Drop unused httpAddr property
 * lxc/exec: Document lxc exec -- args
 * lxc/file: Make the target directory on recursive pull
 * lxd/db: Don't try to backup the database when running tests
 * lxd/db: Fix int64 handling
 * lxd/images: Tweak squashfs for low-memory systems
 * lxd/init: Change validation functions for consistency
 * lxd/init: Enable compression on new zfs pools
 * lxd/log: Add format wrappers for log functions
 * lxd/log: Add wrappers for log functions
 * lxd/log: Transition to new wrappers
 * lxd/migration: Actually support copying across different CoW based backend types
 * lxd/migration: Also show warnings on c/r errors
 * lxd/migration: Preserve snapshot configuration during copy
 * lxd/network: Detect bonds
 * lxd/network: Detect openvswitch
 * lxd/network: Fix networkIsInUse
 * lxd/network: Move and rename isOnBridge
 * shared: Export type checking functions
 * shared: fuidshift: Expand symlinks to last path component
 * shared: New RunCommand wrapper function
 * snappy: Add /snap/bin to PATH if present

### Try it for yourself
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.2 release announcement <span class="text-muted">14th of September 2016</span>
### The changes in this release include
New features:

 * client: Add a "manpage" command (Issue #2280)
 * client: Add a "rename" alias (Issue #2320)
 * client/file: Recursive file push/pull (-r) (Issue #1218)
 * client/file: Support recursive directory creation (-p) (Issue #2290)
 * client/info: Add cpu usage (Issue #1867)
 * client/publish: Allow overriding compression algorithm (Issue #2296)
 * daemon: Make a database backup on schema updates (Issue #2299)
 * daemon/container: Expose CPU usage (Issue #1867)
 * daemon/container: Recursive file push/pull (Issue #1218)
 * daemon/image: Allow overriding compression algorithm (Issue #2296)
 * daemon/init: Ask for images.auto\_update\_interval (Issue #2167)
 * daemon/storage: Add new storage.zfs\_use\_refquota option (Issue #2354)

Bugfixes:

 * client/exec: Use os.LookupEnv from go 1.5 to find environment vars
 * client/help: Change lxc help to to go to stdout (Issue #2301)
 * daemon: Consistently handle name conflicts
 * daemon/container: Allow unsetting any config key
 * daemon/container: Fix USB transposed major/minor
 * daemon/container: Handle xattrs on publish
 * daemon/container: Retry generating petnames on conflict
 * daemon/container: Return an error on "restart" without force of a paused container (Issue #2311)
 * daemon/container: Rework container operation locking (Issue #2297)
 * daemon/container: Try to remove the usb bus dir after device disconnect (Issue #2306)
 * daemon/container: Various USB hotplug fixes (Issue #2312)
 * daemon/dir: Copy everything on container copy (Issue #2371)
 * daemon: Do our own socket activation (Issue #2333)
 * daemon/image: Fix support for lzma alone file format (Issue #2360)
 * daemon/init: Change default host to all (::)
 * daemon/init: Default to "dir" when "zfs" isn't available (Issue #2340)
 * daemon/init: Fix listed default value for ZFS pool (Issue #2339)
 * daemon/init: Use more intelligent logic for partition sizing
 * daemon/profile: Cleaner error on existing profile name
 * daemon/profile: Properly cleanup on profile removal (Issue #2347)
 * doc: Add txqueuelen tweak
 * doc: Clarify that user\_subvol\_rm\_allowed is needed for btrfs nesting (Issue #2338)
 * doc: Fix typos in production-setup.md
 * doc: Rename api\_extensions to api-extensions
 * i18n: Update po files and Japanese translation
 * lxd-bridge: Fix crash in lxd-bridge-proxy
 * tests: Fix race in alias test
 * tests: Make TestReaderToChannel transfer smaller
 * tests: Only check leftovers on active LXD

### Try it for yourself
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.1 release announcement <span class="text-muted">16th of August 2016</span>
LXD 2.1 is the first feature release following LXD 2.0 LTS.

Note that this release does not have LTS status and as such will not  
benefit from multi-year support or bugfix releases.

For production environments, we recommend that you stick to the LXD 2.0 LTS release.

### The changes in this release include
New features:

 * client: Add a `lxc shell` alias by default
 * client: Build unix-like aliases directly into LXC (`lxc {cp,ls,mv,rm}`, `lxc image {cp,ls,rm}`, `lxc image alias {ls,rm}`, `lxc remote {ls,mv,rm}` and `lxc config device {ls,rm}`)
 * client: Generate the client certificate on-demand
 * client/copy: Allow additional profiles and config to be set
 * client/copy: Pick a random name if not specified and same host
 * client/image: Add --format and json output
 * client/image: Allow deleting multiple images at once
 * client/list: Add support for config key columns (e.g. `lxc list -c ns,security.privileged:privileged`)
 * client/profile: `lxc profile apply` is now `lxc profile assign`
 * client/profile: New `lxc profile add` and `lxc profile remove` sub-commands
 * client/version: Do not show the version command by default
 * daemon: Add a global core.https\_allowed\_credentials key
 * daemon: Implement ETag support for all PUT calls
 * daemon: Implement PKI authentication (see doc/lxd-ssl-authentication.md)
 * daemon: Implement the PATCH method for all endpoints already supporting PUT
 * daemon/container: : Add config key for container force shutdown timeout (boot.host\_shutdown\_timeout)
 * daemon/container: Add some seccomp knobs (security.syscalls.{blacklist,blacklist\_default,blacklist\_compat,whitelist} and raw.seccomp)
 * daemon/container: Add support for the "usb" device type (see doc/configuration.md)
 * daemon/container: Record the last used date for containers (also expose in `lxc info` and `lxc list`)
 * daemon/zfs: Allow forcing snapshot removal through configuration (storage.zfs\_remove\_snapshots)

Bugfixes:

 * All the bugfixes listed as part of LXD 2.0.1, 2.0.2, 2.0.3 and 2.0.4
 * tests: Fix for newer shellcheck
 * lxd-bridge: Fail on dnsmasq failure
 * c/r: switch to the new ->migrate API
 * c/r: use liblxc's new preserves\_inodes feature
 * c/r: bump ghost limit

### Try it for yourself
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).



## LXD 2.0.4 release announcement <span class="text-muted">15th of August 2016</span>
This is the fourth bugfix release for LXD 2.0.

### The changes since LXD 2.0.3 are
Minor improvements:

 * /dev/net/tun is now a default device (always present)
 * lxd-bridge: dnsmasq is now configured with IPv6 name resolution
 * lxd-bridge: iptables rules now have a comment (Issue #2125)
 * "lxd init" now comes with reasonable defaults (Issue #1933)
 * The "images:" remote now uses simplestreams on new installations
 * "lxc image export" now always uses the image fingerprint as filename
 * Import progress is now reported for URL imports in "lxc image import"

Bugfixes:

 * apparmor: Add feature detection and clean things a bit
 * apparmor: Don't depend on the LXC apparmor profile (Issue #1942)
 * apparmor: Rename main two chunks of rules (Issue #1942)
 * apparmor: Setup a more modular apparmor profile (Issue #1942)
 * client: Don't share http client with go routines (Issue #2186)
 * client: Error when trying to remove a non-existent device (Issue #2277)
 * client: Fix API info reporting in "lxc info"
 * client: Fix spelling: permisson -> permission (Issue #2211)
 * client: Make client.websocket a public API
 * client: Make --version option visible (Issue #2171)
 * client: Relax constraints on WebsocketRecvStream args
 * client: Use named args for actionCmds
 * client/finger: Remove unused field from finger cmd (Issue #2170)
 * client/image: Fix image import from URL (Issue #2272)
 * client/list: fix concurrent read/write (Issue #2183)
 * client/list: Fix error handling and race in "lxc list" (Issue #1753)
 * client/pause: Add some additional help to `lxc pause`
 * client/profile: Add "lxc profile unset" to help message (Issue #2227)
 * daemon/container: Actually handle containers list error
 * daemon/container: Add sanity checks for common problems (Issue #2190)
 * daemon/container: Alphabetize device processing (Issue #2233)
 * daemon/container: Better errors when sanity checking devices
 * daemon/container: Better handle missing or invalid device types (Issue #2210)
 * daemon/container: Document and validate limits.\*.priority values (Issue #2231)
 * daemon/container: Document image export target behavior and fix bugs (Issue #2205)
 * daemon/container: Don't unfreeze a container on stop (Issue #2164)
 * daemon/container: Fix flag name in init error message
 * daemon/container: Fix limits.disk.priority when set to 0 (Issue #2230)
 * daemon/container: Fix nic hotplug with openvswitch (Issue #2106)
 * daemon/container: Fix unix-char/unix-block in nested containers (Issue #2279)
 * daemon/container: Improve check for invalid physical devices
 * daemon/container: Remember the return code in the non wait-for-websocket case (Issue #2243)
 * daemon/container: Remove unused "name" argument from {create,remove}UnixDevice
 * daemon/container: Return more error information back to the user (Issue #2190)
 * daemon/container: Sort disk devices by their path before their names (Issue #2249)
 * daemon/container: Unfreeze frozen container on shutdown (Issue #2164)
 * daemon/db: Don't fail db upgrade if $LXD\_DIR/containers doesn't exist (LP: #1602025)
 * daemon/db: remove fuse device from docker profile (Issue #2213)
 * daemon/migration: fix tempdir handling
 * daemon/profile: Prevent using invalid profile names (Issue #2274)
 * daemon/zfs: Fix ZFS volume size on 32bit architectures (Issue #2158)
 * daemon/zfs: Only delete copy- snapshots on delete (Issue #2127)
 * daemon/zfs: Remove subvolume in zfs.ImageCreate error flow (Issue #2194)
 * doc: Add /dev/net/tun and /dev/fuse to docs
 * doc: Added command to install squashfs-tools in README.md
 * doc: Document config\_get in pongo templates
 * doc: Fixed errors on api examples with curl
 * doc: Initial documentation for production use of LXD (Issue #2256)
 * doc: Shuffle packages a bit in README.md
 * lxd-bridge-proxy: Remove unused code
 * Makefile: Also have "make dist" run multiple go get
 * scripts: Make lxc-to-lxd work inside virtualenv (Issue #2175)
 * simplestreams: Fix size reporting (Issue #2223)
 * simplestreams: Handle images without labels
 * simplestreams: List images available as both squashfs and tar.xz
 * simplestreams: Properly deal with unset expiry
 * simplestreams: Set proper user-agent
 * simplestreams: Use the hashes in the right order (Issue #2239)


### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.0.3 release announcement <span class="text-muted">28th of June 2016</span>
This is the third bugfix release for LXD 2.0.

### The changes since LXD 2.0.2 are
Notes:

 * The "unsquashfs" command is now a LXD requirement as it is needed to
   unpack the newer Ubuntu images.
 * The REST API will now return a 201 code accompanied with a Location
   header following a POST to an endpoint returning an Sync response. It
   used to be sometimes returning a 200 without the Location header.
 * Containers now get a /dev/fuse device by default.

Minor improvements:

 * extras: Better bash completion coverage
 * client/delete: Allow -f as a shortcut of --force
 * client/info: Include the certificate fingerprint in server info (Issue #2098)
 * client/info: Show remote in the --show-log example provided on error
 * core: Add squashfs support as needed by newer Ubuntu images
 * core: Tweak TLS cipher list a bit to allow browsers to talk to LXD (Issue #2034)
 * daemon/container: Setup /dev/fuse by default

Bugfixes:

 * client: Better handle connection errors
 * client: Check all alias args to support subcommand aliases (Issue #2095)
 * client/file: Don't modify file permissions on edit
 * client/image: Use the daemon provided fingerprint on image copy (Issue #2162)
 * client: Normalize the URLs in the client (Issue #2112)
 * client/remote: Fix a panic in 'remote add' (Issue #2089)
 * client/remote: Fix parsing of &lt;FQDN&gt;:&lt;PORT&gt;
 * core: Better handle PEM decoding errors (Issue #2119)
 * core: Check for zero byte send in ReaderToChannel (Issue #2072)
 * core: Fix a concurrent websocket write crash
 * core: Use default buffer size for WebsocketUpgrader
 * daemon: Add missing linebreak to lxd help
 * daemon/api: Set Location on sync POST requests (Issue #2092)
 * daemon/btrfs: Fix failure to restore on btrfs (Issue #2058)
 * daemon/certificate: Fail to add an existing certificate
 * daemon/config: Allow "none" as compression algorithm (regression fix)
 * daemon/container: Add target path to rootfs tarball in image export (Issue #1980)
 * daemon/container: Better handle bind mounts
 * daemon/container: GET of a nonexistent file now 404s (Issue #2059)
 * daemon/container: Make devices cgroup config more readable
 * daemon/container: Improve error message on disk setup failure
 * daemon/container: Use defer to undo changes on failed update
 * daemon/db: Don't try to chmod zfs.img when testing db upgrades
 * daemon/db: Don't try to update /var/lib/lxd/containers in go tests
 * daemon/init: Actually unset the storage keys
 * daemon/lvm: Don't call lvextend with recent LVM versions
 * daemon/migration: Setup some buffering for zfs/btrfs send
 * daemon/migration: Simplify checkpoint/restore code everywhere
 * daemon/migration: switch to the new LXC migrate API
 * daemon/zfs: Improve block device detection
 * daemon/zfs: Mount if not mounted (Issue #1888)
 * doc: Clarify ZFS snapshot shortcomings (Issue #2055)
 * doc: Drop JSON example from configuration.md
 * doc: Fix certificates JSON examples to cover all fields
 * doc: Fix typo in "unix-block" description
 * doc: Improve shared folder documentation (README) (Issue #2123)
 * lxd/patches: Add support for one-time patches (separate from DB schema updates)
 * Makefile: go get has become worse, now need 3 runs
 * Makefile: Update repository URL for xgettext-go
 * migration: Consolidate error handling
 * test: 201 is a valid return code for alias creation
 * test: Add a test for ReaderToChannel
 * test: Add test for "lxc file edit" target file owner and permission

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.0.2 release announcement <span class="text-muted">30th of May 2016</span>
This is the second bugfix release for LXD 2.0 and its first security update.

## CVE-2016-1581
Robie Basak noticed that after setting up a loop based ZFS pool through "lxd init"  
the resulting file (/var/lib/lxd/zfs.img) was world readable.

This would allow any user on the system, and a potential attacker to copy and  
then read the data of any LXD container, regardless of file permissions inside the container.


LXD 2.0.2 fixes the "lxd init" logic to always set the mode of zfs.img to 0600.

Additionally a one-time upgrade step will trigger on first run and reset any existing  
zfs.img mode to be 0600.


If you manage an affected system and suspect an unauthorized user may have accessed  
the zfs.img file, you should consider replacing any secret that was stored in the  
affected containers (private keys and similar credentials).

## CVE-2016-1582
Robie Basak noticed that when switching an unprivileged container (default, security.privileged=false)  
into privileged mode (by setting security.privileged to true), the container rootfs is properly  
remapped but the container directory itself (/var/lib/lxd/containers/XYZ) remains at 0755.

This is a problem because it allows an unprivileged user on the host to access any world readable path  
under /var/lib/lxd/containers/XYZ which may include setuid binaries.

Such setuid binaries could then be used on the host to access otherwise unaccessible data  
or to escalate one's privileges.


LXD 2.0.2 fixes this behavior by making sure all privileged containers are always root-owned and have  
their mode set to 0700 to prevent traversal by unprivileged users.

Additionally a one-time upgrade step will trigger on first run and reset any existing privileged containers'  
ownership and mode to root:root 0700

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).

### Commits

 * CVE-2016-1581: [https://github.com/lxc/lxd/commit/7e8afe809284da64277eb080b456ab24ea53b516](https://github.com/lxc/lxd/commit/7e8afe809284da64277eb080b456ab24ea53b516)
 * CVE-2016-1582: [https://github.com/lxc/lxd/commit/f10e1bc47c1b385b396a35e540cb8cd9435783ea](https://github.com/lxc/lxd/commit/f10e1bc47c1b385b396a35e540cb8cd9435783ea)


## LXD 2.0.1 release announcement <span class="text-muted">16th of May 2016</span>
This is the first bugfix release for LXD 2.0.

### The bugfixes since LXD 2.0.0 are

 * Don't fail to start when shmounts can't be mounted, instead fail container startup
 * Invalidate the simplestreams cache on proxy change
 * Write the container's config file on start to the log path directly
 * Fix crash in list due to empty responses (Issue #1903)
 * Fail when removing non-existent profiles (Issue #1886)
 * Document --alias to image import (Issue #1900)
 * Fix "lxc start" and "lxc stop" options (stateful/stateless)
 * Give better error on invalid source stream (simplestreams)
 * Add basic REST API usage example to README.md
 * Fix typo in lxc stop --help
 * Convert lxc-to-lxd to stable supported pylxd API (Issue #1901)
 * Properly log image update failures
 * Better validate and rollback bad images (Issue #1913)
 * Send operation return value through SmartError
 * Fix basic filtering in lxc list (Issue #1917)
 * Tell the user how to launch a container on first start (Issue #1931)
 * Redirect "remote" to "remote:" when not conflicting (Issue #1931)
 * Don't load the LXC config for snapshots (Issue #1935)
 * list: Allow filtering by unset key (Issue #1917)
 * Fix example in `lxc launch`
 * Update Japanese translation and other po files
 * Fall back to cpuset.cpus on older kernels (Issue #1929)
 * Properly validate the server configuration keys (Issue #1939)
 * Fix daemonConfig handling of storage
 * Don't remove config file on forkmigrate
 * Fix config handling following config validation change
 * Fixed Markdown syntax in documentation
 * Don't fail early when removing disks (Issue #1964)
 * Don't recursively delete devices
 * Don't fail when some unix devices fail to be deleted
 * Use the same config checks for unix-char and unix-block
 * Allow removing when fs object no longer exists (Issue #1967)
 * Do proper logfile expiry (Issue #1966)
 * Make logging a bit more consistent
 * Don't ignore zfs errors
 * Properly update the mode, uid and gid on existing files (Issue #1975)
 * Detect invalid certificate files (Issue #1977)
 * Fix broken apparmor status check
 * Allow on/off as boolean strings
 * Properly validate the container configuration keys (Issue #1940)
 * Don't mask rsync transfer errors
 * Move execPath to a global variable
 * Use custom netcat instead of nc -U for rsync over websocket (Issue #1944)
 * Fix wrong state dir path in migration
 * Don't fail deleting images when the storage delete fails
 * Improve messages in the Japanese translation
 * Add more checks for the criu binary
 * Rework (live) migration tests
 * Make it explicit in documentation that devices on create are optional
 * Properly record the source of all image copies (Issue #2010)
 * Don't mark containers as ERROR while being created (Issue #1988)
 * Cleanup events sent for operations (Issue #1992)
 * Fix ZFS refcounting issues (Issue #1916 and Issue #2013)
 * Propagate snapshot config when copying a snapshot (Issue #2017)
 * Implement `lxc config show` for snapshots
 * Add Unix socket example to REST API usage.

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.0.0 release announcement <span class="text-muted">11th of April 2016</span>
This is the final release of LXD 2.0!

LXD 2.0 is a Long Term Support release, similar to LXC 2.0 and LXCFS 2.0 and so comes  
with a 5 years support commitment from upstream, ending on 1st of June 2021.

A walkthrough of the LXD 2.0 features can be found here: [LXD 2.0: Blog post series](https://www.stgraber.org/2016/03/11/lxd-2-0-blog-post-series-012/)

Packages for LXD 2.0 should be available in Ubuntu and other Linux distributions shortly.

Until then, you can just try it online using our [demo service](/lxd/try-it/)

### The main changes since LXD 2.0.0 rc9 are

 * client: Add a json format option to "lxc list".
 * client: Recommend running lxd init
 * lxd: Allow setting security.privileged when nested

### The bugfixes since LXD 2.0.0 rc9 are

 * client: Filter on expanded config rather than local config
 * client: Fix wrong mode being passed by file push
 * client: Show the snapshot name instead of the path
 * client: Tweak help messages
 * client: Update Japanese translation
 * core: Don't let umask mess with modes
 * core: Fix uid, gid and mode of retrieved files
 * core: zfs: Clean any leftover snapshot
 * core: zfs: Ignore non-LXD paths in user count
 * doc: Mark API as stable for release


### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.0.0.rc9 release announcement <span class="text-muted">6th of April 2016</span>

### The main changes for this release are

 * The 1.0 API is now considered stable
 * A new lxd-benchmark tool has been added as part of the testsuite
 * The client has been translated into Japanese

### Bugfixes

 * core: Check that the target is set on alias update
 * core: Don't use the cpu map from /proc/self/status
 * core: Fix all non-gzip compression algorithms
 * core: Improve ZFS reliability and performance
 * core: lxcbr0 is no more, replace it by lxdbr0
 * core: Prevent container actions while in setup mode
 * core: Set lxc.rootfs.bdev (performance improvement)
 * core: Stop the storage code after we're done remapping
 * core: Support holes in CPU usage (disabled CPUs)
 * core: Throttle the event listeners
 * core: Workaround bad go-lxc Start() behavior
 * extra: Update bash completion to use --fast (performance improvement)
 * list: Don't crash on missing disk or network info
 * lxd-bridge: Don't set link-local without a proxy
 * lxd-bridge-proxy: Bump port number to 13128
 * lxd-bridge: Run dnsmasq as the lxd user instead of the non-existing lxd-dnsmasq user
 * main: Have ActiveIfNeeded trigger if we have running containers
 * specs: Images are auto-updated every 6 hours
 * tests: Don't rely on the filesystem so much

### Try it for yourself

This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.0.0.rc8 release announcement <span class="text-muted">31st of March 2016</span>

### The main changes for this release are

 * The LVM volume size is now configurable through configuration rather than environment variables
 * "lxc image alias list" now supports filtering like the other list commands

### Bugfixes

 * Fix initial exec size
 * Fix wrong packets sent value
 * Workaround RemoveAll failures on long paths
 * doc: Fix bad markdown
 * Apply all templates at container startup time
 * simplestreams: cleanup
 * Use fork for command execution
 * Failure to unload the apparmor profile isn't fatal
 * Prevent deadlock on container stop failure

### Try it for yourself

This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.0.0.rc7 release announcement <span class="text-muted">28th of March 2016</span>

### The main changes for this release are

 * "lxc info" now reports resource consumption
 * Improved bash completions
 * Implement container creation from image properties

### Bugfixes

 * exec: remove dead code path
 * exec: send initial window size
 * exec: client: don't always send window size
 * exec: only access terminal size in interactive mode
 * docs: s/initial/Initial
 * Tests: Don't translate lxc output for parsing it.
 * Workaround a URL parser issue
 * Clarify the ZFS restore error
 * lxd-bridge: Don't fail due to missing IPv6

### Try it for yourself

This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.0.0.rc6 release announcement <span class="text-muted">23rd of March 2016</span>

### The main changes for this release are

 * New daemon "setup mode" to be used to feed configuration to the LXD
   daemon after startup and before it starts spawning containers.
 * The "get", "set" and "unset" commands have been added to "lxc config device" and "lxc profile device"
 * Broken containers are now marked as "ERROR" in "lxc list" rather than being hidden


### Bugfixes

 * lxd init: clarify no port is wanted with server address
 * lxd init: accept empty trust password
 * lxd init: recommend port 8443
 * README: document composing docker and default profiles.
 * Rename IsMock to MockMode
 * Cleanup daemon initialization
 * Remove the startDaemon function
 * Cleanup function names in main.go
 * Improve waitready
 * Fix permissions of new devices nodes
 * Allow the bridge to be brought down even if disabled
 * Some more lxd-bridge fixes
 * lxd-bridge: Make shellcheck happy

### Try it for yourself

This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.0.0.rc5 release announcement <span class="text-muted">21st of March 2016</span>

### The main changes for this release are

 * Fix DELETE /1.0/images/<fingerprint> to actually be Async. This is a
   minor API change to match the specification and will break backward
   compatibility with older clients (only when performing image deletion).
 * The deprecated lxd-images script has now been entirely removed.

### Bugfixes

 * Improve error reporting on image POST
 * Fix error handling logic around snapshots
 * Fix container shutdown to actually happen in parallel
 * Document 'auto\_update' parameter for 'POST /1.0/images'
 * stateful start: rework behavior
 * stateful snapshots: rework behavior
 * Bind-mount mqueue if unprivileged
 * update documentation on using docker in containers
 * bump the monitor timeout to 5s
 * lxd-bridge: Some tweaks

### Try it for yourself

This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.0.0.rc4 release announcement <span class="text-muted">16th of March 2016</span>

### The main changes for this release are

 * Support for recursive bind-mounts (recursive property on disk entries)
 * Add a new "ERROR" state for containers, used to indicate a communication problem with LXC
 * Make it possible to have templates only apply for non-existing files (create\_only property)
 * All the specifications have been updated and moved to the doc/ directory
 * /dev/lxd access is now restricted to uid 0 in the container

### Bugfixes

 * devices client: only print success message when successful
 * Fix devlxd failing to detect container
 * Have "device show" print yaml
 * specs: Clarify image handling
 * specs: Remove command-line-user-experience
 * specs: Remove dia database diagram
 * specs: Clarify the daemon spec
 * specs: Update /dev/lxd spec to match current state
 * specs: Update environment variables list
 * specs: Update SSL spec to match current state
 * specs: Re-format the migration document
 * specs: Update requirements
 * specs: Update storage backend spec
 * specs: Update userns to match reality
 * docker profile: add the apparmor enabled overmount
 * More strictly parse remote URLs
 * Fix devlxd access outside of an exec session
 * Return better errors for public and simplestream remotes
 * Block sys\_rawio by default

### Try it for yourself

This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.0.0.rc3 release announcement <span class="text-muted">11th of March 2016</span>

### The main changes for this release are

 * GET /1.0/containers/NAME/snapshots/SNAPNAME now returns the configuration and devices included in the snapshot
 * Three new configuration options have been introduced to configure the daemon to use an HTTP proxy
    * core.proxy\_https (if not set, uses HTTPS\_PROXY env variable)
    * core.proxy\_http (if not set, uses HTTP\_PROXY env variable)
    * core.proxy\_ignore\_hosts (if not set, uses NO\_PROXY env variable)
 * Cache remote simplestream data for an hour in the daemon so we don't hammer the remote server
 * Allow for auto-update of images coming from a LXD server

### Bugfixes

 * Change ConnectInfo to take a RemoteConfig.
 * Workaround kernel overmounting protection
 * migration: attempt to be slightly smart about moving filesystems
 * tests: disarm the gremlins by comparing things in UTC
 * zfs: fix handling of the "snapshot only" send case
 * Allow reducing the LVM LV size and update tests
 * profiles: don't mask error message when not found
 * mounting: only block devices hold filesystems
 * Rework event locking
 * Fix panic due to concurrent read/edit of container lock
 * zfs: Skip the pool header line
 * Make it clear that the init arguments only apply in auto mode
 * Fix error message when snapshotting with existing name
 * lvm: make errors log as errors
 * Don't generate client certificates when calling NewClient
 * Fix parsing image names
 * Forward errors from forkgetfile and forkputfile
 * Make changing https\_address more reliable
 * migration: don't defer cleanup of sending snapshots

### Try it for yourself

This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.0.0.rc2 release announcement <span class="text-muted">7th of March 2016</span>

### The main changes for this release are

 * Add configuration keys for the rest of the CORS headers
 * Get one step closer to dropping lxd-images, lxd-images is now just a shim
 * Deprecate support for Go < 1.5 as some of our dependencies dropped 1.4 support

### Bugfixes

 * Fix image import from remote lxd using aliases
 * Fix creation of extra volatile entries
 * Fix testsuite for when stdout is a file
 * Initialize the storage driver before messing with images
 * Restrict lxd init to root
 * Only attempt to load containers AFTER the socket is setup
 * Fix default protocol in image download
 * Only setup forwarding when an IP is set
 * client: add default config in NewClientFromInfo
 * Fix incorrect device type in dbUpdateFromV26

### Try it for yourself

This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.0.0.rc1 release announcement <span class="text-muted">2nd of March 2016</span>

This is the first release candidate for LXD 2.0. This means that we believe all features required  
for LXD 2.0 have now been merged and we only expect bugfixes and minor usability improvements  
to land between now and final release.

### The main changes for this release are

 * Support for the Cgroup namespace.
 * It is now possible to set the lxc.network.X.ipv{4,6}[.gateway] raw.lxc keys (with usual caution with regard to raw.lxc)
 * /proc and /sys are now clean straight mounts when the container is unprivileged
 * The scope of IP addresses is now exported and used to filter local addresses out by default
 * lxc exec now defaults to non-interactive mode when stdout isn't a tty
 * All the tables rendered by the client now look alike
 * Simplestreams is now natively supported by both the client and the server, eliminating the need for lxd-images
 * Background image syncronization is now supported by the server and done by-default for all cached images
 * The last time an image was used and whether it's stored in the cached is now exported over the API and visible in "lxc image info"
 * Profiles now have a description field
 * It is now possible to do a stateful container stop where the container is checkpointed to disk rather than killed, then resumed on next start.
 * A "docker" profile is now present by default with those settings required to be able to run Docker inside a LXD container.
 * Image import now reports upload progress.

### Bugfixes

 * Refactor the GenCert function so it can be reused.
 * tests: get rid of commented out code
 * Rework lxd.NewClient so we don't need a disk cache.
 * shared: export limit parsing function
 * Add upgrade procedure to README
 * websocket: fix panic() on concurrent writes
 * Don't allow the state functions to fail
 * specs: Remove section on Etag (not implemented)
 * specs: Fix rest-api layout
 * list: Fix crash on PID column
 * Fix name printing on lxc init
 * Fix a variety of issues with blkio limits
 * Fix hardcoded architecture path in apparmor profile
 * tests: Fix failure on networked test
 * tests: Fix the number of certs check
 * Fix snapshot configuration
 * Don't rely on the filesystem to check if stateful
 * Catch checkpoint failures
 * Fix DB test
 * Better lock around event listeners
 * Fix container not rebooting properly
 * Add package "make" to build dependencies installation command
 * Don't stop at an unsatisfactory sub?id entry
 * client: better error on `lxc stop remote:`
 * Just use the shared struct whenever possible in the client
 * Fix download progress on launch
 * Fix alignment of numbers in tables

### Upgrade notes

 * This release deprecates the lxd-images tool, instead use the ubuntu:
   and ubuntu-daily: default remotes to achieve the same feature. If you
   absolutely must copy an image into the local store, it can be done with
   "lxc image copy ubuntu:14.04 local: --alias ubuntu".

### Try it for yourself

This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.0.0.beta4 release announcement <span class="text-muted">23rd of February 2016</span>

### The main changes for this release are

 * REST API changes
    * The API versioning data at /1.0 has changed, now includes, api\_status, api\_version and api\_extensions
    * Architecture fields are now returned as strings instead of obscure integer
    * GET /1.0/containers/NAME/state has been reworked, now includes more detailed network information, disk usage information as well as memory consumption data.
 * New --fast mode for "lxc list" which only lists "cheap" fields
 * The container architecture is now listed in "lxc info"
 * Add process count limit (pids cgroup)

### Bugfixes

 * Fix container creation from remote image alias
 * Fix Content-Type value for errors
 * Don't stop containers before asking the user
 * Re-implement terminal functions through cgo (fixes ppc64el)
 * Allow access to /dev/zero
 * tests: Keep pprof self-contained
 * Use iproute2 instead of bridge-utils
 * lxd-images: Fix sync
 * allow cgroupfs mounting on cgns kernels
 * Optimize container process count (use pid cgroup)
 * Fix file push permissions
 * list: Query containers by batch of 10
 * Only re-balance on host network changes
 * list: Attempt to optimize the go routines slightly

### Upgrade notes

 * This release breaks backward compatibility with older LXD versions.
   Please make sure all your clients and servers run the same version.
 * See notes above for changes to the REST API.

### Try it for yourself

This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.0.0.beta3 release announcement <span class="text-muted">18th of February 2016</span>

### The main changes for this release are

 * "lxc publish" can now be forced to publish running containers (it will temporarily stop them)
 * "lxc image list" now shows images sorted by description
 * Complete review of the REST API and update to make it all match the specification.
    * GET /1.0 now shows the "public" field
    * GET /1.0/certificates now returns a valid list of endpoints
    * GET /1.0/containers/NAME for performance reasons no longer returns the detailed container runtime status ("status" key), a separate query to /1.0/containers/NAME/state is now needed
    * GET /1.0/containers/NAME/logs now returns a valid list of endpoints
    * POST /1.0/containers/NAME/snapshots no longer requires the "stateful" field to be set (defaults to false)
    * POST /1.0/images now lets you override "properties" and "filename" for all supported input types
    * GET /1.0/images/aliases/NAME now returns valid data (the "name" and "target" fields were swapped)
    * POST /1.0/images/aliases/NAME has been implemented
    * PUT /1.0/images/aliases/NAME has been implemented
    * GET /1.0/images/FINGERPRINT no longer shows an empty "target" field for aliases
    * GET /1.0/networks/NAME has been re-designed
    * GET /1.0/operations/UUID/wait?timeout=X now actually times out
    * POST /1.0/profiles/NAME has been implemented
    * All timestamps are now RFC3339 strings and consistently named (created\_at, updated\_at, expires\_at, uploaded\_at)
    * Syncronous replies no longer contain an empty "operation" field
 * Extra security now applies for cross-server communication:
    * Unless a certificate is passed along with the query, the following operations now require the remote certificate to be valid according to system CA:
         * Container creation from migration (copy, move & live migration)
         * Container creation from remote image
         * Image copy from other LXD server
         * Image import from https
    * The command client will automatically set the necessary "certificate" field for you for those requests
 * Starting with this release, Go 1.3 is no longer supported by LXD.

### Bugfixes

 * Fix invalid container name in lxc file
 * tests: Add test for aliases with slashes
 * Fix updating ephemeral and architecture flags
 * Clarify publish error message a bit
 * Fix interacting with aliases with a trailing slash
 * specs: Update rest-api to match reality
 * Don't move the image into place until it's been parsed
 * Make sure we always use the right dialer and proxy
 * specs: Fix wrong key name
 * Fix lxc file on Windows
 * Fix broken DB migration when upgrading from LXD 0.27 or older
 * Avoid global variables in client tool
 * Fix errors due to early failure to connect
 * Always export the file size on transfer
 * Fixed some typos
 * lxd-images: Register atexit at init time
 * specs: Update storage spec for btrfs send/receive
 * Use upstream go-systemd (this breaks backward compatibility with Go 1.3)

### Upgrade notes

 * This release breaks backward compatibility with older LXD versions.
   Please make sure all your clients and servers run the same version.
 * See notes above for changes to the REST API and security policies.

### Try it for yourself

This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.0.0.beta2 release announcement <span class="text-muted">10th of February 2016</span>

### The main changes for this release are
 * /dev/console has been re-enabled
 * The btrfs backend now supports optimized container transfer (send/receive)
 * Source file ownership and permissions are conserved by default on "lxc file push"
 * Both "lxc list" and "lxc image list" now accept regular expressions as filter
 * lxc info now shows the container creation date (if known), the list of profiles and detailed snapshot information
 * Recursive aliases are now supported in the client (e.g. "delete: delete -f")
 * "lxc delete" now requires a "-f/--force" flag when run against a running container
 * "lxc delete" now has a -i option to always request user confirmation on delete

### Bugfixes
 * Fix building LXD on arm64
 * Fix "make dist" for new version numbers
 * specs: Re-sync database spec with reality
 * Fail when unsetting a key that's not currently set
 * Remove backward compatibility code
 * Fix copying snapshot as new container root
 * Fix failure to stop snapshots on migration failure
 * Fix migration of snapshots using rsync
 * Implement migration fallback to rsync
 * Change ShiftIfNecessary to shift on startup
 * make i18n for profiles output in info
 * reduce verbiage to fit help text more efficiently
 * Make blkio limits more robust
 * add eth0 "name" to the default profile
 * only print profile applied message on success
 * init: Attempt to modprobe the zfs module
 * init: Use zpool create -f to work on unformatted disks
 * init: Improve detection of available backends
 * zfs: Fix cross-backend copies
 * fix stresstest.sh to use byte suffix for limits.memory
 * fix command-line-user-experience examples of limits.memory to include byte suffix

### Try it for yourself

This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 2.0.0.beta1 release announcement <span class="text-muted">26th of January 2016</span>

### The main changes for this release are

 * "lxc config edit" now works to edit the local server configuration
 * Add support for block I/O limits
 * Add support for network I/O limits

### Bugfixes

 * error out on deleting nonexistent alias
 * Fix LXC config rendering
 * Improve detection of text editor
 * Fix "lxc file edit"
 * Add network limits
 * Fix IPv6 handling in daemon code
 * Update specs and documentation on file pull/push
 * Better deal with broken LXC
 * Update README to avoid setting a mountpoint for zfs
 * Print message on successful copy of image
 * Fix small typo s/sucessfully/successfully
 * Improve forkstart debugging
 * Always call Rename() when not migrating
 * Use a tempfile for image uploads
 * report errors if the restore call's start command fails
 * Truncate the target on file transfer
 * Mention that raw keys are risky
 * Allow writes to /dev/tty in privileged containers
 * implement stateful snapshot restore
 * don't fail to delete when deleting snapshots fails

### Try it for yourself

This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).



## LXD 0.27 release announcement <span class="text-muted">19th of January 2016</span>

### The main changes for this release are

 * Support for container disk quota (zfs and btrfs only)
 * Download progress during image copy and container launch
 * Initial work on a LXC to LXD script (supports almost every configuration except for unprivileged containers)
 * New linux.kernel\_modules container property (list of modules to load before starting the container)
 * New core.https\_allowed\_origin server property (controls the Access-Control-Allow-Origin header)
 * Profile changes are now live-applied to all affected containers
 * "lxc config edit" now works against servers too
 * Changes to security.nesting are now live-applied
 * Support for xfs with the lvm backend
 * "lxc image list" now supports filtering (by name, hash and properties)
 * Improved bash completion profile
 * The default remote is now visible in "lxc remote list"
 * "lxc info" now indicates whether a container is ephemeral or persistent
 * Various improvement to help messages

### Bugfixes

 * Set a default http timeout of 10s
 * Don't crash during publish when metadata.yaml is missing
 * Improve error reporting during migration
 * Improve error reporting during copy
 * Make sure containers are only removed from the database once removed from disk
 * Make sure images are only removed from the database once removed from disk
 * Fix LVM backend on LVM > 2.02.99
 * Improve DB performance when under heavy load
 * Correctly uidshift unprivileged CRIU images
 * Fix a race in forkmigrate
 * Fix race condition in event interface
 * Fix screen corruption when lxd-images hits an error
 * Don't ignore provided devices at create time
 * Fix web server to support all URLs with and without trailing slash
 * Make it possible to unset the zfs pool
 * lxd-setup-lvm-storage: Add default size of 10G
 * api: {Save|Load}Config should take a path as an argument
 * Fix automatically adding veth interface to the host bridge
 * Fix unsetting zfs pool when snapshots used to exist

### Try it for yourself

This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).



## LXD 0.26 release announcement <span class="text-muted">4th of January 2016</span>

### The main changes for this release are

 * New "host\_name" network interface property that specifies the name of the host side veth device
 * It is now possible to pull/push/edit files of a stopped container
 * It's now possible to specify what "lxc list" columns to show (including a new PID column)

### Bugfixes

 * Properly inherit the active CPU map rather than assuming all CPUs are usable
 * zfs: Fix a couple of race conditions
 * lvm: Fix creation of container from an image
 * Cut down network round trips in half by not calling Finger() every time
 * Fix invalid permissions on container shmounts and devices directories
 * Fix container teardown not always cleaning up devices & mounts
 * Improve performance of host-triggered container stop/restart (5s faster)
 * Make lxd callhook timeout after 30s (instead of hanging indefinitely on failure)
 * Cleanup and document the testsuite
 * Fix remote certificate handling on add/rename/remove

### Try it for yourself

This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.25 release announcement <span class="text-muted">21st of December 2015</span>

### The main changes for this release are

 * New --mode argument to "lxc exec", makes it possible to force non-interactive mode.
 * Full support of the s390x architecture (IBM z/series 64bit)
 * Command aliases can now move the command arguments by using the @ARGS@ keyword
 * Full support for CPU limits (defaults to all CPUs, maximum priority and no time limit):
    * limits.cpu: Number of CPUs (e.g. 2) or range of core (e.g. 0,2-3)
    * limits.cpu.allowance: Percentage of CPU time under load (e.g. 50%) or hard time limit (10ms/50ms)
    * limits.cpu.priority: Container priority when host is under load as a value between 1 (lowest) and 10 (highest) (e.g. 5)
 * Full support for memory limits (defaults to all memory, hard enforcement, swap enabled and maximum priority):
    * limits.memory: Limit in bytes (kB, MB, GB, TB, PB, EB suffixes supported) (e.g. 256MB) or in percentage of the host memory (e.g. 20%)
    * limits.memory.enforce: hard (container cannot use more memory than allocated) or soft (limit only applies under load)
    * limits.memory.swap: true or false, indicates whether the container may use the swap
    * limits.memory.swap.priority: Priority for swap usage, from 1 to 10, with 1 causing the most data to be swapped out to disk
 * All CPU and memory limits are now applied live.
 * Support for optimized (send/receive) ZFS container & snapshot migration

### Bugfixes

 * Fix a variety of storage race conditions as identified by new tests
 * lxd-images: Give clearer error messages
 * Fix image expiry logic
 * Refactor logging code
 * Fix migration code to be spec-compliant
 * Detect available CGroup controllers
 * zfs: Prevent restoring from old (not latest) snapshosts
 * Report clearer errors when adding devices to containers
 * zfs: Fix container rename
 * lvm: Fix container rename
 * lvm: Workaround failure on older LVM versions
 * lvm: Hide fdleak messages
 * Move some directories around for consistency
 * exec: lock fds map for exclusive writes
 * lvm: Fix snapshot rename handling
 * lvm: Fix container snapshot migration
 * Fix container DB cleanup (leftover records)
 * Fix image cleanup (leftover records)
 * Use the host architecture when container arch == 0
 * Do config & device validation upstream
 * Cleanup DB leftovers
 * Return a clear error message when an image already exists
 * Only return remote\_cache\_expiry if set
 * Flush volatile when they don't apply

### Testsuite

 * The testsuite can now be run with all storage backends
 * Several race conditions have been eliminated
 * The testsuite now checks that the filesystem structure is clean
 * The testsuite now checks that the database tables are clean
 * Fix a couple of tests whose failure was being ignored
 * Dramatically speed up testsuite by using --force-local
 * Use shutdown and waitready commands

### Upgrade notes

 * limits.memory suffixes are now kB, MB, GB, TB, EB and PB. Old
   suffixes are upgraded as a one-time operation on the next LXD startup.
 * The migrate REST API call now takes a https URL to the source
   operation rather than a wss URL to the secrets. This was changed to
   match the specification.

### Try it for yourself

This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.24 release announcement <span class="text-muted">8th of December 2015</span>

### The main changes for this release are
 * Support for macvlan network interfaces
 * Support for physical network interfaces
 * Support for building on s390x
 * Snapshots are now transfered along with their parent container on copy/move
 * A CPU scheduler for limits.cpu has been implemented
 * "lxc config unset/set" now works against a remote server

### Bugfixes
 * Improved IP rendering in "lxc list"
 * Fix apparmor handling in nested containers
 * Fix various hangs and failures during device hotplug
 * Image publishing from a snapshot now produces the exact same output every time
 * Fix publishing of snapshots
 * Fix our translation layer by switching to an alternative gettext implementation
 * Switch UUID implementation to an alternative implementation
 * Drop migratable profile (current CRIU can migrate a standard container)
 * Create missing directories when mounting a disk into a container
 * Serialize image creation (reduces overall load)
 * Various ZFS bugfixes (load kernel module when missing, re-try destroys and better handle mounts)
 * Completely rework the LXC container driver to be simpler and more reliable
 * Prevent setting volatile keys on profiles
 * Automatically cleanup stale volatile keys
 * Fix launching un-named (randomly named) containers

### Upgrade notes

 * Older lxc clients will hang on exec against a newer server, make sure to update the client.
 * limits.cpus is now called limits.cpu, a one-time migration is done at LXD startup.

### Try it for yourself

This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.23 release announcement <span class="text-muted">24th of November 2015</span>

### The main changes for this release are

 * A new "lxd init" command is available to help setup storage, network and password on new LXD installations
 * Log messages are now sent over the events API
 * New process count metric available in the containers API and in "lxc info"
 * Console color support on Windows
 * Rewritten operations handling, now includes events for each changes and includes download status
 * "lxc image import" can now take the URL to an https webserver advertising a LXD image through HTTP headers
 * The minimal HTTP proxy shipped by LXD has been rewritten to be even lighter

### Bugfixes

 * "lxc config get \<server-config-key\>" now works as expected
 * lxd-images: Much lower memory usage when importing an image
 * More readable log entries over the events API
 * Event filtering in "lxc monitor" now works properly
 * Container architectures are now properly tracked
 * LXD now ensures that published containers will always have metadata in their image
 * Container copy now copies devices and config properly
 * Image import failure now result in proper error messages
 * "lxc info --show-log" is now also suggested on "lxc launch" failures

### Upgrade notes

Users of the operations API may have to update their code to suit the new operation code.  
The new implementation is now specification-compliant, meaning that all operation queries  
always return a full operation object wrapped in an Async reply and with operation-specific  
properties inside the metadata.

The "lxc" client was updated to be backward compatible when possible.

### Try it for yourself

This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.22 release announcement <span class="text-muted">10th of November 2015</span>

### The main changes for this release are

 * Freeze containers before killing them (helps with fork bombs)
 * Configurable image compression algorithm (also supports no compression)
 * Support using an HTTP proxy when downloading a remote image
 * Initial implementation of the events interface and minimal client for it (lxc monitor)

### Bugfixes

 * Don't remove the main LXD socket when starting a second daemon
 * On failure to add a remote, cleanup the cached certificate
 * LXD no longer requires a client certificate to talk to public endpoints
 * Better error and debug messages for checkpoint/restore and container startup
 * Fixed a race condition during container startup
 * Update the busybox test image to avoid an occasional hang
 * lvm-setup: Update to work on older Ubuntu releases
 * Fix extraction of bz2 compressed images
 * Fix a number of fd leaks
 * Fix shmount handling to avoid creating an extra mount everytime LXD starts
 * lxd-images: Fallback to the daily stream if an image can't be found in the releases stream
 * Fix a uid/gid mapping issue on container copy
 * Fix a LXD hang on invalid LXC configuration key

### Upgrade notes

This LXD version corrects a problem in the implementation of the images API,  
as a result, some actions against older servers or using older clients may fail.

### Try it for yourself

This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.21 release announcement <span class="text-muted">27th of October 2015</span>

The main changes for this release are:

 * Client is now buildable on Windows.
 * Default LVM volume size has been reduced to 10GB.
 * Command aliases can be setup in the client.
 * "lxc info" now prints server information too.
 * It's now possible to use a nested LXD on btrfs storage.

Additionally:

 * Various storage backend fixes
 * Better error handling and error reporting
 * A lot of bugfixes (no known bugs left at time of release)

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.20 release announcement <span class="text-muted">14th of October 2015</span>

The main changes for this release are:

 * Container restart is now implemented as stop + start (reloads all config)
 * Config key=value can now be passed at launch time using --config/-c
 * A new "pause" command is now available to temporarily freeze a container
 * Cached images are now private by default
 * You can now publish a remote container into the local image store
 * It is now possible to add character or block devices to a container
 * The image size is now shown in the image list

Additionally:

 * Various storage backend fixes
 * Better error handling and error reporting
 * Improved testsuite
 * A lot of bugfixes (no known bugs left at time of release)


### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.19 release announcement <span class="text-muted">29th of September 2015</span>

The main changes for this release are:

 * ZFS support
 * Support for container nesting
 * Allow setting multi-line configuration keys by reading from stdin (using "-" as the value)
 * It's now possible to make an ephemeral copy of a container (-e/--ephemeral flag)
 * Public read-only servers are now auto-detected (no more --public needed)
 * lxd-images now supports updating existing images (when using the --sync flag)
 * It is now possible to mark/unmark images as public (through the edit command)

Additionally:

 * A completely reworked testsuite
 * Some refactoring in preparation for a Windows client
 * Updated documentation and specifications
 * A lot of bugfixes (no known bugs left at time of release)

Note that due to an API implementation problem in past releases, older command line clients  
will fail to interact with LXD 0.19's image store. Such clients should be upgraded to 0.19.


### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.18 release announcement <span class="text-muted">15th of September 2015</span>

The main changes for this release are:

 * lxc: Add a new --force-local argument
 * lxc: Allow file push/pull using stdin/stdout
 * lxc: Rework translation template
 * lxd/core: Fix image creation of privileged containers
 * lxd/core: implement per-container apparmor profiles
 * lxd/core: implement per-container seccomp profiles
 * lxd/core: Fix socket-activation on exit
 * lxd/core: Add support for nested LXD
 * lxd/btrfs: Fix shared mount detection on btrfs
 * lxd: Implement new "shutdown" sub-command
 * lxd: Implement new "activateifneeded" sub-command
 * scripts: Add script to set up and delete LVM storage
 * A bunch more fixes, tests and other improvements

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.17 release announcement <span class="text-muted">1st of September 2015</span>

The main changes for this release are:

 * lxc: Add a new "lxc file edit" command
 * lxc: Add support for public remotes
 * lxc: Support adding a remote by its IPv6 address
 * lxd/core: Fix building with Go 1.5
 * lxd/core: Allow renaming snapshots
 * lxd/core: Add a new /logs REST API to containers
 * lxd/core: Export the storage backend name and version
 * lxd/btrfs: Support for recursive subvolume snapshot and removal
 * lxd/lvm: Add snapshot support
 * lxd/lvm: Add container copy support
 * lxd/lvm: Add container rename support
 * lxd/lvm: Disallow changing LVM config if pool is in use.
 * lxd/lvm: Document LVM config keys in specs
 * lxd-images: Deprecate "lxd images import lxc"
 * lxd-images: Print the manifest URL
 * lxd-images: Default to the "releases" stream for Ubuntu images
 * vagrant: Support running in vmware
 * A bunch more fixes, tests and other improvements

Note that as of this release, the use of "lxd-images import lxc" is
deprecated in favor of using the images.linuxcontainers.org remote.

For example:

    lxd-images import lxc centos 7 amd64 --alias centos
    lxc launch centos my-container

Now becomes:

    lxc remote add images images.linuxcontainers.org    # one-time setup
    lxc launch images:centos/7/amd64 my-container

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.16 release announcement <span class="text-muted">18th of August 2015</span>

The main changes for this release are:

 * Added container auto-start support, includes start delay and start ordering
 * Support copying container and images from a local (unix socket) to a remote (https) daemon
 * Remap the unprivileged containers when transferring between hosts with differing allocations
 * Remap existing containers when their idmap changes or when they're switched between privileged and unprivileged
 * The EDITOR variable is now properly respected
 * When starting a container from a remote image, the cached image now expires
 * New --public flag added to lxd-images
 * Allow --stateful snapshots
 * And a lot of bugfixes, performance and test improvements

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.15 release announcement <span class="text-muted">4th of August 2015</span>

The main changes for this release are:

 * Added storage and network hotplug
 * Improved logging
 * Improved LVM and btrfs backend
 * /dev/lxd now works with gccgo
 * Added new environment.\* configuration namespace to set environment variables inside the container
 * Init and launch now print the container name
 * lxd-images now defaults to Ubuntu 14.04 LTS
 * --tcp has now been replaced by the core.https\_address config option
 * Improved LVM and btrfs support
 * Add some LXD speed tests
 * New "make client" target to only build the LXD client (use this for MacOS X)
 * Introduce new scripts and http proxy code for a lxdbr0 bridge
 * Rework internal storage representation
 * Rework internal container representation
 * Rework internal database representation
 * Various testsuite improvements
 * A lot more bugfixes and other small improvements

This release moves containers from /var/lib/lxd/lxc to /var/lib/lxd/containers  
and snapshots from /var/lib/lxd/lxc/\<name\>/snapshots to /var/lib/lxd/snapshots/\<name\>.
To do so, LXD will stop all containers on the next startup, then start them again  
after moving everything to the new location.

The --tcp daemon option has been replaced by the core.https\_address option allowing users  
to change the address and port LXD binds to. Changes are now applied immediately.


### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.14 release announcement <span class="text-muted">21st of July 2015</span>

The main changes for this release are:

 * Improve command line help
 * Improve LVM backend (only mount/umount storage while the container is running, ...)
 * Rework certificate handling (user interface, generation and recursive query support)
 * Fix a publish bug that would lead to invalid images
 * Fix IPv6 support of container copy/migration
 * New logging code (syslog support, logfile support and log levels)
 * Implement support for "split" images (separate metadata and rootfs)
 * Add download progress tracking to lxd-images
 * Detect and report architecture mismatches
 * Direct image copy between servers is now supported
 * /dev/lxd now supports the meta-data interface
 * Ubuntu cloud images may now be imported using lxd-images
 * Other code improvements (golint, refactoring, compression handling, tests, ...)

This is the first LXD release to support the official Ubuntu Cloud images.  
At this time, those are only available for the current development release (wily)  
but we hope to have images for all supported Ubuntu releases over the next few days.

To import one of those images into your LXD image store, run:

    lxd-images import ubuntu --alias ubuntu-cloud

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.13 release announcement <span class="text-muted">7th of July 2015</span>

The main changes for this release are:

 * Add support for LVM thin pools as a storage backend.
 * Add basic bash completion
 * Implement the "publish" command, turning a container into an image
 * Improve file push/pull reliability
 * Make it possible to start/stop/restart/delete multiple containers at once
 * Fix build under gccgo (currently disabling /dev/lxd in such case)
 * Improve btrfs performance during container copy
 * A lot of other bugfixes, minor improvements and cleanups

This is the first release of LXD where the client may be built on operating systems  
other than Linux. At the moment, MacOS X has been confirmed to work and Windows is known not to work,  
other Unix may work too but haven't been tested.

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.12 release announcement <span class="text-muted">23rd of June 2015</span>

The main changes for this release are:

 * Implement /dev/lxd
 * Fix initial console size on exec
 * Reduce memory footprint of migration
 * Use user readable date strings in the API
 * Allow unset for server config keys
 * Fix various race conditions with exec
 * Switch to a pure-go gettext implementation
 * Set proper Content-Type on all replies
 * Show the host veth device in info
 * Some changes to better support Snappy ubuntu
 * Various other bugfixes
 * Improve help messages
 * Improve testsuite
 * Initial German translation

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.11 release announcement <span class="text-muted">9th of June 2015</span>

The main changes for this release are:

 * File templating support in images
 * Socket activation with Systemd
 * Support for clean shutdown and container restart on startup
 * Implement "lxc image show"
 * Implement SIGWINCH support in exec (terminal resize event)
 * Make all configuration keys spec-compliant
 * Fix "lxc image edit"
 * Allow running the testsuite without any outside connectivity
 * Improve testsuite output to be more readable
 * And the usual set of bugfixes.


NOTE: The key to set a server password is now, core.trust\_password. 
On first startup of LXD 0.11, all the old supported names will be converted to the official one.


### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.10 release announcement <span class="text-muted">26th of May 2015</span>

The main changes for this release are:

 * Implemented snapshot restore
 * New --accept-certificate flag to lxc remote add
 * New --password flag to lxc remote add
 * Added "lxc profile device show" and " lxc config device show"
 * "lxc config show" and "lxc config set" now work for server configuration
 * lxc profile edit and lxc config edit now accept configuration on stdin
 * Added recursion support to /1.0/images/aliases API
 * Added recursion support to /1.0/containers/{name}/snapshots API
 * The command line client no longer depends on go-lxc
 * Re-worked uid/gid allocation and uid/gid shifting
 * Improved help and usage
 * Improved lxc list rendering
 * Improved lxc profile show and lxc config show
 * Improved debug messages
 * The LXD version is now exported on /1.0
 * Improved README
 * SSL certificates now expire after 10 years
 * Various test improvements and bugfixes

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.9 release announcement <span class="text-muted">12th of May 2015</span>

The main changes for this release are:

 * Fixed memory and file descriptior leaks (and add extra tests for those)
 * Fallback to chmod when setfacl fails (filesystem without ACLs support)
 * Fixed container logging and make it available through lxc info (--show-log)
 * Setup the right uid/gid map for privileged containers
 * Report invalid configuration in "lxc config edit" and "lxc profile edit"
 * Improved the first use experience and the profile/config examples
 * Rename "lxc config profile \*" to "lxc profile \*" (old syntax is still supported)
 * More reliable database handling
 * Container copies get a new MAC address
 * USER is now set in the container environment (on exec)
 * Track the image used to build the container and use this to optimize copy/migration
 * Improved database testing
 * Fixed pts device owneship on exec
 * Fixed raw.lxc being applied too early (resulted in broken lxc.network.script and others)
 * Better argument parsing in both lxc and lxd
 * Improved performance in container and network listing
 * Fixed certificate name conflicts in the trust database

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.8.1 release announcement <span class="text-muted">29th of April 2015</span>

Bugfix only release on top of 0.8 fixing some regressions:

 * Fix building on all architectures
 * Change the go-protobuf repository URL

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.8 release announcement <span class="text-muted">28th of April 2015</span>

The major changes for this release are:

 * Fixed uid/gid in lxc file push
 * Respect PROXY environment variables
 * Fix database locking issues
 * Add more debugging options
 * Various fixes to ephemeral containers
 * Fix creating a new container from a snapshot
 * When available, use btrfs subvolumes for faster container creation

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.7 release announcement <span class="text-muted">14th of April 2015</span>

The major changes for this release are:

 * Containers can now be started from a private image
 * Ephemeral containers are supported
 * Improved debugging
 * Some documentation update
 * A few more minor fixes

Please note that it's still early in the LXD development and that current LXD isn't intended  
for production use and comes with no support statement from upstream.  
(reported bugs and patches will be included in the next release)

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.6 release announcement <span class="text-muted">7th of April 2015</span>

The major changes for this release are:

 * Added a vagrant configuration file
 * The container's MAC address is now persistent
 * Variety of fixes regarding remote servers handling
 * Recursive query support (massive speed improvement for image servers)
 * TLS now configured to only support strong ciphers
 * Support setting aliases at image import time
 * Improved test coverage
 * Improved error messages on the client
 * Fix privileged containers handling
 * LXD can now be built on powerpc
 * And a lot more bugfixes and tweaks

Please note that it's still early in the LXD development and that current LXD isn't intended  
for production use and comes with no support statement from upstream.  
(reported bugs and patches will be included in the next release)

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.5 release announcement <span class="text-muted">24th of March 2015</span>

The major changes for this release are:

 * IPv6 support for remote servers
 * Check if the remote server happens to have a certificate which is trusted by the system
 * Implemented "lxc image copy"
 * Improved remote handling (default configuration, support for https:// and unix:// and a bunch of convenient aliases)
 * API consistency for key/value storage (always exported as dictionaries)
 * Remote images can now be started by their long or short hash
 * Remote image properties are now properly mirrored in the local cache
 * A lot of database locking issues have been resolved

Please note that it's still early in the LXD development and that current LXD isn't intended  
for production use and comes with no support statement from upstream.  
(reported bugs and patches will be included in the next release)

At this point, most core LXD features are present but many of the  
particular options aren't implemented yet (don't match our  
specifications), we expect to make great progress in supporting all of  
the expected options over the next couple of releases.

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.4 release announcement <span class="text-muted">17th of March 2015</span>

The major changes for this release are:

 * Support for starting a container from a remote image
 * Support for copying/moving containers between hosts
 * Improved command line (listing, aliases, profiles, partial hashes, ...)
 * Improved error logging
 * API fixes to more closely match the spec
 * A lot of bugfixes

Please note that it's still early in the LXD development and that current LXD isn't intended  
for production use and comes with no support statement from upstream.  
(reported bugs and patches will be included in the next release)

At this point, most core LXD features are present but many of the  
particular options aren't implemented yet (don't match our  
specifications), we expect to make great progress in supporting all of  
the expected options over the next couple of releases.

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.3 release announcement <span class="text-muted">10th of March 2015</span>

The major changes for this release are:

 * lxd:
    * Reworked exec, now with separate interactive and non-interactive modes and proper support for escape sequences.
    * Improved image handling, now supporting more compression algorithms and support for image export.
    * Initial support of live migration (requires particular container configuration)
    * Initial support of container configuration and profiles
        * Support for disks and network interfaces
        * Support for creating/deleting/assigining profiles
    * Introduce a "default" profile which is applied to all new containers unless otherwise specified.
 * lxc:
    * Improved user experience for the various "list" commands
    * Improved info command, now showing PID and IP addresses
    * Implement the image info command, shows all image properties and aliases.
    * Early (partial) french translation as an example translation of LXD.
    * Support of the "edit" command for images and profiles.
 * lxd-images:
    * Now supports creating a minimal busybox image.
    * Vastly improved image imports from images.linuxcontainers.org by no longer requiring repacking.
    * Now working with python3.2
 * Testsuite:
    * Added tests for container configuration, profiles, devices, migration, exec and database.
    * Now running using a minimal busybox image, making it run in just a few seconds.
 * Many bugfixes

Please note that it's still early in the LXD development and that current LXD isn't intended  
for production use and comes with no support statement from upstream.  
(reported bugs and patches will be included in the next release)

At this point, most core LXD features are present but many of the  
particular options aren't implemented yet (don't match our  
specifications), we expect to make great progress in supporting all of  
the expected options over the next couple of releases.

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.2 release announcement <span class="text-muted">27th of February 2015</span>

The major changes for this release are:

 * Initial version of the built-in image store
    * All containers must now be created from images
    * Images can be imported into LXD by using the provided "lxd-images" tool
    * Image aliases can be setup to make it easier to find your images
 * Database backend (all LXD data is now stored in a SQLite database)
 * Early stage of container configuration (partial API only)
 * Support for building for many architectures through gcc-go (not all dependencies are compatible)
 * Reworked exec mechanism
 * A lot of bugfixes

Please note that it's still early in the LXD development and that current LXD isn't intended  
for production use and comes with no support statement from upstream.  
(reported bugs and patches will be included in the next release)

We are still busy working on container migration, proper container configuration and a stable REST API.

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).


## LXD 0.1 release announcement <span class="text-muted">13th of February 2015</span>
This is the initial LXD release.

With this first release of LXD, it is possible to:

 * List containers
 * create, destroy, start, stop and execute commands into an Ubuntu 14.04 LTS amd64 container
 * Transfer files in and out of containers
 * Management of multiple LXD hosts through the lxc command line tool
 * Experiment with the LXD [REST API](/lxd/rest-api/)

Support for other container images, container migration, container configuration and profiles  
and a stable REST API will be coming in the next few releases.

This release is our first development snapshot and isn't intended for production use  
and comes with no support statement from upstream. 
(reported bugs and patches will be included in the next release)

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads/).
