# News

## LXCFS 2.0.0.rc9 release announcement <span class="text-muted">29st of March 2016</span>

 * このリリースは 2.0.0 に対する第 9 のリリース候補版です <!-- This is the ninth release candidate for 2.0.0 -->
 * fuse file info を複数回解放する可能性からの保護を行いました <!-- This guards against potential double-releasing of fuse file info. -->

## LXCFS 2.0.0.rc8 release announcement <span class="text-muted">21st of March 2016</span>

 * このリリースは 2.0.0 に対する第 8 のリリース候補版です <!-- This is the eight release candidate for 2.0.0 -->
 * lxcfs cgfsng ドライバで使う access(2) を実装しました <!-- This implements access(2) which is required by the lxcfs cgfsng driver. -->

## LXCFS 2.0.0.rc7 release announcement <span class="text-muted">21st of March 2016</span>

 * このリリースは 2.0.0 に対する第 7 のリリース候補版です <!-- This is the seventh release candidate for 2.0.0 -->
 * このリリースには、upstart job と (LXC 用の) マウントフックに関する重要な修正がいくつか含まれています <!-- This includes some important fixes to the upstart jobs and mount hooks -->
 * リロードハンドラを async セーフにしました。また、posix 互換に関する修正をいくつか行いました <!-- Makes the reload handler async-safe, and a few more posix compliancy fixes. -->

## LXCFS 2.0.0.rc6 release announcement <span class="text-muted">17th of March 2016</span>

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
