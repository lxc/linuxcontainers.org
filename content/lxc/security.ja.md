# はじめに <!-- Introduction -->
<!--
LXC containers can be of two kinds:
-->
LXC コンテナは以下のような 2 種類の構成を取ることができます:

 - 特権コンテナ <!-- Privileged containers -->
 - 非特権コンテナ <!-- Unprivileged containers -->

<!--
The former can be thought as old-style containers, they're not safe at all and should only be used  
in environments where unprivileged containers aren't available and where you would trust  
your container's user with root access to the host.
-->
特権コンテナは以前から存在するスタイルのコンテナと考えることができます。特権コンテナは全く安全ではありません。この種類のコンテナは非特権コンテナが利用できない場合で、ホストに対して root 権限を与えることになるコンテナユーザを信頼できる場合にのみ使うべきです。

<!--
The latter has been introduced back in LXC 1.0 (February 2014) and requires a reasonably recent  
kernel (3.13 or higher). The upside being that we do consider those containers to be root-safe and so,  
as long as you keep on top of kernel security issues, those containers are safe.
-->
非特権コンテナは LXC 1.0 (2014 年 2 月リリース) で導入されました。非特権コンテナにはかなり最近のカーネル (3.13 以上) が必要です。非特権コンテナの利点は、コンテナは root 権限を使った攻撃に対して安全であると考えられるので、カーネルのセキュリティ問題に対処している限りは、コンテナは安全であるということです。

<!--
As privileged containers are considered unsafe, we typically will not consider new container escape  
exploits to be security issues worthy of a CVE and quick fix. We will however try to mitigate those  
issues so that accidental damage to the host is prevented.
-->
特権コンテナは安全ではないと見なせるので、一般的にはコンテナは CVE や迅速な修正が必要なセキュリティ上の問題を悪用することからは逃れられないでしょう。しかし、私たちはホストを予期しないダメージから守るために、このような問題の影響を軽減するようにします。

# 特権コンテナ <!-- Privileged containers -->
<!--
Privileged containers are defined as any container where the container uid 0 is mapped to the host's uid 0.  
In such containers, protection of the host and prevention of escape is entirely done through  
Mandatory Access Control (apparmor, selinux), seccomp filters, dropping of capabilities and namespaces.
-->
特権コンテナは、コンテナの uid 0 がホストの uid 0 にマッピングされるコンテナとして定義されます。
このようなコンテナでは、ホストの保護とコンテナからの脱出の防止は、強制アクセス制御 (apparmor, selinux)、seccomp フィルタ、ケーパビリティの削除、名前空間の利用を通して行います。

<!--
Those technologies combined will typically prevent any accidental damage of the host,  
where damage is defined as things like reconfiguring host hardware,  
reconfiguring the host kernel or accessing the host filesystem.
-->
以上の技術の組み合わせは、主にホストに対する予期しないダメージを防ぐでしょう。ここで言うダメージとは、ホストのハードウェアやホストカーネルの再設定、ホストのファイルシステムへのアクセスのような行為です。

<!--
LXC upstream's position is that those containers aren't and cannot be root-safe.
-->
LXC 開発者は、このようなコンテナは root 権限を使った攻撃に対して脆弱であり、安全にはできないという見解を取っています。

<!--
They are still valuable in an environment where you are running trusted workloads  
or where no untrusted task is running as root in the container.
-->
特権コンテナは、信頼できる作業を実行するような環境や、コンテナ内で root 権限で信用できないタスクが実行されていない環境では今でも役に立ちます。

<!--
We are aware of a number of exploits which will let you escape such containers and get full root privileges on the host.  
Some of those exploits can be trivially blocked and so we do update our different policies once made aware of them.  
Some others aren't blockable as they would require blocking so many core features that the average container would become completely unusable.
-->
私たちは、このようなコンテナから抜け出し、ホスト上で root 権限を全て取得するような多数の exploit を知っています。
これらの exploit には普通にブロックできるものもありますので、それがわかった時点でそれまでとは異なったポリシーに更新します。
たくさんの主要な機能をブロックする必要があり、普通のコンテナが全く使えないものになるためブロックできない exploit もあるでしょう。

