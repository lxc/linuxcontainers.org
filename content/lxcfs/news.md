![Download icon](/static/img/containers.png)
# News

## LXCFS 2.0.0.rc4 release announcement <span class="text-muted">11th of March 2016</span>

 * This is the fourth release candidate for 2.0.0
 * Fix from stgraber to the mount hook and upstart job.

## LXCFS 2.0.0.rc3 release announcement <span class="text-muted">7th of March 2016</span>

 * This is the third release candidate for 2.0.0
 * Fixes in this release:
     * Not mounting lxcfs procfiles when /sys/fs/cgroup is not mounted in container.
     * Occasional corrupted output in free -m.

## LXCFS 2.0.0.rc2 release announcement <span class="text-muted">24th of February 2016</span>

 * This is the second release candidate for 2.0.0
 * This adds the previously missing config/ directory to the release tarball.

## LXCFS 2.0.0.rc1 release announcement <span class="text-muted">24th of February 2016</span>

 * This is the first release candidate for 2.0.0
 * This adds sysvinit, upstart and systemd jobs.

## LXCFS 2.0.0.beta2 release announcement <span class="text-muted">19th of February 2016</span>

 * Fix a bug causing PAM module to hang if there are unmounted controllers
 * Avoid a rare but not impossible bug due to a faulty glibc assert when
   forking a pid after setns.

## LXCFS 2.0.0.beta1 release announcement <span class="text-muted">9th of February 2016</span>

 * Add support for /proc/swaps
 * Create or chown systemd cgroups if asked
 * Move liblxcfs.so to /usr/lib/lxcfs.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads).

## LXCFS 0.18 release announcement <span class="text-muted">4th of February 2016</span>

 * Support restarting lxcfs in most cases, by moving most functionality
   into a library which is reloaded on SIGUSR1

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads).

## LXCFS 0.17 release announcement <span class="text-muted">26th of January 2016</span>

 * Add a PAM module
 * Allow users to see all cgroup directories under their init's.
 * Use a task's init process' cgroup usage+limits to virtualize procfiles,
   rather than the task's own limits.
 * Improve swap accounting

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads).

## LXCFS 0.16 release announcement <span class="text-muted">8th of January 2016</span>
Bugfix release.

 * This provides a fix for the memory allocation bugs in the last two releases.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads).

## LXCFS 0.15 release announcement <span class="text-muted">7th of January 2016</span>
Bugfix release.

 * Fixing a critical memory allocation bug which makes 0.14 unusable.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads).

## LXCFS 0.14 release announcement <span class="text-muted">7th of January 2016</span>

 * Listen to hint from lxc regarding cgroup namespaces.
 * Several important bugfixes in code introduced during the switch from libnih.
 * Fix to swap usage reporting.
 * Fix overly strict visibility checks for tasks in root cgroup.
 * Many fixes to the tests.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads).

## LXCFS 0.13 release announcement <span class="text-muted">25th of November 2015</span>
Bugfix release.

 * This fixes several bugs which prevented newer systemd-based containers from
   starting, and some more general bugs.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).

## LXCFS 0.12 release announcement <span class="text-muted">17th of November 2015</span>
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

## LXCFS 0.11 release announcement <span class="text-muted">26th of October 2015</span>

 * Switch from libnih and dbus to glib and GDbus.  Since these are
   thread-safe, enable threading by default.
 * Support newer systemd which places itself into init.scope.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).

## LXCFS 0.10 release announcement <span class="text-muted">3rd of September 2015</span>
Bugfix release.

 * Detect libnih threading support and use when available.
 * Fix threading issues related to DBus.
 * Handle missing memory cgroup.
 * Turn off threading globally because of problems with libdbus.
 * Tweak lxcfs mounts to better accommodate systemd.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).

## LXCFS 0.9 release announcement <span class="text-muted">3rd of June 2015</span>
Bugfix release.

 * Fixes from Michael McCracken to fix lxcfs crashes

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).

## LXCFS 0.8 release announcement <span class="text-muted">7th of May 2015</span>

 * Use direct io
 * Cache file and dir open work and re-use at read/write
 * Force the fuse options we need (especially threading)
 * Fix some errors in the manpage
 * Fix handling of cpusets
 * Some fixes for the lxc hook

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).

## LXCFS 0.7 release announcement <span class="text-muted">3rd of April 2015</span>
Bugfix release.

 * Support for /proc/diskstats.
 * Fixes a few bugs that were causing hangs.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).


## LXCFS 0.6 release announcement <span class="text-muted">16th of February 2015</span>
Bugfix release.

 * Fixes some memory and fd leaks.
 * Fixes cpu-average in /proc/stat.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).


## LXCFS 0.5 release announcement <span class="text-muted">28th of January 2015</span>
Bugfix release.

This tweaks configure.ac to detect cgmanager version and tweak the LXC hook.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).


## LXCFS 0.4 release announcement <span class="text-muted">23rd of January 2015</span>
Critical bug/security fix update for LXCFS.

Prior versions of LXCFS would replace the host's /proc with the container's  
when a read to /proc/uptime was done on a system with / mounted rshared (default on systemd).

This release includes ONLY this bugfix and should be immediately deployed by anyone currently using lxcfs.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).


## LXCFS 0.3 release announcement <span class="text-muted">21st of January 2015</span>
This release is identical to 0.2 except for a fixed installation path of the LXC configuration file.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).


## LXCFS 0.2 release announcement <span class="text-muted">20th of January 2015</span>
Packager-friendly release of LXCFS 0.2.

This release now installs /usr/share/lxcfs/lxc.mount.hook and /usr/share/lxc/common.conf.d/00-lxcfs.conf  
which when combined with LXC 1.1 will automatically enable lxcfs for all containers.

Additionally this release also includes some fixes to the testsuite.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).


## LXCFS 0.1 release announcement <span class="text-muted">9th of January 2015</span>
This is the initial LXCFS release.

It offers a basic cgroupfs-like interface which writes through CGManager as well as  
cgroup-ified versions of the cpuinfo, meminfo, stat and uptime proc files.


Note that as the first release of LXCFS, things can still be very rough and we would advice  
against using this in production.

### Downloads
The release tarballs can be found on our [download page](/lxcfs/downloads/).
