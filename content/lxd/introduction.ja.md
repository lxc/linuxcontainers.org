# LXD とは? <!-- What's LXD? -->
<!--
LXD is a container "hypervisor" and a new user experience for LXC.
-->
LXD はコンテナの『ハイパーバイザ』であり、LXC の新しいユーザ体験です。

<!--
Specifically, it's made of three components:
-->
具体的には、LXD は 3 つのコンポーネントから構成されます:

 * システム全体のデーモン <!-- A system-wide daemon --> (lxd)
 * コマンドラインクライアント <!-- A command line client --> (lxc)
 * OpenStack Nova プラグイン <!-- An OpenStack Nova plugin --> (nova-compute-lxd)

<!--
The daemon exports a REST API both locally and if enabled, over the network.
-->
デーモンは REST API を提供します。この API はローカルからと、機能が有効であればネットワーク経由で使えます。

<!--
The command line tool is designed to be a very simple, yet very powerful tool  
to manage all your containers. It can handle connect to multiple container hosts  
and easily give you an overview of all the containers on your network,  
let you create some more where you want them and even move them around while they're running.
-->
コマンドラインツールは非常にシンプルに設計されています。しかし、全てのコンテナを管理するための非常にパワフルなツールです。
複数のコンテナホストへの接続を扱えます。そして、ネットワーク上の全てのコンテナ全てが見渡せ、必要なところに追加で作成でき、実行中に色々なところに移動できます。

<!--
The OpenStack plugin then allows you to use your lxd hosts as compute nodes,  
running workloads on containers rather than virtual machines.
-->
OpenStack プラグインは lxd ホストをコンピュートノードとして使えます。そして、実行中の作業を仮想マシンでなくコンテナ上で実行できます。

<!--
The LXD project was founded and is currently led by [Canonical Ltd](http://www.canonical.com)  
and Ubuntu with contributions from a range of other companies and individual contributors.
-->
LXD プロジェクトは [Canonical Ltd](http://www.canonical.com) と Ubuntu によって設立され、現在は様々な企業や個人のコントリビュータの貢献のもとで [Canonical Ltd](http://www.canonical.com) と Ubuntu が主導しています。

# 機能<!-- Features -->
<!--
Some of the biggest features of LXD are:
-->
LXDの主要な特長には以下のようなものがあります:

 * セキュアなデザイン (非特権コンテナ、リソース制限、その他) <!-- Secure by design (unprivileged containers, resource restrictions and much more) -->
 * 拡張性 (あなたのラップトップ機から数千のコンピュートノードまで) <!-- Scalable (from containers on your laptop to thousand of compute nodes) -->
 * 直感的 (シンプルでクリアな API、きびきびしたコマンドライン体験) <!-- Intuitive (simple, clear API and crisp command line experience) -->
 * イメージをベースにしている (ディストリビューションテンプレートは不要で、良い信頼できるイメージのみ使用) <!-- Image based (no more distribution templates, only good, trusted images) -->
 * ライブマイグレーション <!-- Live migration -->

# LXC との関係 <!-- Relationship with LXC -->
<!--
LXD isn't a rewrite of LXC, in fact it's building on top of LXC to provide a new,  
better user experience. Under the scene, LXD uses LXC through liblxc and its Go binding  
to create and manage the containers.
-->
LXD は LXC の書き直しではありません。実際 LXD は新しい、より良いユーザ体験を提供するために LXC 上で構築されています。
LXD はコンテナを作成したり管理したりするために liblxc とその Go バインディングを通して LXC を利用しています。

<!--
It's basically an alternative to LXC's tools and distribution template system  
with the added features that come from being controllable over the network.
-->
LXD は基本的には LXC ツールとディストリビューションテンプレートの仕組みの代わりとなる新しいもので、ネットワーク経由でコントロールできる特長を追加したものです。

# ライセンス <!-- Licensing -->
<!--
LXD is free software and is developed under the Apache 2 license.
-->
LXD はフリーソフトウェアであり、Apache 2 ライセンスのもとで開発されています。

# サポート <!-- Support -->
<!--
LXD's stable release support relies on the Linux distributions
and their own commitment to pushing stable fixes and security updates.
-->
LXD の stable リリースは各 Linux ディストリビューションの stable に対する修正とセキュリティアップデートのポリシーに依存します。

<!--
Commercial support for LXD on Ubuntu LTS releases can be obtained from [Canonical Ltd](http://www.canonical.com).
-->
Ubuntu LTS リリースに含まれる LXD に対する商用サポートは [Canonical Ltd](http://www.canonical.com) から受けることができます。

[<img src="/static/img/canonical.png" alt="Canonical logo"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](http://www.canonical.com)
