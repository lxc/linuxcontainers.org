# 動作環境 <!-- Requirements -->

<!--
Hard dependencies:
-->
必須の環境:

<!--
 * One of glibc, musl libc, uclib or bionic as your C library
 * Linux kernel >= 2.6.32
 -->
 * C ライブラリとして glibc、musl libc、uclib、bionic のいずれか
 * Linux カーネル 2.6.32 以上

<!--
Extra dependencies for lxc-attach:
-->
lxc-attach の動作に必要な環境:

<!--
 * Linux kernel >= 3.8
 -->
 * Linux カーネル 3.8 以上

<!--
Extra dependencies for unprivileged containers:
-->
非特権のコンテナが動作するのに必要な環境:

<!--
 * libpam-cgfs configuring your system for unprivileged CGroups operation
 * A recent version of shadow including newuidmap and newgidmap
 * Linux kernel >= 3.12
 -->
 * libpam-cgfs 非特権の cgroup 操作を行うためにシステムを設定する PAM モジュール
 * newuidmap、newgidmap を含む最新バージョンの shadow
 * Linux カーネル 3.12 以上

<!--
Recommended libraries:
-->
推奨ライブラリ:

<!--
 * libcap (to allow for capability drops)
 * libapparmor (to set a different apparmor profile for the container)
 * libselinux (to set a different selinux context for the container)
 * libseccomp (to set a seccomp policy for the container)
 * libgnutls (for various checksumming)
 * liblua (for the LUA binding)
 * python3-dev (for the python3 binding)
 -->
 * libcap (ケーパビリティを落とすために必要)
 * libapparmor (コンテナに対して独自の apparmor プロファイルを設定するために必要)
 * libselinux (コンテナに対して独自の SELinux コンテキストを設定するために必要)
 * libseccomp (コンテナに対して seccomp ポリシーを設定するために必要)
 * libgnutls (色々なチェックサム確認に必要)
 * liblua (lua バインディングに必要)
 * python3-dev (python3 バインディングに必要)

# インストール<!-- Installation -->

<!--
In most cases, you'll find recent versions of LXC available for your Linux distribution. Either directly in the distribution's package repository or through some backport channel.
-->
通常はあなたがお使いのディストリビューションが、ディストリビューションのパッケージリポジトリもしくはバックポート用のチャンネル経由で、最新版の LXC を提供しているでしょう。

<!--
For your first LXC experience, we recommend you use a recent supported release, such as a recent bugfix release of LXC 4.0.
-->
最初に LXC を使う場合は、LXC 4.0 の最新のバグフィックスのなされたバージョンのような、最新のサポート版リリースをお使いになることを推奨します。

<!--
If using Ubuntu, we recommend you use Ubuntu 18.04 LTS as your container host. LXC bugfix releases are available directly in the distribution package repository shortly after release and those offer a clean (unpatched) upstream experience.
-->
Ubuntu を使っている場合、コンテナホストとして Ubuntu 18.04 LTS を使うことを推奨します。
LXC のバグフィックスリリースは、リリース後すぐに直接ディストリビューションのパッケージリポジトリ経由で利用可能で、パッチの当たっていないクリーンな最新版を提供します。

<!--
Ubuntu is also one of the few (if not only) Linux distributions to come by default with everything that's needed for safe, unprivileged LXC containers.
-->
Ubuntu は、安全な非特権の LXC コンテナのために必要な全てをデフォルトで揃えている Linux ディストリビューションのいくつかのうちの 1 つです (Ubuntu 以外にもそのようなディストリビューションは存在します)。

<!--
On such an Ubuntu system, installing LXC is as simple as:
-->
Ubuntu では、LXC をインストールするのは次のように簡単です:

    sudo apt-get install lxc 

<!--
Your system will then have all the LXC commands available, all its templates as well as the python3 binding should you want to script LXC.
-->
あなたのシステム上には、利用可能な LXC コマンドの全て、テンプレートの全て、LXC 処理のスクリプトに必要な python3 バインディングがインストールされるでしょう。

<!--
Use the following command to check whether the Linux kernel has the required configuration:
-->
Linux カーネルに必要な機能を持っているかどうかをチェックするには次のコマンドを使います:

    lxc-checkconfig

# 特権コンテナの作成 <!-- Create Privileged Containers -->

<!--
Privileged containers are containers that are created by root and run as root.
-->
特権コンテナとは、root で作成し、root で実行するコンテナのことです。

<!--
Privileged containers are the easiest way to get started learning about and experimenting with LXC, but they may not be appropriate for production use. Depending on the host Linux distribution, privileged containers may be protected by some capability dropping, apparmor profiles, selinux context or seccomp policies but ultimately, the processes still run as root and so you should never give access to root inside a privileged container to an untrusted party. Even knowing that privileged containers are less secure, if you still must create privileged containers or they are specifically required for your use case, then creating them is quite simple. By default, LXC will create privileged containers.
-->
特権コンテナは、LXC について学び、実験し始める場合のもっとも簡単な方法です。しかし、本番環境での使用に適していないかもしれません。ホストの Linux ディストリビューションによっては、特権コンテナは、一部のケーパビリティーの削除、AppArmor プロファイルや SELinux コンテキスト、Seccomp ポリシーといった機能で保護されている場合があります。しかし最終的には、プロセスは root 権限で実行されますので、特権コンテナ内の root へのアクセス権を信頼できない人に決して与えないでください。特権コンテナの安全性が低いとわかっても、それでも特権コンテナを作成しなければいけない場合、または特権コンテナがユースケースで特に必要な場合、特権コンテナを作成することはとても簡単です。デフォルトでは、LXC は特権コンテナを作成します。

