# News
## [LXCFS 3.0.0 リリースのお知らせ](https://discuss.linuxcontainers.org/t/lxcfs-3-0-0-has-been-released/1440)
### はじめに <!-- Introduction -->
<!--
The LXCFS team is pleased to announce the release of LXCFS 3.0.0!
-->
LXCFS チームは LXCFS 3.0.0 のリリースをお知らせできることをうれしく思います！

<!--
This is the result of two years of work since the LXCFS 2.0.0 release
This is the second LTS release for the LXCFS project and will be supported until June 2023.
-->
このリリースは、LXCFS 2.0.0 のリリース以来 2 年に渡る作業の結果で、
LXCFS プロジェクトの 2 つ目の LTS リリースとなります。そして 2023 年 6 月までサポートされます。

### 主な変更点 <!-- Major changes -->
<!--
The most significant change to LXCFS 3.0.0 is the removal of the PAM
module `libpam-cgfs` which has now been moved to the LXC codebase
instead.
-->
LXCFS 3.0.0 でのもっとも重要な変更点は、PAM モジュールである `libpam-cgfs` が削除されたことです。このモジュールは、LXCFS から LXC に移動しました。

<!--
This was motivated by the fact that all LXC users, whether they use
LXCFS or not can benefit from that PAM module and that much more code
can be shared with LXC than it could with LXCFS.
-->
これにより、LXCFS の使用の有無に関わらず、すべての LXC ユーザが PAM モジュールを使えるようになります。また、LXCFS 以上に LXC とコードが共有できます。このような理由から LXC へと移されました。

<!--
All other changes included in LXCFS 3.0.0 are considered to be bugfixes
and have or will be backported to the LXCFS 2.0 branch, making this a
very lightweight update.
-->
LXCFS 3.0.0 に含まれるその他のすべての変更はバグフィックスであり、これらの変更は LXCFS 2.0 ブランチにすでにバックポートされているか、今後バックポートされる予定です。つまり非常に軽いアップデートです。

### サポートとアップグレード <!-- Support and upgrade -->
<!--
LXCFS 3.0.0 will be supported until June 2023 and our current LTS
release, LXCFS 2.0 will now switch to a slower maintenance pace, only
getting critical bugfixes and security updates.
-->
LXCFS 3.0.0 は 2023 年 6 月までサポートされ、最新の LTS リリースとなります。LXCFS 2.0 は少し遅いペースでのメンテナンスとなり、致命的なバグ修正とセキュリティ修正のみなされます。

<!--
We strongly recommend all LXCFS users to plan an upgrade to the 3.0 branch.
Due to the transition of libpam-cgfs to LXC, this should be done at the
same time as the upgrade to LXC 3.0 to avoid regressions.
-->
LXCFS チームは、すべての LXCFS ユーザに対して、3.0 ブランチへのアップグレードの計画を立てることを強くおすすめします。libpam-cgfs が LXC へ移動しますので、LXC 3.0 へのアップグレードと同時に LXCFS 3.0 へのアップグレードを行うと、libpam-cgfs の機能を引き続き使えるでしょう。

