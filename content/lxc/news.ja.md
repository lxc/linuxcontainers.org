# News
## LXC 2.0.7 リリースのお知らせ <!-- LXC 2.0.7 release announcement --><span class="text-muted">2017 年 1 月 23 日 <!-- 23rd of January 2017 --></span>
<!--
This is the seventh bugfix release for LXC 2.0.
-->
このリリースは LXC 2.0 の 7 回目のバグフィックスリリースです。

<!--
The main bugfixes in this release are:
-->
このリリースに含まれる主なバグフィックスは以下です:

 * attach: lsm ラベルのファイルディスクリプタを閉じるようしました <!-- Close lsm label file descriptor -->
 * attach: 機能と関係のない変更を行いました (訳注: ログ出力の改良と関数内の処理の簡素化)<!-- Non-functional changes -->
 * attach: lsm\_opennat() を簡素化しました (訳注: 関数内の処理の簡素化)<!-- Simplify lsm\_openat() -->
 * caps: lxc\_cap\_is\_set() 関数を追加しました <!-- Add lxc\_cap\_is\_set() -->
 * conf: attach: errno を保存して close を呼び出します <!-- Save errno across call to close -->
 * conf: drop と keep のどちらかだけを使用するようにわかりやすくレポートします (訳注: lxc.cap.(drop|keep)の両方が設定された場合のエラー表示をわかりやすくした)<!-- Clearly report to either use drop or keep -->
 * conf: criu: make\_anonymous\_mount\_file() 関数を追加しました (訳注: /tmp がないシステムのために tmpfile() の代わりに memfd_create() を使うようになった)<!-- Add make\_anonymous\_mount\_file() -->
 * conf: suggest\_default\_idmap() 関数を修正しました (訳注: 数値を読み取るときにエラーになるので改行を削除するようにしました)<!-- Fix suggest\_default\_idmap() -->
 * configure: --enable-gnutls オプションを追加しました <!-- Add \-\-enable-gnutls option -->
 * configure: memfd\_create() システムコールの有無をチェックするようにしました <!-- Check for memfd\_create() -->
 * configure: gettid() が宣言されているかどうかチェックするようにしました <!-- Check whether gettid() is declared -->
<!-- * configure: Do not allow variable length arrays (訳注: 次の行のコミットがこれを取り消すコミット)-->
<!-- * configure: Remove -Werror=vla-->
 * configure: major()/minor()/makedev() の検出に AC\_HEADER\_MAJOR を使うようになりました <!-- Use AC\_HEADER\_MAJOR to detect major()/minor()/makedev() -->
 * conf: 機能と関係のない変更を行いました (訳注: ソースコードのフォーマット)<!-- Non-functional changes -->
 * conf: スレッドセーフでない strsignal 呼び出しを削除し、ログ出力を改良しました <!-- Remove thread-unsafe strsignal + improve log -->
 * init: sysvinit の LSB ヘッダの Should-Start/Stop に cgroupfs-mount を追加しました <!-- Add cgroupfs-mount to Should-Start/Stop sysvinit LSB headers -->
 * log: lxc\_unix\_epoch\_to\_utc() 関数を追加しました (訳注: UNIX Epoch をログ出力用の UTC 時刻文字列に変換)<!-- Add lxc\_unix\_epoch\_to\_utc() -->
 * log: lxc\_unix\_epoch\_to\_utc() 関数内にコメントを追加しました <!-- Annotate lxc\_unix\_epoch\_to\_utc() -->
 * log: タイムゾーンを変換する関数をすべて削除しました <!-- Drop all timezone conversion functions -->
 * log: 日付が確実に正しくフォーマットされるようにしました <!-- Make sure that date is correctly formatted -->
 * log: lxc\_unix\_epoch\_to\_utc() を使うようにしました <!-- Use lxc\_unix\_epoch\_to\_utc() -->
 * log: スレッドで getpid() != gettid() の際に日時の代わりに "N/A" という文字列を出力するようにしました <!-- Use N/A if getpid() != gettid() when threaded -->
 * log: スレッドセーフな localtime\_r() を使うようにしました <!-- Use thread-safe localtime\_r() -->
 * lvm: ファイルディスクリプタのリークに関する警告を出力しないようにしました <!-- Supress warnings about leaked files -->
 * lxccontainer: init の pid へのシグナルの送出に失敗したことをログに出力するようになりました <!-- Log failure to send sig to init pid -->
 * monitor: さらにロギングを行うようにしました <!-- Add more logging -->
 * monitor: exit 時に mainloop がオープンしていたらクローズするようにしました (訳注: エラー時にきちんと後始末するようになった)<!-- Close mainloop on exit if we opened it -->
 * monitor: ログの改良を行い、ログレベルを DEBUG に設定しました <!-- Improve log + set log level to DEBUG -->
 * monitor: パイプのファイルディスクリプタが使用中であることをログ出力するようになりました <!-- Log which pipe fd is currently used -->
 * monitor: lxc-monitord を async シグナルセーフにしました <!-- Make lxc-monitord async signal safe -->
 * monitor: 機能と関係のない変更を行いました (訳注: ソースのフォーマットとログの改良など)<!-- Non-functional changes -->
 * python3-lxc: s390x 上の api\_test.py を修正しました <!-- Fix api\_test.py on s390x -->
 * start: setgroups() の前に CAP\_SETGID をチェックするようにしました <!-- Check for CAP\_SETGID before setgroups() -->
 * start: execute(lxc-execute) を修正し、setgroups() の呼び出しを改良しました <!-- Fix execute and improve setgroups() calls -->
 * state: lxc\_wait() 内で async シグナルセーフな関数を使うようにしました <!-- Use async signal safe fun in lxc\_wait() -->
 * templates: lxc-debian: ホスト上の /usr/lib/systemd から取得しようとしないようにしました <!-- Don't try to get stuff from /usr/lib/systemd on the host -->
 * templates: lxc-debian: 起動時の getty サービスを修正しました <!-- Fix getty service startup -->
 * templates: lxc-debian: dpkg の --print-foreign-architectures オプションの Typo を修正しました <!-- Fix typo in calling dpkg with \-\-print-foreign-architectures option -->
 * templates: lxc-debian: ppc アーキテクチャを powerpc として扱うようにしました <!-- Handle ppc hostarch -> powerpc -->
 * templates: lxc-opensuse: openSUSE のデフォルトリリースを Leap 42.2 にしました <!-- Change openSUSE default release to Leap 42.2 -->
 * templates: lxc-opensuse: libgcc\_s1 を削除しました <!-- Remove libgcc\_s1 -->
 * templates: lxc-opensuse: poweroff.target から sigpwr.target へのコピーをしないようにしました <!-- Remove poweroff.target -> sigpwr.target copy -->
 * templates: lxc-opensuse: AppArmor を unconfined に設定するようになりました <!-- Set to be unconfined by AppArmor -->
 * templates: lxc-opensuse: Leap 42.2 向けの更新を行いました <!-- Update for Leap 42.2 -->
 * tests; クリーンアップのエラー時にテストを失敗にしなくなりました <!-- Don't cause test failures on cleanup errors -->
 * tests: 壊れた overlay モジュールでは非特権のテストを行わないようにしました <!-- Skip unpriv tests on broken overlay module -->
 * tools: ログ出力の改良を行いました <!-- Improve logging -->
 * tools: lxc-start: c->is\_defined(c) のチェックを削除しました (訳注: volatile コンテナを扱うためにコンテナの存在をチェックしなくなった)<!--  Remove c->is\_defined(c) check -->
 * tools: lxc-start: load\_config の後に configfile を設定するようにしました <!-- Set configfile after load\_config -->
 * tools: O\_RDONLY だけをチェックするようになりました (訳注: lxcpath のチェック)<!-- Only check for O\_RDONLY -->
 * tree-wide: 色々な場所のマクロのクリーンアップを行いました <!-- Random macro cleanups -->
 * tree-wide: variable length array を削除しました <!-- Remove any variable length arrays -->
 * tree-wide: Sic semper assertis! (訳注: ?? assert の使用を止めているようです)
 * utils: \_\_LXC\_NUMSTRLEN マクロを追加しました <!-- Add macro \_\_LXC\_NUMSTRLEN -->
 * utils: uid, gid, group を扱うのに便利なラッパー関数を追加しました <!-- Add uid, gid, group convenience wrappers -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 2.0.7.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 2.0.6 のパッケージをリリースするでしょう。