<!--
Note that the terminal prompts we use here may be different than you see on your computer. The terminal prompts we use here emphasize if we are currently in a host shell or container shell and which user we are.
-->
以下の実行例で表示するターミナルのプロンプトは、実際に使用するコンピューターで表示されるプロンプトと違うかもしれません。ここで使用するターミナルプロンプトは、現在ホストのシェルにいるのか、コンテナのシェルにいるのか、そしてどのユーザーなのかを強調するためのものです。

<!--
Create a privileged container with the following command. You can choose any container name that will be memorable for you. LXC's download template will help you select a container image available from https://images.linuxcontainers.org/
-->
特権コンテナは、次のコマンドで作成します。コンテナ名は、覚えやすい名前をつけられます。LXC のダウンロードテンプレートは、https://images.linuxcontainers.org/ で使えるイメージを選択するのに役立つでしょう。

    root@host:~# lxc-create --name mycontainer --template download 

<!--
If you know the container image you want to use, you can specify the options to be sent to the download template. For example,
-->
使いたいコンテナイメージ名がわかっている場合は、ダウンロードテンプレートにオプションを指定できます。例えば、次のように指定します。

    root@host:~# lxc-create --name mycontainer --template download -- --dist alpine --release 3.19 --arch amd64

<!--
After creating the container, you can start it.
-->
コンテナが作成されたら、次のように起動できます。

    root@host:~# lxc-start --name mycontainer

<!--
You can see status information about the container.
-->
コンテナの状態の情報を見ることができます。

    root@host:~# lxc-info --name mycontainer
    Name:           mycontainer
    State:          RUNNING
    PID:            3250
    IP:             10.0.3.224
    Link:           vethgmeH9z
     TX bytes:      1.51 KiB
     RX bytes:      2.15 KiB
     Total bytes:   3.66 KiB

<!--
You can see status information about all containers.
-->
すべてのコンテナの状態の情報を見ることができます。

    root@host:~# lxc-ls --fancy
    NAME        STATE   AUTOSTART GROUPS IPV4       IPV6 UNPRIVILEGED 
    mycontainer RUNNING 0         -      10.0.3.224 -    false        

<!--
Start a container shell.
-->
コンテナ内のシェルを起動します。

    root@host:~# lxc-attach --name mycontainer --clear-env

<!--
Inside the container is where we really get a feeling for what a system container is and how it is like a lightweight virtual machine in many ways. The changes we make inside the container persist. If we later stop the container and restart it, our changes will still be there.
-->
コンテナ内部では、システムコンテナとは何なのか、それが様々な点でどのように軽量な仮想マシンであるのかについて、実際に感じることができます。コンテナ内で行った変更は保存されます。あとでコンテナを停止して、再起動しても、変更はそのまま残っているでしょう。

<!--
Explore the container.
-->
コンテナを探索してみましょう。

    root@mycontainer:~# cat /etc/os-release
    NAME="Alpine Linux"
    ID=alpine
    VERSION_ID=3.19.0
    PRETTY_NAME="Alpine Linux v3.19"
    HOME_URL="https://alpinelinux.org/"
    BUG_REPORT_URL="https://gitlab.alpinelinux.org/alpine/aports/-/issues"

<!--
Update the package index, upgrade installed packages, and install more packages you would like available.
-->
パッケージインデックスを更新し、インストールされたパッケージを更新し、さらに利用できるようにしたいほかのパッケージをインストールしてみます。

    root@mycontainer:~# apk update

    root@mycontainer:~# apk add --upgrade apk-tools

    root@mycontainer:~# apk upgrade --available

    root@mycontainer:~# apk add vim python3

<!--
Exit the container shell.
-->
コンテナのシェルから exit します。

    root@mycontainer:~# exit

<!--
You can stop the container.
-->
コンテナを停止します。

    root@host:~# lxc-stop --name mycontainer

<!--
If you will never need the container again, then you can permanently destroy it.
-->
コンテナが二度と必要ではない場合、永久に削除できます。

    root@host:~# lxc-destroy --name mycontainer

# 自動起動 <!-- Autostart -->
<!--
By default, containers do not start automatically when the host restarts. We may have a service like a web app in the container that should always be up and running. We would like the container to start when the host starts.
-->
デフォルトでは、コンテナはホストの再起動時には自動的に起動しません。コンテナ内で常に起動して実行されている必要がある Web アプリのようなサービスを運用しているケースがあるかもしれません。ホストの起動時にコンテナを起動するようにします。