### ダウンロード <!-- Downloads -->
 - リリース tarball: [lxcfs-3.0.0.tar.gz](https://linuxcontainers.org/downloads/lxcfs/lxcfs-3.0.0.tar.gz)
 - GPG シグネチャ: [lxcfs-3.0.0.tar.gz.asc](https://linuxcontainers.org/downloads/lxcfs/lxcfs-3.0.0.tar.gz.asc)

### コントリビューター <!-- Contributors -->
<!--
The LXCFS 3.0.0 release was brought to you by a total of 16 contributors.
-->
LXCFS 3.0.0 は、全部で 16 名の貢献によりリリースされました。

## LXCFS 2.0.8 のリリースのお知らせ <!-- LXCFS 2.0.8 release announcement --><span class="text-muted">2017 年 10 月 19 日<!-- 19th of October 2017 --></span>

<!--
This is the eigth bugfix release for LXCFS 2.0.
-->
このリリースは LXCFS 2.0 の 8 回目のバグフィックスリリースです。

<!--
This includes the following bugfixes:
-->
このリリースには以下のバグ修正が含まれます:

 * bindings: 単一階層構造向けのマウントポイントを追加しました <!-- Add mountpoint for unified hierarchy -->
 * bindings: proc/<pid>/stat 経由で uptime を計算するようになりました <!-- Calculate uptime via proc/<pid>/stat -->
 * bindings: ps コマンドで発生したリグレッションのため、'btime' の仮想化を元に戻しました <!-- Revert virtualization of 'btime' field due to regressions in ps -->
 * doc: README を更新しました <!-- Update README -->
 * init: sysvinit の LSB ヘッダに Should-Start/Stop として cgroupfs-mount を追加しました <!-- Add cgroupfs-mount to Should-Start/Stop sysvinit LSB headers -->
 * lib: liblxcfs.so のための dlopen の共通のフォールバックを追加しました <!-- Add common fallback dlopen for liblxcfs.so -->
 * lib: liblxcfs のインストールディレクトリを ${libdir}/lxcfs に修正しました <!-- Fix the installation directory for liblxcfs to ${libdir}/lxcfs -->
 * pam: -c オプションに 'all' が指定できるようになりました <!-- Add a 'all' option for \-c -->
 * pam: 単一階層構造用の cgroup.procs ファイルを chown するようにしました <!-- Chown cgroup.procs file on unified hierarchy -->
 * pam: 単一階層構造を検出した時はレポートする (訳注: true を返す) ようにしました <!-- Report back when we find a unified hierarchy -->
 * tests: 正しくない比較を修正しました <!-- Fix invalid comparison -->
 * uptime: 連続した読みとり時の問題を修正しました <!-- Fix a problem with subsequent reads -->

## LXCFS 2.0.7 リリースのお知らせ <!-- LXCFS 2.0.7 release announcement --><span class="text-muted">2017 年 5 月 11 日 <!-- 11th of May 2017 --></span>

<!--
This is the seventh bugfix release for LXCFS 2.0.
-->
このリリースは LXCFS 2.0 の 7 回目のバグフィックスリリースです。

<!--
This includes the following bugfixes:
-->
このリリースには以下のバグ修正が含まれます:

 * 使われていない変数を削除しました <!-- Remove unused variable -->
 * cg\_rmdir 関数内の変数 (next) の NULL チェックを行うようにしました <!-- Also check next variable for NULL on cg\_rmdir -->
 * /proc/stat 内の 'btime' フィールドの仮想化を行うようにしました <!-- virtualize the 'btime' field of /proc/stat -->
 * cleanup: 返り値が bool と宣言された関数で NULL の代わりに false を返すようにしました <!-- return false instead of NULL as bool -->
 * memswlimit の値を SwapTotal で制限するようにしました <!-- Limit memswlimit by TotalSwap -->
 * pam\_cgfs: 意味のない変数割り当てを削除しました (訳注: プラス、char のサイズをちゃんと sizeof で求めるように修正されている)<!-- remove dead assignment -->
 * pam\_cgfs: created 変数を直接返すようにしました (訳注: 無駄な条件判断処理を削除しました) <!-- return created directly -->
 * pam\_cgfs: \*\*p が NULL にならないように確認するようにしました (訳注: ポインタを使う前に NULL チェックを入れました)<!-- make sure that \*\*p is not NULL -->
 * bindings: int の領域が必要? なら sizeof(int) を呼ぼう! (訳注: int の配列の領域を確保するのに sizeof(int*) としていたのを修正) <!-- Want space for ints? Call sizeof(int)! -->
 * pam\_cgfs: trim() 関数を安全にしました (訳注: 文字列の長さが1以上のときだけtrimするようにした)<!-- make trim() safer -->
 * pam\_cgfs: cgv2\_init() が失敗したときにエラーで抜けるようにしました <!-- error out on failure in cgv2\_init() -->
 * pam\_cgfs: 意味のない変数割り当てを削除しました (訳注: CPU 数を求める際の意味のない条件文を削除)<!-- remove dead assignment -->
 * bindings: guest_nice を実装しました (訳注: /proc/stat の cpu 行の guest\_nice 値)<!-- implement guest nice -->
 * bindings: 確保するバッファサイズを増やしました <!-- increase reserved buffer size a little -->

## LXCFS 2.0.6 リリースのお知らせ <!-- LXCFS 2.0.6 release announcement --><span class="text-muted">2017 年 1 月 23 日<!-- 23rd of January 2017 --></span>

<!--
This is the sixth bugfix release for LXCFS 2.0.
-->
このリリースは LXCFS 2.0 の 6 回目のバグフィックスリリースです。

<!--
This includes the following bugfixes:
-->
このリリースには以下のバグ修正が含まれます:

 * ネストした cgroup の swap の値を修正しました <!-- Fix swap values with nested cgroups -->
 * tests: ppc64el 上のテストを修正しました <!-- Fix run on ppc64el -->
 * memory.stat からの誤った値の読み取りを修正しました <!-- Fix wrong scanning of memory.stat -->

## LXCFS 2.0.5 リリースのお知らせ <!-- LXCFS 2.0.5 release announcement --><span class="text-muted">2016 年 11 月 23 日 <!-- 23rd of November 2016 --></span>

<!--
This is the fifth bugfix release for LXCFS 2.0.
-->
このリリースは LXCFS 2.0 の 5 回目のバグフィックスリリースです。

<!--
This includes the following bugfixes:
-->
このリリースには以下のバグ修正が含まれます:

 * systemd 用の unit ファイルに "Documentation" キーと値を追加しました <!-- Add Documentation key to systemd unit -->
 * bindings: O\_WRONLY ファイルへの getattr を許可しました <!-- allow getattr on O\_WRONLY files -->
 * bindings: 意味のないチェックを削除しました <!-- remove noop check -->
 * /proc/meminfo 内の Active と Inactive の項目のコロン (":") が抜けていたので修正しました <!-- fix Active/Inactive /proc/meminfo -->
 * macro: 共有のマクロ用のヘッダを追加しました <!-- add header for shared macros -->
 * pam\_cgfs: 再実装して、cgroupfs v2 をサポートしました <!-- reimplement and add cgroupfs v2 support -->
 * pam\_cgfs: すでに自身に所属する cgroup がある場合は再利用するようになりました <!-- re-use cgroups that already belong to us -->
 * pam\_cgfs: cgroupfs v1 の cpuset コントローラを扱うようになりました <!-- handle cgroupfs v1 cpuset controller -->
 * pam\_cgfs: ログ出力を改良しました <!-- improve logging -->
 * cgroups: isolcpus ファイルが存在しない場合の処理を追加しました <!-- handle non-existent isolcpus file -->

## LXCFS 2.0.4 リリースのお知らせ <!-- LXCFS 2.0.4 release announcement --><span class="text-muted">2016 年 10 月 5 日 <!-- 5th of October 2016 --></span>

<!--
This is the fourth bugfix release for LXCFS 2.0.
-->
このリリースは LXCFS 2.0 の 4 回目のバグフィックスリリースです。

<!--
This includes the following bugfixes:
-->
このリリースには以下のバグ修正が含まれます:

 * lxcfs の chroot に対する test\_reload の修正を行いました　<!-- Fix test\_reload for lxcfs chroot -->
 * meminfo 情報のさらなる仮想化を行いました <!-- Virtualize more of the meminfo fields -->
 * pam: cgroup 作成時の競合を修正しました <!-- fix race in cgroup creation -->
 * meminfo: swapfree にマイナスの値を表示しないようにしました <!-- don't show negative swapfree -->
 * bindings: デバッグの改良を行いました <!-- improve debugging -->
 * bindings: fstatat(), unlinkat() で openat の fd を使うようにしました <!-- use openat fd for fstatat(), unlinkat() -->
 * bindings: エラー時にオープンしている fd をクローズするようにしました <!-- close open fds on error -->
 * bindings: /var/lib/lxcfs にアクセス権を与えました <!-- grant access to /var/lib/lxcfs -->
 * bindings: /var/lib/lxcfs/cgroup へアクセスできるようにしました <!-- enable access to /var/lib/lxcfs/cgroup -->
 * bindings: /var/lib/lxcfs/proc へアクセスできるようにしました <!-- allow access to /var/lib/lxcfs/proc -->
 * lxcfs, bindings: "." と ".." をディレクトリエントリとして表示するようにしました <!-- show "." and ".." dir entries -->
 * lxcfs: /var/lib/lxcfs のファイルシステムの振る舞いを改良しました <!-- better fs behavior on /var/lib/lxcfs -->
 * bindings: コード内のホワイトスペースの調整 (機能的な変更はなし) <!-- non functional changes -->
 * bindings: pick\_controller\_from\_path() 内で errno を設定するようにしました <!-- set errno in pick\_controller\_from\_path() -->
 * bindings: より一貫性のあるファイルシステムの振る舞いにしました <!-- more consistent fs behavior -->
 * PLD Linux のサポートを追加しました <!-- add pld linux support -->
 * 使用法の出力に argv[0] を使わないようにしました <!-- don't use argv[0] in usage output -->
 * bindings: cgroup のチェックを元に戻しました (訳注: cgroup ディレクトリの権限のチェックを外した) <!-- revert cgroup check -->
 * bindings: errno を設定するように改良しました <!-- improve returned errnos -->
 * bindings: rmdir の振る舞いをより一貫性のあるものにしました <!-- make rmdir behave more consistently -->
 * libtool: liblxcfs に lxcfs をリンクしないようにしました <!-- do not link lxcfs against liblxcfs -->
 * bindings, lxcfs: デバッグを改良しました <!-- improve debugging -->
 * bindings: デバッグマクロを修正しました <!-- fix debug macro -->
 * autotools: -avoid-version を追加しました <!-- add -avoid-version -->
 * bindings: 元のワーキングディレクトリに戻るようにしました <!-- restore original working directory -->
 * bindings: ファイルシステムのタイプをチェックする関数を追加しました <!-- add function to check fs type -->
 * bindings: 非依存性 (agnostic) なネーミングにしました (訳注: 関数名の変更) <!-- agnostic naming -->
 * bindings: ramfs 上では chroot() を使うようにしました <!-- use chroot() on ramfs -->
 * bindings: statfs の f\_type の型が様々なコンパイラできちんと使えるように修正しました <!-- fix type weirdness with statfs f\_type -->
 * bindings: pivot\_enter() 関数が自身内で全て完結するようにしました (訳注: 引数を無くした) <!-- make pivot\_enter() contain all its code -->


## LXCFS 2.0.3 リリースのお知らせ <!-- LXCFS 2.0.3 release announcement --><span class="text-muted">2016 年 8 月 15 日<!-- 15th of August 2016 --></span>

<!--
This is the third bugfix release for LXCFS 2.0.
-->
このリリースは LXCFS 2.0 の 3 回目のバグフィックスリリースです。

<!--
This includes the following bugfixes:
-->
このリリースには以下のバグ修正が含まれます:

 * /proc/self/cgroup の空のエントリをスキップするようにしました (訳注: cgroup v2 をマウントした際に発生するエラーを回避) <!-- Skip empty entries under /proc/self/cgroup -->
 * cgroup のマウントに対して、最小限の chroot とマウント名前空間を設定し、使用するようにしました <!-- Setup and use a minimal chroot and mount namespace for cgroup mounts -->
 * コードのクリーンアップと小規模なリファクタリングを行いました <!-- Code cleanup and minor refactoring -->

## LXCFS 2.0.2 リリースのお知らせ <!-- LXCFS 2.0.2 release announcement --><span class="text-muted">2016 年 6 月 28 日 <!-- 28th of June 2016 --></span>

<!--
This is the second bugfix release for LXCFS 2.0.
-->
このリリースは LXCFS の 2 回目のバグフィックスリリースです。

<!--
This includes the following bugfixes:
-->
このリリースには以下のバグ修正が含まれます:

 * --with-pamdir=none を指定した場合は pam/ 以下をビルドしないようにしました <!-- Don't build pam/ when --with-pamdir=none -->
 * libpam\_cgfs: ユーザが /user.slice/user-$uid.slice 以下にいる場合は、新しいパスを作成しなくなりました <!-- Don't create new path if we are under /user.slice/user-$uid.slice -->

## LXCFS 2.0.1 リリースのお知らせ <!-- LXCFS 2.0.1 release announcement --><span class="text-muted">2016 年 5 月 16 日<!-- 16th of May 2016 --></span>

<!--
This is the first bugfix release for LXCFS 2.0.0.
-->
これは LXCFS 2.0.0 に対する最初のバグフィックスとなるリリースです。

<!--
This includes the following bugfixes:
-->
このリリースでは以下のバグが修正されています。

 * s390x での cpuinfo の修正 <!-- Fix cpuinfo on s390x. -->
 * diskstats で cgroup の値として recursive ファイルを使うようにしました <!-- Use recursive cgroup values in diskstats. -->
 * コントローラのディレクトリへの traversal (rx) が可能になりました <!-- Allow traversal (rx) to controller directories. -->
 * do\_mount\_cgroups() が失敗時にクラッシュするのを修正しました <!-- Fix do\_mount\_cgroups() crash on failure. -->
 * パスを処理する関数のエラーハンドリングを改良しました <!-- Better error handling in a number of path processing functions. -->
 * スワップの計算でのエラーハンドリングを改良しました <!-- Better error handling in swap calculation. -->

## LXCFS 2.0.0 リリースのお知らせ <!-- LXCFS 2.0.0 release announcement --><span class="text-muted">2016 年 3 月 31 日 <!-- 31st of March 2016 --></span>

* lxcfs バージョン 2.0.0 をリリースできてハッピーです! <!-- We are happy to release version 2.0.0 of lxcfs. -->

## LXCFS 2.0.0.rc9 リリースのお知らせ <!-- LXCFS 2.0.0.rc9 release announcement --><span class="text-muted">2016 年 3 月 29 日<!-- 29st of March 2016 --></span>

 * このリリースは 2.0.0 に対する第 9 のリリース候補版です <!-- This is the ninth release candidate for 2.0.0 -->
 * fuse file info を複数回解放する可能性からの保護を行いました <!-- This guards against potential double-releasing of fuse file info. -->

## LXCFS 2.0.0.rc8 リリースのお知らせ <!-- LXCFS 2.0.0.rc8 release announcement --><span class="text-muted">2016 年 3 月 21 日<!-- 21st of March 2016 --></span>

 * このリリースは 2.0.0 に対する第 8 のリリース候補版です <!-- This is the eight release candidate for 2.0.0 -->
 * lxcfs cgfsng ドライバで使う access(2) を実装しました <!-- This implements access(2) which is required by the lxcfs cgfsng driver. -->

## LXCFS 2.0.0.rc7 リリースのお知らせ <!-- LXCFS 2.0.0.rc7 release announcement --><span class="text-muted">2016 年 3 月 21 日 <!-- 21st of March 2016 --></span>

 * このリリースは 2.0.0 に対する第 7 のリリース候補版です <!-- This is the seventh release candidate for 2.0.0 -->
 * このリリースには、upstart job と (LXC 用の) マウントフックに関する重要な修正がいくつか含まれています <!-- This includes some important fixes to the upstart jobs and mount hooks -->
 * リロードハンドラを async セーフにしました。また、posix 互換に関する修正をいくつか行いました <!-- Makes the reload handler async-safe, and a few more posix compliancy fixes. -->

## LXCFS 2.0.0.rc6 リリースのお知らせ <!-- LXCFS 2.0.0.rc6 release announcement --><span class="text-muted">2016 年 3 月 17 日<!-- 17th of March 2016 --></span>

 * このリリースは 2.0.0 に対する第 6 のリリース候補版です <!-- This is the sixth release candidate for 2.0.0 -->
 * 14.04 で使用する systemd の cgroup 命名方式のサポートを追加しました <!-- Adds support for the systemd cgroup naming scheme used in 14.04. -->

## LXCFS 2.0.0.rc5 リリースのお知らせ <!-- LXCFS 2.0.0.rc5 release announcement --><span class="text-muted">2016 年 3 月 14 日 <!-- 14th of March 2016 --></span>

 * このリリースは 2.0.0 に対する第 5 のリリース候補版です <!-- This is the fifth release candidate for 2.0.0 -->
 * 例えば 'sudo' が実行された場合に、libpam-cgfs が systemd の cgroup を誤って chown する問題を修正しました <!-- Fixes libpam-cgfs mis-chowning systemd cgroups when running (for instance) 'sudo'. -->

## LXCFS 2.0.0.rc4 リリースのお知らせ <!-- LXCFS 2.0.0.rc4 release announcement --><span class="text-muted">2016 年 3 月 11 日 <!-- 11th of March 2016 --></span>

 * このリリースは 2.0.0 に対する第 4 のリリース候補版です <!-- This is the fourth release candidate for 2.0.0 -->
 * Stéphane Graber 氏によるマウントフックと upstart ジョブファイルの修正 <!-- Fix from stgraber to the mount hook and upstart job. -->

## LXCFS 2.0.0.rc3 リリースのお知らせ <!-- LXCFS 2.0.0.rc3 release announcement --><span class="text-muted">2016 年 3 月 7 日 <!-- 7th of March 2016 --></span>

 * このリリースは 2.0.0 に対する第 3 のリリース候補版です <!-- This is the third release candidate for 2.0.0 -->
 * このリリースでは以下を修正しました <!-- Fixes in this release: -->
     * コンテナで /sys/fs/cgroup がマウントされていないときに、lxcfs の proc ファイル群がマウントされない問題 <!-- Not mounting lxcfs procfiles when /sys/fs/cgroup is not mounted in container. -->
     * まれに free -m の出力が壊れる問題 <!-- Occasional corrupted output in free -m. -->

## LXCFS 2.0.0.rc2 リリースのお知らせ <!-- LXCFS 2.0.0.rc2 release announcement --><span class="text-muted">2016 年 2 月 24 日 <!-- 24th of February 2016 --></span>

 * このリリースは 2.0.0 に対する第 2 のリリース候補版です <!-- This is the second release candidate for 2.0.0 -->
 * 前のリリースでリリース tarball に欠けていた config/ ディレクトリを追加しました <!-- This adds the previously missing config/ directory to the release tarball. -->

## LXCFS 2.0.0.rc1 リリースのお知らせ <!-- LXCFS 2.0.0.rc1 release announcement --><span class="text-muted">2016 年 2 月 24 日<!-- 24th of February 2016 --></span>

 * このリリースは 2.0.0 に対する最初のリリース候補版です <!-- This is the first release candidate for 2.0.0 -->
 * sysvinit、upstart、systemd に対する起動スクリプトを追加しました <!-- This adds sysvinit, upstart and systemd jobs. -->

## LXCFS 2.0.0.beta2 リリースのお知らせ <!-- LXCFS 2.0.0.beta2 release announcement --><span class="text-muted">2016 年 2 月 19 日 <!-- 19th of February 2016 --></span>

 * アンマウントされたコントローラがある場合に PAM モジュールが引き起こすハングアップのバグを修正しました <!-- Fix a bug causing PAM module to hang if there are unmounted controllers -->
 * setns 後の pid を fork する際、不完全な glibc の assert に起因する、まれではあるが起こりうるバグを回避するようにしました。 <!-- Avoid a rare but not impossible bug due to a faulty glibc assert when
   forking a pid after setns. -->

## LXCFS 2.0.0.beta1 リリースのお知らせ <!-- LXCFS 2.0.0.beta1 release announcement --><span class="text-muted">2016 年 2 月 9 日 <!-- 9th of February 2016 --></span>

 * /proc/swaps がサポートされました <!-- Add support for /proc/swaps -->
 * 要求があれば systemd cgroup の作成と chown を行うようになりました <!-- Create or chown systemd cgroups if asked -->
 * liblxcfs.so を /usr/lib/lxcfs へ移動しました <!-- Move liblxcfs.so to /usr/lib/lxcfs. -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads) から取得できます。

## LXCFS 0.18 リリースのお知らせ <!-- LXCFS 0.18 release announcement --><span class="text-muted">2016 年 2 月 4 日<!-- 4th of February 2016 --></span>

 * ほとんどの場合で lxcfs の再起動がサポートされました。ほとんどの機能をライブラリに移動させたためです。このライブラリは SIGUSR1 でリロードされます。
   <!-- Support restarting lxcfs in most cases, by moving most functionality
        into a library which is reloaded on SIGUSR1 -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads) から取得できます。

