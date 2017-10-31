
# インストール<!-- Installation -->
## リリースを選択する <!-- Choose your release -->
<!--
LXD upstream maintains two release branches in parallel:
-->
LXD では 2 つのリリースブランチが並行してメンテナンスされています:

 * LTS リリース <!-- LTS release -->(LXD 2.0.x)
 * フィーチャーリリース <!-- Feature releases -->(LXD 2.x)

<!--
LTS releases are recommended for production environments as they will benefit from regular bugfix
and security updates but will not see new features added or any kind of behavioral change.
-->
LTS リリースは本番環境での使用におすすめです。定期的なバグフィックスとセキュリティアップデートが行われますが、新しい機能の追加や動作が変わるような変更は行われないためです。

<!--
To get all the latest features and monthly updates to LXD, use the feature release branch instead.
-->
LXD の新機能のすべてと月次の更新を取得したい場合は、フィーチャーリリースをお使いください。

## パッケージの取得 <!-- Getting the packages -->
### Alpine Linux
<!--
To install the feature branch of LXD, run:
-->
LXD のフィーチャーブランチをインストールするには、以下を実行します:

    apk add lxd

### ArchLinux
<!--
Instructions on how to use the AUR package for LXD can be [found here](https://wiki.archlinux.org/index.php/LXD)
-->
LXD の AUR パッケージの使い方については [こちら](https://wiki.archlinux.org/index.php/LXD) をご覧ください。

<!--
Alternatively, the snap package can also be used on ArchLinux (see below).
-->
もしくは、snap パッケージを ArchLinux 上で使うこともできます (後述)。

<!--
Note that in both cases, you will need to build and install the linux-userns kernel.
-->
いずれの場合でも、linux-userns カーネルをビルドしてインストールする必要があります。

### Fedora
<!--
Instructions on how to use the COPR repository for LXD can be [found here](https://copr.fedorainfracloud.org/coprs/ganto/lxd/).
-->
LXD の COPR リポジトリの使い方については [こちら](https://copr.fedorainfracloud.org/coprs/ganto/lxd/) をご覧ください。

<!--
Alternatively, the snap package can also be used on Fedora (see below).
-->
もしくは、snap パッケージを Fedora 上で使うこともできます (後述)。

### Gentoo
<!--
To install the feature branch of LXD, run:
-->
LXD のフィーチャーブランチをインストールするには、以下を実行します:

    emerge --ask lxd

### Ubuntu 14.04 LTS
<!--
To install the LTS branch of LXD, run:
-->
LXD の LTS ブランチをインストールするには、以下を実行します:

    apt install -t trusty-backports lxd lxd-client

### Ubuntu 16.04 LTS
<!--
To install the LTS branch of LXD, run:
-->
LXD の LTS ブランチをインストールするには、以下を実行します:

    apt install lxd lxd-client

<!--
To install the feature branch of LXD, run:
-->
LXD のフィーチャーブランチをインストールするには、以下を実行します:

    apt install -t xenial-backports lxd lxd-client

### Snap パッケージ <!-- Snap package -->(ArchLinux, Debian, Fedora, OpenSUSE, Ubuntu)
<!--
LXD upstream publishes and tests a snap package which works for a number of Linux distributions.
-->
LXD 開発元では、多数の Linux ディストリビューションで動作する snap パッケージを作成し、テストしています。

<!--
The list of Linux distributions we currently test our snap for can be [found here](https://jenkins.linuxcontainers.org/job/lxd-test-snap-latest-stable/).
-->
開発元で現在、snap パッケージをテストしている Linux ディストリビューションのリストは [こちら](https://jenkins.linuxcontainers.org/job/lxd-test-snap-latest-stable/) にあります。

<!--
For those distributions, you should first install snapd using [those instructions](https://snapcraft.io/docs/core/install).
-->
これらのディストリビューションでは、[こちらの手順](https://snapcraft.io/docs/core/install) に従い、snapd をインストールする必要があります。

<!--
After that, you can install LXD with:
-->
その後、LXD を以下のようにインストールできます:

    snap install lxd

### MacOS 用クライアント<!-- MacOS builds -->
<!--
LXD upstream publishes builds of the LXD client for macOS through [Homebrew](https://brew.sh/).
-->
LXD 開発元では、macOS 用の LXD クライアントのビルドを [Homebrew](https://brew.sh/) 経由で配布しています。

<!--
To install the feature branch of LXD, run:
-->
LXD のフィーチャーブランチをインストールするには、以下を実行します:

    brew install lxc

### Windows 用クライアント <!-- Windows builds -->
<!--
Native builds of the LXD client for Windows can be [found here](https://ci.appveyor.com/project/lxc/lxd/branch/master/artifacts).
-->
Windows 用の LXD クライアントのネイティブビルドは [こちら](https://ci.appveyor.com/project/lxc/lxd/branch/master/artifacts) にあります。

### ソースからのインストール <!-- Installing from source -->
<!--
Instructions on building and installing LXD from source [can be found here](https://github.com/lxc/lxd/).
-->
LXD をソースからビルドしてインストールする方法は [こちら](https://github.com/lxc/lxd/) にあります。

# 初期設定 <!-- Initial configuration -->
<!--
Before you can create containers, you need to tell LXD a little bit about your storage and network needs.
-->
コンテナを作成する前に、ストレージやネットワーク環境について少しだけ設定する必要があります。

<!--
This is all done with:
-->
この設定は以下のように実行して行います:

    sudo lxd init

## アクセスコントロール <!-- Access control -->
<!--
Access control for LXD is based on group membership.
The root user as well as members of the "lxd" group can interact with the local daemon.
-->
LXD のアクセスコントロールは、グループメンバーシップに基づいて行います。
root ユーザおよび "lxd" グループのメンバーはローカルデーモンと対話できます。

<!--
If the "lxd" group is missing on your system, create it, then restart the LXD daemon.
You can then add trusted users to it. Anyone added to this group will have full control over LXD.
-->
"lxd" グループがシステムにない場合は、作成した後、LXD デーモンを再起動します。
そして、信用するユーザを "lxd" グループに追加します。このグループに属するユーザ全員が、LXD を完全に制御できます。

<!--
Because group membership is normally only applied at login, you may need to either re-open your user session
or use the "newgrp lxd" command in the shell you're going to use to talk to LXD.
-->
グループメンバーシップはログイン時にのみ追加されるので、追加後にあなたのユーザセッションを閉じて再度開くか、LXD と通信したいシェル上で "newgrp lxd" コマンドを実行する必要があります

# コンテナの作成と使用 <!-- Creating and using your first container -->
<!--
Creating your first container is as simple as:
-->
コンテナを作成するのは簡単です:

    lxc launch ubuntu:16.04 first

<!--
That will create and start a new Ubuntu 16.04 container as can be confirmed with:
-->
これで、新しい Ubuntu 16.04 コンテナが作成され、起動します。このコンテナは以下のように確認できます:

    lxc list

<!--
Your container here is called "first". You also could let LXD give it a random name by
just calling "lxc launch ubuntu:16.04" without a name.
-->
ここで作成し、起動したコンテナは "first" という名前です。"lxc launch ubuntu:16.04" のように名前を指定せずにコマンドを実行し、ランダムな名前になるように LXD を実行することもできます。

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

# コンテナイメージ <!-- Container images -->
<!--
LXD is image based. Containers must be created from an image and so the image store
must get some images before you can do much with LXD.
-->
LXD はイメージベースです。コンテナはイメージから作る必要があります。そして LXD で色々な処理を行う前に、イメージストアにイメージを取得していなければいけません。

<!--
There are three ways to feed that image store:
-->
イメージストアにイメージを取得する方法は 3 つあります:

 1. ビルトインされているイメージ用リモートサーバを使う <!-- Use one of the the built-in image remotes -->
 2. イメージサーバとしてリモートの LXD を使う <!-- Use a remote LXD as an image server -->
 3. イメージの tarball を手動でインポートする <!-- Manually import an image tarball -->

## ビルトインされているイメージ用リモートサーバを使う <!-- Using the built-in image remotes -->
<!--
LXD comes with 3 default remotes providing images:
-->
LXD にはデフォルトでイメージを提供するリモートサーバが 3 つ登録されています:

 1. ubuntu: (stable Ubuntu イメージ用 <!-- for stable Ubuntu images -->)
 2. ubuntu-daily: (daily Ubuntu イメージ用 <!-- for daily Ubuntu images -->)
 3. images: ([その他の多数のディストリビューション用](https://images.linuxcontainers.org))

<!--
To start a container from them, simply do:
-->
これらのビルトインのリモートサーバからコンテナを起動するには、以下のように実行します:

    lxc launch ubuntu:14.04 my-ubuntu
    lxc launch ubuntu-daily:16.04 my-ubuntu-dev
    lxc launch images:centos/6/amd64 my-centos

## イメージサーバとしてリモートサーバを使う <!-- Using a remote LXD as an image server -->
<!--
Using a remote image server is as simple as adding it as a remote and just using it:
-->
リモートのイメージサーバを使うと、リモートサーバとして追加してそれを使うだけですので、とても簡単です:

    lxc remote add my-images 1.2.3.4
    lxc launch my-images:image-name your-container

<!--
An image list can be obtained with:
-->
イメージリストは以下のように取得できます:

    lxc image list my-images:

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

# 複数のホスト <!-- Multiple hosts -->
<!--
The "lxc" command line tool can talk to multiple LXD servers and defaults to talking to the local one.
-->
"lxc" コマンドラインツールは複数の LXD サーバと通信できます。デフォルトではローカルの LXD と通信します。

<!--
Remote operations require the following two commands having been run on the remote server:
-->
リモート操作には、リモートサーバ上で以下の 2 つのコマンドを実行しておく必要があります:

    lxc config set core.https_address "[::]"
    lxc config set core.trust_password some-password

<!--
The former tells LXD to bind all addresses on port 8443. The latter sets a trust password to be used by new clients.
-->
最初のコマンドは、すべてのアドレスのポート 8443 にバインドするように LXD を設定しています。次のコマンドは、新しくクライアントがこのサーバと接続するときに使うパスワードを設定しています。

<!--
Now to talk to that remote LXD, you can simply add it with:
-->
このリモートの LXD と通信を行うために、以下のようにリモートホストを追加します:

    lxc remote add host-a <ip address or DNS>

<!--
This will prompt you to confirm the remote server fingerprint and then ask you for the password.
-->
このコマンドを実行すると、リモートサーバのフィンガープリントの確認と、パスワードを問い合わせるプロンプトが表示されるはずです。

<!--
And after that, use all the same command as above but prefixing the container
and images name with the remote host like:
-->
そのあとで、コンテナとイメージの前にリモートホスト名をつけて、先のコマンドと同様に使用します:

    lxc exec host-a:first -- apt-get update
