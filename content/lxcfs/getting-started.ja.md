# git からの lxcfs のビルドと実行 <!-- Building and running lxcfs from git -->

<!--
LXCFS is meant to be run once per host system at /var/lib/lxcfs.
-->
LXCFS はホストシステムごとに 1 つだけ、/var/lib/lxcfs で実行するように作られています。

<!--
Building lxcfs requires the following libraries and development headers:
-->
lxcfs をビルドするには以下のライブラリと開発ヘッダが必要です:

 - libcgmanager-dev
 - libnih-dbus-dev
 - libnih-dev
 - libfuse-dev

<!--
Then to build and run it from the git repository, do:
-->
そして以下のように git リポジトリからコードを取得し、ビルド、実行します。

    git clone git://github.com/lxc/lxcfs
    cd lxcfs
    ./bootstrap.sh
    ./configure
    make
    sudo mkdir -p /var/lib/lxcfs
    sudo ./lxcfs -s -f -o allow_other /var/lib/lxcfs/

<!--
And that's it, you'll have lxcfs mounted on top of /var/lib/lxcfs/.
-->
以上で、/var/lib/lxcfs/ で lxcfs がマウントできます。