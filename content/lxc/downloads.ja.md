
# ディストリビューションでのインストール <!-- Distribution packages -->

<!--
LXC is included in most Linux distributions. In most cases installing it is as simple as selecting it in your package manager.
-->
LXC は大部分の Linux ディストリビューションに含まれています。
インストールする場合は、ディストリビューションのパッケージマネージャで LXC を選択するのが簡単でしょう。

<!--
Distributions also often provide backports of newer versions of LXC for their stable releases. You may want to look for that, especially if your distribution doesn't include LXC 5.0 or 4.0.
-->
ディストリビューションでは、ディストリビューションの stable リリースに対する LXC のより新しいバージョンのバックポートが提供されるケースも多いでしょう。
LXC 5.0 や 4.0 がディストリビューションの stable リリースに含まれない場合は特に、それを使うことも選択肢の一つでしょう。

<!--
For production environment, try to stick to LXC 5.0.x or 4.0.x as these are the long term, stable releases which we will support until June 2027 (5.0.x) and June 2025 (4.0.x) respectively.
-->
Production 環境では、長期サポート版の stable リリースである LXC 5.0.x もしくは 4.0.x を使い続けることをお勧めします。それぞれ 2027 年 6 月（5.0.x）、2025 年 6 月（4.0.x）までサポートします。

# 現時点の開発バージョン <!-- Current development version -->

<!--
LXC has two active git branches:
-->
LXC にはアクティブな git ブランチが 3 つ存在します:

 * **main**: 現在の開発ブランチ <!-- Current development branch -->
 * **stable-6.0**: LXC 6.0.x 向けの Stable 更新用ブランチ <!-- Stable update branch for LXC 6.0.x -->
 * **stable-5.0**: LXC 5.0.x 向けの Stable 更新用ブランチ <!-- Stable update branch for LXC 5.0.x -->
 * **stable-4.0**: LXC 4.0.x 向けの Stable 更新用ブランチ <!-- Stable update branch for LXC 4.0.x -->

<!--
You can clone those directly with:
-->
以下から直接 clone できます:

    git clone git://github.com/lxc/lxc -b <branch name>

# リリース版 tarball <!-- Release tarballs -->

<!--
Stable release tarballs are available for download below. All the tarball are GPG signed by one of the maintainers.
-->
Stable リリース版の tarball は以下から取得できます。
tarball はすべて全てメンテナの GPG による署名が行われています。