## LXCFS 0.17 リリースのお知らせ <!-- LXCFS 0.17 release announcement --><span class="text-muted">2016 年 1 月 26 日 <!-- 8th of January 2016 --></span>

 * PAM モジュールを追加しました <!-- Add a PAM module -->
 * ユーザが自身の init のすべての cgroup ディレクトリを見ることができるようになりました <!-- Allow users to see all cgroup directories under their init's. -->
 * タスク自身の制限でなく、タスクの init プロセスの cgroup の使用量＋制限を使うようになりました <!-- Use a task's init process' cgroup usage+limits to virtualize procfiles,
   rather than the task's own limits. -->
 * スワップの計算の改良を行いました <!-- Improve swap accounting -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads) から取得できます。

## LXCFS 0.16 リリースのお知らせ <!-- LXCFS 0.16 release announcement --><span class="text-muted">2016 年 1 月 8 日<!-- 8th of January 2016 --></span>
<!--
Bugfix release.
-->
バグフィックスのためのリリースです。

 * 先の 2 つのリリースにあるメモリアロケーションに関するバグの修正のためのリリースです <!-- This provides a fix for the memory allocation bugs in the last two releases. -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads) から取得できます。

## LXCFS 0.15 リリースのお知らせ <!-- LXCFS 0.15 release announcement --><span class="text-muted">2016 年 1 月 7 日<!-- 7th of January 2016 --></span>
<!--
Bugfix release.
-->
バグフィックスのためのリリースです。

 * 深刻なメモリアロケーションに関するバグの修正を行いました。このバグがあるので 0.14 は使用に適しません <!-- Fixing a critical memory allocation bug which makes 0.14 unusable. -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads) から取得できます。

