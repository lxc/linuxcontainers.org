# LXCFS について <!-- What's LXCFS? -->

<!--
LXCFS is a simple userspace filesystem designed to workaround some current limitations of the Linux kernel.
-->
LXCFS は、現在の Linux カーネルの制限のいくつかを回避するために設計された、シンプルなユーザスペースのファイルシステムです。

<!--
Specifically, it's providing two main things
-->
具体的には以下の 2 つを提供します。

 * /proc のファイルに重ねてバインドマウントできる、Cgroup を元にした値を提供するファイル群 <!-- A set of files which can be bind-mounted over their /proc originals to provide CGroup-aware values. -->
 * コンテナ向けの cgroupfs のようなツリー <!-- A cgroupfs-like tree which is container aware. -->

<!--
The code is pretty simple, written in C using libfuse.
-->
コードはとてもシンプルで、libfuse を使って C 言語で書かれています。

<!--
The main driver for this work was the need to run systemd based containers as a regular unprivileged user while still allowing systemd inside the container to interact with cgroups.
-->
この動作を行うメインのドライバーは、コンテナ内の systemd が cgroup を扱いながら、通常の非特権ユーザが systemd ベースのコンテナを実行するのに必要でした。

<!--
Now with the introduction of the cgroup namespace in the Linux kernel, that part is no longer necessary on recent kernels and focus is now on making containers feel more like a real independent system through the proc masking feature.
-->
Linux カーネルへの cgroup namespace の導入により、この機能は新しいカーネルでは不要になりました。そして、proc をマスキングする機能により、コンテナを本当の独立したシステムを使っているように見せる機能にフォーカスを当てています。(訳注: vanilla kernel であれば 4.6 以上、Ubuntu であれば 4.4 以上のカーネルで cgroup namespace が使えます。)

# ライセンス <!-- Licensing -->

<!--
LXCFS is free software and is developed under the Apache 2 license.
-->
LXCFS はフリーソフトウェアで、Apache 2 ライセンスのもとで開発されています。