<!--
Suppose we have already created and started a container named `mycontainer` as described above.
-->
先の説明のように、`mycontainer` という名前のコンテナの作成が済んでおり、起動しているとします。

    root@host:~# lxc-ls --fancy
    NAME        STATE   AUTOSTART GROUPS IPV4       IPV6 UNPRIVILEGED 
    mycontainer RUNNING 0         -      10.0.3.30  -    false        

<!--
We can reconfigure the container to autostart by added a line to the container's configuration.
-->
コンテナの構成に設定行を追加することで、コンテナを自動起動するように設定できます。

    root@host:~# echo "lxc.start.auto = 1" >>/var/lib/lxc/mycontainer/config

<!--
After configuring the container, we can reboot the host to test that the container does, in fact, autostart.
-->
コンテナを設定したあと、ホストをリブートして、コンテナが実際に自動起動するかテストできます。

    root@host:~# reboot

<!--
After allowing the host some time to reboot and signing back into the host's shell, we see that the container is running and has the autostart property set to 1.
-->
ホストを再起動して、ホストのシェルにログインできるようになったあと、コンテナが実行中で、コンテナの autostart プロパティが 1 に設定されていることがわかります。

    root@host:~# lxc-ls --fancy
    NAME        STATE   AUTOSTART GROUPS IPV4       IPV6 UNPRIVILEGED 
    mycontainer RUNNING 1         -      10.0.3.30  -    false

It works!

<!--
If we want several of the containers we create to have autostart, then we might prefer to create a new configuration file to use with `lxc-create`.
-->
作成するコンテナのいくつかで自動起動を設定したい場合、`lxc-create` で使う新しい設定ファイルを作成することをおすすめします。

    root@host:~# cp /etc/lxc/default.conf /etc/lxc/autostart.conf

    root@host:~# echo "lxc.start.auto = 1" >>/etc/lxc/autostart.conf

    root@host:~# lxc-create --name containera --config /etc/lxc/autostart.conf --template download -- --dist alpine --release 3.19 --arch amd64

<!--
As yet another option, if we want *all* of our containers to autostart, then we can modify the default LXC configuration directly.
-->
さらに別のオプションとして、すべてのコンテナで自動起動させたい場合、デフォルトの LXC 設定を変更できます。

<!--
For safe keeping, create a backup of the original LXC `default.conf` file.
-->
安全のために、オリジナルの LXC の `default.conf` ファイルのバックアップを作成します。

    root@host:~# cp /etc/lxc/default.conf /etc/lxc/default.conf.original

<!--
Now modify the default configuration.
-->
そして、デフォルトの設定を書き換えましょう。

    root@host:~# echo "lxc.start.auto = 1" >>/etc/lxc/default.conf

<!--
All containers we create using the default configuration file from now on will have autostart. For example,
-->
デフォルト設定ファイルを使う、作成するすべてのコンテナが自動起動するようになります。例えば、

     root@host:~# lxc-create --name containerb --template download -- --dist alpine --release 3.19 --arch amd64

# IP アドレス <!-- IP Address -->

<!--
Above, the output of `lxc-info --name mycontainer` and `lxc-ls --fancy` have shown us that `mycontainer` has an IP address on the host's local network.
-->
上記の、`lxc-info --name mycontainer` と `lxc-ls --fancy` の出力は、`mycontainer` がホストのローカルネットワーク上に IP アドレスを持っていることを示しています。

<!--
If we start a container and check the output of `lxc-ls` immediately, we will see that the container does not yet have an IP address.
-->
コンテナを起動した直後に `lxc-ls` の出力を確認すると、コンテナはまだ IP アドレスを持っていないことがわかるでしょう。

    root@host:~# lxc-stop --name mycontainer

    root@host:~# lxc-start --name mycontainer && lxc-ls --fancy
    NAME        STATE   AUTOSTART GROUPS IPV4 IPV6 UNPRIVILEGED
    mycontainer RUNNING 1         -      -    -    false

<!--
If we wait about 5 seconds and check again, then the container does have an IP address.
-->
5 秒ほど待って、再度確認すると、IP アドレスが設定されています。

    root@host:~# lxc-ls --fancy
    NAME        STATE   AUTOSTART GROUPS IPV4       IPV6 UNPRIVILEGED
    mycontainer RUNNING 1         -      10.0.3.152 -    false