## LXCFS 0.14 リリースのお知らせ <!-- LXCFS 0.14 release announcement --><span class="text-muted">2016 年 1 月 7 日<!-- 7th of January 2016 --></span>

 * cgroup namespace を LXC が扱えるかどうかをチェックするようになりました <!-- Listen to hint from lxc regarding cgroup namespaces. -->
 * libnih からの移行時に混入したいくつかの重要なバグの修正を行いました <!-- Several important bugfixes in code introduced during the switch from libnih. -->
 * swap 使用量のレポートの修正を行いました <!-- Fix to swap usage reporting. -->
 * root cgroup 内のタスクに対する過度な可視性のチェックを修正しました <!-- Fix overly strict visibility checks for tasks in root cgroup. -->
 * テストの多数のバグ修正を行いました <!-- Many fixes to the tests. -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads/) から取得できます。

## LXCFS 0.13 リリースのお知らせ <!-- LXCFS 0.13 release announcement --><span class="text-muted">2015 年 11 月 25 日<!-- 25th of November 2015 --></span>
<!--
Bugfix release.
-->
バグフィックスのためのリリースです。

 * 新しいバージョンの systemd ベースのコンテナが起動しないバグをいくつか修正しました。加えて他にもバグを修正しています。 <!-- This fixes several bugs which prevented newer systemd-based containers from
   starting, and some more general bugs. -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads/) から取得できます。

