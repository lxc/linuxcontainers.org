[TOC]

# インストール <!-- Installation -->

## リリースを選択する <!-- Choose your release -->
<!--
LXD upstream maintains three release branches in parallel:
-->
LXD では 3 つのリリースブランチが並行してメンテナンスされています:

 * 長期サポート（LTS）リリース: <!-- Long term support (LTS) releases: -->LXD 5.0.x or LXD 4.0.x
 * フィーチャーリリース: <!-- Feature releases: -->LXD 5.x

<!--
LTS releases are recommended for production environments as they will benefit from regular bugfix and security updates but will not see new features added or any kind of behavioral change.
-->
LTS リリースは本番環境での使用におすすめです。定期的なバグフィックスとセキュリティアップデートが行われますが、新しい機能の追加や動作が変わるような変更は行われないためです。

<!--
To get all the latest features and monthly updates to LXD, use the feature release branch instead.
-->
LXD の新機能のすべてと月次の更新を取得したい場合は、フィーチャーリリースをお使いください。

## パッケージのインストール <!-- Installing a package -->

### Linux

<!--
The easiest way to install LXD on Linux is to install the [snap package](#snap-package), which is available for different Linux distributions.
-->
Linux で LXD をインストールするもっとも簡単な方法は [snap パッケージ](#snap-package) をインストールすることです。snap パッケージは色々な Linux ディストリビューションで利用できます。

<!--
If this option does not work for you, see the [other installation options](#other-installation-options).
-->
他の方法が良い場合は、[他のインストール方法](#other-installation-options) をご覧ください。

#### <a name="snap-package"></a>Snap パッケージ <!-- Snap package -->
<!--
LXD upstream publishes and tests [snap packages](https://snapcraft.io/lxd) that work for a number of Linux distributions, for example, Ubuntu, Arch Linux, Debian, Fedora and OpenSUSE.
-->
LXD 開発元では、多くの Linux ディストリビューションで動作する [snap パッケージ](https://snapcraft.io/lxd)を作成し、テストしています。例えば、Ubuntu、Arch Linux、Debian、Fedora、OpenSUSE などで動作します。

<!--
Complete the following steps to install the snap:
-->
以下の手順で snap をインストールします:

1. [provided distributions](https://jenkins.linuxcontainers.org/job/lxd-test-snap-latest-stable/) をチェックして、お使いの Linux ディストリビューションで snap が利用できるかを見ます。<!-- Check the [provided distributions](https://jenkins.linuxcontainers.org/job/lxd-test-snap-latest-stable/) to see if a snap is available for your Linux distribution. -->
   もし利用できない場合は、[他のインストール方法](#other-installation-options) でインストールしてください<!-- If it is not, use one of the [other installation options](#other-installation-options). -->

2. `snapd` をインストールします。方法は snapcraft.io の [installation instructions](https://snapcraft.io/docs/core/install) をご覧ください<!-- Install `snapd`. See the [installation instructions](https://snapcraft.io/docs/core/install) on snapcraft.io. -->

3. snap パッケージをインストールします <!-- Install the snap package. -->
   フィーチャーリリースの場合は、次のように実行します: <!-- For the latest feature release, use: -->

        sudo snap install lxd
   LXD 5.0 LTS リリースの場合は、次のように実行します:<!-- For the LXD 5.0 LTS release, use: -->

        sudo snap install lxd --channel=5.0/stable

<!--
For more information about LXD snap packages (regarding more versions, update management etc.), see [Managing the LXD snap](https://discuss.linuxcontainers.org/t/managing-the-lxd-snap/8178).
-->
LXD の snap パッケージに関する詳細な情報（その他のバージョン、アップデート管理など）については、フォーラムの [Managing the LXD snap](https://discuss.linuxcontainers.org/t/managing-the-lxd-snap/8178) をご覧ください。

!!! note "注意"
	<!--
    On Ubuntu 18.04, if you previously had the LXD deb package installed, you can migrate all your existing data over with:
	-->
    以前、LXD の deb パッケージをインストールしていた場合は、次のような方法で既存データをすべて移行できます:

        sudo lxd.migrate

#### <a name="other-installation-options"></a>他のインストール方法 <!-- Other installation options -->

<!--
Some Linux distributions provide installation options other than the snap package.
-->
Linux ディストリビューションによっては、snap パッケージ以外のインストール方法を提供している場合があります。

=== "Alpine Linux"
    <!--
    To install the feature branch of LXD on Alpine Linux, run:
    -->
    Alpine Linux で LXD のフィーチャーブランチをインストールするには、以下を実行します:

        apk add lxd

=== "Arch Linux"
    <!--
    To install the feature branch of LXD on Arch Linux, run:
    -->
    Arch Linux で、フィーチャーブランチの LXD をインストールするには、次のように実行します:

        pacman -S lxd

=== "Fedora"
    <!--
    Fedora RPM packages for LXC/LXD are available in the [COPR repository](https://copr.fedorainfracloud.org/coprs/ganto/lxc4/).
    -->
    Fedora の LXC/LXD の RPM パッケージは [COPR リポジトリ](https://copr.fedorainfracloud.org/coprs/ganto/lxc4/) から提供されています。

    <!--
    To install the LXD package for the feature branch, run:
    -->
    フィーチャーブランチの LXD パッケージをインストールするには、次のように実行します:

        dnf copr enable ganto/lxc4
        dnf install lxd

    <!--
    See the [Installation Guide](https://github.com/ganto/copr-lxc4/wiki) for more detailed installation instructions.
    -->
    さらに詳しいインストール手順は [Installation Guide](https://github.com/ganto/copr-lxc4/wiki) をご覧ください。

=== "Gentoo"
    <!--
    To install the feature branch of LXD on Gentoo, run:
    -->
    Gentoo で LXD のフィーチャーブランチをインストールするには、次のように実行します:

        emerge --ask lxd

### 他のオペレーティングシステム <!-- Other operating systems -->

!!! note "注意"
	<!--
	The builds for other operating systems include only the client, not the server.
	-->
	他のオペレーティングシステムのビルドはクライアントのみで、サーバーはありません。

=== "macOS"
    <!--
    LXD upstream publishes builds of the LXD client for macOS through [Homebrew](https://brew.sh/).
    -->
    LXD の開発元では macOS 用の LXD クライアントのビルドを [Homebrew](https://brew.sh/) を通して提供しています。

    <!--
    To install the feature branch of LXD, run:
    -->
    LXD のフィーチャーブランチをインストールするには、次のように実行します:

        brew install lxc

=== "Windows"
    <!--
    The LXD client on Windows is provided as a [Chocolatey](https://community.chocolatey.org/packages/lxc) package. To install it:
    -->
    Windows の LXD クライアントは [Chocolatey](https://community.chocolatey.org/packages/lxc) パッケージとして提供しています。インストールするには:

    1. [installation instructions](https://docs.chocolatey.org/en-us/choco/setup#installing-chocolatey) に従って Chocolatey をインストールします <!-- Install Chocolatey by following the [installation instructions](https://docs.chocolatey.org/en-us/choco/setup#installing-chocolatey). -->
    2. LXD クライアントをインストールします: <!-- Install the LXD client: -->

            choco install lxc

<!--
You can also find native builds of the LXD client on [GitHub](https://github.com/lxc/lxd/actions). To download a specific build:
-->
[GitHub](https://github.com/lxc/lxd/actions) 上には、ネイティブビルドの LXD クライアントも存在します。特定のビルドをダウンロードするには:

1. GitHub アカウントにログイン済みか確認します <!-- Make sure that you are logged into your GitHub account. -->
2. 目的のブランチやタグでフィルターします（例えば、最新リリースや`master`）<!-- Filter for the branch or tag that you are interested in (for example, the latest release tag or `master`). -->
3. 最新のビルドを選択し、適切なバイナリをダウンロードします <!-- Select the latest build and download the suitable artifact. -->

## ソースからのインストール <!-- Installing from source -->
<!--
To build and install LXD from source, follow the instructions in [Installing LXD from source](/lxd/docs/master/installing#installing-lxd-from-source).
-->
ソースから LXD をビルドしてインストールするには、公式ドキュメント[Installing LXD from source](/lxd/docs/master/installing#installing-lxd-from-source)の手順にしたがってください。

# 初期設定 <!-- Initial configuration -->

<!--
Before you can create a LXD instance (a container or a virtual machine), you must configure LXD.
-->
LXD インスタンス（コンテナまたは仮想マシン）を作成する前に、LXD を設定する必要があります。

<!--
See [How to initialize LXD](/lxd/docs/latest/howto/initialize/) for instructions.
-->
設定方法については、[LXDを初期化するには](https://lxd-ja.readthedocs.io/ja/latest/howto/initialize/)（[英語版](/lxd/docs/latest/howto/initialize/)）をご覧ください。

# セキュリティとアクセス制御 <!-- Security and access control -->
<!--
Access control for LXD is based on group membership. The root user and all members of the `lxd` group can interact with the local daemon.
-->
LXD のアクセスコントロールは、グループメンバーシップに基づいて行います。root ユーザおよび `lxd` グループのメンバーはローカルデーモンと対話できます。

<!--
If the `lxd` group is missing on your system, create it and restart the LXD daemon. You can then add trusted users to the group. Anyone added to this group will have full control over LXD.
-->
`lxd` グループがシステムにない場合は、作成した後、LXD デーモンを再起動します。そして、信用するユーザを `lxd` グループに追加します。このグループに属するユーザ全員が、LXD を完全に制御できます。

<!--
Because group membership is normally only applied at login, you might need to either re-open your user session or use the `newgrp lxd` command in the shell you're using to talk to LXD.
-->
グループメンバーシップはログイン時にのみ追加されるので、追加後にあなたのユーザセッションを閉じて再度開くか、LXD と通信したいシェル上で `newgrp lxd` コマンドを実行する必要があります。

!!! warning "警告"
	<!--
	Anyone with access to the LXD socket can fully control LXD, which includes the ability to attach host devices and file systems. Therefore, you should only give access to users who would be trusted with root access to the host.
	
	You can learn more about LXD security [here](/lxd/docs/latest/security).
	-->
	LXD ソケットにアクセスできる人であれば誰でも LXD を完全にコントロールできます。これには、ホストのデバイスやファイルシステムにアタッチする権限も含まれます。したがって、ホストへの root アクセスで信頼できるユーザにのみ与えられるべきです。
	
	LXD のセキュリティについては、[こちら](https://lxd-ja.readthedocs.io/ja/latest/security/)（[英語版](/lxd/docs/latest/security)）でさらに学べます。

# ファイアウォールの問題 <!-- Firewall issues -->

<!--
You might see issues with your firewall blocking network access for your instances, or connectivity issues because you run LXD and Docker on the same host.
-->
ファイアウォールでインスタンスに対するアクセスがブロックされたり、LXD と Docker を同じホスト上で動かしていることが原因で接続性の問題が発生したりすることがあります。

<!--
See [How to configure your firewall](/lxd/docs/latest/howto/network_bridge_firewalld/) for information on how to resolve such issues.
-->
このような問題を解決する方法についての情報は、[ファイアウォールを設定するには](https://lxd-ja.readthedocs.io/ja/latest/howto/network_bridge_firewalld/)をご覧ください。

# インスタンス <!-- Instances -->

<!--
See [Instances](/lxd/docs/latest/instances).
-->
[インスタンス](https://lxd-ja.readthedocs.io/ja/latest/instances/)（[英語版](/lxd/docs/latest/instances)）をご覧ください。

# <a name="images"></a>イメージ <!-- Images -->

<!--
See [Images](/lxd/docs/latest/images/).
-->
[イメージ](https://lxd-ja.readthedocs.io/ja/latest/images/)（[英語版](https://linuxcontainers.org/lxd/docs/latest/images/)）をご覧ください。

# さらなる情報とリンク <!-- Further information & links -->

<!--
You find more information on the following pages:
-->
さらに詳細な情報を見るには次のページをご覧ください:

- [Advanced Guide](/lxd/advanced-guide)
- [LXD ドキュメント](https://lxd-ja.readthedocs.io/ja/latest/) （英語版: [LXD documentation](/lxd/docs/master/index)）
    - [セキュリティ](https://lxd-ja.readthedocs.io/ja/latest/security/) （英語版: [Security](/lxd/docs/master/security)）
    - [FAQ](https://lxd-ja.readthedocs.io/ja/latest/faq/) （英語版: [FAQ](/lxd/docs/master/faq)）
- [Forum](https://discuss.linuxcontainers.org/)
    - [Tutorials Section](https://discuss.linuxcontainers.org/c/tutorials)
