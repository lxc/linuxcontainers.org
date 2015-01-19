# LXCFS について <!-- What's LXFS? -->

<!--
LXCFS is a simple userspace filesystem designed to workaround some current limitations of the Linux kernel.
-->
LXCFS は、現在の Linux カーネルの制限のいくつかを回避するために設計された、シンプルなユーザスペースのファイルシステムです。

<!--
Specifically, it's providing two main things
-->
具体的には以下の 2 つを提供します。

 * CGManager を使って動作する、コンテナ向けの cgroupfs のようなツリー <!-- A cgroupfs-like tree which is container aware and works using CGManager. -->
 * /proc のファイルに重ねてバインドマウントできる、Cgroup を元にした値を提供するファイル群 <!-- A set of files which can be bind-mounted over their /proc originals to provide CGroup-aware values. -->

<!--
The code is pretty simple, written in C using libnih and the CGManager API and the resulting filesystem  
can be used on any system that supports FUSE and CGManager.
-->
コードはとてもシンプルで、libnih と CGManager API を使って C 言語で書かれており、提供されるファイルシステムは FUSE と CGManager をサポートするシステムで使えます。

<!--
The main driver for this work was the need to run systemd based containers as a regular unprivileged user  
while still allowing systemd inside the container to interact with cgroups.
-->
この動作を行うメインのドライバーは、コンテナ内の systemd が cgroup を扱いながら、通常の非特権ユーザが systemd ベースのコンテナを実行するのに必要でした。

# ライセンス <!-- Licensing -->

<!--
LXCFS is free software and is developed under the Apache 2 license.
-->
LXCFS はフリーソフトウェアで、Apache 2 ライセンスのもとで開発されています。