## LXCFS 0.12 リリースのお知らせ <!-- LXCFS 0.12 release announcement --><span class="text-muted">2015 年 11 月 17 日<!-- 17th of November 2015 --></span>
<!--
Critical bug/security fix update for LXCFS.
-->
LXCFS の重大なバグとセキュリティの修正を行いました。

 * 重大な CVE を 2 つ修正しました <!-- This fixes two critical CVEs. -->
 * 今まで cgmanager 経由で cgroup を扱っていましたが、cgroup ファイルシステムをネイティヴに使うように変更しました。これにより、劇的にスピードアップしました <!-- Also switches to using cgroup filesystem natively instead of using
   cgmanager, resulting in dramatic speedup. -->
 * uptime, cpuinfo, meminfo の仮想化でいくつかの改良を行いました <!-- Several improvements in uptime, cpuinfo, and meminfo virtualization -->
 * コードのコミットの際のテストが有効になりました <!-- Enable tests at code checkin -->
 * FUSE オプションでキャッシングの時間を 0.5 秒に設定しました。LXC がリブートする前にも 0.5 秒待つように stop hook で設定するようにしました <!-- Set FUSE attr caching to half a second, and ship lxc stop hook to wait half
   a second before reboot. -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads/) から取得できます。

## LXCFS 0.11 リリースのお知らせ <!-- LXCFS 0.11 release announcement --><span class="text-muted">2015 年 10 月 26 日<!-- 26th of October 2015 --></span>

 * libnih と dbus から glib と GDbus の使用に切り替えました。glib と GDbus はスレッドセーフですので、デフォルトでスレッディングが有効になります。 <!-- Switch from libnih and dbus to glib and GDbus.  Since these are thread-safe, enable threading by default. -->
 * 自身を init.scope 内に配置する新しい systemd に対応しました <!-- Support newer systemd which places itself into init.scope. -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads/) から取得できます。

