# LXD とコマンドラインツールのインストール <!-- Installing LXD and the command line tool -->
## Ubuntu
<!--
If you are on the current development release (vivid), then you can install LXD  
directly from the repository with:
-->
現時点の開発リリース (vivid) を使っている場合は、直接リポジトリから LXD をインストールできます。

    apt-get install lxd

<!--
If you are on an older release or you want the latest version of LXD, you can use  
our PPA instead with:
-->
古いリリースを使っているか、最新の LXD を使いたい場合は、代わりに PPA を使えます。

    add-apt-repository ppa:ubuntu-lxc/lxd-daily
    apt-get update
    apt-get install lxd

## 他のディストリビューション <!-- Other distributions -->
<!--
As of today, only Ubuntu has packages for LXD. Users of other distributions  
can directly download and build LXD from git or use our latest release tarball.  
Instructions for both are available [here](/lxd/downloads).
-->
現時点では、Ubuntu だけが LXD のパッケージを提供しています。他のディストリビューションのユーザは、最新のリリース tarball か git リポジトリから直接 LXD をダウンロードしてビルドできます。

# イメージのインポート <!-- Importing some images -->
<!--
LXD is image based. Containers must be created from an image and so the image store  
must get some images before you can do much with LXD.
-->
LXD はイメージベースです。コンテナはイメージから作る必要があります。そして LXD で色々な処理を行う前に、イメージストアにイメージを取得していなければいけません。

<!--
We expect the way to import and keep your images up to date to change in the future,  
but today we have a simple python script which we ship with LXD and that will let you  
import LXC images into it.
-->
将来的にはイメージをインポートして、最新に保つ方法は変更されるでしょうが、現時点では LXD に付属するシンプルな Python スクリプトがあり、それを使って LXC イメージをインポートできます。

<!--
So let's import some current Ubuntu and Debian images:
-->
現時点の Ubuntu と Debian イメージをインポートしてみましょう:

    lxd-images import lxc ubuntu trusty amd64 --alias ubuntu
    lxd-images import lxc debian wheezy amd64 --aiias debian

<!--
That's going to take a little while as it downloads both images (total of about 150MB)  
and then repacks them to be compatible with LXD.
-->
イメージを両方ダウンロードするのにはしばらく時間がかかるでしょう (全てでおよそ 150MB)。その後 LXD で使えるように変換します。

<!--
We expect to ship compatible images soon which will avoid the repacking step.
-->
変換のステップが必要ない LXD で使えるイメージをすぐに提供する予定です。

# コンテナの作成と使用 <!-- Creating and using your first container -->
<!--
Now that you have a couple of images loaded, you can finally launch your first container:
-->
イメージのロードを行ったので、コンテナが起動できます:

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
あなたが作成し、起動したコンテナは "first" という名前です。"lxc launch ubuntu" のように名前を指定せずにコマンドを実行し、ランダムな名前になるようにも LXD を実行できます。

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

    lxc file pull /etc/hosts .

<!--
To push one, use:
-->
コンテナへファイルを送るには以下のようにします:

    lxc file push hosts /tmp

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

# 複数のホスト <!-- Multiple hosts ->
<!--
The "lxc" command line tool can talk to multiple LXD servers.  
It defaults to talking to the local one using a local UNIX socket.
-->
"lxc" コマンドラインツールは複数の LXD サーバと通信できます。デフォルトではローカルの UNIX ソケットを使ってローカルのホストと通信します。

<!--
To talk to a remote LXD, you can simply add it with:
-->
リモートの LXD と通信するには、以下のようにホストを追加します:

    lxc remote host-a https://<ip address>:8443

<!--
And after that, use all the same command as above but prefixing the container  
and images name with the remote host like:
-->
そのあとで、コンテナとイメージの前にリモートホスト名をつけて、先のコマンドと同様に使用します:

    lxc exec host-a:first -- apt-get update
