# 2014-01-10
The cgmanager socket has been moved to /sys/fs/cgroup/manager/sock.

The proxy moves that to /sys/fs/cgroup/manager.lower/sock then offers its
own service over /sys/fs/cgroup/manager/sock. This allows a container to
to have /sys/fs/cgroup/manager bind-mounted instead of the socket
itself, allowing it to recover after the cgmanager on the host restarts.

# 2014-01-09
The scm handling has been reworked. Now all \*Scm dbus transactions
complete as soon as the server receives the unix fd. It then reads the
scm credentials (asynchronously) over the unix fd and sends the results
to the client over the same fd.
