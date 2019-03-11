# OpenNebula での LXD のインストールと設定 <!-- Installing and configuring LXD on OpenNebula -->

[<img src="/static/img/one-logo.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

<!--
This guide provides a walkthrough of the basics of the OpenNebula cloud orchestration system on LXD. First we use the simple MinONE tool to build a single-node cloud environment inside a single physical or virtual machine for users looking to try out OpenNebula, then we show a typical working session with the GUI and the CLI, and finally we provide the links to build a distributed production environment.
-->
この文書は、LXD で OpenNebula クラウドオーケストレーションシステムを使う場合の基本的な説明です。最初に、簡単な MiniONE ツールを使って、OpenNebula を試してみようというユーザーのために、単一の物理もしくは仮想マシン上にシングルノードのクラウド環境を構築します。そして、GUI と CLI での典型的な作業を紹介し、最後に分散型のプロダクション環境を構築するためのリンクを紹介します。

## MiniONE を使った自動デプロイメント <!-- Automated Deployment with MiniONE -->

<!--
MiniONE is a tool that sets up a physical host or a virtual machine as a single-node cloud to quickly deploy a simple but fully functional test scenario.
-->
MiniOne は、物理ホストもしくは仮想マシンを、シングルノードのクラウドとしてセットアップし、シンプルですが完全に実用的なテストシナリオを素早くデプロイするためのツールです。

<!--
MiniONE for LXD evaluation requires a dedicated virtual machine or physical host with a fresh default installation of Ubuntu 18.04 or 18.10, min. 2 GiB RAM and 20 GiB free space on disk, and privileged user access (root).
For example MiniONE allows to easily build a LXD/OpenNebula environment on an Amazon VM. The minimal recommended size is perhaps t2.medium. Just give it at least 25GB disk space and allow access to the 9869 TCP where the WebUI is running.
-->
LXD 評価用の MiniOne には、専用の仮想マシンか物理ホストが必要です。この環境には Ubuntu 18.04 か 18.10 が新規にデフォルトインストールされている必要があり、最低 2GiB の RAM、ディスクには 20GiB の空き領域、特権ユーザー（root）権限が必要です。
例えば、MiniOne は Amazon VM 上で LXD/OpenNebula を簡単にビルドできます。推奨の最小サイズはおそらく t2.medium でしょう。少なくとも 25GB のディスクスペースを割り当て、WebUI が実行されている TCP 9869 番ポートへのアクセスを許可してください。

<!--
Run the MiniONE script on the dedicated system
-->
専用のシステム上で MiniOne スクリプトを実行します

    wget https://github.com/OpenNebula/minione/releases/download/v5.8.0/minione
    chmod u+x minione
    sudo minione --lxd

### GUI を試しましょう <!-- Try the GUI -->

<!--
Once the MiniONE is done, you will get an overview how to connect to the web interface similar to following:
-->
MiniONE の実行が完了すると、次のような Web インターフェースへの接続方法の概要が表示されます:

    ### Report
    OpenNebula 5.8 was installed
    Sunstone (the webui) is runninng on:
      http://192.168.100.101:9869/
    Use following to login:
      user: oneadmin
      password: o6ARsMAdGe

<!--
After MiniONE finishes, the first thing we are going to do is to log in as oneadmin to take a look at the Admin View of Sunstone, which has more options than the other Sunstone views for a regular users. Take a look at all the already bootstrapped resources in the cloud.
-->
MiniONE の実行が終わったあと最初に行うことは、oneadmin としてログインし、Sunstone の管理ビュー（Admin View）を見てみることです。このビューは、他の一般ユーザーの Sunstone ビューよりはたくさんのオプションがあります。クラウド内ですでにブートストラップされているリソースを見てみましょう。
[<img src="/static/img/one-1.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

<!--
With the Admin View you can do anything in OpenNebula, but you don't want all those options for the final users! Switch to the Cloud View to see how a final user will see OpenNebula.
-->
管理ビューでは、OpenNebula で何でもできます。しかし、エンドユーザーのためにこれらすべてのオプションは不要でしょう。エンドユーザーから OpenNebula がどのように見えるかを見るためにクラウドビュー（Cloud View）に切り替えてみましょう。
[<img src="/static/img/one-2.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

<!--
The Cloud View interface is much simpler and targeted at end users.
Create a new Virtual Machine by clicking the `+` button. Select the only available template and click `Create`.
After clicking create you will be taken to the dashboard where you can see your running VMs.
-->
クラウドビューインターフェースはずっとシンプルで、エンドユーザーをターゲットにしています。
`+` ボタンをクリックして新しい仮想マシンを作ってみましょう。利用できるテンプレートがひとつあるのでそれを選択して `Create` をクリックします。
`Create` をクリックすると、実行中の VM を見れるダッシュボードに移動します。
[<img src="/static/img/one-3.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

<!--
You can click on your VM and manage it: access it through VNC, Save its state, Reboot it, etc:
-->
VM をクリックすると、VNC 経由でその VM にアクセスしたり、状態を保存したり、リブートしたりといった管理ができます。
[<img src="/static/img/one-4.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

<!--
Clicking on the Console icon will direct you to the root user shell via VNC
-->
コンソールのアイコンをクリックすると、VNC 経由で root ユーザーのシェルに移動します。
[<img src="/static/img/one-5.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

<!--
With the oneadmin role you can customize what your cloud users can do and see.
-->
oneadmin ロールでは、ユーザーが何ができるか、どのように見せるかをカスタマイズできます。

### CLI を試しましょう <!-- Try the CLI -->

<!--
OpenNebula runs as the oneadmin user, and the main administrator should run commands as that user, therefore the first thing you need to do is to switch to oneadmin:
-->
OpenNebula は oneadmin ユーザーとして実行されます。メインの管理者は oneadmin としてコマンドを実行する必要があります。したがって、あなたが最初にすることは oneadmin に切り替えることです:

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
A Centos image has been created
-->
CentOS イメージが作られています

    oneimage list

<!--
A Virtual Machine template is registered
-->
仮想マシンテンプレートが登録されています

    onetemplate list

<!--
You can see the template configuration if further detail
-->
より詳細な情報はテンプレートの設定で見ることができます

    onetemplate show 0

### マーケットプレイスへのアクセス <!-- Access to MarketPlace -->

<!--
OpenNebula comes with predefined MarketPlaces where you can get a lot of prepared images (Apps). There is an integration with [images](https://us.images.linuxcontainers.org), one of the public LXD image servers
-->
OpenNebula にはあらかじめマーケットプレイスが登録されています。ここからあらかじめ用意されたイメージ（アプリケーション）が多数取得できます。LXD の公開イメージサーバーのひとつである [images](https://us.images.linuxcontainers.org) も統合済みです。
[<img src="/static/img/one-6.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

<!--
There are various Linux distributions: Alpine, Centos, Debian etc and also some service images with preconfigured applications, like WordPress or GitLab.
-->
さまざまな Linux ディストリビューションのイメージが存在します: Alpine、CentOS、Debian など。そして WordPress や GitLab といったアプリケーションがあらかじめ設定されたイメージもあります。
[<img src="/static/img/one-7.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

<!--
Containers from the public LXD image server as well. We can try some quite fresh Ubuntu.
-->
公開 LXD イメージサーバーのコンテナも同様です。まっさらの Ubuntu を試せます。
[<img src="/static/img/one-8.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

<!--
And Download it to the datastore.
-->
データーストアにダウンロードします。
[<img src="/static/img/one-9.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

<!--
Now when you go to the Template -> VMs section you can instantiate it.
-->
そして Template -> VMs セクションを選択すると、インスタンスが作成できます。

## プロダクション環境の構築 <!-- Building a Production  Installation -->

<!--
If you want to get a production cloud deployment you can read the [documentation](http://docs.opennebula.org/stable). Deploying a environment with a frontend and several LXD nodes requires the following steps:
-->
プロダクション環境を構築したい場合は、[公式ドキュメント](http://docs.opennebula.org/stable) を読みましょう。フロントエンドと LXD ノードをいくつかデプロイするには、次のステップが必要です:

* [Install the OpenNebula frontend](http://docs.opennebula.org/stable/deployment/opennebula_installation/frontend_installation.html)
* [Install the lxd-node package on the Virtualization Nodes](http://docs.opennebula.org/stable/deployment/node_installation/lxd_node_installation.html)
* [Connect frontend and nodes](http://docs.opennebula.org/stable/deployment/node_installation/lxd_node_installation.html#step-7-adding-a-host-to-opennebula)
* [Check everything is OK](http://docs.opennebula.org/stable/deployment/node_installation/verify.html#verify-installation)

<!--
You can now deploy VMs using apps from the marketplaces
-->
これで、マーケットプレイスのアプリケーションを利用して VM をデプロイできます。

[<img src="/static/img/one-logo.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)
