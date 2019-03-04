

# LXD とは? <!-- What's LXD? -->
<!--
LXD is a next generation system container manager.
It offers a user experience similar to virtual machines but using Linux containers instead.
-->
LXD は次世代のシステムコンテナマネージャです。
仮想マシンと同じようなユーザ体験を提供しますが、仮想マシンではなく Linux コンテナを使います。

<!--
It's image based with pre-made images available for a [wide number of Linux distributions](https://images.linuxcontainers.org)
and is built around a very powerful, yet pretty simple, REST API.
-->
LXD は、[多数の Linux ディストリビューション](https://images.linuxcontainers.org)が利用できる、あらかじめビルドされたイメージをベースとしています。そして、とてもパワフルでありながら、とてもシンプルな REST API を中心に構成されています。

<!--
To get a better idea of what LXD is and what it does, you can [try it online](/lxd/try-it/)!
Then if you want to run it locally, take a look at our [getting started guide](/lxd/getting-started-cli/).
-->
LXD がどのようなもので、何ができるのかをよく理解するために、[オンラインで使ってみる](/ja/lxd/try-it/)ことができます!
さらに、LXD をローカルで実行したい場合は、[「はじめに」](/ja/lxd/getting-started-cli/) のページをご覧ください。

<!--
The LXD project was founded and is currently led by [Canonical Ltd](https://www.canonical.com)
with contributions from a range of other companies and individual contributors.
-->
LXD プロジェクトは [Canonical Ltd](http://www.canonical.com) によって設立され、現在は様々な企業や個人のコントリビュータの貢献のもとで [Canonical Ltd](http://www.canonical.com) が主導しています。

# デザイン <!-- Design -->
<!--
The core of LXD is a privileged daemon which exposes a REST API over a local unix socket
as well as over the network (if enabled).
-->
LXD のコアは、ローカルの UNIX ソケットとネットワーク経由 (有効になっている場合) で REST API を提供する特権デーモンです。

<!--
Clients, such as the command line tool provided with LXD itself then do everything through that REST API.
It means that whether you're talking to your local host or a remote server, everything works the same way.
-->
LXD に付属するコマンドラインツールのようなクライアントは、この REST API を通してすべての操作を行います。
つまり、ローカルホストに対する操作であろうが、リモートサーバに対する操作であろうが、すべて同じように動作するということです。

# 機能<!-- Features -->
<!--
Some of the biggest features of LXD are:
-->
LXDの主要な特長には以下のようなものがあります:

 * セキュアなデザイン (非特権コンテナ、リソース制限、その他) <!-- Secure by design (unprivileged containers, resource restrictions and much more) -->
 * 拡張性 (あなたのラップトップ機から数千のコンピュートノードまで) <!-- Scalable (from containers on your laptop to thousand of compute nodes) -->
 * 直感的 (シンプルでクリアな API、きびきびしたコマンドライン体験) <!-- Intuitive (simple, clear API and crisp command line experience) -->
 * イメージをベースにしている (毎日ビルドされる多数の Linux ディストリビューションのイメージ) <!-- Image based (with a wide variety of Linux distributions published daily) -->
 * ホストをまたいだコンテナやイメージの転送 (CRIU を使ったライブマイグレーションを含む) <!-- Support for Cross-host container and image transfer (including live migration with CRIU) -->
 * 高度なリソースコントロール (cpu、メモリ、ネットワーク I/O、ブロック I/O、ディスク使用量、カーネルリソース) <!-- Advanced resource control (cpu, memory, network I/O, block I/O, disk usage and kernel resources) -->
 * デバイスパススルー (USB、GPU、キャラクタデバイス、ブロックデバイス、NIC、ディスク、パス) <!-- Device passthrough (USB, GPU, unix character and block devices, NICs, disks and paths) -->
 * ネットワーク管理 (ブリッジの作成と設定、ホスト間のトンネルなど)<!-- Network management (bridge creation and configuration, cross-host tunnels, ...) -->
 * ストレージ管理 (複数のストレージバックエンド、ストレージプール、ストレージボリュームのサポート) <!-- Storage management (support for multiple storage backends, storage pools and storage volumes) -->

# OpenNebula との統合 <!-- Integration with OpenNebula -->

<!--
Starting from [OpenNebula EDGE](https://opennebula.org/get-your-hands-on-v-5-8-edge/) this cloud management platform packs official drivers to manage LXD compute nodes.
-->
[OpenNebula EDGE](https://opennebula.org/get-your-hands-on-v-5-8-edge/) から、OpenNebula では LXD コンピュートノードを管理するためのオフィシャルなドライバを同梱するようになりました。

主な機能 <!-- Key features-->:

* **qcow2 形式イメージのコンテナ**と通常の KVM 形式のイメージのコンテナを有効にしており、ユーザーが自身の作業をデプロイする際の柔軟性を高めています <!-- **Enables **qcow2 backed containers** and regular KVM-like images, giving users more flexibility when deploying their workloads -->
* snap でインストールした LXD ノードのサポート <!-- Support for snap installed LXD nodes. -->
* 全仮想ノード（KVM と LXD の両方）で共有される Ceph ストレージプール <!-- Ceph storage pools shared across all virtualization nodes (both KVM and LXD) -->
* マーケットプレイス風でのシームレスな LXD 公開イメージサーバーの統合。[LXD 公開イメージサーバー](https://images.linuxcontainers.org)、[TurnkeyLinux](https://www.turnkeylinux.org)、[OpenNebula marketplace](https://marketplace.opennebula.systems/appliance) をサポート <!-- Seamless LXD public image servers integration in a marketplace-like style. Supports [LXD public image server](https://images.linuxcontainers.org),  [TurnkeyLinux](https://www.turnkeylinux.org) and also the [OpenNebula marketplace](https://marketplace.opennebula.systems/appliance) -->
* オートスケーリングによる [複数コンテナによるサービスデプロイメント](https://docs.opennebula.org/5.8/advanced_components/application_flow_and_auto-scaling/overview.html) <!-- [Multi-container services deployment](https://docs.opennebula.org/5.8/advanced_components/application_flow_and_auto-scaling/overview.html) with auto-scaling. -->
* KVM、LXD、VMWare vCenter といった異なったハイパーバイザーを同じクラウドオーケストレーションシステムから管理 <!-- Heterogeneous hypervisors cloud deployments with KVM, LXD and VMWare vCenter managed by the same cloud orchestration system -->

<!--
You can check more about the integration in the [OpenNebula doc](http://docs.opennebula.org/5.8/deployment/open_cloud_host_setup/lxd_driver.html)
-->
[OpenNebula のドキュメント](http://docs.opennebula.org/5.8/deployment/open_cloud_host_setup/lxd_driver.html) でこの統合についてもっと調べることができます。

# OpenStack との統合 <!-- Integration with OpenStack -->
<!--
The "nova-lxd" project provides an OpenStack Nova plugin that seemlessly integrates
system containers into a regular OpenStack deployment.
-->
"nova-lxd" プロジェクトが提供する OpenStack Nova プラグインは、システムコンテナを通常の OpenStack のデプロイメントにシームレスに統合します。

<!--
With this, users will either get a virtual machine or a container, simply depending on what image or
instance type they select. It's completely transparent and works with the regular OpenStack APIs.
-->
これにより、ユーザは選択したイメージまたはインスタンスタイプに応じて、仮想マシンまたはコンテナが得られます。完全に透過的で、通常の OpenStack API で動作します。

<!--
To learn more about LXD and OpenStack, take a look at our [getting started with OpenStack](/lxd/getting-started-openstack/) page.
-->
LXD と OpenStack について更に知りたい場合は、[「はじめに - OpenStack」](/ja/lxd/getting-started-openstack/) をご覧ください。

# 可用性 <!-- Availability -->
<!--
LXD works on any recent Linux distribution. LXD upstream directly maintains the Ubuntu packages
and also publishes a snap package which can be used with most of the popular Linux distributions.
-->
LXD は最近の Linux ディストリビューションで動作します。LXD 開発元は、直接 Ubuntu のパッケージのメンテナンスを行っています。そして、主要な Linux ディストリビューションのほとんどで使える snap パッケージのリリースも行っています。

<!--
More details can be found on our [getting started](/lxd/getting-started-cli/) page.
-->
さらに詳しく知りたい場合は [「はじめに」](/ja/lxd/getting-started-cli/) をご覧ください。

# LXC との関係 <!-- Relationship with LXC -->
<!--
LXD isn't a rewrite of LXC, in fact it's building on top of LXC to provide a new,
better user experience. Under the hood, LXD uses LXC through liblxc and its Go binding
to create and manage the containers.
-->
LXD は LXC の書き直しではありません。実際 LXD は新しい、より良いユーザ体験を提供するために LXC 上で構築されています。
LXD はコンテナを作成したり管理したりするために liblxc とその Go バインディングを通して LXC を利用しています。

<!--
It's basically an alternative to LXC's tools and distribution template system
with the added features that come from being controllable over the network.
-->
LXD は基本的には LXC ツールとディストリビューションテンプレートの仕組みの代わりとなる新しいもので、ネットワーク経由でコントロールできる特長を追加したものです。

# 言語、ラインセンス、コントリビューション <!-- Language, licensing and contributions -->
<!--
LXD is written in Go, it's free software and is developed under the Apache 2 license.
-->
LXD は Go で書かれています。フリーソフトウェアであり、Apache 2 ライセンスのもとで開発されています。

<!--
There are no CLA or similar legal agreements required to contribute to LXD,
however we do require commits be signed-off (following the DCO - Developer Certificate of Ownership).
-->
LXD に貢献するのに必要な CLA や同様の法的合意はありません。しかし、コミットを signed-off する必要があります (DCO - Developer Certificate of Ownership に従います)。

# サポート <!-- Support -->
<!--
LXD has two kind of releases:
-->
LXD には二種類のリリースがあります:

 * LTS リリース <!-- LTS releases -->
 * Feature (新機能) リリース <!-- Feature releases -->

<!--
The current LTS is LXD 3.0 which is supported until June 2023 and gets frequent bugfix and security updates
but does not receive any feature addition.
-->
現在の LTS は LXD 3.0 で、2023 年 6 月までサポートされます。LTS ではバグフィックスとセキュリティアップデートを受けられますが、機能の追加は行われません。

<!--
Feature releases are pushed out every month or so and contain new features as well as bugfixes.
The normal support length for those releases is of about a month, or until the next one comes out.
Some Linux distributions may offer longer support for particular feature releases that they decided to ship.
-->
Feature リリースは毎月リリースされ、バグフィックスと新機能が含まれています。通常のサポート期間は約一ヶ月か、次のリリースが行われるまでです。
ディストリビューションによっては、自身がリリースした特定の Feature リリースについては、より長いサポートを提供するかもしれません。

<!--
Commercial support for LXD on Ubuntu LTS releases can be obtained from [Canonical Ltd](http://www.canonical.com).
-->
Ubuntu LTS リリースに含まれる LXD に対する商用サポートは [Canonical Ltd](http://www.canonical.com) から受けることができます。

[<img src="/static/img/canonical.png" alt="Canonical logo"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](http://www.canonical.com)
