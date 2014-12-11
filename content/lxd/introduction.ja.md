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
複数のコンテナホストへの接続を扱えます。そして、ネットワーク上の全てのコンテナ全てが見渡せ、さらに作成したいところに作成でき、実行中に色々なところに移動できます。

<!--
The OpenStack plugin then allows you to use your lxd hosts as compute nodes,  
running workloads on containers rather than virtual machines.
-->
OpenStack プラグインは lxd ホストをコンピュートノードとして使えます。そして、実行中の作業を仮想マシンでなくコンテナ上で実行できます。

<!--
LXD is currently in very active development and isn't yet ready for production use.
-->
LXD は現在非常に活発に開発中で、まだ本番環境で利用するレベルには達していません。

# 機能<!-- Features -->

<!--
Some of the biggest features of LXD are:
-->
LXDの主要な特長には以下のようなものがあります:

 * セキュアなデザイン (非特権コンテナ、リソース制限、その他) <!-- Secure by design (unprivileged containers, resource restrictions and much more) -->
 * 拡張性 (あなたのラップトップ機から数千のコンピュートノードまで) <!-- Scalable (from containers on your laptop to thousand of compute nodes) -->
 * 直感的 (シンプルでクリアな API、簡潔なコマンドライン実行) <!-- Intuitive (simple, clear API and crisp command line experience) -->
 * イメージをベースにしている (ディストリビューションテンプレートは不要で、良い信頼できるイメージのみ使用) <!-- Image based (no more distribution templates, only good, trusted images) -->
 * ライブマイグレーション <!-- Live migration -->

# LXC との関係 <!-- Relationship with LXC -->

<!--
LXD isn't a rewrite of LXC, in fact it's building on top of LXC to provide a new,  
better user experience. Under the scene, LXD uses LXC through liblxc and its Go binding  
to create and manage the containers.
-->
LXD は LXC の書き直しではありません。実際 LXD は新しい、より良いユーザ体験を提供するために LXC 上で構築されています。
LXD はコンテナを作成したり管理したりするために liblxc を通して LXC と LXC の Go バインディングを使っています。

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
