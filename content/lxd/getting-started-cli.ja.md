![Logo](/static/img/containers.png)

# LXD とコマンドラインツールのインストール <!-- Installing LXD and the command line tool -->
## Ubuntu デスクトップと Ubuntu サーバ
<!--
Ubuntu 16.04 LTS users can install LXD with:
-->
Ubuntu 16.04 LTS のユーザは、以下のように LXD をインストールできます:

    apt-get install lxd

<!--
Ubuntu 14.04 LTS users can also install LXD using backports:
-->
Ubuntu 14.04 LTS のユーザは、以下のように backports から LXD をインストールできます:

    apt-get -t trusty-backports install lxd

<!--
Alternatively, to get the latest upstream release, a PPA is available:
-->
代わりに、最新の開発元からのリリースを取得するために、PPA が利用できます:

    add-apt-repository ppa:ubuntu-lxc/lxd-stable
    apt-get update
    apt-get dist-upgrade
    apt-get install lxd

<!--
The package creates a new "lxd" group which contains all users allowed to talk to  
lxd over the local unix socket. All members of the "admin" and "sudoers" groups are automatically added.  
If your user isn't a member of one of these groups, you'll need to manually add your user to the "lxd" group.
-->
パッケージは新しく "lxd" グループを作ります。このグループに所属するユーザ全員がローカルの Unix ソケット経由で lxd と通信を行います。"admin" と "sudoers" グループのメンバーは自動的に "lxd" グループに追加されます。あなたがこのグループのメンバーでない場合は、自身で "lxd" グループにユーザを追加する必要があります。

<!--
Because group membership is only applied at login, you then either need to close  
and re-open your user session or use the "newgrp lxd" command in the shell you're going to interact with lxd from.
-->
グループメンバーシップはログイン時にのみ追加されるので、追加後にあなたのユーザセッションを閉じて再度開くか、LXD と通信したいシェル上で "newgrp lxd" コマンドを実行する必要があります

    newgrp lxd

<!--
Then to do the initial configuration of the LXD daemon, including, if you want to, setting up optimized storage (ZFS),  
making the deamon visible on the network and configuring networking for the containers:
-->
そして、必要に応じて最適化されたストレージ (ZFS) の設定、ネットワーク経由でデーモンにアクセスできるようにする設定、コンテナ向けのネットワークの設定を含めた、LXD デーモンの初期設定を行うには:

    sudo lxd init

## Ubuntu Core (snappy)
<!--
LXD is available for Ubuntu Core as a Snap package in the store.  
You can install it with:
-->
LXD はストア内の Snap パッケージとして Ubuntu Core で利用できます。以下のようにインストールできます。

    sudo snappy install lxd.stgraber

<!--
After that, LXD can be interacted with through the "lxc" command.
-->
インストール後、LXD は "lxc" コマンド経由で操作できます。

<!--
It should be noted that the server certificate generation can take a long time if you're working on a device like  
the rpi2 so it might be a few minutes before LXD will respond to the lxc command.
-->
もし、rpi2 のようなデバイス上で実行している場合は、サーバ証明書の生成には長い時間がかかる可能性があることに注意が必要です。lxc コマンドから応答が返るまで数分かかるかもしれません。

## 他のディストリビューション <!-- Other distributions -->
<!--
There are currently packages for multiple distributions including Gentoo and, of course, Ubuntu.
Users of other distributions might find it in their package manager too.
-->
現時点で、Gentoo と Ubuntu の複数のディストリビューションにパッケージが存在します。
他のディストリビューションのユーザも、各ディストリビューションのパッケージマネージャ内でパッケージを見つけることができるかもしれません。

<!--
If it is not there yet please download and build LXD from git or use our latest release tarball.
-->
もし存在しない場合は、git リポジトリからダウンロードしてビルドするか、最新のリリース tarball を使ってください。

<!--
Instructions for both are available [here](/lxd/downloads/).
-->
方法は両方とも[ダウンロードページ](/lxd/downloads/)に載っています。

# イメージのインポート <!-- Importing some images -->
<!--
LXD is image based. Containers must be created from an image and so the image store  
must get some images before you can do much with LXD.
-->
LXD はイメージベースです。コンテナはイメージから作る必要があります。そして LXD で色々な処理を行う前に、イメージストアにイメージを取得していなければいけません。

<!--
There are three ways to feed that image store:
-->
イメージストアにイメージを取得する方法は 3 つあります:

 1. イメージサーバとしてリモートの LXD を使う <!-- Use a remote LXD as an image server -->
 2. ビルトインされているイメージ用リモートサーバを使う <!-- Use the built-in image remotes -->
 3. 以下のように手動でインポートする <!-- Manually import one using -->

        lxc image import <file> --alias <name>

## イメージサーバとしてリモートサーバを使う <!-- Using a remote LXD as an image server -->
<!--
Using a remote image server is as simple as adding it as a remote and just using it:
-->
リモートのイメージサーバを使うと、リモートサーバとして追加してそれを使うだけですので、とても簡単です:

    lxc remote add images 1.2.3.4
    lxc launch images:image-name your-container

