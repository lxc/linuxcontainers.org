# News

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

## LXCFS 0.11 リリースのお知らせ <!-- LXCFS 0.11 release announcement --><span class="text-muted">2015 年 10 月 26 日<!-- 26th of October 2015 --></span>

 * libnih と dbus から glib と GDbus の使用に切り替えました。glib と GDbus はスレッドセーフですので、デフォルトでスレッディングが有効になります。 <!-- Switch from libnih and dbus to glib and GDbus.  Since these are thread-safe, enable threading by default. -->
 * 自身を init.scope 内に配置する新しい systemd に対応しました <!-- Support newer systemd which places itself into init.scope. -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads) から取得できます。

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
The release tarballs can be found on our [download page](/lxcfs/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads) から取得できます。

## LXCFS 0.9 リリースのお知らせ<!-- LXCFS 0.9 release announcement --><span class="text-muted">2015 年 6 月 3 日 <!-- 3rd of June 2015 --></span>
<!--
Bugfix release.
-->
バグフィックスのためのリリースです。

* lxcfs のクラッシュを修正する Michael McCracken 氏からの修正をマージしました <!-- Fixes from Michael McCracken to fix lxcfs crashes -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads) から取得できます。

## LXCFS 0.8 リリースのお知らせ <!-- LXCFS 0.8 release announcement --><span class="text-muted">2015 年 5 月 7 日<!-- 7th of May 2015 --></span>

 * (FUSE の) direct_io モードを使うようになりました <!-- Use direct io -->
 * ファイルとディレクトリのオープンにキャッシュを使うようになり、読み書きの際に再利用するようになりました <!-- Cache file and dir open work and re-use at read/write -->
 * (特に Threading に) 必要な FUSE のオプションを強制するようになりました <!-- Force the fuse options we need (especially threading) -->
 * man ページのエラーをいくつか修正しました <!-- Fix some errors in the manpage -->
 * cpuset の扱いを修正しました <!-- Fix handling of cpusets -->
 * lxc のフックの修正をいくつか行いました <!-- Some fixes for the lxc hook -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads) から取得できます。

## LXCFS 0.7 リリースのお知らせ <!-- LXCFS 0.7 release announcement --><span class="text-muted">2015 年 4 月 3 日<!-- 3rd of April 2015 --></span>
バグリックスのリリースです。
<!--
Bugfix release.
-->

 * /proc/diskstatsに対応しました <!-- Support for /proc/diskstats. -->
 * ハングアップの原因となるバグをいくつか修正しました <!-- Fixes a few bugs that were causing hangs. -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads) から取得できます。


## LXCFS 0.6 リリースのお知らせ <!-- LXCFS 0.6 release announcement --><span class="text-muted">2015 年 2 月 16 日 <!-- 16th of February 2015 --></span>
<!--
Bugfix release.
-->
バグフィックスのリリースです。

 * メモリとファイルディスクリプタのリークをいくつか修正しました <!-- Fixes some memory and fd leaks. -->
 * /proc/stat の cpu-average の修正を行いました <!-- Fixes cpu-average in /proc/stat. -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads) から取得できます。

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
The release tarballs can be found on our [download page](/lxcfs/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads) から取得できます。

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
The release tarballs can be found on our [download page](/lxcfs/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads) から取得できます。

## LXCFS 0.3 リリースのお知らせ <!-- LXCFS 0.3 release announcement --><span class="text-muted">2015 年 1 月 21 日 <!-- 21st of January 2015 --></span>
<!--
This release is identical to 0.2 except for a fixed installation path of the LXC configuration file.
-->
このリリースは LXC 設定ファイルのインストールパスに関する修正をのぞいて 0.2 と同じです。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxcfs/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads) から取得できます。

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
The release tarballs can be found on our [download page](/lxcfs/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads) から取得できます。


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
The release tarballs can be found on our [download page](/lxcfs/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxcfs/downloads) から取得できます。
