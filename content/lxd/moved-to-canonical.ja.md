# LXD は Canonical の傘下に入りました <!-- LXD is now under Canonical -->
<!--
The LXD project is no longer part of the Linux Containers project but can now be found directly on Canonical's websites.
-->
LXD プロジェクトは、もう Linux Containers プロジェクトの一部ではなくなりました。Canonical のウェブサイトで直接ご覧いただけます。

ウェブサイト <!-- Website -->: https://ubuntu.com/lxd
Github: https://github.com/canonical/lxd
フォーラム <!-- Forum -->: https://discourse.ubuntu.com/c/lxd/
ドキュメント <!-- Documentation -->: https://documentation.ubuntu.com/lxd/

# プロジェクトからのアナウンス <!-- Project announcement -->
<!--
Date: 4th of July 2023
-->
2023 年 7 月 4 日

<!--
Hello,
-->
こんにちは。

<!--
Canonical, the creator and main contributor of the LXD project has decided that after over 8 years as part of the Linux Containers community, the project would now be better served directly under Canonical’s own set of projects.
-->
LXD プロジェクトの創始者であり、メインのコントリビューターである Canonical は、8 年以上にわたって、Linux Containers コミュニティの一員として活動してきました。しかし、今後は Canonical 独自のプロジェクトのもとで、直接活動したほうが良いと判断しました。

<!--
While the team behind Linux Containers regrets that decision and will be missing LXD as one of its projects, it does respect Canonical’s decision and is now in the process of moving the project over.
-->
Linux Containers プロジェクトは、その決定を残念に思っています。そして、LXD をプロジェクトから外すことになります。しかし、Canonical の決定を尊重しており、現在プロジェクトを移行しているところです。

<!--
Concretely, the expected changes are:
-->
具体的には、次のように変化するでしょう:

- https://github.com/lxc/lxd は <!-- will now become --> https://github.com/canonical/lxd になります
- https://linuxcontainers.org/lxd はなくなります。<!-- will disappear and be replaced with a mention directing users to -->[https://ubuntu.com/lxd](https://ubuntu.com/lxd) へ誘導する記述になります
- LXD YouTube チャンネルは Canonical チームに引き継がれます <!-- The LXD YouTube channel will be handed over to the Canonical team -->
- Linux Containers コミュニティのフォーラムの LXD セクションは徐々に廃止され、Canonical 運営の Ubuntu Discourse フォーラムに移行します <!-- The LXD section on the Linux Containers community forum will slowly be sunset in favor of the Ubuntu Discourse forum run by Canonical -->
- LXD CI インフラは Canonical 管理下に移行されます <!-- The LXD CI infrastructure will be moved under Canonical’s care -->
- Linux Containers のイメージビルドは、Canonical が提供するシステムに依存しなくなり、イメージビルドは `x86_64` と `aarch64` に限定されます <!-- Image building for Linux Containers will no longer be relying on systems provided by Canonical, limiting image building to `x86_64` and `aarch64`. -->

<!--
What will not be changing:
-->
次のものは変化しません:

- その他の Linux Containers プロジェクトは影響を受けません <!-- The rest of the Linux Containers projects remain unaffected -->
- 現在、LXC と LXD で使われているイメージサーバーは、これまでどおり稼働し続けますが、前述のように利用可能なアーキテクチャーは少なくなります <!-- The image server, currently used by both LXC and LXD will keep operating as normal, though with less architectures available as mentioned above -->

<!--
Those changes will likely all happen pretty rapidly as everything is relatively tightly integrated together. As a result, you may notice a bit of bumpiness while Canonical sets up the replacement infrastructure.
-->
これらの変更は、すべてが比較的密に関係しているため、かなり速くに実施される可能性が高いです。その結果、Canonical が置き換え用のインフラを準備する間、多少不安定になるかもしれません。

Sincerely,

The Linux Containers team

&nbsp;&nbsp;  Christian Brauner
&nbsp;&nbsp;  Serge Hallyn
&nbsp;&nbsp;  Stéphane Graber
