[TOC]

# サードパーティーツールとのインテグレーション <!-- Third-party integrations -->

<!--
Beside [using LXD natively](/lxd/getting-started-cli/), you can also use LXD within external tools.
-->
[LXD付属のクライアント](/ja/lxd/getting-started-cli/)を使う以外に、外部ツールで LXD を使うこともできます。

<!--
LXD integrations are available for the following tools:
-->
LXD とのインテグレーションは次のようなツールで利用できます:

- [Ansible](#ansible)
- [Juju](#juju)
- [MAAS](#maas)
- [Terraform](#terraform)
- [Puppet Bolt](#puppet-bolt)
- [Packer](#packer)

---

## Ansible

[<img src="/static/img/Ansible_logo.svg" alt="Ansible logo"/ height="174" width="141" style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://www.ansible.com/)

<!--
[Ansible](https://www.ansible.com/) is an open-source software provisioning, configuration management, and application-deployment tool.
-->
[Ansible](https://www.ansible.com/) は、オープンソースのプロビジョニング、構成管理、アプリケーションのデプロイメントツールです。

<!--
The main integrations between Ansible and LXD are:
-->
Ansible と LXD 間の主要なインテグレーションは:

<!--
* A [connection plugin](https://docs.ansible.com/ansible/latest/collections/community/general/lxd_connection.html#ansible-collections-community-general-lxd-connection) allowing Ansible to manage a LXD instance just as any other Linux system
* An [inventory plugin](https://docs.ansible.com/ansible/latest/collections/community/general/lxd_inventory.html) to detect LXD instances
* A [plugin](https://docs.ansible.com/ansible/latest/collections/community/general/lxd_container_module.html) to create and manage LXD containers
* A [plugin](https://docs.ansible.com/ansible/latest/collections/community/general/lxd_profile_module.html) to manage LXD profiles
-->
* 他の Linux システムと同じように Ansible が LXD インスタンスを管理できるようにする [接続プラグイン](https://docs.ansible.com/ansible/latest/collections/community/general/lxd_connection.html#ansible-collections-community-general-lxd-connection)
* LXD インスタンスを検出するための[インベントリープラグイン](https://docs.ansible.com/ansible/latest/collections/community/general/lxd_inventory.html)
* LXD コンテナを作成、管理する[プラグイン](https://docs.ansible.com/ansible/latest/collections/community/general/lxd_container_module.html)
* LXD プロファイルを管理する[プラグイン](https://docs.ansible.com/ansible/latest/collections/community/general/lxd_profile_module.html)

<!--
To manage LXD in Ansible, you need a LXD Server (see [Set up LXD](#set-up-lxd)).
-->
Ansible で LXD を管理するためには、LXD サーバーが必要です（[LXDのセットアップ](#set-up-lxd)を参照）。


## Juju

[<img src="/static/img/juju_orange_hex.png" alt="Juju logo"/ height="111" width="308" style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://juju.is/)

<!--
[Juju](https://juju.is/) is an open-source software for application management and automation.
-->

[Juju](https://juju.is/) はアプリケーション管理と自動化のためのオープンソースソフトウェアです。

<!--
Juju can be used to deploy a variety of workloads across many different clouds and virtualization providers. It supports both deploying workloads against a LXD server or cluster and using LXD on the machines it's deploying to separate otherwise colocated services.
-->
Juju は多数の異なるクラウドや仮想化プロバイダーに様々なワークロードをデプロイするのに使えます。LXD サーバーやクラスターに対してワークロードをデプロイすることと、デプロイするマシン上で LXD を使い、他に配置されているサービスを分離することの両方をサポートします。

<!--
Take a look at the Step-by-Step Guide for LXD in the [Juju Documentation](https://juju.is/docs/olm/lxd).
-->
[Juju のドキュメント](https://juju.is/docs/olm/lxd) の LXD 向けのステップバイステップガイドをご覧ください。


## MAAS

[<img src="/static/img/logo-maas.png" alt="MAAS logo"/ height="111" width="308" style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://maas.io/)

<!--
[MAAS](https://maas.io/) is an open-source server provisioning software tool for your data centre.
-->
[MAAS](https://maas.io/) は、オープンソースのデータセンター向けサーバープロビジョニングソフトウェアです。

<!--
Self-service, remote installation of Windows, CentOS, ESXi and Ubuntu on real servers turns your data centre into a bare metal cloud.
-->
リアルサーバー上に Windows、CentOS、ESXi、Ubuntu をセルフサービスでリモートインストールし、データセンターをベアメタルクラウドに変えます。

<!--
MAAS integrates with LXD to provide easy creation of virtual machines. It can automatically deploy and configure LXD as part of the deployment of a physical machine or can be connected to an existing LXD deployment to dynamically create virtual machines on it.
-->
MAAS を LXD とインテグレーションすることで、仮想マシンを簡単に作成できるようになります。物理マシンへのデプロイメントの一部として LXD を自動的にデプロイし設定することができます。また、デプロイメント済みの既存の LXD に接続し、その上に仮想マシンを動的に作成することもできます。

<!--
Read about how [MAAS works](https://maas.io/how-it-works) and try MAAS and LXD in the [MAAS hands on tutorial](https://maas.io/tutorials/build-a-maas-and-lxd-environment-in-30-minutes-with-multipass-on-ubuntu).
-->
[MAAS がどのように動作するか](https://maas.io/how-it-works) について読み、[MAAS ハンズオンチュートリアル](https://maas.io/tutorials/build-a-maas-and-lxd-environment-in-30-minutes-with-multipass-on-ubuntu) を試してみてください。

## Terraform

[<img src="/static/img/Terraform_PrimaryLogo_NonAtt_Color_RGB.png" alt="Terraform logo"/ height="96" width="308" style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://terraform.io)

<!--
[Terraform](https://terraform.io) is an open-source infrastructure-as-code software tool for configuration and service management.
-->
[Terraform](https://terraform.io) は、設定とサービスマネジメント用のオープンソースの Infrastructure-as-code ソフトウェアです。

<!--
The LXD integration allows for Terraform to deploy instances on LXD servers with support for local and remote deployments.
-->
LXD インテグレーションにより Terraform はローカルやリモートデプロイメントをサポートしている LXD サーバーにインスタンスをデプロイできます。

<!--
Take a look at the [Terraform Documentation on LXD](https://registry.terraform.io/providers/terraform-lxd/lxd/latest/docs) for more information.
-->
詳しくは [terraform-provider-lxd のドキュメント](https://registry.terraform.io/providers/terraform-lxd/lxd/latest/docs) をご覧ください。

<!--
To manage LXD in Terraform, you need a LXD Server (see [Set up LXD](#set-up-lxd)).
-->
Terraform で LXD を管理するためには、LXD サーバーが必要です（[LXD のセットアップ](#set-up-lxd)を参照）。


## Puppet Bolt

[<img src="/static/img/bolt-logo-dark-vsm.png" alt="Bolt logo"/ height="117" width="308" style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://puppet.com/docs/bolt/latest/bolt.html)

<!--
[Bolt](https://puppet.com/docs/bolt/latest/bolt.html) is an open source orchestration tool that automates the manual work it takes to maintain your infrastructure.
-->
[Bolt](https://puppet.com/docs/bolt/latest/bolt.html) は、インフラを保守するための手作業を自動化するための、オープンソースのオーケストレーションツールです。

<!--
The LXD transport allows for interacting with LXD instances.
-->
LXD トランスポートを使って、LXD インスタンスと対話できます。

<!--
For more information, see the [Puppet Bolt Documentation on LXD](https://puppet.com/docs/bolt/latest/bolt_transports_reference.html#lxd).
-->
詳しくは、[Puppet Bolt ドキュメントの LXD の項](https://puppet.com/docs/bolt/latest/bolt_transports_reference.html#lxd)をご覧ください。

<!--
To manage LXD in Puppet Bolt, you need a LXD Server (see [Set up LXD](#set-up-lxd)).
-->
Puppet Bolt で LXD を管理するためには、LXD サーバーが必要です（[LXD のセットアップ](#set-up-lxd)を参照）。


## Packer

[<img src="/static/img/Packer_PrimaryLogo_NonAtt_Color_RGB.png" alt="Packer logo"/ height="121" width="308" style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://www.packer.io)

<!--
[Packer](https://www.packer.io) is an open source tool for creating identical machine images for multiple platforms.
-->
[Packer](https://www.packer.io) は、複数のプラットフォーム向けに同一のマシンイメージを作成するためのオープンソースのツールです。

<!--
With Packer's LXD builder, it's possible to re-use your existing cloud image building pipeline and with the LXD builder, build a LXD container image.
-->
Packer の LXD ビルダーを使うと、既存のクラウドイメージをビルドするためのパイプラインを再利用し、LXD ビルダーを使って LXD のコンテナイメージをビルドできます。

<!--
Take a look at the [Packer Documentation on LXD](https://www.packer.io/docs/builders/lxd) for more information.
-->
詳しくは、Packer ドキュメントの [LXD Builder](https://www.packer.io/docs/builders/lxd) をご覧ください。

<!--
Additionally our [Getting started guide on images](https://linuxcontainers.org/lxd/getting-started-cli/#images) and the [Advanced guide on instance configuration](https://linuxcontainers.org/lxd/advanced-guide/#configuration-of-instances) might contain useful information regarding image choice, configuration options etc.
-->
われわれのドキュメント[LXD を使い始めるにはのイメージの章](https://linuxcontainers.org/ja/lxd/getting-started-cli/#_13)と[上級ガイドのインスタンスの設定の章](https://linuxcontainers.org/ja/lxd/advanced-guide/#_2)にイメージの選択、設定オプションなどに関する有益な情報が記載されています。

<!--
To create LXD images in Packer, you need a LXD Server (see [Set up LXD](#set-up-lxd)).
-->
Packer で LXD を管理するためには、LXD サーバーが必要です（[LXD のセットアップ](#set-up-lxd)を参照）。


## 追加情報 <!-- Additional Information -->

### <a name="set-up-lxd"></a>LXD のセットアップ

<!--
If you haven't set up a LXD server already, you might start with our [Getting started guide](/lxd/getting-started-cli/), especially the chapters about [Installation](/lxd/getting-started-cli/#installation) and [Initial configuration](/lxd/getting-started-cli/#initial-configuration).
-->
まだ LXD をセットアップしていない場合は、「[LXD を使い始めるには](/ja/lxd/getting-started-cli/)」の特に[インストール](/ja/lxd/getting-started-cli/#_1)と[初期設定](/ja/lxd/getting-started-cli/#_5)の章から始めるとよいでしょう。

<!--
For instructions on setting up a LXD remote server, see the [Advanced guide](https://linuxcontainers.org/lxd/advanced-guide/#set-up-your-lxd-server-as-remote-server) as well.
-->
LXD のリモートサーバーの設定方法については、[上級ガイド](https://linuxcontainers.org/ja/lxd/advanced-guide/#lxd_1) もご参照ください。