<!--
If the container does not have an IP address, we may need to [configure the firewall](https://linuxcontainers.org/incus/docs/main/howto/network_bridge_firewalld/). For example, on Ubuntu 22.04
-->
コンテナが IP アドレスを持っていない場合、[ファイアウォールの設定](https://linuxcontainers.org/incus/docs/main/howto/network_bridge_firewalld/)（[日本語訳](https://incus-ja.readthedocs.io/ja/latest/howto/network_bridge_firewalld/)）が必要かもしれません。例えば、Ubuntu 22.04 では次のようになります。


    root@host:~# ufw allow in on lxcbr0
    root@host:~# ufw route allow in on lxcbr0
    root@host:~# ufw route allow out on lxcbr0

<!--
where the value `lxcbr0` comes from `LXC_BRIDGE` in `/etc/default/lxc-net`.
-->
ここで `lxcbr0` は `/etc/default/lxc-net` ファイル内の `LXC_BRIDGE` で設定されている値です。

<!--
If we are going to do something in the container that requires access to the Internet, we need to wait until the container has an IP address. One possibilty is to poll the output of `lxc-info` until it includes an IP address.
-->
インターネットへのアクセスが必要なコンテナ内で何か処理を行いたい場合、コンテナに IP アドレスが割り当たるまで待つ必要があります。`lxc-info` の出力に IP アドレスが含まれるまでポーリングするというのも、ひとつの方法でしょう。

    root@host:~# lxc-start --name mycontainer

    root@host:~# while ! lxc-info -n mycontainer | grep -Eq "^IP:\s*[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\s*$"; do sleep 1; done; echo "Container connected!"
    Container connected!

<!--
Notice that the IP address `10.0.3.152` is not the same as the IP address `10.0.3.30` that we saw earlier. This is because the IP address is dynamically assigned by the host to the container when the container joins the network.
-->
IP アドレス `10.0.3.152` は、前に見たときの `10.0.3.30` と同じではないことに注意してください。これは、コンテナがネットワークに参加する際に、IP アドレスが、ホストによってコンテナに動的に割り当てられるためです。

<!--
We can see the current list of leases with the following.
-->
次のような現在のアドレスのリースのリストを確認できます。

    root@host:~# cat /var/lib/misc/dnsmasq.lxcbr0.leases 
    1705896165 8e:e0:fc:72:79:65 10.0.3.152 mycontainer 01:8e:e0:fc:72:79:65

<!--
Stopping the container removes the lease.
-->
コンテナを停止すると、リースが削除されます。

    root@host:~# lxc-stop --name mycontainer;

    root@host:~# cat /var/lib/misc/dnsmasq.lxcbr0.leases

<!--
Restarting the container creates a new lease possibly with a different IP address.
-->
コンテナを再起動すると、異なる IP アドレスの新しいリースが作成される可能性があります。

    root@host:~# lxc-start --name mycontainer

    root@host:~# cat /var/lib/misc/dnsmasq.lxcbr0.leases
    1705896699 26:61:b7:e3:53:73 10.0.3.110 mycontainer 01:26:61:b7:e3:53:73

<!--
Don't try this at home but force destroying a container does not clear the container's lease. Be kind. Always stop a container before destroying it.
-->
これは真似しないでください。コンテナを強制的に削除しても、コンテナのリースはクリアされません。常に削除の前にコンテナを停止してください。

    root@host:~# lxc-destroy --force --name mycontainer

    root@host:~# cat /var/lib/misc/dnsmasq.lxcbr0.leases
    1705896699 26:61:b7:e3:53:73 10.0.3.110 mycontainer 01:26:61:b7:e3:53:73

## DHCP 予約 <!-- DHCP Reservation -->

<!--
We may need a predictable IP address for the container. We can make a DHCP reservation on the host so the container is assigned the same IP address each time the container joins the local network.
-->
コンテナに予測可能な IP アドレスが必要になる場合があるでしょう。ホスト上で DHCP 予約を行うと、コンテナがローカルネットワークに参加するたびに、コンテナに同じ IP アドレスが割り当たります。

<!--
To enable DHCP reservations, we uncomment the `LXC_DHCP_CONFILE` line in `/etc/default/lxc-net`.
-->
DHCP 予約を有効にするには、`/etc/default/lxc-net` の `LXC_DHCP_CONFILE` のコメントを外します。

    root@host:~# sed -i 's|^#LXC_DHCP_CONFILE=.*$|LXC_DHCP_CONFILE=/etc/lxc/dnsmasq.conf|' /etc/default/lxc-net

<!--
Add the DHCP reservation.
-->
DHCP 予約を追加します。

    root@host:~# echo "dhcp-host=mycontainer,10.0.3.100" >>/etc/lxc/dnsmasq.conf

<!--
Note: the IP address (i.e. `10.0.3.100` in the command above) must be within `LXC_DHCP_RANGE`. To see `LXC_DHCP_RANGE`, open `/etc/lxc/dnsmasq.conf`. Suppose `LXC_DHCP_RANGE="10.0.1.2,10.0.1.254"`. Then the command above should be
-->
IP アドレス（つまり、上記コマンドの `10.0.3.100`）は、`LXC_DHCP_RANGE` 内のアドレスである必要があります。`LXC_DHCP_RANGE` を確認するには `/etc/lxc/dnsmasq.conf` ファイルを確認します。`LXC_DHCP_RANGE="10.0.1.2,10.0.1.254"` となっている場合は、前述のコマンドは `10.0.3.100` の代わりに、次のようになります。

    root@host:~# echo "dhcp-host=mycontainer,10.0.1.100" >>/etc/lxc/dnsmasq.conf

<!--
instead of the command with `10.0.3.100`. Moreover, the IP address must not already be in use. One way to pick an available IP address is use one of the addresses assigned dynamically while working through the section above.
-->
また、IP アドレスが使用中であってはなりません。使用可能な IP アドレスを選択する方法の 1 つとして、上記セクションの作業中に動的に割り当てられたアドレスの 1 つ使う方法があります。

<!--
Restart the `lxc-net` service so the DHCP reservation is enabled.
-->
DHCP 予約を有効にしたら、`lxc-net` サービスを再起動します。

    root@host:~# service lxc-net restart

<!--
Restart the container. (You may need to recreate the container if you destroyed it somewhere along the way.)
-->
コンテナを再起動します（途中でコンテナを削除した場合は再作成する必要があります）。

    root@host:~# lxc-stop --name mycontainer

    root@host:~# lxc-start --name mycontainer

<!--
Wait a few seconds and then check the container's IP address.
-->
数秒待って、コンテナの IP アドレスをチェックしましょう。

    root@host:~# lxc-ls --fancy
    NAME        STATE   AUTOSTART GROUPS IPV4       IPV6 UNPRIVILEGED 
    mycontainer RUNNING 1         -      10.0.3.100 -    false        

<!--
Yay! Now we can depend on the container always having the same IP address.
-->
やったー! これで、コンテナが常に同じ IP アドレスを持つことに依存できます。

# マウントするボリュームの追加 <!-- Add a Volume Mount -->

<!--
A container's file system activity is restricted to `/var/lib/lxc/<container-name>/rootfs`. When a container is destroyed all of `/var/lib/lxc/<container-name>` is also destroyed. You may have multiple containers and would like to share some file system space between them. You may have disposable containers and would like some file system space to outlive the container. In cases like these, you can create a host volume outside the container's `rootfs` and then mount that volume inside the container.
-->
コンテナのファイルシステムの活動は `/var/lib/lxc/<container-name>/rootfs` に限られます。コンテナが削除されると、`/var/lib/lxc/<container-name>` のすべても削除されます。複数のコンテナがあり、それらの間でファイルシステムの一部を共有したい場合があるかもしれません。使い捨てのコンテナがあり、コンテナがなくなっても存続できるファイルシステム領域が必要な場合もあります。このような場合、コンテナの `rootfs` と別の場所にホストボリュームを作成し、コンテナ内にそのボリュームをマウントできます。

<!--
Suppose we have already created and started a container named `mycontainer` as described above.
-->
これまでのように、`mycontainer` という名前のコンテナを作成し、起動しているとします。

<!--
Create the host volume.
-->
ホストボリュームを作成します。

    root@host:~# mkdir -p /host/path/to/volume

<!--
To mount the volume inside the container there are two options.
-->
コンテナ内でこのボリュームをマウントするために、2 つの方法があります。

<!--
The first option requires two steps: manually create the mount target inside the container and then configure the container mount.
-->
最初のオプションには 2 ステップが必要です: コンテナ内にマウント先を手動で作成します。そしてコンテナへのマウントの設定を行います。

    root@host:~# lxc-attach --name mycontainer --clear-env -- mkdir -p /container/mount/point

    root@host:~# echo "lxc.mount.entry = /host/path/to/volume container/mount/point none bind 0 0" >>/var/lib/lxc/mycontainer/config

<!--
The second option requires only one step: use `create=dir` when configuring the mount so that the mount target is automatically created inside the container for you.
-->
2 つ目のオプションで必要な手順は 1 つだけです: マウントを設定するときに `create=dir` を使用します。これで、マウント先が自動的にコンテナ内に作成されます。

    root@host:~# echo "lxc.mount.entry = /host/path/to/volume container/mount/point none bind,create=dir 0 0" >>/var/lib/lxc/mycontainer/config

<!--
With either option, note that the container mount target path `container/mount/point` is relative. It does not have a leading `/` character.
-->
どちらの方法でも、コンテナのマウント先のパス `container/mount/point` は相対パスであることに注意してください。先頭に `/` はありません。

<!--
After configuring the container, restart it so the new configuration is used.
-->
コンテナを設定したら、新しい設定を使うように再起動します。

    root@host:~# lxc-stop --name mycontainer

    root@host:~# lxc-start --name mycontainer

<!--
Now that we have created the volume and mounted it in the container, we can test that it works.
-->
ボリュームを作成して、コンテナ内にマウントしたので、それが機能しているかテストできます。

<!--
On the host, add a text file in the volume.
-->
ホスト上で、ボリュームにテキストファイルを追加します。

    root@host:~# echo "host message" >/host/path/to/volume/messages.txt

<!--
Start a container shell.
-->
コンテナでシェルを起動します。

    root@host:~# lxc-attach --name mycontainer --clear-env

<!--
The container can see the text file and its content.
-->
コンテナでテキストファイルの存在を確認し、その中身が見れます。

    root@mycontainer:~# cat /container/mount/point/messages.txt
    host message

<!--
The container can add text to the text file.
-->
コンテナからテキストにテキストを追加できます。

    root@mycontainer:~# echo "mycontainer message" >>/container/mount/point/messages.txt

<!--
Exit the container shell.
-->
コンテナのシェルを exit します。

    root@mycontainer:~# exit

<!--
The host can see the container's message.
-->
ホストから、コンテナ内で追加したメッセージを見れます。
    
    root@host:~# cat /host/path/to/volume/messages.txt 
    host message
    mycontainer message

# root ユーザーによる共有の UID と GID レンジを持つ非特権コンテナの作成 <!-- Create Unprivileged Containers as Root with Shared UID and GID Ranges -->

<!--
Creating system-wide unprivileged containers (that is, unprivileged containers created and started by root) requires only a few extra steps to organize subordinate user IDs (uid) and subordinate group IDs (gid).
-->
システム全体の非特権コンテナ（rootが作成して起動する非特権コンテナ）を作成するには、サブ UID とサブ GID を構成するためのステップがいくつか必要です。

<!--
Specifically, you need to manually allocate the subordinate uid and gid ranges to root in `/etc/subuid` and `/etc/subgid` and then set those ranges in `/etc/lxc/default.conf` using `lxc.idmap` entries.
-->
具体的には、サブ UID と GID の範囲を、`/etc/subuid` と `/etc/subgid` で root に手動で割り当てます。そして、`/etc/lxd/default.conf` 内に `lxc.idmap` を使って、それらの範囲を設定する必要があります。

<!--
For example, if you have not done anything on your host related to subordinate uid and gid ranges, the following commands may be all you need. Before doing the following, take a look in `/etc/subuid` and `/etc/subgid` to see that the range 100000:65536 is not already in use on your host. If the range is in use, you can use another range.
-->
たとえば、ホスト上でサブ UID と GID の範囲に関して何も設定していない場合、必要なのは次のようなコマンドだけです。ここで示した操作を行う前に、`/etc/subuid` と `/etc/subgid` を調べて、ホスト上で 100000:65536 の範囲がまだ使われていないことを確認してください。範囲が使用中の場合、他の範囲を使えます。

    echo "root:100000:65536" >>/etc/subuid
    echo "root:100000:65536" >>/etc/subgid
    echo "lxc.idmap = u 0 100000 65536" >>/etc/lxc/default.conf
    echo "lxc.idmap = g 0 100000 65536" >>/etc/lxc/default.conf

<!--
That's it! Any container you create as root from now on will be running unprivileged. For example,
-->
これで終わりです。root ユーザーで作成するコンテナはすべて、特権なしの実行になるでしょう。例えば、

    lxc-create --name container1 --template download
    lxc-create --name container2 --template download

<!--
Note that all containers created using the modified default configuration in `/etc/lxc/default.conf` will share the same subordinate uid and gid ranges. This may not be as secure as each container having its own subordinate uid and gid ranges.
-->
`/etc/lxc/default.conf` 内の変更されたデフォルト設定を使って作成されたコンテナはすべて、同じサブ UID と GID の範囲を共有することに注意してください。これは、コンテナがそれぞれ独立したサブ UID と GID を使うよりはセキュアではない可能性があります。

<!--
If you start a container, you can explore the uid range in use as seen from the host side compared to the uid range as seen from the container side.
-->
コンテナを起動すると、コンテナ側から見た UID の範囲と比較することで、ホスト側から見た UID の範囲を見ることができます。

    lxc-start --name container1
    ps aux
    lxc-attach --name container1 --clear-env -- ps aux

# root ユーザーによる独立した UID と GID の範囲を持つ非特権コンテナの作成 <!-- Create Unprivileged Containers as Root with Separate UID and GID Ranges -->

<!--
By using separate subordinate uid and gid ranges for each container, a security breach in one container will not have access to other containers.
-->
コンテナごとに独立したサブ UID と GID の範囲を使うことで、あるコンテナでのセキュリティ侵害で他のコンテナにアクセスできなくなります。

<!--
Suppose we want to have two containers, we could do the following. (This assumes `/etc/lxc/default.conf` has not been modified as described above.)
-->
2 つのコンテナを作りたいとすると、次のようにします（`/etc/lxc/default.conf` は前のセクションのように変更されていない前提です）。

<!--
Configure and create the first container with its own uid and gid ranges.
-->
独自の UID と GID の範囲を持つ最初のコンテナを設定し、作成します。

    echo "root:100000:65536" >>/etc/subuid
    echo "root:100000:65536" >>/etc/subgid
    cp /etc/lxc/default.conf /etc/lxc/container1.conf
    echo "lxc.idmap = u 0 100000 65536" >>/etc/lxc/container1.conf
    echo "lxc.idmap = g 0 100000 65536" >>/etc/lxc/container1.conf
    lxc-create --config /etc/lxc/container1.conf --name container1 --template download

<!--
Configure and create the second container with different uid and gid ranges.
-->
異なる UID と GID の範囲を使って、2 つめのコンテナを設定し、作成します。

    echo "root:200000:65536" >>/etc/subuid
    echo "root:200000:65536" >>/etc/subgid
    cp /etc/lxc/default.conf /etc/lxc/container2.conf
    echo "lxc.idmap = u 0 200000 65536" >>/etc/lxc/container2.conf
    echo "lxc.idmap = g 0 200000 65536" >>/etc/lxc/container2.conf
    lxc-create --config /etc/lxc/container2.conf --name container2 --template download

<!--
After creating the containers, you can optionally delete the configuration files `/etc/lxc/container1.conf` and `/etc/lxc/container2.conf`.
-->
コンテナの作成後、`/etc/lxc/container1.conf` と `/etc/lxc/container2.conf` は削除しても構いません。

# 一般ユーザーによる非特権コンテナの作成 <!-- Creating unprivileged containers as a user -->

<!--
Unprivileged containers are the safest containers. Those use a map of uid and gid to allocate a range of uids and gids to a container. That means that uid 0 (root) in the container is actually something like uid 100000 outside the container. So should something go very wrong and an attacker manages to escape the container, they'll find themselves with about as many rights as a nobody user.
-->
非特権コンテナは最も安全なコンテナです。
非特権コンテナでは、コンテナで使う範囲の uid と gid を割り当てるために、uid と gid のマッピングを使います。
これはコンテナ内の uid 0 (root) が、コンテナの外では実際は uid が 100000 を持つというようになります。
それゆえ、万が一間違って問題のある操作を行ったり、攻撃者がコンテナを抜けだそうとしても、nobody ユーザと同じ程度の権限しか自身にないことがわかるでしょう。

<!--
Unfortunately this also means that the following common operations aren't allowed:
-->
残念ながら、このことは同時に以下のような操作が非特権コンテナでは許可されないことを意味します:

<!--
  * mounting of most filesystems
  * creating device nodes
  * any operation against a uid/gid outside of the mapped set
  -->
  * ほとんどのファイルシステムのマウント
  * デバイスノードの作成
  * マッピングが存在していない uid/gid に対する操作

<!--
Because of that, most distribution templates simply won't work with those. Instead you should use the "download" template which will provide you with pre-built images of the distributions that are known to work in such an environment.
-->
このため、ほとんどのディストリビューションのコンテナテンプレートは動作しないでしょう。
代わりに、このような非特権の環境でも動くことを確認した、あらかじめビルド済みのディストリビューションのイメージを提供する "download" テンプレートを使う必要があります。

<!--
The following instructions assume the use of a recent Ubuntu system or an alternate Linux distribution offering a similar experience, i.e., a recent kernel and a recent version of shadow, as well as libpam-cgfs and default uid/gid allocation.
-->
このあとの説明は、最新のカーネル、最新バージョンの shadow、libpam-cgfs、デフォルトの uid/gid 割り当てと言った、最新の Ubuntu や同等の Linux ディストリビューションを使用していると仮定して行います。

<!--
First of all, you need to make sure your user has a uid and gid map defined in `/etc/subuid` and `/etc/subgid`. On Ubuntu systems, a default allocation of 65536 uids and gids is given to every new user on the system, so you should already have one. If not, you'll have to use usermod to give yourself one.
-->
まず第一に、お使いの (非特権コンテナを使おうとする) ユーザが `/etc/subuid` と `/etc/subgid` で定義された uid/gid のマッピングを持っている必要があります。Ubuntu では、デフォルトで 65536 個の uid と gid の割り当てが、システム上で全ての新規ユーザに与えられますので、Ubuntu をお使いの場合はすでにそのマッピングを持っているはずです。もしマッピングがない場合は、usermod コマンドを使って割り当てる必要があります。

<!--
Next up is `/etc/lxc/lxc-usernet` which is used to set network devices quota for unprivileged users. By default, your user isn't allowed to create any network device on the host, to change that, add:
-->
次に、非特権ユーザに与えるネットワークデバイスの範囲を設定するために使う `/etc/lxc/lxc-usernet` を設定します。
デフォルトでは、ホスト上で全くネットワークデバイスを割り当てできないことになっていますので、このファイルに以下のような設定を追加します:

    echo "$(id -un) veth lxcbr0 10" | sudo tee -a /etc/lxc/lxc-usernet

<!--
This means that "your-username" is allowed to create up to 10 veth devices connected to the lxcbr0 bridge.
-->
これは、"your-username" にブリッジ lxcbr0 に接続する 10 個の veth デバイスの作成を許可するという意味です。


<!--
With that done, the last step is to create an LXC configuration file.
-->
これが済むと、最後のステップは LXC の設定ファイルの作成です。

<!--
 * Create the `~/.config/lxc directory` if it doesn't exist.
 * Copy `/etc/lxc/default.conf` to `~/.config/lxc/default.conf`
 * Append the following two lines to it:
    * `lxc.idmap = u 0 100000 65536`
    * `lxc.idmap = g 0 100000 65536`
 -->
 * `~/.config/lxc` ディレクトリがない場合は作成します。
 * `/etc/lxc/default.conf` を `~/.config/lxc/default.conf` にコピーします。
 * 以下の 2 行をコピーしたファイルに追加します。
    * `lxc.idmap = u 0 100000 65536`
    * `lxc.idmap = g 0 100000 65536`

<!--
Those values should match those found in /etc/subuid and /etc/subgid, the values above are those expected for the first user on a standard Ubuntu system.
-->
ここで設定した値は `/etc/subuid` と `/etc/subgid` にある値と一致している必要があり、標準の Ubuntu システムの初期ユーザのために存在が必要です。

    mkdir -p ~/.config/lxc
    cp /etc/lxc/default.conf ~/.config/lxc/default.conf
    MS_UID="$(grep "$(id -un)" /etc/subuid  | cut -d : -f 2)"
    ME_UID="$(grep "$(id -un)" /etc/subuid  | cut -d : -f 3)"
    MS_GID="$(grep "$(id -un)" /etc/subgid  | cut -d : -f 2)"
    ME_GID="$(grep "$(id -un)" /etc/subgid  | cut -d : -f 3)"
    echo "lxc.idmap = u 0 $MS_UID $ME_UID" >> ~/.config/lxc/default.conf
    echo "lxc.idmap = g 0 $MS_GID $ME_GID" >> ~/.config/lxc/default.conf

<!--
The current Ubuntu LTS 20.04 requires this extra step:
-->
現時点の Ubuntu LTS 20.04 は次の追加の手順が必要です:

    export DOWNLOAD_KEYSERVER="hkp://keyserver.ubuntu.com"

<!--
And now, create your first container with:
-->
そして、最初のコンテナを作成しましょう:

    systemd-run --unit=my-unit --user --scope -p "Delegate=yes" -- lxc-create --name my-container --template download

<!--
The download template will show you a list of distributions, versions, and architectures to choose from. A good example would be "ubuntu", "focal" (20.04 LTS) and "amd64". Another good example would be "alpine", "3.19", and "amd64".
-->
ダウンロードするテンプレートでは、選択できるディストリビューション、バージョン、アーキテクチャが表示されます。例えば、"ubuntu"、"focal"（20.04 LTS）、"amd64" のようなものです。別の良い例は、"alpine"、"3.19"、"amd64" です。

<!--
To run unprivileged containers as an unprivileged user, the user must be allocated an empty delegated cgroup (this is required because of the leaf-node and delegation model of cgroup2, not because of liblxc). See [cgroups: Full cgroup2 support](/lxc/news/2020_03_25_13_03.html#cgroups-full-cgroup2-support) for more information.
-->
非特権ユーザーとして非特権コンテナを実行するには、事前に空の権限移譲された cgroup を割り当てる必要があります（これが必要な理由は cgroup2 のリーフノードと権限移譲モデルのためであり、liblxc で必要なわけではありません）。より詳細な情報は [cgroups: cgroup2 のフルサポート](/ja/lxc/news/2020_03_25_13_03.html#cgroups-cgroup2)をご覧ください。

<!--
It is not possible to simply start a container from a shell as a user and automatically delegate a cgroup. Therefore, you need to wrap each call to any of the `lxc-*` commands in a `systemd-run` command. For example, to start a container, use the following command instead of just `lxc-start mycontainer`:
-->
ユーザーとしてシェルからコンテナを単純に起動し、自動的に cgroup を権限移譲することはできません。そのため、`lxc-*` コマンド群を呼び出すごとに、`systemd-run` コマンドでラップする必要があります。例えば、コンテナを起動するには、単に `lxc-start mycontainer` と実行する代わりに次のように実行します:

    systemd-run --unit=my-unit --user --scope -p "Delegate=yes" -- lxc-start --name mycontainer

<!--
NOTE: If libpam-cgfs was not installed on the host machine prior to installing LXC, you need to ensure your user belongs to the right cgroups before creating your first container. You can accomplish this by logging out and logging back in, or by rebooting the host machine.
-->
注意: もし、LXC をインストールする前に libpam-cgfs がホストマシン上にインストールされていない場合、最初のコンテナを作成する前にそのユーザが正しい cgroup に確実に所属しているようにする必要があります。これはログアウト・ログインするか、ホストマシンをリブートするとそのようになるでしょう。

<!--
You can then confirm its status with either of:
-->
実行したコンテナのステータスは以下のどちらかで確認できます:

    lxc-info --name mycontainer
    lxc-ls --fancy

<!--
And get a shell inside it with:
-->
コンテナ内でシェルを実行するには以下のようにします:

    lxc-attach --name mycontainer --clear-env

<!--
Stopping it can be done with:
-->
コンテナの停止は以下のように行います:

    lxc-stop --name my-container

<!--
And finally removing it with:
-->
最後にコンテナを消去するには以下のようにします:

    lxc-destroy --name my-container

# 各ディストリビューションの LXC に関するドキュメント <!-- Distribution LXC Documentation -->
- [Debian](https://wiki.debian.org/LXC/CGroupV2#LXC_containers_started_by_non-root)
- [Arch Linux](https://wiki.archlinux.org/title/Linux_Containers#Enable_support_to_run_unprivileged_containers_(optional))
- [Fedora](https://fedoraproject.org/wiki/LXC)
