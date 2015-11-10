![Download icon](/static/img/containers.png)
# News
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

This new LXD release is already available for you to try on our [demo service](/lxd/try-it).

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads).


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
The release tarballs can be found on our [download page](/lxd/downloads).


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
The release tarballs can be found on our [download page](/lxd/downloads).


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
The release tarballs can be found on our [download page](/lxd/downloads).


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
The release tarballs can be found on our [download page](/lxd/downloads).


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
The release tarballs can be found on our [download page](/lxd/downloads).


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
The release tarballs can be found on our [download page](/lxd/downloads).


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
The release tarballs can be found on our [download page](/lxd/downloads).


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
The release tarballs can be found on our [download page](/lxd/downloads).


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
The release tarballs can be found on our [download page](/lxd/downloads).


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
The release tarballs can be found on our [download page](/lxd/downloads).


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
The release tarballs can be found on our [download page](/lxd/downloads).


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
The release tarballs can be found on our [download page](/lxd/downloads).


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
The release tarballs can be found on our [download page](/lxd/downloads).


## LXD 0.8.1 release announcement <span class="text-muted">29th of April 2015</span>

Bugfix only release on top of 0.8 fixing some regressions:

 * Fix building on all architectures
 * Change the go-protobuf repository URL

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads).


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
The release tarballs can be found on our [download page](/lxd/downloads).


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
The release tarballs can be found on our [download page](/lxd/downloads).


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
The release tarballs can be found on our [download page](/lxd/downloads).


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
The release tarballs can be found on our [download page](/lxd/downloads).


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
The release tarballs can be found on our [download page](/lxd/downloads).


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
The release tarballs can be found on our [download page](/lxd/downloads).


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
The release tarballs can be found on our [download page](/lxd/downloads).


## LXD 0.1 release announcement <span class="text-muted">13th of February 2015</span>
This is the initial LXD release.

With this first release of LXD, it is possible to:

 * List containers
 * create, destroy, start, stop and execute commands into an Ubuntu 14.04 LTS amd64 container
 * Transfer files in and out of containers
 * Management of multiple LXD hosts through the lxc command line tool
 * Experiment with the LXD [REST API](/lxd/rest-api)

Support for other container images, container migration, container configuration and profiles  
and a stable REST API will be coming in the next few releases.

This release is our first development snapshot and isn't intended for production use  
and comes with no support statement from upstream. 
(reported bugs and patches will be included in the next release)

### Downloads
The release tarballs can be found on our [download page](/lxd/downloads).
