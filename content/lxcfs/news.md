# News
## LXCFS 2.0.8 release announcement
<span class="text-muted">19th of October 2017</span>

This is the eigth bugfix release for LXCFS 2.0.

This includes the following bugfixes:

 * bindings: Add mountpoint for unified hierarchy
 * bindings: Calculate uptime via proc/<pid>/stat
 * bindings: Revert virtualization of 'btime' field due to regressions in ps
 * doc: Update README
 * init: Add cgroupfs-mount to Should-Start/Stop sysvinit LSB headers
 * lib: Add common fallback dlopen for liblxcfs.so
 * lib: Fix the installation directory for liblxcfs to ${libdir}/lxcfs
 * pam: Add a 'all' option for -c
 * pam: Chown cgroup.procs file on unified hierarchy
 * pam: Report back when we find a unified hierarchy
 * tests: Fix invalid comparison
 * uptime: Fix a problem with subsequent reads

## LXCFS 2.0.7 release announcement
<span class="text-muted">11th of May 2017</span>

This is the seventh bugfix release for LXCFS 2.0.

This includes the following bugfixes:

 * Remove unused variable
 * Also check next variable for NULL on cg\_rmdir
 * virtualize the 'btime' field of /proc/stat
 * cleanup: return false instead of NULL as bool
 * Limit memswlimit by TotalSwap
 * pam\_cgfs: remove dead assignment
 * pam\_cgfs: return created directly
 * pam\_cgfs: make sure that \*\*p is not NULL
 * bindings: Want space for ints? Call sizeof(int)!
 * pam\_cgfs: make trim() safer
 * pam\_cgfs: error out on failure in cgv2\_init()
 * pam\_cgfs: remove dead assignment
 * bindings: implement guest nice
 * bindings: increase reserved buffer size a little

## LXCFS 2.0.6 release announcement
<span class="text-muted">23rd of January 2017</span>

This is the sixth bugfix release for LXCFS 2.0.

This includes the following bugfixes:

 * Fix swap values with nested cgroups
 * tests: Fix run on ppc64el
 * Fix wrong scanning of memory.stat

## LXCFS 2.0.5 release announcement
<span class="text-muted">23rd of November 2016</span>

This is the fifth bugfix release for LXCFS 2.0.

This includes the following bugfixes:

 * Add Documentation key to systemd unit
 * bindings: allow getattr on O\_WRONLY files
 * bindings: remove noop check
 * fix Active/Inactive /proc/meminfo
 * macro: add header for shared macros
 * pam\_cgfs: reimplement and add cgroupfs v2 support
 * pam\_cgfs: re-use cgroups that already belong to us
 * pam\_cgfs: handle cgroupfs v1 cpuset controller
 * pam\_cgfs: improve logging
 * cgroups: handle non-existent isolcpus file

## LXCFS 2.0.4 release announcement
<span class="text-muted">5th of October 2016</span>

This is the fourth bugfix release for LXCFS 2.0.

This includes the following bugfixes:

 * Fix test\_reload for lxcfs chroot
 * Virtualize more of the meminfo fields
 * pam: fix race in cgroup creation
 * meminfo: don't show negative swapfree
 * bindings: improve debugging
 * bindings: use openat fd for fstatat(), unlinkat()
 * bindings: close open fds on error
 * bindings: grant access to /var/lib/lxcfs
 * bindings: enable access to /var/lib/lxcfs/cgroup
 * bindings: allow access to /var/lib/lxcfs/proc
 * lxcfs, bindings: show "." and ".." dir entries
 * lxcfs: better fs behavior on /var/lib/lxcfs
 * bindings: non functional changes
 * bindings: set errno in pick\_controller\_from\_path()
 * bindings: more consistent fs behavior
 * add pld linux support
 * don't use argv[0] in usage output
 * bindings: revert cgroup check
 * bindings: improve returned errnos
 * bindings: make rmdir behave more consistently
 * libtool: do not link lxcfs against liblxcfs
 * bindings, lxcfs: improve debugging
 * bindings: fix debug macro
 * autotools: add -avoid-version
 * bindings: restore original working directory
 * bindings: add function to check fs type
 * bindings: agnostic naming
 * bindings: use chroot() on ramfs
 * bindings: fix type weirdness with statfs f\_type
 * bindings: make pivot\_enter() contain all its code

## LXCFS 2.0.3 release announcement
<span class="text-muted">15th of August 2016</span>

This is the third bugfix release for LXCFS 2.0.