## LXCFS 0.10 リリースのお知らせ <!-- LXCFS 0.10 release announcement --><span class="text-muted">2015 年 9 月 3 日<!-- 3rd of September 2015 --></span>
<!--
Bugfix release.
-->
バグフィックスのためのリリースです。

 * libnih のスレッドサポートを検出し、使える場合は使います <!-- Detect libnih threading support and use when available. -->
 * DBus 関連のスレッディングの問題を修正しました <!-- Fix threading issues related to DBus. -->
 * memory cgroup がない場合も動作ができるようになりました <!-- Handle missing memory cgroup. -->
 * libdbus と使う場合に起こる問題のため、全体的にスレッディングを止めました <!-- Turn off threading globally because of problems with libdbus. -->
 * より systemd に適応するために lxcfs マウントを調整しました <!-- Tweak lxcfs mounts to better accomodate systemd. -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads/) から取得できます。

## LXCFS 0.9 リリースのお知らせ<!-- LXCFS 0.9 release announcement --><span class="text-muted">2015 年 6 月 3 日 <!-- 3rd of June 2015 --></span>
<!--
Bugfix release.
-->
バグフィックスのためのリリースです。

* lxcfs のクラッシュを修正する Michael McCracken 氏からの修正をマージしました <!-- Fixes from Michael McCracken to fix lxcfs crashes -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads/) から取得できます。

