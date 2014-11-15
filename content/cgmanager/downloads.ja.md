![Download icon](/static/img/download.png)
# ディストリビューションでのインストール

<!--
At this time, both Ubuntu and Debian provide cgmanager packages.  
On those, CGManager will typically come as a dependency of LXC or even be installed by default.  
If not, just install it using your package manager.
-->

現時点では、Ubuntu と Debian が cgmanager のパッケージを提供しています。
この 2 つでは、CGManager は一般的には LXC の依存パッケージとしてインストールされるか、デフォルトでインストールされるでしょう。

<!--
For Ubuntu users, the official LXC PPAs also contain up to date versions of CGManager:
-->
Ubuntu ユーザは、公式の LXC の PPA が CGManager のデイリーバージョンも提供しています:

 * [stable](https://launchpad.net/~ubuntu-lxc/+archive/stable): LXC の現在の stable リリース のバックポート
 * [daily-stable](https://launchpad.net/~ubuntu-lxc/+archive/daily-stable): LXC の stable-1.0 ブランチのデイリービルド
 * [daily](https://launchpad.net/~ubuntu-lxc/+archive/daily): LXC の master ブランチのデイリービルド

# 現時点の開発バージョン

<!--
You can clone cgmanager directly with:
-->
以下から直接 clone できます:

    git clone git://github.com/cgmanager/cgmanager

# リリース版 tarball

<!--
Stable release tarballs are available for download below.
-->
stable リリース版の tarball は以下から取得できます。