This includes the following bugfixes:

 * Skip empty entries under /proc/self/cgroup
 * Setup and use a minimal chroot and mount namespace for cgroup mounts
 * Code cleanup and minor refactoring

## LXCFS 2.0.2 release announcement
<span class="text-muted">28th of June 2016</span>

This is the second bugfix release for LXCFS 2.0.

This includes the following bugfixes:

 * Don't build pam/ when --with-pamdir=none
 * libpam\_cgfs: Don't create new path if we are under /user.slice/user-$uid.slice

## LXCFS 2.0.1 release announcement
<span class="text-muted">16th of May 2016</span>

This is the first bugfix release for LXCFS 2.0.

This includes the following bugfixes:

 * Fix cpuinfo on s390x.
 * Use recursive cgroup values in diskstats.
 * Allow traversal (rx) to controller directories.
 * Fix do\_mount\_cgroups() crash on failure.
 * Better error handling in a number of path processing functions.
 * Better error handling in swap calculation.

## LXCFS 2.0.0 release announcement
<span class="text-muted">31st of March 2016</span>

 * We are happy to release version 2.0.0 of lxcfs.

## LXCFS 2.0.0.rc9 release announcement
<span class="text-muted">29st of March 2016</span>

 * This is the ninth release candidate for 2.0.0
 * This guards against potential double-releasing of fuse file info.

## LXCFS 2.0.0.rc8 release announcement
<span class="text-muted">21st of March 2016</span>

 * This is the eight release candidate for 2.0.0
 * This implements access(2) which is required by the lxcfs cgfsng driver.

## LXCFS 2.0.0.rc7 release announcement
<span class="text-muted">21st of March 2016</span>

 * This is the seventh release candidate for 2.0.0
 * This includes some important fixes to the upstart jobs and mount hooks
 * Makes the reload handler async-safe, and a few more posix compliancy fixes.

## LXCFS 2.0.0.rc6 release announcement
<span class="text-muted">17th of March 2016</span>

 * This is the sixth release candidate for 2.0.0
 * Adds support for the systemd cgroup naming scheme used in 14.04.

## LXCFS 2.0.0.rc5 release announcement
<span class="text-muted">14th of March 2016</span>

 * This is the fifth release candidate for 2.0.0
 * Fixes libpam-cgfs mis-chowning systemd cgroups when running (for instance) 'sudo'.

## LXCFS 2.0.0.rc4 release announcement
<span class="text-muted">11th of March 2016</span>

 * This is the fourth release candidate for 2.0.0
 * Fix from stgraber to the mount hook and upstart job.

## LXCFS 2.0.0.rc3 release announcement
<span class="text-muted">7th of March 2016</span>

 * This is the third release candidate for 2.0.0
 * Fixes in this release:
     * Not mounting lxcfs procfiles when /sys/fs/cgroup is not mounted in container.
     * Occasional corrupted output in free -m.

## LXCFS 2.0.0.rc2 release announcement
<span class="text-muted">24th of February 2016</span>

 * This is the second release candidate for 2.0.0
 * This adds the previously missing config/ directory to the release tarball.

## LXCFS 2.0.0.rc1 release announcement
<span class="text-muted">24th of February 2016</span>

 * This is the first release candidate for 2.0.0
 * This adds sysvinit, upstart and systemd jobs.

## LXCFS 2.0.0.beta2 release announcement
<span class="text-muted">19th of February 2016</span>

 * Fix a bug causing PAM module to hang if there are unmounted controllers
 * Avoid a rare but not impossible bug due to a faulty glibc assert when
   forking a pid after setns.

## LXCFS 2.0.0.beta1 release announcement
<span class="text-muted">9th of February 2016</span>

 * Add support for /proc/swaps
 * Create or chown systemd cgroups if asked
 * Move liblxcfs.so to /usr/lib/lxcfs.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads).

## LXCFS 0.18 release announcement
<span class="text-muted">4th of February 2016</span>

 * Support restarting lxcfs in most cases, by moving most functionality
   into a library which is reloaded on SIGUSR1

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads).

## LXCFS 0.17 release announcement
<span class="text-muted">26th of January 2016</span>

 * Add a PAM module
 * Allow users to see all cgroup directories under their init's.
 * Use a task's init process' cgroup usage+limits to virtualize procfiles,
   rather than the task's own limits.
 * Improve swap accounting

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads).