## LXCFS 0.8 リリースのお知らせ <!-- LXCFS 0.8 release announcement --><span class="text-muted">2015 年 5 月 7 日<!-- 7th of May 2015 --></span>

 * (FUSE の) direct_io モードを使うようになりました <!-- Use direct io -->
 * ファイルとディレクトリのオープンにキャッシュを使うようになり、読み書きの際に再利用するようになりました <!-- Cache file and dir open work and re-use at read/write -->
 * (特に Threading に) 必要な FUSE のオプションを強制するようになりました <!-- Force the fuse options we need (especially threading) -->
 * man ページのエラーをいくつか修正しました <!-- Fix some errors in the manpage -->
 * cpuset の扱いを修正しました <!-- Fix handling of cpusets -->
 * lxc のフックの修正をいくつか行いました <!-- Some fixes for the lxc hook -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads/) から取得できます。

## LXCFS 0.7 リリースのお知らせ <!-- LXCFS 0.7 release announcement --><span class="text-muted">2015 年 4 月 3 日<!-- 3rd of April 2015 --></span>
バグリックスのリリースです。
<!--
Bugfix release.
-->

 * /proc/diskstatsに対応しました <!-- Support for /proc/diskstats. -->
 * ハングアップの原因となるバグをいくつか修正しました <!-- Fixes a few bugs that were causing hangs. -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads/) から取得できます。