# 非特権コンテナ <!-- Unprivileged containers -->
<!--
Unprivileged containers are safe by design. The container uid 0 is mapped to an unprivileged user outside of the container  
and only has extra rights on resources that it owns itself.
-->
非特権コンテナは仕様上安全です。コンテナの uid 0 はコンテナ外では非特権ユーザにマッピングされます。そしてコンテナには自身が所有するリソースにのみ特権を持っています。

<!--
With such container, the use of SELinux, AppArmor, Seccomp and capabilities isn't necessary for security.  
LXC will still use those to add an extra layer of security which may be handy in the event  
of a kernel security issue but the security model isn't enforced by them.
-->
このようなコンテナでは、セキュリティ上の理由から SELinux, AppArmor, Seccomp, ケーパビリティを使う必要はありません。
LXC は今でも以上の技術を使っています。これは万が一のカーネルのセキュリティ上の問題に対処できるセキュリティの追加レイヤーを加えるためです。この追加レイヤーは以上の技術によってセキュリティモデルを強制されません。

<!--
To make unprivileged containers work, LXC interacts with 3 pieces of setuid code:
-->
非特権コンテナを動作させるため、LXC は 3 つの setuid コードと協調して動作します。

 - lxc-user-nic (ホスト上に veth ペアとブリッジを作るための setuid ヘルパー <!-- setuid helper to create a veth pair and bridge it on the host -->)
 - newuidmap (shadow パッケージに含まれます。uid のマッピングを設定します。<!-- from the shadow package, sets up a uid map -->)
 - newgidmap (shadow パッケージに含まれます。gid のマッピングを設定します。<!-- from the shadow package, sets up a gid map -->)

<!--
Everything else is run as your own user or as a uid which your user owns.
-->
これ以外はあなた自身のユーザで動作するか、あなたのユーザが所有する uid で動作します。

<!--
As a result, most security issues (container escape, resource abuse, ...) in those containers will apply just as well  
to a random unprivileged user and so would be a generic kernel security bug rather than a LXC issue.
-->
この結果、これらのコンテナの持つほとんどのセキュリティ上の問題 (コンテナからの脱出、リソースの悪用、...) はランダムな非特権ユーザに対して働きます。そのため、LXC の問題というよりは一般的なカーネルの問題になるでしょう。

<!--
LXC upstream is happy to help track such security issue and get in touch with the Linux kernel community  
to have them resolved as quickly as possible.
-->
LXC 開発者は喜んでこのようなセキュリティ上の問題を追跡することを手伝います。そして可能な限り早く問題を解決するために Linux カーネルコミュニティと連絡を取ります。

# DoS 攻撃の可能性 <!-- Potential DoS attacks -->
<!--
LXC doesn't pretend to prevent DoS attacks by default. When running
multiple untrusted containers or when allowing untrusted users to run
containers, one should keep a few things in mind and update their
configuration accordingly:
-->
LXC はデフォルトでは DoS 攻撃を防ぐことはありません。複数の信頼できないコンテナが実行中であったり、信頼できないユーザに対してコンテナの実行を許可している場合、いくつかの事項を考慮し、適切に設定を更新しておく必要があります:

## Cgroup による制限 <!-- Cgroup limits -->
<!--
LXC inherits cgroup limits from its parent, on my Linux distribution, there are no real limits set.  
As a result, a user in a container can reasonably easily DoS the host by running a fork bomb,  
by using all the system's memory or creating network interfaces until the kernel runs out of memory.
-->
LXC は cgroup による制限を親 cgroup から継承します。Linux ディストリビューションでは、実際には制限は設定されていません。その結果、コンテナ内のユーザが、fork bomb を実行したり、システムのメモリを全て使ったり、カーネルが out of memory になるまでネットワークインターフェースを作成したりすることで、簡単にホストに対して DoS 攻撃を実行できます。

<!--
This can be mitigated by either setting the relevant lxc.cgroup configuration entries (memory, cpu and pids)  
or by making sure that the parent user is placed in appropriately configured cgroups at login time.
-->
これは、関係する lxc.cgroup エントリ (memory, cpu, pids) を設定したり、ログイン時に親となるユーザが適切に設定された cgroup 内に配置されるようにすることで軽減できます。

