# Incus の紹介 <!-- Introducing Incus -->
<!--
Date: 7th of August 2023
-->
2023 年 8 月 7 日

<!--
The Linux Containers project is excited to announce its latest addition, Incus!
-->
Linux Containers プロジェクトは、プロジェクトに Incus を加えるアナウンスができることをうれしく思います!

<!--
Incus isn’t a completely new project however, it’s a fork of LXD created by Aleksa Sarai.
[Aleksa Sarai](https://github.com/cyphar) is most known for his work on runc, umoci and other OpenContainers projects as well as contributions to the Linux kernel.
-->
Incus は完全な新規プロジェクトではありません。 Aleksa Sarai が作成した LXD のフォークです。
[Aleksa Sarai](https://github.com/cyphar) は runc、umoci や、その他の OpenContainers プロジェクトでの取り組みと、Linux カーネルへの貢献でもよく知られています。

<!--
But in addition to all that, he’s also been the long time packager of LXD in OpenSUSE.
Aleksa created the fork shortly after Canonical’s decision to take LXD away from Linux Containers with the name Incus being introduced immediately following the LXD 5.16 release. This fork was first intended as a personal project, but has since gathered quite a bit of interest both from the community as well as from former LXD contributors.
-->
それに加えて、彼は OpenSUSE での LXD のパッケージャーを長い間つとめてきました。
Aleksa は、Canonical が LXD を Linux Containers から外す決定をしたあと、LXD 5.16 のリリースの直後に Incus という名前をつけてフォークを作成しました。このフォークは、最初個人プロジェクトとしてフォークされましたが、それ以来、コミュニティと元 LXD のコントリビューターの両方からかなりの関心を集めています。

<!--
After some discussion with Aleksa and a fair bit of encouragement from our community, we have made the decision to take Incus under the umbrella of Linux Containers and will commit to it the infrastructure which was previously made available to LXD.
-->
Aleksa との話し合いと、コミュニティからの励ましで、私たちは Incus を Linux Containers の傘下に置くことを決定し、以前 LXD で利用できたインフラを Incus に委ねることにしました。

<!--
The goal of Incus is to provide a fully community led alternative to Canonical’s LXD as well as providing an opportunity to correct some mistakes that were made during LXD’s development which couldn’t be corrected without breaking backward compatibility.
-->
Incus の目標は、Canonical の LXD に代わる、完全にコミュニティ主導の代替手段を提供することです。そして、LXD 開発中に発生した、下位互換性を壊さなければ修正できなかったいくつかのミスを修正する機会を提供します。

<!--
In addition to Aleksa, the initial set of maintainers for Incus will include [Christian Brauner](https://github.com/brauner), [Serge Hallyn](https://github.com/hallyn), [Stéphane Graber](https://github.com/stgraber) and [Tycho Andersen](https://github.com/tych0), effectively including the entire team that once created LXD.
-->
Aleksa に加えて、Incus の初期メンテナーには [Christian Brauner](https://github.com/brauner)、[Serge Hallyn](https://github.com/hallyn)、[Stéphane Graber](https://github.com/stgraber)、[Tycho Andersen](https://github.com/tych0) が含まれ、事実上、かつて LXD を作成したチーム全体が含まれます。

<!--
There is no clearly defined roadmap at this point. Incus will be tracking changes happening in LXD and will likely in time diverge from it as different decisions get made.
A stable release of Incus is likely at least a couple of months away so existing LXD users shouldn’t rush to find a way to migrate quite yet!
-->
現時点では明確に決定したロードマップはありません。Incus は LXD で起こっている変化を追跡しています。そして、異なる決定が行われ、ゆくゆくは LXD からは分岐するでしょう。
Incus の stable リリースは、少なくとも 2 〜 3 ヶ月先になる可能性が高いため、既存の LXD ユーザーは移行方法を見つけることを急ぐ必要はありません。

<!--
You can find more details or ask us your questions here:
-->
次で詳細を確認したり、質問したりできます。

- Github: [https://github.com/lxc/incus](https://github.com/lxc/incus)
- フォーラム <!-- Forum -->: [https://discuss.linuxcontainers.org](https://discuss.linuxcontainers.org)

Sincerely,

<!--
Aleksa Sarai and the Linux Containers team:
-->
Aleksa Sarai と Linux Containers チーム

&nbsp;&nbsp;  Christian Brauner
&nbsp;&nbsp;  Serge Hallyn
&nbsp;&nbsp;  Stéphane Graber