## LXCFS 0.6 リリースのお知らせ <!-- LXCFS 0.6 release announcement --><span class="text-muted">2015 年 2 月 16 日 <!-- 16th of February 2015 --></span>
<!--
Bugfix release.
-->
バグフィックスのリリースです。

 * メモリとファイルディスクリプタのリークをいくつか修正しました <!-- Fixes some memory and fd leaks. -->
 * /proc/stat の cpu-average の修正を行いました <!-- Fixes cpu-average in /proc/stat. -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads/) から取得できます。

## LXCFS 0.5 リリースのお知らせ <!-- LXCFS 0.5 release announcement --><span class="text-muted">2015 年 1 月 28 日 <!-- 28th of January 2015 --></span>
<!--
Bugfix release.
-->
バグフィックスのリリースです。

<!--
This tweaks configure.ac to detect cgmanager version and tweak the LXC hook.
-->
このバージョンでは cgmanager のバージョンの検出のために configure.ac を調整しました。また、LXC のフックも調整しました。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads/) から取得できます。

## LXCFS 0.4 リリースのお知らせ <!-- LXCFS 0.4 release announcement --><span class="text-muted">2015 年 1 月 23 日 <!-- 23rd of January 2015 --></span>
<!--
Critical bug/security fix update for LXCFS.
-->
このリリースは LXCFS の重大なバグとセキュリティホールの修正のためのアップデートです。

<!--
Prior versions of LXCFS would replace the host's /proc with the container's
when a read to /proc/uptime was done on a system with / mounted rshared (default on systemd).
-->
LXCFS のこれまでのバージョンは、/ が rshared でマウントされているシステム (systemd のデフォルトです) で /proc/uptime が読まれたとき、ホストの /proc をコンテナの /proc で置き換えていました。

<!--
This release includes ONLY this bugfix and should be immediately deployed by anyone currently using lxcfs.
-->
このリリースはバグの修正**のみ**を含みます。lxcfsを現在使っている場合はいかなる場合でもすぐに新しいバージョンに置き換えるべきです。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads/) から取得できます。

## LXCFS 0.3 リリースのお知らせ <!-- LXCFS 0.3 release announcement --><span class="text-muted">2015 年 1 月 21 日 <!-- 21st of January 2015 --></span>
<!--
This release is identical to 0.2 except for a fixed installation path of the LXC configuration file.
-->
このリリースは LXC 設定ファイルのインストールパスに関する修正をのぞいて 0.2 と同じです。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads/) から取得できます。

## LXCFS 0.2 リリースのお知らせ <!-- LXCFS 0.2 release announcement --><span class="text-muted">2015 年 1 月 20 日 <!-- 20th of January 2015 --></span>
<!--
Packager-friendly release of LXCFS 0.2.
-->
パッケージの作成がしやすいリリースの LXCFS 0.2 がリリースされました。

<!--
This release now installs /usr/share/lxcfs/lxc.mount.hook and /usr/share/lxc/common.conf.d/00-lxcfs.conf
which when combined with LXC 1.1 will automatically enable lxcfs for all containers.
-->
このリリースでは、LXC 1.1 で自動的に全てのコンテナに lxcfs が自動的に有効になる /usr/share/lxcfs/lxc.mount.hook と /usr/share/lxc/common.conf.d/00-lxcfs.conf をインストールするようになりました。

<!--
Additionally this release also includes some fixes to the testsuite.
-->
さらに、このリリースではテストに対する修正もいくつか含まれています。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads/) から取得できます。


## LXCFS 0.1 リリースのお知らせ <!-- LXCFS 0.1 release announcement --><span class="text-muted">2015 年 1 月 9 日 <!-- 9th of January 2015 --></span>

<!--
This is the initial LXCFS release.
-->
これは LXCFS の初めてのリリースです。

<!--
It offers a basic cgroupfs-like interface which writes through CGManager as well as
cgroup-ified versions of the cpuinfo, meminfo, stat and uptime proc files.
-->
LXCFS は CGManager を通して書き込める cgroupfs 風のインターフェースと、cgroup を元にした cpuinfo、meminfo、stat、uptime といった proc ファイルを提供します。

<!--
Note that as the first release of LXCFS, things can still be very rough and we would advice
against using this in production.
-->
LXCFS の最初のリリースですので、まだ非常に未完成である可能性があり、まだ production 環境で使用しないでください。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads/) から取得できます。
