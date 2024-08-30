[TOC]

# Incus とは? <!-- What is Incus? -->
<!--
Incus is a next generation system container and virtual machine manager. 
-->
Incus は、次世代のシステムコンテナと仮想マシンのマネージャーです。

<!--
It provides a user experience similar to that of a public cloud. With it, you can easily mix and match both containers and virtual machines, sharing the same underlying storage and network.
-->
Incus は、パブリッククラウドと同じようなユーザー体験を提供します。これにより、同じ基盤のストレージとネットワークを共有しながら、コンテナと仮想マシンの両方を簡単に組み合わせることができます。


<!--
Incus is image based and provides images for a [wide number of Linux distributions](https://images.linuxcontainers.org). It provides flexibility and scalability for various use cases, with support for different storage backends and network types and the option to install on hardware ranging from an individual laptop or cloud instance to a full server rack.
-->
Incus はイメージベースであり、広い範囲の [Linux ディストリビューション](https://images.linuxcontainers.org)のイメージを提供します。さまざまなストレージバックエンドやネットワークタイプをサポートし、個人のラップトップやクラウドインスタンスからフルサーバーラックまで、さまざまなハードウェアにインストールできる選択肢により、さまざまなユースケースに対応する柔軟性と拡張性を提供します。

<!--
When using Incus, you can manage your instances (containers and VMs) with a simple command line tool, directly through the REST API or by using third-party tools and integrations. Incus implements a single REST API for both local and remote access.
-->
Incus を使用すると、インスタンスをシンプルなコマンドラインツールを使ったり、直接 REST API を使ったり、サードパーティーのツールやインテグレーションを通したりして、インスタンスを管理できます。Incus は、ローカルとリモートのアクセス両方に単一の REST API を実装しています。

<!--
The Incus project [was created](/incus/announcement/) by Aleksa Sarai as a community driven alternative to Canonical's LXD.
Today, it's led and maintained by many of the same people that once created LXD.
-->
Incus プロジェクトは、Canonical の LXD に代わるコミュニティ主導の代替プロダクトとして、Aleksa Sarai により[作成されました](/ja/incus/announcement/)。

## はじめてみよう <!-- Get started -->
<!--
To get a better idea of what Incus is and what it does, you can [try it online](/incus/try-it/)!
-->
Incus が何で、Incus が何をするのかについてをよく理解するために、[オンラインで試す](/ja/incus/try-it/)ことができます！

<!--
Then if you want to run it locally, take a look at our [getting started guide](/incus/docs/main/tutorial/first_steps/).
-->
ローカルで Incus を実行したい場合は、[スタートガイド](https://incus-ja.readthedocs.io/ja/latest/tutorial/first_steps/)をご覧ください。

## コンテナと仮想マシン <!-- Containers and virtual machines -->
<!--
Incus provides support for system containers and virtual machines.
-->
Incus はシステムコンテナと仮想マシンへのサポートを提供します。

<!--
When running a system container, Incus simulates a virtual version of a full operating system. To do this, it uses the functionality provided by the kernel running on the host system.
-->
システムコンテナを実行している場合、Incus は完全なオペレーティングシステムの仮想バージョンをシミュレートします。このため、Incus はホストシステム上で実行されているカーネルが提供する機能を使います。

<!--
When running a virtual machine, Incus uses the hardware of the host system, but the kernel is provided by the virtual machine. Therefore, virtual machines can be used to run, for example, a different operating system.
-->
仮想マシンを実行する場合、Incus はホストシステムのハードウェアを使いますが、カーネルは仮想マシンが提供します。したがって、仮想マシンを使用して、たとえば、別のオペレーティングシステムを実行できます。

<!--
You can learn more about the differences between application containers, system containers and virtual machines in [our documentation](/incus/docs/main/explanation/containers_and_vms/).
-->
アプリケーションコンテナとシステムコンテナ、仮想マシンとの違いについては、[私たちのドキュメント](https://incus-ja.readthedocs.io/ja/latest/explanation/containers_and_vms/)で学べます。

# 機能 <!-- Features -->
<!--
Some of the biggest features of Incus are:
-->
Incusの最大の特徴は次の通りです:

<!--
Core API
: * [Secure by design](/incus/docs/main/security) (through unprivileged containers, resource restrictions, authentication, ...)
  * [Intuitive](/incus/docs/main/rest-api) (with a simple, clear API and crisp command line experience)
  * [Scalable](/incus/docs/main/clustering) (from containers on your laptop to clusters of thousands of compute nodes)
  * [Event based](/incus/docs/main/events) (providing logging, operation, and lifecycle events)
  * [Remote usage](/incus/docs/main/remotes) (same API used for local and network access)
  * [Project support](/incus/docs/main/projects) (as a way to compartmentalize sets of images and profiles)
-->
コア API
: * [安全な設計](https://incus-ja.readthedocs.io/ja/latest/security) （非特権コンテナ、リソース制限、認証などを通して）
  * [直感的](https://incus-ja.readthedocs.io/ja/latest/rest-api) （シンプルで明確な API、わかりやすいコマンドラインの使い心地）
  * [スケーラブル](https://incus-ja.readthedocs.io/ja/latest/clustering) （ラップトップから数千のコンピュートノードのクラスターまで）
  * [イベントベース](https://incus-ja.readthedocs.io/ja/latest/events) （ロギング、操作、ライフサイクルイベントの提供）
  * [リモートからの使用](https://incus-ja.readthedocs.io/ja/latest/remotes) （ローカルとネットワークアクセスで同じ API）
  * [プロジェクト機能のサポート](https://incus-ja.readthedocs.io/ja/latest/projects) （イメージとプロファイルの組を区分けする方法として）

<!--
Instances and profiles
: * [Image based](https://images.linuxcontainers.org) (with images for a wide variety of Linux distributions, published daily)
  * [Instances](/incus/docs/main/instances) (containers and virtual-machines)
  * [Configurable through profiles](/incus/docs/main/profiles) (applicable to both containers and virtual machines)
-->
インスタンスとプロファイル
: * [イメージベース](https://images.linuxcontainers.org) （さまざまな Linux ディストリビューションのイメージを毎日公開）
  * [インスタンス](/incus/docs/main/instances) （コンテナと仮想マシン）
  * [プロファイルを通した設定](/incus/docs/main/profiles) （コンテナと仮想マシンの両方に適用可能）

<!--
Backup and export
: * [Backup and recovery](/incus/docs/main/backup) (for all objects managed by Incus)
  * [Snapshots](/incus/docs/main/reference/instance_options/#snapshot-scheduling-and-configuration) (to save and restore the state of an instance)
  * [Container and image transfer](/incus/docs/main/image-handling) (between different hosts, using images)
  * [Instance migration](/incus/docs/main/migration) (importing existing instances or transferring them between servers)
-->
バックアップとエクスポート
: * [バックアップとリカバリー](https://incus-ja.readthedocs.io/ja/latest/backup) （Incus が管理するすべてのオブジェクト）
  * [スナップショット](https://incus-ja.readthedocs.io/ja/latest/reference/instance_options/#snapshot-scheduling-and-configuration) （インスタンスの状態を保存し、復元するために）
  * [コンテナとイメージの転送](https://incus-ja.readthedocs.io/ja/latest/image-handling) （イメージを使用し、異なるホスト間で）
  * [インスタンスのマイグレーション](https://incus-ja.readthedocs.io/ja/latest/migration) （既存のインスタンスのインポート、サーバー間でのインスタンスの転送）

<!--
Configurability
: * [Multiple storage backends](/incus/docs/main/explanation/storage/) (with configurable storage pools and storage volumes)
  * [Network management](/incus/docs/main/explanation/networks/) (including bridge creation and configuration, cross-host tunnels, ...)
  * [Advanced resource control](/incus/docs/main/reference/instance_options/#resource-limits) (CPU, memory, network I/O, block I/O, disk usage and kernel resources)
  * [Device passthrough](/incus/docs/main/reference/devices/) (USB, GPU, unix character and block devices, NICs, disks and paths)
-->
設定可能であること
: * [複数のストレージバックエンド](https://incus-ja.readthedocs.io/ja/latest/explanation/storage/) （設定可能なストレージプールとストレージボリューム）
  * [ネットワークの管理](https://incus-ja.readthedocs.io/ja/latest/explanation/networks/) （ブリッジの作成、設定、ホスト間のトンネルなど）
  * [高度なリソース制御](https://incus-ja.readthedocs.io/ja/latest/reference/instance_options/#resource-limits) （CPU、メモリー、ネットワーク I/O、ブロック I/O、ディスク使用率、カーネルリソース）
  * [デバイスパススルー](https://incus-ja.readthedocs.io/ja/latest/reference/devices/) （USB、GPU、UNIX キャラクターデバイス・ブロックデバイス、NIC、ディスク、パス）


# 可用性 <!-- Availability -->
<!--
Incus works on any recent Linux distribution.
-->
Incus は最近の Linux ディストリビューションで動きます。

<!--
Incus upstream doesn't directly provide packages, but packages are available in a number of distributions or can be found in 3rd party repositories.
-->
Incus の開発元は、直接パッケージを提供しません。しかし、パッケージは多くのディストリビューションで利用可能であり、またサードパーティーのリポジトリーから入手できます。

<!--
For Debian and Ubuntu users, we recommend the [packages provided by Zabbly](https://github.com/zabbly/incus).
-->
Debian と Ubuntu のユーザーは、[Zabbly が提供するパッケージ](https://github.com/zabbly/incus)をおすすめします。

<!--
In addition, the Incus client is available for Windows and macOS. You can use the client to connect to an Incus server running on a Linux machine.
-->
さらに、Incus クライアントは Windows と macOS で利用できます。クライアントを使い、Linux マシン上で動く Incus サーバーに接続できます。

<!--
Current installation instructions can be found in our [installation guide](/incus/docs/main/installing/).
-->
現時点のインストール手順については[インストールガイド](https://incus-ja.readthedocs.io/ja/latest/installing/)をご覧ください。

# サポート <!-- Support -->
<!--
Incus has two kind of releases:
-->
Incus には 2 種類のリリースがあります:

 * LTS リリース <!-- LTS releases -->
 * フィーチャーリリース <!-- Feature releases -->

<!--
The current LTS release is Incus 6.0 and is supported until June 2029.
-->
現時点の LTS リリースは Incus 6.0 であり、2029 年 6 月までサポートされます。

<!--
Feature releases are pushed out every month or so and contain new features as well as bugfixes.
The normal support length for those releases is of about a month, or until the next release comes out. 
Some Linux distributions might offer longer support for particular feature releases that they decided to ship.
-->
フィーチャーリリースは、毎月リリースされ、新機能とバグ修正が含まれています。
フィーチャーリリースに対する通常のサポート期間は約 1 ヶ月、もしくは次のリリースがリリースされるまでです。
一部のディストリビューションでは、出荷を決定した特定のフィーチャーリリースに対して、より長いサポートが提供される場合もあります。

<!--
Commercial support for Incus can be obtained from [Zabbly](https://zabbly.com/incus).
-->
Incus の商用サポートは [Zabbly](https://zabbly.com/incus) から得られます。

# 言語、ライセンス、貢献 <!-- Language, licensing and contributions -->
<!--
Incus is written in Go. It is free software and developed under the [Apache 2 license](https://www.apache.org/licenses/LICENSE-2.0).
-->
Incus は Go で書かれています。フリーソフトウェアであり、[Apache 2 ライセンス](https://www.apache.org/licenses/LICENSE-2.0)のもとで開発されています。

<!--
The Incus source code is available on [GitHub](https://github.com/lxc/incus).
-->
Incus のソースコードは [GitHub](https://github.com/lxc/incus) 上にあります。

<!--
There are no CLA or similar legal agreements required to contribute to Incus. However, we require commits be signed-off (following the DCO - Developer Certificate of Ownership). See the [Contribution guidelines](/incus/docs/main/contributing/) for more information.
-->
Incus に貢献するための CLA や、同様の法的同意はありません。ただし、コミットは Signed-off（the DCO - Developer Certificate of Ownership に従う）する必要があります。詳しくは[コントリビューションガイド](https://incus-ja.readthedocs.io/ja/latest/contributing/)をご覧ください。

[<img src="/static/img/GitHub_Logo.png" alt="GitHub logo" style="display:block;float:none;margin-left:auto;margin-right:auto;padding:1em 0;max-height:120px"/>](https://github.com/lxc/incus)
******