## ユーザに対する制限 <!-- User limits -->
<!--
As with cgroups, the parent's limit is inherited so unprivileged containers cannot have ulimits set to values  
higher than their parent.
-->
cgroup のように親の制限が継承されるので、非特権コンテナは親よりも高い値の ulimits を設定できません。

<!--
However there is one thing that's worth keeping in mind, ulimits are as their name suggest, tied to a uid at the kernel level.  
That's a global kernel uid, not a uid inside a user namespace.
-->
しかし、覚えておくべきことがひとつあります。ulimit は名前が表すように、カーネルレベルで uid と結びついています。これはグローバルのカーネル uid であり、ユーザ名前空間内の uid ではありません。

<!--
That means that if two containers share through identical or overlapping id maps, a common kernel uid, then they also share limits,  
meaning that a user in a first container can effectively DoS the same user in another container.
-->
もし 2 つのコンテナが同一か重複する id のマッピングで、共通のカーネル uid を共有している場合、制限も共有するということを意味します。そして、あるコンテナ内のユーザは他のコンテナの同じユーザに DoS 攻撃を加えることができることを意味します。

<!--
To prevent this, untrusted users or containers ought to have entirely separate id maps (ideally of 65536 uids and gids each).
-->
これを防ぐために、信頼できないユーザやコンテナは完全に別の id マッピングを持つべきです (理想では、65536 個の uid と gid それぞれについて)。

## ネットワークブリッジの共有 <!-- Shared network bridges -->
<!--
LXC sets up basic level 2 connectivity for its containers. As a convenience it also provides one default bridge on the system.
-->
LXC はコンテナに対して基本的なレイヤー 2 の接続性を設定します。利便性のために、システムでひとつのデフォルトのブリッジも提供します。

<!--
As a container connected to a bridge can transmit any level 2 traffic that it wishes, it can effectively do MAC or IP spoofing on the bridge.
-->
ブリッジに接続するコンテナは、通信したいどんなレイヤー 2 のトラフィックでも送信できるので、ブリッジ上で MAC アドレスや IP アドレスのスプーフィングを行えます。

<!--
When running untrusted containers or when allowing untrusted users to run containers, one should ideally create one bridge per user or per  
group of untrusted containers and configure /etc/lxc/lxc-usernet such that users may only use the bridges that they have been allocated.
-->
信頼できないコンテナが実行されていたり、信頼できないユーザにコンテナの実行を許可している場合、理想的には信頼できないコンテナのユーザもしくはグループごとにひとつブリッジを作成すべきです。そして、ユーザに対して割り当てられたブリッジだけを使えるように /etc/lxc/lxc-usernet を設定すべきです。

# セキュリティ上の問題の報告 <!-- Reporting security issues -->
<!--
To ensure security issues can be fixed as quickly as possible and simultaneously  
in all Linux distributions, issues should be reported either:
-->
セキュリティ上の問題ができるだけ素早く同時に全ての Linux ディストリビューションで解決するように、問題は以下のどちらかの方法で報告してください:

 * serge.hallyn (at) ubuntu (dot) com と stgraber (at) ubuntu (dot) com の両名に E-mail で <!-- By e-mail to both serge.hallyn (at) ubuntu (dot) com AND stgraber (at) ubuntu (dot) com -->
 * <!-- By opening a private security bug at --> [https://launchpad.net/ubuntu/+source/lxc/+filebug](https://launchpad.net/ubuntu/+source/lxc/+filebug) に非公開のセキュリティバグをオープンする

<!--
We will then confirm the security issue, come up with fixes against all supported releases,  
provide you those patches for testing and then get a CVE assigned as well as a  
coordinated release date for you and the Linux distribution community.
-->
私たちはセキュリティ上の問題を確認し、すべてのサポート中のリリースに対する修正を準備します。そして、テスト用にあなたにパッチを準備し、CVE 番号の割り当てを取得し、あなたと Linux ディストリビューションコミュニティに対して調整したリリース日を提供します。