## LXCFS 0.16 release announcement
<span class="text-muted">8th of January 2016</span>
Bugfix release.

 * This provides a fix for the memory allocation bugs in the last two releases.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads).

## LXCFS 0.15 release announcement
<span class="text-muted">7th of January 2016</span>
Bugfix release.

 * Fixing a critical memory allocation bug which makes 0.14 unusable.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads).

## LXCFS 0.14 release announcement
<span class="text-muted">7th of January 2016</span>

 * Listen to hint from lxc regarding cgroup namespaces.
 * Several important bugfixes in code introduced during the switch from libnih.
 * Fix to swap usage reporting.
 * Fix overly strict visibility checks for tasks in root cgroup.
 * Many fixes to the tests.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads).

## LXCFS 0.13 release announcement
<span class="text-muted">25th of November 2015</span>
Bugfix release.

 * This fixes several bugs which prevented newer systemd-based containers from
   starting, and some more general bugs.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).

## LXCFS 0.12 release announcement
<span class="text-muted">17th of November 2015</span>
Critical bug/security fix update for LXCFS.

 * This fixes two critical CVEs.
 * Also switches to using cgroup filesystem natively instead of using
   cgmanager, resulting in dramatic speedup.
 * Several improvements in uptime, cpuinfo, and meminfo virtualization
 * Enable tests at code checkin
 * Set FUSE attr caching to half a second, and ship lxc stop hook to wait half
   a second before reboot.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).

## LXCFS 0.11 release announcement
<span class="text-muted">26th of October 2015</span>

 * Switch from libnih and dbus to glib and GDbus.  Since these are
   thread-safe, enable threading by default.
 * Support newer systemd which places itself into init.scope.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).

## LXCFS 0.10 release announcement
<span class="text-muted">3rd of September 2015</span>
Bugfix release.

 * Detect libnih threading support and use when available.
 * Fix threading issues related to DBus.
 * Handle missing memory cgroup.
 * Turn off threading globally because of problems with libdbus.
 * Tweak lxcfs mounts to better accommodate systemd.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).

## LXCFS 0.9 release announcement
<span class="text-muted">3rd of June 2015</span>
Bugfix release.

 * Fixes from Michael McCracken to fix lxcfs crashes

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).

## LXCFS 0.8 release announcement
<span class="text-muted">7th of May 2015</span>

 * Use direct io
 * Cache file and dir open work and re-use at read/write
 * Force the fuse options we need (especially threading)
 * Fix some errors in the manpage
 * Fix handling of cpusets
 * Some fixes for the lxc hook

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).

## LXCFS 0.7 release announcement
<span class="text-muted">3rd of April 2015</span>
Bugfix release.

 * Support for /proc/diskstats.
 * Fixes a few bugs that were causing hangs.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).


## LXCFS 0.6 release announcement
<span class="text-muted">16th of February 2015</span>
Bugfix release.

 * Fixes some memory and fd leaks.
 * Fixes cpu-average in /proc/stat.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).


## LXCFS 0.5 release announcement
<span class="text-muted">28th of January 2015</span>
Bugfix release.

This tweaks configure.ac to detect cgmanager version and tweak the LXC hook.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).


## LXCFS 0.4 release announcement
<span class="text-muted">23rd of January 2015</span>
Critical bug/security fix update for LXCFS.

Prior versions of LXCFS would replace the host's /proc with the container's
when a read to /proc/uptime was done on a system with / mounted rshared (default on systemd).

This release includes ONLY this bugfix and should be immediately deployed by anyone currently using lxcfs.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).


## LXCFS 0.3 release announcement
<span class="text-muted">21st of January 2015</span>
This release is identical to 0.2 except for a fixed installation path of the LXC configuration file.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).


## LXCFS 0.2 release announcement
<span class="text-muted">20th of January 2015</span>
Packager-friendly release of LXCFS 0.2.

This release now installs /usr/share/lxcfs/lxc.mount.hook and /usr/share/lxc/common.conf.d/00-lxcfs.conf
which when combined with LXC 1.1 will automatically enable lxcfs for all containers.

Additionally this release also includes some fixes to the testsuite.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).


## LXCFS 0.1 release announcement
<span class="text-muted">9th of January 2015</span>
This is the initial LXCFS release.

It offers a basic cgroupfs-like interface which writes through CGManager as well as
cgroup-ified versions of the cpuinfo, meminfo, stat and uptime proc files.


Note that as the first release of LXCFS, things can still be very rough and we would advice
against using this in production.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).
