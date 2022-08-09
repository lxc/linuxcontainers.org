# ソースコード <!-- Source code -->

<!--
The current development version of LXD can be cloned from GitHub with:
-->
LXD の現時点の開発バージョンは GitHub からクローンできます:

    git clone git://github.com/lxc/lxd

<!--
Contributions sent upstream for review must be based on the current git tree and not on stable releases, unless the bug only affects a stable release.
-->
レビューのためにパッチを送る場合は、バグが stable リリースにのみ影響する場合を除いて、stable リリースでなく現時点の開発バージョンのツリーを元にしてください。

# パッチの提案プロセス <!-- Patch submission process -->
<!--
Contributions to LXD must be submitted as GitHub pull-requests and we require them to be signed-off.
-->
LXD への貢献は GitHub のプルリクエストとして提出しなければいけません。そして、Signed-off-by による署名 (サインオフ) が必要です。

<!--
More details on contribution guidelines can be found [here](https://linuxcontainers.org/lxd/docs/latest/contributing).
-->
貢献に関するガイドラインの詳細は [こちら](https://lxd-ja.readthedocs.io/ja/latest/contributing/) （[原文](https://linuxcontainers.org/lxd/docs/latest/contributing)）にあります。

# 安定版 (stable) リリースへのバックポート <!-- Stable release backports -->

<!--
In general, all bugfixes will be picked up for the stable release, this however tends to happen in batches every couple of months or so. If we missed a given patch, please file a bug so we can look into it.
-->
一般的には、すべてのバグ修正が安定版リリースに対して適用されます。しかし、この適用は 2〜3 ヶ月程度おきになりがちです。もし、パッチを見逃しているような場合は、調査ができるようにバグ報告をしてください。

<!--
Note that only bugfixes are backported to stable releases.
-->
バグ修正は安定版リリースのみにバックポートされることにご注意ください。