<!--
An image list can be obtained with:
-->
イメージリストは以下のように取得できます:

    lxc image list images:

## ビルトインされているイメージ用リモートサーバを使う <!-- Using the built-in image remotes -->
<!--
LXD comes with 3 default remotes providing images:
-->
LXD にはデフォルトでイメージを提供するリモートサーバが 3 つ登録されています:

 1. ubuntu: (stable Ubuntu イメージ用 <!-- for stable Ubuntu images -->)
 2. ubuntu-daily: (daily Ubuntu イメージ用 <!-- for daily Ubuntu images -->)
 3. images: (その他の多数のディストリビューション用 <!-- for a bunch of other distros -->)

<!--
To start a container from them, simply do:
-->
これらのビルトインのリモートサーバからコンテナを起動するには、以下のように実行します:

    lxc launch ubuntu:14.04 my-ubuntu
    lxc launch ubuntu-daily:16.04 my-ubuntu-dev
    lxc launch images:centos/6/amd64 my-centos

## 手動でイメージをインポートする <!-- Manually importing an image -->
<!--
If you already have a lxd-compatible image file, you can import it with:
-->
lxd 互換のイメージファイルが手元にある場合は、以下のようにインポートできます:

    lxc image import <file> --alias my-alias

<!--
And then start a container using:
-->
その後、以下のようにコンテナを起動します:

    lxc launch my-alias my-container

<!--
See the [image specification for more details](https://github.com/lxc/lxd/blob/master/doc/image-handling.md).
-->
詳しくは[イメージの仕様](https://github.com/lxc/lxd/blob/master/doc/image-handling.md)をご覧ください。

# コンテナの作成と使用 <!-- Creating and using your first container -->
<!--
Assuming that you imported an Ubuntu cloud image using the "ubuntu" alias, you can create your first container with:
-->
"ubuntu" というエイリアスで Ubuntu クラウドイメージをインポートしたとすると、以下のようにコンテナを作成できます:

    lxc launch ubuntu first

<!--
That will create and start a new ubuntu container as can be confirmed with:
-->
これは新しい Ubuntu コンテナを作成して起動します。起動したことは以下のように確認できます:

    lxc list

<!--
Your container here is called "first". You also could let LXD give it a random name by  
just calling "lxc launch ubuntu" without a name.
-->
あなたが作成し、起動したコンテナは "first" という名前です。"lxc launch ubuntu" のように名前を指定せずにコマンドを実行し、ランダムな名前になるように LXD を実行することもできます。

<!--
Now that your container is running, you can get a shell inside it with:
-->
さて、これでコンテナが起動しています。以下のようにコンテナの内部でシェルを実行できます:

    lxc exec first -- /bin/bash

<!--
Or just run a command directly:
-->
また、以下のように直接コマンド実行もできます:

    lxc exec first -- apt-get update

<!--
To pull a file from the container, use:
-->
コンテナからファイルを取得するには以下のようにします:

    lxc file pull first/etc/hosts .

<!--
To push one, use:
-->
コンテナへファイルを送るには以下のようにします:

    lxc file push hosts first/tmp/

<!--
To stop the container, simply do:
-->
コンテナを停止するには以下のようにします:

    lxc stop first

<!--
And to remove it entirely:
-->
完全にコンテナを削除するには:

    lxc delete first

# 複数のホスト <!-- Multiple hosts -->
<!--
The "lxc" command line tool can talk to multiple LXD servers.  
It defaults to talking to the local one using a local UNIX socket.
-->
"lxc" コマンドラインツールは複数の LXD サーバと通信できます。デフォルトではローカルの UNIX ソケットを使ってローカルのホストと通信します。

<!--
Remote operations require the following two commands having been run on the remote server:
-->
リモート操作には、リモートサーバ上で以下の 2 つのコマンドを実行しておく必要があります:

    lxc config set core.https_address "[::]"
    lxc config set core.trust_password some-password

<!--
The first tells LXD to bind all addresses on port 8443.  
The latter sets a trust password to be used when contacting that server.
-->
最初のコマンドは、すべてのアドレスのポート 8443 にバインドするように LXD を設定しています。
次のコマンドは、このサーバと接続ときに使うパスワードを設定しています。

<!--
Now to talk to that remote LXD, you can simply add it with:
-->
このリモートの LXD と通信を行うために、以下のようにリモートホストを追加します:

    lxc remote add host-a <ip address or DNS>

<!--
This will prompt you to confirm the remote server fingerprint and then ask you for the password.
-->
このコマンドを実行すると、リモートサーバのフィンガープリントの確認と、パスワードを問い合わせるプロンプトが表示されるはずです:

<!--
And after that, use all the same command as above but prefixing the container  
and images name with the remote host like:
-->
そのあとで、コンテナとイメージの前にリモートホスト名をつけて、先のコマンドと同様に使用します:

    lxc exec host-a:first -- apt-get update
