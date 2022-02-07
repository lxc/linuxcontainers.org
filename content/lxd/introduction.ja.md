[TOC]

# LXD とは? <!-- What's LXD? -->
<!--
LXD (<a href="#" title="Listen" onclick="document.getElementById('player').play();return false;">[lɛks'di:]&#128264;</a>) is a next generation system container and virtual machine manager. It offers a unified user experience around full Linux systems running inside containers or virtual machines.
-->
LXD（<a href="#" title="Listen" onclick="document.getElementById('player').play();return false;">[lɛks'di:]&#128264;</a>）は次世代のシステムコンテナおよび仮想マシンのマネージャーです。コンテナや仮想マシン内部で実行される完全な Linux システムに対する共通の使い勝手や操作感を提供します。

<!--
LXD is image based and provides images for a [wide number of Linux distributions](https://images.linuxcontainers.org). It provides flexibility and scalability for various use cases, with support for different storage backends and network types and the option to install on hardware ranging from an individual laptop or cloud instance to a full server rack.
-->
LXD は、[多数の Linux ディストリビューション](https://images.linuxcontainers.org)が利用できる、あらかじめビルドされたイメージをベースとしています。さまざまなタイプのストレージバックエンドやネットワークをサポートし、個人のラップトップやクラウドインスタンスからサーバーラック上のハードウェアまで、様々なハードウェアにインストールでき、色々なユースケースに対応する柔軟性と拡張性を備えています。

<!--
When using LXD, you can manage your instances (containers and VMs) with a simple command line tool, directly through the REST API or by using third-party tools and integrations. LXD implements a single REST API for both local and remote access.
-->
LXD を使うと、シンプルなコマンドラインツールや REST API を直接使ったり、サードパーティーのツールやインテグレーションを使ったりして、コンテナや仮想マシンといったインスタンスを管理できます。LXD はローカルとリモートからアクセスするための単一の REST API を実装しています。

<!--
The LXD project was founded and is currently led by [Canonical Ltd](https://www.canonical.com) with contributions from a range of other companies and individual contributors.
-->
LXD プロジェクトは [Canonical Ltd](http://www.canonical.com) によって設立され、現在は様々な企業や個人のコントリビュータの貢献のもとで [Canonical Ltd](http://www.canonical.com) が主導しています。

## LXD を始めてみましょう <!-- Get started -->

<!--
To get a better idea of what LXD is and what it does, you can [try it online](/lxd/try-it/)!
-->
LXD とは何か? 何ができるのか? についてのより良いイメージを得るために、[オンラインでの試用](/ja/lxd/try-it/)を試してみてください!

<!--
Then if you want to run it locally, take a look at our [getting started guide](/lxd/getting-started-cli/). The following clip gives a quick and easy introduction for standard use cases:
-->
そして、ローカルで動作させたい場合は、[LXDを使い始めるには](/ja/lxd/getting-started-cli/)というページをご覧になってください。次の動画では、一般的なユースケースに対する簡単な使用例を紹介しています:

<div class="u-hide--small">
 <script id="asciicast-226224" src="https://asciinema.org/a/226224.js" async></script>
</div>
<div class="u-hide--medium u-hide--large">
 <a href="https://asciinema.org/a/226224" target="_blank"><img src="https://asciinema.org/a/226224.svg" alt="Installation and getting started"></a>
</div>

<!--
You can find a series of howtos and tutorials on YouTube:
-->
YouTube で HowTo やチュートリアルをご覧になることもできます:

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLddduKsl-KEhleT9VTR4hbtlNdtMr6cFd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## コンテナと仮想マシン <!-- Containers and virtual machines -->
<!--
LXD provides support for system containers and virtual machines.
-->
LXD はシステムコンテナと仮想マシンをサポートします。

<!--
When running a system container, LXD simulates a virtual version of a full operating system. To do this, it uses the functionality provided by the kernel running on the host system.
-->
システムコンテナを実行するとき、LXD は完全なオペレーティングシステムを仮想的にシミュレートします。これを行うために、LXD はホストシステム上で動作しているカーネルが提供している機能を使います。

<!--
When running a virtual machine, LXD uses the hardware of the host system, but the kernel is provided by the virtual machine. Therefore, virtual machines can be used to run, for example, a different operating system.
-->
仮想マシンを実行するとき、LXD はホストシステムのハードウェアを使いますが、カーネルは仮想マシンが提供します。そのため、例えば仮想マシンでは異なるオペレーティングシステムを実行することに使えます。

### アプリケーションコンテナ vs. システムコンテナ <!-- Application containers vs. system containers -->
<!--
Application containers (as provided by, for example, Docker or Kubernetes) package a single process or application. System containers, on the other hand, simulate a full operating system and let you run multiple processes at the same time.
-->
例えば、Docker や Kubernetes が提供するようなアプリケーションコンテナは、単一のプロセスやアプリケーションをパッケージ化します。一方、システムコンテナは完全なオペレーティングシステムをシミュレートし、同時に複数のプロセスが実行できます。

<!--
Therefore, application containers are suitable to provide separate components, while system containers provide a full solution of libraries, applications, databases and so on. In addition, you can use system containers to create different user spaces and isolate all processes belonging to each user space, which is not what application containers are intended for.
-->
そのため、アプリケーションコンテナは個別のコンポーネントを提供するのに適しています。一方、システムコンテナはライブラリー、アプリケーション、データベースなどの完全なソリューションを提供します。加えて、システムコンテナを使って、異なるユーザースペースを作成し、それぞれのユーザースペースに属するすべてのプロセスを隔離できます。これはアプリケーションコンテナが意図するところではありません。

![Application and system containers](/static/img/lxd/application-vs-system-containers.svg "Application and system containers")

### 仮想マシン vs. システムコンテナ <!-- Virtual machines vs. system containers -->
<!--
Virtual machines emulate a physical machine, using the hardware of the host system from a full and completely isolated operating system. System containers, on the other hand, use the OS kernel of the host system instead of creating their own environment. If you run several system containers, they all share the same kernel, which makes them faster and more light-weight than virtual machines.
-->
仮想マシンは、完全に分離したオペレーティングシステムから、ホストシステムのハードウェアを使って物理マシンをエミュレートします。一方でシステムコンテナは、自身の環境を作る代わりにホストシステムの OS のカーネルを使います。いくつかのシステムコンテナを実行する場合、それらのコンテナはすべて同じカーネルを共有します。これにより、仮想マシンとくらべてより速く、より軽量になります。

<!--
With LXD, you can create both system containers and virtual machines. You should use a system container to leverage the smaller size and increased performance if all functionality you require is compatible with the kernel of your host operating system. If you need functionality that is not supported by the OS kernel of your host system or you want to run a completely different OS, use a virtual machine.
-->
LXD では、システムコンテナと仮想マシンの両方を作成できます。ホストのオペレーティングシステムのカーネルが、必要とするすべての機能に対応している場合、より小さいサイズとパフォーマンスの向上を達成するためにシステムコンテナを使うと良いでしょう。ホストシステムのカーネルがサポートしていない機能が必要だったり、完全に異なる OS を実行したい場合は、仮想マシンを使うと良いでしょう。

![Virtual machines and system containers](/static/img/lxd/virtual-machines-vs-system-containers.svg "Virtual machines and system containers")

# 機能 <!-- Features -->
<!--
Some of the biggest features of LXD are:
-->
LXD の最も大きな特徴は次の通りです（訳注: 日本語翻訳版がある場合はそちらに移動します。オリジナルを見たい場合は「原文」リンクをクリックしてください）:

<!--
Core API
: * [Secure by design](https://linuxcontainers.org/lxd/docs/master/security) (through unprivileged containers, resource restrictions, authentication, ...)
  * [Intuitive](https://linuxcontainers.org/lxd/docs/master/rest-api) (with a simple, clear API and crisp command line experience)
  * [Scalable](https://linuxcontainers.org/lxd/docs/master/clustering) (from containers on your laptop to clusters of thousands of compute nodes)
  * [Event based](https://linuxcontainers.org/lxd/docs/master/events) (providing logging, operation, and lifecycle events)
  * [Remote usage](https://linuxcontainers.org/lxd/docs/master/remotes) (same API used for local and network access)
  * [Project support](https://linuxcontainers.org/lxd/docs/master/projects) (as a way to compartmentalize sets of images and profiles)
-->
コア API
: * [セキュアなデザイン](https://lxd-ja.readthedocs.io/ja/latest/security/)（[原文](https://linuxcontainers.org/lxd/docs/master/security)）（非特権コンテナ、リソース制限、認証などを通して）
  * [直感的で使いやすい](https://lxd-ja.readthedocs.io/ja/latest/rest-api/)（[原文](https://linuxcontainers.org/lxd/docs/master/rest-api)）（シンプルで明快な API、わかりやすいコマンドライン操作）
  * [スケーラブル](https://lxd-ja.readthedocs.io/ja/latest/clustering/)（[原文](https://linuxcontainers.org/lxd/docs/master/clustering)）（ノート PC 上のコンテナから数千のコンピュートノード上のクラスターまで）
  * [イベントベース](https://lxd-ja.readthedocs.io/ja/latest/events/)（[原文](https://linuxcontainers.org/lxd/docs/master/events)）（ロギング、操作、ライフサイクルイベントの提供）
  * [リモート操作](https://lxd-ja.readthedocs.io/ja/latest/remotes/)（[原文](https://linuxcontainers.org/lxd/docs/master/remotes)）（ローカルアクセスでもネットワークアクセスでも同じ API）
  * [プロジェクトサポート](https://lxd-ja.readthedocs.io/ja/latest/projects/)（[原文](https://linuxcontainers.org/lxd/docs/master/projects)）（イメージやプロファイルのセットを区切る方法として）

<!--
Instances and profiles
: * [Image based](https://images.linuxcontainers.org) (with images for a wide variety of Linux distributions, published daily)
  * [Containers](https://linuxcontainers.org/lxd/docs/master/containers) (the most complete implementation of LXD instances)
  * [Virtual machines](https://linuxcontainers.org/lxd/docs/master/virtual-machines) (implemented through the use of qemu)
  * [Configurable through profiles](https://linuxcontainers.org/lxd/docs/master/profiles) (applicable to both containers and virtual machines)
-->
インスタンスとプロファイル
: * [イメージベース](https://images.linuxcontainers.org) （毎日作成される広範囲のディストリビューションのイメージ）
  * [コンテナ](https://lxd-ja.readthedocs.io/ja/latest/containers/)（[原文](https://linuxcontainers.org/lxd/docs/master/containers)）（LXD インスタンスの最も完全な実装）
  * [仮想マシン](https://lxd-ja.readthedocs.io/ja/latest/virtual-machines/)（[原文](https://linuxcontainers.org/lxd/docs/master/virtual-machines)）（qemu を使った実装）
  * [プロファイル経由の設定](https://lxd-ja.readthedocs.io/ja/latest/profiles/)（[原文](https://linuxcontainers.org/lxd/docs/master/profiles)）（コンテナと仮想マシンの両方に適用可能）

<!--
Backup and export
: * [Backup and recovery](https://linuxcontainers.org/lxd/docs/master/backup) (for all objects managed by LXD)
  * [Snapshots](https://linuxcontainers.org/lxd/docs/master/instances#snapshot-scheduling) (to save and restore the state of an instance)
  * [Container and image transfer](https://linuxcontainers.org/lxd/docs/master/image-handling) (between different hosts, using images)
  * [Live migration](https://linuxcontainers.org/lxd/docs/master/migration) (using CRIU)
-->
バックアップとエクスポート
: * [バックアップとリカバリー](https://lxd-ja.readthedocs.io/ja/latest/backup/)（[原文](https://linuxcontainers.org/lxd/docs/master/backup)）（LXD が管理するすべてのオブジェクトに対して）
  * [スナップショット](https://lxd-ja.readthedocs.io/ja/latest/instances/#_7)（[原文](https://linuxcontainers.org/lxd/docs/master/instances#snapshot-scheduling)）（インスタンスの状態の保存とリストア）
  * [コンテナとイメージの転送](https://lxd-ja.readthedocs.io/ja/latest/image-handling/)（[原文](https://linuxcontainers.org/lxd/docs/master/image-handling)）（イメージを使い、異なるホスト間で）
  * [ライブマイグレーション](https://lxd-ja.readthedocs.io/ja/latest/migration/)（[原文](https://linuxcontainers.org/lxd/docs/master/migration)） （CRIUを使用）

<!--
Configurability
: * [Multiple storage backends](https://linuxcontainers.org/lxd/docs/master/storage) (with configurable storage pools and storage volumes)
  * [Network management](https://linuxcontainers.org/lxd/docs/master/networks) (including bridge creation and configuration, cross-host tunnels, ...)
  * [Advanced resource control](https://linuxcontainers.org/lxd/docs/master/instances#resource-limits-via-) (CPU, memory, network I/O, block I/O, disk usage and kernel resources)
  * [Device passthrough](https://linuxcontainers.org/lxd/docs/master/container-environment) (USB, GPU, unix character and block devices, NICs, disks and paths)
-->
設定が可能であること
: * [複数のストレージバックエンド](https://lxd-ja.readthedocs.io/ja/latest/storage/)（[原文](https://linuxcontainers.org/lxd/docs/master/storage)）（設定可能なストレージプールとストレージボリューム）
  * [ネットワーク管理](https://lxd-ja.readthedocs.io/ja/latest/networks/)（[原文](https://linuxcontainers.org/lxd/docs/master/networks)）（ブリッジの作成、設定、ホスト間トンネルなどを含む）
  * [高度なリソース制御](https://lxd-ja.readthedocs.io/ja/latest/instances/#limitskernellimit-name-limitskernellimit-name-)（[原文](https://linuxcontainers.org/lxd/docs/master/instances#resource-limits-via-)）（CPU、メモリー、ネットワーク I/O、ブロック I/O、ディスク使用量、カーネルリソース）
  * [デバイスパススルー](https://lxd-ja.readthedocs.io/ja/latest/container-environment/)（[原文](https://linuxcontainers.org/lxd/docs/master/container-environment)）（USB、GPU、UNIX キャラクター・ブロックデバイス、NIC、ディスク、パス）


# 可用性 <!-- Availability -->
<!--
LXD works on any recent Linux distribution. LXD upstream directly maintains the Ubuntu packages and also publishes a snap package which can be used with most of the popular Linux distributions.
-->
LXD は最近のあらゆる Linux ディストリビューションで動作します。LXD の開発元では Ubuntu パッケージを直接メンテナンスし、さらに主要な Linux ディストリビューションのほとんどで使える snap パッケージも公開しています。

<!--
In addition, the LXD client is available for Windows and macOS. You can use the client to connect to a LXD server running on a Linux machine.
-->
それに加えて、LXD クライアントは Windows と macOS でも利用できます。Linux マシンで動作している LXD サーバーに接続する際にこのクライアントが使えます。

<!--
More details can be found on our [getting started](/lxd/getting-started-cli/) page.
-->
さらに詳しい情報を見たい場合は、[LXD を使い始めるには](/ja/lxd/getting-started-cli/)ページをご覧ください。

[<img src="/static/img/snapstore.svg" alt="Snapstore logo" style="max-height:120px;max-width:200px;padding:0 2em;"/>](https://snapcraft.io/store) [<img src="/static/img/chocolatey.svg" alt="Chocolatey logo" style="max-height:120px;max-width:200px;padding:0 2em;"/>](https://chocolatey.org/) [<img src="/static/img/homebrew.png" alt="Homebrew logo" style="max-height:120px;max-width:200px;padding:0 2em;"/>](https://brew.sh/)

# サードパーティーツールとのインテグレーション <!-- Third-party integrations -->
<!--
LXD can also be used with other platforms and tools, like Ansible, Juju, MAAS, Terraform and more.
-->
LXD は Ansible、Juju、Terraform などの他のプラットフォームやツールと一緒に使うこともできます。

<!--
See the [Third-party integrations](/lxd/third-party-integrations/) page for details.
-->
[サードパーティーツールとのインテグレーション](/ja/lxd/third-party-integrations/)ページで詳細をご覧いただけます。

# サポート <!-- Support -->
<!--
LXD has two kind of releases:
-->
LXD には二種類のリリースがあります:

 * LTS リリース <!-- LTS releases -->
 * Feature (新機能) リリース <!-- Feature releases -->

<!--
The current LTS release is LXD 4.0, which is supported until June 2025 and gets frequent bugfix and security updates but does not receive any feature additions.
-->
現在の LTS は LXD 4.0 で、2025 年 6 月までサポートされます。LTS ではバグフィックスとセキュリティアップデートを受けられますが、機能の追加は行われません。

<!--
Feature releases are pushed out every month or so and contain new features as well as bugfixes. The normal support length for those releases is of about a month, or until the next release comes out. Some Linux distributions might offer longer support for particular feature releases that they decided to ship.
-->
Feature リリースは毎月リリースされ、バグフィックスと新機能が含まれています。通常のサポート期間は約一ヶ月か、次のリリースが行われるまでです。ディストリビューションによっては、自身がリリースした特定の Feature リリースについては、より長いサポートを提供するかもしれません。

<!--
Commercial support for LXD on Ubuntu LTS releases can be obtained from [Canonical Ltd](http://www.canonical.com).
-->
Ubuntu LTS リリースに含まれる LXD に対する商用サポートは [Canonical Ltd](http://www.canonical.com) から受けることができます。

[<img src="/static/img/canonical.png" alt="Canonical logo" style="display:block;float:none;margin-left:auto;margin-right:auto;padding:1em 0;max-height:120px"/>](http://www.canonical.com)

# LXC との関係 <!-- Relationship with LXC -->
<!--
LXD isn't a rewrite of LXC, in fact it's building on top of LXC to provide a new, better user experience. Under the hood, LXD uses LXC through liblxc and its Go binding to create and manage the containers.
-->
LXD は LXC の書き直しではありません。実際 LXD は新しい、より良いユーザ体験を提供するために LXC 上で構築されています。LXD はコンテナを作成したり管理したりするために liblxc とその Go バインディングを通して LXC を利用しています。

<!--
It's basically an alternative to LXC's tools and distribution template system with the added features that come from being controllable over the network.
-->
LXD は基本的には LXC ツールとディストリビューションテンプレートの仕組みの代わりとなる新しいもので、ネットワーク経由でコントロールできる特長を追加したものです。

# 言語、ライセンス、コントリビューション <!-- Language, licensing and contributions -->
<!--
LXD is written in Go. It is free software and developed under the [Apache 2 license](https://www.apache.org/licenses/LICENSE-2.0).
-->
LXD は Go で書かれています。フリーソフトウェアであり、[Apache 2 ライセンス](https://www.apache.org/licenses/LICENSE-2.0)のもとで開発されています。

<!--
The LXD source code is available on [GitHub](https://github.com/lxc/lxd).
-->
LXD のソースコードは [GitHub](https://github.com/lxc/lxd) 上で公開されています。

<!--
There are no CLA or similar legal agreements required to contribute to LXD. However, we require commits be signed-off (following the DCO - Developer Certificate of Ownership). See the [Contribution guidelines](https://github.com/lxc/lxd/blob/master/doc/contributing.md) for more information.
-->
LXD に貢献するのに必要な CLA や同様の法的合意はありません。しかし、コミットを signed-off する必要があります (DCO - Developer Certificate of Ownership に従います)。詳しくは[コントリビュート](https://lxd-ja.readthedocs.io/ja/latest/contributing/)（[原文](https://github.com/lxc/lxd/blob/master/doc/contributing.md)）をご覧ください。

[<img src="/static/img/GitHub_Logo.png" alt="GitHub logo" style="display:block;float:none;margin-left:auto;margin-right:auto;padding:1em 0;max-height:120px"/>](https://github.com/lxc/lxd)

<audio id="player">  <source src="/static/audio/lxd.mp3" type="audio/mpeg">  <source src="/static/audio/lxd.ogg" type="audio/ogg">  <source src="/static/audio/lxd.wav" type="audio/wav"></audio>
