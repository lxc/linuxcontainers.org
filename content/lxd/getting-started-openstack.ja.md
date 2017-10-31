

# Nova LXD のインストールと設定 <!-- Installing and configuring Nova LXD -->

<!--
The Nova LXD project provides a Nova driver for managing full system containers using LXD as part of an OpenStack cloud.
-->
Nova LXD プロジェクトは OpenStack クラウドの一部として、LXD を使ったシステムコンテナを管理するための Nova ドライバを提供します。

## マニュアルインストール <!-- Manual installation --> - Ubuntu server (Ubuntu 16.04)

<!--
Nova LXD is available in Ubuntu 16.04;  The Nova LXD driver is installed on Nova Compute servers only:
-->
Nova LXD は Ubuntu 16.04 で利用できます。Nova LXD ドライバは Nova Compute サーバだけにインストールされます。

    sudo apt-get install nova-lxd

<!--
The 'nova-lxd' package ensures that the nova-compute daemon is started
with the correct hypervisor driver for LXD; however the 'nova' user must
have group membership of the 'lxd' group to have access to manage LXD
containers:
-->

'nova-lxd' パッケージは、nova-compute デーモンが LXD に対する正しいハイパーバイザードライバとともに起動することを保証します。しかし、LXD コンテナ管理に必要なアクセス権を持つために 'lxd' グループのメンバーである必要があります。

    sudo usermod -G lxd -a nova
    sudo service nova-compute restart

<!--
In order to support migration of containers between Compute hosts, LXD must be configured to listen for network
connections and a trust password must be set:
-->
Compute ホスト間のコンテナのマイグレーションをサポートするために、LXD はネットワーク接続を listen するように設定され、パスワードが設定されている必要があります。

    sudo lxc config set core.https_address [::]
    sudo lxc config set core.trust_password some-password

<!--
Each Nova LXD instance within your deployment must then be configured with remotes for all of Nova LXD instances:
-->
あなたがデプロイした Nova LXD インスタンスは、すべての Nova LXD インスタンスでリモートとして設定する必要があります。

    sudo lxc remote add host-a <ip address or DNS of remote service>

## Juju を使った自動デプロイ <!-- Automated deployment using Juju -->

<!--
Deploying OpenStack is a complex process, for which a number of deployment tools exist; Juju provides a nice way
to deploy OpenStack on Ubuntu, and a specific [bundle of charms](https://jujucharms.com/u/openstack-charmers-next/openstack-lxd) can be used to deploy OpenStack cloud using LXD.
-->
OpenStack のデプロイは複雑なプロセスが必要で、それを行うためのツールが多数存在しています。Juju は Ubuntu 上で OpenStack をデプロイするのに良い手段を提供しています。LXD を使った OpenStack クラウドのデプロイに、専用の [Charm の Bundle](https://jujucharms.com/u/openstack-charmers-next/openstack-lxd) が使えます。

<!--
The bundle automatically configures storage for containers root filesystems using LVM and sets up appropriate network configuration,
trust passwords and remotes to support migration of containers between LXD hypervisors.
-->
Bundle が LVM を使ってコンテナルートファイルシステム用のストレージを設定します。そして、適切なネットワークの設定、パスワード、LXD ハイパーバイザ間のコンテナのマイグレーションをサポートするためのリモートホストを設定します。

## OpenStack 用の LXD イメージ <!-- LXD images for OpenStack -->

<!--
LXD requires use of 'raw' images that are generally to be installed onto a block device, such as a disk partition or an LVM volume. Canonical publishes raw images of Ubuntu for various arches (arm64, armhf, i386, amd64, ppc64el). These can be imported similarly to the following example, that imports an amd64 Ubuntu trusty image:
-->
LXD では、通常ディスクパーティションや LVM ボリュームのようなブロックデバイス上にインストールされる、'raw' イメージの使用が必要です。カノニカルは色々なアーキテクチャの Ubuntu の raw イメージをリリースしています (arm64, armhf, i386, amd64, ppc64el)。これらのイメージは以下のサンプルと同様にインポートできます。このサンプルは amd64 Ubuntu trusty イメージのインポートを行っています。

    glance image-create --name="trusty" --public --progress \
        --container-format=bare --disk-format=raw \
        --copy-from http://cloud-images.ubuntu.com/trusty/current/trusty-server-cloudimg-amd64-root.tar.gz

## コンテナの作成 <!-- Creating containers -->

<!--
LXD containers are managed in the same manner as KVM containers - either via Horizon or via the Nova CLI:
-->
LXD コンテナは KVM コンテナと同じ方法で管理します。Horizon 経由、または Nova CLI 経由で管理します。

    nova boot --image=trusty --flavor=m1.tiny my-first-openstack-lxd-container

<!--
You may need to associate a floating ip address and configure appropriate security rules, depending on the network and
security configuration of the OpenStack cloud you are using.
-->
Floating IP アドレスを追加したり、お使いのネットワークと OpenStack クラウドのセキュリティ設定から決まる適切なセキュリティルールを設定する必要があるかもしれません。