<!--
Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-2.0).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable-2.0 ブランチが [Github](https://github.com/lxc/lxc/tree/stable-2.0) にあります。


## LXC 2.0.6 リリースのお知らせ <!-- LXC 2.0.6 release announcement --><span class="text-muted">2016 年 11 月 23 日<!-- 23rd of November 2016 --></span>
<!--
This is the sixth bugfix release for LXC 2.0.
-->
このリリースは LXC 2.0 の 6 回目のバグフィックスリリースです。

重要な変更<!-- Important -->:

 * セキュリティホール CVE-2016-8649 の修正 <!-- Security fix for CVE-2016-8649 -->

バグ修正 <!-- Bugfixes -->:

 * utils: detect\_ramfs\_rootfs() の返り値を bool にしました <!-- make detect\_ramfs\_rootfs() return bool -->
 * tests: detect\_ramfs\_rootfs() に対するテストを追加しました <!-- add test for detect\_ramfs\_rootfs() -->
 * (訳注: systemd の) lxc と lxc@ ユニットに対する "Documentation" オプションを追加しました <!-- add Documentation entries to lxc and lxc@ units -->
 * python のサンプルに utf-8 エンコーディングであることを明記しました <!-- mark the python examples as having utf-8 encoding -->
 * log: snprintf() の返り値の sanity チェックを行うようにしました <!-- sanity check the returned value from snprintf() -->
 * lxc-alpine: /dev/shm を tmpfs としてマウントするエントリを追加しました <!-- mount /dev/shm as tmpfs -->
 * archlinux: eth0 上で DHCP を実行するようにしました <!-- Do DHCP on eth0 -->
 * archlinux: 名前解決の修正を行いました <!-- Fix resolving -->
 * lxc\_strerror() への参照を削除しました (訳注: 昔存在した関数の宣言が残っていたので削除) Drop leftover references to lxc\_strerror()
 * tests: s390x でのイメージダウンロードを修正しました <!-- fix image download for s390x -->
 * tools: lxc\_attach 内でコーディングスタイルを修正しました <!-- fix coding style in lxc\_attach -->
 * tools: overlay を有効なバックエンドにしました <!-- make overlay valid backend -->
 * tools: lxc-start のエラーレポートを改良しました <!-- better error reporting for lxc-start -->
 * alpine: extra パッケージのインストールを修正しました <!-- Fix installing extra packages -->
 * lxc-alpine: setfcap を drop しないようにしました <!-- do not drop setfcap -->
 * s390x: personality の seccomp の扱いを修正しました <!-- Fix seccomp handling of personalities -->
 * tools: lxc\_copy の引数の typo を修正しました <!-- correct the argument typo in lxc\_copy -->
 * liblxc.so に対して libtool を使うようにしました <!-- Use libtool for liblxc.so -->
 * c/r: --veth-pair の代わりに --external を使うようにしました <!-- use \-\-external instead of \-\-veth-pair -->
 * c/r: 設定で名前が指定されていないインターフェースで使う数値をきちんとインクリメントするようになりました <!-- remember to increment netnr -->
 * c/r: macvlan インターフェースの checkpoint/restore をサポートしました <!-- add checkpoint/restore support for macvlan interfaces -->
 * ubuntu: パッケージの更新に proc ファイルシステムが必要だったので修正しました <!-- Fix package upgrades requiring proc -->
 * c/r: macvlan の処理で重複する部分を削除しました <!-- drop duplicate hunk from macvlan case -->
 * c/r: デバイス名の生成に snprintf を使うようにしました <!-- use snprintf to compute device name -->
 * Android で動作するように libtool の扱いを調整しました <!-- Tweak libtool handling to work with Android -->
 * tests: lxc\_error() と lxc\_debug() を追加しました <!-- add lxc\_error() and lxc\_debug() -->
 * container start: すぐに cgroup 名前空間を生成するようにしました <!-- clone newcgroup immediately -->
 * (訳注: spec ファイルの) python コードの include に python3\_sitearch を使うようにしました <!-- use python3\_sitearch for including the python code -->
 * すべてのビルドされたファイルが一度だけ含まれるように rpm のビルドを修正しました <!-- fix rpm build, include all built files, but only once -->
 * cgfs: 不正な free() を修正しました <!-- fix invalid free() -->
 * OpenSUSE の build で obs-build も見つけるようにしました <!-- find OpenSUSE's build also as obs-build -->
 * --fancy と --fancy-format のヘルプをわかりやすくしました <!-- improve help text for \-\-fancy and \-\-fancy-format -->
 * lxc-ls の man ページの単語を修正しました <!-- improve wording of the help page for lxc-ls -->
 * cgfs: print\_cgfs\_init\_debuginfo() を追加しました <!-- add print\_cgfs\_init\_debuginfo() -->
 * cgfs: /proc/self/cgroup 内の空行をスキップするようにしました <!-- skip empty entries under /proc/self/cgroup -->
 * cgfs: NULL を明確にチェックするようにしました <!-- explicitly check for NULL -->
 * tools: lxc-stop で正しい終了コードを使うようにしました <!-- use correct exit code for lxc-stop -->
 * c/r: 明示的に criu 引数として bind マウントを発行するようにしました <!-- explicitly emit bind mounts as criu arguments -->
 * log:  LXC\_LOG\_BUFFER\_SIZE を 4096 に増やしました <!-- bump LXC\_LOG\_BUFFER\_SIZE to 4096 -->
 * conf: シャットダウン時のネットワーク名前空間の移動とリネームをマージしました (訳注: シャットダウン時に物理NICをホストの名前空間に戻すときの移動とリネーム処理を単一ステップで行うようにしました) <!-- merge network namespace move & rename on shutdown -->
 * c/r: dump 中の criu の標準出力への出力も保存するようになりました <!-- save criu's stdout during dump too -->
 * c/r: ログ出力の文字列にある不要な行末の改行を削除しました <!-- remove extra \ns from logs -->
 * c/r: off-by-one エラーの修正を行いました <!-- fix off-by-one error -->
 * c/r: checkpoint/restore を実行する前に状態をチェックするようになりました <!-- check state before doing a checkpoint/restore -->
 * start: cgroup のセットアップが終了したあとに CLONE\_NEWCGROUP を実行するようにしました <!-- CLONE\_NEWCGROUP after we have setup cgroups -->
 * (訳注: /run を指す) シンボリックリンク /var/run を作成するようにしました <!-- create symlink for /var/run -->
 * utils: lxc\_append\_string() を追加しました <!-- add lxc\_append\_string() -->
 * cgroups: cpuset.cpus から隔離された CPU を削除しました (訳注: isolcpus オプション付きでシステムが起動した場合)<!-- remove isolated cpus from cpuset.cpus -->
 * Update Ubuntu release name: zesty を追加し、wily を削除しました <!-- add zesty and remove wily -->
 * templates: lxc-ubuntu-cloud.in に squashfs サポートを追加しました <!-- add squashfs support to lxc-ubuntu-cloud.in -->
 * cgroups: v2 階層構造のエントリをスキップするようにしました (訳注: コントローラを/proc/self/cgroupから検索する際の話。v2にはコントローラのエントリはないため)<!-- skip v2 hierarchy entry -->
 * runlevel 0 と 6 で lxc-net を停止するようにしました <!-- also stop lxc-net in runlevels 0 and 6 -->
 * gitignore に lxc.egg-info を追加しました <!-- add lxc.egg-info to gitignore -->
 * pkg-config が示す場所に bash completion をインストールするようになりました <!-- install bash completion where pkg-config tells us to -->
 * conf: %m フォーマット指示子を使わないようにしました <!-- do not use %m format specifier -->
 * debian: libui-dialog-perl に依存しなくなりました <!-- Don't depend on libui-dialog-perl -->
 * cgroups: size\_t を表示する場合は %zu フォーマット指示子を使うようにしました <!-- use %zu format specifier to print size\_t -->
 * lxc-checkpoint: (訳注: criu のバージョンに応じて) 自動的に --external か --veth-pair のどちらかを選択するようになりました <!-- automatically detect if \-\-external or \-\-veth-pair -->
 * cgroups: cgfsng で segfault しないようにしました <!-- prevent segfault in cgfsng -->
 * utils: lxc\_preserve\_ns() を追加しました (訳注: 名前空間を示すファイルを取得する)<!-- add lxc\_preserve\_ns() -->
 * start: lxc\_handler に netnsfd を追加しました <!-- add netnsfd to lxc\_handler -->
 * conf: lxc\_preserve\_ns() を使うようにしました <!-- use lxc\_preserve\_ns() -->
 * attach: lxc\_preserve\_ns() を使うようにしました <!-- use lxc\_preserve\_ns() -->
 * lxc\_user\_nic: lxc\_preserve\_ns() を使うようにしました <!-- use lxc\_preserve\_ns() -->
 * conf, start: ログ出力を改良しました <!-- improve log output -->
 * conf: ホストから明確に veth デバイスを削除するようにしました <!-- explicitly remove veth device from host -->
 * conf, start: ネットワークの削除をよりスマートにしました <!-- be smarter when deleting networks -->
 * start, utils: preserve\_ns() を改良しました <!-- improve preserve\_ns() -->
 * start, error: ログの改良を行いました <!-- improve log + non-functional changes -->
 * start, namespace: ns\_info を namespace.{c,h} へ移動しました <!-- move ns\_info to namespace.{c,h} -->
 * attach, utils: バグ修正を行いました <!-- bugfixes -->
 * attach: ns\_info[LXC\_NS\_MAX] 構造体を使うようにしました <!-- use ns\_info[LXC\_NS\_MAX] struct -->
 * namespace: 常にユーザ名前空間へ最初にアタッチするようになりました <!-- always attach to user namespace first -->
 * cgroup: isolcpus の処理を改良しました <!-- improve isolcpus handling -->
 * cgroups: isolcpus ファイルが存在しない場合の処理を追加しました <!-- handle non-existent isolcpus file -->
 * utils: lxc\_safe\_uint() を追加しました <!-- add lxc\_safe\_uint() -->
 * tests: lxc\_safe\_uint() のためのユニットテストを追加しました <!-- add unit tests for lxc\_safe\_uint() -->
 * utils: lxc\_safe\_int() を追加しました <!-- add lxc\_safe\_int() -->
 * tests: lxc\_safe\_int() のためのユニットテストを追加しました <!-- add unit tests for lxc\_safe\_int() -->
 * conf/ile: lxc\_safe\_uint() 経由で ip アドレスのプレフィックスを取得するようにしました <!-- get ip prefix via lxc\_safe\_uint() -->
 * confile: config\_init\_{u,g}id で lxc\_safe\_u/int を使うようにしました <!-- use lxc\_safe\_u/int in config\_init\_{u,g}id -->
 * conf/ile: config\_pts() で lxc\_safe\_uint を使うようにしました <!-- use lxc\_safe\_uint() in config\_pts() -->
 * conf/ile: config\_start() で lxc\_safe\_u/int を使うようにしました <!-- use lxc\_safe\_u/int() in config\_start() -->
 * conf/ile: config\_monitor() で lxc\_safe\_uint を使うようにしました <!-- use lxc\_safe\_uint() in config\_monitor() -->
 * conf/ile: config\_tty() で lxc\_safe\_uint を使うようにしました <!-- use lxc\_safe\_uint() in config\_tty() -->
 * conf/ile: config\_kmsg() で lxc\_safe\_uint を使うようにしました <!-- use lxc\_safe\_uint() in config\_kmsg() -->
 * conf/ile: config\_lsm\_aa\_incomplete() で atoi の使用を止めました <!-- avoid atoi in config\_lsm\_aa\_incomplete() -->
 * conf/ile: config\_autodev() で lxc\_safe\_uint() を使うようにしました <!-- use lxc\_safe\_uint() in config\_autodev() -->
 * conf/ile: config\_ephemeral() で atoi() の使用を止めました <!-- avoid atoi() in config\_ephemeral() -->
 * utils: lxc\_safe\_int() を使うようにしました <!-- use lxc\_safe\_int() -->
 * lxc\_monitord: lxc\_safe\_int() と exit() を使うようにしました <!-- use lxc\_safe\_int() && use exit() -->
 * start: lxc\_safe\_int() を使うようにしました <!-- use lxc\_safe\_int() -->
 * conf: lxc\_safe\_{u}int() を使うようにしました <!-- use lxc\_safe\_{u}int() -->
 * tools/lxc\_execute: lxc\_safe\_uint() を使うようにしました <!-- use lxc\_safe\_uint() -->
 * tools/lxc\_stop: lxc\_safe\_uint() を使うようにしました <!-- use lxc\_safe\_uint() -->
 * utils: lxc\_safe\_long() を追加しました <!-- add lxc\_safe\_long() -->
 * tests: lxc\_safe\_long() のためのユニットテストを追加しました <!-- add unit tests for lxc\_safe\_long() -->
 * tools/lxc\_stop: lxc\_safe\_long() を使うようにしました <!-- use lxc\_safe\_long() -->
 * tools/lxc\_top: lxc\_safe\_int() を使うようにしました <!-- use lxc\_safe\_int() -->
 * tools/lxc\_ls: lxc\_safe\_uint() を使うようにしました <!-- use lxc\_safe\_uint() -->
 * tools/lxc\_autostart: lxc\_safe\_{int,long}() を使うようにしました <!-- use lxc\_safe\_{int,long}() -->
 * tools/lxc\_console: lxc\_safe\_uint() を使うようにしました <!-- use lxc\_safe\_uint() -->
 * tools: 標準でない名前空間の識別子を置換するようにしました <!-- replace non-standard namespace identifiers -->
 * LXC ブリッジで static な MAC アドレスを設定するようになりました <!-- Configure a static MAC address on the LXC bridge -->
 * tests: overflow のテストを削除しました <!-- remove overflow tests -->
 * attach: attach するプロセスに procfd を送らないようにしました <!-- do not send procfd to attached process -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 2.0.6.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 2.0.6 のパッケージをリリースするでしょう。

<!--
Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-2.0).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable-2.0 ブランチが [Github](https://github.com/lxc/lxc/tree/stable-2.0) にあります。


## LXC 1.0.9 リリースのお知らせ <!-- LXC 1.0.9 release announcement --><span class="text-muted">2016 年 11 月 23 日 <!-- 23rd of November 2016 --></span>
<!--
This is the ninth bugfix release for LXC 1.0.
-->
このリリースは LXC 1.0 の 9 回目のバグフィックスリリースです。

重要な変更<!-- Important -->:

 * セキュリティホール CVE-2016-8649 の修正 <!-- Security fix for CVE-2016-8649 -->

バグ修正<!-- Bugfixes -->:

 * doc: lxc-create(1) の "-t" オプションを必須としました <!-- change "\-t" option of lxc-create(1) to being required -->
 * ubuntu-cloud: 様々な修正を行いました <!-- Various fixes -->
 * coverity: cgmanager の NULL ポインタ参照を回避しました <!-- avoid null pointer dereference in cgmanager -->
 * プロジェクト全体で /usr/bin/python3 の代わりに /usr/bin/env python3 を使うようにしました <!--  Use /usr/bin/env python3 instead of /usr/bin/python3 project-wide -->
 * Debian archive GPG キーリングが使えない時は取得するようにしました <!-- Fetch Debian archive GPG keyrings when they're not available -->
 * preserve\_ns 関数の動作を改良しました (訳注: `/proc/self/ns` 以下のファイルを取得してopenする際のエラーログが細かくでるようになった)<!-- Better handle preserve\_ns behavior -->
 * lxc\_container struct: 構造体のメンバを足すときに、メンバの順序を変えないよう注意書きをコメントに追記しました <!-- add comment about moving member fns -->
 * debian: キャッシュがない場合のコンテナ生成のバグを修正しました <!-- Fix container creation on missing cache -->
 * lxc: lxc-start が wlan phys をサポートしました <!-- let lxc\-start support wlan phys -->
 * apparmor: lxc.aa\_profile = unchanged をサポートしました <!-- support lxc.aa\_profile = unchanged -->
 * seccomp: arm64 上の 32bit arm と ppc64 上の 32bit ppc をサポートしました <!-- support 32-bit arm on arm64, and 32-bit ppc on ppc64 -->
 * ARM と PPC に対しては条件付きのコンパイルを行うようにしました (訳注: それぞれをサポートする環境のみ関係するコードをコンパイルする)<!-- Conditional compilation for ARM and PPC -->
 * prune\_init\_cgroup: NULL を参照しないようにしました <!-- don't dereference NULL -->
 * 展開されていない設定をクリアする際に 'lxc.mount.entry' が正しくクリアされない問題を修正しました <!-- fix 'lxc.mount.entry' key when clearing unexpanded config -->
 * 上記の lxc.mount.entry の問題の Fix に伴う get\_item テストの更新 <!-- Update get\_item test after the lxc.mount.entry fix -->
 * seccomp プロファイルが定義されていないコンテナの attach 時の問題を修正しました <!-- Fix seccomp profile on attach of undefined container -->
 * root で実行されていない場合、save\_phys\_nics 関数は即座にリターンするようになりました <!-- Return immediately in save\_phys\_nics if not run as root Physical nic is not instantiated in lxc\_create\_network -->
 * lxc-checkconfig: zgrep に依存しなくなりました <!-- remove zgrep dependency -->
 * 条件付きコンパイルのリファクタリングを行いました <!-- Refactoring conditional directives. -->
 * swap の計算を修正しました <!-- Fix swap calculation -->
 * python-lxc: コンテナにアタッチした後に PyOS\_AfterFork を呼ぶようにしました <!-- Call PyOS\_AfterFork after attaching to a container -->
 * ifaddrs.c 内でのバッファオーバーフローを修正しました <!-- fix buffer overflow in ifaddrs.c -->
 * 値のない lxc.cap.drop の動作をドキュメントにしました <!-- Documenting valueless lxc.cap.drop behaviour -->
 * nlmsg\_reserver() が NULL を返した場合に NULL ポインタを参照する問題を修正しました <!-- NULL pointer deference if nlmsg\_reserve() returns NULL for ifi -->
 * apparmor による制限がされている場合には aa ラベルを変更しようとしないようにしました <!-- Don't try to change aa label if we are already apparmor-confined -->
 * coverity: preserve\_ns は bool を返すので、int が返ることを期待するコードになっていたのを修正しました <!-- preserve\_ns returns bool, not int -->
 * apparmor: 'unconfined' ラベルを unconfined と認識するようになりました <!-- recognize 'unconfined' as unconfined. -->
 * bash completion: 'have' コマンドが廃止され '\_have' になったので修正しました <!-- the 'have' command was deprecated in favor of '\_have' -->
 * ipv6\_gateway を削除した場合に正しく NULL を設定するようにしました <!-- Set the right variable to NULL when unsetting ipv6\_gateway -->
 * stop フックで継承された fd を保存するようになりました <!-- preserve inherited fds for stop hook -->
 * エラーメッセージで null 文字列を表示しないようにしました <!-- avoid printing null string in error message -->
 * Fedora テンプレート内のコメントを修正しました <!-- Fix Comment inside Fedora Template -->
<!-- * doc: Add valueless lxc.cap.drop behaviour to Japanese man page -->
 * リスト形式で指定するオプションの動作をドキュメントに明記しました <!-- Document clear behaviour of list options -->
 * Python 製 lxc-ls でのロックパスの削除を修正しました <!-- fix lockpath removal in Python lxc-ls -->
 * ネットワークの設定値をクリアする方法をドキュメントに記載しました <!-- Document network clear option -->
 * open\_without\_symlink: (訳注: パスをopenするユーティリティ関数で) prefix として与える文字列が空である場合も適切に処理するようになりました <!-- Account when prefix is empty string -->
 * lxc\_setup\_fs: /dev/shm が存在しない場合は作成するようになりました <!-- Create /dev/shm folder if it doesn't exist -->
 * cgmanager: tasks と cgroup.procs ファイルを chmod +x しなくなりした <!-- don't make tasks + cgroup.procs +x -->
 * cleanup: lxc\_container::want\_\* 関数の説明コメントを更新しました <!-- lxc\_container::want\_\* comment descriptions -->
 * fedora テンプレート内の echo 行を修正しました <!-- Fix echo statement inside fedora template -->
 * ${UTSNAME} は定義されていないので代わりに ${utsname} を使うようにしました <!-- Use ${utsname} instead of ${UTSNAME} because latter variable is not defined. -->
 * '.' ではじまる名前のコンテナを無視するようになりました <!-- Ignore any container with a name starting by '.' -->
 * /dev のサイズを 500k に増やしました <!-- increase /dev size to 500k -->( issue #781)
 * cgfs: パスから "init.scope" を削除するようにしました <!-- prune the init scope from paths -->
<!-- * doc: add clear behaviour of list options to Japanese lxc.container.conf(5) -->
<!-- * doc: Add network clear option to Japanese lxc.container.conf(5) -->
 * apparmor: /run/{,lock} -> /var/run/{,lock/} への bind mount を許可しました <!-- allow binding /run/{,lock/} \-> /var/run/{,lock/} -->
 * log.c:\_\_lxc\_log\_set\_file: (訳注: ログファイル名を表す引数) fname に NULL は許可されなくなりました <!-- fname cannot be null -->
 * log.c:\_\_lxc\_log\_set\_file: (訳注: デフォルトのログファイルパスを) 上書きする際、ログファイルを完全にクローズするようにしました <!-- completely close log file when overriding -->
 * mountall が sysfs を再マウントできるようになりました <!-- Allow sysfs remount by mountall -->
 * cgroups: device cgroup の設定が EPERM で失敗した場合には処理が失敗しなくなりました <!-- do not fail if setting devices cgroup fails due to EPERM -->
 * cgfs: devices cgroup に書き込む時は EACCES もチェックするようにしました <!-- also check for EACCES when writing devices -->
 * lxc: cgfs: lxcfs を扱うようになりました <!-- handle lxcfs -->
 * lxc manpage の typo を修正しました <!-- Fix typo in lxc manpage -->
 * cgfs: 有効な cgroup のマウントポイントを確実に使うようにしました <!-- make sure we use valid cgroup mountpoints -->
 * cgfs: 冗長な出力を減らしました <!-- be less verbose -->
 * doc: lxc-attach(1) の日本語 man を改良しました <!-- improve Japanese lxc-attach(1) -->
 * doc: lxc-unshare(1) を改良しました <!-- improve lxc-unshare(1) -->
 * open\_without\_symlink: ELOOP 以外のエラーでは SYSERROR とならないようになりました <!-- Don't SYSERROR on something else than ELOOP -->
 * lxc-busybox: コンテナ rootfs 内で /etc/fstab を touch するようにしました <!-- Touch /etc/fstab in the container rootfs -->
 * sync: 他のプロセスからのエラーをレポートするために LXC\_SYNC\_ERROR を追加しました <!-- add LXC\_SYNC\_ERROR to report errors from another process. -->
 * start: エラーをレポートするために LXC\_SYNC\_ERROR を使うようになりました <!-- use LXC\_SYNC\_ERROR to report errors. -->
 * lxc-busybox: ダイナミックリンクされた Busybox に対する警告を削除しました <!-- Remove warning for dynamically linked Busybox -->
 * out-of-tree (VPATH) ビルドの際のインストールの問題を修正しました <!-- Fix installation of out-of-tree (VPATH) builds -->
 * デフォルトの Debian のミラーとして httpredir.debian.org を使うようにしました <!-- use httpredir.debian.org as the default Debian mirror -->
 * Ubuntu の debootstrap 用に常にデフォルトのミラーを定義するようにしました <!-- always provide a default mirror for debootstraping Ubuntu -->
 * lxc-ubuntu: secondary アーキテクチャでのイメージビルドの問題を修正しました <!-- Fix building on secondary architectures -->
 * Debian のリリース名を更新しました <!-- update Debian release names -->
 * btrfs\_recursive\_destroy を修正しました (訳注: 4.2 kernel 以降で非特権コンテナの場合にlxc-destroyが失敗していたのを修正)<!-- fix btrfs\_recursive\_destroy -->
 * ioctl 直後に errno を保存するようにしました <!-- store errno immediately after ioctl -->
 * man page の Typo の修正 (Debian のlintian で発覚) <!-- fix spelling mistakes spotted by Debian's lintian -->
 * netlink\_open: エラー時にソケットをクローズするようにしました <!-- close socket on error -->
 * lxc\_mount\_auto\_mounts(): 失敗時にメモリを開放するようにしました <!-- free memory on failure -->
 * doxygen が生成する一時ファイルを無視するようにしました <!-- Ignore temporary files generated by doxygen -->
 * LXC\_GENERATE\_DATE でより良い日付フォーマットを使うようになり、SOURCE\_DATE\_EPOCH をサポートするようになりました <!-- nicer date format and support for SOURCE\_DATE\_EPOCH in LXC\_GENERATE\_DATE -->
 * lxc.service.in から廃止された syslog.target を削除しました <!-- drop obsolete syslog.target from lxc.service.in -->
 * メンテナを更新しました <!-- Update maintainers -->
 * lxc-checkconfig で標準出力がターミナルかどうかチェックするようになりました <!-- Check if stdout is a terminal in lxc\-checkconfig -->
 * Container.\_\_init\_\_ が失敗したとき PyErr を設定するようになりました <!-- Fixed \- set PyErr when Container.\_\_init\_\_ fails -->
 * lxc\_list\_nicconfigs でキーとして `type` を追加しました <!-- Added `type` to keys in lxc\_list\_nicconfigs -->
 * lxc-alpine: DHCP クライアントに強制的にホスト名を送るようにしました <!-- Force DHCP client to send hostname -->
 * sync: 想定外のメッセージサイズの時に失敗するようになりました <!-- fail on unexpected message sizes -->
 * sync.c: 正しい型を使うようになりました (訳注: コード内の変数宣言の話) <!-- use correct types -->
 * lxc-centos: RHEL 7+ の時に ID = rhel の場合の処理を追加しました <!-- Added OR statement for cases of ID = rhel in RHEL 7+ -->
 * userns のマッピングを設定した後に netns を unshare するようになりました <!-- Unshare netns after setting the userns mappings -->
 * 設定ファイルの設定値をクオートできるようになりました <!-- Allow configuration file values to be quoted -->
 * Fuse ファイルシステム用に fstype=fuse も許可されるようになりました (訳注: AppArmor の Fuse 用ルールに mount fstype=fuse を追加)<!-- Also allow fstype=fuse for fuse filesystems -->
 * alpine テンプレートのネットワークインターフェース設定内の hostname 設定を修正しました <!-- Fix hostname in interface config for apline template -->
 * in6\_addr が複数回定義されてしまう問題を修正しました <!-- Fix redefinition of struct in6\_addr -->
 * lxc-debian: init が必ずインストールされるようにしました <!-- make sure init is installed -->
 * plamo: テンプレートを改良しました (訳注: 不要なパッケージの削除、起動サービスを最小限に) <!-- Improve Plamo template -->
 * AppArmor: lxc-start に対してマウントオプション make-rslave のルールを追加しました <!-- add make-rslave to usr.bin.lxc-start -->
 * Bionic ですべての lxcmntent.h の関数が宣言されるようにしました <!-- Include all lxcmntent.h function declarations on Bionic -->
 * lxc-debian: wheezy コンテナを作成する際に init が確実にインストールされるように修正しました <!-- fix regression when creating wheezy containers -->
 * vlan タイプのインターフェースで MTU を設定できるようになりました <!-- Set up MTU for vlan-type interfaces. -->
 * templates: locale が設定されていないことが原因の perl のノイジーな警告出力を防ぎました (訳注: Debian テンプレート)<!-- avoid noisy perl warnings caused by missing locales -->
 * lxc.pc に prefix を追加しました <!-- Add a prefix to the lxc.pc -->
 * conf: pty\_info を開放したあと NULL に設定するようにしました <!-- set pty\_info to NULL after free -->
 * apparmor: 生成されたファイルをリフレッシュしました <!-- Refresh generated file -->
 * tools: lxc-create の出力で抜けていた newline を追加しました <!-- add missing newline in lxc-create output -->
 * (訳注: lxc-download テンプレート内でダウンロード用の鍵で) long ID の代わりに full の GPG フィンガープリントを使うようになりました <!-- Use full GPG fingerprint instead of long IDs. -->
 * utils: mips 用の signalfd システムコール番号を追加しました <!-- Add mips signalfd syscall numbers -->
 * seccomp: MIPS で seccomp を扱えるようにしました <!-- Implement MIPS seccomp handling -->
 * seccomp: lxc\_config\_parse\_arch に mips と mips64 のエントリを追加しました <!-- Add mips and mips64 entries to lxc\_config\_parse\_arch -->
 * seccomp: strerror() を修正しました (訳注: strerror に与える引数の修正)<!-- fix strerror() -->
 * confile: より多くのアーキテクチャを扱えるように lxc\_config\_parse\_arch() 関数に定義を追加しました <!-- add more archs to lxc\_config\_parse\_arch() -->
 * seccomp: s390x のサポートを追加しました <!-- add support for s390x -->
 * seccomp: 複数回の include 指定を削除し、include の順序を整列させました <!-- remove double include and order includes -->
 * seccomp: 動作と関係ない変更を行いました (訳注: ソースコードのフォーマット、ログ出力の整形など)<!-- non functional changes -->
 * templates: fedora テンプレート実行時に openssl コマンドがない場合にインストールするようにしました <!-- fedora requires openssl binary -->
 * doc/api/Doxyfile に FULL\_PATH\_NAMES=NO を設定しました <!-- set FULL\_PATH\_NAMES=NO in doc/api/Doxyfile -->
 * console: 正しいログファイル名を使うようにしました <!-- use correct log name -->
 * lxczfs: 細かな修正を行いました <!-- small fixes -->
 * rsync に sparse ファイルを効率的に扱わせるようにしました <!-- make rsync deal with sparse files efficiently -->
 * ppc64el の場合に lxc-create -t debian が失敗するのを修正しました <!-- lxc-create -t debian fails on ppc64el arch -->
 * utils: lxc\_string\_split() を (訳注: 初期化されていないメモリ領域が返らないように) 修正しました <!-- fix lxc\_string\_split() -->
 * CentOS テンプレート中の "centos" という文字列を "CentOS" に修正しました <!-- Fix spelling of CentOS in the templates -->
 * python のサンプルに utf-8 エンコーディングであることを明記しました <!-- mark the python examples as having utf-8 encoding -->
 * log: snprintf() の返り値の sanity チェックを行うようにしました <!-- sanity check the returned value from snprintf() -->
 * archlinux: eth0 上で DHCP を実行するようにしました <!-- Do DHCP on eth0 -->
 * archlinux: 名前解決の修正を行いました <!--  Fix resolving -->
 * lxc\_strerror() への参照を削除しました (訳注: 昔存在した関数の宣言が残っていたので削除) <!-- Drop leftover references to lxc\_strerror(). -->
 * s390x: personality の seccomp の扱いを修正しました <!-- Fix seccomp handling of personalities -->
 * ubuntu: パッケージの更新に proc ファイルシステムが必要だったので修正しました <!-- Fix package upgrades requiring proc -->
 * (訳注: spec ファイルの) python コードの include に python3\_sitearch を使うようにしました <!-- use python3\_sitearch for including the python code -->
 * cgfs: 不正な free() を修正しました <!-- fix invalid free() -->
 * cgfs: print\_cgfs\_init\_debuginfo() を追加しました <!-- add print\_cgfs\_init\_debuginfo() -->
 * cgfs: /proc/self/cgroup 内の空行をスキップするようにしました <!-- skip empty entries under /proc/self/cgroup -->
 * tools: lxc-stop で正しい終了コードを使うようにしました <!-- use correct exit code for lxc-stop -->
 * conf: シャットダウン時のネットワーク名前空間の移動とリネームをマージしました (訳注: シャットダウン時に物理NICをホストの名前空間に戻すときの移動とリネーム処理を単一ステップで行うようにしました)<!-- merge network namespace move & rename on shutdown -->
 * (訳注: /run を指す) シンボリックリンク /var/run を作成するようにしました <!-- create symlink for /var/run -->
 * cgfs: NULL を明確にチェックするようにしました <!-- explicitly check for NULL -->
 * templates: lxc-ubuntu-cloud.in に squashfs サポートを追加しました <!-- add squashfs support to lxc-ubuntu-cloud.in -->
 * pkg-config が示す場所に bash completion をインストールするようになりました <!-- install bash completion where pkg-config tells us to -->
 * conf: %m フォーマット指示子を使わないようにしました <!-- do not use %m format specifier -->
 * debian: libui-dialog-perl に依存しなくなりました <!-- Don't depend on libui-dialog-perl -->
 * Android でのビルドのために 'index' 関数を 'strchr' 関数に置き換えました <!-- Replace 'index' by 'strchr' for Android build -->
 * tree-wide: readdir\_r() を readdir() に置き換えました <!-- replace readdir\_r() with readdir() -->
 * attach: attach するプロセスに procfd を送らないようにしました <!-- do not send procfd to attached process -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.0.9.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 1.0.9 のパッケージをリリースするでしょう。

<!--
Please note that LXC upstream strongly recommends 1.0 users to upgrade to the 2.0 LTS release.  
The 1.0 branch will keep being supported until June 2019, but at this point,  
only critical bugfixes and security updates will be backported.
-->
1.0 ユーザに対して、LXC開発元は 2.0 LTS リリースへのアップグレードを強くおすすめします。
1.0 ブランチは 2019 年 6 月までサポートが続きます。しかし現時点では、重大なバグフィックスとセキュリティホール対策のみがバックポートされます。

<!--
Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.0).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable-1.0 ブランチが [Github](https://github.com/lxc/lxc/tree/stable-1.0) にあります。

## LXC 2.0.5 リリースのお知らせ <!-- LXC 2.0.5 release announcement --><span class="text-muted">2016 年 10 月 5 日 <!-- 5th of October 2016 --></span>
<!--
This is the fifth bugfix release for LXC 2.0.
-->
このリリースは LXC 2.0 の 5 回目のバグフィックスリリースです。

<!--
The main bugfixes in this release are:
-->
このリリースの主なバグフィックスは以下です:

 * /tools/ に移動したプログラムの .gitignore 内の記載を修正しました <!-- Fix .gitignore after /tools/ split -->
 * lxc-test-utils を .gitignore に追加しました <!-- Add lxc-test-utils to .gitignore -->
 * bdev: overlayfs のモジュール名をカーネルの正式な名前にしました <!-- use correct overlay module name -->
 * cleanup: tools: --name オプションを lxc-top のヘルプから削除しました <!-- remove \-\-name from lxc-top usage message -->
 * cleanup: lxc-execute のヘルプ出力のオプション部分の出力のホワイトスペースを揃えました <!--  whitespaces in option alignment for lxc-execute -->
 * 長い ID の代わりにフルの GPG fingerprint を使うようにしました (訳注: lxc-download で使っている KEYID) <!-- Use full GPG fingerprint instead of long IDs. -->
 * tools: --rcfile を共通オプションに移動しました <!-- move \-\-rcfile to the common options list -->
 * tools: load\_config のあとに configfile を設定するようにしました <!-- set configfile after load\_config -->
 * doc: --rcfile が共通オプションになったのをマニュアルに反映させました (日本語、韓国語 man も)<!-- add \-\-rcfile to common opts -->
 * doc: 韓国語 lxc-attach(1) を更新しました <!-- Update Korean lxc-attach(1) -->
<!-- * doc: Add \-\-rcfile to Korean common opts -->
<!-- * doc: Add \-\-rcfile to Japanese common opts -->
 * tools: exit の際は常に exit(EXIT_*) を使うようにしました <!-- use exit(EXIT\_\*) everywhere -->
 * tools: main() 外の exit() 呼び出しを統一しました <!-- unify exit() calls outside of main() -->
 * utils: mips の signalfd システムコール番号を追加しました <!-- Add mips signalfd syscall numbers -->
 * seccomp: MIPS の seccomp ハンドリングを実装しました <!-- Implement MIPS seccomp handling -->
 * seccomp: lxc\_config\_parse\_arch に mips と mips64 のエントリを追加しました <!-- Add mips and mips64 entries to lxc\_config\_parse\_arch -->
 * seccomp: strerror() を修正しました <!-- fix strerror() -->
 * confile: lxc\_config\_parse\_arch() にさらに arch を追加しました (訳注: ppc や arm など)<!-- add more archs to lxc\_config\_parse\_arch() -->
 * seccomp: s390x をサポートしました <!-- add support for s390x -->
 * seccomp: 複数回の include を削除し、include の順序を調整しました <!-- remove double include and order includes -->
 * seccomp: 機能的な部分以外の変更 (訳注: エラーメッセージの大文字小文字、コードのインデントの調整、コードの書き方の調整など)<!-- non functional changes -->
 * templates: fd 200 の代わりに 9 を使うようにしました <!-- use fd 9 instead of 200 -->
 * templates: fedora では openssl パッケージが必要なのでテンプレート中で追加するようにしました <!-- fedora requires openssl binary -->
 * tools: lxc\_device.c 内の返り値に boolean を使うようにしました <!-- use boolean for ret in lxc\_device.c -->
 * c/r: pidfile の代わりに /proc/self/tid/children を使うようにしました <!-- use /proc/self/tid/children instead of pidfile -->
 * c/r: 一部の arch の pid\_t を修正しました <!-- Fix pid\_t on some arches -->
 * templates: debian でホストの arch 検出に mips を追加しました <!-- Add mips hostarch detection to debian -->
 * cleanup: ヘルプ文字列の TAB をスペースに置き換えました <!-- replace tabs wth spaces in usage strings -->
 * 余分な 'ret' を削除しました <!-- remove extra 'ret' -->
 * c/r: pid のパースを試みたあとステータスを書き込むようにしました <!-- write status only after trying to parse the pid -->
 * doc/api/Doxyfile で FULL\_PATH\_NAMES=NO に設定するようしました <!-- set FULL\_PATH\_NAMES=NO in doc/api/Doxyfile -->
 * templates: halt.target -> sigpwr.target へのシンボリックリンクを削除しました <!-- rm halt.target -> sigpwr.target symlink -->
 * templates: 不要なディレクトリの作成をやめました <!-- remove creation of bogus directory -->
 * console: ログ出力時に正しい名前を使うようになりました <!-- use correct log name -->
 * configure: --disable-werror を追加しました <!-- add \-\-disable-werror -->
 * tests: get\_item テストを修正しました <!-- fix get\_item tests -->
 * templates: alpine テンプレートで正確なバージョンの cron を使うようになりました <!-- use correct cron version in alpine template -->
 * c/r: migrate\_opts 構造体のサイズが小さい場合、構造体の最後をゼロで埋めるようにしました <!-- zero a smaller than known migrate\_opts struct -->
 * lxczfs: 細かい修正を行いました <!-- small fixes -->
 * c/r: valid\_opts を必要に応じて free するようにしました <!-- free valid\_opts if necessary -->
 * rsync でスパースファイルをより効率的に扱うようになりました <!-- make rsync deal with sparse files efficiently -->
 * lxc-create -t debian が ppc64el の時に失敗するのを修正しました <!-- Lxc-create -t debian fails on ppc64el arch -->
 * c/r: コメントの typo を修正しました <!-- fix typo in comment -->
 * cgroup: 階層に関係する新しい関数を追加しました <!-- add new functions for interacting with hierachies -->
 * utils: lxc\_deslashify を追加しました <!-- add lxc\_deslashify -->
 * c/r: チェックポイントの際に --cgroups-roots　を与えるようになりました <!-- pass --cgroup-roots on checkpoint -->
 * cgroup: cgfsng\_escape の変な hack を除去しました <!-- get rid of weird hack in cgfsng\_escape -->
 * cgroup: cgroup\_canonical\_path を削除しました <!-- drop cgroup\_canonical\_path -->
 * c/r: cgroup\_num\_hierarchies > 0 をチェックするようになりました <!-- check that cgroup\_num\_hierarchies > 0 -->
 * tools: lxc-ls -1 で末尾にスペースを追加しなくなりました <!-- do not add trailing spaces on lxc-ls -1 -->
 * conf: netdev->link から mtu を取得するようになりました <!-- retrieve mtu from netdev->link -->
 * conf: veth から mtu を取得するようになりました <!-- try to retrieve mtu from veth -->
 * c/r: リストア時にコントロール中の tty からデタッチするようになりました <!-- detatch from controlling tty on restore -->
 * tty からのアクセスがなく呼ばれる attach の場合、NULL ポインタの値を参照しようとしていた問題を修正しました <!-- Fix null derefence if attach is called without access to any tty -->
 * utils: lxc\_string\_split() を修正しました (訳注: 初期化されていない領域を返さないように修正)<!-- fix lxc\_string\_split() -->
 * tools: lxc\_deslashify() が特別な場合を扱うようになりました <!-- lxc\_deslashify() handle special cases -->
 * tests: lxc\_deslashify() のユニットテストを追加しました <!-- add unit tests for lxc\_deslashify() -->
 * ALTLinux コンテナの作成をすべてのブランチで修正しました <!-- Fix for ALTLinux container creation in all branches -->
 * utils: lxc\_deslashify() でメモリを解放するようになりました <!-- lxc\_deslashify() free memory -->
 * テンプレート中の CentOS 文字列の修正を行いました (訳注: centos -> CentOS の置換) <!-- Fix spelling of CentOS in the templates -->
 * 開発リリースであることが検出できるように LXC\_DEVEL を定義しました <!-- Define LXC\_DEVEL to detect development releases -->
 * tools: lxc-checkconfig の devpts のチェックを条件付きとしました (訳注: kernel 4.7 で DEVPTS_MULTIPLE_INSTANCES が削除されたので < 4.7 の時のみチェックするようになった)<!-- lxc-checkconfig conditionalize devpts check -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 2.0.5.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 2.0.5 のパッケージをリリースするでしょう。

<!--
Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-2.0).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable ブランチが [Github](https://github.com/lxc/lxc/tree/stable-2.0) にあります。

## LXC 1.1 EOL のお知らせ <!-- End of life announcement for LXC 1.1 --><span class="text-muted">2016 年 9 月 1 日<!-- 1st of September 2016 --></span>
<!--
LXC 1.1 has now reached its end of life.
-->
LXC 1.1 は EOL となりました。

<!--
This means that the stable-1.1 branch is now closed and we will not be  
doing any more bugfix or security releases for this branch.
-->
stable-1.1 ブランチはクローズされ、今後このブランチに対するバグ修正やセキュリティ対策のリリースは行われません。

<!--
Anyone still on LXC 1.1 should upgrade to 2.0 as soon as possible.
-->
今でも LXC 1.1 をお使いの場合、なるべく早く 2.0 へアップグレードしてください。

<!--
As a reminder, we currently support the following releaes:
-->
現在、以下のリリースがサポート中です:

 * LXC 1.0.x が 2019 年 6 月 1 日まで <!-- LXC 1.0.x until June 1st 2019 -->
 * LXC 2.0.x が 2021 年 6 月 1 日まで <!-- LXC 2.0.x until June 1st 2021 -->

## LXC 2.0.4 リリースのお知らせ <!-- LXC 2.0.4 release announcement --><span class="text-muted">2016 年 8 月 15 日 <!-- 15th of August 2016 --></span>
<!--
This is the fourth bugfix release for LXC 2.0.
-->
このリリースは LXC 2.0 の 4 回目のバグフィックスリリースです。

<!--
The main bugfixes in this release are:
-->
このリリースの主なバグフィックスは以下です:

 * core: lxc.pc に prefix を追加しました <!-- Add a prefix to the lxc.pc -->
 * core: mount\_entry 関数に持続的な dev エントリの際に NODEV の指定をスキップするための引数を追加しました <!-- Add flag in mount\_entry to skip NODEV in case of a persistent dev entry -->
 * core: ns\_info 構造体に欠けていた cgroup namespace を追加しました <!-- Add missing cgroup namespace to ns\_info struct -->
 * core: attach: lxc-attach で unshare の代わりに setns を使うようにしました <!-- setns instead of unshare in lxc-attach -->
 * core: bdev: include ファイルのサーチパスにサブディレクトリを追加して、呼び出し時にディレクトリを含めないようにしました <!-- Add subdirectories to search path -->
 * core: bdev: btrfs の subvolume の検出をよりスマートに行うようにしました <!-- Be smarter about btrfs subvolume detection -->
 * core: cgfsng: パスを前もって計算しないようにしました <!-- Don't pre-calculate core -->
 * path: cgfsng: is\_lxcfs() と is\_cgroupfs() を修正しました (訳注: 関数の返り値をきちんと返すようにしました) <!-- Fix is\_lxcfs() and is\_cgroupfs() -->
 * core: cgroups: cgroup 関連のソースファイルを共通のサブディレクトリに移動させました <!-- Move cgroup files to common subfolder -->
 * core: conf: free のあとに pty\_info に NULL をセットするようにしました (訳注: リブート時の二重解放を防ぎます) <!-- Set pty\_info to NULL after free -->
 * core: SIGRTMIN+3 の検出を行うようにしました (訳注: systemd でクリーンなシャットダウンを行うのに必要) <!-- Detect if we should send SIGRTMIN+3 -->
 * core: readdir\_r() の代わりに readdir() を使うようにしました <!-- Replace readdir\_r() with readdir() -->
 * core: vlan タイプのインターフェースの際に MTU を設定するようにしました <!-- Set up MTU for vlan-type interfaces. -->
 * core: tools, tests: リポジトリを再編成しました (訳注: lxc の cli ツールのソースは tools ディレクトリ以下に移動しました)<!-- Reorganize repo -->
 * c/r: CRIU の --action-script オプションをサポートしました <!-- Add support for CRIU's \-\-action-script -->
 * c/r: CRIU の --ghost-limit オプションをサポートしました <!-- Add support for ghost-limit in CRIU -->
 * c/r: CRIU の dump を行っている間は (TCP の) in-flight を落とすようにしました <!-- Drop in-flight connections during CRIU dump -->
 * c/r: migrate\_opts を適切に初期化するようにしました <!-- Initialize migrate\_opts properly -->
 * c/r: ローカルな関数を static にしました <!-- Make local function static -->
 * c/r: tmpnam() を mkstemp() に置き換えました <!-- Replace tmpnam() with mkstemp() -->
 * c/r: criu のバージョンを保持するようにしました <!-- Store criu version -->
 * c/r: (訳注: エラー出力の) フォーマット書式に PRIu64 を使うようにしました <!-- Use PRIu64 format specifier -->
 * doc: lintian で見つかった typo を修正しました <!-- Fix typo found by lintian -->
 * doc: lxc-attach(1) に記載されていなかったオプションを追加しました <!-- Update lxc-attach(1) -->
 * lxc-attach: -f/--rcfile オプションを追加しました <!-- Add -f option (rcfile) -->
 * lxc-attach: ホワイトスペースのクリーンアップを行いました <!-- Cleanup whitespaces -->
 * lxc-create: 出力時に欠けていた改行を追加しました <!-- Add missing newline in output -->
 * lxc-ls: 正しいランタイムパスを使うようになりました <!-- Use correct runtime path -->
 * templates: alpine: 新しいアーキテクチャの追加を行いました <!-- Add support for new arch -->
 * templates: alpine: /run を tmpfs でマウントするようになりました <!-- Mount tmpfs under /run -->
 * templates: debian: テンプレート中の変数に対するクオートを追加しました (少なくとも $rootfs はカバーされました)<!-- Add more quotes to variables (at least $rootfs should now be covered) -->
 * templates: debian: ロケールがないことによるうっとうしい perl の警告出力を防ぐようになりました <!-- Avoid noisy perl warnings caused by missing locales -->
 * templates: debian: wheezy コンテナを作成した際のバグ再発を修正しました <!-- fix regression when creating wheezy containers -->
 * templates: debian: shellcheck (Ubuntu: 0.3.7-5 amd64) の結果が良くなるようにしました <!-- Make shellcheck (Ubuntu: 0.3.7-5 amd64) most possible happy -->
 * tests: lxc\_string\_in\_array() に対するユニットテストを追加しました <!-- Add unit tests for lxc\_string\_in\_array() -->
 * tests: lxc\_string\_replace() に対するユニットテストを追加しました <!-- Add unit tests for lxc\_string\_replace() -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 2.0.4.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 2.0.4 のパッケージをリリースするでしょう。

<!--
Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-2.0).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable ブランチが [Github](https://github.com/lxc/lxc/tree/stable-2.0) にあります。

## LXC 2.0.3 リリースのお知らせ <!-- LXC 2.0.3 release announcement --><span class="text-muted">2016 年 6 月 28 日 <!-- 28th of June 2016 --></span>
<!--
This is the third bugfix release for LXC 2.0.
-->
このリリースは LXC 2.0 の 3 回目のバグフィックスリリースです。

<!--
LXC 2.0.3 was released just minutes after LXC 2.0.2 as we spotted an incorrect  
AppArmor profile included in the LXC 2.0.2 release tarball.
-->
LXC 2.0.3 は、LXC 2.0.2 に正しくない AppArmor プロファイルが含まれてしまったので、LXC 2.0.2 リリース直後にリリースしました。

<!--
The main bugfixes in this release are:
-->
このリリースのバグフィックスは以下です:

 * apparmor: 生成されたファイルの更新 <!-- Refresh generated file -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 2.0.3.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 2.0.3 のパッケージをリリースするでしょう。

<!--
Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-2.0).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable ブランチが [Github](https://github.com/lxc/lxc/tree/stable-2.0) にあります。


## LXC 2.0.2 リリースのお知らせ <!-- LXC 2.0.2 release announcement --><span class="text-muted">2016 年 6 月 28 日 <!-- 28th of June 2016 --></span>
<!--
This is the second bugfix release for LXC 2.0.
-->
このリリースは LXC 2.0 の 2 回目のバグフィックスリリースです。

<!--
Please do not use LXC 2.0.2, instead use 2.0.3 which fixes  
an accidental regression in AppArmor coverage.
-->
LXC 2.0.2 は使用せず、代わりに 2.0.3 を使用してください。2.0.3 では AppArmor に関する不具合を修正しています。

<!--
The main bugfixes in this release are:
-->
このリリースの主なバグの修正は以下の通りです:

 * apparmor: make-rslave を usr.bin.lxc-start に追加しました <!-- add make-rslave to usr.bin.lxc-start -->
 * apparmor: bind マウントと {r}shared/{r}private を許可しました <!-- Allow bind-mounts and {r}shared/{r}private -->
 * apparmor: マウントの移動を許可しました <!-- allow mount move -->
 * apparmor: マウント状態の扱いを更新しました <!-- Update mount states handling -->
 * core: 現在の autodev では不要なので lxc-devsetup を削除しました <!-- Drop lxc-devsetup as unneeded by current autodev -->
 * core: in6\_addr 構造体の多重定義を修正しました <!-- Fix redefinition of struct in6\_addr -->
 * core: Bionic ではすべての lxcmntent.h の関数宣言を含めるようになりました <!-- Include all lxcmntent.h function declarations on Bionic -->
 * c/r: criu の cgroup モードとして "full" を使用するようになりました <!-- use criu's "full" mode for cgroups -->
 * systemd: lxc@.service の使用時は、コンテナを foreground で起動するようになりました <!-- start containers in foreground when using the lxc@.service -->
 * templates: debian: 確実に init がインストールされるようにしました <!-- Make sure init is installed -->
 * templates: oracle: コンソールログインに関する修正を行いました <!-- Fix console login -->
 * templates: plamo: いくつかの問題を修正しました <!-- Fix various issues -->
 * templates: ubuntu: デフォルトで apt-transport-https をインストールするようになりました <!-- Install apt-transport-https by default -->
 * travis: 'make install' が確実に失敗しないようにしました <!-- ensure 'make install' doesn't fail -->
 * travis: VPATH ビルドのテストを行うようにしました <!-- test VPATH builds -->
 * upstart: lxc-instance を Upstart クライアントとして適した形に変更しました <!-- Force lxc-instance to behave like a good Upstart client -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 2.0.2.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 2.0.2 のパッケージをリリースするでしょう。(訳注: 前述のように 2.0.2 の代わりに 2.0.3 を使用してください)

<!--
Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-2.0).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable ブランチが [Github](https://github.com/lxc/lxc/tree/stable-2.0) にあります。


## LXC 2.0.1 リリースのお知らせ <!-- LXC 2.0.1 release announcement --><span class="text-muted">2016 年 5 月 16 日 <!-- 16th of May 2016 --></span>

<!--
This is the first bugfix release for LXC 2.0.
-->
このリリースは LXC 2.0 に対する最初のバグフィックスリリースです。

<!--
The main bugfixes in this release are:
-->
このリリースの主なバグの修正は以下の通りです:

 * apparmor: fuse ファイルシステム用に fstype=fuse も許可しました <!-- Also allow fstype=fuse for fuse filesystems -->
 * attach: lxc-attach のテストを改造し、pty ロギングに対するテストを追加しました <!-- adapt lxc-attach tests & add test for pty logging -->
 * attach: SIGWINCH ハンドラのセットアップが失敗しても attach が失敗しなくなりました <!-- don't fail attach on failure to setup a SIGWINCH handler. -->
 * attach: lxc-attach の pts の扱いに関する色々な問題を修正しました <!-- fix a variety of lxc-attach pts handling issues -->
 * attach: コンソール pty を raw モードに変更しました (ncurses ベースのプログラムに対する修正)<!-- switch console pty to raw mode (fixes ncurses-based programs) -->
 * attach: pty に ssh の raw セッティングを使うようにしました <!-- use raw settings of ssh for pty -->
 * bindings: python-lxc で create() 時に代入前に変数が参照されるのを修正しました <!-- fixed python-lxc reference to var before assignment in create() -->
 * bindings: Container.\_\_init\_\_ が失敗した場合、PyErr をセットするようにしました <!-- set PyErr when Container.__init__ fails -->
 * cgfsng: 必要なサブシステムが利用可能でない場合 cgfs ドライバを使うようにしました <!-- defer to cgfs if needed subsystems are not available -->
 * cgfsng: systemd サブシステムがマウントされている必要はなくなりました <!-- don't require that systemd subsystem be mounted -->
 * core: lxc\_list\_nicconfigs で足りなかったキー `type` を追加しました <!-- Added missing `type` to keys in lxc\_list\_nicconfigs -->
 * core: 設定ファイルの値をクォートできるようになりました <!-- Allow configuration file values to be quoted -->
 * core: log: 重複する定義を削除し、バッファサイズを増加させました <!-- remove duplicate definitons and bump buffer size -->
 * core: sync: 予期しないメッセージサイズの場合に正しく失敗するようになりました <!-- properly fail on unexpected message sizes -->
 * core: userns のマッピングを設定した後に netns を unshare するようにしました (/proc/net の所有権の問題の修正) <!-- Unshare netns after setting the userns mappings (fixes ownership of /proc/net) -->
 * core: コード解析で報告された様々なバグを修正しました <!-- various fixes as reported by static analysis -->
 * c/r: CRIU でより速い inotify のサポートを使うためのオプションを追加しました <!-- add an option to use faster inotify support in CRIU -->
 * c/r: あらゆるところで migrate\_opts 構造体を渡すように再配置しました <!-- rearrange things to pass struct migrate\_opts all the way down -->
 * doc: doxygen が生成する一時ファイルを無視するようにしました <!-- ignore temporary files generated by doxygen -->
 * doc: 再現可能なビルドとなるようにマニュアルページの生成日を調整しました <!-- tweak manpage generation date to be compatible with reproducible builds -->
 * doc: MAINTAINERS ファイルを更新しました <!-- update MAINTAINERS -->
 * doc: マニュアルページ翻訳の更新 <!-- update to translated manpages -->
 * init: sysvinit スクリプトに足りなかった lsb ヘッダを追加しました <!-- add missing lsb headers to sysvinit scripts -->
 * init: ディストリビューションの仕様に依存する sysvinit スクリプトを生成しなくなりました <!-- don't make sysv init scripts dependant on distribution specifics -->
 * init: lxc.service.in から廃止された syslog.target を削除しました <!-- drop obsolete syslog.target from lxc.service.in -->
 * lxc-attach: マニュアルにログオプションの説明を追加しました <!-- add logging option to manpage -->
 * lxc-checkconfig: 標準出力がターミナルでない場合にも見やすい出力となるようにしました <!-- better render when stdout isn't a terminal -->
 * lxc-create: -B best オプションの修正を行いました <!-- fix -B best option -->
 * lxc-destroy: 重複する出力を行わないようにしました <!-- avoid double print -->
 * lxc-ls: ipc の際のシステムコールの使用を減らしました <!-- use fewer syscalls when doing ipc -->
 * templates: Ubuntu テンプレートの minbase variant に apt-transport-https を追加しました <!-- Add apt-transport-https to minbase variant of Ubuntu template -->
 * templates: Gentoo テンプレートのケーパビリティ名の typo を修正しました (sys\_resource)<!-- fix a typo in the capabilities name for Gentoo (sys\_resource) -->
 * templates: RHEL7+ サポートのために CentOS テンプレートのロジックを修正しました <!-- logic fix in the Centos template for RHEL7+ support -->
 * templates: ホスト名を送信するために Alpine の DHCP 設定を調整しました <!-- tweak Alpine DHCP configuration to send its hostname -->
 * templates: Oracle テンプレートのネットワーク設定を調整しました <!-- tweak to network configuration of the Oracle template -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 2.0.1.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 2.0.1 のパッケージをリリースするでしょう。

<!--
Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-2.0).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable ブランチが [Github](https://github.com/lxc/lxc/tree/stable-2.0) にあります。

## LXC 2.0.0 リリースのお知らせ <!-- LXC 2.0.0 release announcement --><span class="text-muted">2016 年 4 月 6 日 <!-- 6th of April 2016 --></span>
<!--
The LXC team is very pleased to announce the release of LXC 2.0!
-->
LXC チームは LXC 2.0 のリリースをお知らせできることをうれしく思います！

### ハイライト <!-- Highlights -->

 * 主要な LXC コマンドはすべて C 言語で書きなおされました <!-- All main LXC commands have now been rewritten in C -->
    * lxc-ls
    * lxc-device
    * lxc-copy
 * 新たに lxc-copy コマンドが lxc-clone と lxc-start-ephemeral の役割を引き継ぎました <!-- New lxc-copy command taking over the role of lxc-clone and lxc-start-ephemeral -->
 * コンテナのチェックポイント／リストアのサポートを多数改良しました <!-- Much improved support for checkpoint/restore of containers -->
 * cgroup namespace のサポートを含む cgroup の扱いを完全に作り替えました <!-- Completely reworked cgroup handling including support for the cgroup namespace -->
 * 色々なコマンドラインツールをより一貫性のあるものにしました <!-- The various command line tools are now much more consistent -->
 * ストレージバックエンドの実装を再編成しました。Ceph RBD バックエンドの追加も含みます <!-- Re-organized storage backend implementation, including addition of a Ceph RBD backend -->
 * 多数のバグフィックスを行いました。このバグフィックスのほとんどは 1.0 と 1.1 の次のリリースにバックポートする予定です <!-- An enormous amount of bugfixes, most of which will be backported to 1.0 and 1.1 over the next few bugfix releases -->
 * C API は 1.2 としてリリースしました。この C API は、前のバージョンとの後方互換性を維持します。 <!--The C API remains backward compatible with previous versions and is released as 1.2 -->

<!--
This release was made possible by contributions (720 commits) from a total of 96 contributors.
-->
このリリースは合計 96 名のコントリビュータからの 720 コミットからなる貢献によってリリースできました。

### 新しい設定オプション <!-- New configuration options -->

 * lxc.ephemeral: コンテナが一時的 (ephemeral) かどうかをコントロールします。一時的な場合はシャットダウン後に削除されます <!-- Controls whether the container is ephemeral and so will be destroyed on shutdown -->
 * lxc.rebootsignal: コンテナをリブートするために送出するシグナルを指定できます <!-- Allows to override the signal sent for container reboot -->
 * lxc.hook.destroy: コンテナの削除時に呼ばれる新しいフックです <!-- New hook being called on container destruction -->
 * lxc.hook.stop: コンテナの名前空間 (Namespace) が解体される前に、コンテナ (の名前空間) への参照とともに、ホストの名前空間で実行されます <!-- Run in the host context with references to the containers just before namespace teardown -->
 * lxc.init\_uid: lxc-execute が使うユーザを指定します <!-- Used by lxc-execute to set an alternative user -->
 * lxc.init\_gid: lxc-execute が使うグループを指定します <!-- Used by lxc-execute to set an alternative group -->
 * lxc.monitor.unshare: 他のフックを実行する前にマウント名前空間を unshare できます <!-- Allows unsharing the mount namespace prior to running any hook -->

### 新機能 <!-- New features -->

 * API:
    * API バージョンは 1.2 です。1.0、1.1 に対する完全な後方互換性を保っています <!-- API version is 1.2, fully backward compatible with 1.1 and 1.0 -->
    * 新しいシンボル <!-- new symbols -->:
         * migrate_opts 構造体を使った checkpoint() の代替の追加を簡素化するために、新たに migrate() シンボルを追加しました <!-- New migrate() symbol as an alternative to checkpoint() using a migrate_opts struct to simplify additions -->
    * python3
         * create() にストレージバックエンドが与えられるようになりました <!-- Support for passing the storage backend to create() -->
    * lua
         * get_ips() のサポートを追加しました <!-- Add support for get_ips() -->
         * get_interfaces() のサポートを追加しました <!-- Add support for get_interfaces() -->
         * rename() のサポートを追加しました <!-- Add support for rename() -->
 * コア <!-- Core -->:
    * cgfsng: 新しい Linux カーネルに対応する新しい cgroup バックエンドドライバを追加しました <!-- New cgroup backend driver for recent Linux kernel -->
    * cgroup: 新しい cgroup 階層構造の部分的なサポートを追加しました <!-- Partial support for the new cgroup hierarchy -->
    * cgroup: cgroup namespace のサポートを追加しました <!-- Support for the cgroup namespace -->
    * checkpoint: デフォルトの LXC コンテナのチェックポイント／リストアのサポートを追加しました <!-- Support checkpoint/restore of default LXC containers -->
    * checkpoint: 非特権コンテナのチェックポイント／リストアのサポートを追加しました <!-- Support checkpoint/restore of unprivileged containers -->
    * checkpoint: page server のサポートを追加しました (訳注: ディスクレスでマイグレーションを行う CRIU の機能です)<!-- Support for the page server -->
    * config: lxc.aa\_profile: "unchanged" が指定できるようになりました <!-- Now supports an "unchanged" value -->
    * config: lxc.init\_cmd: 引数を指定できるようになりました <!-- Now supports arguments -->
    * config: lxc.network.macvlan.mode: "passthru" モードのサポートを追加しました <!-- Added support for the "passthru" mode -->
    * config: lxc.rootfs.backend: ストレージバックエンドを明示的に指定できるようになりました (自動検出をバイパスします) <!-- Allows to override the storage backend (bypasses auto-detection) -->
    * config: コンテナをネストするための設定ファイルとして新たに nesting.conf を追加しました <!-- New nesting.conf configuration file to setup container nesting -->
    * hooks: 新たに環境変数 LXC\_CGNS\_AWARE を追加しました。LXC が cgroup namespace をサポートする場合に 1 が設定されます (カーネルが cgroup namespace をサポートするかどうかは関知しません)。 <!-- New LXC\_CGNS\_AWARE environment variable, set to 1 if LXC supports the cgroup namespace (the kernel however may not) -->
    * hooks: 新たに環境変数 LXC\_SRC\_NAME を追加しました。クローンフックにおいて、コピー元のコンテナの名前が設定されます <!-- New LXC\_SRC\_NAME environment variable is set in clone hook with the original container name -->
    * hooks: 新たに環境変数 LXC\_TARGET を追加しました。stop フックでコンテナがシャットダウンするのか (stop が設定される) 、リブートするのか (reboot が設定される) が設定されます<!-- New LXC\_TARGET environment variable is set with the container goal (stop or reboot) -->
    * logging: ログのタイムスタンプが少し読みやすくなりました <!-- Updated logging timestamps to be a bit more readable -->
    * lxc-usernet: ブリッジなしの veth インターフェースを使ったコンテナのサポートが追加されました <!-- Support for containers usning a veth interface without bridging -->
    * lxc-usernet: グループで制限をかけることができるようになりました (@ をプレフィックスに使います) <!-- Support for group-based quotas (use the @ prefix) -->
    * network: ブリッジの MTU をコンテナのデフォルトの MTU として使用するようになりました <!-- The bridge interface MTU is now used as the default container interface MTU -->
    * start: プロセスのタイトルを読みやすくリネームしました <!-- The process title is now renamed to be easier to read -->
    * storage: 新たに Ceph RBD ストレージバックエンドを追加しました <!-- New Ceph RBD storage backend -->
 * 文書 <!-- Documentation -->:
    * すべての man pages に対する韓国語翻訳を追加しました <!-- Korean translation of all the man pages -->
 * コマンド <!-- Commands -->:
    * lxc-attach: 親のシェルに対する攻撃を防ぐために中間の pts デバイスを使うようになりました <!-- Use an intermediate pts device to prevent attacks against the parent shell -->
    * lxc-clone: コンテナのリネームができるようになりました <!-- Support for renaming containers -->
    * lxc-start-ephemeral: バインドマウント先が変更できるようになりました <!-- Support for changing bind-mount targets -->
 * Init systems:
    * systemd: instanced service unit を追加しました (訳注: テンプレートファイルからユニットを実行するためのテンプレートファイルの追加)<!-- Support for instanced service units -->
 * テンプレート <!--Templates -->:
    * ALTLinux テンプレートを追加しました <!-- New ALTLinux template -->
    * Slackware テンプレートを追加しました <!-- New Slackware template -->
    * SPARCLinux テンプレートを追加しました <!-- New SPARCLinux template -->
    * alpine: 追加パッケージのインストールができるようになりました <!-- Support installing extra packages -->
    * debian: デフォルトでは "main" だけ有効化し、引数で他のリポジトリを有効化できるようにしました <!-- Default to just "main" enabled, allow enabling other repositories through argument -->
    * oracle: コンテナのタイムゾーンを設定しました <!-- Set the timezone in the container -->
    * openssh: OpenSSH サポートを追加しました <!-- Add OpenSSH support -->
    * ubuntu: ユーザが debootstrap の variant を指定できるように -v オプションを追加しました <!-- New -v option allowing the user to set the debootstrap variant -->
    * ubuntu-cloud: vendor-data を指定できるようになりました <!-- Support for vendor-data passthrough -->

### 挙動の変更 <!-- Change in behavior -->

 * lxc-autostart の起動順が逆になりました (正しい動きになりました) (訳注: lxc.start.order に指定した値の降順で起動していたのが昇順になった)<!-- The lxc-autostart container startup order is now reversed (to be correct) -->
 * cgfsng cgroup バックエンドが推奨のバックエンドになりました <!-- The new cgfsng cgroup backend is now the recommended backend -->
 * lxc.hook.post-stop が失敗した場合は、コンテナがリブートが失敗するようになりました <!-- lxc.hook.post-stop failures are now fatal to container reboots -->

<!--
Note that several commands have been significantly reworked in this release.  
We don't consider our command line tools as stable ABI so you may need to test and adapt your scripts,  
or better, port them to use our stable C API or one of its bindings.
-->
このリリースで、コマンドの中には大きく作り直されたものがあります。
我々は、コマンドラインツールは stable な ABI とはみなしていませんので、ご自身のスクリプトをテストして変更する必要があるかもしれません。
そのスクリプトを、LXC の stable な C API か、言語バインディングのどれかを使って書きなおすのがよりベターでしょう。

### 廃止予定の警告 <!-- Deprecation warnings -->

<!--
The "lxc-clone" and "lxc-start-ephemeral" commands are now considered deprecated and to be replaced by the new lxc-copy.  
Those commands can still be built by using the \-\-enable-legacy flag, however note that they will print a warning when used  
and that they will be removed from upcoming LXC releases.
-->
"lxc-clone" と "lxc-start-ephemeral" コマンドは、"lxc-copy" に置き換えられ、将来廃止の予定です。
これらのコマンドは --enable-legacy フラグを使ってビルドできますが、使用の際に警告が表示されます。そして、LXC の将来のリリースで削除される予定です。

### サポート <!-- Support -->
<!--
This is the second LXC Long Term Support release which we will be supporting until the 1st of June 2021.  
LXC 1.0, our previous Long Term Support release, is still supported until the 1st of June 2019.  
And lastly, the previous stable release, LXC 1.1 will go end of life on the 1st of September 2016.
-->
これは 2 度目の LXC の長期サポートリリースであり、2021 年 6 月 1 日までサポートされます。
前の長期サポートリリース版である LXC 1.0 も、2019 年 6 月 1 日までサポートされます。
そして、先の stable リリースである LXC 1.1 は 2016 年 9 月 1 日に EOL となります。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 2.0.0.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 2.0.0 のパッケージをリリースするでしょう。

<!--
Should you be interested in individual changes or just looking at the detailed development history,  
our master branch is on [Github](https://github.com/lxc/lxc/tree/master).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、master ブランチが [Github](https://github.com/lxc/lxc/tree/master) にあります。

## LXC 1.0.8 リリースのお知らせ <!-- LXC 1.0.8 release announcement --><span class="text-muted">2015 年 11 月 9 日 <!-- 9th of November 2015 --></span>
<!--
This is the eight bugfix release for LXC 1.0.
-->
このリリースは LXC 1.0 の 8 回目のバグフィックスリリースです。

重要な変更<!-- Important -->:

 * セキュリティホール CVE-2015-1331 の修正 <!-- Security fix for CVE-2015-1331 -->
 * セキュリティホール CVE-2015-1334 の修正 <!-- Security fix for CVE-2015-1334 -->

コア<!-- Core -->:

 * ネストしたコンテナをサポートするために include する nesting.conf を追加しました <!-- Add a nesting.conf which can be included to support nesting containers -->
 * CAP\_AUDIT\_READ と CAP\_BLOCK\_SUSPEND のサポートを追加しました <!-- Add support for CAP\_AUDIT\_READ andCAP\_BLOCK\_SUSPEND -->
 * rootfs が指定されない場合でも autodev が動作するようになりました <!-- Allow autodev without a rootfs -->
 * 非特権コンテナの場合でもケーパビリティをドロップするようにしました <!-- Also drop caps in unpriv containers -->
 * apparmor: /proc/kcore に対するアクセスをブロックするようにしました <!-- Block access to /proc/kcore -->
 * apparmor: スレーブのバインドマウントに関する修正を行いました <!-- Fix slave bind mounts -->
 * apparmor: 最新の git master ブランチに同期しました <!-- Sync with current git master -->
 * attach: 中間子プロセスで exit() の代わりに \_exit() を使うようになりました <!-- use \_exit() instead of exit() in the intermediate child process -->
 * aufs: 非特権のクローンとマウントができるようになりました <!-- Support unprivileged clone, mount -->
 * ラッパーの代わりに /lib/apparmor/profile-load を直接呼ぶようにしました <!-- Call /lib/apparmor/profile-load directly instead of the wrapper -->
 * cgmanager: attach: 'all' コントローラを使わなくなりました <!-- never use 'all' controller -->
 * cgmanager: check\_supports\_multiple\_controllers 関数の最後でメモリを開放するようにしました <!-- free line at end of check\_supports\_multiple\_controllers -->
 * cgmanager: 非特権コンテナを $(curcgroup)/lxc/$(container0) 以下に配置するようにしました <!-- put unprivileged containers under $(curcgroup)/lxc/$(container0 -->
 * lxc-clone が 'rsync -a' の代わりに 'rsync -aH' を使ってクローンするようになりました。これは Launchpad の  Bug #1441307 への対応です <!-- Change lxc-clone to use 'rsync -aH' instead of just 'rsync -a' for cloning to fix Launchpad Bug #1441307. -->
 * clone\_paths: クローン先ディレクトリとして 'rootfs' を使うようになりました <!-- use 'rootfs' for destination directory -->
 * config: lxc.\*signal 用に色々なシグナルの定義を追加しました <!-- add miscellaneous signals for lxc.\*signal -->
 * デーモンでのコンテナ開始時、子プロセスは失敗時に return でなく exit するようになりました <!-- daemonized start: exit children on failure, don't return -->
 * Android 向けに bdev.c で MS\_REC と MS\_SLAVE を定義しました <!-- Define MS\_REC and MS\_SLAVE for Android in bdev.c -->
 * Android 向けに MS\_RELATIME を定義しました <!-- Define MS\_RELATIME for Android -->
 * Android 向けに O\_PATH と O\_NOFOLLOW を定義しました <!-- Define O\_PATH and O\_NOFOLLOW for Android -->
 * cgmanager\_list\_controllers が利用できるかどうか検出するようになりました <!-- detect whether cgmanager\_list\_controllers is available -->
 * do\_lxcap\_stop: コンテナが停止するまで待つようになりました <!-- wait until container is stopped -->
 * opentty が失敗した場合、std\* ファイルディスクリプタをクローズしないようにしました <!-- don't close std\* fd if opentty fails -->
 * 非特権ユーザに対してデフォルトで seccomp を有効にしました <!-- Enable seccomp by default for unprivileged users. -->
 * (lxc.mount.entry に指定する) create=dir と create=file を処理する関数を分けました <!-- Factorize handle of create=dir and create=file -->
 * 定数がないことが原因の Android のビルドの問題を修正しました <!-- Fix Android build due to missing constant -->
 * rootfs が指定されない場合の自動マウントの不具合を修正しました <!-- Fix automatic mounts without a rootfs -->
 * mpc85xx でビルドする際の問題を修正しました <!-- fix build on mpc85xx -->
 * IPv4/IPv6 アドレスをクリアする際の問題を修正しました <!-- Fix clearing IPv4/IPv6 addresses -->
 * rootfs が指定されない場合のコンテナ作成の不具合を修正しました <!-- Fix container creation without a rootfs -->
 * attach 時のコントロール TTY の問題を修正しました <!-- Fix control tty issues on attach -->
 * rootfs が指定されない場合の /dev のシンボリックリンクの不具合を修正しました <!-- Fix /dev symlinks without a rootfs -->
 * クローン時にファイルの拡張属性が失われる問題を修正しました <!-- Fix dropped fs caps when cloning a container -->
 * lxc-init(init.lxc) を見つけられない場合のエラーメッセージを修正しました <!-- Fix error message when cannot find an lxc-init -->
 * 一時的なコンテナを破壊する際の処理が不十分だったのを修正しました <!-- Fix incomplete destruction of unprivileged ephemeral containers -->
 * 同じ ID の VLAN インターフェースを複数持つコンテナを起動する際の問題を修正しました <!-- Fix instantiation of multiple vlan interfaces with same id -->
 * mount を呼ぶ際の入れ替わった引数の問題を修正しました (訳注：ramfs の rootfs の場合、/ を rprivate マウントする際のエラーの修正)<!-- Fix reversed args in mount call -->
 * rootfs が指定されない場合の start フックの検証を修正しました <!-- Fix verification of start hook without a rootfs -->
 * cgroup パス末尾の /init.scope を無視するようにしました <!-- Ignore trailing /init.scope in init cgroups -->
 * Init の error\_num を 1 にしました (訳注：error\_num (コンテナをトラッキングする終了コード) を適切に初期化するようになりました) <!-- Init error\_num to 1 -->
 * init: 古いバージョンの apparmor をサポートしました <!-- Support older apparmor -->
 * lxc.mount.auto で ENOENT をスキップするようにしました <!-- In lxc.mount.auto, skip on ENONENT -->
 * lxc\_monitor: ファイルディスクリプタ集合 (pollfd 構造体の配列) のメモリリークの修正を行い、ファイルディスクリプタをクローズするようにしました <!-- fix memory leak on @fds and close fds -->
 * lxc\_monitor: エラー時に正規表現関連の変数を開放するようにしました <!-- free @preg on error -->
 * lxc\_mount\_auto\_mounts: NULL 判定をきちんと行った後に処理を行うようにしました <!-- fix weirdness -->
 * cgmanager 使用時に lxc.cgroup.use の値を使用するようになりました <!-- make cgmanager follow lxc.cgroup.use -->
 * LXC\_CLONE\_KEEPNAME の指定が正常に動作するようになりました <!-- Make LXC\_CLONE\_KEEPNAME work -->
 * mount\_entry\_create\_\*\_dirs() をより確実に動作するようにしました <!-- Make mount\_entry\_create\_\*\_dirs() more robust -->
 * overlayfs のマウントを直接行えるようにしました <!-- Make overlayfs mounts work directly -->
 * rootfs が指定されない場合でも、必要な場合のみ /proc をマウントするようになりました <!-- Only mount /proc if needed, even without a rootfs -->
 * 標準入力が tty の時のみ、ファイルディスクリプタを再オープンするようになりました <!-- only re-open fds if stdin is a tty -->
 * lxcpath が設定されていないかデフォルトの場合のみ LOGPATH を使うようになりました <!-- Only use LOGPATH if lxcpath is unset or default -->
 * overlay: workdir が存在しない場合は作成するようになりました <!-- create workdir if it doesn't exist -->
 * リブートフラグを与えて、リブート時に以前の veth を消去するようになりました <!-- pass on reboot flag and delete old veth on reboot -->
 * ユーザネームスペース使用時、/proc のアンマウントの失敗を無視するようにしました <!-- Prevent from error on umount /proc if userns are used. -->
 * btrfs のサブボリュームを削除するようになりました <!-- Remove btrfs subvolumes -->
 * rpm: lxc-libs パッケージを lxc パッケージに対する依存パッケージとして追加しました <!-- added dependency to lxc-libs to lxc package -->
 * seccomp: aarch64 のサポートを追加しました <!-- add aarch64 support -->
 * seccomp: ppc のサポートを追加しました <!-- add ppc support -->
 * seccomp: umount -f を拒否するルールを追加しました <!-- add rule to reject umount -f -->
 * seccomp: ルールのパースの単純化と修正を行いました <!-- simplify and fix rule parsing -->
 * tty でない場合はコントロール TTY のコードをスキップするようにしました <!-- Skip control tty code for non-ttys -->
 * 適用前に cgroup のメモリの設定をソートするようにしました <!-- Sort the cgroup memory settings before applying -->
 * aufs を使った一時的なコンテナのサポートを追加しました <!-- Support unprivileged ephemeral container using aufs -->
 * コンテナの停止時にネットワークデバイスを確実に削除するようにしました <!-- Tear down network devices during container halt -->
 * 標準ファイルディスクリプタの NULL 化処理を共通化しました <!-- Uniformly nullify std fds -->
 * 存在する場合は /dev/loop-control を使うようになりました <!-- Use /dev/loop-control if it exists -->
 * 必要に応じてファイルシステム名として 'overlay' を使うようになりました <!-- Use 'overlay' as fs name when needed -->
 * 使える場合は select の代わりに poll を使うようになりました <!-- use poll instead of select when possible -->
 * bash 補完で POSIX 互換の関数名を使うようになりました <!-- Use POSIX-compliant function names in bash completion -->
 * Thin Provisioning を使わない LVM の場合に rdepends を使うようにしました (訳注: Thin Provisioning を使わない LVM の場合、スナップショットクローン元のコンテナが削除できなくなりました) <!-- Use rdepends when non-thinpool LVM container is cloned -->
 * コンテナ作成時、rootfs が既に存在している場合も設定を保存するようになりました <!-- When creating container, save configuration if rootfs already exists -->

ドキュメント <!-- Documentation -->:

* 日本語の lxc.container.conf(5) に LXC が行うマウントに関する注意を追記しました <!-- Add the note related mount in Japanese lxc.container.conf(5) -->
* lxc-clone(1) の '-s' オプションの説明に zfs, aufs, overlayfs について追加しました <!-- Add about zfs, aufs, overlayfs to '-s' option of lxc-clone(1) -->
 * lxc.container.conf の man に create=dir と create=file についての説明を追加しました <!-- Add doc for optional, create=dir and create=file in lxc.container.conf man -->
 * -P のロングオプションをドキュメントに追加しました <!-- Add long option for -P in documentation -->
<!-- * Add LXC-specific mount option in Japanese lxc.container.conf(5) -->
 * lxc-create(1) に 'loop' バッキングストアオプションを追加しました <!-- Add options of 'loop' backingstore to lxc-create(1) -->
 * -P lxcpath と --version オプションを lxc-ls の man ページに追加しました <!-- Add -P lxcpath and \-\-version to lxc-ls manpage -->
 * lxc-start-ephemeral(1) に '--storage-type' オプションを追加しました <!-- Add '\-\-storage-type' option to lxc-start-ephemeral(1) -->
 * lxc-ls(1) に -P と --version の説明を追加しました <!-- Add the description for -P and \-\-version to English and Japanese lxc-ls(1) -->
 * man の共通オプションに --version の説明を追加しました <!-- Add the description for \-\-version to English and Japanese common\_options -->
 * lxc-start-ephemeral(1) に 'attach' の使用に関する説明を追加しました <!-- Add the use of 'attach' to lxc-start-ephemeral(1) -->
 * man ページの veth の説明をわかりやすくしました <!-- clarify the description of the veth network type in the  manpage. -->
 * lxc.container.conf(5) の lxc.group の誤訳を修正しました <!-- Fix the mistranslation about lxc.group in Japanese lxc.container.conf(5) -->
 * CONTRIBUTING を更新しました <!-- Fresh CONTRIBUTING -->
 * lxc-user-nic(1) で使われていない共通オプションの説明を削除しました <!-- Remove unnecessary common options from lxc-user-nic(1) -->
 * 日本語 man ページで翻訳されていなかったセクションタイトルを翻訳しました <!-- Translate untranslated section titles in Japanese man pages -->
 * MAINTAINERS の更新 <!-- Update MAINTAINERS -->
 * lxc-autostart(1) の説明を更新しました <!-- Update the description of -L option in lxc-autostart(1) -->
<!-- * Update the description of the veth in the Japanese lxc.container.conf(5) -->

バインディング <!-- Bindings -->:

 * lua: 5.3 互換コードを修正しました <!-- Fix 5.3 compatibility code. -->
 * lua: blkio がない場合にクラッシュする問題を修正しました <!-- fix crash on missing blkio -->
 * lua: 5.3 互換に関して小さな修正を行いました <!-- Small fix for 5.3 compatibility. -->

テスト <!-- Tests -->:

 * Travis CI の cgmanager サポートを有効にしました <!-- enable cgmanager support for Travis CI -->
 * lxc-test-apparmor: 子プロセスが終了する前にパイプをフラッシュするようにしました <!-- flush the pipe before exiting child -->
 * lxc-test-symlink: 絶対パスのシンボリックリンクを使ったテストを追加しました <!-- add a test using absolute symlink -->
 * Travis の設定を更新しました <!-- Update Travis configuration -->
 * /proc/self/cgroups でなく 'cgm listcontrollers' を使うようになりました <!-- Use 'cgm listcontrollers' list rather than /proc/self/cgroups -->

設定 <!-- Config -->:

 * lxc-net.conf: 停止時の処理中で set +e するようにしました <!-- use +e at teardown -->

テンプレート <!-- Templates -->:

 * lxc-alpine: 移植性を高めるために GNU BRE 拡張の使用を避けるようにしました <!-- avoid GNU BRE extensions for better portability -->
 * lxc-alpine: マウント前に /dev/shm を作成するようにしました <!-- create /dev/shm before mounting -->
 * lxc-alpine: apk.static バイナリの検証を修正しました <!-- fix verification of apk.static binary -->
 * lxc-alpine: オプションのパースに getopt を使うようになりました <!-- use getopt to parse options -->
 * lxc-alpine: 最新リリースの検出に yaml を使うようになりました <!-- use yaml for detection of latest release -->
 * lxc-altlinux: "--clean" オプションのパースで引数を取らないように修正を行いました <!-- fix parsing of option "--clean": it takes no argument -->
 * lxc-altlinux: -z オプションでのチェックの際に、変数が未設定の場合に備えてクオートするようにしました <!-- protect possibly unset variable with quotes for -z check -->
 * lxc-archlinux: systemd-sysctl サービスの修正を行いました <!-- Fix systemd-sysctl service -->
 * lxc-busybox: 非特権コンテナの修正を行いました <!-- fix unprivileged containers -->
 * lxc-centos: yum --releasever に対する信頼性の高いチェックを追加しました <!-- Added a more reliable test for yum \-\-releasever -->
 * lxc-{centos|fedora}: --rootfs の値を使用するようになりました <!-- Respect \-\-rootfs -->
 * lxc-centos: CentOS 7 でログインまでに非常に時間がかかる問題を修正しました <!-- fix big big login delays in Centos 7 -->
 * lxc-centos: CentOS 6 コンテナのブートの問題を修正しました <!-- Fix booting a Centos 6 container -->
 * lxc-centos: "--clean" オプションのパースで引数を取らないように修正を行いました <!-- fix parsing of option "\-\-clean": it takes no argument -->
 * lxc-centos: ヘルプにタブとスペースが混ざっているのを修正しました <!-- fix tab/space mixup in help text. -->
 * lxc-centos: yum に releasever パラメータを与えるようにしました <!-- pass releasever parameter to yum -->
 * lxc-centos: -z オプションでのチェックの際に、変数が未設定の場合に備えてクオートするようにしました <!-- protect possibly unset variable with quotes for -z check -->
 * lxc-centos: ifcfg-eth0 中の DHCP\_HOSTNAME に `hostname ` の値を使うようにしました <!-- use `hostname` for DHCP\_HOSTNAME in ifcfg-eth0 -->
 * lxc-debian: dpkg のマルチアーキ対応のチェック方法を変更しました <!-- Alternative test for dpkg multiarch support -->
 * lxc-debian: $GREP\_OPTIONS が設定されている場合は debootstrap が失敗していたのを修正しました <!-- debootstrap failed when $GREP\_OPTIONS is set -->
 * lxc-debian: Usage に "--clean" を追加しました <!-- document "\-\-clean" in the usage. -->
 * lxc-debian: dbus がインストールされていない場合のエラーを修正しました <!-- Fixed errors if dbus is not installed -->
 * lxc-debian: "--clean" オプションのパースで引数を取らないように修正を行いました <!-- fix parsing of option "\-\-clean": it takes no argument. -->
 * lxc-debian: ヘルプの改良 <!-- improve help text -->
 * lxc-debian: -z オプションでのチェックの際に、変数が未設定の場合に備えてクオートするようにしました <!-- protect possibly unset variable with quotes for -z check -->
 * lxc-debian: ロケールの再設定を行うようにしました <!-- reconfigure locales -->
 * lxc-debian: unstable/sid の場合はセキュリティアップデートをスキップするようにしました <!-- skip security updates for unstable/sid -->
 * lxc-debian: stretch (Debian 9) イメージのサポートを追加しました <!-- support stretch (Debian 9) images -->
 * lxc-debian: dpkg がマルチアーキサポートかどうかチェックするようになりました <!-- Test dpkg for multiarch support -->
 * lxc-download: ヘルプの typo の修正 <!-- fix typo in help text. -->
 * lxc-download: ヘルプの改良 <!-- improve help text. -->
 * lxc-download: --list をもっと便利にしました <!-- make \-\-list more useful. -->
 * lxc-fedora: "--mask-tmp" のサポートを追加しました <!-- Add support for "\-\-mask-tmp" -->
 * lxc-fedora: デフォルトを 22 にしましたが、20 の squashfs を使います <!-- Default to 22 but use 20 squashfs -->
 * lxc-fedora: 22 は yum を使わないので、デフォルトを Fedora 21 にしました <!-- Default to Fedora 21 as 22 no longer uses yum -->
 * lxc-fedora: "--clean" オプションのパースで引数を取らないように修正を行いました <!-- fix parsing of option "\-\-clean": it takes no argument -->
 * lxc-fedora: fedora21 では fedora-repos パッケージが必要なので追加しました <!-- In fedora21, the fedora-repos package is needed. -->
 * lxc-fedora: ヘルプテキストを 80 カラムに揃えました <!-- let help text fit into 80 columns -->
 * lxc-fedora: セカンダリアーキテクチャも扱えるようにしました (訳注：セカンダリアーキテクチャについては[FedoraProjectのWikiを参照](https://fedoraproject.org/wiki/Architectures))<!-- manage secondary architectures -->
 * lxc-fedora: -z オプションでのチェックの際に、変数が未設定の場合に備えてクオートするようにしました <!-- protect possibly unset variable with quotes for -z check -->
 * lxc-fedora: systemd を使っている場合、lxc.kmsg = 0 を設定するようにしました <!-- when using systemd, set lxc.kmsg = 0 in the config -->
 * lxc-gentoo: veth をひとつだけ持っている場合は hwaddr を追加するようにしました <!-- Add a hwaddr if there is only one veth -->
 * lxc-gentoo: /dev/shm を tmpfs としてマウントするエントリを追加しました <!-- Add /dev/shm tmpfs mount entry -->
 * lxc-gentoo: dev/mqueue と dev/shm の作成の問題を修正しました <!-- Fix creation of dev/mqueue and dev/shm -->
 * lxc-gentoo: --auth-key フラグの問題を修正しました <!-- Fix the \-\-auth-key flag -->
 * lxc-gentoo: wget の問題を修正しました <!-- Fix wget -->
 * lxc-openmandriva: "--clean" オプションのパースで引数を取らないように修正を行いました <!-- fix parsing of option "\-\-clean": it takes no argument -->
 * lxc-openmandriva: -z オプションでのチェックの際に、変数が未設定の場合に備えてクオートするようにしました <!-- protect possibly unset variable with quotes in -z check -->
 * lxc-opensuse: 12.3 はもうすぐ EOL なのでデフォルトリリースを 13.1 に変更しました <!-- default release changed to 13.1, as 12.3 reaches  end-of-life soon -->
 * lxc-opensuse: 不適切なビルドパッケージがインストールされている場合のみ、13.2/Thmbleweed 上での openSUSE コンテナの構築を無効化しました <!-- Disable building openSUSE containers on 13.2/Tumbleweed only if wrong version of build package is installed -->
 * lxc-opensuse: "--clean" オプションのパースで引数を取らないように修正を行いました <!-- fix parsing of option "\-\-clean": it takes no argument -->
 * lxc-opensuse: -z オプションでのチェックの際に、変数が未設定の場合に備えてクオートするようにしました <!-- protect possibly unset variable with quotes in -z check -->
 * lxc-opensuse: ビルドバージョンの検出に rpm を使うようにしました <!-- use rpm to determine build version -->
 * lxc-oracle: /dev/shm の修正を行いました <!-- Fix /dev/shm -->
 * lxc-ubuntu-cloud: コンテナが作成されないときに 0 で終了しないようになりました <!-- Never exit 0 when no container is created -->
 * lxc-ubuntu-cloud: tar.gz を tar.xz に置き換えました。tarball がない場合の自動生成を行わないようにしました <!-- Replace .tar.gz by .tar.xz and don't auto-generate missing tarballs -->
 * lxc-ubuntu: lucid のサポートをやめ、リリースリストを更新しました <!-- Drop lucid support and refresh releases list -->

コマンド <!-- Commands -->:

 * いくつかの実行ファイルのヘルプの文法を修正しました <!-- Fix grammar in some of the executables "NAME for name of the container" becomes "NAME of the container" -->
 * lxc-autostart: 壊れた出力を修正しました <!-- Fix broken output -->
 * lxc-checkconfig: バージョン 3 以上のカーネルで動作するように更新しました <!-- Update to work with kernel versions > 3 -->
 * lxc-create: テンプレートの絶対パスを与えた場合の -h オプションの問題を修正しました <!-- Fix -h with absolute template path -->
 * lxc-create: --template オプションが必須になりました <!-- Require \-\-template be passed -->
 * lxc-destroy: overlayfs を使ったコンテナでもきちんと動作するようになりました <!-- actually work if underlying fs is overlayfs -->
 * lxc-start: pid パラメータを追加しました (訳注：pid 名前空間も保持できるようになりました。ライブラリ側の変更点のような気がします)<!-- added pid parameter -->
 * lxc-start-ephemeral: pep-8 準拠と pyflakes3 を通すための修正 <!-- fix pep-8 and pyflakes3 -->
 * lxc-start-ephemeral: overlayfs の workdir オプションを扱えるようになりました <!-- handle the overlayfs workdir option (v2) -->
 * lxc-start-ephemeral: パスワードを直接パースするようにしました <!-- Parse passwd directly -->
 * lxc-usernsexec: ファイルディスクリプタ 0,1,2 を別々に再オープンするようになりました <!-- reopen fds 0,1,2 separately -->

<!--
Those stable fixes were brought to you by 59 individual contributors.
-->
これらの stable の修正は 59 名のコントリビュータによってなされました。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.0.8.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 1.0.8 のパッケージをリリースするでしょう。

<!--
Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.0).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable ブランチは [Github](https://github.com/lxc/lxc/tree/stable-1.0) にあります。

## LXC 1.1.5 リリースのお知らせ <!-- LXC 1.1.5 release announcement --><span class="text-muted">2015 年 11 月 9 日<!-- 9th of November 2015 --></span>
<!--
This is the fifth bugfix release for LXC 1.1.
-->
このリリースは LXC 1.1 の 5 回目のバグフィックスリリースです。

コア<!-- Core -->:

 * プロセスタイトルのリネームの扱いを修正しました (3.19 カーネル以上でのみ有効です)<!-- Fix handling of process title rename (now only on >= 3.19 kernels) -->
 * overlayfs/aufs の扱いをいくつか改良しました <!-- Several improvements to overlayfs/aufs handling -->
    * 必要なディレクトリが存在しない場合に作成するようにしました <!-- Needed directories are created if missing -->
    * 絶対パスの処理を改良しました <!-- Better handling of absolute paths -->
    * overlayfs を使ったコンテナのクローンの処理を改良しました <!-- Better handling of cloning overlayfs containers -->
 * cgroup パス末尾の /init.scope を無視するようにしました (新しい systemd 対応です) <!-- Ignore trailing /init.scope in cgroup paths (needed for newer systemd) -->
 * ブリッジに接続されていない veth デバイスを持つコンテナを Checkpoint/Restore できるようになりました <!-- Allow checkpoint/restore of containers using non-bridged veth devices -->
 * error\_num (コンテナをトラッキングする終了コード) を適切に初期化するようになりました <!-- Properly initialize error\_num (exit code tracking for the container) -->
 * lxc-usernsexec: ファイルディスクリプタ 0,1,2 を別々に再オープンするようになりました (標準入力が tty の時のみ) <!-- Re-open fds 0,1,2 separately (only if stdin is a tty) -->

Init スクリプト<!-- Init scripts -->:

 * lxc-net: network-online.target の後で起動するようになりました <!-- Start after network-online.target -->

コマンド <!-- Commands -->:

 * lxc-start: PID 名前空間も保持できるようになりました <!-- Allow preserving the PID namespace too -->

テンプレート <!-- Templates -->:

 * archlinux: systemd-sysctl サービスの修正を行いました <!-- Fix systemd-sysctl service -->
 * ubuntu-cloud: デフォルトで tar.xz tarball を使うようになりました (tar.gz はすぐに廃止される予定です) <!-- Use tar.xz tarballs by default (as tar.gz will soon be discontinued) -->
 * ubuntu-cloud: エラー時は常に終了コード 1 で終了するようになりました <!-- Always exit 1 on error -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.1.5.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 1.1.5 のパッケージをリリースするでしょう。

<!--
Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.1).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable ブランチ (stable-1.1) は [Github](https://github.com/lxc/lxc/tree/stable-1.1) にあります。


## LXC 1.1.4 リリースのお知らせ <!-- LXC 1.1.4 release announcement --><span class="text-muted">2015 年 10 月 6 日<!-- 6th of October 2015 --></span>
<!--
This is the fourth bugfix release for LXC 1.1.
-->
このリリースは LXC 1.1 の 4 回目のバグフィックスリリースです。

重要な変更<!-- Important -->:

 * セキュリティホール CVE-2015-1335 の修正 <!-- Security fix for CVE-2015-1335 -->

コア:

 * setenv() を呼ぶ前に NULL ポインタのチェックを行うようにしました <!-- Check for NULL pointers before calling setenv() -->
 * (lxc.mount.entry に指定する) create=dir と create=file を処理する関数を分けました (訳注: 以下のふたつの項目とセットで lxc.mount* で設定されたマウントエントリを処理する関数のリファクタリングを行っています)<!-- Factorize handle of create=dir and create=file -->
 * マウント用のエントリを処理する関数の分割と再構築を行いました <!-- Refactor and factorize mount entries -->
 * lxc.mount\* を扱う関数を 3 つに分割しました <!-- Split handle of lxc.mount\* with 3 functions -->
 * init: 古いバージョンの apparmor をサポートしました <!-- Support older apparmor -->
 * LXC\_CLONE\_KEEPNAME の指定が正常に動作するようになりました <!-- Make LXC\_CLONE\_KEEPNAME work -->
 * rootfs が指定されない場合の自動マウントの不具合を修正しました <!-- Fix automatic mounts without a rootfs -->
 * rootfs が指定されない場合のコンテナ作成の不具合を修正しました <!-- rootfs Fix container creation without a rootfs -->
 * rootfs が指定されない場合の /dev のシンボリックリンクの不具合を修正しました <!-- Fix /dev symlinks without a rootfs -->
 * rootfs が指定されない場合でも autodev が動作するようになりました <!-- Allow autodev without a rootfs -->
 * rootfs が指定されない場合でも、必要な場合のみ /proc をマウントするようになりました <!-- Only mount /proc if needed, even without a rootfs -->
 * コンテナ作成時、rootfs が既に存在している場合も設定を保存するようになりました <!-- When creating container, save configuration if rootfs already exists -->
 * rootfs が指定されない場合の start フックの検証を修正しました <!-- Fix verification of start hook without a rootfs -->
 * コンテナの停止時にネットワークデバイスを確実に削除するようにしました <!-- Tear down network devices during container halt -->
 * coverity: mount\_entry\_create\_dir\_file の修正を行いました <!-- fix mount\_entry\_create\_dir\_file -->
 * ネストしたコンテナをサポートするために include する nesting.conf を追加しました <!-- Add a nesting.conf which can be included to support nesting containers -->
 * realloc() のサイズの計算を修正しました <!-- Fix reallocation calculation -->
 * bdev\_destroy() と bdev\_destroy\_wrapper() を追加しました <!-- Add bdev\_destroy() and bdev\_destroy\_wrapper() -->
 * overlayfs\_clone: rootfs をマウントして rsync を行うようにしました (訳注: overlayfs の非特権コンテナのクローンが行えるように修正しました)<!-- rsync the mounted rootfs -->
 * lxc\_rmdir\_onedev: パスが存在しない場合でも失敗しなくなりました (訳注: 作成が不十分なコンテナの削除時にエラーがでないようになりました)<!-- don't fail if path doesn't exist -->
 * overlayfs\_mount: delta ディレクトリが存在しない場合に作成するようにしました <!-- create delta dir if it doesn't exist -->
 * ovl\_rsync: umount を確実に行うようにしました <!-- make sure to umount -->
 * bdev.h の bdev\_destroy() を使って bdev を削除するようにしました <!-- Destroy bdevs using bdev\_destroy() from bdev.h -->
 * インデントの修正を行いました <!-- Fix indentation -->
 * cmds: abstract socket の長さの問題を修正しました <!-- fix abstract socket length problem -->
 * coverity: 冗長な処理ブロックを削除しました <!-- drop second (redundant) block -->
 * mount\_proc\_if\_needed() で snprintf の返り値のチェックを行うようにしました <!-- Check return value of snprintf in mount\_proc\_if\_needed() -->
 * CAP\_AUDIT\_READ を追加しました <!-- Add CAP\_AUDIT\_READ -->
 * CAP\_BLOCK\_SUSPEND を追加しました <!-- Add CAP\_BLOCK\_SUSPEND -->
 * 処理の失敗時に確保されたメモリを解放するようにしました <!-- Free allocated memory on failure (v2) -->
 * Android 用に O\_PATH と O\_NOFOLLOW を定義しました <!-- Define O\_PATH and O\_NOFOLLOW for Android -->
 * seccomp: aarch64 のサポートを追加しました <!-- add aarch64 support -->
 * lxc-test-symlink: 絶対パスのシンボリックリンクを使ったテストを追加しました <!-- add a test using absolute symlink -->
 * lxc\_mount\_auto\_mounts: NULL 判定をきちんと行った後に処理を行うようにしました <!-- fix weirdness -->
 * lxc\_mount\_auto\_mounts 内の変数の型がおかしかったので修正しました <!-- Fix the type of i in lxc\_mount\_auto\_mounts -->

ツール <!-- Tools -->:

 * コマンドが出力する使い方の文法を修正しました <!-- Fix grammar in some of the executables "NAME for name of the container" becomes "NAME of the container" -->
 * lxc-checkconfig: カーネル設定オプションのチェックをいくつか追加しました <!-- add some more config options -->
 * lxc-start-ephemeral: パスワードを直接パースするようにしました <!-- Parse passwd directly -->

ドキュメント <!-- Documentation -->:

 * -P オプションに対する長いオプション (--lxcpath) をドキュメントに追加しました <!-- Add long option for -P in documentation -->
 * create=dir と create=file オプションの説明を lxc.container.conf に追加しました <!-- Add doc for optional, create=dir and create=file in lxc.container.conf man -->
 * lxc.system.conf(5) の lxc.cgroup.use の説明を更新しました <!-- Update lxc.cgroup.use in lxc.system.conf(5) -->
 * lxc-destroy(1) に共通オプションの説明を追加しました <!-- Add the description of common options in lxc-destroy(1) -->
<!-- * Add LXC-specific mount option in Japanese lxc.container.conf(5) -->

テンプレート <!-- Templates -->:

 * lxc-debian: stretch (Debian 9) イメージのサポートを追加しました <!-- support stretch (Debian 9) images -->
 * lxc-debian: contrib と non-free を含まない指定ができるようになりました <!-- allow not including contrib/non-free -->
 * lxc-debian: dpkg コマンドが multiarch をサポートしているかチェックするようになりました <!-- Test dpkg for multiarch support -->
 * lxc-debian: lxc-debian テンプレートで dpkg が multiarch をサポートしているかどうかのチェック方法を変更しました <!-- Alternative test for dpkg multiarch support in lxc-debian template -->
 * lxc-ubuntu: ubuntu.common.conf: /dev/mqueue をマウントするようにしました <!-- mount /dev/mqueue -->
 * lxc-debian: カーネルのアーキテクチャのみをチェックするようにしました <!-- We should only check the kernel architecture. -->
 * lxc-alpine: 移植性を向上させるため GNU BRE 拡張の使用を止めました <!-- avoid GNU BRE extensions for better portability -->
 * lxc-alpine: オプションをパースするために getopt を使うようにしました <!-- use getopt to parse options -->

<!--
Those stable fixes were brought to you by 14 individual contributors.
-->
これらの stable の修正は 14 名のコントリビュータによってなされました。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.1.4.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 1.1.4 のパッケージをリリースするでしょう。

<!--
Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.1).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable ブランチ (stable-1.1) は [Github](https://github.com/lxc/lxc/tree/stable-1.1) にあります。


## LXC 1.1.3 リリースのお知らせ <!-- LXC 1.1.3 release announcement --><span class="text-muted">2015 年 8 月 14 日<!-- 14th of August 2015 --></span>
<!--
This is the third bugfix release for LXC 1.1.
-->
このリリースは LXC 1.1 の 3 回目のバグフィックスリリースです。

### 変更点 <!-- Changes -->

重要な変更<!-- Important -->:

 * セキュリティホール CVE-2015-1331 の修正 <!-- Security fix for CVE-2015-1331 -->
 * セキュリティホール CVE-2015-1334 の修正 <!-- Security fix for CVE-2015-1334 -->
 * LXC 1.1 で生じた LXC 1.0 との ABI の非互換性に関する修正を行いました <!-- Fix an ABI regression in LXC 1.1 compared to LXC 1.0. -->  
   大変申し訳ないことですが、この修正は LXC 1.1.0、1.1.1、1.1.2 でビルドしたバイナリは LXC 1.1.3 で再度ビルドする必要があることを意味します。しかし、この修正は LXC 1.0 とそのバグフィックスリリースに対するバイナリとの後方互換性を損なうよりも望ましいことです。
   <!--
   Fixing this unfortunately means that binaries built against LXC
   1.1.0, 1.1.1 and 1.1.2 will need rebuilding against LXC 1.1.3.  
   This is however preferable to not having backward compatibility with
   binaries built for LXC 1.0 and its bugfix releases.
   -->

コア<!-- Core -->:

 * apparmor: ラッパーの代わりに /lib/apparmor/profile-load を直接呼ぶようにしました <!-- Call /lib/apparmor/profile-load directly instead of the wrapper -->
 * aufs: 非特権コンテナのサポートを追加しました <!-- Support unprivileged containers -->
 * bash: POSIX 互換の関数名を使用するようにしました <!-- Use POSIX-compliant function names -->
 * cgmanager: lxc.cgroup.use の値を使用するようになりました <!-- Respect lxc.cgroup.use -->
 * cgmanager: /proc/self/cgroups の代わりに cgmanager の listcontrollers を使用するようになりました <!-- Use listcontrollers instead of /proc/self/cgroups -->
 * cgroup: 正しい順序でメモリの制限を適用するようになりました <!-- Apply the memory restrictions in the right order -->
 * clone: ファイルシステムのケーパビリティを適切に扱うようになりました <!-- Properly handle filesystem capabilities -->
 * clone: ハードリンクを適切に扱うようになりました <!-- Properly handle hardlinks -->
 * core: コンテナのロギングがスレッドセーフになりました <!-- Container logging is now thread safe -->
 * destroy: Btrfs のサブボリュームを適切に消去するようになりました <!-- Properly remove btrfs subvolumes -->
 * lua: Lua 5.3 をサポートするようになりました <!-- Support Lua 5.3 -->
 * lxc-net: いくつかバグを修正しました <!-- Fix several bugs -->
 * lxc-net: IPv6 のサポートを追加しました <!-- Support IPv6 -->
 * lxc-net: ifconfig の代わりに iproute を使うようになりました <!-- Use iproute instead of ifconfig -->
 * monitor: コンテナのモニタを行うインターフェースの競合状態を修正しました <!-- Fix race conditions in the monitor container interface -->
 * network: リブート時の veth のセットアップを適切に扱うようになりました <!-- Properly handle veth setup on reboot -->
 * overlayfs: workdir がない場合に作成するようになりました <!-- Create the workdir if missing -->
 * seccomp: セットアップコードを単純化し、ルールの解析を修正しました <!-- simplify the setup code and fix rule parsing -->
 * start: デーモン化の際に常に FD 0-2 をクローズするようにしました <!-- Always close fds 0-2 when daemonized -->
 * start: デーモンで起動する際の失敗をいくつかより適切に扱うようになりました <!-- Better handle some daemonized startup failures -->
 * start: lxc-init が見つからない場合のエラーメッセージを改良しました <!-- Improve error message when lxc-init can't be found -->
 * start: ユーザネームスペース使用時、/proc のアンマウントの失敗を無視するようにしました <!-- In userns, ignore umount failures for /proc -->
 * start: 使用できる場合は、loop デバイスの設定に /dev/loop-control を使うようになりました <!-- When available, use /dev/loop-control to configure the loop devices -->
 * systemd: lxc-containers と lxc-net 間の起動時の競合状態を修正しました <!-- Fix startup race condition between lxc-containers and lxc-net -->
 * 小さなメモリリークをいくつか修正しました (Coverity により) <!-- Several fixes for small memory leaks (thanks to Coverity) -->
 * チェックポイント/リストア機能の様々な改良を行いました <!-- Various improvements to the checkpoint/restore feature -->
 * 様々なドキュメントの改良を行いました <!-- Various documentation improvements -->
 * 様々なテストの改良を行いました <!-- Various tests improvements -->

コマンド<!-- Commands-->:

 * lxc-autostart: stdout が tty でない場合に出力が壊れる不具合を修正しました <!-- Fix broken output when stdout isn't a tty -->
 * lxc-checkconfig: 新しいカーネルをサポートしました <!-- support newer kernels -->

テンプレート<!-- Templates -->:

 * alpine: /dev/shm の扱いを修正しました <!-- Fix /dev/shm handling -->
 * alpine: apk バイナリの検証を修正しました <!-- Fix verification of the apk binary -->
 * centos: いくつかのバージョンの yum のサポートに関する修正を行いました <!-- Fix support for some version of yum -->
 * debian: GREP\_OPTIONS が設定されている場合の debootstrap に関する修正を行いました <!-- Fix debootrstap when GREP\_OPTIONS is set -->
 * debian: dbus がインストールされていない場合のエラーを修正しました <!-- Fix errors when dbus isn't installed -->
 * debian: ロケールを再設定するようにしました <!-- Reconfigure locales -->
 * debian: unstable/sid の場合のセキュリティリポジトリをスキップするようにしました <!-- Skip the security mirror for unstable/sid -->
 * fedora: セカンダリアーキテクチャのサポートを追加しました <!-- Support secondary architectures -->
 * fedora: Fedora 20 用の古いリリースリポジトリを更新しました <!-- Update to the old release repository for Fedora 20 -->
 * gentoo: /dev/mqueue と /dev/shm の扱いを修正しました <!-- Fix /dev/mqueue and /dev/shm handling -->
 * opensuse: ビルドバージョンを決定するために rpm を使うようになりました <!-- Use rpm to determine the build version -->
 * oracle: /dev/shm の扱いを修正しました <!-- Fix /dev/shm handling -->

<!--
Those stable fixes were brought to you by 31 individual contributors.
-->
これらの stable の修正は 31 名のコントリビュータによってなされました。

### ダウンロード<!-- Downloads -->
<!--
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.1.3.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 1.1.3 のパッケージをリリースするでしょう。

<!--
Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.1).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable ブランチ (stable-1.1) は [Github](https://github.com/lxc/lxc/tree/stable-1.1) にあります。


## LXC 1.1.2 リリースのお知らせ <!-- LXC 1.1.2 release announcement --><span class="text-muted">2015 年 4 月 10 日 <!-- 10th of April 2015 --></span>
<!--
This is the second bugfix release for LXC 1.1.
-->
このリリースは LXC 1.1 の 2 回目のバグフィックスリリースです。

### 変更点 <!-- Changes -->

 * core: attach 中の tty でない stdin に関する修正を行いました <!-- Fix non-tty stdin during attach -->
 * core: コンテナのロギングの改良を行いました <!-- Improved container logging -->
 * core: 非特権コンテナの cgroup の扱いに関する修正を行いました <!-- Fix cgroup handling for unprivileged containers -->
 * core: rootfs が overlayfs のコンテナをきちんと削除するようになりました <!-- Properly destroy overlayfs based containers -->
 * core: マルチスレッドの問題をいくつか修正しました <!-- Fix some multi-threading issues -->
 * core: CRIU を使った checkpoint/restore に関する様々な修正を行いました <!-- Various fixes to checkpoint/restore with CRIU -->
 * docs: lxc-attach-ephemeral のマニュアルをいくつかの点で更新しました <!-- Various manpage updates -->
 * tests: apparmor テストでハングアップする問題を修正しました <!-- Fix hang in apparmor test -->
 * centos: yum のバージョンを正確に検出するようになりました <!-- Properly detect the yum version -->
 * centos: 間違ってホストの tty.conf を変更しないように修正を行いました <!-- Don't mistakenly change tty.conf of the host -->
 * gentoo: /dev/shm のハンドリングを修正しました <!-- Fix /dev/shm handling -->

<!--
Those stable fixes were brought to you by 9 individual contributors.
-->
これらの stable の修正は 9 名のコントリビュータによってなされました。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.1.2.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 1.1.2 のパッケージをリリースするでしょう。

<!--
Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.1).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable ブランチ (stable-1.1) は [Github](https://github.com/lxc/lxc/tree/stable-1.1) にあります。


## LXC 1.1.1 リリースのお知らせ <!-- LXC 1.1.1 release announcement --><span class="text-muted">2015 年 3 月 16 日<!-- 16th of March 2015 --></span>
<!--
This is the first bugfix release for LXC 1.1.
-->
このリリースは LXC 1.1 の初めてのバグフィックスリリースです。

### 変更点 <!-- Changes -->

* config: デフォルトで FUSE へのアクセスが可能になりました (元々ほとんどのテンプレートそれぞれで許可されていました) <!-- Allow FUSE access by default (instead of individually in most templates) -->
 * proc:mixed を使った場合、/proc/sys/net が書き込み可能になりました (ネットワーク設定に必要です)<!-- Make /proc/sys/net writable when using proc:mixed (required for network config) -->
 * バックグラウンドで起動している LXC プロセスに識別可能なタイトルを設定するようにしました <!-- Set the process title of backgrounded LXC to an identifiable name -->
 * lxc.mount.auto が設定されている場合の get\_config\_item を修正しました <!-- Fix get\_config\_item with lxc.mount.auto -->
 * attach 時の tty の問題をいくつか修正しました <!-- Fix some tty issues with attach -->
 * seccomp で powerpc のサポートを追加しました <!-- Add powerpc support to seccomp -->
 * oracle: 非特権の場合の lxc-console の修正を行いました <!-- Fix unprivileged lxc-console -->
 * centos: 非特権の場合の lxc-console の修正を行いました <!-- Fix unprivileged lxc-console -->
 * plamo: コンテナ内で /dev 以下のデバイスファイルの生成方法を変更しました <!-- Change way to create objects under /dev in the container -->
 * lxc-top: 長いコンテナ名の場合の表示の修正 <!-- Fix long container names rendering -->
 * LVM: Thin Provisioning を使わない LVM の場合に rdepends を使うようにしました (訳注: Thin Provisioning を使わない LVM の場合、スナップショットクローン元のコンテナが削除できなくなりました) <!-- Use rdepends for non-thinpool container clones -->
 * gentoo: base イメージのダウンロードの修正 <!-- Fix base image download -->
 * 色々な部分での man pages の更新 <!-- Various manpages update -->

<!--
Those stable fixes were brought to you by 13 individual contributors.
-->
これらの stable の修正は 13 名のコントリビュータによってなされました。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.1.1.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 1.1.1 のパッケージをリリースするでしょう。

<!--
Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.1).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable ブランチ (stable-1.1) は [Github](https://github.com/lxc/lxc/tree/stable-1.1) にあります。


## LXC 1.1.0 リリースのお知らせ <!-- LXC 1.1.0 release announcement --><span class="text-muted">2015 年 1 月 30 日</span>
<!-- The LXC team is pleased to announce the release of LXC 1.1. -->
LXC チームは LXC 1.1 のリリースを発表しました。

<!-- This release will be supported until January 2016 or 2 months after the next release of LXC,  
whichever comes last. -->
このリリースは 2016 年 1 月か、その時点で LXC の次のリリース (1.2) がなされていない場合は、次のリリースの 2 ヶ月後までサポートされます。

<!--
If you need a long-term supported version of LXC for use in production, we still strongly recommend  
you stick to LXC 1.0 which is supported with frequent stable releases until April 2019.
-->
プロダクション環境での長期間のサポートが必要であれば、2019 年 4 月まで安定版リリースとしてサポートされる LXC 1.0 を使い続けることを強くおすすめします。

<!--
While not strictly required, it is recommended that LXC 1.1 be used with cgmanager 0.35 (or higher)  
and lxcfs 0.5 (or higher).
-->
一方でそこまでの厳密さが不要であれば、LXC 1.1 を cgmanager 0.35 以降、lxcfs 0.5 以降と一緒に使うこともおすすめです。

### 注目の新機能 <!-- Highlights -->
<!--
LXC 1.1 introduces checkpoint/restore support for containers through CRIU.  
This allows to serialize the container running state to disk, for live migration or for later local restoration  
of the container.
-->
LXC 1.1 は CRIU を使ったコンテナのチェックポイント・リストアの機能を新たに導入しました。

<!--
Support for running systemd as the init system inside the container was also greatly improved  
and should now work by default both for privileged and unprivileged containers when combined  
with lxcfs and a recent systemd.
-->
コンテナ内の init として systemd の実行のサポートも大きな改良点です。lxcfs と最新の systemd の組み合わせで、特権、非特権の両方のコンテナが動作するでしょう。

<!--
Init scripts have now all been updated to provide the same feature set, which means that a lxcbr0 bridge  
with a DHCP and DNS server (dnsmasq) is now the default for anyone using LXC.  
We currently provide init scripts for systemd, sysvinit and upstart.
-->
init スクリプトが更新されました。これにより LXC を使ういかなるシステムでも、DHCP サーバと DNS サーバ機能を dnsmasq によって提供する lxcbr0 ブリッジがデフォルトとなり、同じように動くようになりました。現時点で systemd、sysvinit、upstart 向けの init スクリプトを提供しています。

<!-- This release was made possible by contributions from 84 developers. -->
このリリースは 84 名の開発者からのコントリビュートによりリリースできました。

### 新機能<!-- New features -->
 * lxc-autostart: 新たに -A/--ignore-auto オプションを追加しました (すべてのコンテナを起動できます) <!-- New -A/--ignore-auto flag (starts all containers) -->
 * lxc-ls: 新たな出力項目 "interface" を追加しました <!-- New "interface" field -->
 * centos/fedora: root\_password\_expired 環境変数を追加しました (デフォルト yes) <!-- Added a root\_password\_expired environment variable (defaults to yes) -->
 * oracle: (メディアからを含めて) 任意の yum リポジトリからインストールできるようになりました <!-- Allow installing from arbitrary yum repositories (including medias) -->
 * oracle: Oracle Linux 7 のサポートを追加しました <!-- Add Oracle Linux 7 support -->
 * lxc-ls: --fancy オプションなしで group によるコンテナのフィルタリングができるようになりました <!-- Allow filtering containers by group even without \-\-fancy -->
 * core: qemu-img 経由での qcow2 のサポートを追加しました <!-- Add support for qcow2 images (through qemu-img) -->
 * lxc-autostart: NULL グループのサポートを追加しました (lxc.start.auto は 1 に設定されているがグループには属していないコンテナ) <!-- Add support for the NULL group (any container with lxc.start.auto set to 1 but without a group) -->
 * core: コメントと同様に展開されないバージョンの設定のトラッキング <!-- Track an unexpanded version of the configuration as well as comments (improves formatting of the save configuration) -->
 * opensuse: 共通設定を使うようになりました <!-- Switch to using common configurations -->
 * core: lxc.cap.keep に none を設定できるようになりました <!-- Allow lxc.cap.keep be set to none -->
 * archlinux: 共通設定を使うようになりました <!-- Switch to using common configurations -->
 * ubuntu: 利用可能な場合、btrfs の subvolume とスナップショットを使うようになりました <!-- use btrfs subvolumes and snapshots when available -->
 * seccomp: 全てのディストリビューションでデフォルトの seccomp プロファイルを設定するようになりました (危険なシステムコールをブロックします) <!-- Set a default seccomp profile for all distros (blocks dangerous syscalls) -->
 * core: Openvswitch のブリッジのサポート <!-- Add support for Openvswitch bridges -->
 * core: lxc.environment のサポートの追加 (特別な環境変数の追加) <!-- Add support for lxc.environment (sets extra environment variables) -->
 * init: systemd, upstart, sysvinit スクリプトで同一のサポートの追加 <!-- Add identical Support of systemd, upstart and sysvinit scripts -->
 * core: CRIU を使ったコンテナのチェックポイントとリストアのサポート <!-- Add support for checkpoint and restore of containers using CRIU -->
 * core: 新しい aa\_allow\_incomplete フラグの追加。部分的な AppArmor のサポートでコンテナの起動が可能になりました <!-- Add a new aa\_allow\_incomplete flag to allow container startup with partial apparmor support -->
 * lxc-top: デフォルトでCバイナリ版がインストールされるようになりました (以前は lua スクリプトでした) <!-- Now a C binary installed by default (was a lua script) -->
 * API: attach\_interface と detach\_interface が追加されました <!-- Addition of attach\_interface and detach\_interface -->
 * lxc-device: デフォルトで C バイナリ版がインストールされるようになりました <!-- Now a C binary installed by default (was a python3 script) -->
 * lxc-config: lxc.cgroup.(use|pattern) が表示できるようになりました <!-- Now supports querying lxc.cgroup.(use|pattern) -->
 * core: 新たに lxc.init\_cmd オプションを追加しました。デフォルトの init コマンドである /sbin/init を上書きします <!-- Add new lxc.init\_cmd config option to override the default init command (/sbin/init/) -->
 * lxc-start-ephemeral: 新たに --cdir オプションを追加しました (copy-on-write マウント)。<!-- Add new --cdir option (copy-on-write mounts) -->
 * opensuse: 複数のリリースのサポート <!-- Support multiple releases -->
 * core: lxc.include でディレクトリの include が可能になりました (全ての .conf 拡張子を持つファイルを include します)<!-- lxc.include now allows including directories (includes all the files with a .conf suffix) -->
 * core: 新たに common.conf.d ディレクトリが利用可能になりました。ユーザ、パッケージが全てのコンテナに反映させたい設定を追加できるようになりました<!-- A new common.conf.d configuration directory is available for users and packages to drop configuration snippets to be applied to all containers -->
 * core: LXC が container_ttys 環境変数を設定するようになりました <!-- The container\_ttys environment variable is now set by LXC -->

### 動作の変更点<!-- Change in behavior -->
 * lxc-create で -t オプションが必須になりました。以前のようにテンプレートなしの場合は "none" を使用します <!-- lxc-create now requires be passed (-t), use "none" for the old behavior. -->
 * スナップショットがコンテナのディレクトリ内に保存されるようになりました <!-- snapshots are now stored in the container's directory -->
 * PER\_LINUX32 に対する lxc.arch は i686 を出力するようになりました <!-- lxc.arch for PER\_LINUX32 is now output as i686 -->
 * lxc-execute: コンテナ内に lxc-init が見つからない場合はコンテナ内にバインドマウントされるようになりました <!-- lxc-init is now bind-mounted in the container if it can't be found -->
 * lxc-start: デーモン起動がデフォルトになりました <!-- containers now start daemonized by default -->
 * core: pivot_\root は lxc.pivotdir を使わずに行われるようになりました。この結果、このオプションは非推奨となり、将来は削除される予定です <!-- pivot\_root is now done without the use of lxc.pivotdir, as a result this option is now considered deprecated and will be removed in upcoming releases. -->
 * Core: デフォルトでデーモンモードで起動するようになったので、close-all-fds もデフォルトになりました <!-- with the switch to daemonized containers by default, close-all-fds is also now the default. -->
 * core: lxc.autodev は作りかえられました。/dev/lxc は使いません。代わりにコンテナの /dev 上で直接 tmpfs をマウントします。非特権コンテナ上でも動くようになりました <!-- lxc.autodev was reworked, it no longer uses /dev/lxc, instead mounting a tmpfs directly on the container's /dev, it also now works with unprivileged containers -->
 * core: lxc.autodev がデフォルトで有効になりました (lxc.autodev=1)<!-- lxc.autodev is now on by default (can be overriden with lxc.autodev=0) -->
 * core: lxc.kmsg はデフォルトで無効になりました (lxc.kmsg=0) <!-- lxc.kmsg is now disabled by default (can be overriden with lxc.kmsg=1) -->
 * core: clear\_config\_item はリスト (lxc\_list) のみに影響するようになりました。他では set\_config\_item を使用してください <!-- clear\_config\_item now exclusively Affects lists (lxc\_list) entries. set\_config\_item should be used for anything else. -->
 * templates: 全てのテンプレートで lxc.mount.auto = cgroup:mixed proc:mixed sys:mixed を使うようになりました (安全なデフォルト設定です) <!-- All templates now use lxc.mount.auto = cgroup:mixed proc:mixed sys:mixed (safe default configuration) -->

### ダウンロード<!-- Downloads -->
<!-- The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.1.0, unless they decide to stick to the long term 1.0 release. -->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションが長期サポートの 1.0 リリースの採用を続ける決定をしない場合は、すぐに LXC 1.1.0 のパッケージをリリースするでしょう。

<!--
Should you be interested in individual changes or just looking at the detailed development history,  
our master branch is on [Github](https://github.com/lxc/lxc/tree/master).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、master ブランチは [Github](https://github.com/lxc/lxc/tree/master) にあります。


## LXC 1.0.7 リリースのお知らせ <!-- LXC 1.0.7 release announcement --><span class="text-muted">2014 年 12 月 5 日</span>

<!-- This is the seventh bugfix release for the LXC 1.0 series. -->
このリリースは LXC 1.0 シリーズの 7 回目のバグフィックスとなるリリースです。

### 変更点 <!-- Changes -->

コア <!-- Core -->:

 * IPv4/IPv6 アドレスをキーに問い合わせたとき、ネットワークプレフィックスも含めるようにしました <!-- Include network prefix when ipv4/ipv6 keys are queried -->
 * apparmor: 'silent' マウントを黙って拒否するようにしました<!-- silence 'silent' mount denials -->
 * デバッグ出力にファイル、関数、行数の情報を含めるようにしました<!-- add file/func/line to debug info -->
 * apparmor: プロセスに対する signal と ptrace を制限するようにしました <!-- restrict signal and ptrace for processes -->
 * cgmanager: いくつか修正を行いました (訳注: 非特権コンテナで全てのコントローラを同じパスにマウントしていない時の操作が失敗することがある不具合を修正しました)<!-- several fixes -->
 * lxc: / が ramfs のときに pivot\_root を呼ばないようにしました <!-- don't call pivot\_root if / is on a ramfs -->
 * lxc.mount.auto の後片付けを修正しました <!-- fix lxc.mount.auto clearing -->
 * conf.c: Android に対する MS\_PRIVATE を定義しました <!-- Define MS\_PRIVATE for Android -->
 * network: ifname パラメータを const に変更しました (訳注: ネットワークインターフェース関連の関数の引数を char* から const char* に変更しています)<!-- convert param ifname to const. -->
 * network: if\_nametoindex() の返り値のチェックを行うようにしました (訳注: 内部的に使用している関数の返り値が
 NULL でないかどうかのチェックを追加しました)<!-- check result of if\_nametoindex(). -->
 * network: 名前空間を移動するときに allow lxc\_network\_move\_by\_index() でネットワークインターフェースの名前を変更できるようにしました <!-- allow lxc\_network\_move\_by\_index() rename netdev in moving. -->
 * network: lxc\_netdev\_isup() という名前の関数の導入 (訳注: ネットワークインターフェースの状態が up か down かを取得する関数を追加しました)<!-- introduce a interface named lxc\_netdev\_isup(). -->
 * lxccontainer.c: enter\_to\_ns 関数を enter\_net\_ns という名前に変更しました<!-- rename enter\_to\_ns to enter\_net\_ns -->
 * root の場合でも非 root の場合でも lxc\_global\_config\_value 関数がデフォルトの lxc.cgroup.pattern を返すようにしました <!-- lxc\_global\_config\_value can return the default lxc.cgroup.pattern whether root or non-root -->
 * do\_rootfs\_setup: 返り値のバグを修正しました <!-- fix return bugs -->
 * lxc-start: rootfs がマウントされているときに rootfs のマウントをリトライしないようにしました <!-- don't re-try to mount rootfs if we already did so -->
 * attach: confstr(\_CS\_PATH) を使わないようにしました <!-- don't use confstr(\_CS\_PATH) -->
 * lxc\_global\_config\_value: テーマを簡素化しました (訳注: グローバルの設定値用の内部変数の解放を簡素化して安全に解放するようにしました)<!-- simplify the theme -->
 * ipvX gatewayの値のミスマッチの修正をしました (設定値 ipvX.gateway 関係の内部処理で "ipvX_gateway" という文字列で比較していたので期待通りの処理が行われていない部分があったのを修正しました)<!-- Fixed mismatch on ipvX gateway -->
 * attach: stdin がリダイレクトされているときに sigint/sigkill を無視しないようにしました <!-- don't ignore sigint/sigkill if stdin is redirected -->
 * cgmanager: "all" コントローラをサポートした 'attach' の修正を行いました <!-- fix 'attach' with "all" controller support -->
 * lxc/utils: 解放されたポインタの返り値に関する修正を行いました <!-- bugfix freed pointer return value -->
 * conf.c: 関数名などで使っている 'instanciate' の綴りを 'instantiate' に変更しました <!-- change 'instanciate' to 'instantiate' -->
 * 間違った nlmsg_\len の長さを修正しました <!-- fix wrong nlmsg\_len -->
 * read-only フラグが与えられているときは bind mount を再マウントするようにしました <!-- Remounts bind mounts if read-only flag is provided -->
 * lxc\_clear\_config\_item 関数が idmaps をクリアできるようにしました <!-- Allow lxc\_clear\_config\_item to clear idmaps. -->
 * overlayfs と aufs のクローンを行うときの処理 (clone\_path) をより確実に行えるようにしました <!-- overlay and aufs clone\_paths: be more robust -->
 * overlayfs: overlayfs ver.22 以上の場合にはマウントに workdir オプションを付けるようにしました <!-- overlayfs.v22 or higher needs workdir option -->
 * クローン時の問題を修正しました (訳注: aufs と overlayfs のクローンを行うときに問題が起こる場合があるのを修正しました) <!-- Fix clone issues -->
 * veth のエラーの場合のロギングの改良を行いました <!-- Improve veth error cases logging -->
 * コメントの typo の修正を行いました <!-- fixed typo in comment -->
 * audit: capacity と reserve() を netlink メッセージに追加しました (訳注: netlink メッセージがオーバーフローしないようにしました)<!-- added capacity and reserve() to nlmsg -->
 * rmdir と lxc\_unpriv がマイナスの値を返さないようにしました <!-- rmdir and lxc\_unpriv returns non-negative error codes -->
 * typo の修正をしました - https://github.com/vlajos/misspell\_fixer を使って <!-- typofixes - https://github.com/vlajos/misspell\_fixer -->

バインディング <!-- Bindings -->:

 * src/python-lxc/setup.py を .gitignore に追加しました <!-- add src/python-lxc/setup.py into .gitignore -->

Tests:

 * tests: 非特権のテストを修正しました <!-- Fix unpriv test -->
 * lxc-test-unpriv: /etc/lxc/lxc-usernet をクリアしないようにしました <!-- don't clear out /etc/lxc/lxc-usernet -->
 * lxc-test-unpriv: サブシステムごとに異なる cgroup である場合のテストを追加しました <!-- test for different cgroups per subsystem -->
 * tests: waitpid() が errno として EINTR を返したときにリトライするようにしました <!-- try again when waitpid() sets errno as EINTR -->

コマンド <!-- Commands -->:

 * lxc\_start: コンテナが実行中のときは ERROR を返すようにしました (訳注: ↓で更に修正されて0を返すようになってます)<!-- ERROR if container is already running. -->
 * lxc-start: コンテナが実行中のときはエラーでなく 0 を返すようにしました <!-- return 0 rather than error if container is already running -->
 * 古い lxc-ls コマンドをより適切に処理がなされるようにしました (訳注: python3 がインストールされていない場合にインストールされる古いシェル版の lxc-ls です)<!-- Make legacy lxc-ls more robust -->
 * lxc\_info: fork する処理を呼ぶ前に stdout をフラッシュするようにしました <!-- flush stdout before calling routines which may fork -->

テンプレート <!-- Templates -->:

 * lxc-gentoo テンプレートの typo を修正しました <!-- Fix typo in lxc-gentoo template -->
 * busybox template: 非特権コンテナをサポートしました <!-- support for unprivileged containers -->
 * busybox template: fstab が利用できる場合はマウントするようにしました <!-- mount fstab when available -->
 * gentoo テンプレートで更に他の typo を修正しました <!-- Fix another gentoo template typo -->
 * コンテナの代わりにキャッシュに apt proxy を作成するようにしました (訳注: Ubuntu テンプレート) <!-- Create the apt proxy in the cache instead of the 1st container -->
 * lxc-plamo: /dev/shm を tmpfs でマウントするようにしました <!-- mount tmpfs on /dev/shm -->
 * lxc-cirros: 非特権コンテナの作成と実行をサポートしました <!-- support creating+running unprivileged -->
 * lxc-openmandriva の typo を修正しました <!-- Fix lxc-openmandriva.in typo. -->
 * lxc-centos の typo を修正しました <!-- Fix lxc-centos.in typo. -->
 * lxc-opensuse: openSUSE 13.2 環境上でのコンテナの作成を無効にしました <!-- Disable on 13.2 -->
 * lxc-alpine: /dev/shm が確実に誰でも書き込み可能になるようにしました <!-- make sure /dev/shm is world writeable -->
 * lxc-alpine: コンソール用のデフォルトの tty を作成するようにしました <!-- create a default tty for console -->
 * lxc-debian: パッケージインストール用のサポートを追加しました <!-- added support for package installation -->
 * lxc-debian: デフォルトミラーの修正を行いました <!-- Fix default mirrors -->
 * lxc-debian: PID 1 として systemd をサポートしました <!-- support systemd as PID 1 -->
 * lxc-debian: init のシステム設定の調整を行いました <!-- adjust init system configurations -->
 * lxc-debian: Wheezy と Jessie で udev サービスのマスクをおこないました　<!-- mask both Wheezy and Jessie udev services -->
 * lxc-opensuse: openSUSE Tumbleweed 上でのコンテナ作成を無効化し、検出を改良しました。<!-- Disabling builds on openSUSE Tumbleweed, detection improved. -->

ドキュメント <!-- Documentation -->:

 * lxc(7) のカーネルと cgroup の情報を最新情報に修正 <!-- Fix the lxc manpage a bit -->
 * lxc-create の -t オプションを必須に変更 <!-- lxc-create -t option is not optional -->
 * 日本語の lxc(7) のカーネルと cgroup の情報を最新情報に修正 <!-- doc: Update kernel and cgroup info in Japanese lxc(7) -->
 * タブ/スペースの一貫性 <!-- tabs/spaces consistency -->

<!--
Those stable fixes were brought to you by 27 individual contributors.
-->
これらの stable の修正は 27 名のコントリビュータによってなされました。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions  
will very soon ship a packaged version of LXC 1.0.7.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 1.0.7 のパッケージをリリースするでしょう。

<!--
Should you be interested in individual changes or just looking at the detailed development history,  
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.0).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable ブランチは [Github](https://github.com/lxc/lxc/tree/stable-1.0) にあります。

## <!-- LXC 1.0.6 release announcement24th of September 2014 -->LXC 1.0.6 リリースのお知らせ<span class="text-muted"> 2014 年 9 月 24 日</span>

<!-- This is the sixth bugfix release for the LXC 1.0 series. -->このリリースは LXC 1.0 シリーズの 6 回目のバグフィックスとなるリリースです。

<!-- To make supporting both LXC 1.0 and the future LXC 1.1
        easier, this version introduces the -F argument to lxc-start. This
        argument is a no-op as lxc-start is already running in the
        foreground by default, but as that behavior will change in
        LXC 1.1, introducing -F in 1.0 too allows for writing script
        which will work consistently on upgrades. -->
  LXC 1.0 と将来リリースする LXC 1.1 の両方を簡単にサポートするために、このバージョンでは lxc-start に -F オプションを追加しました。(現在の 1.0 で) デフォルトでフォアグラウンドで起動している lxc-start ではこのオプションは不要ですが、この動きは LXC 1.1 で変わる予定です (訳注: バックグラウンドがデフォルトに変わる予定です)。1.0 で -F を導入したのは、アップグレード後も作成したスクリプトが変わらずに動くようにするためです。


### <!-- Changes -->変更点
  
* <!-- rootfs_is_blockdev: don't run if no rootfs is specified -->rootfs_is_blockdev: rootfs が指定されていないときには実行されないようにしました (訳注: rootfs が指定されていない場合はストレージバックエンドがブロックデバイスかどうかチェックを行う処理を実行しないようにしました)
* <!-- confile: sanity-check netdev-&#62;type before setting
             netdev-&#62;priv elements -->confile: netdev-&gt;priv を設定する前に netdev-&gt;type のチェックを行うようにしました
* <!-- Remove mention of mountcgroups in ubuntu.common config -->ubuntu.common 設定ファイル中の mountcgroups フックのコメント内での例示を削除しました (訳注: 例示は "lxc.mount.auto = cgroup:mixed" に置き換わっています)
* <!-- remove mountcgroup hook entirely -->mountcgroup フックファイルを削除しました
* <!-- Add SIGPWR support to lxc_init -->lxc_init が SIGPWR を扱えるようになりました
* <!-- Sysvinit script fixes -->Sysvinit スクリプトを修正しました
* <!-- unprivileged containers: use next available nic name if
             unspecified -->非特権コンテナ: 指定がない場合は次に利用可能な NIC 名を使用するようにしました
* <!-- fix typo in btrfs error msg -->btrfs のエラーメッセージの typo を修正しました
* <!-- apparmor: Allow slave bind mounts -->apparmor: スレーブバインドマウントが可能になりました
* <!-- provide an example SELinux policy for older releases -->古いリリースに対する SELinux ポリシーの例を追加しました
* <!-- print a helpful message if creating unpriv container
             with no idmap -->idmap (idのマッピング) なしで非特権コンテナを作成しようとした場合に参考になるエラーメッセージを出力するようにしました
* <!-- use non-thread-safe getpwuid and getpwgid for android -->Android ではスレッドセーフでない getpwuid と getpwgid を使うようにしました
* <!-- btrfs: support recursive subvolume deletion (v2) -->btrfs: 再帰的な subvolume の削除をサポートしました (v2)
* <!-- fix '--log-priority' --&#62; '--logpriority' in main -->'--log-priority' を '--logpriority' に修正しました (訳注: エラーメッセージ中の typo の修正)
* <!-- Fix a file descriptor leak in the daemonization -->デーモン化の際ファイルディスクリプタのリークを修正しました
* <!-- Fix a file descriptor leak in the monitord spawn -->monitord が起動する際のファイルディスクリプタのリークを修正しました
* <!-- Ensure /dev/pts directory exists on pts setup -->pts セットアップ時に確実に /dev/pts ディレクトリが存在するようにしました
* <!-- Do not allow snapshots of LVM backed containers -->LVM バックエンドのコンテナのスナップショットを禁止しました (訳注: LVM でスナップショットが正常に動作しないための一時的な処置です)
* <!-- add lxc.console.logpath -->設定項目として lxc.console.logpath を追加しました
* <!-- coverity: don't use newname after null check -->coverity: null チェックの後に newname を使わないようにしました (訳注: クローン時のクローン先のコンテナが存在しないかどうかのチェックの際にテンポラリ変数を使わないように処理を変更した)
* <!-- coverity: malloc the right size for btrs_node tree -->coverity: btrfs_node tree の malloc を正しいサイズで行うようにしました
* <!-- introduce --with-distro=raspbian -->--with-distro=raspbian が使用可能になりました (訳注: configure 時のオプション指定です)
* <!-- cgmanager get/set: clean up child (v2) -->cgmanager get/set: cgmanager で確実に子グループを刈り取るようにしました
* <!-- Add extra debugging -->デバッグ出力の追加
* <!-- do_mount_entry: add nexec, nosuid, nodev, rdonly flags
             if needed at remount -->do_mount_entry: remount 時に必要であれば nexec, nosuid, nodev, rdonly フラグを追加するようにしました (訳注: 関連 <a href="https://lkml.org/lkml/2014/8/13/746">https://lkml.org/lkml/2014/8/13/746</a>)
* <!-- command socket: use hash if needed -->command socket: 必要な場合にハッシュを使うようにしました (訳注: コンテナのコマンドソケット名が長すぎる場合にはハッシュを使うようにしました)
* <!-- monitor: fix sockname calculation for long lxcpaths -->monitor: 長い lxcpath の場合のソケット名の計算を修正しました
* <!-- show additional info if btrfs subvolume deletion fails
             (issue #315) -->btrfs の subvolume の削除が失敗した場合の出力の変更 (issue #315)
* <!-- ignore SIGKILL (CTRL-C) and SIGQUIT (CTRL-\) - issue #313 -->SIGKILL (CTRL-C) と SIGQUIT (CTRL-\) を無視するようにしました (issue #313) (訳注: lxc-attach コマンドの処理です)
* <!-- chmod container dir to 0770 (v2) -->コンテナディレクトリを 0770 に chmod するようにしました
* <!-- build: Fix support for split build and source dirs -->build: 分離したビルドとソースディレクトリのサポートの修正
* <!-- mount_entry: use statvfs -->mount_entry: statvfs を使うように変更しました (訳注: /proc/self/mountinfo をパースしていたのを変更しました)
* <!-- lxc_mount_auto_mounts: honor existing nodev etc at
             remounts -->lxc_mount_auto_mounts: 再マウント時に存在する nodev などのオプションをきちんと評価できるようにしました
* <!-- statvfs: do nothing if statvfs does not exist
             (android/bionic) -->statvfs: statvfs が存在しない場合に何もしないようにしました (android/bionic)
* <!-- Prevent compiler warning by initializing ifindex -->ifindex の初期化時のコンパイラの警告がでないようにしました (訳注: 内部で使っている変数初期化の際の警告の抑止です)
* <!-- build: don't remove configuration template on clean -->build: clean の際に設定テンプレートを削除しないようにしました (訳注: make clean 時です)
* <!-- build: Make setup.py run from srcdir to avoid distutils
             errors -->build: distutils のエラーを防ぐために srcdir から setup.py を実行するようにしました
* <!-- handle hashed command socket names (v2) -->コマンドソケット名の扱いの処理の変更をしました (v2)
* <!-- lxc-cgm: fix issue with nested chowning -->lxc-cgm: ネストした chown の際の問題を修正しました
* <!-- Report container exit status to monitord -->monitord (コンテナをモニタリングするデーモン) にコンテナの終了ステータスを報告するようになりました
* <!-- support use of 'all' containers when cgmanager supports it -->cgmanager が 'all' サブシステムをサポートしている時は 'all' を使うようにしました (訳注: 原文は「'all' containers」となっていて、該当のコミットログもそうなっていますが、修正内容を見る限りは cgroup の複数のサブシステムを扱う話に見えますのでそのように訳しています→<a href="https://github.com/lxc/lxc/commit/69a8b71ba5b8900d5b8a1784061c72f995acacb6">コミット</a>)
* <!-- log: fix quiet mode -->log: quiet モードのバグを修正しました
* <!-- Fix build error(ISO C90 specs violation) in lxc.c -->lxc.c ビルド内のビルド時のエラー(ISO C90仕様違反)を修正しました
* <!-- lxc_map_ids: don't do bogus chekc for newgidmap -->lxc_map_ids: 不要な newgidmap コマンドのチェックを行わないようにしました。コード中にその部分のコメントを追加しました。
* <!-- clean autodev dir on container exit -->コンテナ終了時に autodev 処理に使ったディレクトリを掃除するようにしました
* <!-- As discussed on ML, do not clean autodev dir on reboot -->MLでの議論で、リブート時は autodev 処理に使ったディレクトリを掃除しないようにしました
* <!-- Fix build failure due to slightly different rmdir -->少し異なったrmdir処理の呼び出しに起因するビルドの失敗を修正しました
* <!-- Fix presentation of IPv6 addresses and gateway -->IPv6アドレスとゲートウェイの表現の修正
* <!-- lxc-start: Add -F (foreground) option -->lxc-start: -F (フォアグラウンド) オプションの追加
* <!-- all: Discontinue the use of in-line comments (stable) -->all: インラインコメントの使用をやめました (訳注: 付属の標準設定ファイルの話です)
* <!-- all: Include hostname in DHCP requests -->centos: DHCPリクエストにホスト名を含めるようにしました
* <!-- all: Switch from arch command to uname -m -->centos, fedora, gentoo: arch コマンドを uname -m に変更しました
* <!-- altlinux: bugfixes -->altlinux: バグ修正をしました
* <!-- archlinux: Properly set default locale in /etc/locale.conf -->archlinux: /etc/locale.conf にデフォルトのロケールを適切に設定するようにしました
* <!-- centos template: prevent mingetty from calling vhangup(2) -->centos template: mingetty 実行時に vhangup(2) が呼ばれないようにしました
* <!-- download: Have wget retry 3 times -->download: wget が 3 度リトライをするようにしました
* <!-- download: Make --keyserver actually work -->download: --keyserver オプションが実際に動作するようにしました
* <!-- gentoo: keep original uid/gid of files/dirs when
             installing -->gentoo: インストール時のファイルとディレクトリがオリジナルのuid/gidを保持するようにしました
* <!-- gentoo: Use portageq to determine portage distdir -->gentoo: portage distdir の決定に portageq を使用するようにしました
* <!-- plamo: keep original uid/gid of files/dirs when installing -->plamo: インストール時のファイルとディレクトリがオリジナルのuid/gidを保持するようにしました
* <!-- plamo: bugfix template -->plamo: バグを修正しました
* <!-- ssh: send hostname to dhcp server -->ssh: DHCP サーバにホスト名を送るようにしました
* <!-- ubuntu: don't check for $rootfs/run/shm -->ubuntu: $rootfs/run/shm の存在チェックを行わないようにしました
* <!-- ubuntu: add help string -->ubuntu: ヘルプを追加しました
* <!-- lxc-test-{unpriv,usernic.in}: make sure to chgrp as well -->lxc-test-{unpriv,usernic.in}: 確実に chgrp されるようにしました
* <!-- lxc-test-unpriv: test lxc-clone -s -->lxc-test-unpriv: lxc-clone -s のテストを行うようにしました
* <!-- tests: Call sync before testing a shutdown -->tests: shutdown をテストする前に sync を呼ぶようにしました
* <!-- tests: Copy the download cache when available [v2] -->tests: 使用可能であればダウンロードキャッシュをコピーするようにしました [v2]
* <!-- Fix the unprivileged tests cgroup management -->非特権の cgroup 管理のテストを修正しました
* <!-- doc: Mention that veth.pair is ignored for unpriv -->doc: 非特権の場合に veth.pair が無視されることを追記しました (日本語manでも追記しました)
* <!-- doc: Add -F option to Japanese lxc-start(1) -->doc: lxc-start(1) に -F オプションの説明を追加しました
* <!-- doc: Update the description of SELinux in Japanese
             lxc.container.conf(5) -->doc: 日本語の lxc.container.conf(5) の SELinux の説明を更新しました
* <!-- doc: Add 'zfs' to the parameter of -B option in
             lxc-create(1) -->lxc-create(1) の -B オプションのパラメータに 'zfs' を追加しました
* <!-- doc: add lxc.console.logpath to Japanese
             lxc.container.conf(5) -->doc: 日本語の lxc.container.conf(5) に lxc.console.logpath の説明を追加しました
* <!-- doc: language correction -->doc: 言語の修正
* <!-- doc: Fix Japanese translation of lxc.container.conf(5) -->doc: 日本語の lxc.container.conf(5) の誤記を修正しました
* <!-- doc: Add destroy option to lxc-snapshot(1) -->lxc-snapshot(1) に destroy オプションの説明を追加しました
* <!-- doc: Add description about ignoring lxc.cgroup.use when
             using cgmanager -->lxc.system.conf(5) に lxc.cgroup.use が cgmanager を使っているときは無視されることを追記しました

<!-- Those stable fixes were brought to you by 24 individual
        contributors. -->これらの stable の修正は 24 名のコントリビュータによってなされました。

### <!-- Downloads -->
<!-- The release tarballs may be found on our
        <a href="/downloads/">download page</a> and we expect most
        distributions will very soon ship a packaged version of LXC 1.0.6. -->
  このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。
  そして、各ディストリビューションがすぐに LXC 1.0.6 のパッケージをリリースするでしょう。


<!-- Should you be interested in individual changes or just
        looking at the detailed development history, our stable branch is
        on <a href="https://github.com/lxc/lxc/tree/stable-1.0">Github</a>. -->
  個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable ブランチは <a href="https://github.com/lxc/lxc/tree/stable-1.0">Github</a> にあります。



## <!-- LXC 1.0.5 release announcement14th of July 2014 -->LXC 1.0.5 リリースのお知らせ<span class="text-muted">2014 年 7 月 14 日</span>

<!-- This is the fifth bugfix release for the LXC 1.0 series. -->このリリースは LXC 1.0 シリーズの 5 回目のバグフィックスとなるリリースです。

### seccomp profile

  <!--
      Outside of the usual bugfixes, this release also introduces
      one important change. For systems where LXC is built with seccomp
      support, containers will now have a seccomp profile enabled
      which will prevent calls to the following syscalls:
      kexec_load, open_by_handle_at, init_module, finit_module,
      delete_module.
    -->
  通常のバグフィックス以外に、このリリースは重要な変更を一つ含みます。LXC が seccomp サポートでビルドされているシステムでは、コンテナは seccomp プロファイルが有効になります。このプロファイルにより、以下のシステムコールの呼び出しを防ぎます: kexec_load, open_by_handle_at, init_module, finit_module, delete_module.


<!-- This will amongst other things prevent exploits like the
        recently release "shocker" exploit. -->
  これは特に、最近よく見られる "shocker" エクスプロイトのような攻撃を防ぐでしょう。


<!-- This profile will be applied to any new or existing containers
        using the new-style LXC configurations (using lxc.include of common
        configs), so currently the following distributions:
        centos, debian, fedora, gentoo, oracle, plamo and ubuntu. -->
  このプロファイルは新しいコンテナや、(共通の設定を lxc.include で読み込んでいる) 新しいスタイルの LXC 設定ファイルを使ったコンテナに適用されます。つまり、現時点では以下のディストリビューションに適用されます: centos, debian, fedora, gentoo, oracle, plamo, ubuntu.


<!-- You can turn this off by adding "lxc.seccomp =" in your
        container's configuration. -->
  コンテナの設定で "lxc.seccomp =" を追加することにより、このプロファイルの適用をオフにできます。


<!-- If you want to manually turn this on for a container which
        doesn't use the common config mechanism, you can add something like
        "lxc.seccomp = /usr/share/lxc/config/common.seccomp" to the container
        configuration. -->
  共通の設定を読み込む仕組みを使っていないコンテナでこの機能をオンにしたい場合は、"lxc.seccomp = /usr/share/lxc/config/common.seccomp" というような設定を、コンテナの設定ファイルに追加します。


### <!-- Changes -->変更点

  
* <!-- core: Fix unprivileged containers to work with recent
             kernels. -->core: 最近のカーネルで非特権コンテナが動作するように修正しました(訳注: 最近のカーネル = 3.15.1 or 3.14.8 以降)
* <!-- core: Fix building with -Werror=maybe-uninitialized. -->core: -Werror=maybe-uninitialized を付けた時のビルドの問題を修正しました
* <!-- core: seccomp: Don't fail on unresolvable syscalls. -->core: seccomp: 解決できないシステムコールを使った時に失敗しないようにしました
* <!-- core: lxc-init: Don't force dropping capabilities. -->core: lxc-init: ケーパビリティのドロップを強制しないようにしました
* <!-- core: configure: Split -lcap and -lselinux out of LIBS. -->core: configure: LIBS から -lcap と -lselinux を分けました
* <!-- core: configure: Fix expansion of libexecdir. -->core: configure: libexecdir の展開の問題を修正しました
* <!-- core: seccomp: Support 'all' arch sections. -->core: seccomp: セクションで使えるアーキテクチャとして 'all' をサポートしました
* <!-- core: seccomp: Fix 32-bit rules. -->core: seccomp: 32-bit のルールを修正しました
* <!-- core: seccomp: Enable a default filter for all templates. -->core: seccomp: すべてのテンプレートに対してデフォルトのフィルタを有効にしました
* <!-- core: Fix corruption in write_config. -->core: write_config 内のデータの破損を修正しました (訳注: 設定ファイルを書き出す際にデータが破損する可能性があったのを修正しました)
* <!-- core: attach: Fix querying for the current personality. -->core: attach: 現在のパーソナリティ (personality) の問い合わせができていなかったのを修正しました
* <!-- core: cgmanager: Have cgm_set and cgm_get use absolute
             paths when possible. -->core: cgmanager: cgm_set と cgm_get は可能であれば絶対パスを使います (訳注: 非特権コンテナを起動したログインセッションと別のセッションから lxc-info, lxc-cgroup を実行できるようになりました)
* <!-- core: cgmanager: Make sure @value is null-terminated in
             cgm_get. -->core: cgmanager: cgm_get 内で @value が確実に NULL で終わるようにしました
* <!-- core: optimization of signal filtering/parsing code. -->core: cgmanager: シグナルのフィルタリング・パース部分のコードの最適化を行いました
* <!-- core: apparmor: Allow hugetlbfs by default (similar to
             tmpfs and restricted by the hugetlb cgroup controller). -->core: apparmor: デフォルトで hugetlbfs を使えるようにしました (tmpfs と同様に hugetlb cgroup コントローラの使用が制限されていました)
* <!-- core: Fix find_fstype_cb to ignore blank lines and
             comments. -->find_fstype_db が空白行とコメント行を無視するようになりました (訳注: fstab ファイルで空白とコメント行が無視できるようになりました)
* <!-- lxc-autostart: Actually respect -P when passed. -->lxc-autostart: -P が与えられた場合、適切に扱うようになりました (訳注: -P はログの設定にのみ使い、コンテナリストの取得には使わなくなりました)
* <!-- lxc-attach: Fix typo in usage. -->lxc-attach: 使い方の typo を修正しました
* <!-- lxc-start: propagate the container exit code. -->lxc-start: コンテナの終了コードを取得できるようにしました
* <!-- lxc-stop: Fix incorrect timeout handling. -->lxc-stop: 不適切なタイムアウトの扱いを修正しました
* <!-- lxc-device: Support --version. -->lxc-device: --version オプションをサポートしました
* <!-- lxc-ls: Support --version. -->lxc-ls: --version オプションをサポートしました
* <!-- lxc-start-ephemeral: Support --version. -->lxc-start-ephemeral: --version オプションをサポートしました
* <!-- tests: Avoid the download template when possible. -->tests: 可能な限りダウンロードテンプレートを使わないようにしました
* <!-- tests: Don't fail when HOME isn't defined. -->HOME が定義されていないとき失敗しなくなりました
* <!-- tests: apparmor: Always end messages with a newline. -->tests: apparmor: 常に newline を付けた終了メッセージが出力されるようにしました
* <!-- tests: Clarify error message and fix return codes. -->tests: エラーメッセージを明確にし、リターンコードを修正しました
* <!-- tests: lxc-test-ubuntu doesn't actually need bind9-host. -->tests: lxc-test-ubuntu は bind9-host を必要としなくなりました
* <!-- lxc-debian: standardize formatting. -->lxc-debian: コード表記の統一化
* <!-- lxc-debian: fix formatting. -->lxc-debian: コード表記の修正
* <!-- python3: Fix attach_wait and threads. -->python3: attach_wait とスレッドを修正しました

<!-- Those stable fixes were brought to you by 11 individual
        contributors. -->これらの stable の修正は 11 名のコントリビュータによってなされました。

### <!-- Downloads -->ダウンロード
<!-- The release tarballs may be found on our
        [download page</a> and we expect most
        distributions will very soon ship a packaged version of LXC 1.0.5. -->
  このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。
  そして、各ディストリビューションがすぐに LXC 1.0.5 のパッケージをリリースするでしょう。


<!-- Should you be interested in individual changes or just
        looking at the detailed development history, our stable branch is
        on <a href="https://github.com/lxc/lxc/tree/stable-1.0">Github</a>. -->
  個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable ブランチは <a href="https://github.com/lxc/lxc/tree/stable-1.0">Github</a> にあります。



## <!-- LXC 1.0.4 release announcement13th of June 2014 -->LXC 1.0.4 リリースのお知らせ<span class="text-muted">2014 年 6 月 13 日</span>

<!-- This is the fourth bugfix release for the LXC 1.0 series. -->このリリースは LXC 1.0 シリーズの 4 回目のバグフィックスとなるリリースです。

### <!-- Changes -->変更点

  
* <!-- core: Don't call nih_dbus_setup for cgmanager as it's
             only relevant when using a nih main loop, which we're not. -->core: cgmanager に対して nih_dbus_setup を呼ばないようにしました。これはnihのメインループを使うときだけ使うのが適切なものでしたが、lxc では使っていないためです。
* <!-- core: Fix uncheck realloc in lxc_info. (found by cppcheck) -->core: lxc_infoでreallocのチェックをしていなかったのを修正しました。(cppcheckで発見)
* <!-- core: At startup, manually mark every shared mount entry
             as slave. -->core: スタートアップ時、全ての shared mount のエントリごとに slave のマークをつけるようにしました。
* <!-- core: Check for pre-existing /dev symlinks before
             attempting to create them. -->core: /devに作成するシンボリックリンクについて、作成前にすでに存在しているかどうかをチェックするようにしました。
* <!-- core: Fix fd leak. (found by coverity). -->core: fdのリークを修正しました。(coverityで発見)
* <!-- core: Allow all iX86 strings for lxc.arch. -->core: lxc.archに設定する、文字列として全てのiX86が使用できるようになりました。(訳注: 'linux32', 'i386', 'i486', 'i586', 'athlon', 'linux64' が認識されるようになっています)
* <!-- core: Fix building using clang 3.4. -->core: clang 3.4を使ってビルドするときの問題を修正しました。
* <!-- core: Fix minor typo in .gitignore. -->core: 小さな .gitignore の typo を修正しました。
* <!-- core: Add missing MAX_STACK_DEPTH define on
             MUTEX_DEBUGGING builds. -->core: MUTEX_DEBUGGING時のビルドでのMAX_STACK_DEPTHの定義が抜けていたので追加しました。
* <!-- core: Don't mount /sys/fs/cgroup readonly as this breaks
             at least mountall. -->core: mountall コマンドで問題が生じるので /sys/fs/cgroup を読み込み専用でマウントするのをやめました。
* <!-- core: Factor out capability parsing logic. -->core: ケーパビリティをパースするロジックの共通部分を抜き出して一つの共通関数にしました。
* <!-- core: Tweak the default values of lxc.mount.auto for the
             cgroup and cgroup-full keys to adapt themselves
             depending on whether CAP_SYS_ADMIN has been dropped or
             not. -->core: lxc.mount.auto の cgroup と cgroup-full を指定した場合のデフォルト値を調整しました。これは CAP_SYS_ADMIN を保持しているかそうでないかによって選択されます。
* <!-- core: Support unprivileged create, clone and destroy
             with btrfs. -->core: btrfs を使っている時の、非特権でのコンテナの作成、クローン、消去をサポートしました。
* <!-- core: Support named subsystems with cgmanager. -->core: cgmanager で名前付きのサブシステムをサポートしました。
* <!-- core: Use absolute cgroup paths to switch cgroups at
             attach with cgmanager. This allows for unprivileged
             lxc-attach across user sessions of the same user. -->core: cgmanager に接続した際、cgroup の絶対パスを使用し cgroups を変更するようにしました。これにより同じユーザーのユーザーセッションをまたいだ非特権 lxc-attach が可能になります。(訳注: lxc-cgroup コマンドも同様です)
* <!-- core: Detect whether cgmanager supports name= subsystems. -->core: cgmanager が name= 指定のサブシステムをサポートしているかどうかを検出するようになりました。
* <!-- core: Use the same ifndef/define format for all headers. -->core: 全てのヘッダファイルでの ifndef/define のフォーマットを統一しました。
* <!-- core: Fix bashism in lxc-devsetup. -->core: lxc-devsetup での bashism (bash特有の機能) を修正しました。
* <!-- core: Fix a null check after dereference (identified by
             coverity). -->ポインタの値を参照した後の null チェックの修正を行いました (coverity で検出) 
* <!-- core: Export bdev_specs so that API users can actually use the
             functions taking it as an argument. -->core: bdev_specs 構造体を export しました。これにより API を使う場合に引数として関数で使うことができるようになりました。
* <!-- core: Don't destroy the container until we've made sure
             the requested snapshot actually exists. -->core: 要求されたスナップショットが実際に存在することを確認するまでは、コンテナを消去しないようにしました。(訳注: lxc-snapshot でスナップショットからコンテナをリストアするとき、リストアするコンテナ名を指定しないとスナップショット元のコンテナを破壊してからリストアを行っていましたが、存在しないスナップショット名を指定してもチェックなしに元のコンテナを破壊してしまっていたので、それを修正しました)
* <!-- core: Retrieve the container personality over the
             command interface rather than through /proc. This is
             required for unprivileged containers attach on the 3.15 kernel
             and higher as access to /proc/$$/personality is now
             restricted to root. -->core: コンテナの personality を /proc 以下からでなく、コマンドインターフェース (訳注: lxc内部の関数によるインターフェースです) から取得するようにしました。これは 3.15 以上のカーネルで /proc/$$/personality へのアクセスが root に制限されたため、非特権コンテナへの attach に必要になりました。
* <!-- core: Fix invalid signal number comparison. -->core: シグナル番号の不適切な比較を修正しました。
* <!-- core: Don't let -lcgmanager end up in LIBS. -->core: -lcgmanger が LIBS 変数に入らないようにしました。(訳注: configure.ac の変更。cgmanager 内の関数の有無をチェックしたいだけなのに LIBS の中に -lcgmanager が入ってしまい、不要なリンクがされてしまうのを防いでいます。)
* <!-- core: Correct invalid log message when keeping
             capabilities. -->core: ケーパビリティを保持している時の誤ったログメッセージを修正しました。
* <!-- core: Fix a crash when attempting to snapshot an invalid
             container. -->core: 不正なコンテナのスナップショットを取得しようとした際にクラッシュしないよう修正しました。
* <!-- core: Make it possible for unprivileged containers
             started by root to mount block devices. -->core: root により開始された非特権コンテナに、ブロックデバイスを mount 可能にしました。
* <!-- core: Improve startup failure mode to hide irrelevant
             error messages and suggest how to debug the failure. -->core: コンテナの開始に失敗した際の不適切なエラーメッセージを隠し、失敗をデバッグする方法を提案するようにしました。
* <!-- core: Validate start hooks path before startup. -->core: コンテナの開始前に start hooks (訳注: lxc.hook.start) で指定されたプログラムの path を検証するようにしました。
* <!-- core: Log the whole cgroup path on failure. -->core: failure 時に cgroup パス全体をログするようにしました。
* <!-- apparmor: Allow writes to sem* and msg*. sysctls -->apparmor: sem* と msg* sysctls への書き込みを許可するよう変更しました。
* <!-- doc: Fix typo in lxc-clone man page. -->doc: lxc-clone man ページ中の typo を修正しました。
* <!-- doc: Fix puncation marks in Japanese man pages. -->doc: 日本語 man ページの句読点を変更しました。(訳注: 'fix' というわけではありません。今までは句読点は「，．」(マルチバイトのカンマ、ピリオド) を使っていましたが、一般的な「、。」に変更しました。)
* <!-- doc: Fix typo in lxc-ls manpage. -->doc: lxc-ls man ページの typo を修正しました。
* <!-- doc: Correct license on some files and fix FSF address. -->doc: いくつかのファイルでライセンスを訂正し、FSF のアドレスを修正しました。
* <!-- doc: Document lxc.mount.entry relative target. -->doc: lxc.mount.entry での相対パスでの記述に関する説明を載せました。
* <!-- doc: Remove TODO file with old items. -->doc: 古い項目が含まれていた TODO ファイルを削除しました。
* <!-- doc: Fix reference to renamed manpage. -->doc: リネームされた man ページへの参照を修正しました。
* <!-- doc: Update japanese documentation to be in sync with
             the english one. -->doc: 英語 man ページと同期が取れていなかった部分を更新しました。
* lxc-autostart: (訳注: master branch でなされた) autoboot/autostart の変更をバックポートしました。 <br/>
      これは少なくとも systemd システムにて autostart 問題を解決するために必要となります。 この変更により、-g オプションにおける NULL group サポートが追加されました。（group name がない場合にコンマとして認識されます） 新しい特別な "onboot" group を追加し、init scripts (sysvinit, systemd と upstart) が NULL と onboot group 両方を開始するようにセットしました。<br/>
      これは boot 時に自動的に開始されない "onboot" group を既に利用していない限り、既存のユーザーに見える変更はありません。
* <!-- lxc-create: Make "none" bdev type work as documented. -->lxc-create: "none" bdev type がドキュメント通りに動作するようにしました。
* <!-- lxc-execute: Fix a memory leak on the exit path. -->lxc-execute: exit する際のメモリリークを修正しました。
* <!-- lxc-ls: Fix running against nested containers without
             python support. -->lxc-ls: ネストされたコンテナーに対して python のサポートがなくても動作するように修正しました。
* <!-- lxc-user-nic: Don't crash on missing bridge. -->lxc-user-nic: ブリッジが無くてもクラッシュしないようにしました。
* <!-- alpine template: Set correct lxc_arch for x86. -->alpine template: x86 に対して正しい lxc_arch を設定するようにしました。
* <!-- archlinux template: Add sigpwr handler. -->archlinux template: sigpwr ハンドラーを追加しました。
* <!-- archlinux template: Fix lxc.root for btrfs backend. -->archlinux template: lxc.root を btrfs backend のために修正しました。
* <!-- download template: Retry the GPG setup step 3 times. -->download template: GPG セットアップを３回再試行するようにしました。
* <!-- fedora template: Correct some systemd target setups. -->fedora template: systemd target のセットアップをいくつか修正しました。
* <!-- oracle template: Use db_load from inside the container. -->oracle template: コンテナ内から db_load を使用するようにしました。
* <!-- oracle template: Fix warnings/errors from some rpm
             scriptlets. -->oracle template: いくつかの rpm scriptlets の warnings/errors を修正しました。
* <!-- oracle template: Fix lxc-patch.py to be 644 (fixes
             rpmlint warning). -->oracle template: lxc-patch.py を 644 に変更しました。（rpmlintの警告が修正されます）
* <!-- oracle template: Add pts/[1-4] to securetty for
             libvirt-lxc. -->oracle template: libvirt-lxc 用に securetty に pts/[1-4] を追加するようにしました。
* <!-- oracle template: Set the hostname on systemd systems. -->oracle template: systemd システムで hostname をセットするようにしました。
* <!-- oracle template: Fix ssh login under libvirt-lxc. -->oracle template: libvirt-lxc 環境での ssh ログインに失敗するのを修正しました。
* <!-- plamo template: Don't attempt to configure wireless
             interfaces. -->plamo template: ワイヤレスインターフェースを設定しようとしないように変更しました。
* <!-- sshd template: Use correct lxc-init path. -->sshd template: 正しい lxc-init パスを使用するようにしました。
* <!-- python3: Slight tweaks to the .py files to work with the
             unofficial python2.7 binding. -->python3: 非公式の python2.7 binding でも動作するよう、.py ファイルに若干の変更を加えました。
* <!-- python3: Don't fail network test if hwaddr isn't set by
             the template. -->python3: hwaddr がテンプレートでセットされなくてもネットワークテストが失敗しないようにしました。
* <!-- python3: Don't require a template name be passed to
             create(). -->python3: create() に template name が渡されることを必須としないようにしました。
* <!-- python3: Don't crash on invalid global config keys. -->python3: 不正な global 設定キーでクラッシュしないように修正しました。
* <!-- python3: Fix crash in snapshot(). -->python3: snapshot() でクラッシュしないように修正しました。
* <!-- tests: Make sure we join all the right cgroups. -->tests: 全ての正しい cgroups に join する事を確認するようにしました。
* <!-- tests: Workaround race condition in lxc-test-autostart. -->tests: lxc-test-autostart 中の競合発生をワークアラウンドしました。

<!-- Those stable fixes were brought to you by 14 individual
        contributors. -->これらの stable の修正は 14 名のコントリビュータによってなされました。

### <!-- Downloads -->ダウンロード
<!-- The release tarballs may be found on our
        [download page</a> and we expect most
        distributions will very soon ship a packaged version of LXC 1.0.4. -->
  このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。
  そして、各ディストリビューションがすぐに LXC 1.0.4 のパッケージをリリースするでしょう。


<!-- Should you be interested in individual changes or just
        looking at the detailed development history, our stable branch is
        on <a href="https://github.com/lxc/lxc/tree/stable-1.0">Github</a>. -->
  個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable ブランチは <a href="https://github.com/lxc/lxc/tree/stable-1.0">Github</a> にあります。



## <!-- LXC 1.0.3 release announcement8th of April 2014 -->LXC 1.0.3 リリースのお知らせ<span class="text-muted">2014 年 4 月 8 日</span>

<!-- This is the third bugfix release for the LXC 1.0 series. -->このリリースは LXC 1.0 シリーズの 3 回目のバグフィックスとなるリリースです。

### <!-- Changes -->変更点

  
* <!-- core: Always initialize netpipe in lxc_spawn. -->core: lxc_spawn 中で常に netpipe を初期化するようにしました (訳注: 非特権コンテナのリブート時に存在しないパイプに対してメッセージを送ることのないように lxc_spawn 中でパイプを初期化するように修正されています)
* <!-- core: Move lxc-monitord.log to LOGPATH instead of LXCPATH. -->core: lxc-monitord.log が LXCPATH でなく LOGPATH に出力されるようになりました
* <!-- core: Make monitord more resilient to unexpected
             termination. -->core: monitord の予期しない終了に対してより適切に対応するようにしました
* <!-- core: Move lxc-init to /sbin/init.lxc instead of the
             architecture/distro specific multiarch path. Use path
             lookup to find it in the container rather than using an
             hardcoded path. -->core: lxc-init をアーキテクチャやディストリビューション依存のパスから /sbin/init.lxc へ移動しました。
      init.lxc をコンテナ内で見つけるときは、ハードコードされたパスではなく、$PATH を使って見つけます。
* <!-- core: Set macvlan default mode to private. -->core: macvlan のデフォルトモードを private にしました
* <!-- core: Check whether rootfs is shared before running the
             pre-mount hooks. -->core: pre-mount hook を走らせる前に rootfs が shared でマウントされているかを確認するようにしました
* <!-- apparmor: Update the profiles for current upstream
             apparmor. This includes tweak to the pivot_root targets
             and the addition of the ptrace and signal stanzas. Users
             of older apparmor versions may want to comment the dbus,
             ptrace and signal stanzas if the parser fails to parse
             the profile. -->apparmor: 現時点の upstream の apparmor に対応したプロファイルに更新しました。
      古い apparmor のユーザは、パーサーがプロファイルのパースに失敗した場合、dbus, ptrace, signal の stanza をコメントにしても問題ありません
* <!-- apparmor: Use an intermediary profile which allows for
             easier generation of complex rules. This discovered a
             few problems with the existing profile which has now
             been fixed. Most of /proc/sys is now properly blocked
             with exceptions for kernel/shm/*, net/*,
             kernel/domainname and kernel/hostname. -->apparmor: 複雑なルールをより簡単に生成できるように中間プロファイルを使うようにしました。
      これにより既存のプロファイルにいくつか問題が見つかり、それを修正しました。
      /proc/sys のほとんどは kernel/shm/, net/, kernel/domainname, kernel/hostname に対する例外で適切にブロックされるようになりました。
* <!-- apparmor: block cgroupfs by default in the with-nesting
             profile, users should now be using cgmanager which
             doesn't required this. -->apparmor: ネスティング時のプロファイルでデフォルトでは cgroupfs をブロックするようにしました。
      ユーザは今後 cgroupfs のマウントが不要な cgmanager を使用するべきです
* <!-- cgmanager: Fix a small cgm_get bug when len == 0. -->cgmanager: len == 0 の時発生する cgm_get のバグを修正しました
* <!-- lxc-info: Don't print duplicate lines. -->lxc-info: 重複する行を表示しないようにしました
* <!-- sysvinit script: Fix wait_for_bridge to better parse
             default.conf -->sysvinit script: より適切に default.conf をパースするように wait_for_bridge を修正しました
* <!-- tools: Don't exit -1, instead use more conventional and
             consistent exit codes 0 on success, 1 on failure with
             some (now documented) exceptions for lxc-start. -->tools: -1 での exit をやめ、一部例外を除き (ドキュメント化されています)、より一般的かつ一貫した exit code の 0 （成功時）と 1（失敗時）を利用するよう変更しました (訳注: 原文では "for lxc-start" とあり、lxc-start に対して一般的で一貫した exit code を採用した事になっていますが、別に lxc-start 以外の lxc-* にも同様の修正が加えられており、例外は lxc-stop に存在するので、上記のような訳としました)
* <!-- archlinux template: Add debugging info for missing
             network link. -->archlinux template: network link が存在しない場合のデバッグ情報を追加しました
* <!-- archlinux template: Various fixes and cleanups. -->archlinux template: 色々な修正とクリーンアップを行いました
* <!-- centos template: Properly set lxc.arch. -->centos template: lxc.arch を適切に設定するようにしました
* <!-- download template: Make it a bit more resilient to
             download failures. -->download template: ダウンロードの失敗を少し適切に処理するようにしました (訳注: ダウンロードに使う wget のタイムアウト値を 30 秒に設定しています)
* <!-- fedora template: Properly set lxc.arch. -->fedora template: lxc.arch を適切に設定するようにしました
* <!-- gentoo template: Make sure sshd is started. -->gentoo template: sshd が起動したのを確認するようにしました
* <!-- gentoo template: Fix lack of generated locales. -->gentoo template: locale が生成されるようにしました
* <!-- gentoo template: Fix lxc-console by setting up a tty. -->gentoo template: lxc-console がきちんと動作するように tty の設定を行うようにしました
* <!-- oracle template: Fix upgrade problems by introducing a
             patch script that's run on upgrade. -->oracle template: upgrade時に実行されるパッチスクリプトを追加する事によりupdate時の問題を修正しました
* <!-- tests: Add a test for the apparmor profiles. -->tests: apparmorプロファイルのテストを追加しました
* <!-- tests: Bump timeouts to fix occasional failures on slow
             ARM builders. -->tests: 遅い ARM での失敗のケースの修正としてタイムアウト値を増やしました
* <!-- tests: Always propagate http_proxy and https_proxy. -->tests: 常に http_proxy と https_proxy の値を使用するようにしました
  


### <!-- Downloads -->ダウンロード
<!-- The release tarballs may be found on our
        [download page</a> and we expect most
        distributions will very soon ship a packaged version of LXC 1.0.3. -->
  このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。
  そして、各ディストリビューションがすぐに LXC 1.0.3 のパッケージをリリースするでしょう。


<!-- Should you be interested in individual changes or just
        looking at the detailed development history, our stable branch is
        on <a href="https://github.com/lxc/lxc/tree/stable-1.0">Github</a>. -->
  個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable ブランチは <a href="https://github.com/lxc/lxc/tree/stable-1.0">Github</a> にあります。




## <!-- LXC 1.0.2 release announcement27th of March 2014 -->LXC 1.0.2 リリースのお知らせ<span class="text-muted">2014 年 3 月 27 日</span>

<!-- This is the second bugfix release for the LXC 1.0 series. -->このリリースは LXC 1.0 シリーズの 2 回目のバグフィックスとなるリリースです。

### <!-- Changes -->変更点

  
* <!-- core: Fix parsing lxc.netwotk.type = none -->core: lxc.network.type = none を指定した場合の不具合を修正しました
* <!-- core: Fix race on shutdown causing SIGPIPE being sent to
             the caller -->core: シャットダウン時にコマンドの呼び出し元に SIGPIPE が送られないように修正しました
* <!-- core: Attempt to move back all "phys" NICs on shutdown -->core: シャットダウン時に全ての "phys" で指定された NIC をホストに戻すようにしました
* <!-- core: fix stdin,stdout,stderr fds to use the container's
             own -->core: stdin,stdout,stderr fds に関し、コンテナ自身のものを使用するように修正しました
* <!-- core: Fix typo in newgidmap check -->core: newgidmap コマンドの存在チェックがきちんとなされるように修正しました
* <!-- core: Fix {get|clear}_config_item with lxc.mount.auto -->core: {get|clear}_config_item で lxc.mount.auto の情報を扱えるようにしました
* <!-- core: Fix a leak of netnsfd -->core: netns(ネットワーク名前空間)のファイルディスクリプタのリークを修正しました
* <!-- core: Don't trigger SYSERROR for optional mounts -->core: オプショナルなマウントの際に SYSERROR が発生しないようにしました
* <!-- cgmanager: Mutex cgmanager access to avoid races,
             corruptions and crashes when using threads. -->cgmanager: スレッド使用時の競合、データ破損、クラッシュを防ぐために mutex を使って cgmanager へのアクセスを行うようにしました
* <!-- cgmanager: Make failure to connect to the daemon a DEBUG
             instead of ERROR (as we fallback to cgfs in that case) -->cgmanager: デーモンへの接続が失敗した時は ERROR でなく DEBUG を使用するようにしました (失敗の場合 cgfs へのフォールバックを行うので)
* <!-- cgmanager: Avoid stray dbus connection -->cgmanager: 使われなくなった dbus コネクションが残らないようにしました
* <!-- cgmanager: Don't attempt to delete invalid cgroups -->cgmanager: cgroup のパスが正しくないとき、消去処理を実行しないようにしました
* <!-- lxc-ls: Performance optimization for nesting -->lxc-ls: コンテナがネストしている場合のパフォーマンスを最適化しました
* <!-- lxc-ls: Fix memory reporting when swap is enabled -->lxc-ls: スワップ (memory cgroup の swap 制限機能) が有効な場合の表示の不具合を修正しました
* <!-- lxc-ls: Update help to contain all supports columns -->lxc-ls: サポートしているカラム全てをヘルプで表示させるようにしました
* <!-- man: Update lxc-create manpage to cover the "best"
             backing store -->man: lxc-create manpage でバッキングストアの指定 "best" の説明を追加しました
* <!-- man: Update lxc-autostart to document -a and -g -->man: lxc-autostart の manpage に -a と -g の説明を追加しました
* <!-- tests: Don't hardcode the cgroup list -->tests: cgroup リストのハードコードをやめました
* <!-- tests: Daemonize in startone (silences the test) -->tests: startone でデーモン化を行うようにしました (テストが静かになります)
* <!-- tests: Support running solely with cgmanager -->tests: cgmanager だけが実行されている時のテストをサポートしました
* <!-- tests: Use busybox when possible (speeds up tests) -->tests: busybox が使用可能な場合は使うようにしました (テストのスピードアップのため)
* <!-- tests: Fix fd leak in test-concurent -->tests: test-concurent でのファイルディスクリプタのリークを修正しました
* <!-- templates: Update to consistent userns device list -->templates: userns を使ったコンテナで共通して (bind マウントして) 使用するデバイスのリストを更新しました
* <!-- busybox template: Don't fail when busybox is a symlink -->busybox template: busybox がシンボリックリンクの場合も失敗しないようにしました
* <!-- centos template: Shutdown on SIGPWR -->centos template: SIGPWR を受け取った時にシャットダウンするようにしました
* <!-- centos template: Use a sane default for localtime -->centos template: 適切なデフォルトの localtime を使うようにしました
* <!-- debian template: Symlink /etc/mtab to /proc/mounts -->debian template: /etc/mtab を /proc/mounts へのシンボリックリンクにしました
* <!-- debian template: Don't eat the argument after -c -->debian template: -c オプションの後の引数を -c で処理しないようにしました
* <!-- fedora template: Shutdown on SIGPWR -->fedora template: SIGPWR を受け取った時にシャットダウンするようにしました
* <!-- fedora template: Use a sane default for localtime -->fedora template: 適切なデフォルトの localtime を使うようにしました
* <!-- fedora template: Fix building i686 containers on x86_64 -->fedora template: x86_64 環境上での i686 コンテナの作成時の不具合を修正しました
* <!-- opensuse template: Fix syntax error -->opensuse template: 文法エラーを修正しました
  


### <!-- Downloads -->ダウンロード
<!-- The release tarballs may be found on our
        [download page</a> and we expect most
        distributions will very soon ship a packaged version of LXC 1.0.2. -->
  このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。
  そして、各ディストリビューションがすぐに LXC 1.0.2 のパッケージをリリースするでしょう。


<!-- Should you be interested in individual changes or just
        looking at the detailed development history, our stable branch is
        on <a href="https://github.com/lxc/lxc/tree/stable-1.0">Github</a>. -->
  個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable ブランチは <a href="https://github.com/lxc/lxc/tree/stable-1.0">Github</a> にあります。



## <!-- LXC 1.0.1 release announcement6th of March 2014 -->LXC 1.0.1 リリースのお知らせ<span class="text-muted">2014 年 3 月 6 日</span>

<!-- This is the first bugfix release for the LXC 1.0 series. -->このリリースは LXC 1.0 シリーズの最初のバグフィックスとなるリリースです。

### <!-- Changes -->変更点

  
* <!-- core: Detect the use of rshared / and properly work
             around it. This fixes LXC on systemd systems where the mount
             table would be duplicated in the container and
             lxc-attach wouldn't attach to the container's rootfs. -->
      core: / が rshared でマークされているのを検出し、正しく動作するようになりました。
      これは systemd が使われているシステム上で LXC を使う場合、マウントテーブルがコンテナ内で重複してしまう問題と、lxc-attach がコンテナの rootfs にアタッチできない問題を修正します。
* <!-- core: Don't crash on invalid lxc.id_map -->
      core: 正しくない形式の lxc.id_map でクラッシュする問題を修正しました
* <!-- core: Fix attaching when extra cgroups were setup
             after the container started -->
      core: コンテナが開始した後に更に cgroup を作成する時の問題を修正しました
* <!-- core: Fix crash when rebooting container with phys
             interfaces -->
      core: phys インターフェースを持つコンテナがリブート時にクラッシュする問題を修正しました
* <!-- core: Better detect and report permission problems -->
      core: パーミッションの問題の検出とレポートを改良しました
* <!-- core: Use common code for any unprivileged action, using
             newuidmap/newgidmap if available and only falling back
             to straight writes to uid_map/gid_map if they're not and
             the user is root -->
      core: 特権のない場合の操作を共通のコードを使うように変更しました。
      これは newuidmap/newgidmap コマンドが使用可能な場合はそれを使用し、もし使用出来ない場合は root の時のみ uid_map/gid_map へ直接書き込みを行うようになっています。
* <!-- core: Fix btrfs snapshot restore -->
      core: btrfs スナップショットのリストアの問題を修正しました
* <!-- core: Fix race in the cloning code potentially leading
             to data loss -->
      core: クローンの際にデータロスにつながる可能性があったのを修正しました
* <!-- core: Don't double-map the root uid/gid -->
      core: コンテナの root ユーザをユーザのホスト上の uid/gid にマッピングしている場合に、2 度同じマッピングを行おうとする問題を修正しました
* <!-- core: Fix snapshot restore for overlayfs -->
      core: overlayfs 上に存在するコンテナのスナップショットのリストア時の問題を修正しました
* <!-- core: Put logging variables in TLS -->
      core: ログに使用する変数を TLS (訳注: スレッド局所記憶) 中に置くようにしました
* <!-- apparmor: Stop using on-exec for profile changes as it's
             been proven unreliable on overlayfs at least -->
      apparmor: プロファイルの変更に onexec を使用するのをやめました。
      これは少なくとも overlayfs 上では信頼できないことが証明されています
* <!-- bash completion: Remove wrong shebang -->
      bash completion: 間違った shebang を削除しました
* <!-- cgmanager: Don't keep an active connection after
             container start -->
      cgmanager: コンテナの開始後、アクティブな接続を維持しないようにしました
* <!-- cgmanager: Fix to work with threads -->
      cgmanager: スレッドでも動作するように修正しました
* <!-- doc: Update README -->
      README の更新
* <!-- lua: Respect --prefix -->
      lua: --prefix で指定したディレクトリ以下に lua のファイルをインストールするようにしました
* <!-- lxc-create: Fix the dir backend to actually respect &#045;&#045;dir -->
      lxc-create: dir バックエンド使用時に --dir オプションが有効になるように修正しました
* <!-- lxc-device: Properly support wlan devices -->
      lxc-device: wlan デバイスを正しく扱うようになりました
* <!-- lxc-ls: Fix --nesting function to work with unprivileged
             containers -->
      lxc-ls: --nesting オプションが非特権コンテナでも動作するように修正しました
* <!-- lxc-start-ephemeral: Set the tmpfs as 0755 instead of 0777 -->
      lxc-start-ephemeral: tmpfs のパーミッションを 0777 の代わりに 0755 に設定するようにしました
* <!-- python3: Export missing get_global_config_item function -->
      python3: get_global_config_item 関数が export されるように修正しました
* <!-- seccomp: Catch violations by init -->
      seccomp: init がキャッチした seccomp ポリシーの侵害をキャッチできるようになりました
* <!-- systemd: Fix unit file location -->
      systemd: 正しい場所に unit ファイルが置かれるように修正しました
* <!-- templates: Detect system containers inside
             unprivileged containers (lxc-download)-->
      templates: 非特権コンテナ内のシステムコンテナを検出するようになりました (lxc-download)
* <!-- tests: Fix potential hang in lxc-test-concurent -->
      tests: lxc-test-concurrent 中に hang する可能性があったのを修正しました
* <!-- upstart: Don't forward requests for LXC_DOMAIN (dnsmasq) -->
      upstart: LXC_DOMAIN で指定されたものに対するリクエストを転送しなくなりました (dnsmasq)
  


### <!-- Downloads -->ダウンロード
<!-- The release tarballs may be found on our
        [download page</a> and we expect most
        distributions will very soon ship a packaged version of LXC 1.0.1. -->
  このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。
  そして、各ディストリビューションがすぐに LXC 1.0.1 のパッケージをリリースするでしょう。


<!-- Should you be interested in individual changes or just
        looking at the detailed development history, our stable branch is
        on <a href="https://github.com/lxc/lxc/tree/stable-1.0">Github</a>. -->
  個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable ブランチは <a href="https://github.com/lxc/lxc/tree/stable-1.0">Github</a> にあります。


## <!-- LXC 1.0.0 release announcement20th of February 2014 --> LXC 1.0.0 リリースのお知らせ<span class="text-muted">2014 年 2 月 20 日</span>

### <!-- Introduction -->はじめに
<!-- It's with great pleasure that the LXC team is announcing the
        release of LXC 1.0! -->
  LXC チームが LXC 1.0 のリリースをアナウンスできるのは大きな喜びです!


<!-- This release is a significant milestone for us as it marks the first
        release we consider to be production ready.  It features a
        wide variety of improvements to container security, a
        consistent set of tools, updated documentation and an API
        with multiple bindings. -->
  このリリースは、最初の安定版リリースとして位置づけられる重要な節目となるリリースです。コンテナのセキュリティ、ツールの一貫性、ドキュメントの更新、複数の言語に対するバインディングなど、広範囲に渡る改良を提供しています。


<!-- Over 60 people contributed their time to this release, making
        it the best LXC release yet!  The result of all that work can
        be seen used in areas as diverse as individual laptops,
        cellphones and cloud instances.  And we are confident that
        with LXC 1.0, we will see LXC's usage expand even more and be used
        for a lot of new and exciting projects. -->
  60 名を超える人が貢献した、最高の LXC のリリースとなります! この成果は個人のラップトップから、携帯電話、クラウドインスタンスまで多様な分野で目にすることができるでしょう。そして、LXC 1.0 のリリースにより、LXC の利用が更に拡大し、多数の新しいエキサイティングなプロジェクトで利用される事を確信しています。


<!-- Should you be interested in individual changes or just
        looking at the detailed development history, our main repository is
        on <a href="https://github.com/lxc/lxc">Github</a>. -->
  どのような変更がされ、開発がどのように進んだのかをご覧になりたい場合は、メインリポジトリが <a href="https://github.com/lxc/lxc">Github</a> にあります。


### <!-- New features -->新機能について
<!-- LXC 1.0 is the result of 10 months of development and over a
        thousand commits, including a major rework of the way LXC is
        structured.  It's therefore near impossible to come up with a
        comprehensive list of changes in this release, however here are
        some highlights: -->
  LXC 1.0 は 10 ヶ月に及ぶ開発と、1000 を超えるコミットからなり、LXC の構造を広範囲に変更する作業を含みますので、このリリースの変更をまとめるのはほとんど不可能に近いですが、以下にハイライトをいくつかあげます:



* <!-- Support for fully unprivileged containers -->完全な非特権コンテナのサポート
* <!-- Public stable API (liblxc1) -->公開された stable な API (liblxc1)
* <!-- Official API bindings for lua and python3 (in tree) -->lua と python3 に対する公式の API バインディング (ツリーに含まれます)
* <!-- Official API bindings for
           <a href="https://github.com/lxc/go-lxc">Go</a> and
           <a href="https://github.com/lxc/ruby-lxc">ruby</a>
           (out of tree) -->
    <a href="https://github.com/lxc/go-lxc">Go</a>
    と
    <a href="https://github.com/lxc/ruby-lxc">ruby</a>
    に対する公式 API バインディング (ソースツリー外)
    　
* <!-- Flexible backingstore system with support for: -->以下をサポートする柔軟なバッキングストアシステム:
    * standard directories (default)
    * btrfs
    * zfs
    * lvm
    * loop devices
    * aufs
    * overlayfs
* <!-- Support for cloning and snapshotting containers -->コンテナのクローンとスナップショットのサポート
* <!-- A reduced but more complete set of command line tools -->不要なコマンドを整理しつつ、より充実したコマンドラインツール
* <!-- Updated, more complete documentation -->更新され、より充実したドキュメント
* <!-- A new way of creating containers based on centrally
           generated images -->あらかじめ生成されたイメージを元にしたコンテナの新しい作成方法
* <!-- Templates letting you create containers running most
           popular distributions -->人気のあるディストリビューションが動作するコンテナを作成できるテンプレート


<!-- A series of blog posts introducing you to LXC and highlighting
        some of LXC 1.0's new features may be found
        <a href="https://www.stgraber.org/2013/12/20/lxc-1-0-blog-post-series/">here</a>. -->
  LXC の紹介と、1.0 の新機能のいくつかにハイライトを当てたブログ記事のシリーズが <a href="https://www.stgraber.org/2013/12/20/lxc-1-0-blog-post-series/">こちら</a> で公開されています。



### <!-- LXC 1.0 moving forward -->
<!-- LXC 1.0 is the first production ready release of LXC and it
        comes with a commitment from upstream to maintain it until at
        least Ubuntu 14.04 LTS reaches end of life in April 2019.
        That's slightly over 5 years of support! -->
  LXC 1.0 は最初の安定版リリースであり、少なくとも Ubuntu 14.04LTS が EOL(end of life) に達する 2019 年 4 月までのメンテナンスが約束されます。5 年を少し超えるサポートですよ!


<!-- We will be maintaining a separate stable branch and will
        cherry-pick and backport fixes as appropriate.  It's expected
        that we will have frequent bugfix releases of 1.0 so
        distributions can simply use those and save themselves the
        trouble of having to manually follow our stable branch. -->
  stable ブランチは別に管理され、必要に応じてバックポートされます。頻繁に 1.0 のバグフィックス版を出す予定なので、各ディストリビューションは単純にそれを使用すれば良く、stable ブランチを自身でフォローする手間を省くことができます。


### <!-- Bug reports and contact information -->バグレポートと連絡先
<!-- Bug reports should be filed on
        <a href="https://github.com/lxc/lxc/issues">Github</a>
        or if you do not wish to create an account, by e-mail to the
        appropriate
        <a href="https://lists.linuxcontainers.org"> mailing-list</a>.
        The same goes for your patches. We tend to prefer patches
        sent to lxc-devel but we also accept pull request directly on
        Github. -->
  バグレポートは <a href="https://github.com/lxc/lxc/issues">Github</a> に提出するようにおねがいします。Github のアカウントを作成したくない場合は、メールで適切な <a href="https://lists.linuxcontainers.org">メーリングリスト</a> に送ってください。
  パッチについても同様です。どちらかというと lxc-devel メーリングリストに直接パッチを送ってもらえる方がうれしいですが、Github に直接 pull request を送ってもらっても受け付けます。


<!-- LXC 1.0 is also the first release after the change of project
        maintainers which occurred in September 2013. We'd like to thank
        Daniel Lezcano for all the great work and efforts he's put in
        LXC over the years and wish him the best of luck in his new
        projects! -->
  LXC 1.0 は、2013 年 9 月にプロジェクトのメンテナが変わってから最初のリリースでもあります。我々は Daniel Lezcano 氏の偉大な業績と、LXC に対する長年に渡る取り組みに感謝の意を表したいと思います。そして彼の新しいプロジェクトの成功を祈ります!


<!-- The current projects maintainers are
        <a href="https://s3hh.wordpress.com">Serge Hallyn</a>
        and <a href="https://www.stgraber.org">St&eacute;phane Graber</a>. -->
  現在のプロジェクトメンテナは <a href="https://s3hh.wordpress.com">Serge Hallyn</a>
  と <a href="https://www.stgraber.org">St&eacute;phane Graber</a> です。

