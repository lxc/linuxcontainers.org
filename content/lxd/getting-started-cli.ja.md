# LXD とコマンドラインツールのインストール <!-- Installing LXD and the command line tool -->
## Ubuntu デスクトップと Ubuntu サーバ
<!--
As LXD evolves quite rapidly, we recommend Ubuntu users use our PPA:
-->
LXD は非常に急速に開発が進んでいますので、Ubuntu ユーザは我々の PPA を使うことをおすすめします。

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

## Ubuntu Core (snappy)
<!--
LXD is available for Ubuntu Core as a Snap package in the store.  
You can install it with:
-->
LXD はストア内の Snap パッケージとして Ubuntu Core で利用できます。以下のようにインストールできます。

    sudo snappy install lxd.stgraber

<!--
After that, LXD can be interacted with through the "lxc" and "lxd-images" commands.
-->
インストール後は、LXD は "lxc" と "lxd-images" コマンド経由で操作できます。

<!--
Users of older version of Snappy (current rpi2 image at least) may have to do:
-->
古いバージョンの Snappy (少なくとも最新の rpi2 イメージ) のユーザは以下のように実行する必要があります。

    sudo ln -sf $(find /var/lib/apps/lxd/ -maxdepth 1 -type d | tail -1) /var/lib/apps/lxd/current
    sudo systemctl restart $(systemctl -a | grep lxd_lxd.*service | awk '{print $1}')

<!--
If you end up having to do the above, note that you likely will have to do so with every subsequent update of LXD  
until the snappy tools are updated on your device through a new system image.
-->
上記を行っても、デバイス上で Snappy ツールが新しいシステムイメージ経由で更新されるまでは、LXD の更新ごとに上記を実行する必要があるでしょう。

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
Instructions for both are available [here](/lxd/downloads).
-->
方法は両方とも[ダウンロードページ](/lxd/downloads)に載っています。

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
 2. lxd-images スクリプトを使って、LXD 用でないものからイメージをインポートする <!-- Use the lxd-images script to import an image from a non-LXD source -->
 3. "lxc image import &lt;file&gt; --alias &lt;name&gt;" のように手動でインポートする <!-- Manually import one using "lxc image import \<file\> &#045;&#045;alias \<name\>" -->

## イメージサーバとしてリモートサーバを使う <!-- Using a remote LXD as an image server -->
<!--
Using a remote image server is as simple as adding it as a remote and just using it:
-->
リモートのイメージサーバを使うと、リモートサーバとして追加してそれを使うだけですので、とても簡単です:

    lxc remote add images images.linuxcontainers.org
    lxc launch images:centos/7/amd64 centos

<!--
An image list can be obtained with:
-->
イメージリストは以下のように取得できます:

    lxc image list images:

## lxd-images を使ってイメージをインポートする <!-- Using lxd-images to import an image -->
<!--
lxd-images is a python script which knows about non-LXD image servers
and can pull and import images for you.
-->
lxd-images は python スクリプトで、LXD 用でないイメージサーバからイメージを取得してインポートできます。

<!--
It currently supports two sources:
-->
現時点では、2 つのソースをサポートしています:

 1. 手元に存在する busyboxy バイナリから busybox イメージを作成する (テスト用) <!-- A local busybox image made from your existing busybox binary (used for testing) -->
 2. 公式の feed から取得した Ubuntu クラウドイメージ <!-- Ubuntu cloud images taken from the official simplestream feed -->

<!--
Importing a new image can be done with:
-->
新しいイメージの取得は以下のように行います:

    lxd-images import busybox --alias busybox
    lxd-images import ubuntu --alias ubuntu

<!--
And then simply using the image to start containers:
-->
その後、コンテナを起動するために単にそのイメージを使うだけです:

    lxc launch busybox my-busybox
    lxc launch ubuntu my-ubuntu

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
See the [image specification for more details](https://github.com/lxc/lxd/blob/master/specs/image-handling.md).
-->
詳しくは[イメージの仕様](https://github.com/lxc/lxd/blob/master/specs/image-handling.md)をご覧ください。

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

    lxc config set core.https_address [::]
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
