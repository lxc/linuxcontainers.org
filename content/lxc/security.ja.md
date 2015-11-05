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
特権コンテナは、信用できる作業を実行するような環境や、コンテナ内で root 権限で信用できないタスクが実行されていない環境では今でも役に立ちます。

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
