# Ubuntu と Debian で CGManager を使う <!-- CGManager in Ubuntu and Debian -->

<!--
In Ubuntu, installing cgmanager and the cgm program can be done with:
-->
Ubuntu では、cgmanager と cgm プログラムのインストールは以下のように行います:

    sudo apt-get install cgmanager cgmanager-utils

<!--
If logind has not placed you into your own cgroup, you can then do so using:
-->
もし logind があなたが所有する cgroup を作成していない場合は以下のコマンドを実行します:

    sudo cgm create all me
    sudo cgm chown all me $(id -u) $(id -g)
    sudo cgm movepid all me $$

# CGManager を他のディストリビューションでビルドする <!-- Building CGManager on other distributions -->
<!--
If you are running another distribution, you can install it by hand using:
-->
もし他のディストリビューションで cgmanager を実行する場合は、手動で以下のようにインストールできます:

    git clone git://github.com/lxc/cgmanager
    sh bootstrap.sh
    ./configure --prefix=/
    make
    sudo make install
    sudo /sbin/cgmanager --debug -m name=systemd

# LXC コンテナ内部で CGManager を使う <!-- Using CGManager from inside a LXC container -->
<!--
To use cgmanager in containers, you need to tell lxc to bind mount the
cgmanager socket into the container by adding the following line into
the container configuration file (e.g. /var/lib/lxc/container/config).
-->
コンテナ内で cgmanager を使うには、cgmanager のソケットをコンテナ内にバインドマウントするように lxc を設定する必要があります。これを行うには (例えば /var/lib/lxc/container/config ファイル内で) 以下のように設定します。

    lxc.mount.auto = cgroup
