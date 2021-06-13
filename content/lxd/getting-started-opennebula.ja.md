# OpenNebula での LXD のインストールと設定 <!-- Installing and configuring LXD on OpenNebula -->

[<img src="/static/img/one-logo.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.io)

<!--
This guide provides a walkthrough of the basics of the OpenNebula cloud management platform on LXD. First, we will use the simple MiniONE tool to build a single-node cloud environment inside a single physical or virtual machine for users looking to try out OpenNebula. Then, we will show a typical working session with the Sunstone GUI and the CLI. Finally, we will provide the links to build a distributed production environment.
-->
この文書は、LXD で OpenNebula クラウド管理システムを使う場合の基本的な説明です。最初に、簡単な MiniONE ツールを使って、OpenNebula を試してみようというユーザーのために、単一の物理もしくは仮想マシン上にシングルノードのクラウド環境を構築します。そして、Sunstone GUI と CLI での典型的な作業を紹介し、最後に分散型のプロダクション環境を構築するためのリンクを紹介します。

## MiniONE を使った自動デプロイメント <!-- Automated Deployment with MiniONE -->

<!--
[MiniONE](https://github.com/OpenNebula/minione) is an evaluation tool that sets up a physical host or a virtual machine as a single-node OpenNebula cloud to quickly deploy a simple but fully functional testing environment.
-->
[MiniONE](https://github.com/OpenNebula/minione) は、物理ホストもしくは仮想マシンを、シングルノードの OpenNebula クラウドとしてセットアップし、シンプルですが完全に実用的なテスト環境を素早くデプロイするための評価ツールです。

<!--
MiniONE for LXD requires a dedicated virtual machine or physical host with a fresh default installation of Ubuntu 18.04+, with at least 2 GiB RAM and 20 GiB free space on disk, and privileged user access (root). For example, MiniONE can be used to easily build an OpenNebula cloud based on LXD on an Amazon Virtual Machine. The minimum recommended size is t2.medium. Just allocate at least 25GB disk space and remember to allow access to the 9869 TCP port, where the WebUI will be running.
-->
LXD の MiniOne には、専用の仮想マシンか物理ホストが必要です。この環境には Ubuntu 18.04 以上が新規にデフォルトインストールされている必要があり、最低 2GiB の RAM、ディスクには 20GiB の空き領域、特権ユーザー（root）権限が必要です。
例えば、MiniOne は Amazon 仮想マシン上の LXD に OpenNebula クラウドを簡単にビルドできます。推奨の最小サイズはおそらく t2.medium でしょう。少なくとも 25GB のディスクスペースを割り当て、WebUI が実行されている TCP 9869 番ポートへのアクセスを許可してください。

<!--
Run the MiniONE script on the dedicated system, like this:
-->
次のように、専用のシステム上で MiniOne スクリプトを実行します:

    wget https://github.com/OpenNebula/minione/releases/download/v5.8.0/minione
    chmod u+x minione
    sudo minione --lxd

### GUI を試しましょう <!-- Try the GUI -->

<!--
Once MiniONE is running, you will get an overview with instructions on how to connect to the web interface:
-->
MiniONE を実行すると、Web インターフェースへの接続方法の概要が表示されます:

    ### Report
    OpenNebula 5.12 was installed
    Sunstone (the webui) is runninng on:
      http://192.168.100.101:9869/
    Use following to login:
      user: oneadmin
      password: o6ARsMAdGe

<!--
The first thing we are going to do now is to log in as oneadmin to take a look at the Admin View in Sunstone, which has more options than the other Sunstone views for regular users. Take a look at all the already bootstrapped resources in the cloud:
-->
最初に oneadmin としてログインし、Sunstone の管理ビューを見てみましょう。すでにクラウド上で起動しているリソースをすべてみてみましょう。このビューは、他の一般ユーザーの Sunstone ビューよりはたくさんのオプションがあります。クラウド内ですでにブートストラップされているリソースを見てみましょう。
[<img src="/static/img/one-1.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.io)

<!--
With the Admin View you can do anything you want with your OpenNebula cloud, but obviously you don’t want all those options available for the final users! Switch to the Cloud View to see how a regular user of your cloud will see the OpenNebula GUI.
-->
管理ビューでは、OpenNebula クラウドで行いたいことはすべてできます。しかし、あきらかに最終的なユーザーにすべてのオプションを利用させたくはありません! クラウドビューに切り替えると、クラウドの一般ユーザーに OpenNebula の GUI がどのように見えるかを確認できます。
[<img src="/static/img/one-2.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.io)

<!--
The Cloud View interface is much simpler and designed for end users that only need access to a set of basic operations. They can, for instance, create a new Virtual Machine by clicking the + button. If you want to try, just select the VM Template and click Create. After clicking on that option you will be taken to the dashboard, where you can now see your instantiated VMs.
-->
クラウドビューインターフェースはずっとシンプルで、基本的な操作だけが必要なエンドユーザー向けにデザインされています。例えば、`+` ボタンをクリックして新しい仮想マシンを作ったりできます。試したい場合は、VM テンプレートを選択して、Create をクリックします。このようにクリックしたあとは、ダッシュボードに移動し、インスタンスかされた VM を見ることができます。
[<img src="/static/img/one-3.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.io)

<!--
You can click on your VM and manage it: access it through VNC, save its state, reboot it, etc:
-->
VM をクリックすると、VNC 経由でその VM にアクセスしたり、状態を保存したり、リブートしたりといった管理ができます。
+[<img src="/static/img/one-4.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.io)

<!--
Clicking on the console icon will direct you to the root user shell via VNC:
-->
コンソールのアイコンをクリックすると、VNC 経由で root ユーザーのシェルに移動します。
+[<img src="/static/img/one-5.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.io)

<!--
With the oneadmin role you can customize what your OpenNebula cloud users can do and see.
-->
oneadmin ロールでは、OpenNebula ユーザーが何ができるか、どのように見せるかをカスタマイズできます。

### CLI を試しましょう <!-- Try the CLI -->

<!--
OpenNebula runs as the oneadmin user on the Linux system, so the main cloud administrator should run commands as that user too, therefore the first thing you need to do is to switch to oneadmin:
-->
OpenNebula は Linux 上で oneadmin ユーザー権限で実行されます。メインのクラウド管理者は oneadmin としてコマンドを実行する必要があります。したがって、あなたが最初にすることは oneadmin に切り替えることです:

    su - oneadmin

<!--
From the oneadmin account you can see all the already bootstrapped resources:
-->
oneadmin アカウントから、すべてのブートストラップしたリソースを見ることができます:

<!--
There is one virtualization node
-->
仮想化ノードがひとつあります

    onehost list

<!--
A CentOs image has been created
-->
CentOS イメージが作られています

    oneimage list

<!--
A Virtual Machine template is registered
-->
仮想マシンテンプレートが登録されています

    onetemplate list

<!--
You can see the template configuration in further detail
-->
テンプレートの構成をさらに詳細に見ることができます

    onetemplate show 0

### マーケットプレイスへのアクセス <!-- Access to MarketPlace -->
<!--
OpenNebula comes with predefined marketplaces where you can get a lot of preconfigured images with their VM Template metadata (Apps). It comes with a native integration with [images.linux containers.org](https://us.images.linuxcontainers.org/), one of the public LXD image servers.
-->
OpenNebula には、VM テンプレートメタデータ（Apps）を持つあらかじめ設定済みのイメージを取得できる、あらかじめ定義済みのマーケットプレイスがあります。LXD の公開イメージサーバーのひとつである [images](https://us.images.linuxcontainers.io) も定義済みです。
[<img src="/static/img/one-6.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.io)

<!--
There are various Linux distributions: Alpine, Centos, Debian etc and also some service images with preconfigured applications, like WordPress or GitLab.
-->
さまざまな Linux ディストリビューションのイメージが存在します: Alpine、CentOS、Debian など。そして WordPress や GitLab といったアプリケーションがあらかじめ設定されたイメージもあります。

<!--
NOTE: Images from the official OpenNebula Marketplace are KVM-ready images, however, the LXD driver, unlike Vanilla LXD, features support for partition table images.
-->
注意: 公式の OpenNebula マーケットプレイスは KVM 向けのイメージです。しかし、LXD ドライバーは vanilla LXD と違って、パーティションテーブルイメージのサポートが特徴です。
[<img src="/static/img/one-7.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.io)

<!--
Containers from the public LXD image server are available as well. We can try some quite fresh Ubuntu.
-->
公開 LXD イメージサーバーから取得するコンテナも同様に利用できます。かなり新鮮な Ubuntu を試せたりします。
[<img src="/static/img/one-8.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.io)

<!--
And download it to the datastore.
-->
データーストアにダウンロードします。
[<img src="/static/img/one-9.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.io)

<!--
Now when you go to the Template -> VMs section you can instantiate it.
-->
そして Template -> VMs セクションを選択すると、インスタンスが作成できます。

## プロダクション環境の構築 <!-- Building a Production  Installation -->
<!--
If you want to deploy a production OpenNebula environment please refer to our [documentation](http://docs.opennebula.io/5.12). Deploying an OpenNebula cloud with a front-end and several LXD virtualization nodes requires the following steps:
-->
プロダクション環境の OpenNebula 環境をデプロイしたい場合は、公式の [ドキュメント](http://docs.opennebula.io/5.12) をご参照ください。フロントエンドと LXD ノードがいくつか含まれる OpenNebula をデプロイするには、次のステップが必要です:

* [Install the OpenNebula frontend](http://docs.opennebula.io/5.12/deployment/opennebula_installation/frontend_installation.html)
* [Install the lxd-node package on the Virtualization Nodes](http://docs.opennebula.io/5.12/deployment/node_installation/lxd_node_installation.html)
* [Connect frontend and nodes](http://docs.opennebula.io/5.12/deployment/node_installation/lxd_node_installation.html#step-6-adding-a-host-to-opennebula)
* [Check everything is OK](http://docs.opennebula.io/5.12/deployment/node_installation/verify.html#verify-installation)

<!--
You can now deploy VMs using apps from the marketplaces
-->
これで、マーケットプレイスのアプリケーションを利用して VM をデプロイできます。
[<img src="/static/img/one-logo.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.io)

