##### 目次

* [インストール](#_2)
    * [リリースを選択する](#_3)
    * [パッケージの取得](#_4)
        * [Linux](#linux)
            * [Alpine Linux](#alpine-linux)
            * [Arch Linux](#arch-linux)
            * [Fedora](#fedora)
            * [Gentoo](#gentoo)
            * [Ubuntu](#ubuntu)
            * [Snap パッケージ (Arch Linux, Debian, Fedora, OpenSUSE, Ubuntu)](#snap-archlinux-debian-fedora-opensuse-ubuntu)
        * [MacOS 用クライアント](#macos)
        * [Windows 用クライアント](#windows)
        * [ソースからのインストール](#_5)
* [初期設定](#_6)
    * [アクセスコントロール](#_7)
* [仮想マシンについての注意](#_8)
* [LXDクライアント](#lxd)
    * [概観](#_9)
    * [インスタンスの起動](#_10)
        * [コンテナの起動](#_11)
            * [Ubuntu の例](#ubuntu_2) <!-- wrong place, intended -->
        * [仮想マシンの起動](#_12)
    * [イメージ](#_14)
        * [リモートのイメージサーバーを使う](#_15)
            * [イメージサーバー上のイメージのリスト](#_16)
            * [イメージの検索](#_17)
        * [仮想マシンのイメージ](#_18)
    * [インスタンスの管理](#_19)
        * [起動・停止](#_20)
        * [コンテナ内のシェル・ターミナル](#_21)
        * [ホストのターミナルからコマンドを実行する](#_23)
        * [仮想マシン内のシェル・ターミナル](#_24)
        * [ファイルやディレクトリをコンテナ〜ホスト間でコピーする](#_25)
        * [インスタンスの削除](#_28)
* [その他の情報とリンク](#_29)

---

# インストール<!-- Installation -->
## リリースを選択する <!-- Choose your release -->
<!--
LXD upstream maintains three release branches in parallel:
-->
LXD では 3 つのリリースブランチが並行してメンテナンスされています:

 * LTS リリース <!-- LTS release -->(LXD 4.0.x, LXD 3.0.x or LXD 2.0.x)
 * フィーチャーリリース <!-- Feature releases -->(LXD 4.x)

<!--
LTS releases are recommended for production environments as they will benefit from regular bugfix
and security updates but will not see new features added or any kind of behavioral change.
-->
LTS リリースは本番環境での使用におすすめです。定期的なバグフィックスとセキュリティアップデートが行われますが、新しい機能の追加や動作が変わるような変更は行われないためです。

<!--
To get all the latest features and monthly updates to LXD, use the feature release branch instead.
-->
LXD の新機能のすべてと月次の更新を取得したい場合は、フィーチャーリリースをお使いください。

## パッケージの取得 <!-- Getting the packages -->

### Linux

#### Alpine Linux
<!--
To install the feature branch of LXD, run:
-->
LXD のフィーチャーブランチをインストールするには、以下を実行します:

    apk add lxd

#### Arch Linux
<!--
To install the feature branch of LXD, run:
-->
フィーチャーブランチの LXD をインストールするには次のように実行します:

    pacman -S lxd

<!--
Alternatively, the snap package can also be used on Arch Linux ([see below](#snap-archlinux-debian-fedora-opensuse-ubuntu)).
-->
代わりに snap パッケージを Arch Linux で使うこともできます（[後述](#snap-archlinux-debian-fedora-opensuse-ubuntu))。

#### Fedora
<!--
Instructions on how to use the COPR repository for LXD can be [found here](https://copr.fedorainfracloud.org/coprs/ganto/lxc4/).
-->
LXD の COPR リポジトリの使い方については [こちら](https://copr.fedorainfracloud.org/coprs/ganto/lxc4/) をご覧ください。

<!--
Alternatively, the snap package can also be used on Fedora (see below).
-->
もしくは、snap パッケージを Fedora 上で使うこともできます ([後述](#snap-archlinux-debian-fedora-opensuse-ubuntu))。

#### Gentoo
<!--
To install the feature branch of LXD, run:
-->
LXD のフィーチャーブランチをインストールするには次のように実行します:

    emerge --ask lxd

#### Ubuntu
##### Ubuntu (全リリース <!-- all releases -->)
<!--
The recommended way to install LXD these days is with the snap.
-->
今は、snap を使って LXD をインストールするのがオススメの方法です。

<!--
For the latest stable release, use:
-->
最新の stable リリースの場合は次のように実行します:

    snap install lxd

<!--
For the LXD 4.0 stable release, use:
-->
LXD 4.0 stable リリースの場合は次のように実行します:

    snap install lxd --channel=4.0/stable

<!--
For the LXD 3.0 stable release, use:
-->
LXD 3.0 stable リリースの場合は次のように実行します:

    snap install lxd --channel=3.0/stable

<!--
For the LXD 2.0 stable release, use:
-->
LXD 2.0 stable リリースの場合は次のように実行します:

    snap install lxd --channel=2.0/stable

<!--
**Note:** If you previously had the LXD deb package installed, you can migrate all your existing data over with:
-->
**注意:** 以前、LXD の deb パッケージをインストールしていた場合は、次のような方法で既存データをすべて移行できます:

    lxd.migrate

#### Snap パッケージ <!-- Snap package -->(ArchLinux, Debian, Fedora, OpenSUSE, Ubuntu)
<!--
LXD upstream publishes and tests a snap package which works for a number of Linux distributions.
-->
LXD 開発元では、多数の Linux ディストリビューションで動作する snap パッケージを作成し、テストしています。

<!--
The list of Linux distributions we currently test our snap for can be [found here](https://jenkins.linuxcontainers.org/job/lxd-test-snap-latest-stable/).
-->
開発元で現在、snap パッケージをテストしている Linux ディストリビューションのリストは [こちら](https://jenkins.linuxcontainers.org/job/lxd-test-snap-latest-stable/) にあります。

<!--
For those distributions, you should first install snapd using [those instructions](https://snapcraft.io/docs/core/install).
-->
これらのディストリビューションでは、[こちらの手順](https://snapcraft.io/docs/core/install) に従い、snapd をインストールする必要があります。

<!--
After that, you can install LXD with:
-->
その後、LXD を以下のようにインストールできます:

    snap install lxd

<!--
Alternatively, pass:   
`--channel=4.0/stable` for the LXD 4.0 LTS release,   
`--channel=3.0/stable` for the LXD 3.0 LTS release or   
`--channel=2.0/stable` for the LXD 2.0 LTS release.   
-->
あるいは次のように実行します:  
LXD 4.0 LTS リリースの場合は `--channel=4.0/stable`   
LXD 3.0 LTS リリースの場合は `--channel=3.0/stable`  
LXD 2.0 LTS リリースの場合は `--channel=2.0/stable`  

### MacOS 用クライアント<!-- MacOS builds -->

!!! note "注意:"
	<!--
	The builds for MacOS only include the client, not the server.
	{: .p-noteadm }
	-->
	MacOS 用のビルドはクライアントのみです。サーバーは含みません。
	{: .p-noteadm }

<!--
LXD upstream publishes builds of the LXD client for macOS through [Homebrew](https://brew.sh/).
-->
LXD 開発元では、macOS 用の LXD クライアントのビルドを [Homebrew](https://brew.sh/) 経由で配布しています。

<!--
To install the feature branch of LXD, run:
-->
LXD のフィーチャーブランチをインストールするには、以下を実行します:

    brew install lxc

### Windows 用クライアント <!-- Windows builds -->

!!! note "注意:"
	<!--
	The builds for MacOS only include the client, not the server.
	{: .p-noteadm }
	-->
	Windows 用のビルドはクライアントのみです。サーバーは含みません。
	{: .p-noteadm }

<!--
Native builds of the LXD client for Windows can be [found here](https://ci.appveyor.com/project/lxc/lxd/branch/master/artifacts).
-->
Windows 用の LXD クライアントのネイティブビルドは [こちら](https://ci.appveyor.com/project/lxc/lxd/branch/master/artifacts) にあります。

### ソースからのインストール <!-- Installing from source -->
<!--
Instructions on building and installing LXD from source [can be found here](https://github.com/lxc/lxd/#installing-lxd-from-source).
-->
LXD をソースからビルドしてインストールする方法は [こちら](https://github.com/lxc/lxd/#installing-lxd-from-source) にあります。

# 初期設定 <!-- Initial configuration -->

!!! note "注意:"
	<!--
	`instances`
	: means both `containers` and `virtual machines`.
	{: .p-noteadm }
	-->
	`インスタンス`
	は `コンテナ` と `仮想マシン`　の両方を指します。
	{: .p-noteadm }

<!--
Before you can create containers, you need to tell LXD a little bit about your storage and network needs.
-->
コンテナを作成する前に、ストレージやネットワーク環境について少しだけ設定する必要があります。

<!--
This is all done with:
-->
この設定は以下のように実行して行います:

    lxd init

<!--
**Overview of the configuration options:**
-->
設定オプションの概要:

`デフォルト=no`
: デフォルトではその機能が無効化されていることを意味します <!-- means the feature is disabled by default -->

<!--
| Feature:  | Description: | Basic Configuration Options: | More Information: |
| --- | ------------- | --- | --- |
| Clustering | A Cluster combines several LXD-servers. They share the same distributed database and can be managed uniformly using the LXD-client (lxc) or the REST API. | default=`no`; <br> If set to `yes`, you can either connect to an existing cluster or create a new one. | LXD-documentation: <br> [[clustering]] |
| MAAS server | "MAAS is an open-source tool that lets you build a data centre from bare-metal servers." | default=`no`; <br> If set to `yes`, you can connect to an existing MAAS-server and specify the `name`, `URL` and `API key`. | - [maas.io](https://maas.io/) <br> - [maas - install with lxd](https://maas.io/docs/install-with-lxd) |
| Network bridge | Provides network access for the instances. | You can either use an existing bridge (or interface) or let LXD create a new bridge (recommended option). <br> You can also create additional bridges and assign them to instances later. | LXD-documentation: <br> - [[networks]] <br> - [Network interface](https://linuxcontainers.org/lxd/docs/master/instances#type-nic) |
| Storage pools | Instances etc. are stored in storage pools. | For testing purposes you can create a loop-backed storage pool. <br> But for production use it is recommended to use an empty partition (or full disk) instead of loop-backed storages (Reasons include: loop-backed pools are slower and their size can't be reduced). <br> The recommended backends are `ZFS` and `btrfs`. <br> You can also create additional storage pools later. | LXD-documentation: <br> - [[storage]] <br> - [Comparison of methods](https://linuxcontainers.org/lxd/docs/master/storage.html#where-to-store-lxd-data) <br> - [Backend Comparison Chart](https://linuxcontainers.org/lxd/docs/master/storage#feature-comparison) |
| Network Access | Allows access to the server over network. |  default=`no`; <br> If set to `yes`, you can connect to the server over network. <br> You can set a `password` or accept the client certificate manually. | - |
| Automatic Image Update | You can download Images from Image servers, in this case images can be updated automatically. | default=`yes`; <br> If set to `yes`, LXD will update the downloaded images regularly. | LXD-documentation: <br> [[image-handling]] |
| "YAML lxd init preseed" | Will display a summary of your chosen configuration options in the terminal. | default=`no` | - |
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

## アクセスコントロール <!-- Access control -->
<!--
Access control for LXD is based on group membership.
The root user as well as members of the "lxd" group can interact with the local daemon.
-->
LXD のアクセスコントロールは、グループメンバーシップに基づいて行います。
root ユーザおよび "lxd" グループのメンバーはローカルデーモンと対話できます。

<!--
If the "lxd" group is missing on your system, create it, then restart the LXD daemon.
You can then add trusted users to it. Anyone added to this group will have full control over LXD.
-->
"lxd" グループがシステムにない場合は、作成した後、LXD デーモンを再起動します。
そして、信用するユーザを "lxd" グループに追加します。このグループに属するユーザ全員が、LXD を完全に制御できます。

<!--
Because group membership is normally only applied at login, you may need to either re-open your user session
or use the "newgrp lxd" command in the shell you're going to use to talk to LXD.
-->
グループメンバーシップはログイン時にのみ追加されるので、追加後にあなたのユーザセッションを閉じて再度開くか、LXD と通信したいシェル上で "newgrp lxd" コマンドを実行する必要があります

!!! note "警告:"
	<!--
	Anyone with access to the LXD socket can fully control LXD, which includes the ability to attach host devices and filesystems, this should therefore only be given to users who would be trusted with root access to the host. You can learn more about LXD security [here](/lxd/docs/master/security).
	-->
	LXD ソケットにアクセスできる人であれば誰でも LXD を完全にコントロールできます。これには、ホストのデバイスやファイルシステムにアタッチする権限も含まれます。したがって、ホストへの root アクセスで信頼できるユーザにのみ与えられるべきです。さらに LXD のセキュリティについて学びたい場合は[ドキュメントのセキュリティのセクション（日本語版）](https://lxd-ja.readthedocs.io/ja/latest/security/) （または[英語版](/lxd/docs/master/security/)）をご覧ください。	
	{: .p-noteadm }

# 仮想マシンについての注意 <!-- Note about Virtual machines -->
<!--
Since version 4.0 LXD also natively supports virtual machines and thanks to a built-in agent, they can be used almost like containers.
-->
LXD 4.0 から、LXD はネイティブに仮想マシンもサポートします。そしてビルトインのエージェントのおかげで、ほぼコンテナのように使えます。

<!--
LXD uses `qemu` to provide the VM functionality.
-->
LXD は VM の機能を提供するために `qemu` を使います。

<!--
See [below](#launch-a-virtual-machine) for how to start a virtual machine.
-->
仮想マシンの起動方法は[後の説明](#_12)をご覧ください。

<!--
You can find more information about virtual machines in our forum[^1].
-->
仮想マシンについての詳細な情報はフォーラムでご覧いただけます[^1]。
<!-- You can find more information in the Advanced Guide. -->

!!! note "注意:"
	<!--
	For now virtual machines support less features than containers.     
    See [Advanced Guide - Instance configuration](/lxd/advanced-guide#difference-between-containers-and-virtual-machines) for details.
	-->
	現時点では、仮想マシンで使える機能はコンテナよりは少ないです。
	詳しくは [Advanced Guide - Instance configuration](/lxd/advanced-guide#difference-between-containers-and-virtual-machines) をご覧ください。
    {: .p-noteadm }

# LXD クライアント <!-- LXD-client -->
<!--
The LXD-client `lxc` is a command tool to manage your LXD servers.
-->
LXD クライアント `lxc` は LXD サーバーを管理するコマンドラインツールです。

## 概観 <!-- Overview -->
<!--
The following command will give you an overview of all available commands and options:
-->
次のコマンドで指定できるすべてのコマンドとオプションが概観できます。

	lxc

<!--
Use `lxc [command] --help` for more information about a command, like flags and further options.
-->
フラグやオプションなどについてのコマンドについてのより詳しい情報がほしい場合は `lxc [command] --help` を使用してください。

## インスタンスの起動 <!-- Launch an instance -->
<!--
You can launch an instance with command `lxc launch`:
-->
`lxc launch` コマンドでインスタンスが起動できます。

##### コンテナの起動 <!-- Launch a container -->
	
	lxc launch imageserver:imagename instancename	

##### 仮想マシンの起動 <!-- Launch a virtual machine -->
	
	lxc launch imageserver:imagename instancename --vm

<!--
Replace:
-->
前述のコマンド実行例は次のように置き換えます:

- `imageserver` はビルトインもしくはご自身で追加したイメージサーバーの名前です <!-- `imageserver` with the name of a built-in or added image server (e.g. `ubuntu` or `images`) and  -->
- `imagename` はイメージ名です（例: `20.04`、`debian/11`）。詳しくは[「イメージ」](#_14)の項をご覧ください <!-- `imagename` with the name of an image (e.g. `20.04` or `debian/11`).   See [Section "Images"](#images) for details. -->
- `instancename` は付けたいインスタンス名を指定します（例: `ubuntuone`）。指定しなければ LXD がランダムに名前を付けます　<!-- `instancename` with a name of your choice (e.g. `ubuntuone`), if left empty LXD will pick a random name. -->

### Ubuntu の例 <!-- Example for Ubuntu -->

	lxc launch ubuntu:20.04 ubuntuone

<!--
this will create a container based on the Ubuntu `Focal Fossa` Image (provided by LXD) with the instancename `ubuntuone`.
-->
これは（LXD が提供する） Ubuntu Focal Fossa イメージを使ってコンテナを作成します。インスタンス名は `ubuntuone` となります。


## インスタンスの設定 <!-- Configuration of instances -->
<!--
See [Advanced Guide - Instance Configuration](/lxd/advanced-guide#configuration-of-instances).
-->
[Advanced Guide - Instance Configuration](/lxd/advanced-guide#configuration-of-instances) をご覧ください。


## イメージ <!-- Images -->
<!--
Instances are based on Images, which contain a basic operating system (for example a linux distribution) and some other LXD-related information.
-->
インスタンスはイメージをベースにしています。これは基本的なオペレーティングシステム（例えば Linux ディストリビューション）と LXD に関係する情報を含んでいます。

<!--
In the following we will use the built-in remote image servers ([see below](#use-remote-image-servers)).
-->
次でビルトインイメージーサーバーを使った例を紹介します（[後述](#_15)）。

<!--
For more options see [Advanced Guide - Advanced options for Images](/lxd/advanced-guide#advanced-options-for-images).
-->
さらなるオプションについては [Advanced Guide - Advanced options for Images](/lxd/advanced-guide#advanced-options-for-images) をご覧ください。

### リモートのイメージサーバーを使う <!-- Use remote image servers -->
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
- `cloud` というエイリアス
: ビルトインで `cloud-init` をサポートするイメージを指します（詳細は [Advanced Guide - Cloud-Init](/lxd/advanced-guide#cloud-init) と [cloud-init の公式文書](https://cloudinit.readthedocs.io/en/latest/) をご覧ください）

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

### 仮想マシンのイメージ <!-- Images for Virtual Machines -->
<!--
It is recommended to use the `cloud` variants of images (visible by the `cloud`-tag in their `ALIAS`).   
They include cloud-init and the LXD-agent.   
They also increase their size automatically and are tested daily.
-->
イメージの `cloud` バリアントを使うことをおすすめします（`ALIAS` の `cloud` タグで確認できます）。このようなイメージは LXD エージェントと cloud-init を含んでいます。また、サイズは自動的に大きくなり、毎日テストされています。

## インスタンスの管理 <!-- Instance management -->
<!--
List all Instances:
-->
すべてのインスタンスをリスト表示するには次のように実行します:

    lxc list

#### 起動・停止 <!-- Start/Stop -->
<!--
Start an instance:
-->
インスタンスを起動するには次のように実行します:

	lxc start instancename

<!--
Stop an instance:
-->
インスタンスを停止するには次のように実行します:

    lxc stop instancename

#### コンテナ内のシェル・ターミナル <!-- Shell/Terminal inside Container -->
<!--
Get a shell inside a container:
-->
コンテナ内のシェルを使うには次のように実行します:

    lxc exec instancename -- /bin/bash

<!--
By default you are logged in as root:
-->
デフォルトでは root でログインされた状態になります:

```bash
root@containername:~#

```

##### ユーザーとしてログインするには <!-- To login as a user instead, run: -->
<!--
**Note:** In many containers you need to create a user first.
-->
**注意:** 多数のコンテナでは、先にユーザーを作成する必要があります。

	lxc exec instancename -- su --login username

<!--
Exit the container shell, with:
-->
コンテナのシェルから抜けるには次のように実行します:

```bash
root@containername:~# exit

```

#### ホストのターミナルからコマンドを実行する <!-- Run Command from Host terminal -->
<!--
Run a single command from host's terminal:
-->
ホストのターミナルから単一のコマンドを実行するには次のように行います:

    lxc exec containername -- apt-get update

#### 仮想マシン内のシェル・ターミナル <!-- Shell/Terminal inside Virtual Machine -->
<!--
You can see your VM boot with:
-->
次のコマンドで VM のブートを見ることができます:

	lxc console instancename

<!--
(detach with ctrl+a-q)
-->
（コンソールから抜けるには ctrl+a-q）

<!--
Once booted, VMs with the LXD-agent built-in, can be accessed with:
-->
LXD エージェントビルトインの VM の場合は、ブート後は次のようにアクセスできます:

	lxc exec instancename bash

<!--
Exit the VM shell, with:
-->
VM のシェルから抜けるには:

	exit

#### ファイルやディレクトリをコンテナ〜ホスト間でコピーする <!-- Copy files and folders between container and host -->
##### インスタンスからホストへのコピー <!-- Copy from an instance to host -->

<!--
Pull a file with:
-->
ファイルを次のように pull します:

    lxc file pull instancename/path-in-container path-on-host

<!--
Pull a folder with:
-->
ディレクトリーは次のようにコピーします:

    lxc file pull -r instancename/path-in-container path-on-host

<!--
For example:
-->
例えば:
    
    lxc file pull instancename/etc/hosts .

##### ホストからインスタンスへのコピー <!-- Copy from host to instance -->

<!--
Push a file with:
-->
ファイルを次のように push します:

    lxc file push path-on-host instancename/path-in-container

<!--
Push a folder with:
-->
ディレクトリーは次のように push します:

    lxc file push -r path-on-host instancename/path-in-container

#### インスタンスの削除 <!-- Remove instance -->

!!! note "警告:"
	<!--
	This will delete the instance including all snapshots.   
	Deletion will be final in most cases and restore is unlikely!   
    See [Tips & Tricks in Advanced Guide](/lxd/advanced-guide/#prevent-accidental-deletion-of-an-instance) on how to avoid accidental deletion.
	-->
	次のコマンドはスナップショットもふくめてインスタンスを削除します。
	ほとんどのケースでは、完全に削除されてしまい、リストアすることはできません。
	うっかり削除するのを防ぐ方法については [Tips & Tricks in Advanced Guide](/lxd/advanced-guide/#prevent-accidental-deletion-of-an-instance) をご覧ください。
	{: .p-noteadm }

<!--
Use:
-->
次のように実行します:

    lxc delete instancename


# その他の情報とリンク <!-- Further Information & Links -->

<!--
You find more information on the following pages:
-->
次のページにさらに詳しい情報が掲載されています:

- [Advanced Guide](/lxd/advanced-guide)

- [LXD ドキュメント](https://lxd-ja.readthedocs.io/) （オリジナル: [LXD documentation](/lxd/docs/master/index)）
    - [セキュリティ](https://lxd-ja.readthedocs.io/ja/latest/security/) （オリジナル: [Security](/lxd/docs/master/security)）
    - [FAQ](https://lxd-ja.readthedocs.io/ja/latest/faq/) （オリジナル: [FAQ](/lxd/docs/master/faq)）

<!--
- [Forum](https://discuss.linuxcontainers.org/)
    - [Tutorials Section](https://discuss.linuxcontainers.org/c/tutorials)
-->
- [フォーラム](https://discuss.linuxcontainers.org/)
    - [チュートリアル](https://discuss.linuxcontainers.org/c/tutorials)
 
 <!-- footnotes -->

<!--
 [^1]: [Running virtual machines with lxd](https://discuss.linuxcontainers.org/t/running-virtual-machines-with-lxd-4-0/7519), including a short howto for a Microsoft Windows VM.
-->
 [^1]: [LXD で仮想マシンを実行する](https://discuss.linuxcontainers.org/t/running-virtual-machines-with-lxd-4-0/7519), Microsoft Windows VM 向けの簡単な HowTo を含みます
