# 2014-01-10
<!--
The cgmanager socket has been moved to /sys/fs/cgroup/manager/sock.
-->
cgmanager のソケットは /sys/fs/cgroup/manager/sock に移動しました。

<!--
The proxy moves that to /sys/fs/cgroup/manager.lower/sock then offers its
own service over /sys/fs/cgroup/manager/sock. This allows a container to
to have /sys/fs/cgroup/manager bind-mounted instead of the socket
itself, allowing it to recover after the cgmanager on the host restarts.
-->
プロキシのソケットが /sys/fs/cgroup/manager.lower/sock に移動するので、自身のサービスは /sys/fs/cgroup/manager/sock で提供します。
これにより、コンテナはソケットそのものをバインドマウントする代わりに /sys/fs/cgroup/manager をバインドマウントできるようになります。そして、ホスト上の cgmanager が再起動したあとの復帰が可能になります。

# 2014-01-09
<!--
The scm handling has been reworked. Now all \*Scm dbus transactions
complete as soon as the server receives the unix fd. It then reads the
scm credentials (asynchronously) over the unix fd and sends the results
to the client over the same fd.
-->
scm のハンドリングを作り直しました。これにより、全ての \*Scm dbus トランザクションは、サーバが Unix fd を受け取ったらすぐに完了します。そのあと、scm クレデンシャルを (非同期に) unix fd 経由で読み込み、結果をクライアントに対して同じ fd を通して送ります。
