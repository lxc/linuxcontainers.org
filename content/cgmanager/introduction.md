<h2>What's CGManager?</h2>

<p>CGManager is a central privileged daemon that manages all
   your cgroups for you through a simple DBus API. It's designed
   to work with nested LXC containers as well as accepting unprivileged
   requests including resolving user namespaces UIDs/GIDs.
</p>

<p>It's made of two daemons:</p>
<h3>cgmanager</h3>
<p>This daemon runs on the host, mounts cgroupfs into a separate
   mount namespace (so it's invisible from the host), binds
   /sys/fs/cgroup/cgmanager/sock for incoming DBus queries and
   generally handles all clients running directly on the host.</p>

<p>cgmanager accepts both authentication requests using DBus +
   SCM credentials used for translation of uid, gid and pid across
   namespaces or using simple "unauthenticated" (just the
   initial ucred) DBus for queries coming from the host level.</p>
<hr/>

<h3>cgproxy</h3>
<p>You may see this daemon run in two cases. On the host if your
   kernel is older than 3.8 (doesn't have pidns attach support) or in
   containers (where only cgproxy runs).</p>
<p>cgproxy doesn't itself do any cgroup configuration change but
   instead as it names indicates, proxies requests to the main
   cgmanager process. This is necessary so a process may talk to
   /sys/fs/cgroup/cgmanager/sock using straight DBus (for
   example using dbus-send). cgproxy will then catch the ucred
   from that query and do an authenticated SCM query to the real
   cgmanager socket, passing the arguments through ucred structs
   so that they get properly translated into something cgmanager
   in the host namespace can understand.</p>
<hr/>

<h2>Communication protocol</h2>
<p>As mentioned above, cgmanager and cgproxy use DBus. It is
   recommended that external clients (so not cgproxy itself) use the
   standard DBus API and do not attempt to implement the SCM
   creds protocol as it's unnecessary and easy to get wrong.
   Instead, simply assume that talking to
   /sys/fs/cgroup/cgmanager/sock will always do the right thing.</p>
<p>The cgmanager API is only available on that separate DBus
   socket, cgmanager itself doesn't attach to the system bus and so a
   running dbus daemon isn't a requirement of cgmanager/cgproxy.</p>

<h3>API</h3>
<p>The current API is made of the following methods:</p>

<h4>Ping (int junk) -> None</h4>
<p>Ping is just used to test that the manager is alive and well,
   the value of the integer is ignored.</p>

<h4>GetPidCgroup (string controller, int pid) -> string cgroup</h4>
<p>Takes a controller and PID and returns the cgroup path.</p>

<h4>Create (string controller, string cgroup) -> int existed</h4>
<p>Creates a new cgroup path in the provided controller, returns
   1 if the path already existed, 0 if it was created.</p>

<h4>Chown (string controller, string cgroup, int uid, int gid) -> None</h4>
<p>Chown the provided controller/cgroup path to the provied uid
   and gid, this will chown the directory as well as the
   cgroup.procs and tasks files.</p>

<h4>Chmod (string controller, string cgroup, string file, int mode) -> None</h4>
<p>Chmod the provided controller/cgroup/file path to the
   provided mode.</p>

<h4>MovePid (string controller, string cgroup, int pid) -> None</h4>
<p>Moves the provided PID into the provided controller/cgroup.</p>

<h4>MovePidAbs (string controller, string cgroup, int pid) -> None</h4>
<p>Similar to MovePid but takes an absolute cgroup path rather
   than one relative to the caller (or proxy). This call is
   restricted to root as it lets you escape your current cgroup
   restrictions.</p>

<h4>GetValue (string controller, string cgroup, string key) -> string value</h4>
<p>Queries the value of the given key in the given
   controller/cgroup. The value is always returned as a string.</p>

<h4>SetValue (string controller, string cgroup, string key, string value) -> None</h4>
<p>Sets the value of the given key to that provided.</p>

<h4>Remove (string controller, string cgroup, int recursive) -> int existed</h4>
<p>Removes the provided cgroup, if recursive is set to 1, any
   sub-cgroup will also be removed. The return value indicates
   whether the cgroup existed.</p>

<h4>GetTasks (string controller, string cgroup) -> array of int</h4>
<p>Returns an array of int representing all the PIDs in the
   provided cgroup path.</p>

<h4>ListChildren (string controller, string cgroup) -> array of string</h4>
<p>Returns an array of string representing all the children
   (sub-cgroup) of the provided cgroup path.</p>

<h4>RemoveOnEmpty (string controller, string cgroup) -> None</h4>
<p>Marks the cgroup as removable when empty. Once the last task
   exists the cgroup, cgmanager will automatically remove it.</p>

<h2>Usage</h2>

<p>In Ubuntu, installing cgmanager and the cgm program can be
   done with:</p>
<pre>sudo apt-get install cgmanager cgmanager-utils</pre>

<p>If logind has not placed you into your own cgroup, you can
   then do so using:</p>
<pre>sudo cgm create all me
sudo cgm chown all me $(id -u) $(id -g)
sudo movepid all me $$</pre>


<p>To use cgmanager in containers, you need to tell lxc to bind
   mount the cgmanager socket into the container by adding the
   following line into the container configuration file (e.g.
   /var/lib/lxc/container/config).</p>
<pre>lxc.mount.auto = cgroup</pre>

<p>If you are running an older Ubuntu release, you can get
   cgmanager from the
   <a href="https://launchpad.net/~ubuntu-lxc/+archive/daily">
    ubuntu-lxc/daily PPA
   </a>.
</p>

<p>If you are running another distribution, you can install it
   by hand using:</p>
<pre>git clone git://github.com/cgmanager/cgmanager
sh bootstrap.sh
./configure --prefix=/
make
sudo make install
sudo /sbin/cgmanager --debug -m name=systemd</pre>
