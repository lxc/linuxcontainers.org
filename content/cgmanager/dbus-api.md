# Current API
The current API is made of the following methods:

### Ping (int junk) -> None
Ping is just used to test that the manager is alive and well, the value of the integer is ignored.

### GetPidCgroup (string controller, int pid) -> string cgroup
Takes a controller and PID and returns the cgroup path.

### GetPidCgroupAbs (string controller, int pid) -> string cgroup
Takes a controller and PID and returns the absolute cgroup path.

### Create (string controller, string cgroup) -> int existed
Creates a new cgroup path in the provided controller, returns 1
if the path already existed, 0 if it was created.

### Chown (string controller, string cgroup, int uid, int gid) -> None
Chown the provided controller/cgroup path to the provied uid and gid,
this will chown the directory as well as the cgroup.procs and tasks files.

### Chmod (string controller, string cgroup, string file, int mode) -> None
Chmod the provided controller/cgroup/file path to the provided mode.

### MovePid (string controller, string cgroup, int pid) -> None
Moves the provided PID into the provided controller/cgroup.

### MovePidAbs (string controller, string cgroup, int pid) -> None
Similar to MovePid but takes an absolute cgroup path rather than one relative
to the caller (or proxy). This call is restricted to root as it lets you escape
your current cgroup restrictions.

### GetValue (string controller, string cgroup, string key) -> string value
Queries the value of the given key in the given controller/cgroup.
The value is always returned as a string.

### SetValue (string controller, string cgroup, string key, string value) -> None
Sets the value of the given key to that provided.

### Remove (string controller, string cgroup, int recursive) -> int existed
Removes the provided cgroup, if recursive is set to 1, any sub-cgroup will also be removed.
The return value indicates whether the cgroup existed.

### GetTasks (string controller, string cgroup) -> array of int
Returns an array of int representing all the PIDs in the provided cgroup path.

### GetTasksRecursive (string controller, string cgroup) -> array of int
Returns an array of int representing all the PIDs in the provided cgroup path and its sub-directories.

### ListChildren (string controller, string cgroup) -> array of string
Returns an array of string representing all the children (sub-cgroup) of the provided cgroup path.

### RemoveOnEmpty (string controller, string cgroup) -> None
Marks the cgroup as removable when empty.
Once the last task exists the cgroup, cgmanager will automatically remove it.

### Prune (string controller, string cgroup) -> None
Calls RemoveOnEmpty on the cgroups path and any sub-directory (recursively).

Tasks will not be killed but once they all exit either naturally or
because something killed them, the cgroup will disappear.

### ListControllers () -> array of string
Returns an array of string representing the supported controllers.

### ListKeys (string controller, string cgroup) -> array of (string, uint, uint, uint)
Returns an array of (string name, uint uid, uint gid, uint mode) representing the available cgroup keys.

### api\_version (property) -> integer
The current internal API version, used for feature checks.

# API definition document
The [org.linuxcontainers.cgmanager.xml file](https://github.com/lxc/cgmanager/blob/master/org.linuxcontainers.cgmanager.xml)
in the cgmanager cgmanager tree is used to generate the client library and is the authoritative API definition.
