[TOC]

# インストール <!-- Installation -->

## リリースを選択する <!-- Choose your release -->
<!--
LXD upstream maintains three release branches in parallel:
-->
LXD では 3 つのリリースブランチが並行してメンテナンスされています:

 * 長期サポート（LTS）リリース: <!-- Long term support (LTS) releases: -->LXD 4.0.x or LXD 3.0.x
 * フィーチャーリリース: <!-- Feature releases: -->LXD 4.x

<!--
LTS releases are recommended for production environments as they will benefit from regular bugfix
and security updates but will not see new features added or any kind of behavioral change.
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
   LXD 4.0 LTS リリースの場合は、次のように実行します:<!-- For the LXD 4.0 LTS release, use: -->

        sudo snap install lxd --channel=4.0/stable

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

!!! note "注意"
	<!--
	"Instances" means both containers and virtual machines.
	-->
	「インスタンス」はコンテナと仮想マシンの両方を指します。

<!--
Before you can create an instance, you need to configure LXD.
-->
インスタンスを作成する前に、LXD を設定する必要があります。

<!--
Run the following command to start the interactive configuration process:
-->
次のようにコマンドを実行して、対話型の設定を開始します:

    sudo lxd init

<!--
See [Interactive setup options](#interactive-setup-options) for an explanation of the different configuration options.
-->
各種設定オプションについては[対話型の設定オプション](#interactive-setup-options)をご覧ください。

<!--
To create a non-optimized minimal setup with default options, you can skip the configuration steps by adding the `--minimal` flag:
-->
デフォルトオプションを使った、最適化されていない最小セットアップを行うには、`--minimal` オプションを指定して対話的な設定プロセスをスキップできます:

    sudo lxd init --minimal

!!! note "注意"
    <!--
    Compared to the interactive configuration, the minimal setup will be slower and provide less functionality. Especially the `dir storage backend` (which is used by default) is slower and doesn't provide fast snapshots, fast copy/launch, quotas and optimized backups.
    -->
    対話型で行うセットアップに比べると、最小セットアップは動作が遅く、機能も少なくなります。特に（デフォルトで使う） `dir storage backend` は遅く、高速なスナップショット、高速なコピー・起動、クォータ、最適化されたバックアップが使えません。
    <!--
    If you want to use an optimized setup, go through the interactive configuration process instead.
	-->
	最適化された設定で使いたい場合、最小セットアップの代わりに対話型の設定プロセスを実行することをおすすめします。

## セキュリティとアクセス制御 <!-- Security and access control -->
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
	-->
	LXD ソケットにアクセスできる人であれば誰でも LXD を完全にコントロールできます。これには、ホストのデバイスやファイルシステムにアタッチする権限も含まれます。したがって、ホストへの root アクセスで信頼できるユーザにのみ与えられるべきです。

	<!--
    You can learn more about LXD security [here](/lxd/docs/master/security).
	-->
	さらに LXD のセキュリティについて学びたい場合は[ドキュメントのセキュリティのセクション（日本語版）](https://lxd-ja.readthedocs.io/ja/latest/security/) （または[英語版](/lxd/docs/master/security)）をご覧ください。

## <a name="interactive-setup-options"></a>対話型の設定オプション <!-- Interactive setup options -->

<!--
You can configure the following options during the initial configuration of LXD.
-->
LXD の初期設定のときは、次のオプションを設定できます。

<!--
`default=no` means the feature is disabled by default.
-->
`デフォルト=no`はデフォルトではその機能が無効化されていることを意味します。

<!--
| Feature  | Description | Basic configuration options | More information |
| --- | ------------- | --- | --- |
| Clustering | A cluster combines several LXD servers. They share the same distributed database and can be managed uniformly using the LXD client (lxc) or the REST API. | default=`no`; <br> If set to `yes`, you can either connect to an existing cluster or create a new one. | LXD documentation: <br> [Clustering](/lxd/docs/master/clustering) |
| MAAS server | MAAS is an open-source tool that lets you build a data center from bare-metal servers. | default=`no`; <br> If set to `yes`, you can connect to an existing MAAS server and specify the `name`, `URL` and `API key`. | - [maas.io](https://maas.io/) <br> - [MAAS - How to manage VM hosts](https://maas.io/docs/install-with-lxd) |
| Network bridge | Provides network access for the instances. | You can either use an existing bridge (or interface) or let LXD create a new bridge (recommended). <br> You can also create additional bridges and assign them to instances later. | LXD documentation: <br> - [Networks](/lxd/docs/master/networks) <br> - [Network interface](/lxd/docs/master/instances#type-nic) |
| Storage pools | Instances etc. are stored in storage pools. | For testing purposes, you can create a loop-backed storage pool. <br> But for production use you should use an empty partition (or full disk) instead of loop-backed storages (because loop-backed pools are slower and their size can't be reduced). <br> The recommended backends are `ZFS` and `btrfs`. <br> You can also create additional storage pools later. | LXD documentation: <br> - [Storage](/lxd/docs/master/storage) <br> - [Comparison of methods](/lxd/docs/master/storage#where-to-store-lxd-data) <br> - [Backend comparison chart](/lxd/docs/master/storage#feature-comparison) |
| Network access | Allows access to the server over network. |  default=`no`; <br> If set to `yes`, you can connect to the server over network. <br> You can set a `password` or accept the client certificate manually. | - |
| Automatic image update | You can download images from image servers. In this case, images can be updated automatically. | default=`yes`; <br> If set to `yes`, LXD will update the downloaded images regularly. | LXD documentation: <br> [Image handling](/lxd/docs/master/image-handling) |
| YAML lxd init preseed | Will display a summary of your chosen configuration options in the terminal. | default=`no` | - |
-->
| 機能 | 説明 | 基本的な設定 | 備考 |
| --- | --- | --- | --- |
| クラスタリング | クラスターは複数のLXDサーバーを組み合わせます。サーバーは同じ分散データーベースを共有し、LXDクライアント（lxc）やREST APIを使って一様に管理できます | デフォルト=`no`<br/>`yes`に設定すると、既存のクラスターに接続するか新しいクラスターを作るかのどちらかが選べます | LXDドキュメント:<br/> - [クラスタリング](https://lxd-ja.readthedocs.io/ja/latest/clustering/) |
| MAAS server | 「MAASはオープンソースのツールで、ベアメタルサーバーからデータセンターを作れます」 | デフォルト=`no`<br/>`yes`に設定すると、`name`、`URL`、`API key`を指定して既存のMAASサーバーに接続します | - [maas.io](https://maas.io/) <br> - [maas - install with lxd](https://maas.io/docs/install-with-lxd) |
| ネットワークブリッジ | インスタンスにネットワークアクセスを提供します | 既存のブリッジ（もしくはインターフェース）を使うことも、LXDに新しいブリッジを作らせる（推奨オプション）こともできます。追加でブリッジを作成して、あとでインスタンスに割り当てることもできます | LXDドキュメント:<br/>- [ネットワーク](https://lxd-ja.readthedocs.io/ja/latest/networks/)<br/> - [ネットワークインターフェース](https://lxd-ja.readthedocs.io/ja/latest/instances/#type-nic) |
| ストレージプール | インスタンスなどがストレージプールに保存されます | テスト用途であればloopbackストレージプールを作成してもよいでしょう。<br/>しかしプロダクション環境ではloopbackストレージではなく空のパーティション（もしくはディスク全体）の使用を推奨します（理由:loopbackプールは遅くてサイズを縮小できない）<br/>推奨のバックエンドはZFSとbtrfsです。あとから追加のストレージプールを作成することもできます | LXDドキュメント:<br/>- [ストレージ](https://lxd-ja.readthedocs.io/ja/latest/storage/)<br/> - [LXDのデータをどこに保存するか](https://lxd-ja.readthedocs.io/ja/latest/storage/#lxd)<br/> - [バックエンドの機能比較](https://lxd-ja.readthedocs.io/ja/latest/storage/#_9) |
| ネットワークアクセス | LXDサーバーにネットワーク経由でアクセスする | デフォルト=`no`<br/>`yes`に設定すると、ネットワーク経由でサーバーに接続できます。<br/>パスワードを設定するか、手動でクライアント証明書を受け付けることができます | - |
| イメージの自動更新 | イメージサーバーからイメージがダウンロードでき、この場合イメージは自動的に更新されます | デフォルト=`yes`<br/>`yes`に設定すると、LXDはダウンロードしたイメージを定期的に更新します | LXDドキュメント:<br/> [イメージの扱い](https://lxd-ja.readthedocs.io/ja/latest/image-handling/) |
| "YAML lxd init preseed" | 選択した設定オプションの概要をターミナルに表示します | デフォルト=`no` | - |

# インスタンス <!-- Instances -->
<!--
LXD supports two kinds of instances:
-->
LXD は 2 種類のインスタンスをサポートします:

- [コンテナ](#containers) <!-- [Containers](#containers) -->
- [仮想マシン](#virtual-machines) <!-- [Virtual machines](#virtual-machines) -->

<!--
See [Virtual machines vs. system containers](/lxd/introduction/#virtual-machines-vs-system-containers) for a comparison of these instance types.
-->
これらのインスタンスタイプの比較は [Virtual machines vs. system containers](/lxd/introduction/#virtual-machines-vs-system-containers) をご覧ください。

## <a name="containers"></a>コンテナ <!-- Containers -->
<!--
Containers are the default instance type for LXD. They are currently the most complete implementation of LXD instances and support more features than virtual machines.
-->
コンテナは LXD のデフォルトのインスタンスタイプです。コンテナは現時点では LXD インスタンスのもっとも完全な実装であり、仮想マシンよりも多くの機能をサポートしています。

<!--
Containers are implemented through the use of `liblxc` (LXC).
-->
コンテナは `liblxc`（LXC）を使って実装されています。

## <a name="virtual-machines"></a>仮想マシン <!-- Virtual machines -->
<!--
Virtual machines are natively supported since version 4.0 of LXD. Thanks to a built-in agent, they can be used almost like containers.
-->
LXD 4.0 から、LXD はネイティブに仮想マシンもサポートします。そしてビルトインのエージェントのおかげで、ほぼコンテナのように使えます。

<!--
LXD uses `qemu` to provide the VM functionality.
-->
LXD は VM の機能を提供するために `qemu` を使います。

!!! note "注意"
    <!--
    Currently, virtual machines support fewer features than containers, but the plan is to support the same set of features for both instance types in the future.
    -->
    現時点では、仮想マシンの機能はコンテナより少ないです。しかし、将来的には両方のインスタンスタイプで同じ機能をサポートする計画です。

    <!--
    To see which features are available for virtual machines, check the condition column in the [Instance configuration](/lxd/docs/master/instances#keyvalue-configuration) documentation.
    -->
    仮想マシンで有効な機能を確認するには、ドキュメントの[インスタンスの設定項目の表](https://lxd-ja.readthedocs.io/ja/latest/instances/#keyvalue)の「条件」のカラムをチェックしてください（英語ドキュメントは[こちら](/lxd/docs/master/instances#key-value-configuration)）。

## インスタンスの起動 <!-- Launch an instance -->
<!--
Use the `lxc launch` command to launch an instance. You must specify the image that you want to launch and a name for the instance that you are creating.
-->
`lxc launch` コマンドを使ってインスタンスを起動できます。起動したいイメージと、作成するインスタンスの名前を指定しなければなりません。

<!--
Images for various operating systems are available on the built-in remote image servers. See [Images](#images) for more information. You must specify the name of the image server and the name of the image.
-->
色々なオペレーティングシステムのイメージがビルトインのイメージサーバーから利用できます。詳細は[イメージ](#images)の項目をご覧ください。イメージサーバー名とイメージの名前を指定しなければなりません。

### コンテナの起動 <!-- Launch a container -->

<!--
Enter the following command to launch a container:
-->
コンテナを起動するには次のようなコマンドを実行します:

	lxc launch <image_server>:<image_name> <instance_name>

<!--
For example, to launch a container with a Ubuntu 20.04 image from the `images` server using the instance name `ubuntu-container`, enter the following command:
-->
例えば、`images` サーバーから Ubuntu 20.04 イメージを取得し、`ubuntu-container` という名前のインスタンス名でコンテナを起動するには、次のようなコマンドを実行します:

    lxc launch images:ubuntu/20.04 ubuntu-container

### 仮想マシンの起動 <!-- Launch a virtual machine -->

<!--
Enter the following command to launch a virtual machine:
-->
仮想マシンを起動するには次のようなコマンドを実行します:

	lxc launch <image_server>:<image_name> <instance_name> --vm

<!--
For example, to launch a virtual machine with a Ubuntu 20.04 image from the `images` server using the instance name `ubuntu-vm`, enter the following command:
-->
例えば、`images` サーバーから Ubuntu 20.04 イメージを取得し、`ubuntu-vm` という名前のインスタンス名で仮想マシンを起動するには、次のようなコマンドを実行します:

    lxc launch images:ubuntu/20.04 ubuntu-vm --vm

## インスタンスの管理 <!-- Manage instances -->
<!--
Use the LXD client tool `lxc` to manage your LXD instances.
-->
LXD インスタンスを管理するには LXD のクライアントツールである `lxc` を使います。

<!--
The following command gives an overview of all available commands and options:
-->
次のように実行すると、利用できるすべてのコマンドの概要とオプションが表示できます:

        lxc

<!--
Use `lxc <command> --help` for more information about a command, like flags and further options.
-->
フラグやオプションのような各コマンドの詳細な情報は `lxc <command> --help` と実行します。

### インスタンスのリスト <!-- List instances -->

<!--
Enter the following command to list all instances:
-->
すべてのインスタンスを一覧するには次のコマンドを実行します:

    lxc list

<!--
You can filter the instances that are displayed, for example, by type or status:
-->
例えば、タイプやステータスを使って表示するインスタンスをフィルタリングするには:

    lxc list type=container
    lxc list status=running

<!--
You can also filter by name. To list several instances, use a regular expression for the name. For example:
-->
名前でフィルタリングすることもできます。複数のインスタンスを表示するには、名前で正規表現を使います。例えば:

    lxc list ubuntu.*

<!--
Enter `lxc list --help` to see all filter options.
-->
すべてのフィルターオプションを見るには `lxc list --help` を実行してみてください。

### インスタンスの情報を見る <!-- Show information about an instance -->

<!--
Enter the following command to show detailed information about an instance:
-->
インスタンスについての詳細な情報を確認するには次のコマンドを実行します:

    lxc info <instance_name>

<!--
Add `--show-log` to the command to show the latest log lines for the instance:
-->
インスタンスの最新のログを表示するには、コマンドに `--show-log` を追加します:

    lxc info <instance_name> --show-log

### インスタンスの起動と停止 <!-- Start and stop an instance -->
<!--
Enter the following command to start an instance:
-->
インスタンスを起動するには次のコマンドを実行します:

	lxc start <instance_name>

<!--
You will get an error if the instance does not exist or if it is running already.
-->
インスタンスが存在しない場合やすでに起動している場合はエラーが表示されるでしょう。

<!--
Enter the following command to stop an instance:
-->
インスタンスを停止するには次のコマンドを実行します:

    lxc stop <instance_name>

<!--
You will get an error if the instance does not exist or if it is not running.
-->
インスタンスが存在しない場合や起動していない場合はエラーが表示されるでしょう。

### インスタンスの削除 <!-- Delete an instance -->
<!--
If you don't need an instance anymore, you can remove it. The instance must be stopped before you can delete it.
-->
もうインスタンスが必要でない場合は削除できます。削除する前にインスタンスが停止している必要があります。

<!--
Enter the following command to delete an instance:
-->
インスンタンスを削除するには次のコマンドを実行します:

    lxc delete <instance_name>

!!! warning "警告"
    <!--
    This command permanently deletes the instance and all snapshots.
    -->
    このコマンドはインスタンスとそのインスタンスのすべてのスナップショットを削除します。

    <!--
    See [Prevent accidental deletion of an instance](/lxd/advanced-guide/#prevent-accidental-deletion-of-an-instance) for instructions on how to avoid accidental deletion.
    -->
    誤ってインスタンスを削除しないようにするには、「[インスタンスの誤った削除を防ぐ](https://linuxcontainers.org/ja/lxd/advanced-guide/#_50)」をご覧ください。

## <a name="configure-instances"></a>インスタンスの設定 <!-- Configure instances -->
<!--
See [Instance configuration](/lxd/docs/master/instances) in the LXD documentation for a list of configuration options that you can specify for your instances.
-->
インスタンスに設定できる設定オプションのリストは LXD ドキュメントの「[インスタンスの設定](https://lxd-ja.readthedocs.io/ja/latest/instances/)」をご覧ください。

<!--
The instance configuration consists of different categories:
-->
インスタンスの設定は様々なカテゴリーから構成されています:

<!--
[Instance properties](/lxd/docs/master/instances#properties)
:   Properties that are set when the instance is created, for example, the instance name and architecture. These properties cannot be changed in the same way as other configuration options.
-->
[プロパティ](https://lxd-ja.readthedocs.io/ja/latest/instances/#_3)
:   インスタンス作成時に設定されるプロパティ。例えばインスタンス名やアーキテクチャーがあります。これらのプロパティは他の設定オプションと同じような方法で変更はできません。

<!--
[Instance options](/lxd/docs/master/instances#keyvalue-configuration)
:   Configuration options related directly to the instance, for example, startup options, security settings, hardware limits, kernel modules, snapshots and user keys.
-->
[インスタンスオプション](https://lxd-ja.readthedocs.io/ja/latest/instances/#keyvalue)
:   インスタンスに直接関係する設定オプション。例えば起動時の設定、セキュリティの設定、ハードウェア制限、カーネルモジュール、スナップショット、ユーザー設定の値などがあります。

<!--
[Instance devices](/lxd/docs/master/instances#device-types)
:   Devices that are attached to an instance, for example, network interfaces, mount points, USB and GPU devices. These devices can have *instance device options*, depending on the type of the instance device.
-->
[インスタンスデバイス](https://lxd-ja.readthedocs.io/ja/latest/instances/#_5)
:   インスタンスにアタッチされているデバイス。例えば、ネットワークインターフェース、マウントポイント、USB や GPU デバイスなどです。これらのデバイスはインスタンスデバイスの種類に応じて *インスタンスデバイスオプション* を持つことができます。

<!--
Check the condition column for each configuration option to see if it is available for the instance type that you are using.
-->
対象のインスタンスタイプでそれぞれの設定オプションが使えるかどうかは、[インスタンスの設定](https://lxd-ja.readthedocs.io/ja/latest/instances/)ページの表の「条件」列をチェックしてください。

<!--
You can configure these options either when launching an instance or later at runtime. You can also create profiles to store and apply sets of configuration options.
-->
これらのオプションは、インスタンスの起動時か実行時に設定できます。また、プロファイルを作成して、設定オプションのセットを保存し、適用できます。

### インスタンス起動時に設定を指定する <!-- Specify configuration when launching an instance -->
<!--
To specify instance options when launching an instance, use the `--config` (or `-c` for short) flag with the `lxc launch` command. Note that you can only specify instance options with the `\-\-config` flag. You cannot add and configure instance devices with this method.
-->
インスタンスを起動する時にインスタンスに対するオプションを指定するには、`--config`（もしくは短い形式の `-c`）フラグを `lxc launch` コマンドで使用してください。`--config` ではインスタンスオプションのみが指定できることに注意してください。この方法でインスタンスデバイスの追加や設定はできません。

<!--
For example, to limit the container resources to one vCPU and 192 MiB of RAM, add the following flags:
-->
例えば、1vCPU と 192MiB RAM をコンテナの制限値として設定するには、次のようなオプションを追加してください:

    lxc launch images:ubuntu/20.04 ubuntu-limited -c limits.cpu=1 -c limits.memory=192MiB

<!--
To launch an instance with a full configuration (which can also include instance devices), specify the configuration through a `.yaml` file. Check the contents of an existing instance configuration for the required markup (see [Display instance configuration](#display-instance-configuration)).
-->
完全な設定を指定してインスタンスを起動するには `.yaml` ファイルを使って設定を指定します（インスタンスデバイスも含めることができます）。必要な変更のために既存のインスタンスの設定内容をチェックします（[インスタンス設定の表示](#display-instance-configuration)を参照）。

<!--
For example, to launch a container with the configuration from `config.yaml`, enter the following command:
-->
例えば、`config.yaml` から設定を読んでコンテナを起動するには、次のコマンドを実行します:

    lxc launch images:ubuntu/20.04 ubuntu-config < config.yaml

<!--
You can also specify configuration options when launching an instance by applying one or more profiles. See [Use profiles](#use-profiles) for more information.
-->
ひとつ以上のプロファイルを適用して、インスタンスを起動するときに設定を指定することもできます。詳しくは[プロファイルの使用](#use-profiles)をご覧ください。

### 実行時の設定の更新 <!-- Update configuration at runtime -->
<!--
To update instance options while the instance is running, use the `lxc config set` command. You need to specify the instance name and the key and value of the instance option:
-->
インスタンス実行中にインスタンスオプションを更新するには、`lxc config set` コマンドを使います。インスタンス名とインスタンスオプションの設定項目（キー）と値の指定が必要です。

    lxc config set <instance_name> <option_key>=<option_value> <option_key>=<option_value> ...

<!--
For example, to change the memory limit for your container, enter the following command:
-->
例えば、コンテナのメモリー制限値を変更するには次のコマンドを実行します:

    lxc config set ubuntu-limited limits.memory=128MiB

<!--
To add and configure an instance device for your instance, use the `lxc config device add` command. You need to specify the instance name, a device name, the device type and maybe device options (depending on the device type):
-->
インスタンスのインスタンスデバイスの追加し設定を行うには、`lxc config device add` コマンドを使います。インスタンス名、デバイス名、デバイスタイプ、デバイスオプション（デバイスタイプによる）の指定が必要です:

    lxc config device add <instance_name> <device_name> <device_type> <device_option_key>=<device_option_value> <device_option_key>=<device_option_value> ...

<!--
For example, to add the storage at `/share/c1` on the host system to your instance at path `/opt`, enter the following command:
-->
例えば、インスタンス内の `/opt` にホストシステムの `/share/c1` を追加するには次のコマンドを実行します:

    lxc config device add ubuntu-container disk-storage-device disk source=/share/c1 path=/opt

<!--
To configure instance device options for an instance device that you have added already, use the `lxc config device set` command.
-->
すでに追加されているインスタンスデバイスのインスタンスデバイスオプションを設定するには、`lxc config device set` コマンドを使います。

### <a name="display-instance-configuration"></a>インスタンス設定の表示<!-- Display instance configuration -->
<!--
Enter the following command to display the current configuration of your instance:
-->
インスタンスの現在の設定を表示するには次のコマンドを実行します:

    lxc config show <instance_name> -e

<!--
The configuration is displayed in [YAML](https://en.wikipedia.org/wiki/YAML) format.
-->
設定は [YAML](https://en.wikipedia.org/wiki/YAML) フォーマットで表示されます。

### <a name="use-profiles"></a>プロファイルの使用 <!-- Use profiles -->
<!--
Profiles store a set of configuration options. They can contain instance options, instance devices and instance device options.
-->
プロファイルは設定オプションのセットを保存します。インスタンスオプション、インスタンスデバイス、インスタンスデバイスオプションを含めることができます。

<!--
You can apply any number of profiles to an instance. They are applied in the order they are specified, so the last profile to specify a specific key takes precedence. However, instance-specific configuration always overrides the configuration coming from the profiles.
-->
1 つのインスタンスにいくつでもプロファイルを適用できます。複数のプロファイルは指定した順に適用されるので、特定の設定項目（キー）を指定した最後のプロファイルが優先されます。しかし、インスタンス固有の設定は常にプロファイルによる設定よりも優先されます。

<!--
When applying a profile that contains configuration options that are not suitable for the instance type, these configuration options are ignored and do not result in an error.
-->
インスタンスタイプに適合しない設定オプションを含むプロファイルを適用する場合、適合しないオプションは無視されエラーにはなりません。

<!--
If you don't specify any profiles when launching a new instance, the `default` profile is applied automatically. This profile defines a network interface and a root disk. The `default` profile cannot be renamed or removed.
-->
新しいインスタンスを起動するときにプロファイルを何も指定しない場合は、`default` プロファイルが自動的に適用されます。このプロファイルはネットワークインターフェースとルートディスクを定義します。`default` プロファイルは名前を変更したり削除したりできません。

#### プロファイルの参照 <!-- View profiles -->
<!--
Enter the following command to display a list of all available profiles:
-->
利用可能なすべてのプロファイルのリストを表示するには次のコマンドを実行します:

    lxc profile list

<!--
Enter the following command to display the contents of a profile:
-->
プロファイルの内容を見るには次のコマンドを実行します:

    lxc profile show <profile_name>

#### 空のプロファイルの作成 <!-- Create an empty profile -->
<!--
Enter the following command to create an empty profile:
-->
空のプロファイルの作成は次のコマンドを実行します:

    lxc profile create <profile_name>

#### プロファイルの編集 <!-- Edit a profile -->
<!--
You can either set specific configuration options or edit the full profile in YAML format.
-->
特定の設定オプションを設定するか、もしくは YAML フォーマットのプロファイルの全体を編集することもできます。

##### プロファイルの特定のオプションを設定する <!-- Set specific options for a profile -->
<!--
To set an instance option for a profile, use the `lxc profile set` command. You need to specify the profile name and the key and value of the instance option:
-->
プロファイルのインスタンスオプションを設定するには `lxc profile set` コマンドを使います。このコマンドの実行には、インスタンスオプションのプロファイル名、設定項目（キー）、値の指定が必要です。

    lxc profile set <profile_name> <option_key>=<option_value> <option_key>=<option_value> ...

<!--
To add and configure an instance device for your profile, use the `lxc profile device add` command. You need to specify the profile name, a device name, the device type and maybe device options (depending on the device type):
-->
プロファイルのインスタンスデバイスを追加しして設定するには `lxc profile device add` コマンドを使います。このコマンドの実行にはプロファイル名、デバイス名、デバイスタイプ、（デバイスタイプに依存する）デバイスオプションの指定が必要です。

    lxc profile device add <instance_name> <device_name> <device_type> <device_option_key>=<device_option_value> <device_option_key>=<device_option_value> ...

<!--
To configure instance device options for an instance device that you have added to the profile already, use the `lxc profile device set` command.
-->
すでにプロファイルに追加されているインスタンスデバイスのインスタンスデバイスオプションを設定するには `lxc profile device set` コマンドを使います。

##### プロファイル全体の編集 <!-- Edit the full profile -->
<!--
Instead of setting each configuration option separately, you can provide all options at once in [YAML](https://en.wikipedia.org/wiki/YAML) format.
-->
設定オプションごとに別々に設定する代わりに、[YAML](https://en.wikipedia.org/wiki/YAML) フォーマットですべてのオプションを一度で編集できます。

<!--
Check the contents of an existing profile or instance configuration for the required markup. For example, the `default` profile could look like this:
-->
必要な変更を行うために既存のプロファイルやインスタンスの設定をチェックします。例えば、`default` プロファイルは次のようになります:

    config: {}
    description: Default LXD profile
    devices:
      eth0:
        name: eth0
        network: lxdbr0
        type: nic
      root:
        path: /
        pool: default
        type: disk
    name: default
    used_by:

<!--
Instance options are provided as array under `config`. Instance devices and instance device options are provided under `devices`.
-->
インスタンスオプションは `config` 配下の配列として与えられます。インスタンスデバイスとインスタンスデバイスオプションは `devices` 配下で与えられます。

<!--
To edit a profile using your standard terminal editor, enter the following command:
-->
標準のターミナルエディタを使ってプロファイルを編集するには次のコマンドを実行します:

    lxc profile edit <profile_name>

<!--
Alternatively, you can create a YAML file (for example, `profile.yaml`) with the configuration and write the configuration to the profile with the following command:
-->
代わりに、設定が書かれた YAML ファイル（例えば `profile.yaml` というようなファイル）を作成し、次のコマンドを実行してプロファイルに設定を書き込むこともできます:

    lxc profile edit <profile_name> < profile.yaml

#### プロファイルのインスタンスへの適用 <!-- Apply a profile to an instance -->
<!--
Enter the following command to apply a profile to an instance:
-->
プロファイルをインスタンスに適用するには次のコマンドを実行します:

    lxc profile add <instance_name> <profile_name>

!!! Tip
    <!--
    Check the configuration after adding the profile: `lxc config show <instance_name>`
    -->
    プロファイルを追加した後に設定をチェックします: `lxc config show <instance_name>`

    <!--
    You will see that your profile is now listed under `profiles`. However, the configuration options from the profile are not shown under `config` (unless you add the `-e` flag). This is because they are taken from the profile and not the configuration of the instance.
    -->
    すると、`profiles` 配下に適用したプロファイルがリスト表示されるでしょう。しかし、プロファイル内の設定オプションは `config` 配下には見えません（`-e` フラグを追加した場合を除く）。これは、設定がプロファイルから取得したものであり、インスタンスの設定ではないからです。

    <!--
    This means that if you edit a profile, the changes are automatically applied to all instances that use the profile.
    -->
    これは、もしプロファイルを編集した場合、変更はそのプロファイルを使っている自動的にすべてのインスタンスに適用されることを意味します。

<!--
You can also specify profiles when launching an instance by adding the `--profile`  (or `-p` for short) flag:
-->
インスタンスを作成して起動する（launchする）ときに `--profile` （や短い形式の `-p`）フラグを追加し、プロファイルを指定できます。

    lxc launch <image> <instance_name> -p <profile> -p <profile> ...

#### インスタンスからのプロファイルの削除 <!-- Remove a profile from an instance -->
<!--
Enter the following command to remove a profile from an instance:
-->
インスタンスからプロファイルを削除するには次のコマンドを実行します:

    lxc profile remove <instance_name> <profile_name>

## コマンドの実行 <!-- Run commands -->
<!--
To run commands on your instance, either pass them from the host machine or log on to your container.
-->
インスタンス上でコマンドを実行するには、ホストマシンから実行するか、コンテナにログインするかのどちらかで行います。

### ホストからコマンドを実行 <!-- Run commands from the host -->
<!--
To run a single command from the terminal of the host machine, use the `lxc exec` command:
-->
ホストマシンのターミナルから単一のコマンドを実行するには、`lxc exec` コマンドを使います:

    lxc exec <instance_name> -- <command>

<!--
For example, enter the following command to update the package list on your container:
-->
例えば、コンテナ上でパッケージのリストを更新するには次のようにコマンドを実行します:

    lxc exec ubuntu-container -- apt-get update

### シェルアクセスの取得 <!-- Get shell access -->
!!! note "注意"
    <!--
    The following instructions assume that your container has the `/bin/bash` command. If it doesn't, change the command appropriately.
    -->
    次の説明は、コンテナが `/bin/bash` コマンドを持っていると仮定しています。もし `/bin/bash` コマンドがない場合は、適切なコマンドに置き換えてください。

<!--
Start a shell in your container to run commands directly in the container. Enter the following command:
-->
コンテナ内で直接コマンドを実行するためにコンテナ内のシェルを起動します。次のようにコマンドを実行します:

    lxc exec <instance_name> -- /bin/bash

<!--
By default, you are logged in as root user. If you want to log in as a different user, enter the following command:
-->
デフォルトでは、root ユーザーでログインします。もし、違うユーザーでログインしたい場合は次のコマンドを実行します:

    lxc exec <instance_name> -- su --login <user_name>

!!! note "注意"
    <!--
    In many containers, you must create a user first.
    -->
    多くのコンテナでは、最初にユーザーを作成しなければなりません。

<!--
To exit the container shell, enter `exit` or press `Ctrl`+`d`.
-->
コンテナのシェルを抜けるには、`exit` と入力するか `Ctrl`+`d` を押します。

### 仮想マシンへのログオン <!-- Log on to a virtual machine -->
<!--
If you are running a virtual machine, you can log on to its console with the following command:
-->
仮想マシンを実行しているのであれば、次のコマンドでコンソールログオンできます:

	lxc console <vm_name>

<!--
To detach, press `Ctrl`+`a`-`q`.
-->
デタッチするには、`Ctrl`+`a`-`q` を押します。

## ファイルへのアクセス <!-- Access files -->
<!--
You can access the files from your container and pull them to the host machine, or push files from the host machine to the container.
-->
コンテナのファイルにアクセスして、コンテナからホストマシンに pull したり、ホストマシンからファイルをコンテナに push したりできます。

### コンテナからのファイルの Pull <!-- Pull files from the container -->
<!--
Enter the following command to pull a file from the container:
-->
次のコマンドを使ってコンテナからファイルを取得します:

    lxc file pull <instance_name>/<path_to_file> <location_on_host>

<!--
For example, to pull the `/etc/hosts` file to the current folder, enter the following command:
-->
例えば、`/etc/hosts` ファイルをカレントフォルダに pull するには、次のコマンドを実行します:

    lxc file pull ubuntu-container/etc/hosts .

<!--
Instead of pulling the container file into a file on the host system, you can also pull it to stdin and pipe it into another command. This can be useful, for example, to check a log file:
-->
ホストシステム上にコンテナのファイルを pull する代わりに、stdin に pull して他のコマンドに pipe で渡せます。これは、例えばログファイルをチェックするような場合に有用です:

    lxc file pull ubuntu-container/var/log/syslog - | less

<!--
To pull a folder with all contents, enter the following command:
-->
フォルダ内のすべてを pull するには次のコマンドを実行します:

    lxc file pull -r <instance_name>/<path_to_folder> <location_on_host>

#### コンテナへのファイルの Push <!-- Push files to the container -->
<!--
Enter the following command to push a file to the container:
-->
コンテナへファイルを push するには次のコマンドを実行します:

    lxc file push <location_on_host> <instance_name>/<path_to_file>

<!--
To push a folder with all contents, enter the following command:
-->
フォルダ内のすべてを push するには次のコマンドを実行します:

    lxc file push -r <location_on_host> <instance_name>/<path_to_folder>

# <a name="images"></a>イメージ <!-- Images -->
<!--
Instances are based on Images, which contain a basic operating system (for example a linux distribution) and some other LXD-related information.
-->
インスタンスはイメージをベースにしています。これは基本的なオペレーティングシステム（例えば Linux ディストリビューション）と LXD に関係する情報を含んでいます。

<!--
In the following we will use the built-in remote image servers ([see below](#use-remote-image-servers)).
-->
次でビルトインイメージーサーバーを使った例を紹介します（[後述](#use-remote-image-servers)）。

<!--
For more options see [Advanced Guide - Advanced options for Images](/lxd/advanced-guide#advanced-options-for-images).
-->
さらなるオプションについては [Advanced Guide - Advanced options for Images](/lxd/advanced-guide#advanced-options-for-images) をご覧ください。

### <a name="use-remote-image-servers"></a>Use remote image servers
<!--
The easiest way is to use a built-in remote image server.
-->
もっとも簡単にイメージを扱う方法は、ビルトインのリモートイメージサーバーを使うことです。

<!--
You can get a list of built-in image servers with:
-->
ビルトインのイメージサーバーは次のように取得できます:

	lxc remote list

<!--
LXD comes with 3 default servers:
-->

LXD はデフォルトで 3 つのサーバーが登録されています:

 1. `ubuntu:` (stable の Ubuntu イメージ <!-- for stable Ubuntu images -->)
 2. `ubuntu-daily:` (Ubuntu イメージのデイリービルド <!-- for daily Ubuntu images -->)
 3. `images:` ([他の多数のディストリビューション](https://images.linuxcontainers.org))<!-- for a [bunch of other distros](https://images.linuxcontainers.org) -->)

#### イメージサーバー上のイメージのリスト <!-- List images on server -->

<!--
To get a list of remote images on server `images`, type:
-->
イメージサーバー `images` 上のイメージリストを取得するには次のようにします:

	lxc image list images:

**詳細** <!-- **Details:** -->
<!--
_Most details in the list should be self-explanatory._
-->
_リストの見方は大部分は見るだけでわかります。_

<!--
- Alias with `cloud`
: refers to images with built-in cloud-init support (see [Advanced Guide - Cloud-Init](/lxd/advanced-guide#cloud-init) and [official cloud-init documentation](https://cloudinit.readthedocs.io/en/latest/))
-->
- `cloud` というエイリアス: ビルトインで `cloud-init` をサポートするイメージを指します（詳細は [Advanced Guide - Cloud-Init](/lxd/advanced-guide#cloud-init) と [cloud-init の公式文書](https://cloudinit.readthedocs.io/en/latest/) をご覧ください）

#### イメージの検索 <!-- Search for images -->
<!--
You can search for images, by applying specific elements (e.g. the name of a distribution).
-->
イメージは特定の要素（例えばディストリビューション名）を指定して検索できます。

<!--
Show all Debian images:
-->
すべての Debian イメージを検索するには:

	lxc image list images: debian

<!--
Show all 64-bit Debian images:
-->
すべての 64bit の Debian イメージを検索するには:

	lxc image list images: debian amd64

### 仮想マシンのイメージ <!-- Images for virtual machines -->
<!--
It is recommended to use the `cloud` variants of images (visible by the `cloud`-tag in their `ALIAS`). They include cloud-init and the LXD-agent. They also increase their size automatically and are tested daily.
-->
イメージの `cloud` バリアントを使うことをおすすめします（`ALIAS` の `cloud` タグで確認できます）。このようなイメージは LXD エージェントと cloud-init を含んでいます。また、サイズは自動的に大きくなり、毎日テストされています。

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

 <!-- footnotes -->

 [^1]: [Running virtual machines with lxd](https://discuss.linuxcontainers.org/t/running-virtual-machines-with-lxd-4-0/7519), including a short howto for a Microsoft Windows VM.

///Footnotes Go Here///
