# News
## [LXC 3.0.1 リリースのお知らせ](https://discuss.linuxcontainers.org/t/lxc-3-0-1-has-been-released/1949)
<span class="text-muted">5th of June 2018</span>
### はじめに
<!--
The LXC team is pleased to announce the release of LXC 3.0.1!
-->
LXC チームは LXC 3.0.1 のリリースをおしらせできることをうれしく思います！

<!--
As a stable bugfix release, no major changes have been done, instead focusing on bugfixes and minor usability improvements.
-->
Stable に対するバグフィックスのためのリリースですので、大きな変更はありません。バグフィックスと細かな使い勝手の改良にフォーカスしています。

#### ハイライト <!-- Highlights -->

 * liblxc の様々な部分でスレッドセーフとなるように改良されました <!-- Improvement in thread safety of various part of liblxc -->
 * Coverity によって見つかった問題を多数修正しました <!-- Lots of bugfixes for issues identified by Coverity -->
 * seccomp の扱いに関していくつか改良が行われました。特に personality に関係する部分です <!-- Several improvements to Seccomp handling, especially related to personalities -->
 * GCC 8 をサポートしました <!-- Support for GCC 8 -->

#### バグフィックス <!-- Bugfixes -->(LXC)

 * tools: 初期化されていない変数を修正しました <!-- fix unitialized variable -->
 * storage: lvm fs の uuid 生成の問題を修正しました<!-- fix lvm fs uuid generation -->
 * lxc-oci: Cmd と Entrypoint のパースの問題を修正しました <!-- fix Cmd/Entrypoint parsing -->
 * lxc-oci: umoci コマンドの出力を減らしました <!-- make umoci less verbose -->
 * lxclock: スレッドセーフな `*_OFD_*` ロックを使うようにしました <!-- use thread-safe *_OFD_* fcntl() locks -->
 * locktests: テストスイートを修正しました <!-- fix test suite -->
 * conf: umount がホストに伝播しないようにしました <!-- ensure umounts don't propagate to host -->
 * doc: 日本語の lxc.container.conf(5) の翻訳を改良しました <!-- Tweak Japanese translation in lxc.container.conf(5) -->
 * lxc.init 内のシグナルの送出の問題を修正しました <!-- fix signal sending in lxc.init -->
 * rootfs pinning: NFS 上でピンファイルを隠しファイルにし、このファイルを削除しません <!-- On NFS, make file hidden but don't delete it -->
 * conf: テンポラリファイル作成の問題を修正しました <!-- fix temporary file creation -->
 * ringbuf: テンポラリファイル作成の問題を修正しました <!-- fix temporary file creation -->
 * static な libcap と shared な gnutls な場合のコンパイルの問題を修正しました <!-- Fix compilation with static libcap and shared gnutls -->
 * attach: 常に補助 (supplementary) グループを落とすようにしました <!-- always drop supplementary groups -->
 * lxc init: デッドコードを削除しました <!-- remove dead code -->
 * storage/rsync: エラー時にメモリを free するようにしました <!-- free memory on error -->
 * tools/utils: エラー時にメモリを free するようにしました <!-- free memory on error -->
 * lxc init: コーディングスタイルの変更を行いました <!-- coding style -->
 * utils: 古い glibc で `__NR_setns` がない場合は定義するようにしました <!-- define \_\_NR\_setns if missing on old glibcs -->
 * attach: 常に補助 (supplementary) グループを落とそうとするようにしました <!-- try to always drop supplementary groups -->
 * conf: エラー時には gid=5 オプションなしで devpts のマウントを試行するようにしました <!-- ret-try devpts mount without gid=5 on error -->
 * execute: root をマッピングしていないアプリケーションコンテナの問題を修正しました <!-- fix app containers without root mapping -->
 * conf: `run_script_argv()` 中のネットワークタイプのチェックの問題を修正しました <!-- fix net type checks in run\_script\_argv() -->
 * seccomp: アーキテクチャの反転を扱えるようにしました (訳注: カーネルとユーザスペースとコンテナの間での様々な32bit,64bitの組み合わせを扱えるようにした)
 * seccomp: すべてのエラーを扱うようにしました <!-- handle all errors -->
 * seccomp: 互換アーキテクチャの処理をクリーンアップしました <!-- cleanup compat architecture handling -->
 * seccomp: ロギングを改良しました <!-- improve logging -->
 * tools: `lxc-execute` の `-d/–daemonize` オプションの記載を man page に追加しました <!-- document -d/--daemonize for lxc-execute -->
 * seccomp: 機能と関係のない変更を行いました（訳注: 変数のリネーム） <!-- non-functional changes -->
 * seccomp: アーキテクチャの反転を扱えるようにしましたII <!-- handle arch inversion II -->
 * lxc-oci: ダウンロードディレクトリを `mkdir` するようにしました <!-- mkdir the download directory -->
 * do\_lxcapi\_create: `umask` をセットするようにしました <!-- set umask -->
 * lxc/tools/lxc\_monitor: `<stddef.h>` の include が欠けていたので追加しました <!-- include missing <stddef.h> -->
 * pam-cgfs: cgroup 階層を作る場合はシステムの umask を無視するようにしました <!-- ignore the system umask when creating the cgroup hierarchy -->
 * チェックポイント時の CRIU に action script を指定するようにしました <!-- Also pass action scripts to CRIU on checkpointing -->
 * `cgfsng_attach` 内のメモリリークを修正しました <!-- Fix the memory leak in cgfsng\_attach -->
 * `list_active_containers` 中のメモリリークを修正しました <!-- Fix memory leak in list\_active\_containers -->
 * `HAVE_SETNS` が設定されてない場合の `tool_utils.c` のビルドを修正しました <!-- Fix tool\_utils.c build when HAVE\_SETNS is unset -->
 * coverity: #1435210
 * coverity: #1435208
 * coverity: #1435207
 * coverity: #1435206
 * coverity: #1435205
 * coverity: #1435203
 * coverity: #1435200
 * coverity: #1435198
 * coverity: #1426734
 * lxccontainer: 機能と関係のない変更を行いました <!-- non-functional changes -->
 * lxccontainer: スレッドセーフな `*_OFD_*` ロックを使うようにしました <!-- use thread-safe *_OFD_* locks -->
 * lxccontainer: 機能と関係のない変更を行いました <!- non-functional changes -->
 * lxccontainer: do\_lxcapi\_is\_running()
 * lxccontainer: do\_lxcapi\_freeze()
 * lxccontainer: do\_lxcapi\_unfreeze()
 * lxccontainer: 機能と関係のない変更を行いました <!- non-functional changes -->
 * lxccontainer: スレッドセーフな open() + write() を使うようにしました <!-- use thread-safe open() + write() -->
 * lxccontainer: 機能と関係のない変更を行いました <!- non-functional changes -->
 * lxccontainer: 機能と関係のない変更を行いました <!- non-functional changes -->
 * lxccontainer: 機能と関係のない変更を行いました <!- non-functional changes -->
 * coverity: #1435263
 * execute ログファイルのロジックを修正しました <!-- fix logic for execute log file -->
 * utils: `LXC_PROC_PID_FD_LEN` を追加しました <!-- add LXC\_PROC\_PID\_FD\_LEN -->
 * execute: 静的なバッファを使うようにしました <!-- use static buffer -->
 * execute: 継承した fd を再チェックしないようにしました <!-- do not check inherited fds again -->
 * TRACE/ERROR ログをいくつか追加しました <!-- add some TRACE/ERROR reporting -->
 * execute: -o によるパスの指定の引数の数を正しくカウントするようにしました <!-- account for -o path option count -->
 * execute: 存在する init が見つかった時に `init_path` を設定するようにしました <!-- set init\_path when existing init is found -->
 * genl: 使わないソースファイルを削除しました <!-- remove -->
 * coverity: #1248104
 * coverity: #1248105 
 * coverity: #1425744
 * utils: 終端の `\0` バイトをきちんと扱うようにしました <!-- account for terminating \0 byte -->
 * confile: gcc-8 向けに調整を行いました <!-- confile: satisfy gcc-8 -->
 * network: gcc-8 向けに調整を行いました <!-- silence gcc-8 -->
 * network: 制限を IFNAMSIZ に合わせるようにしました <!-- adhere to IFNAMSIZ limit -->
 * 設定値で指定するサイズの単位は大文字小文字を区別しなくなりました <!-- support case ignored suffix for sizes -->
 * utils: parse\_byte\_size\_string() のコーディングスタイルを修正しました <!-- fix parse\_byte\_size\_string() coding style -->
 * strlcpy: `strlcpy()` を実装しました <!-- add strlcpy() implementation -->
 * tree-wide: s/strncpy()/strlcpy()/g
 * CODING\_STYLE: add section about using strlcpy()
 * tools: s/strncpy()/strlcpy()/g
 * Revert "tools: s/strncpy()/strlcpy()/g"
 * tools: s/strncpy()/memcpy()/
 * doc: 日本語の lxc-execute(1) に "-d/--daemon" オプションの説明を追加しました <!-- Add "-d/\-\-daemon" option to Japanese lxc-execute(1) -->
 * doc: 日本語の lxc.container.conf(5) の単位の書き方の説明を修正しました <!-- Fix size unit style in Japanese lxc.container.conf(5) -->
 * coverity: #1435604
 * coverity: #1435603
 * coverity: #1435602
 * coverity: #1425844
 * config: user namespace 内で `/sys` の読み書きができるようになりました <!-- allow read-write /sys in user namespace -->
 * coverity: #1425836
 * coverity: #1248106
 * capabilities: ambient ケーパビリティを適用するようになりました <!-- raise ambient capabilities -->
 * coverity: #1425802
 * cgroups: cgroup の扱いをリファクタリングしました <!-- refactor cgroup handling -->
 * cgroups: freezer\_state() を削除しました <!-- remove freezer\_state() -->
 * seccomp: #ifdef SCMP\_ARCH\_AARCH64
 * conf: write\_id\_mapping() を簡素化しました <!-- simplify write\_id\_mapping() -->
 * log: スレッドごとのコンテナ名プレフィックスを使えるようにしました <!-- enable per-thread container name prefix -->
 * lxc-init: キャッチできないシグナルはスキップするようにしました <!-- skip signals that can't be caught -->
 * execute: サポートされている場合は `execveat()` を使うようになりました <!-- use execveat() syscall if supported -->
 * tools: リクエストがあったときにのみログファイルを作るようにしました <!-- only create log file when requested -->
 * seccomp: sscanf 用の配列の割り当て時の off-by-one エラーを修正しました <!-- fix off-by-one error in array allocation for sscanf -->
 * seccomp: 混乱させるコメント行を削除しました <!-- remove confusing comment line -->
 * seccomp: 不要な memset を削除しました <!-- remove unnecessary memset -->
 * seccomp: システムコール引数のフィルタをパースする際の型の不一致を修正しました <!-- fix type mismatch when parsing syscall arguments filters -->
 * lxcseccomp: ヘッダをクリーンアップしました <!-- cleanup header -->
 * seccomp: parse\_config\_v1()
 * utils: add remove\_trailing\_newlines()
 * seccomp: get\_v2\_default\_action()
 * seccomp: get\_action\_name()
 * seccomp: get\_v2\_action()
 * seccomp: fix get\_seccomp\_arg\_value()
 * seccomp: parse\_v2\_rules()
 * seccomp: `#ifdef` 行を移動しました <!-- move #ifdefines -->
 * seccomp: get\_hostarch()
 * seccomp: scmp\_filter\_ctx get\_new\_ctx()
 * seccomp: do\_resolve\_add\_rule()
 * seccomp: parse\_config\_v2()
 * seccomp: parse\_config()
 * seccomp: lxc\_read\_seccomp\_config()
 * tree-wide: s/sigprocmask/pthread\_sigmask()/g
 * utils: task\_blocking\_signal() を修正しました <!-- fix task\_blocking\_signal() -->
 * lxccontainer: シグナルを送る時の fd のリークを修正しました <!-- fix fd leaks when sending signals -->
 * confile: アーキテクチャを順に並べました <!-- order architectures -->
 * start: `setns()` の失敗をログするようにしました <!-- log setns() failure -->
 * seccomp: リークを修正しました <!-- leak fixup -->
 * seccomp: (別の修正で削除された) アクションの定義をパースする際のエラーチェックを再度追加しました <!-- re-add action parse error handling -->
 * seccomp: parse\_config の行の扱いをリファクタリングしました <!-- refactor line handling of parse\_config -->
 * seccomp: 認められていないアクションの指定をエラーにするようにしました <!-- error on unrecognized actions -->
 * seccomp: lxc\_read\_seccomp\_config()
 * seccomp: parse\_v2\_rules()
 * seccomp: do\_resolve\_add\_rule() をより厳格にしました <!-- make do\_resolve\_add\_rule() more strict -->
 * tools: グローバル設定オプションの `lxc-create` 内での扱いを修正しました <!-- fix lxc-create with global config value -->
 * tools: グローバル設定オプションの `lxc-create` 内での扱いを修正しました II<!-- fix lxc-create with global config value II -->
 * coverity: #1435806
 * coverity: #1435805
 * coverity: #1435803
 * coverity: #1435747
 * conf: 機能と関係のない変更を行いました <!-- non-functional changes -->
 * conf: make is\_execute a boolean
 * conf: 機能と関係のない変更を行いました <!-- non-functional changes -->
 * conf: close\_all\_fds 変数を boolean にしました <!-- make close\_all\_fds a boolean -->
 * conf: 構造体の mount 関係のメンバの配置を変えました <!-- reshuffle mount members -->
 * conf: tty の扱いを簡素化しました <!-- simplify tty handling -->
 * conf: pts -> pty\_max
 * conf: 機能と関係のない変更を行いました <!-- non-functional changes -->
 * utils: task\_blocking\_signal() を修正しました <!-- fix task\_blocking\_signal() -->
 * network: ソケットハンドルのリークを修正しました <!-- fix socket handle leak -->
 * start: ns\_clone\_flags を `-1` で初期化しないようにしました <!-- do not init ns\_clone\_flags to -1 -->
 * conf: lxc\_delete\_tty() がクラッシュしないようにしました <!-- ensure lxc\_delete\_tty() does not crash -->
 * start: リブートのマクロを追加しました <!-- add reboot macros -->
 * conf: root の idmap 構造体を const にしました <!-- make root idmap structs const -->
 * conf: tmp\_umount\_proc 変数を bool にしました <!-- make tmp\_umount\_proc bool -->
 * conf: 機能と関係のない変更を行いました <!-- non-functional changes -->
 * conf: va\_end を呼ぶようにしました <!-- va\_end was not called. -->
 * confile: `strprint()` を改良しました <!-- improve strprint() -->
 * ハンドラの返り値の定義を変更しました <!-- change defines for return value of handlers -->
 * start: waitpid() のブロッキングの問題を修正しました <!-- fix waitpid() blocking issue -->
 * start: 未知の info.si\_code をログするようにしました <!-- log unknown info.si\_code -->
 * tree-wide: いくつかのファイルのモードを修正しました <!-- fix mode of some files -->
 * confile\_utils: strprint() を追加しました <!-- apply strprint() -->
 * templates: 実際に DOWNLOAD\_TEMP ディレクトリを作るようにしました <!-- actually create DOWNLOAD\_TEMP directory -->
 * templates: download テンプレートを修正しました <!-- fix download template -->
 * `lxc-update-config` を修正しました <!-- Patch lxc-update-config -->

#### バグ修正 <!-- Bugfixes -->(LXC templates)

 * sshd: lxc.autodev を使うようにしました <!-- Use lxc.autodev -->
 * sshd: init スクリプトにコンテナ名を渡すようにしました <!-- Pass the container name to the init script -->

### サポートとアップグレード <!-- Support and upgrade -->
<!--
LXC 3.0.1 is supported until June 2023 and is our current LTS release, users are encouraged to update to the latest bugfix releases as they're made available.
-->
LXC 3.0.1 は 2023 年 6 月までサポートされる最新の LTS リリースです。
利用可能になった最新のバグ修正リリースに更新することをお勧めします。

### ダウンロード <!-- Downloads -->

 - LXC リリース tarball <!-- Main release tarball -->: [lxc-3.0.1.tar.gz](https://linuxcontainers.org/downloads/lxc/lxc-3.0.1.tar.gz) (GPG: [lxc-3.0.1.tar.gz.asc](https://linuxcontainers.org/downloads/lxc/lxc-3.0.1.tar.gz.asc))
 - LXC テンプレート tarball <!-- LXC templates tarball -->: [lxc-templates-3.0.1.tar.gz](https://linuxcontainers.org/downloads/lxc/lxc-templates-3.0.1.tar.gz) (GPG: [lxc-templates-3.0.1.tar.gz.asc](https://linuxcontainers.org/downloads/lxc/lxc-templates-3.0.1.tar.gz.asc))
 - LXC python3 バインディング tarball <!-- LXC python3 bindings tarball -->: [python3-lxc-3.0.1.tar.gz](https://linuxcontainers.org/downloads/lxc/python3-lxc-3.0.1.tar.gz) (GPG: [python3-lxc-3.0.1.tar.gz.asc](https://linuxcontainers.org/downloads/lxc/python3-lxc-3.0.1.tar.gz.asc))

## [LXC 3.0.0 リリースのお知らせ](https://discuss.linuxcontainers.org/t/lxc-3-0-0-has-been-released/1449)
<span class="text-muted">2018 年 3 月 27 日</span>

### はじめに <!-- Introduction -->
<!--
The LXC team is pleased to announce the release of LXC 3.0.0!
-->
LXC チームは LXC 3.0.0 のリリースをお知らせできることをうれしく思います！

<!--
This is the result of over 6 months of intense work since the LXC 2.1.0 release
This is the third LTS release for the LXC project and will be supported until June 2023.
-->
このリリースは LXC 2.1.0 のリリース以来 6 ヶ月に及ぶ集中した作業の成果で、LXC プロジェクトの 3 つ目の LTS リリースとなります。そして、2023 年までサポートされます。


### 主な変更点 <!-- Major changes -->
#### すべてのコマンドでの `lxc-start <コンテナ名>` という文法のサポート <!-- All commands support `lxc-start <container-name>` syntax -->

<!--
The LXC tools now support passing the container name without the `-n` command line flag. For example, you can now run:
-->
LXC のコマンドラインツールは `-n` を省略してコンテナ名を指定して実行できるようになりました。例えば、以下のように実行できます:

    chb@conventiont|~
    > lxc-start xenial

    chb@conventiont|~
    > lxc-info xenial
    Name:           xenial
    State:          RUNNING
    PID:            12765
    Memory use:     15.24 MiB
    KMem use:       3.72 MiB
    Link:           veth99VMO3
     TX bytes:      858 bytes
     RX bytes:      2.49 KiB
     Total bytes:   3.33 KiB

    chb@conventiont|~
    > lxc-attach xenial
    root@xenial:/# exit

    chb@conventiont|~
    > lxc-stop xenial

#### すべてのレガシーな設定項目の削除 <!-- Removed support for all legacy configuration keys -->
<!--
All legacy configuration keys are unsupported from LXC 3.0 onwards.
The full list of deprecated keys and their new counterparts can be gathered from the [LXC 2.1 release announcement](https://discuss.linuxcontainers.org/t/lxc-2-1-has-been-released/487).
-->
LXC 3.0 以降、レガシーな設定項目はすべてサポートされません。
廃止された設定と、対応する新しい設定のすべてのリストは、[LXC 2.1 リリースのお知らせ](http://localhost/ja/lxc/news/#lxc-211-2017-10-19) を参照してください。

<!--
The `lxc-update-config` tool can be used to convert an older, now invalid, configuration to the new format.
-->
`lxc-update-config` ツールを使って、古い無効な設定を新しいフォーマットに変換できます。

#### リソース制限を含む単一階層の cgroup のフルサポート <!-- Full support for the unified cgroup hierarchy including resource limits -->
<!--
We are pleased to announce that LXC will fully support the new unified cgroup hierarchy (or cgroup v2, cgroup2). To this end we also introduced a new configuration key `lxc.cgroup2.[controller name]` to configure cgroup limits on the unified cgroup hierarchy.
For detailed information you can read [this blogpost](https://brauner.github.io/2018/02/19/lxc-lands-unified-cgroup-hierarchy-support.html).
-->
LXC が、新しい単一階層構造の cgroup (cgroup v2、cgroup2) を完全にサポートしました。この機能を使い、単一階層構造の cgroup で制限を設定するために、`lxc.cgroup2.[コントローラ名]` という設定項目を追加しました。
さらに詳しい情報を得るには、["LXC Lands Unified cgroup Hierarchy Support"](https://brauner.github.io/2018/02/19/lxc-lands-unified-cgroup-hierarchy-support.html) というブログポストをご覧ください。

#### レガシーな cgmanager、cgfs cgroup ドライバの削除 <!-- Removal of legacy cgmanager and cgfs cgroup drivers -->
<!--
LXC removed the `cgmanager` and `cgfs` legacy cgroup drivers cleaning up a lot of code in the process. For detailed information you can read [this blogpost](https://brauner.github.io/2018/02/20/lxc-removes-legacy-cgroup-drivers.html).
-->
LXC から、`cgmanager` と `cgfs` というレガシーな cgroup ドライバを削除し、多数のコードを削除しました。さらに詳しい情報を得るには、["On The Way To LXC 3.0: Removal of cgmanager And cgfs cgroup Drivers"](https://brauner.github.io/2018/02/20/lxc-removes-legacy-cgroup-drivers.html) というブログポストをご覧ください。

#### テンプレートと言語バインディングの分離 <!-- Splitting out templates and language bindings -->
<!--
LXC removes the legacy template-based container build system in favor of the new project [distrobuilder](https://github.com/lxc/distrobuilder). For detailed information you can read [this blogpost](https://brauner.github.io/2018/02/27/lxc-removes-legacy-template-build-system.html).
-->
コンテナイメージのビルドシステムの新しいプロジェクトである [distrobuilder](https://github.com/lxc/distrobuilder) が立ち上がりましたので、従来のテンプレートベースのコンテナビルドシステムは削除されました。さらに詳しい情報を得るには、["On The Way To LXC 3.0: Splitting Out Templates And Language Bindings"](https://brauner.github.io/2018/02/27/lxc-removes-legacy-template-build-system.html) というブログポストをご覧ください。

<!--
Note that to simplify migration, the old template scripts and configuration files remain available in a [separate repository](https://github.com/lxc/lxc-templates) and are released along with LXC 3.0.0 as `lxc-templates`.
-->
移行を簡単にするために、以前のテンプレートスクリプトと設定ファイルは [別のリポジトリ](https://github.com/lxc/lxc-templates) に残しており、LXC 3.0.0 と同時に `lxc-templates` としてリリースしています。

<!--
The following templates remain in the LXC 3.0 tree and are fully supported:
-->
以下のテンプレートは LXC 3.0 ツリーにも残っており、フルサポートされます:

 - lxc-busybox (通常テストに使われる) <!-- (mostly used for testing) -->
 - lxc-download (プロジェクトでビルド済みのイメージをダウンロードする) <!-- (download our pre-built images) -->
 - lxc-local (ローカルでビルドされたイメージをインポートする (例えば distrobuilder などで)) <!-- (import locally build images (e.g. from distrobuilder)) -->
 - lxc-oci (OCI アプリケーションコンテナイメージを使う) <!-- (use OCI application container images) -->

#### cgroup PAM モジュールの LXC ツリーへの移動 <!-- Moving the cgroup PAM module into the LXC tree -->
<!--
LXC has always supported fully unprivileged containers, i.e. unprivileged containers run by unprivileged users. An important piece in doing so was a PAM module that created writable cgroups for unprivileged users. This has been moved from the LXCFS tree into the LXC tree itself to make it even easier for users to run fully unprivileged containers.
For detailed information you can read [this blogpost](https://brauner.github.io/2018/02/28/lxc-includes-cgroup-pam-module.html).
-->
LXC は常に非特権コンテナを完全にサポートしてきています。非特権コンテナは特権を持たないユーザが実行します。この実行を行うための重要な要素が、特権を持たないユーザが書き込み権を持つ cgroup を作成する PAM モジュールでした。この PAM モジュールが LXCFS から LXC に移されました。これにより、ユーザが完全に非特権のコンテナをさらに簡単に実行できるようになりました。
さらに詳細な情報を得るには、["On The Way To LXC 3.0: Moving The Cgroup Pam Module Into The LXC Tree (Including A Detour About Fully Unprivileged Containers)"](https://brauner.github.io/2018/02/28/lxc-includes-cgroup-pam-module.html) というブログポストをご覧ください。

#### 新しい `OCI` テンプレートの追加 <!-- New `OCI` template -->
<!--
This adds support for creating application containers from OCI formats. 
Examples:
-->
このテンプレートで、OCI フォーマットからアプリケーションコンテナを作成できるようになります。例えば:

<!--
- create a container from a local OCI layout in ../oci:
-->
- `../oci` にあるローカルの OCI レイアウトからコンテナを作成するには:

  `sudo lxc-create -t oci -n a1 -- -u oci:../oci:alpine`

<!--
- create a container pulling from the docker hub.
-->
- docker hub からイメージを取得してコンテナを作成するには:

  `sudo lxc-create -t oci -n u1 -- -u docker://ubuntu`

<!--
The URL is specified in the same format as for `skopeo copy`.
-->
URL は `skopeo copy` と同じ形式で指定します。

#### コンソールのロギング用のシンプルで効率的なリングバッファ <!-- Simple and efficient ringbuffer for console logging -->
<!--
LXC supports logging the container's console to a file. This had the unfortunate side effect of allowing a user in the container to effectively write as much data as they wanted on the host, possibly bypassing quotas in place for the container.
-->
LXC はコンテナのコンソールをファイルにロギングする機能をサポートしています。これによりコンテナ内のユーザが、実際にはホスト上で必要なだけたくさんのデータを書き込み、コンテナに与えられたクォータをバイパスできる可能性があるという不幸な副作用をもたらしました。

<!--
This basic implementation was also somewhat annoying to query, having to read a potentially huge file which wasn't reset on container restart.
-->
この基本的な実装は、コンテナの再起動ではリセットされない、非常に大きくなる可能性のあるファイルを読む必要があり、照会が少し厄介なものでもありました。

<!--
LXC 3.0 now introduces a ringbuffer for console logging. This in-memory buffer is size-limited and can be queried through a new function in the LXC API. It can be reset at any time and can be dumped to disk on container shutdown.
-->
LXC 3.0 ではコンソールロギングにリングバッファが導入されました。このメモリ内のバッファはサイズ制限があり、LXC API の新しい関数で照会できます。いつでもリセットでき、コンテナのシャットダウン時にダンプすることもできます。

#### seccomp の引数を使ったシステムコールのフィルタ <!-- Allow seccomp to filter syscalls based on arguments -->
<!--
In order to support filtering syscalls based on arguments the `seccomp` version `2` specification is extended to the following form:
-->
引数を使ってシステムコールをフィルタリングするために、`seccomp` バージョン 2 の仕様が以下のような形に拡張されました:

    syscall_name action [index,value,op,valueTwo] [index,value,op]...

<!--
where the arguments of the tuple `[index,value,valueTwo,op]` have the following meaning:
-->
ここでタプル `[index,value,valueTwo,op]` の引数は以下のような意味です:

1. index (`uint32_t`):
       システムコール引数のインデックス。 <!-- The index of the syscall argument. -->
2. value (`uint64_t`):
       "index" で指定されるシステムコール引数の値。 <!-- The value for the syscall argument specified by "index". -->
3. valueTwo (`uint64_t`, optional):
       "index" で指定されるシステムコール引数の値。このオプショナルな値は `SCMP_CMP_MASKED_EQ` との組み合わせで使うときのみ有効です。 <!-- The value for the syscall argument specified by "index". This optional value
       is only valid in conjunction with `SCMP_CMP_MASKED_EQ`. -->
4. op (`char *`):
       システムコール引数の演算子。有効な演算子は `libseccomp >= v2.3.2` で定義された定数です。 <!-- The operator for the syscall argument. Valid operators are the constants -->
       - `SCMP_CMP_NE` or `(!=)`
       - `SCMP_CMP_LE`  or `(<=)`
       - `SCMP_CMP_EQ` or `(==)`
       - `SCMP_CMP_GE` or `(>=)`
       - `SCMP_CMP_GT` or  `(>)`
       - `SCMP_CMP_MASKED_EQ` or `(&=)`

      <!-- as defined by `libseccomp >= v2.3.2`.
      For convenience liblxc also understands the standard operator notation indicated in brackets after the libseccomp constants above as an equivalent notation.
      Note that it is legal to specify multiple entries for the same syscall. 
      -->
      便宜上 liblxc は、上記の libseccomp 定数の後にかっこで示された標準の演算子表記も、同等の表記法として理解します。
      同じシステムコールに対して複数のエントリを指定することは正しいことに注意してください。

<!--
An example for an extended seccomp version 2 profile is:
-->
拡張されたバージョン 2 プロファイルの例:

    2
    blacklist allow
    reject_force_umount  # comment this to allow umount -f;  not recommended
    [all]
    kexec_load errno 1 [0,1,SCMP_CMP_LE][3,1,==][5,1,SCMP_CMP_MASKED_EQ,1]
    open_by_handle_at errno 1
    init_module errno 1
    finit_module errno 1
    delete_module errno 1
    unshare errno 9 [0,0x10000000,SCMP_CMP_EQ]
    unshare errno 2 [0,0x20000000,SCMP_CMP_EQ]

#### アプリケーションコンテナのデーモン化のサポート <!-- Support for daemonized app containers -->
<!--
This enables daemonized application containers with our minimal init running as pid one and the requested program running as second pid.
-->

最小限の動きをする init を pid 1 で実行し、指定したプログラムを pid 2 で実行するアプリケーションコンテナを、デーモンとして起動できるようになりました。

#### `lxc-*` ツールからのすべての内部シンボルの削除 <!-- Remove all internal symbols from `lxc-*` tools -->
<!--
The `lxc-*` tools now only entirely rely on the public LXC API.
-->
`lxc-*` ツールは、もっぱら公開された LXC API にのみ、依存するようになりました。

#### `hidepid={1,2}` プロパティを使ってマウントされた `/proc` の扱い <!-- Handle `/proc` being mounted with the `hidepid={1,2}` property -->
<!--
This enables attaching to containers when the host's `/proc` filesystem was mounted with the `hidepid={1,2}` option which restricts access to `/proc/PID` directories.
-->
ホストの `/proc` が、`/proc/PID` ディレクトリに対するアクセスを制限する `hidepid={1,2}` を指定してマウントされている場合でも、コンテナにアタッチできるようになりました。

#### マウント時のマウントプロパゲーションのサポート <!-- Support mount propagation for mounts -->
<!--
This adds support for mount propagation (`private`, `shared`, `slave`, `unbindable`, `rprivate`, `rshared`, `rslave`, `runbindable`) to mount entries specified via `lxc.mount.entry` and `lxc.mount.fstab`.
-->
`lxc.mount.entry` と `lxc.mount.fstab` で指定されるマウントエントリに、マウントプロパゲーション (`private`, `shared`, `slave`, `unbindable`, `rprivate`, `rshared`, `rslave`, `runbindable`) が指定できるようになりました。

#### 確実なスレッドセーフ <!-- Hardened thread-safety -->
<!--
The details of this can be gathered from [this blogpost](https://brauner.github.io/2018/03/04/locking-in-shared-libraries.html).
-->
この項目に関する詳細は [Mutexes And fork()ing In Shared Libraries](https://brauner.github.io/2018/03/04/locking-in-shared-libraries.html) というブログポストをご覧ください。

#### `aufs` ストレージドライバの削除 <!-- Remove `aufs` storage driver -->
<!--
The `aufs` storage driver has been deprecated since LXC 2.1 and is now officially removed.
-->
LXC 2.1 で廃止予定となっていた `aufs` ストレージドライバが、今回正式に削除されました。

#### コーディングスタイル、コードのクリーンアップ <!-- Coding style and code cleanups -->
<!--
Code cleanups have been performed widely across the codebase based on our written down [coding style](https://github.com/lxc/lxc/blob/master/CODING_STYLE.md).
-->
[コーディングスタイル](https://github.com/lxc/lxc/blob/master/CODING_STYLE.md) に基づいて、コードベース全体に渡って広く、コードのクリーンアップを実行しました。

### 新たな設定項目 <!-- New Configuration Keys -->

#### `lxc.cgroup2.[controller name]`
<!--
Specify the control group value to be set on the unified cgroup shierarchy. The controller name is the literal name of the control group. The permitted names and the syntax of their values is not dictated by LXC, instead it depends on the features of the Linux kernel running at the time  the  container is started, for example, `lxc.cgroup2.memory.high`.
-->
単一階層構造の cgroup (cgroup v2) に設定する値を指定します。`controller name` はコントロールグループそのままの名前です (訳注: cgroup 以下に現れるファイル名そのまま)。使える名前や指定する値の書式は LXC が指示することはありません。コンテナ実行時点のカーネルの機能に依存します。例えば `lxc.cgroup2.memory.high` のようになります。

#### `lxc.hook.version`
<!--
To pass the arguments in new style via environment variables set to `1` otherwise set to `0` to pass them as arguments.  This  setting  affects  all  hooks arguments  that were traditionally passed as arguments to the script. Specifically, it affects the container name, section (e.g. 'lxc', 'net') and hook type (e.g.  'clone', 'mount', 'pre-mount') arguments. If new-style hooks are used then the arguments will be available as environment  variables. The container name will be set in `LXC_NAME`. (This is set independently of the value used for this config item.) The section will be set `LXC_HOOK_SECTION` and the hook type will be set in `LXC_HOOK_TYPE`.  It also affects how the paths to file descriptors referring to the container's namespaces are  passed. If  set  to  `1`  then  for  each namespace a separate environment variable `LXC_[NAMESPACE IDENTIFIER]_NS` will be set. If set to `0` then the paths will be passed as arguments to the stop hook.
-->
環境変数経由の新しいスタイルで引数を渡すには 1  に設定します。そうでなく、引数として渡すには  0 に設定します。この設定は、古い方法でスクリプトに引数として渡されているすべてのフック引数に影響します。特に、コンテナ名のセクション (例: 'lxc', 'net') とフックタイプ (例: 'clone', 'mount', 'pre-mount') 引数に影響します。新しいスタイルのフックが使われる場合、引数は環境変数として利用できます。コンテナ名は LXC_NAME に設定されます(これはこの設定項目に設定されている値とは関係なく設定されます)。セクションは LXC_HOOK_SECTION に設定されます。そしてフックタイプは LXC_HOOK_TYPE に設定されます。この設定は、コンテナの名前空間を参照するファイルディスクリプタのパスをどのように渡すかにも影響します。1 に設定した場合、名前空間ごとに別の環境変数 LXC_[NAMESPACE IDENTIFIER]_NS に設定されます。0 に設定すると、パスは stop フックの引数として渡されます。

#### `lxc.execute.cmd`
<!--
Absolute path from container rootfs to the binary to run by default. This configuration options can be set to to specify the default binary for application container started via the `execute()` API call and accompanies the system container based `lxc.init.cmd` configuration key.
-->
デフォルトで実行するバイナリのコンテナの root からの絶対パスを指定します。このオプションは `execute()` API 経由で呼ばれて実行されるアプリケーションコンテナのデフォルトバイナリを指定するために使います。システムコンテナの `lxc.init.cmd` に相当します。

#### `lxc.init.cwd`
<!--
Absolute path inside the container to use as the working directory.
-->
ワーキングディレクトリとして使うコンテナ内の絶対パスです。

#### `lxc.proc.[proc file name]`
<!--
Specify the proc file name to be set. The file names available are those listed under the `/proc/PID/` directory.  For example, `lxc.proc.oom_score_adj = 10`.
-->
設定したい proc 以下のファイル名。指定できるファイル名は `/proc/PID/` 以下に存在するものです。例えば `lxc.proc.oom_score_adj = 10` のように使います。

#### `lxc.console.buffer.size`
<!--
Setting this option instructs LXC to allocate an in-memory ringbuffer. The container's console output will be written to the ringbuffer.  Note  that ringbuffer  must be at least as big as a standard page size. When passed a value smaller than a single page size LXC will allocate a ringbuffer of a single page size. A page size is usually `4kB`.  The keyword `auto` will cause LXC to allocate a ringbuffer of `128kB`.  When manually specifying a size for  the  ringbuffer the value should be a power of `2` when converted to bytes. Valid size prefixes are `kB`, `MB`, `GB`. (Note that all conversions are based on multiples of `1024`. That means `kb == KiB`, `MB == MiB`, `GB == GiB`.)
-->
このオプションを設定すると、LXC はインメモリのリングバッファを割り当てます。コンテナのコンソールはリングバッファに出力されます。リングバッファは少なくとも標準ページサイズの大きさでなければなりません。ページサイズより小さい値を与えた場合は、LXC はページサイズのリングバッファを割り当てます。ページサイズは通常は `4kB` です。`auto` を指定すると、LXC は `128kB` のリングバッファを割り当てます。リングバッファサイズを数値指定する場合、値がバイトに変換されるときに 2 の累乗になります。サイズ接頭辞付きの単位として `kB`、`MB`、`GB` が使えます。(この場合の変換は 1024 の倍数に基づいています。つまり `kB` == `KiB`、`MB` == `MiB`、`GB` == `GiB` という意味です。)

#### `lxc.console.size`
<!--
Setting this option instructs LXC to place a limit on the size of the console log file specified in `lxc.console.logfile`. Note that size of  the  log file  must  be  at  least as big as a standard page size. When passed a value smaller than a single page size LXC will set the size of log file to a single page size. A page size is usually `4kB`.  The keyword `auto` will cause LXC to place a limit of `128kB` on the log file.  When manually  specifying a size for the log file the value should be a power of `2` when converted to bytes. Valid size prefixes are `kB`, `MB`, `GB`. (Note that all conversions are based on multiples of `1024`. That means `kb == KiB`, `MB == MiB`, `GB == GiB`.)  If users want to mirror the console ringbuffer on  disk they should set `lxc.console.size` equal to `lxc.console.buffer.size`.
-->
LXC は `lxc.console.logfile` で指定したコンソールログのサイズを、このオプションで設定した値に制限します。ログファイルのサイズは少なくとも標準ページサイズでなければなりません。ページサイズ以下の値を設定した場合は、LXC はログファイルのサイズをページサイズに設定します。ページサイズは通常は `4kB` です。`auto` を指定すると、LXC はログファイルのサイズを `128kB` に制限します。ログファイルサイズの値を数値指定する場合、値がバイトに変換されるときに `2` の累乗になります。サイズ接頭辞付きの単位として `kB`、`MB`、`GB` が使えます。(この場合の変換は 1024 の倍数に基づいています。つまり `kB` == `KiB`、`MB` == `MiB`、`GB` == `GiB` という意味です。) ディスク上のコンソールリングバッファとミラーになるようにしたい場合は、`lxc.console.size` と `lxc.console.buffer.size` の値を同じ値に設定します。


#### `lxc.console.rotate`
<!--
Whether  to rotate the console logfile specified in `lxc.console.logfile`.
-->
`lxc.console.logfile` で指定したコンソールログファイルをローテートするかどうかを指定します。


#### `lxc.mount.entry` の `relative` オプション <!-- `relative` option for `lxc.mount.entry` -->
<!--
A mountpoint specified with the `relative` property set will be taken to be relative to the mounted container root. For instance,
-->
マウントポイントの指定で `relative` オプションを付けると、マウントされたコンテナの root からの相対パスとなります。

    lxc.mount.entry = /dev/null proc/kcore none bind,relative 0 0 

<!--
Will expand `dev/null` to `${LXC_ROOTFS_MOUNT}/dev/null`, and mount it to `proc/kcore` inside the container.
-->
は `dev/null` を `${LXC_ROOTFS_MOUNT}/dev/null` と展開し、コンテナ内の `proc/kcore` にマウントします。

#### `lxc.mount.auto` で指定する `cgroup` マウントの `force` プロパティ <!-- `force` property for `cgroup` mounts specified via `lxc.mount.auto` -->
##### `cgroup:mixed:force:`
<!--
The force option will cause LXC to perform the cgroup mounts for the container under all circumstances.  Otherwise it is similar to `cgroup:mixed`.  This is mainly useful when the cgroup namespaces are enabled where LXC will normally leave mounting cgroups to the init binary of the container since it is perfectly safe to do so.
-->
force を指定すると、LXC はあらゆる状況でコンテナのための cgroup マウントを実行します。それ以外は `cgroup:mixed`  と同様です。これは主に cgroup 名前空間が有効な場合に便利です。この場合は完全に安全ですので、LXC は通常コンテナの init バイナリが cgroup をマウントしたままの状態にしておきます。

##### `cgroup:ro:force:`
<!--
The force option will cause LXC to perform the cgroup mounts for the container under all circumstances.  Otherwise it is similar to `cgroup:ro`.  This is mainly useful when the cgroup namespaces are enabled where LXC will normally leave mounting cgroups to the init binary of the container since it is perfectly safe to do so.
-->
force を指定すると、LXC はあらゆる状況でコンテナのための cgroup マウントを実行します。それ以外は `cgroup:ro` と同様です。これは主に cgroup 名前空間が有効な場合に便利です。この場合は完全に安全ですので、LXC は通常コンテナの init バイナリが cgroup をマウントしたままの状態にしておきます。

##### `cgroup:rw:force:`
<!--
The force option will cause LXC to perform the cgroup mounts for the container under all circumstances.  Otherwise it is similar to `cgroup:rw`.  This is mainly useful when the cgroup namespaces are enabled where LXC will normally leave mounting cgroups to the init binary of the container since it is perfectly safe to do so.
-->
force を指定すると、LXC はあらゆる状況でコンテナのための cgroup マウントを実行します。それ以外は `cgroup:rw` と同様です。これは主に cgroup 名前空間が有効な場合に便利です。この場合は完全に安全ですので、LXC は通常コンテナの init バイナリが cgroup をマウントしたままの状態にしておきます。

##### `cgroup-full:mixed:force:`
<!--
The force option will cause LXC to perform the cgroup mounts for the container under all circumstances.  Otherwise it is similar to `cgroup-full:mixed`.  This is mainly useful when the cgroup namespaces are enabled where LXC will normally leave mounting cgroups to the init binary of the container since it is perfectly safe to do so.
-->
force を指定すると、LXC  はあらゆる状況でコンテナのための  cgroup  マウントを実行します。それ以外は `cgroup-full:mixed` と同様です。これは主に cgroup 名前空間が有効な場合に便利です。この場合は完全に安全ですので、LXC は通常コンテナの init バイナリが cgroup をマウントしたままの状態にしておきます。


##### `cgroup-full:ro:force:`
<!--
The force option will cause LXC to perform the cgroup mounts for the container under all circumstances.  Otherwise it is similar to `cgroup-full:ro`.  This is mainly useful when the cgroup namespaces are enabled where LXC will normally leave mounting cgroups to the init binary of the container since it is perfectly safe to do so.
-->
force を指定すると、LXC はあらゆる状況でコンテナのための cgroup マウントを実行します。それ以外は `cgroup-full:ro` と同様です。これは主に cgroup  名前空間が有効な場合に便利です。この場合は完全に安全ですので、LXC は通常コンテナの init バイナリが cgroup をマウントしたままの状態にしておきます。


##### `cgroup-full:rw:force:`
<!--
The force option will cause LXC to perform the cgroup mounts for the container under all circumstances.  Otherwise it is similar to `cgroup-full:rw`.  This is mainly useful when the cgroup namespaces are enabled where LXC will normally leave mounting cgroups to the init binary of the container since it is perfectly safe to do so.
-->
force を指定すると、LXC はあらゆる状況でコンテナのための cgroup マウントを実行します。それ以外は `cgroup-full:rw` と同様です。これは主に cgroup  名前空間が有効な場合に便利です。この場合は完全に安全ですので、LXC は通常コンテナの init バイナリが cgroup をマウントしたままの状態にしておきます。

#### `lxc.namespace.clone`
<!--
Specify namespaces which the container is supposed to be created with. The namespaces to create are specified as a space separated list. Each namespace must correspond to one of the standard namespace identifiers as seen in the `/proc/PID/ns` directory. When `lxc.namespace.clone` is not explicitly set all namespaces supported by the kernel and the current configuration will be used.
-->
コンテナ作成時に作成する名前空間を指定します。作成する名前空間はスペース区切りのリストで指定します。指定する名前空間名は、`/proc/PID/ns` ディレクトリ内に存在する標準の名前空間指示子でなければなりません。`lxc.namespace.clone` を明示的に設定していない場合は、カーネルがサポートするすべての名前空間と現在の設定が使われます。

<!--
To create a new `mount`, `net` and `ipc` namespace set `lxc.namespace.clone = mount net ipc`.
-->
新しいマウント、ネット、IPC 名前空間を作る場合は `lxc.namespace.clone=mount net ipc` と指定します。

#### `lxc.namespace.keep`
<!--
Specify  namespaces  which the container is supposed to inherit from the process that created it. The namespaces to keep are specified as a space separated list. Each namespace must correspond to one of the standard namespace identifiers as seen in the `/proc/PID/ns` directory.  The  lxc.namespace.keep is a blacklist option, i.e. it is useful when enforcing that containers must keep a specific set of namespaces.
-->
コンテナが、作成元のプロセスから継承する (新しい名前空間を作らずに元のプロセスの名前空間のまま実行する) 名前空間を指定します。継承する名前空間はスペース区切りのリストで指定します。指定する名前空間名は、`/proc/PID/ns` ディレクトリ内に存在する標準の名前空間指示子でなければなりません。`lxc.namespace.keep`  はブラックリストを指定するオプションです。つまり、コンテナに特定の名前空間を使い続けることを強制したい場合に便利です。

<!--
To keep the `network`, `user` and `ipc` namespace set `lxc.namespace.keep = user net ipc`.
-->
ネットワーク、ユーザ、IPC 名前空間を元のプロセスの名前空間のままで実行したい場合は `lxc.namespace.keep=user net ipc` と指定します。

<!--
Note that sharing `pid` namespaces will likely not work with most init systems.
-->
PID 名前空間を共有すると、ほとんどの init で動作しない可能性があることに注意してください。

<!--
Note  that  if the container requests a new user namespace and the container wants to inherit the network namespace it needs to inherit the user namespace as well.
-->
コンテナが新しいユーザ名前空間をリクエストし、そのコンテナがネットワーク名前空間は継承したい場合は、ユーザ名前空間も同様に継承する必要があることに注意してください。

#### `lxc.namespace.share.[namespace identifier]`
<!--
Specify a namespace to inherit from another container or process.  The `[namespace identifier]` suffix needs to be replaced with one  of  the  namespaces that appear in the `/proc/PID/ns` directory.
-->
他のコンテナやプロセスから継承する名前空間を指定します。`[namespace identifier]` には、`/proc/PID/ns` ディレクトリ内に現れる名前空間のひとつが入ります。

<!--
To  inherit  the  namespace  from  another  process  set  the  `lxc.namespace.share.[namespace identifier]`  to  the PID of the process, e.g. `lxc.namespace.share.net = 42`.
-->
他のプロセスから名前空間を継承するには、`lxc.namespace.share.[namespace identifier]` の値をプロセスの PID に設定します。例えば `lxc.namespace.share.net=42` のようになります。

<!--
To inherit the namespace from another container set the `lxc.namespace.share.[namespace identifier]` to  the  name  of  the  container,  e.g. `lxc.namespace.share.pid = c3`.
-->
他のコンテナから名前空間を継承するには、`lxc.namespace.share.[namespace identifier]` の値をコンテナ名に設定します。例えば `lxc.namespace.share.pid=c3` のようになります。

<!--
To  inherit the namespace from another container located in a different path than the standard LXC path set the `lxc.namespace.share.[namespace identifier]` to the full path to the container, e.g.  `lxc.namespace.share.user = /opt/c3`.
-->
標準の liblxc のパスとは異なるコンテナパスに存在する他のコンテナから名前空間を継承するには、`lxc.namespace.share.[namespace identifier]` をそのコンテナのフルパスで指定します。例えば `lxc.namespace.share.user=/opt/c3` のようになります。

<!--
In order to inherit namespaces the caller needs to have sufficient privilege over the process or container.
-->
名前空間を継承するためには、呼び出し元が継承元のプロセスまたはコンテナに対して十分な権限を持っている必要があります。

<!--
Note that sharing pid namespaces between system containers will likely not work with most init systems.
-->
システムコンテナ間での  PID 名前空間の共有は、ほとんどの init システムではうまく動作しない可能性があることに注意が必要です。

<!--
Note that if two processes are in different user namespaces and one process wants to inherit the other's network namespace it usually needs to  inherit the user namespace as well.
-->
ふたつのプロセスが異なるユーザ名前空間に存在し、そのうちのひとつが他のネットワーク名前空間を継承したい場合、通常はユーザ名前空間も同様に継承する必要があることに注意が必要です。

#### `lxc.sysctl.[kernel parameters name]`
<!--
Specify the kernel parameters to be set. The parameters available are those listed under `/proc/sys/`. Note that not all sysctls are namespaced. Changing Non-namespaced sysctls will cause the system-wide setting to be modified.  `sysctl(8)`. If used with no value, LXC will clear the parameters  specified up to this point.
-->
設定したいカーネルパラメータを指定します。指定できるパラメータは `/proc/sys` 以下に存在するものです。 すべての sysctl パラメータが仮想化（名前空間化）されているわけではないことに注意してください。仮想化されていない sysctl を設定すると、システムワイドで設定が変更されてしまいます。 `sysctl(8)` 値を指定しないでこの設定を指定した場合は、この設定より前に設定されたパラメータをクリアします。

#### `lxc.hook.start-host`
<!--
A hook to be run in the host's namespace after the container has been setup, and immediately before starting the container init.
-->
コンテナのセットアップが済んだあと、コンテナの init を実行する直前に、ホストの名前空間で実行するためのフックです。

<!--
This should satisfy several use cases.  One example is support for CNI.
For example, replace the network configuration in a root owned container with:
-->
これはいくつかのユースケースを満たすはずです。一例が CNI のサポートです。
例えば、root 所有のコンテナ内のネットワーク設定を次のように置き換えます。

    lxc.net.0.type = empty
    lxc.hook.start-host = /bin/lxc-start-netns

    where /bin/lxc-start-netns contains:

    =================================

    echo "starting" > /tmp/debug
    ip link add host1 type veth peer name peer1
    ip link set host1 master lxcbr0
    ip link set host1 up
    ip link set peer1 netns "${LXC_PID}"
    =================================

<!--
The nic 'peer1' was placed into the container as expected.
For this to work, we pass the container init's pid as LXC\_PID in an environment variable, since lxc-info cannot work at that point.
-->
NIC `peer1` は期待通りコンテナ内に配置されました。
これが動作するためには、この時点では `lxc-info` は動作しないので、コンテナの init の pid を環境変数 `LXC_PID` として与える必要があります。

#### API 拡張 <!-- API extensions -->
##### `console_log()`
<!--
A new API extension
-->
新しい API 拡張

    int console_log(struct lxc_container *c, struct lxc_console_log *log);

<!--
has been added that supports interacting with the newly added in-memory ringbuffer of the container. The following struct containers available arguments and return values:
-->
が追加されました。これは、新たに追加されたコンテナのインメモリリングバッファとのやりとりをサポートするために追加されました。次の構造体に利用可能な引数と返り値が含まれています。

    struct lxc_console_log {
        /* Clear the console log. */
        bool clear;

        /* Retrieve the console log. */
        bool read;

        /* This specifies the maximum size to read from the ringbuffer. Setting
         * it to 0 means that the a read can be as big as the whole ringbuffer.
         * On return callers can check how many bytes were actually read.
         * If "read" and "clear" are set to false and a non-zero value is
         * specified then up to "read_max" bytes of data will be discarded from
         * the ringbuffer.
         */
        uint64_t *read_max;

        /* Data that was read from the ringbuffer. If "read_max" is 0 on return
         * "data" is invalid.
         */
        char *data;
    };

##### `reboot2()`
<!--
This adds `reboot2()` as a new API extension. This function properly wait until a reboot succeeded. It takes a timeout argument. When set to `> 0` `reboot2()` will block until the timeout is reached, if timeout is set to zero `reboot2()` will not block, if set to `-1` `reboot2()` will block indefinitly.
-->
新しい API 拡張として `reboot2()` が追加されました。この関数は再起動が成功するまで待ちます。この関数は引数としてタイムアウト値を取ります。タイムアウト値が `> 0` の場合、`reboot2()` はタイムアウトに達するまで再起動を待ちます。もしタイムアウトが `0` に設定された場合、`reboot2()` は再起動を待ちません。もし `-1` に設定された場合、`reboot2()` は無期限に再起動を待ちます。

##### CRIU の `migrate()` API 呼び出しに対する `MIGRATE_FEATURE_CHECK` <!-- `MIGRATE_FEATURE_CHECK` for `CRIU` ``migrate()` API call -->
<!--
For migration optimization features like pre-copy or post-copy migration the support cannot be determined by simply looking at the `CRIU` version.  Features like that depend on the architecture/kernel/criu combination and `CRIU` offers a feature checking interface to query if it is supported.
-->
pre-copy や post-copy マイグレーションのようなマイグレーションの最適化機能においては、単純に `CRIU` のバージョンを見るだけでは、機能のサポートを判断できません。そのような機能はアーキテクチャ・カーネル・CRIU のコンビネーションに依存し、`CRIU` は機能がサポートされているかどうかを問い合わせるインターフェースを持っています。

<!--
This adds a LXC interface to query CRIU for those feature via the `migrate()` API call. For the recent pre-copy migration support in LXD this can be used to automatically detect if pre-copy migration should be used.
-->
`migrate()` API の呼び出し経由で、先に挙げたような機能のサポートを CRIU に問い合わせる LXC インターフェースが追加されました。LXD での最近の pre-copy マイグレーションのサポートでは、この機能が使われ、pre-copy マイグレーションを使うかどうかを自動で検出しています。

<!--
In addition to the existing `migrate()` API commands this adds a new command: `MIGRATE_FEATURE_CHECK`.
-->
既存の `migrate()` API コマンドに加えて、新しいコマンド `MIGRATE_FEATURE_CHECK` を追加しました。

<!--
The `struct migrate_opts` is extended by the member `features_to_check` which is a bitmask defining which `CRIU` features should be queried.
-->
`struct migrate_opts` は、メンバ `features_to_check` によって拡張されています。これは、`CRIU` の機能を問い合わせるかどうかを指示するビットマスクです。

<!--
Currently only querying the features `FEATURE_MEM_TRACK` and `FEATURE_LAZY_PAGES` are supported.
-->
現時点では、`FEATURE_MEM_TRACK` と `FEATURE_LAZY_PAGES` 機能がサポートされているかどうかを問い合わせるだけです。

##### `attach()` API 呼び出しに対する `LXC_ATTACH_TERMINAL` の追加 <!-- add `LXC_ATTACH_TERMINAL` to `attach()` API call -->
<!--
Allocation of a new terminal has been moved into the API itself. Callers can  now set `LXC_ATTACH_TERMINAL` to request to be attached to a new terminal allocated from the host's `devpts` mount before attaching to the container.
-->
新しい端末の割り当てが API 自身に移されました。呼び出し元は `LXC_ATTACH_TERMINAL` を設定し、コンテナにアタッチする前に、ホストの `devpts` から割り当てられた新しい端末にアタッチするように要求できます。

### サポートとアップグレード <!-- Support and upgrade -->
<!--
LXC 3.0.0 will be supported until June 2023 and our current LTS release.
LXC 2.0 will now join LXC 1.0 in only getting critical bugfixes and security updates.
-->
LXC 3.0.0 は 2023 年 6 月までサポートされる最新の LTS リリースです。
LXC 1.0 に加えて LXC 2.0 は、致命的なバグ修正とセキュリティ修正のみなされます。

<!--
We strongly recommend all LXC users to plan an upgrade to the 3.0 branch.
Due to the transition of libpam-cgfs to LXC, this should be done at the same time as the upgrade to LXCFS 3.0 to avoid potential conflicts.
-->
LXC チームは 3.0 ブランチへのアップグレードの計画を立てることを強くおすすめします。libpam-cgfs が LXC へ移動しますので、LXC 3.0 へのアップグレードと同時に LXCFS 3.0 へのアップグレードを行うと、機能のコンフリクトを避けることができるでしょう。

### ダウンロード <!-- Downloads -->
 - LXC リリース tarball <!--LXC release tarball -->: [lxc-3.0.0.tar.gz](https://linuxcontainers.org/downloads/lxc/lxc-3.0.0.tar.gz) (GPG: [lxc-3.0.0.tar.gz.asc](https://linuxcontainers.org/downloads/lxc/lxc-3.0.0.tar.gz.asc))
 - LXC テンプレート tarball <!-- LXC templates tarball -->: [lxc-templates-3.0.0.tar.gz](https://linuxcontainers.org/downloads/lxc/lxc-templates-3.0.0.tar.gz) (GPG: [lxc-templates-3.0.0.tar.gz.asc](https://linuxcontainers.org/downloads/lxc/lxc-templates-3.0.0.tar.gz.asc))
 - LXC python3 バインディング tarball <!-- LXC python3 bindings tarball -->: [python3-lxc-3.0.1.tar.gz](https://linuxcontainers.org/downloads/lxc/python3-lxc-3.0.1.tar.gz) (GPG: [python3-lxc-3.0.1.tar.gz.asc](https://linuxcontainers.org/downloads/lxc/python3-lxc-3.0.1.tar.gz.asc))


### コントリビューター <!-- Contributors -->
<!--
The LXC 3.0.0 release was brought to you by a total of 42 contributors.
-->
LXC 3.0.0 のリリースは、全部で 42 名の貢献によりリリースされました。

## LXC 2.0.9 リリースのお知らせ <!-- LXC 2.0.9 release announcement --><span class="text-muted">2017 年 10 月 19 日<!-- 19th of October 2017 --></span>
<!--
This is the nineth bugfix release for LXC 2.0.
-->
このリリースは LXC 2.0 の 9 回目のバグフィックスリリースです。

バグ修正<!-- Bugfixes -->:

 * apparmor: コンテナが AppArmor namespace 内で起動できるようになりました <!-- Allow containers to start in AppArmor namespaces -->
 * apparmor: apparmor の不要な deny を削除しました <!-- Drop useless apparmor denies -->
 * caps: ifndef/define の定義をコードの冒頭部分に移動させました <!-- Move ifndef/define to the top -->
 * cgfsng: 制限の適用に失敗したときにはエラーになるようにしました <!-- Fail when limits fail to apply -->
 * cgfsng: cgfsng を使わない場合はログに出力するようにしました <!-- Log when we defer to cgfsng -->
 * cgfsng: cgroup のデータを設定した時のみデバッグ情報をログに出力するようにしました <!-- Only output debug info when we set cgroup data -->
 * cgroups: hybrid cgroup レイアウトを扱えるようになりました<!-- Handle hybrid cgroup layouts -->
 * cgroups: 変数のスコープを調整しました <!-- Use tight scoping -->
 * cgroups: gcc-7 のバグを回避するようにしました <!-- Workaround gcc-7 bug -->
 * commands: abstract コマンドソケットの扱いとロギングを実装しました <!-- Abstract cmd socket handling + logging -->
 * commands: コマンドに対する足りていなかった変換を追加しました <!-- Add missing translation -->
 * commands: 意味のないコメントを削除しました <!-- Delete meaningless comments -->
 * commands: EINTR を扱うようになりました <!-- handle EINTR -->
 * commands: ステートサーバのインターフェースをフレキシブルにしました <!-- Make state server interface flexible -->
 * commands: lxc\_make\_abstract\_socket\_name() 関数を移動しました <!-- Move lxc\_make\_abstract\_socket\_name() -->
 * commands: lxc\_cmd\_add\_state\_client() にリネームしました <!-- Rename to lxc\_cmd\_add\_state\_client() -->
 * commonds: typo を修正しました <!-- Fix typo -->
 * conf: lxc-user-nic の使われ方に合わせました <!-- Adapt to lxc-user-nic usage -->
 * conf: lxc\_get\_idmaps() を追加しました <!-- Add lxc\_get\_idmaps() -->
 * conf: userns\_exec\_full() を追加しました <!-- Add userns\_exec\_full() -->
 * conf: すべての設定をクリアできるようになりました <!-- Allow to clear all config items -->
 * conf: lxc.autodev を取得できるようになりました <!-- Allow to get lxc.autodev -->
 * conf: lxc.haltsignal を取得できるようになりました <!-- Allow to get lxc.haltsignal -->
 * conf: lxc.kmsg を取得できるようになりました <!-- Allow to get lxc.kmsg -->
 * conf: lxc.rebootsignal を取得できるようになりました <!-- Allow to get lxc.rebootsignal -->
 * conf: lxc.stopsignal を取得できるようになりました <!-- Allow to get lxc.stopsignal -->
 * conf: euid != 0 でも uid マッピングが書き込めるようになりました (訳注: 非特権ユーザが自身の id だけをマップできるようになりました)<!-- Allow writing uid mappings with euid != 0 -->
 * conf: userns\_exec\_1() 中のメモリの二重解放を修正しました <!-- Avoid double-frees in userns\_exec\_1() -->
 * conf: lxc.include をクリアするようにしました <!-- Clear lxc.include -->
 * conf: 空の値を二度チェックしなくなりました <!-- Do not check for empty value twice -->
 * conf: 間違ったネットワークインターフェースのタイプの UNION のチェックをしなくなりました <!-- Do not check union on wrong net type -->
 * conf: NULL ポインタへの参照を防ぎました <!-- Do not deref null pointer -->
 * conf: static なメモリを解放しないようにしました <!-- Do not free static memory -->
 * conf: 初期化されていないメモリについてログ出力しないようにしました <!-- Do not log uninitialized memory -->
 * conf: 行末のスペースを出力しなくなりました <!-- Do not write out trailing spaces -->
 * conf: 設定されていない場合は tty を送らないようになりました <!-- don't send ttys when none are configured -->
 * conf: lxc\_get\_config\_item() を削除しました <!-- Dump lxc\_get\_config\_item() -->
 * conf: 多数のマッピングをしようとした際にエラーになるようにしました <!-- Error out on too many mappings -->
 * conf: bionic でのビルドを修正しました <!-- Fix bionic builds -->
 * conf: libcap がない場合のビルドの問題を修正しました <!-- Fix building without libcap -->
 * conf: tty の作成時の問題を修正しました <!-- Fix tty creation -->
 * conf: userns\_exec\_1() の問題を修正しました <!-- Fix userns\_exec\_1() -->
 * conf: netdev-\>downscript 変数を free するようにしました <!-- Free netdev-\>downscript -->
 * conf: 設定項目をクリアするコールバック関数を実装しました <!-- Implement config item clear callback -->
 * conf: lxc\_map\_ids() 関数を改良しました <!-- Improve lxc\_map\_ids() -->
 * conf: tty の ID をシフトする関数を改良しました <!-- Improve tty shifting function -->
 * conf: write\_id\_mapping() 関数を改良しました <!-- Improve write\_id\_mapping() -->
 * conf: lxc-user-nic のバッファを増やしました <!-- Increase lxc-user-nic buffer -->
 * conf: lxc-user-nic の出力をログに記録するようにしました <!-- Log lxc-user-nic output -->
 * conf: lxc\_listconfigs -> lxc\_list\_config\_items
 * conf: 設定項目をクリアする関数を一か所にまとめました <!-- Move clearing config items into one place -->
 * conf: 機能と関係ない変更を行いました <!-- Non-functional changes -->
 * conf: コンテナの /dev をマウントする際には NOTICE() で出力するようにしました <!-- NOTICE() on mounts on container's /dev -->
 * conf: パフォーマンスの調整を行いました <!-- Performance tweaks -->
 * conf: 設定ファイル中の改行を保存するようにしました <!-- Preserve newlines -->
 * conf: lxc.idmap の設定値を正しくパースするようにしました <!-- Properly parse lxc.idmap entries -->
 * conf: 書き込まれる idmap を記録するようになりました <!-- Record idmap that gets written -->
 * conf: 設定値をパースするほとんどのコードをリファクタリングしました <!-- Refactoring of most config parsing code -->
 * conf: ネットワークの削除をリファクタリングしました <!-- Refactor network deletion -->
 * conf: parse\_idmaps() 中の不要な割り当てを削除しました <!-- Remove dead assignments in parse\_idmaps() -->
 * conf: 使われないマウントのコードを削除しました <!-- Remove dead mount code -->
 * conf: lxc\_map\_ids() を作りなおしました <!-- Rework lxc\_map\_ids() -->
 * conf: userns\_exec\_1() を作りなおしました <!-- Rework userns\_exec\_1() -->
 * conf: tty を 2 つ同時に送るようにしました <!-- Send ttys in batches of 2 -->
 * conf: API を新しいコールバックシステムへ切り替えました <!-- Switch API to new callback system -->
 * conf: uid,gidのマッピングは最小限だけ使うようにしました <!-- Use a minimal {g,u}id map -->
 * conf: char の配列のチェックを正しく行うようになりました <!-- Use correct check on char array -->
 * conf: lxc-usernsexec コマンドの実行には run\_command 関数を使うようにしました <!-- Use run\_command for lxc-usernsexec -->
 * console: ピアが exit した際には tty の状態をクリアし、0 を返すようにしました <!-- Clean tty state + return 0 on peer exit -->
 * console: 'stdin' が tty ではないときは winsize を調整するハンドルを追加しないようにしました <!-- DO NOT add the handles of adjust winsize when the 'stdin' is not a tty -->
 * console: 'lxc\_tty\_state' のメモリリークを修正しました <!-- Fix memory leak of 'lxc\_tty\_state' -->
 * console: 使われない変数割り当てを削除しました <!-- Remove dead assignments -->
 * core: MS\_RDONLY でマウントされている場合は、MS\_REMOUNT フラグ付きで remount するようにしました <!-- Do remount with the MS\_REMOUNT flag when mounts with MS\_RDONLY -->
 * core: x32 でエラーになっていたフォーマット文字列を修正しました <!-- Fix a format string build failure on x32 -->
 * core: Android 向けに include を修正しました <!-- Fix includes for Android -->
 * core: メモリとリソースのリークを修正しました <!-- Fix memory and resource leak -->
 * core: cppcheck の警告をいくつか修正しました <!-- Fix some cppcheck warnings -->
 * core: 'stdoutfd' を代入していない 'ts-\>stdoutfd' のバグを修正しました <!-- Fix the bug of 'ts-\>stdoutfd' did not fill with parameters 'stdoutfd' -->
 * core: Android 向けに自前の mntent を include するようにしました <!-- Include custom mntent for Android -->
 * core: userns\_exec\_1() 関数内でロギング関数を呼ぶようにしました <!-- Log function called in userns\_exec\_1() -->
 * core: `__func__` マクロを削除しました <!-- Remove the `__func__` macro -->
 * core: 使っていないマクロを削除しました <!-- Remove the unused macro -->
 * core: "priority" を "level" に置き換えました (訳注: ログ関連の定数名)<!-- Replace "priority" with "level" -->
 * core: lxc.pc に prefix を追加した変更を元に戻しました <!-- Revert "Add a prefix to the lxc.pc" -->
 * core: root -> am\_root (訳注: 構造体のメンバ名の変更)
 * core: struct bdev -> struct lxc\_storage (訳注: 構造体名の変更)
 * core: .gitignore を更新しました <!-- Update .gitignore -->
 * core: ログのフォーマット文字列として `%m` の代わりに `strerror(errno)` を使うようにしました <!-- Use strerror(errno) instead of %m -->
 * criu: cmp\_version() 関数を追加しまいた <!--  Add cmp\_version() -->
 * criu: 初期化のチェックの際、正しいチェックを行うようにしました <!-- Use correct check initialization check -->
 * doc: README に CII Best Practices のバッヂを追加しました <!-- Add CII Best Practices badge to README -->
 * doc: コンソールの動きに関する説明を日本語の lxc.container.conf(5) に追加しました <!-- Add console behavior to Japanese lxc.container.conf(5) -->
 * doc: 環境変数の説明を追加しました <!-- Document missing env variables -->
 * doc: lxc-monitor(1) にあった正規表現の typo を修正しました <!-- Fix regex-typo in Japanese and Korean lxc-monitor(1) -->
<!-- * doc: Fix regex-typo in lxc-monitor.sgml.in -->
 * doc: 非特権の場合の idmap の制限に関する説明を書き換えました <!-- Reword id mapping restrictions when unpriv -->
 * doc: README を書き換えました <!-- Rework README -->
 * doc: lxc.container.conf(5) を調整しました <!-- Tweak Japanese lxc.container.conf(5) -->
<!-- * doc: Tweak lxc.container.conf a little -->
<!-- * doc: Untabify Japanese lxc.container.conf(5) -->
 * doc: get\_config\_item の API ドキュメントを更新しました <!-- Update API documentation for get\_config\_item -->
 * execute: コンソールと標準の /dev のシンボリックリンクを有効にしました <!-- Enable console & standard /dev symlinks -->
 * init: 32 と 33 のシグナルに対するコメントを更新しました <!-- Add comment for exclude 32 and 33 signals -->
 * init: include 定義の部分を調整しました <!-- Adjust include statements -->
 * init: セッションリーダーになるようにしました <!-- Become session leader -->
 * init: シグナル動作の初期化部分をループの外に移動しました <!-- Move initialization of act to outside of the loop -->
 * init: exec\*() の失敗を報告するようになりました <!-- Report exec\*() failure -->
 * init: systemd のサービスとして動作しているコンテナを停止する際には lxc-stop を使うようになりました <!-- Use lxc-stop to stop systemd service -->
 * liblxc: 確実にメモリを free() するようにしました <!-- Make sure memory is free()ed -->
 * liblxc: 要求に応じてのみ monitord を起動するようにしました <!-- Only spawn monitord on demand -->
 * liblxc: エラー時の 5 秒のタイムアウトを削除しました <!-- Remove 5s timeout on error -->
 * liblxc: snprintf() を使うようにしました <!-- Use snprintf() -->
 * liblxc: userns\_exec\_full() を使うようにしました <!-- Use userns\_exec\_full() -->
 * lock: 機能と関係ない変更を行いました <!-- Non-functional changes -->
 * lock: ロックファイルのオープンに失敗した場合は正しいエラーを返すようにしました <!-- Return the right error when open lock file failed -->
 * log: スタック破壊が起こらないようにしました <!-- Prevent stack smashing -->
 * log: 新しい lxc\_log\_init を使用するようにしました <!-- Switch to a new lxc\_log\_init function -->
 * monitor: いくつかの関数で同時に複数の fd を送受信できるようにしました <!-- Abstract lxc\_abstract\_unix\_{send,recv}\_fd for af\_unix -->
 * monitor: lxc\_cmd\_state\_server() 関数を追加しました <!-- Add lxc\_cmd\_state\_server() -->
 * monitor: TRACE レベルのログ出力をいくつか追加しました <!-- Add TRACE()ers -->
 * monitor: 不要なインクルードファイルのインクルードを削除しました <!-- Delete unneccessory include file -->
 * monitor: 不要な変数割り当てを削除しました <!-- Remove dead assignments -->
 * monitor: lxc\_abstract\_unix\_connect 関数の不要な回避コードを削除しました <!-- Remove the workaround-code for lxc\_abstract\_unix\_connect -->
 * monitor: af\_unix の不要な unlink を削除しました <!-- Remove unlink operation for af\_unix -->
 * network: 設定をクリアする関数に引数を追加しました <!-- Add arg to config clear method -->
 * network: (訳注: ↑で追加した引数に) コールバック関数を設定するようにしました <!-- Add data arg to set callback -->
 * network: ホストの veth デバイスに対する ifindex フィールドを追加しました <!-- Add ifindex field for host veth device -->
 * network: lxc\_log\_configured\_netdevs() 関数を追加しました <!-- Add lxc\_log\_configured\_netdevs() -->
 * network: 空のリンクに対する足りなかったチェックを追加しました <!-- Add missing checks for empty links -->
 * network: ネットワークカウンタを追加しました <!-- Add network counter -->
 * network: MTU を無視する場合は警告を出力するようにしました <!-- Add warning when ignoring MTU -->
 * network: インターフェースの index をクリアするようにしました <!-- Clear ifindeces -->
 * network: 非特権ネットワークのための Open vSwitch を削除しました <!-- Delete ovs for unprivileged networks -->
 * network: struct lxc\_netdev のすべてのフィールドの説明を追加しました <!-- Document all fields in struct lxc\_netdev -->
 * network: 作成できなかったネットワークデバイスを削除しないようにしました <!-- Don't delete net devs we didn't create -->
 * network: ログの文法を修正しました <!-- Fix grammar -->
 * network: lxc\_get\_netdev\_by\_idx() 関数を追加しました <!-- Implement lxc\_get\_netdev\_by\_idx() -->
 * network: openvswitch のクリーンアップスレッドの PID をログに記録するようにしました <!-- Log cleanup thread pid for openswitch -->
 * network: インターフェースインデックスをログに記録するようにしました <!-- log ifindex -->
 * network: ホスト側の veth デバイスのインターフェースインデックスをログに記録するようにしました <!-- Log ifindex for host side veth device -->
 * network: veth\_attr.pair と veth\_attr.veth1 をログに記録するようにしました <!-- Log veth\_attr.pair and veth\_attr.veth1 -->
 * network: config\_value\_empty() 関数を confile\_utils に移動しました <!-- Move config\_value\_empty() to confile\_utils -->
 * network: 作成時にネットワークのバリデーションを行うようにしました <!-- Perform network validation at creation time -->
 * network: lxc\_mkifname() を使う場面ではメモリを確保しないようにしました <!-- Remove allocation from lxc\_mkifname() -->
 * network: 不要な変数割り当てを削除しました <!-- Remove dead assignments -->
 * network: netpipe を削除しました <!-- Remove netpipe -->
 * network: 正しい名前とインターフェースインデックスを取得するようにしました <!-- Retrieve correct names and ifindices -->
 * network: ホストの veth デバイスのインターフェースインデックスを取得するようにしました <!-- Retrieve the host's veth device ifindex -->
 * network: ネットワーク作成部分を作り直しました <!-- Rework network creation -->
 * network: 非特権ネットワークでインターフェースインデックスを使うようにしました <!-- Send ifindex for unpriv networks -->
 * network: 保存したネットワークデバイスの記録を止めました <!-- Stop recording saved physical net devices -->
 * network: 正しいネットワークデバイス名を使うようにしました <!-- Use correct network device name -->
 * network: send()/recv() を使うようにしました <!-- Use send()/recv() -->
 * network: ネットワークを削除する場合は単一のヘルパ関数を使うようにしました <!-- Use single helper to delete networks -->
 * network: ネットデバイス名にはサイズを静的に割り当てた変数を使うようになりました <!-- Use static memory for net device names -->
 * openvswitch: ポートをインテリジェントに削除するようにしました <!-- delete ports intelligently -->
 * seccomp: カーネルへのロードが成功したあとに seccomp フィルターをエクスポートするようにしました <!-- Export the seccomp filter after load it into kernel successful -->
 * seccomp: ログにアクション名を出力するようにしました <!-- Print action name in log -->
 * seccomp: s/n-new-privs/no-new-privs/g
 * seccomp: `parse_config` 関数のコメントを更新しました <!-- Update comment for function `parse_config` -->
 * start: lxc\_free\_handler() を追加しました <!-- Add lxc\_free\_handler() -->
 * start: lxc\_init\_handler() を追加しました <!-- Add lxc\_init\_handler() -->
 * start: すべてのハンドラのフィールドを文書化しました <!-- Document all handler fields -->
 * start: idのマッピングなしで lxc\_map\_ids() を呼ばなくなりました <!-- Don't call lxc\_map\_ids() without id map -->
 * start: 継承した名前空間の fd は閉じなくなりました <!-- Don't close inherited namespace fds -->
 * start: data\_sock を利用する側で fd を閉じなくなりました <!-- Don't let data\_sock users close the fd -->
 * start: pty スレーブのために std{in,out,err} を dup するようにしました <!-- Dup std{in,out,err} to pty slave -->
 * start: cgroup がかならずクリーンアップされるようにしました <!-- Ensure cgroups are cleaned up -->
 * start: lxc\_check\_inherited() を一般化しました <!-- Generalize lxc\_check\_inherited() -->
 * start: tty の fd の送受信をログに記録するようにしました <!-- Log sending and receiving of tty fds -->
 * start: unshare(CLONE\_NEWCGROUP) のあとで lxc\_setup() するようにしました <!-- lxc\_setup() after unshare(CLONE\_NEWCGROUP) -->
 * start: 環境変数のセットアップをコンテナのセットアップの前に移動しました <!-- Move env setup before container setup -->
 * start: LXC\_LOG\_LEVEL 環境変数をフックに与えるようにしました <!-- Pass LXC\_LOG\_LEVEL to hooks -->
 * start: 特権の場合に rootfs を pin するようにしました <!-- Pin rootfs when privileged -->
 * start: 使われていない変数を削除しました <!-- Remove dead variable -->
 * start: クライアントに状態が登録されていなくても、古い lxc-monitord にサーバ状態を送るようにしました <!-- Send state to legacy lxc-monitord state server even if no state clients registered -->
 * start: 環境変数を正しく設定するようにしました <!-- Set environment variables correctly -->
 * start: SOCK\_DGRAM から SOCK\_STREAM に変更しました <!-- Switch from SOCK\_DGRAM to SOCK\_STREAM -->
 * start: 非特権の ID へのスイッチを特権が必要な処理が終わった最後の瞬間に行うようにしました <!-- Switch ids at last possible instance -->
 * start: デーモンとして起動する場合は分離したソケットを使うようにしました <!-- Use separate socket on daemonized start -->
 * start: userns\_exec\_full() を使うようにしました <!-- Use userns\_exec\_full() -->
 * state: lxc\_rmstate の宣言を削除しました <!-- Remove lxc\_rmstate declaration -->
 * storage: storage\_utils.{c.h} を追加しました <!-- Add storage\_utils.{c.h} -->
 * storage: segfault を防ぐようにしました <!-- Avoid segfault -->
 * storage: 同じパスの場合は元のタイプをデフォルトにしました <!-- Default to orig type on identical paths -->
 * storage: mkfs.\* の出力を記録するようにしました <!-- Record output from mkfs.\* -->
 * storage: "bdev" -> "storage" とリネームしました <!-- Rename files "bdev" -> "storage" -->
 * storage: userns\_exec\_full() を使うようにしました <!-- Use userns\_exec\_full() -->
 * storage/dir: 必要なフラグを追加するために add-required\_remount\_flags 関数を使うようにしました <!-- Using 'add-required\_remount\_flags' function to add required flags -->
 * storage/loop: loop ファイルを検出するようにしました <!-- Detect loop file -->
 * storage/overlayfs: 間違ったパスを修正しました <!-- Fix wrong path -->
 * storage/overlay: スナップショット時のoverlayfsを扱いを変更しました <!-- Handle overlay for stable 2.0 -->
 * template: userns.conf から廃止になった bind-mounts を削除しました <!-- Remove obsolete bind-mounts from userns.conf -->
 * template: キャッシュされた rootfs をコピーする際に "rsync -SHaAX" を使うようにしました <!-- Use "rsync -SHaAX" to copy the cached rootfs into place -->
 * template/alpine: ppc64le のサポートを追加しました <!-- Add support for ppc64le -->
 * template/alpine: ファイルの存在チェック時にサイズが 0 でないこともチェックするようにしました <!-- Change file check to also check file size (`-f` => `-s`) -->
 * template/archlinux: ロケールを "en-US.UTF-8" から "en\_US.UTF-8" に変更しました <!-- Change locale "en-US.UTF-8" to "en\_US.UTF-8" -->
 * template/centos: パッケージリストに cronie を追加しました <!-- Add cronie to the pkg list -->
 * template/centos: i386 と x86\_64 以外のアーキの CentOS では AltArch ミラーを使うようになりました <!-- Use altarch mirror for CentOS on arches other than i386 and x86\_64 -->
 * template/debian: aarch64 -> arm64 のマッピングを追加しました <!-- Add aarch64 -> arm64 mapping -->
 * template/debian: buster を有効なリリースとして追加しました <!-- Add buster as a valid release -->
 * template/debian: getty@ の設定を強制しなくなりました <!-- Don't force getty@ configuration -->
 * template/debian: デフォルトの Debian ミラーとして deb.debian.org を使うようになりました <!-- Use deb.debian.org as the default Debian mirror -->
 * template/download: 文法エラーを修正しました<!-- Fix syntax error -->
 * template/download: shellcheck でスクリプトのサニタイズを行いました <!-- Sanitize script with shellcheck -->
 * template/opensuse: Tumbleweed をサポートするリリースに追加しました <!-- Add Tumbleweed as supported release -->
 * template/opensuse: Tumbleweed でのソフトウェアの選択の問題を修正しました <!-- Fix tumbleweed software selection -->
 * template/opensuse: getty.target.wants が存在しない場合の処理を追加しました <!-- getty.target.wants does not always exists -->
 * template/opensuse: leap 42.3 をサポートしました <!-- Support leap 42.3 -->
 * template/opensuse: Tumbleweed は update リポジトリを持たないので対応した処理を行うようにしました <!-- Tumbleweed has no update repo -->
 * template/plamo: コンテナのシャットダウン時の不要な処理を削除しました <!-- Delete unnecessary process during container shutdown -->
 * template/ubuntu: netplan の判断を、config ディレクトリのチェックから netplan コマンドをチェックするようにしました <!-- Check that there is netplan binary, rather than just just a config directory -->
 * template/ubuntu: upstart の ssh ジョブは現在オプショナルなので、条件付きで mv するようにしました。<!-- Conditionally move upstart ssh job, as it is now optional -->
 * template/ubuntu: 新しいリリースではデフォルトで netplan をサポートするようになりました <!-- Support netplan in newer releases by default -->
 * tests: lxc-user-nic のテストを新しい文法に合わせました <!-- Adapt lxc-user-nic tests to new syntax -->
 * tests: lxc\_safe\_{u}int() の異常系テストを追加しました <!-- Add corner-case tests for lxc\_safe\_{u}int() -->
 * tests: アイテムをクリアするテストと設定ファイルのテストを追加しました <!-- Add item clear and config file tests -->
 * tests: lxc.rootfs.options の ro オプションのためのテストスクリプトを追加しました <!-- Add test script to test the ro option of lxc.rootfs.options -->
 * tests: idmap パーサーのユニットテストを追加しました <!-- Add unit tests for idmap parser -->
 * tests: NULL ポインタへの参照を防ぎました <!-- Avoid NULL pointer dereference -->
 * tests: 可能な場合は常に返り値と期待する値を比較するようにしました <!-- Compare return value to expected value whenever we can -->
 * tests: チェックの前にネットワークを定義するようにしました <!-- Define a network before checks -->
 * tests: ユーザに対するプロセスがないときは失敗しないようにしました <!-- Don't fail when no processes for the user exist -->
 * tests: すべての設定項目に対するメソッドを強制するようになりました <!-- Enforce all methods for config items -->
 * tests: 不要な割り当てを削除しました <!-- Remove dead assignments -->
 * tests: テンポラリのコンテナディレクトリを削除するようになりました <!-- Remove the temp container directory -->
 * tests: 短命のデーモン化するコンテナのテストを追加しました <!-- Shortlived daemonized containers -->
 * tests: systemd のハイブリッドな cgroup をサポートしました <!-- Support systemd hybrid cgroups -->
 * tools: 追加の cgroup のチェックを追加しました <!-- Add additional cgroup checks -->
 * tools: LXC\_DEVEL が true の場合は "-devel" と表示するようにしました <!-- Print "-devel" when LXC\_DEVEL is true -->
 * tools/lxc-attach: /dev/tty がない状況でも利用できるようになりました <!-- Allow for situations without /dev/tty -->
 * tools/lxc-checkconfig: "which" を使うようにしました <!-- Use "which" -->
 * tools/lxc-checkconfig: CONFIG\_NETFILTER\_XT\_MATCH\_COMMENT を追加しました <!-- Add CONFIG\_NETFILTER\_XT\_MATCH\_COMMENT -->
 * tools/lxc-checkconfig: ステータスをチェックするプローブを追加しました <!-- Add probe status checking -->
 * tools/lxc-execute: 失敗した場合はエラーメッセージを出力するようにしました <!-- Print error message when failed -->
 * tools/lxc-ls: デフォルトですべてのコンテナを返すようになりました <!-- Return all containers by default -->
 * tools/lxc-monitord: quit コマンドを受信したら exit するようになりました <!-- Exit when receiving a quit command -->
 * tools/lxc-unshare: NULL ポインターを与えないようにしました <!-- Do not pass NULL pointer -->
 * tools/lxc-user-nic: 新たにサブコマンド create, delete を追加しました <!-- Add new {create,delete} subcommands -->
 * tools/lxc-user-nic: 削除しようとする前に db のチェックを行うようにしました <!-- Check db before trying to delete -->
 * tools/lxc-user-nic: データベースエントリの追加時の問題を修正しました <!-- Fix adding database entries -->
 * tools/lxc-user-nic: メモリリークを修正しました <!-- Fix memleak -->
 * tools/lxc-user-nic: メモリを free するようにしました。エラーのチェックを追加しました <!-- Free memory and check for error -->
 * tools/lxc-user-nic: gcc-7 で警告がでないように変数を初期化するようにしました <!-- Initialize vars to silence gcc-7 -->
 * tools/lxc-user-nic: 指定したユーザやリンク以外の行を削除しないようにしました <!-- Keep lines from other {users,links} -->
 * tools/lxc-user-nic: master と stable の差をなくしました <!-- Remove delta between master + stable -->
 * tools/lxc-user-nic: 二重の初期化を削除しました <!-- Remove double initialization -->
 * tools/lxc-user-nic: ネットデバイスをリネームする処理を書き換えました <!-- Rework renaming net devices -->
 * tools/lxc-user-nic: ロジックを簡素化しました <!-- Simplify logic -->
 * tools/lxc-user-nic: delete コマンドを実行する際にネットワーク名前空間上で必要な権限があるかどうかチェックするようにしました <!-- Test privilege over netns on delete -->
 * tools/lxc-usernsexec: 不要な割り当てを削除しました <!-- Remove dead assignments -->
 * travis: ビルドを修正しました <!-- Fix builds -->
 * utils: has\_fs\_type() と is\_fs\_type() を追加しました <!-- Add has\_fs\_type() + is\_fs\_type() -->
 * utils: lxc\_nic\_exists() を追加しました <!-- Add lxc\_nic\_exists() -->
 * utils: lxc\_safe\_ulong() を追加しました。 <!-- Add lxc\_safe\_ulong() -->
 * utils: run\_command を追加しました <!-- Add run\_command -->
 * utils: fork 後の子プロセス内で親の fd をクローズするようにしました <!-- Close parent end in child process after fork -->
 * utils: サイズ 0 のバッファへ書き込まないようにしました <!-- Do not write to 0 sized buffer -->
 * utils: lxc\_popen() 内で stderr を複製するようにしました <!-- Duplicate stderr as well in lxc\_popen() -->
 * utils: lxc\_mount\_proc\_if\_needed() を修正しました <!-- Fix lxc\_mount\_proc\_if\_needed() -->
 * utils: lxc\_popen()/lxc\_pclose() を修正しました <!-- Fix lxc\_popen()/lxc\_pclose() -->
 * utils: realpath のメモリリークを修正しました <!-- Fix mem leak with realpath -->
 * utils: 数字をパースする関数を修正しました <!-- Fix num parsing functions -->
 * utils: ppc64le のビルドを修正しました <!-- Fix ppc64le builds -->
 * utils: ブロックされた信号を検出する方法を修正しました <!-- Fix the way to detect blocking signal -->
 * utils: lxc\_popen() 内の不要な割り当てを削除しました <!-- lxc\_popen() remove dead assignments -->
 * utils: cgfsng.c から utils.{c,h} へヘルパ関数を移動させました <!-- Move helpers from cgfsng.c to utils.{c,h} -->
 * utils: lxc\_deslashify() 関数を作りなおしました <!-- Rework lxc\_deslashify() -->
 * utils: has\_fs\_type() にスイッチしました <!-- Switch to has\_fs\_type() -->
 * utils: オーバーフローしてしまうので 1LU を使うようにしました <!-- Use 1LU otherwise we overflow -->
 * utils: stat の代わりに access を使うようにしました <!-- Use access instead of stat -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions
will very soon ship a packaged version of LXC 2.0.9.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 2.0.9 のパッケージをリリースするでしょう。

<!--
Should you be interested in individual changes or just looking at the detailed development history,
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-2.0).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable-2.0 ブランチが [Github](https://github.com/lxc/lxc/tree/stable-2.0) にあります。


## LXC 1.0.11 リリースのお知らせ <!-- LXC 1.0.11 release announcement --><span class="text-muted">19th of October 2017</span>
<!--
This is the eleventh bugfix release for LXC 1.0.
-->
このリリースは LXC 1.0 の 11 回目のバグフィックスリリースです。

バグ修正 <!-- Bugfixes -->:

 * apparmor: コンテナが AppArmor namespace 内で起動できるようになりました <!-- Allow containers to start in AppArmor namespaces -->
 * apparmor: apparmor の不要な deny を削除しました <!-- Drop useless apparmor denies -->
 * conf: libcap がない場合のビルドの問題を修正しました <!-- Fix building without libcap -->
 * conf: netdev-\>downscript 変数を free するようにしました <!-- Free netdev-\>downscript -->
 * conf: write\_id\_mapping() 関数を改良しました <!-- Improve write\_id\_mapping() -->
 * conf: 機能と関係ない変更を行いました <!-- Non-functional changes -->
 * conf: 設定をパースする関数を全体的にリファクタリングしました <!-- Refactor most of the parsing functions -->
 * console: 機能と関係ない変更を行いました <!-- Non-functional change -->
 * core: `__func__` マクロを削除しました <!-- Remove the `__func__` macro -->
 * core: ログのフォーマット文字列として `%m` の代わりに `strerror(errno)` を使うようにしました <!-- Use strerror(errno) instead of %m -->
 * doc: README に CII Best Practices のバッヂを追加しました <!-- Add CII Best Practices badge to README -->
 * doc: コマンドに対する足りていなかった変換を追加しました <!-- Add missing translations for commands -->
 * doc: typo を修正しました <!-- Fix a typo -->
 * doc: lxc-monitor(1) にあった正規表現の typo を修正しました <!-- Fix regex-typo in Japanese and Korean lxc-monitor(1) -->
<!-- * doc: Fix regex-typo in lxc-monitor.sgml.in -->
 * doc: 非特権の場合の idmap の制限に関する説明を書き換えました <!-- Reword idmap restrictions when unpriv -->
 * doc: get\_config\_item の API を更新しました <!-- Update API for get\_config\_item -->
 * doc: README を更新しました <!-- Update README -->
 * init: 32 と 33 のシグナルに対するコメントを更新しました <!-- Add comment for exclude 32 and 33 signals -->
 * liblxc: snprintf() を使うようにしました <!-- Use snprintf() -->
 * lock: 機能と関係ない変更を行いました <!-- Non-functional changes -->
 * lock: ロックファイルのオープンに失敗した場合は正しいエラーを返すようにしました <!-- Return the right error when open lock file failed -->
 * monitor: af\_unix の unlink 操作を削除しました <!-- Remove unlink operation in af\_unix -->
 * network: mtu を無視した場合の警告を追加しました <!-- Adding warning for mtu ignoring -->
 * network: 機能と関係ない変更を行いました <!-- Non-functional changes -->
 * seccomp: log にアクション名を表示するようにしました <!-- Print action name in log -->
 * seccomp: s/n-new-privs/no-new-privs/g
 * seccomp: `parse_config` 関数のコメントを更新しました <!-- Update comment for function `parse_config` -->
 * state: lxc\_rmstate の宣言を削除しました <!-- Remove lxc\_rmstate declaration -->
 * storage: gcc7 でビルドできるようにしました <!-- Enable building with gcc7 -->
 * template/archlinux: ロケールを "en-US.UTF-8" から "en\_US.UTF-8" に変更しました <!-- Change locale "en-US.UTF-8" to "en\_US.UTF-8" -->
 * template/centos: パッケージリストに cronie を追加しました <!-- Add cronie to the pkg list -->
 * template/centos: i386 と x86\_64 以外のアーキの CentOS では AltArch ミラーを使うようになりました <!-- Use altarch mirror for CentOS on arches other than i386 and x86\_64 -->
 * template/debian: aarch64 -> arm64 のマッピングを追加しました <!-- Add aarch64 -> arm64 mapping -->
 * template/debian: buster を有効なリリースとして追加しました <!-- Add buster as a valid release -->
 * template/debian: デフォルトの Debian ミラーとして deb.debian.org を使うようになりました <!-- Use deb.debian.org as the default Debian mirror -->
 * template/opensuse: getty.target.wants が存在しない場合の処理を追加しました <!-- getty.target.wants does not always exists -->
 * template/ubuntu: upstart の ssh ジョブは現在オプショナルなので、条件付きで mv するようにしました。<!-- Conditionally move upstart ssh job, as it is now optional. -->
 * template: キャッシュされた rootfs をコピーする際に "rsync -SHaAX" を使うようにしました <!-- Use "rsync -SHaAX" to copy the cached rootfs into place -->
 * tests: NULL ポインタへの参照を防ぎました <!-- Avoid NULL pointer dereference -->
 * tests: attach のテストケースからテンポラリの lxcpath を削除しました <!-- Remove temp lxcpath for attach testcase -->
 * tools/usernsexec: 不要な割り当てを削除しました <!-- Remove dead assignments -->
 * tools: "which" を使うようにしました <!-- Use "which" -->
 * travis: ビルドの修正を行いました <!-- Fix builds -->
 * utils: fork 後の子プロセス内で親の fd をクローズするようにしました <!-- Close parent end in child process after fork -->
 * utils: lxc\_popen() 内で stderr を複製するようにしました <!-- Duplicate stderr as well in lxc\_popen() -->
 * utils: <!-- Fix -->lxc\_popen()/lxc\_pclose() を修正しました
 * utils: realpath のメモリリークを修正しました <!-- Fix mem leak with realpath -->
 * utils: cppcheck の警告をいくつか修正しました <!-- Fix some cppcheck warnings -->
 * utils: 'stdoutfd' を代入していない 'ts-\>stdoutfd' のバグを修正しました <!-- Fix the bug of 'ts-\>stdoutfd' did not fill with parameters 'stdoutfd' -->
 * utils: lxc\_popen() 内の不要な割り当てを削除しました <!-- Remove dead assignments in lxc\_popen() -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions
will very soon ship a packaged version of LXC 1.0.11.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 1.0.11 のパッケージをリリースするでしょう。

<!--
Please note that LXC upstream strongly recommends 1.0 users to upgrade to the 2.0 LTS release.
The 1.0 branch will keep being supported until June 2019, but at this point,
only critical bugfixes and security updates will be backported.
-->
LXC 開発元として、1.0 ユーザには 2.0 LTS リリースへのアップグレードを強くおすすめします。
1.0 ブランチは 2019 年 6 月までサポートが続きます。しかし現時点では、重大なバグフィックスとセキュリティホール対策のみがバックポートされます。

<!--
Should you be interested in individual changes or just looking at the detailed development history,
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.0).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable-1.0 ブランチが [Github](https://github.com/lxc/lxc/tree/stable-1.0) にあります。


## LXC 2.1.1 リリースのお知らせ <!-- LXC 2.1.1 release announcement --><span class="text-muted">2017 年 10 月 19 日<!-- 19th of October 2017 --></span>
<!--
This is the first bugfix release for LXC 2.1.
-->
このリリースは LXC 2.1 のはじめてのバグフィックスリリースです。

バグフィックス<!-- Bugfixes -->:

 * apparmor: apparmor の不要な deny を削除しました <!-- Drop useless apparmor denies -->
 * cgfsng: 設定を持っているかどうかをチェックするようになりました <!-- Check whether we have a conf -->
 * cgfsng: 制限の適用に失敗したときにはエラーになるようにしました <!-- Fail when limits fail to apply -->
 * conf: 多数のマッピングをしようとした際にエラーになるようにしました <!-- Error out on too many mappings -->
 * conf: lxc.kmsg と lxc.pivotdir を無視するようになりました <!-- Ignore lxc.kmsg and lxc.pivotdir -->
 * conf: 環境変数が設定されているときのみ、ワーニングを出力するようにしました <!-- Make update warning opt-in -->
 * conf: 設定ファイル中の改行を保存するようにしました <!-- Preserve newlines in configuration file -->
 * conf: parse\_idmaps() 中の不要な割り当てを削除しました <!-- Remove dead assignments in parse\_idmaps() -->
 * conf: 不要な NULL による初期化を削除しました <!-- Remove unnecessary zeroing -->
 * conf: x32 でのビルドの失敗を修正するため、適切な型として rlim\_t を使うようにしました <!-- Use the proper type for rlim\_t, fixing build failure on x32. -->
 * console: ピアが exit した際には tty の状態をクリアし、0 を返すようにしました <!-- Clean tty state + return 0 on peer exit -->
 * console: 不要な変数割り当てを削除しました <!-- Remove dead assignments -->
 * core: userns\_exec\_full() 関数を追加し、それを使用するようにしました <!-- Introduce userns\_exec\_full() and port the codebase to it -->
 * criu: 初期化のチェックの際、正しいチェックを行うようにしました <!-- Use correct check initialization check -->
 * doc: lxc.cgroup.dir の説明を日本語の lxc.container.conf(5) に追加しました <!-- Add lxc.cgroup.dir to Japanese lxc.container.conf(5) -->
 * doc: lxc-update-config の manpage を追加しました <!-- Add lxc-update-config manpage -->
 * doc: 環境変数の説明を追加しました <!-- Document missing env variables -->
 * doc: lxc-monitor(1) にあった正規表現の typo を修正しました <!-- Fix regex-typo in Japanese and Korean lxc\-monitor(1) -->
<!-- * doc: Fix regex-typo in lxc-monitor.sgml.in -->
 * doc: 日本語の lxc(7) を更新しました <!-- Translate lxc(7) into Japanese -->
 * doc: 日本語の lxc-update-config(1) を追加しました <!-- Translate lxc\-update\-config(1) into Japanese -->
 * execute: コンソールと標準の /dev のシンボリックリンクを有効にしました <!-- Enable console & standard /dev symlinks -->
 * init: セッションリーダーになるようにしました <!-- Become session leader -->
 * log: x32 でエラーになっていたフォーマット文字列を修正しました <!-- Fix a format string build failure on x32. -->
 * log: スタック破壊が起こらないようにしました <!-- Prevent stack smashing -->
 * monitor: 不要な変数割り当てを削除しました <!-- Remove dead assignment -->
 * network: 空のリンクのチェックを行うようにしました <!-- Add missing checks for empty links -->
 * network: インターフェースの index をクリアするようにしました <!-- Clear ifindeces -->
 * network: 機能と関係ない変更を行いました <!-- Non-functional changes -->
 * network: 不要な変数割り当てを削除しました <!-- Remove dead assignments -->
 * network: ネットワークの削除の際は単一のヘルパを使うようにしました <!-- Use single helper to delete networks -->
 * start: 継承した名前空間の fd はクローズしないようにしました <!-- Don't close inherited namespace fds -->
 * start: 環境変数のセットアップをコンテナのセットアップの前に移動しました <!-- Move env setup before container setup -->
 * start: LXC\_LOG\_LEVEL 環境変数をフックに与えるようにしました <!-- Pass LXC\_LOG\_LEVEL to hooks -->
 * start: 使われていない変数を削除しました <!-- Remove dead variable -->
 * start: 環境変数を正しく設定するようにしました <!-- Set environment variables correctly -->
 * start: 非特権の ID へのスイッチを特権が必要な処理が終わった最後の瞬間に行うようにしました <!-- Switch ids at last possible instance -->
 * storage: lxc.rootfs.path がない場合の segfault を防止しました <!-- Avoid segfault on missing lxc.rootfs.path -->
 * storage: エラーメッセージ中の typo を修正しました <!-- Fix typo in error message -->
 * storage/lvm: 論理ボリュームが Thinpool であるときの処理を修正しました <!-- Fix thinpool logical volumes -->
 * storage/overlay: 正しくないメモリ操作を修正しました <!-- Do not write to invalid memory -->
 * storage/overlay: use after free を修正しました <!-- Fix use after free() -->
 * storage/zfs: zfs の作成に失敗した場合は直接エラーを返すようにしました <!-- Return error directly when zfs creation fails -->
 * template/alpine: ファイルの存在チェック時にサイズが 0 でないこともチェックするようにしました <!-- Change file check to also check file size -->(`-f` => `-s`)
 * template/archlinux: ロケールを "en-US.UTF-8" から "en\_US.UTF-8" に変更しました <!-- Change locale "en-US.UTF-8" to "en\_US.UTF-8" -->
 * template/debian: getty@ の設定を強制しなくなりました <!-- Don't force getty@ configuration -->
 * template/plamo: コンテナのシャットダウン時の不要な処理を削除しました <!-- Delete unnecessary process during container shutdown -->
 * tests: NULL ポインタへの参照を防ぎました <!-- Avoid NULL pointer dereference -->
 * tests: 不要な変数割り当てを削除しました <!-- Remove dead assignments -->
 * tests: systemd のハイブリッドな cgroup をサポートしました <!-- Support systemd hybrid cgroups -->
 * tools: LXC\_DEVEL が true の場合は "-devel" を表示するようにしました (訳注: バージョン番号の話)<!-- Print "-devel" when LXC\_DEVEL is true -->
 * tools/lxc-unshare: NULL ポインタを与えないようにしました <!-- Do not pass NULL pointer -->
 * tools/lxc-update-config: lxc.pivotdir と lxc.kmsg のエントリを削除するようにしました <!-- Remove lxc.pivotdir and lxc.kmsg entries -->
 * tools/lxc-update-config: lxc.rootfs.backend 行を削除し、IPv4 アドレスを正しく扱えるようにしました <!-- Strip lxc.rootfs.backend and properly handle IPv4 addresses -->
 * tools/lxc-user-nic: 二重の初期化を削除しました <!-- Remove double initialization -->
 * tools/lxc-usernsexec: 不要な変数割り当てを削除しました <!-- Remove dead assignments -->
 * utils: サイズ 0 のバッファへ書き込まないようにしました <!-- Do not write to 0 sized buffer -->
 * utils: lxc\_popen() 内で stderr を複製するようにしました <!-- Duplicate stderr as well in lxc\_popen() -->
 * utils: <!-- Fix -->lxc\_popen()/lxc\_pclose() を修正しました
 * utils: lxc\_popen() 内の不要な変数割り当てを削除しました <!-- Remove dead assignments in lxc\_popen() -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions
will very soon ship a packaged version of LXC 2.1.1.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 2.1.1 のパッケージをリリースするでしょう。

<!--
Should you be interested in individual changes or just looking at the detailed development history,
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-2.1).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable ブランチが [Github](https://github.com/lxc/lxc/tree/stable-2.1) にあります。

## LXC 2.1 リリースのお知らせ <!-- LXC 2.1 release announcement --><span class="text-muted">2017 年 9 月 5 日<!-- 5th of September 2017 --></span>
<!--
The LXC team is proud to announce the release of LXC 2.1.
This release contains a lot of new features introduced since the release of LXC 2.0.
-->
LXC チームは LXC 2.1 のリリースをお知らせすることを誇りに思います。
このリリースには LXC 2.0 以降に追加されたたくさんの機能が含まれています。

<!--
Note that this isn't a LTS release and we'll therefore only be supporting LXC 2.1 for a year.
Production environments that require longer term support should remain on LXC 2.0 which is supported until June 2021.
-->
このリリースは LTS リリースではないことに注意してください。LTS リリースではありませんので、LXC 2.1 のサポートは 1 年間のみです。長い期間のサポートが必要なプロダクション環境では 2021 年 6 月までサポートされる LXC 2.0 を使い続けてください。

## 新機能 <!-- New features -->
### リソース制限のサポート<!-- Resource limit support -->
<!--
Similar to requesting specific cgroup limits users can specify any limits for any resource
the underlying kernel is aware of by prefixing the name of the limit with "lxc.prlimit."
in the container's configuration file. For example, to request a limit on the number of processes
and a specific nice value the configuration file for the container should contain the entries:
-->
cgroupを使った制限を指定するのと同じように、コンテナの設定ファイル内で、制限名に "lxc.prlimit." というプレフィックスをつけて、カーネルが対応しているすべてのリソースの制限を設定できます。例えば、プロセス数の制限を設定し、同時に nice 値を指定するには、コンテナの設定ファイルで次のように指定します:

    lxc.prlimit.nproc = unlimited
    lxc.prlimit.nice = 4

### 非特権での Open vSwitch ネットワークのサポート <!-- Support for unprivileged openvswitch networks -->
<!--
It is now possible to define openvswitch networks as an unprivileged user:
-->
非特権ユーザで次のように openvswitch ネットワークを定義できるようになりました:

    lxc.net.0.type = veth
    lxc.net.0.link = ovsbr0
    lxc.net.0.flags = up
    lxc.net.0.name = eth0

<!--
LXC 2.1. will take care to properly delete the host-side veth device from the
openvswitch database on shutdown.
-->
LXC 2.1 は、シャットダウン時に openvswitch からホスト側の veth デバイスを適切に削除する処理を行います。

### 新たな設定項目 `lxc.cgroup.dir` <!-- New `lxc.cgroup.dir` key -->
<!--
The `lxc.cgroup.dir` key lets users specify the name of the parent cgroup under
which the container's cgroup will be created. Setting `lxc.cgroup.dir` will
override the system-wide setting for `lxc.cgroup.pattern`.
-->
`lxc.cgroup.dir` を設定することで、コンテナ用の cgroup を作成する親となる cgroup 名を指定できるようになりました。`lxc.cgroup.dir` はシステムワイドの設定である `lxc.cgroup.pattern` を上書きします。

<!--
For example, setting `lxc.cgroup.dir = mycontainers` for a container with `lxc.uts.name = c1`
will cause LXC to create the cgroups `mycontainers/c1` for all controllers in the cgroup hierarchy.
-->
例えば、`lxc.uts.name = c1` と設定されたコンテナに `lxc.cgroup.dir = mycontainers` と設定すると、LXC は cgroup 階層内のすべてのコントローラで、`mycontainers/c1` という cgroup を作ります。

### hybrid cgroup レイアウトのサポート <!-- Support for hybrid cgroup layout -->
<!--
Since the advent of cgroup v2 some init systems have decided to allow for a hybrid mode in which
cgroup v1 per-controller hierarchies can be used simultaneously with an empty cgroup v2 hierarchy.
Systems that use this hybrid mode usually have a cgroup layout similar to this one:
-->
cgroup v2 が導入されてから、一部の init システムでは cgroup v1 のコントローラごとの階層と、空の cgroup v2 階層を同時に使える hybrid モードが使えるようになりました。hybrid モードを使うシステムは、通常は次と同じような cgroup レイアウトになります:

      /sys/fs/cgroup/blkio
      /sys/fs/cgroup/devices
      /sys/fs/cgroup/memory
      /sys/fs/cgroup/unified

<!--
Where the mountpoint `/sys/fs/cgroup/unified` usually indicates the presence of a cgroup v2 hierarchy.
This can be confirmed by testing whether `findmnt | grep cgroup2` returns a matching line.
LXC 2.1 supports this hybrid mode.
-->
マウントポイント `/sys/fs/cgroup/unified` は、通常は cgroup v2 階層の存在を示します。これは `findmnt | grep cgroup2` が一致する行を返すかどうかをテストすることで確認できます。LXC 2.1 はこの hybrid モードをサポートします。

### コンテナが割り当てることができる pty の数を制限する <!-- Limiting the number of ptys a container can allocate -->
<!--
Setting `lxc.pty.max` will cause LXC to mount the container's devpts with the requested limit
on the number of useable ptys. For example, setting `lxc.pty.max = 10` will only allow
the container to allocate `10` ptys. The default setting is `1024`.
-->
`lxc.pty.max` を設定すると、LXC は、使える pty の数に指定した制限を設定した上で、コンテナの devpts をマウントします。例えば、`lxc.pty.max = 10` と設定すると、コンテナは `10` 個の pty だけしか割り当てられません。デフォルト値は `1024` です。

### `bool lxc_config_item_is_supported(const char *key)` API 拡張 <!-- extension -->
<!--
This function let's users query the liblxc whether a specific configuration item is supported for this library.
This is particularly useful for embedded users that running versions of liblxc that come with significantly
less configuration options than the standard liblxc library or liblxc's that have backported new configuration items.
-->
この関数は、特定の設定項目がライブラリでサポートされているかどうかをユーザが問い合わせるための関数です。この関数は、標準的な liblxc ライブラリや、新しい設定項目がバックポートされた liblxc よりもはるかに少ない設定オプションを持つ liblxc のバージョンを実行する組み込みユーザに特に役に立つでしょう。


### 新しいログ API 拡張 <!-- New log API extension -->

    struct lxc_log {
        const char *name;
        const char *lxcpath;
        const char *file;
        const char *level;
        const char *prefix;
        bool quiet;
    };

    /*!
     *\brief Initialize the log
     *
     *\param log lxc log configuration.
     */
    int lxc_log_init(struct lxc_log *log);

    /*!
     * \brief Close log file.
     */
    void lxc_log_close(void);

<!--
These types and functions let users initialize LXC logging. This is useful for users who use the liblxc API directly.
-->
上記の構造体や関数は、ユーザが LXC のロギングを初期化できるようにするためのものです。liblxc の API を直接使うユーザには役に立つでしょう。

### `lxc-monitord` が廃止予定に <!-- Deprecation of `lxc-monitord` -->
<!--
Starting with LXC 2.1 the `lxc-monitord` binary is marked as deprecated.
It is not required anymore to start daemonized containers. Instead, LXC 2.1 switches to an implementation using
an abstract unix domain socketpair. This has the advantage of spawning one less processes on container startup which is
important for highly threaded users such as `LXD`.
-->
LXC 2.1 から `lxc-monitord` バイナリは廃止予定になりました。デーモン化されたコンテナの起動には `lxc-monitord` はもう不要です。代わりに、LXC 2.1 では abstract unix ドメインソケットペアを使った実装に切り替えました。これは、`LXD` のような高度にスレッド化されたコンテナの起動において、起動するプロセスがひとつ少なくなるという利点があります。

<!--
Also, testing the new implementation on heavy workloads has shown this solution to be more robust and reliable in every way.
-->
また、重い負荷で行った新しい実装のテストで、このソリューションがより堅牢で信頼性が高いことがわかりました。

### `lxc-copy` は `tmpfs` 上にスナップショットを作ります <!-- `lxc-copy` create snapshots on `tmpfs` -->
<!--
Place an ephemeral container started with -e flag on a tmpfs.
Restrictions are that you cannot request the data to be kept while placing the container on a tmpfs,
that either overlay or aufs backing storage must be used, and that the storage backend of the original
container must be a directory.
-->
`-e` オプションを付けて起動した一時的 (ephemeral) なコンテナは tmpfs 上に置かれます。
tmpfs 上にコンテナを置きながらデータの保存は要求できません。そして、バッキングストアとして overlay か aufs を使わなければならず、オリジナルのコンテナは directory でなくてはいけません。

<!--
For ephemeral snapshots backed by overlay or aufs filesystems, a fresh tmpfs is mounted over the containers directory
if the user requests it. This should be the easiest options. Anything else would require us to change the current
mount-layout of overlay and aufs snapshots. A standard overlay or aufs snapshot clone currently has the layout:
-->
overlay もしくは aufs ファイルシステムを使った一時的なスナップショットのために、ユーザの要求に応じて新しい tmpfs がコンテナディレクトリ上にマウントされます。これは最も簡単なオプションです。それ以外の場合は、現在の overlay と aufs スナップショットのマウントレイアウトを変更する必要があります。標準では overlay と aufs のスナップショットクローンのレイアウトは次のようになります:

            /var/lib/lxc/CLONE_SNAPSHOT/delta0      <-- upperdir
            /var/lib/lxc/CLONE_SNAPSHOT/rootfs
            /var/lib/lxc/CLONE_SNAPSHOT/olwork
            /var/lib/lxc/CLONE_SNAPSHOT/olwork/work <-- workdir

    with the lowerdir being

            /var/lib/lxc/CLONE_PARENT/rootfs

<!--
The fact that upperdir and workdir are not placed in a common subfolder under the container directory
has the consequence that we cannot simply mount a fresh tmpfs under upperdir and workdir
because overlay expects them to be on the same filesystem.
-->
upperdir と workdir がコンテナディレクトリ以下の共通のサブディレクトリ内に置かれていないということは、新しい tmpfs を単純に upperdir と workdir の下にマウントできないということになります。なぜなら overlayfs はこのふたつが同じファイルシステム上にあることを期待しているからです。

<!--
Because we mount a fresh tmpfs over the directory of the container the updated /etc/hostname file created
during the clone residing in the upperdir (currently named "delta0" by default) will be hidden.
-->
コンテナディレクトリ上に新しい tmpfs をマウントするので、upperdir (現在はデフォルトで "delta0" という名前) 内にクローン中に作成される、更新された `/etc/hostname` ファイルが隠されてしまいます。

<!--
Hence, if the user requests that the old name is not to be kept for the clone, we recreate this file on the tmpfs.
This should be all that is required to restore the exact behaviour we would get with a normal clone.
NOTE: If the container is rebooted all changes made to it are lost. This is not easy to prevent since each reboot remounts the rootfs again.
-->
したがって、ユーザが古い名前をクローンで保存しないように要求した場合は、このファイルを tmpfs 上に再作成します。
これで、通常のクローン処理での正確な動作をリストアするために必要なことすべてのはずです。
注: もしコンテナを再起動した場合、すべての変更は失われます。リブートごとに rootfs が再度マウントされますので、これを防ぐのは容易ではありません。

## 設定項目名の変更 <!-- Configuration changes -->
<!--
A lot of configuration keys have been renamed to make the experience of configuring a container much more consistent.
LXC 2.1 ensures that all keys that have subkeys are properly namespaces via the "." syntax.
-->
コンテナの設定がより一貫性を持って行えるように、多数の設定項目の名前が変わりました。
LXC 2.1 では、すべての設定項目が "." で分けられた適切なネームスペースから構成されるサブキーを持つようになりました。

### ネットワーク設定 <!-- Network configuration -->
<!--
The network configuration keys have all been given a new prefix. Some of them  have also been renamed.
From LXC 2.1. onwards network configuration keys using the "lxc.network" prefix are considered deprecated.
They are replaced by network configuration keys using the new "lxc.net" prefix.
Furthermore, defining network without indices is marked deprecated.
Consider the following *legacy* network configuration:
-->
ネットワークの設定で、新しいプレフィックスを導入しました。いくつかの項目はリネームされました。
LXC 2.1 からは、(以前の) "lxc.network" を使ったネットワークの設定項目は廃止予定という扱いになります。
これは "lxc.net" プレフィックスを使った設定に置き換えられます。
さらにインデックスを使わないネットワーク定義は廃止予定とマークされます。次のようなネットワーク設定は *legacy* なネットワーク設定であるとみなされます:

    lxc.network.type = veth
    lxc.network.flags = up
    lxc.network.link = lxcbr0
    lxc.network.name = wlp2s0

    lxc.network.type = veth
    lxc.network.flags = up
    lxc.network.link = lxcbr0
    lxc.network.name = eno1

<!--
Would define two distinct networks. Starting with LXC 2.1 this should be replaced with:
-->
上の設定は 2 つの異なったネットワークを定義しています。LXC 2.1 以降は、次のように置き換えてください:

    lxc.net.0.type = veth
    lxc.net.0.flags = up
    lxc.net.0.link = lxcbr0
    lxc.net.0.name = wlp2s0

    lxc.net.1.type = veth
    lxc.net.1.flags = up
    lxc.net.1.link = lxcbr0
    lxc.net.1.name = eno1

<!--
Defining networks only in this manner has the advantage of being consistent and order independent.
This means an equivalent configuration for the two networks would be:
-->
この方法だけで定義を行うと、定義する順序には依存しない、一貫性のある定義になる利点があります。
つまり、次のような 2 つのネットワークの設定と同等となります:

    lxc.net.1.link = lxcbr0
    lxc.net.0.name = wlp2s0
    lxc.net.0.type = veth

    lxc.net.1.type = veth
    lxc.net.1.flags = up
    lxc.net.0.flags = up
    lxc.net.0.link = lxcbr0
    lxc.net.1.name = eno1

<!--
Note that when using multiple definitions of the same key with the same index only the last one
will be considered by LXC. This is in line with prior LXC version. For example:
-->
同じインデックスの同じ設定が複数ある場合は、LXC は最後の設定を採用することに注意が必要です。これはこれまでのバージョンの LXC と同じ動作です。例えば:

    lxc.net.2.link = lxcbr0
    lxc.net.2.link = lxdbr0
    lxc.net.2.link = br0
    lxc.net.2.link = virbr0

<!--
would lead to LXC associating the network with `virbr0` since it is the last key in the configuration.
-->
上のような設定では、LXC は、最後の設定が `virbr0` に設定されているため、ネットワークは `virbr0` に関連付けられます。

### 変更された設定項目一覧 <!-- Table of changed configuration keys -->
<!--
The following table lists the legacy configuration keys on the left side and their corresponding new keys on the right side. Keys that have been entirely removed will have "-" as entry in the "New Key" column and a comment saying "removed" in the "Comments" table.
-->
次の表は左の列に以前の設定項目 ("Legacy Key") を、右の列に変更後の設定項目 ("New Key") を一覧したものです。完全に削除された項目は、"New Key" に "-" と表記し、"Comments" 欄に "removed" と書いています。

    Legacy Key                           | New Key                       | Comments
    -------------------------------------|-------------------------------|---------
    lxc.aa_profile                       | lxc.apparmor.profile          |
    lxc.aa_allow_incomplete              | lxc.apparmor.allow_incomplete |
    lxc.console                          | lxc.console.path              |
    lxc.devttydir                        | lxc.tty.dir                   |
    lxc.haltsignal                       | lxc.signal.halt               |
    lxc.id_map                           | lxc.idmap                     |
    lxc.init_cmd                         | lxc.init.cmd                  |
    lxc.init_gid                         | lxc.init.gid                  |
    lxc.init_uid                         | lxc.init.uid                  |
    lxc.kmsg                             | -                             | removed
    lxc.limit                            | lxc.prlimit                   |
    lxc.logfile                          | lxc.log.file                  |
    lxc.loglevel                         | lxc.log.level                 |
    lxc.mount                            | lxc.mount.fstab               |
    lxc.network                          | lxc.net                       |
    lxc.network.                         | lxc.net.[i].                  |
    lxc.network.flags                    | lxc.net.[i].flags             |
    lxc.network.hwaddr                   | lxc.net.[i].hwaddr            |
    lxc.network.ipv4                     | lxc.net.[i].ipv4.address      |
    lxc.network.ipv4.gateway             | lxc.net.[i].ipv4.gateway      |
    lxc.network.ipv6                     | lxc.net.[i].ipv6.address      |
    lxc.network.ipv6.gateway             | lxc.net.[i].ipv6.gateway      |
    lxc.network.link                     | lxc.net.[i].link              |
    lxc.network.macvlan.mode             | lxc.net.[i].macvlan.mode      |
    lxc.network.mtu                      | lxc.net.[i].mtu               |
    lxc.network.name                     | lxc.net.[i].name              |
    lxc.network.script.down              | lxc.net.[i].script.down       |
    lxc.network.script.up                | lxc.net.[i].script.up         |
    lxc.network.type                     | lxc.net.[i].type              |
    lxc.network.veth.pair                | lxc.net.[i].veth.pair         |
    lxc.network.vlan.id                  | lxc.net.[i].vlan.id           |
    lxc.pivotdir                         | -                             | removed
    lxc.pts                              | lxc.pty.max                   |
    lxc.rebootsignal                     | lxc.signal.reboot             |
    lxc.rootfs                           | lxc.rootfs.path               |
    lxc.se_context                       | lxc.selinux.context           |
    lxc.seccomp                          | lxc.seccomp.profile           |
    lxc.stopsignal                       | lxc.signal.stop               |
    lxc.syslog                           | lxc.log.syslog                |
    lxc.tty                              | lxc.tty.max                   |
    lxc.utsname                          | lxc.uts.name                  |

### `lxc-update-config` スクリプト <!-- script -->
<!--
LXC 2.1 comes with a new script `lxc-update-config` which can be used to upgrade existing legacy
LXC configurations to valid LXC 2.1 configurations by simply passing
-->
LXC 2.1 には新しく `lxc-update-config` スクリプトが付属します。これは、以前の設定項目名を LXC 2.1 で有効な設定にアップグレードするのに使えます。次のように実行します

    lxc-update-config -c /path/to/config

<!--
The script will create a backup of the legacy configuration file first.
The name of the backup config file will by `<original-config-file-name>.backup`.
The backup is made in case the upgrade does not yield a useable LXC 2.1 config file.
After creating the backup the script will replace all legacy configuration keys with their new counterparts.
-->
このスクリプトは、最初に現在の設定ファイルのバックアップを取得します。
バックアップファイルの名前は `<original-config-file-name>.backup です。
バックアップファイルは、万が一、アップグレードで生成した設定ファイルが LXC 2.1 で使えないのに備えて作成します。
バックアップを生成したあと、スクリプトが以前の設定が新しい設定に置き換えます。

## 廃止予定の警告 <!-- Deprecation warnings -->
<!--
LXC 2.1 intends to be fully backward compatible with respect to pre-2.1 configuration files.
This specifically means that the presence of any deprecated keys should not prevent the container from being useable.
However, LXC 2.1 will warn about the presence of any deprecated configuration keys.
On container startup LXC 2.1 will warn *once* with the message:
-->
LXC 2.1 は 2.1 より前の設定ファイルとの完全な下位互換性を持っています。
つまり、いかなる廃止予定の設定であっても、コンテナが使えなくなるようにはなりません。しかし、LXC 2.1 は廃止予定の設定があると警告を行います。コンテナの起動時に、LXC 2.1 は *一度だけ* 次のような警告メッセージを出力します:

    The configuration file contains legacy configuration keys.
    Please update your configuration file.

<!--
All users are advised to use the aforementioned `lxc-update-config` script to update their configuration files.
If the container has logging enabled the log will contain warnings for each detected legacy configuration key.
This is mostly useful for users who prefer to update their configuration files manually.
-->
すべてのユーザは、前述の `lxc-update-config` スクリプトを使って、設定ファイルを更新することをおすすめします。
コンテナでロギングが有効な場合、ログには検出された以前の設定項目に関する警告が含まれます。ログを使えば、手動で設定ファイルを更新するほうが好きなユーザの役に立つでしょう。


# 変更点 <!-- Changelog -->

 * コア <!-- Core -->:
    * af unix: ソケット名を最大長まで指定できるようになりました (訳注: Abstract unix ソケットの名前)<!-- allow for maximum socket name -->
    * af\_unix: いくつかの関数で同時に複数の fd を送受信できるようにしました <!-- abstract lxc\_abstract\_unix\_{send,recv}\_fd -->
    * android: 32bit の prlimit の実装を追加しました <!-- add prlimit implementation for 32bit -->
    * API: lxc\_log\_init を API として公開しました <!-- expose function lxc\_log\_init -->
    * API: lxc\_config\_item\_is\_supported() 関数を追加しました <!-- add lxc\_config\_item\_is\_supported() -->
    * caps: lxc\_{proc,file}\_cap\_is\_set() 関数を追加しました <!-- add lxc\_{proc,file}\_cap\_is\_set() -->
    * cgroups: hybrid cgroup レイアウトを扱えるようになりました<!-- handle hybrid cgroup layouts -->
    * commands: EINTR を扱うようになりました <!-- handle EINTR -->
    * commands: lxc\_cmd\_state\_server() 関数を追加しました <!-- add lxc\_cmd\_state\_server() -->
    * commands: API を新しいコールバックシステムへ切り替えました <!-- switch api to new callback system -->
    * conf: リソース制限を実装しました <!-- implement resource limits -->
    * conf: new{g,u}idmap で必要な特権を持っているかチェックするようになりました <!--  check for {filecaps,setuid} on new{g,u}idmap -->
    * conf: /dev/ptmx でバインドマウントを使うようになりました <!-- use bind-mount for /dev/ptmx -->
    * conf: マウントオプションに MS\_LAZYTIME を追加しました <!-- add MS\_LAZYTIME to mount options -->
    * conf: 設定されていない場合は tty を送らないようになりました <!-- don't send ttys when none are configured -->
    * conf: tty を 2 つ同時に送るようにしました <!-- send ttys in batches of 2 -->
    * conf: lxc-user-nic の出力をログするようにしました <!-- log lxc-user-nic output -->
    * conf: ネットワークの削除を再構築しました <!-- refactor network deletion -->
    * conf: コア関数を書き直しました <!-- rework core functions -->
    * conf: lxc\_map\_ids() 関数を改良しました (訳注: コマンドの権限と存在のチェックを追加) <!-- improve lxc\_map\_ids() -->
    * conf: uid,gidのマッピングは最小限だけ使うようにしました <!-- use minimal {g,u}id map -->
    * conf: euid != 0 でも uid マッピングが書き込めるようになりました (訳注: 非特権ユーザが自身の id だけをマップできるようになりました)<!-- allow writing uid mappings with euid != 0 -->
    * conf: /dev/console 上のすべてのマウントをアンマウントするようになりました <!-- unstack all mounts atop /dev/console -->
    * conf{,ile}: 以前の設定項目の場合、ユーザに一度だけ警告するようになりました <!-- warn user once about legacy config -->
    * confile: lxc\_get\_idmaps() 関数を追加しました (訳注: コンテナが定義したidmapを取得する)<!-- add lxc\_get\_idmaps() -->
    * confile: コールバックシステムを作りなおして拡張しました <!-- rework + extend callback system -->
    * confile: パフォーマンスの調整を行いました <!-- performance tweaks -->
    * confile: "lxc.cgroup.dir" を追加しました <!-- add "lxc.cgroup.dir" -->
    * confile: namespace内の設定項目を一覧できる関数を追加しました (訳注: "lxc.net"のようにキーを与えると、そのnamespaceに属する設定項目を一覧する)<!-- list namespaced keys -->
    * confile: lxc\_getconfig() -> lxc\_get\_config()
    * confile: get\_network\_config\_ops() 関数を改良しました <!-- improve get\_network\_config\_ops() -->
    * confile: lxc\_list\_net() のファイル内での位置を移動しました <!-- move lxc\_list\_net() -->
    * confile: lxc\_listconfigs -> lxc\_list\_config\_items
    * confile: lxc\_list\_net() を作りなおしました <!-- rework lxc\_list\_net() -->
    * confile: lxc.seccomp --> lxc.seccomp.profile
    * confile: lxc.pts --> lxc.pty.max
    * confile: lxc.tty --> lxc.tty.max
    * confile: lxc.net.ipv6 --> lxc.net.ipv6.address
    * confile: lxc.net.ipv4 --> lxc.net.ipv4.address
    * confile: lxc.mount --> lxc.mount.fstab
    * confile: lxc.console --> lxc.console.path
    * confile: lxc.rootfs --> lxc.rootfs.path
    * confile: lxc.rootfs.backend は廃止予定になりました (訳注: `lxc.rootfs.path`でパスと同時に設定するようになった。例: `lxc.rootfs.path = btrfs:/path/to/root`)<!-- deprecate lxc.rootfs.backend -->
    * confile: lxc.utsname --> lxc.uts.name <!-- rename lxc.utsname to lxc.uts.name -->
    * confile: lxc.devttydir --> lxc.tty.dir <!-- rename lxc.devttydir to lxc.tty.dir -->
    * confile: シグナル用の namespace である lxc.signal を新設しました <!-- namespace lxc.signal keys -->
    * confile: ログ用の namespace である lxc.log を新設しました <!-- namespace lxc.log keys -->
    * confile: コンテナの init 用の namespace である lxc.inet を新設しました <!-- namespace lxc.init keys -->
    * confile: lxc.limit --> lxc.prlimit <!-- rename lxc.limit to lxc.prlimit -->
    * confile: lxc.pivotdir を廃止しました <!-- remove lxc.pivotdir -->
    * confile: lxc.kmsg を廃止しました <!-- remove lxc.kmsg -->
    * confile: セキュリティ関連の namespace を適切に設定しました (訳注: `lxc.apparmor` と `lxc.selinux`)<!--properly namespace security keys -->
    * doc: 新しい設定項目に書き換えました <!-- adapt to new configuration keys -->
    * devpts: マウント時に max=<count> を使うようになりました <!-- use max=<count> option on mount -->
    * lsm/AppArmor: コンテナが AppArmor namespace 内で起動できるようになりました <!-- Allow containers to start in AppArmor namespaces -->
    * lxccontainer: インデックスで指定されたネットワークをすべてクリアするようになりました <!-- clear whole indexed networks -->
    * lxccontainer: 新しいコールバックシステムに API を切り替えました <!-- switch api to new callback system -->
    * lxc-init: exec\*() の失敗を報告するようになりました <!-- report exec\*() failure -->
    * lxc-user-nic: 指定したユーザやリンク以外の行を削除しないようにしました <!-- keep lines from other {users,links} -->
    * lxc-user-nic: データベースにエントリを追加する際の問題を修正しました <!-- fix adding database entries -->
    * lxc-user-nic: 消去する前にデータベースをチェックするようにしました <!-- check db before trying to delete -->
    * lxc-user-nic: delete コマンドを実行する際にネットワーク名前空間上で必要な権限があるかどうかチェックするようにしました <!-- test privilege over netns on delete -->
    * lxc-user-nic: ネットデバイスをリネームする処理を書き換えました <!-- rework renaming net devices -->
    * lxc-user-nic: 新たに create と delete というサブコマンドを追加しました <!-- add new {create,delete} subcommands -->
    * monitor: abstract ソケットのロジックを簡素化しました <!-- simplify abstract socket logic -->
    * network: 作成していないネットワークデバイスを削除しないようにしました <!-- don't delete net devs we didn't create -->
    * network: lxc\_mkifname() を使う場面ではメモリを確保しないようにしました <!-- remove allocation from lxc\_mkifname() -->
    * network: netpipe の使用を削除しました <!-- remove netpipe -->
    * network: 正しいネットワークデバイス名を使うようになりました <!-- use correct network device name -->
    * network: 保存した物理ネットデバイスの記録を止めました <!-- stop recording saved physical net devices -->
    * network: 正しいネットワークデバイス名とインターフェースインデックスを取得するようになりました <!-- retrieve correct names and ifindices -->
    * network: ネットデバイス名にはサイズを静的に割り当てた変数を使うようになりました <!-- use static memory for net device names -->
    * network: ホスト側の veth デバイスのインターフェースインデックスを取得するようになりました <!-- retrieve the host's veth device ifindex -->
    * network: ネットワーク作成部分を作り直しました <!-- rework network creation -->
    * network: 非特権ネットワークのための Open vSwitch を削除しました <!-- delete ovs for unprivileged networks -->
    * network: インターフェースインデックスをログに記録するようにしました <!-- log ifindex -->
    * network: 非特権ネットワークでインターフェースインデックスを使うようにしました <!-- send ifindex for unpriv networks -->
    * network: レガシーネットワークではマイナス値を返すようにしました <!-- return negative idx for legacy networks -->
    * network: 新しいネットワーク設定パーサをテストするようにしました <!-- test new network configuration parser -->
    * network: 新しいネットワークパーサを追加しました <!-- add new network parser -->
    * network: 下位互換性を確保するようにしました <!-- preserve backwards compatibility -->
    * network: 設定アイテムのテストスイートを追加しました <!-- add test-suite for configuration items -->
    * openvswitch: ポートをインテリジェントに削除するようにしました <!-- delete ports intelligently -->
    * README: CII Best Practices のバッヂを追加しました <!-- add CII Best Practices badge to README -->
    * seccomp: 利用出来る場合は SCMP\_FLTATR\_ATL\_TSKIP をセットするようにしました <!-- set SCMP\_FLTATR\_ATL\_TSKIP if available -->
    * start: lxc\_check\_inherited() を一般化しました <!-- generalize lxc\_check\_inherited() -->
    * start: デーモンとして起動する場合は分離したソケットを使うようにしました <!-- use separate socket on daemonized start -->
    * start: SOCK\_DGRAM から SOCK\_STREAM へ切り替えました <!-- switch from SOCK\_DGRAM to SOCK\_STREAM -->
    * start: data\_sock を使っている側が fd を close しないようにしました (訳注: fd を作成していない関数内で閉じないようにした)<!-- don't let data\_sock users close the fd -->
    * start: cgroup が確実にクリーンアップされるようにしました <!-- ensure cgroups are cleaned up -->
    * start: utmp をウォッチするのをやめました <!-- remove utmp watch -->
    * start: unshare(CLONE\_NEWCGROUP) のあとで lxc\_setup() するようにしました <!-- lxc\_setup() after unshare(CLONE\_NEWCGROUP) -->
    * start: pty スレーブに std{in,out,err} を複製するようにしました <!-- dup std{in,out,err} to pty slave -->
    * start: lxc\_init\_handler() を追加しました <!-- add lxc\_init\_handler() -->
    * start: lxc\_free\_handler() を追加しました <!-- add lxc\_free\_handler() -->
    * start: 特権の場合に rootfs を pin するようにしました <!-- pin rootfs when privileged -->
    * storage: lxc\_storage\_get\_path() 関数を追加しました (訳注: コンテナディレクトリのパスを返す)<!-- add lxc\_storage\_get\_path() -->
    * storage: storage\_utils.{c.h} を追加しました <!-- add storage\_utils.{c.h} -->
    * storage: "overlay" という名前も有効なバックエンド名として受け付けるようにしました <!-- add overlay as valid backend -->
    * storage: ストレージ関係のファイル名やディレクトリ名に付いていた "bdev" という文字列を "storage" に変更しました。 <!-- rename files "bdev" -> "storage" -->
    * storage/aufs: 廃止予定になりました <!-- mark deprecated -->
    * storage/btrfs: btrfs ストレージドライバを作りなおしました <!-- rework btrfs storage driver -->
    * storage/loop: loop ストレージドライバを作りなおしました <!-- rework loop storage driver -->
    * storage/lvm: lvm バックエンドを作りなおしました <!-- rework lvm backend -->
    * storage/overlay: overlay ストレージドライバを作りなおしました <!-- rework overlay storage driver -->
    * storage/overlay: スナップショットから正しくリストアされるようにしました <!-- correctly restore from snapshot -->
    * storage/overlay: 依存のトラッキングが正しく扱われるようにしました <!-- correctly handle dependency tracking -->
    * storage/rbd: rbd ストレージドライバを作りなおしました <!-- rework rbd storage driver -->
    * storage/zfs: zfs ストレージドライバを作りなおしました <!-- rework zfs storage driver -->
    * tests: lxc.cgroup.dir のテストを追加しました <!-- add tests for lxc.cgroup.dir -->
    * test: サブキーを取得するテストを追加しました <!-- add test to get subkeys -->
    * tests: idmap パーサのユニットテストを追加しました <!-- add unit tests for idmap parser -->
    * tests: すべての設定項目に対してすべてメソッドが実装されているかのチェックを追加しました <!-- enforce all methods for config items -->
    * tree-wide: struct bdev -> struct lxc\_storage
    * utils: lxc\_nic\_exists() 関数を追加しました <!-- add lxc\_nic\_exists() -->
    * utils: ファイルシステムタイプを判別する部分は has\_fs\_type() を使うように変更しました <!-- switch to has\_fs\_type() -->
    * utils: has\_fs\_type() + is\_fs\_type() を追加しました <!-- add has\_fs\_type() + is\_fs\_type() -->
    * utils: lxc\_deslashify() 関数を作りなおしました <!-- rework lxc\_deslashify() -->
    * utils: lxc\_make\_abstract\_socket\_name() 関数を追加しました
    * utils: lxc\_safe\_ulong() 関数を追加しました (訳注: 数値の文字列を unsigned long に変換)<!-- add lxc\_safe\_ulong() -->
    * utils: lxc\_unstack\_mountpoint() 関数を追加しました (訳注: 与えたパスのマウントをすべてアンマウントする)<!-- add lxc\_unstack\_mountpoint() -->

 * テンプレート<!-- Template -->:
    * templates/Alpine: ppc64le のサポートを追加しました <!-- Add support for ppc64le -->
    * templates/Alpine: ランダムにミラーを選ぶのではなく dl-cdn.a.o をデフォルトのミラーとして使うようになりました <!-- use dl-cdn.a.o as default mirror instead of random one -->
    * templates/Alpine: デフォルトリポジトリにコミュニティリポジトリを追加しました <!-- add community repository to default repositories -->
    * templates/CentOS: i386 と x86\_64 以外のアーキの CentOS では AltArch ミラーを使うようになりました <!-- use altarch mirror for CentOS on arches other than i386 and x86\_64 -->
    * templates/CentOS: デフォルトを CentOS 7 にしました <!-- default to CentOS 7 -->
    * templates/debian: デフォルトの Debian ミラーとして deb.debian.org を使うようになりました <!-- Use deb.debian.org as the default Debian mirror -->
    * templates/debian: buster を有効なリリースとして追加しました <!-- Add buster as a valid release -->
    * templates/opensuse: leap 42.3 をサポートしました <!-- support leap 42.3 -->
    * templates/opensuse: Tumbleweed でのソフトウェアの選択の問題を修正しました <!-- fix tumbleweed software selection -->
    * templates/opensuse: Tumbleweed をサポートするリリースに追加しました <!-- add Tumbleweed as supported release -->
    * templates/ubuntu: 新しいリリースではデフォルトで netplan をサポートするようになりました <!-- support netplan in newer releases by default -->
    * templates/ubuntu: upstart の ssh ジョブは現在オプショナルなので、条件付きで mv するようにしました。<!-- conditionally move upstart ssh job, as it is now optional. -->
    * userns.conf: 必要がなくなった bind マウントは削除しました <!-- remove obsolete bind-mounts -->

 * ツール<!-- Tools -->:
    * lxc-execute: 失敗時にエラーメッセージを表示するようにしました <!-- print error message when failed -->
    * lxc-update-config: レガシーなネットワークを変換できるようになりました <!-- handle legacy networks -->
    * tools: 追加の cgroup のチェックを行うようになりました <!-- add additional cgroup checks -->
    * tools: lxc-update-config を追加しました <!-- add lxc-update-config.in -->
    * tools/lxc-attach: /dev/tty がない環境でもアタッチできるようになりました <!-- allow for situations without /dev/tty -->
    * tools/lxc-checkconfig: CONFIG\_NETFILTER\_XT\_MATCH\_COMMENT を追加しました <!-- Add CONFIG\_NETFILTER\_XT\_MATCH\_COMMENT -->
    * tools/lxc-checkconfig: new[ug]idmap が setuid-root されているかを確認するようになりました <!-- verify new[ug]idmap are setuid-root -->
    * tools/lxc-ls: デフォルトではすべてのコンテナを返しますが、新しいフィルタとして定義済みのコンテナのみリストできるようになりました <!-- return all containers by default, new filter - list only defined containers. -->

# ダウンロード <!-- Downloads -->
<!--
The release tarballs may be found on our [download page](https://linuxcontainers.org/lxc/downloads/) and we expect most distributions
will very soon ship a packaged version of LXC 2.1.
-->
このリリースの tarball は [ダウンロードページ](https://linuxcontainers.org/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 2.1 のパッケージをリリースするでしょう。

<!--
Should you be interested in individual changes or just looking at the detailed development history,
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-2.1).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable ブランチが [Github](https://github.com/lxc/lxc/tree/stable-2.1) にあります。


## LXC 2.0.8 リリースのお知らせ <!-- LXC 2.0.8 release announcement --><span class="text-muted">2017 年 5 月 11 日 <!-- 11th of May 2017 --></span>
<!--
This is the eighth bugfix release for LXC 2.0.
-->
このリリースは LXC 2.0 の 7 回目のバグフィックスリリースです。

重要な変更 <!-- Important -->:

 * セキュリティホール <!-- Security fix for -->CVE-2017-5985 の修正
 * このバージョンで、すべてのテンプレートでデフォルトのパスワードは設定されなくなりました。代わりに、lxc-attach を使ってユーザの設定を行います。この変更により、(かなり安全性に問題のある) デフォルトユーザを使うように設定された、自動化された環境に影響があるでしょう。
   <!-- All templates have been updated to not set default passwords anymore,
   instead requiring lxc-attach be used to configure users.
   This may affect some automated environments that were relying on our
   default (very much insecure) users. -->

バグ修正 <!-- Bugfixes -->:

 * lxc-start-ephemeral を Python 3.2 互換にしました <!-- Make lxc-start-ephemeral Python 3.2-compatible -->
 * Typo を修正しました <!-- Fix typo -->
 * sys/capability.h なしでもビルドできるようになりました <!-- Allow build without sys/capability.h -->
 * lxc-opensuse: リリースコード用のデフォルト値を修正しました <!-- fix default value for release code -->
 * util: setproctitle 関数では常に malloc するようにしました (訳注: Issue #1407 の修正)<!-- always malloc for setproctitle -->
 * util: setproctitle 関数のコメントを更新しました <!-- update setproctitle comments -->
 * confile: lxc.network.<n>.ipv{4,6} が空の時、設定をクリアするようにしました <!-- clear lxc.network.<n>.ipv{4,6} when empty -->
 * lxc\_setup\_tios(): SIGTTOU と SIGTTIN シグナルを無視するようにしました <!-- Ignore SIGTTOU and SIGTTIN signals -->
 * lxc-net が失敗時には 0 でない値を返すようになりました <!-- Make lxc-net return non-zero on failure -->
 * seccomp: amd64 ホスト上で x32 ゲストを許可するようにしました <!-- allow x32 guests on amd64 hosts. -->
 * HAVE\_LIBCAP を追加しました (訳注: libcap に関係するビルド時の問題の解決) <!-- Add HAVE\_LIBCAP -->
 * c/r: bind マウントのときは --ext-mount-map だけを与えるようにしました <!-- only supply \-\-ext-mount-map for bind mounts -->
 * create\_or\_remove\_cgroup 関数内で 'mkdir -p' を行うようにしました <!-- Added 'mkdir -p' functionality in create\_or\_remove\_cgroup -->
 * clonehostname フック内では LXC\_ROOTFS\_MOUNT を使うようにしました <!-- Use LXC\_ROOTFS\_MOUNT in clonehostname hook -->
 * squeeze はサポート外のリリースとなったのでキーを削除しました <!-- squeeze is not a supported release anymore, drop the key -->
 * start: SIGCHLD 時は WARN() から NOTICE() にレベルを下げました <!-- dumb down SIGCHLD from WARN() to NOTICE() -->
 * log: lxc\_unix\_epoch\_to\_utc() を修正しました <!-- fix lxc\_unix\_epoch\_to\_utc() -->
 * cgfsng: trim() 関数をより安全にしました <!-- make trim() safer -->
 * seccomp: SCMP\_FLTATR\_ATL\_TSKIP が利用可能であれば設定するようにしました <!-- set SCMP\_FLTATR\_ATL\_TSKIP if available -->
 * lxc-user-nic: #include 宣言を順序よく並べ直しました <!-- re-order #includes -->
 * lxc-user-nic: 改良とバグフィックスを行いました <!-- improve + bugfix -->
 * lxc-user-nic: 失敗時はリンクを削除するようにしました <!-- delete link on failure -->
 * conf: 特権コンテナのときだけ veth を削除しようとするようにしました <!-- only try to delete veth when privileged -->
 * lxc-containers が複数のブリッジをサポートするよう修正しました <!-- Fix lxc-containers to support multiple bridges -->
 * コードでタブとスペースが混在していたのを修正しました <!-- Fix mixed tab/spaces in previous patch -->
 * lxc-alpine: デフォルトミラーをランダムで選択する代わりに dl-cdn.a.o を使うようにしました <!-- use dl-cdn.a.o as default mirror instead of random one -->
 * lxc-checkconfig: new[ug]idmap が setuid root されているか確認するようになりました <!-- verify new[ug]idmap are setuid-root -->
 * [templates] archlinux: ファイルのコンフリクトを解決しました <!-- resolve conflicting files -->
 * [templates] archlinux: default\_timezone 変数は不要なので削除しました <!-- noneed default\_timezone variable -->
 * python3: char\* が NULL になる可能性がある場合の対処を行いました <!-- Deal with potential NULL char\* -->
 * lxc-download.in / 鍵サーバ (keyserver) が環境変数で設定できるようなりました <!--allow setting keyserver from env -->
 * lxc-download.in / 鍵サーバの変更をヘルプに追加しました <!-- Document keyserver change in help -->
 * 変数チェックを既存のスタイルに合わせるように変更しました <!-- Change variable check to match existing style -->
 * tree-wide: <sys/sysmacros.h> を直接 include するようにしました <!-- include <sys/sysmacros.h> directly -->
 * conf/ile: バッファが十分な長さになるようにしました <!-- make sure buffer is large enough -->
 * tree-wide: <sys/sysmacros.h> を直接 include するようにしました <!-- include <sys/sysmacros.h> directly -->
 * tests: IPv6 ネットワーク上の実行をサポートしました <!-- Support running on IPv6 networks -->
 * tests: コンテナを kill するようにしました (shutdown を待たなくなりました) <!-- Kill containers (don't wait for shutdown) -->
 * suggest\_default\_idmap で間違ったファイルを open していたのを修正しました <!-- Fix opening wrong file in suggest\_default\_idmap -->
 * debian テンプレートで root のパスワードを設定しないようにしました <!-- do not set the root password in the debian template -->
 * 安全でないパスワードを設定しないようにしました <!-- do not set insecure passwords -->
 * altlinux、gentoo、openmandriva、pld テンプレートでデフォルトのパスワードを設定しないようにしました <!-- don't set a default password for altlinux, gentoo, openmandriva and pld -->
 * tools: lxc\_execute() がリターンコードを返して exit するようになりました <!-- exit with return code of lxc\_execute() -->
 * ネットワークのシャットダウン時には veth.pair.name を維持するようにしました <!-- Keep veth.pair.name on network shutdown -->
 * Makefile: static での clang の init.lxc ビルドを修正しました <!-- fix static clang init.lxc build -->
 * /etc/sysconfig/lxc または lxc-net で USE\_LXC\_BRIDGE を使ってブリッジが無効化されている場合はブリッジの起動を待たなくなりました <!-- Avoid waiting for bridge interface if disabled in sysconfig/lxc | lxc-net via USE\_LXC\_BRIDGE -->
 * print\_stats() のバッファサイズを増やしました <!-- Increased buffer length in print\_stats() -->
 * POSIX シェル互換でない変数割当を修正しました <!-- avoid assigning  to a variable which is not POSIX shell proof -->(bug #1498)
 * APIの不変性に関する注意書きを削除しました (訳注: 1.0 より前の記述があった)<!-- remove obsolete note about api stability -->
 * conf: ポインタアクセスでよりエラーになりにくくしました <!-- less error prone pointer access -->
 * conf: lxc\_map\_ids() で動作とは関係のない変更を行いました <!-- lxc\_map\_ids() non-functional changes -->
 * caps: lxc\_{proc,file}\_cap\_is\_set() 関数を追加しました <!-- add lxc_{proc,file}_cap\_is\_set() -->
 * conf: new{g,u}idmap コマンドのケーパビリティとsetuid をチェックするようになりました <!-- check for {filecaps,setuid} on new{g,u}idmap -->
 * conf: rootfs をマウントする際のログ出力を改良しました <!-- improve log when mounting rootfs -->
 * ls: アクティブなコンテナの条件判断を簡単にしました <!-- simplify the judgment condition when list active containers -->
 * \#1509 で混入した Typo を修正しました <!-- fix typo introduced in #1509 -->
 * attach|unshare: 間違ったコメントを修正しました <!-- fix the wrong comment -->
 * caps: Android ではファイルのケーパビリティチェックをスキップするようにしました <!-- skip file capability checks on android -->
 * autotools: cap\_get\_file のチェックを追加しました <!-- check for cap\_get\_file -->
 * caps: ケーパビリティがサポートされていない場合は false を返すようにしました <!-- return false if caps are not supported -->
 * conf: setup\_pts() での動作とは関係のない変更を行いました <!-- non-functional changes to setup\_pts() -->
 * conf: /dev/ptmx では bind マウントを使うようにしました <!-- use bind-mount for /dev/ptmx -->
 * conf: 動作とは関係のない変更を行いました <!-- non-functional changes -->
 * utils: LXD 向けの loop device ヘルパーを使うようにしました <!-- use loop device helpers from LXD -->
 * ISSUE\_TEMPLATE.md を作成しました <!-- create ISSUE\_TEMPLATE.md -->
 * cgroups: cgfsng のデバッグを改良しました <!-- improve cgfsng debugging -->
 * issue template: Typo の修正を行いました <!-- fix typo -->
 * conf: lxc\_setup\_devpts() で fd をクローズするようにしました <!-- close fd in lxc\_setup\_devpts() -->
 * conf: 動作とは関係のない変更を行いました <!-- non-functional changes -->
 * utils: lxc\_mount\_proc\_if\_needed() の調整を行いました <!-- tweak lxc\_mount\_proc\_if\_needed() -->
 * sshd テンプレートを Ubuntu 17.04 で動作するように修正しました <!-- Change sshd template to work with Ubuntu 17.04 -->
 * conf: マウントオプションを昇順で並べ直しました <!-- order mount options -->
 * conf: マウントオプションに MS\_LAZYTIME を追加しました <!-- add MS\_LAZYTIME to mount options -->
 * monitor: exec() のエラー時に errno を報告するようになりました <!-- report errno on exec() error -->
 * af unix: ソケット名を最大長まで使えるようになりました <!-- allow for maximum socket name -->
 * commands: NULL ポインタの参照を行わないようにしました <!-- avoid NULL pointer dereference -->
 * commands: 動作とは関係のない変更を行いました <!-- non-functional changes -->
 * lxccontainer: NULL ポインタの参照を行わないようにしました <!-- avoid NULL pointer dereference -->
 * monitor: abstract ソケットのロジックを簡素化しました <!-- simplify abstract socket logic -->
 * precise は最新の LTS ではないので、代わりに xenial を使うようにしました <!-- precise is not the latest LTS, let's use xenial instead -->
 * 間違った exit ステータスを修正しました <!-- fix the wrong exit status -->
 * conf: lxc\_fill\_autodev() の動作とは関係のない変更を行いました <!-- non-functional changes lxc\_fill\_autodev() -->
 * conf: lxc\_fill\_autodev() から /dev/console を削除しました <!-- remove /dev/console from lxc\_fill\_autodev() -->
 * conf: lxc\_setup() の動作とは関係のない変更を行いました <!-- non-functional changes lxc\_setup() -->
 * conf: コンソール関数の動作とは関係のない変更を行いました <!-- non-functional changes to console functions -->
 * conf: lxc\_setup\_dev\_console() を改良しました <!-- improve lxc\_setup\_dev\_console() -->
 * conf: lxc\_setup\_ttydir\_console() (訳注: 設定に従ってコンテナの /dev/console のマウント先を変更してマウントできるようにした)
 * config: /dev/console の bind マウントを削除しました <!-- remove /dev/console bind mount -->
 * doc: コンソールの振る舞いについてマニュアルに追加しました <!-- document console behavior -->
 * utils: lxc\_unstack\_mountpoint() 関数を追加しました <!-- add lxc\_unstack\_mountpoint() -->
 * conf: /dev/console 上のすべてのマウントをアンマウントするようにしました <!-- unstack all mounts atop /dev/console -->
 * console: ピアの tty が割当できない場合に失敗するようになりました <!-- fail when we cannot allocate peer tty -->
 * start: umount2() を削除しました <!-- remove umount2() -->
 * conf: 動作とは関係のない変更を行いました  <!-- non-functional changes -->
 * utils: lxc\_unstack\_mountpoint() で umount 回数が 2^31 より大きなケースを扱えるようにしました <!-- handle > 2^31 in lxc\_unstack\_mountpoint() -->
 * CentOS でも systemd ユニットファイルをインストールするようにしました <!-- Install systemd units for CentOS -->
 * (訳注: configure で) `ubuntu` と `debian` の case をマージしました <!-- Merge `ubuntu` and `debian`case -->
 * start: lxc\_spawn() に重要なコメントを追加しました <!-- add crucial details about lxc\_spawn() -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions
will very soon ship a packaged version of LXC 2.0.8.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 2.0.8 のパッケージをリリースするでしょう。

<!--
Should you be interested in individual changes or just looking at the detailed development history,
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-2.0).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable-2.0 ブランチが [Github](https://github.com/lxc/lxc/tree/stable-2.0) にあります。


## LXC 1.0.10 リリースのお知らせ <!-- LXC 1.0.10 release announcement --><span class="text-muted">2017 年 5 月 11 日 <!-- 11th of May 2017 --></span>
<!--
This is the tenth bugfix release for LXC 1.0.
-->
このリリースは LXC 1.0 の 10 回目のバグフィックスリリースです。

重要な変更<!-- Important -->:

 * セキュリティホール <!-- Security fix for --> CVE-2016-10124 の修正
 * セキュリティホール <!-- Security fix for --> CVE-2017-5985 の修正

バグ修正 <!-- Bugfixes -->:

 * attach: lsm\_openat() 関数の実装を簡素化しました <!-- simplify lsm\_openat() -->
 * commands: ロギングの改良を行いました <!-- improve logging -->
 * utils: <!-- add macro -->\_\_LXC\_NUMSTRLEN マクロを定義しました
 * tests; クリーンアップのエラーではテストが失敗とならないようにしました <!-- Don't cause test failures on cleanup errors -->
 * conf: lxc.cap.drop と keep の同時使用ができない旨、きちんとエラー出力するようにしました <!-- clearly report to either use drop or keep -->
 * attach: lsm ラベルのファイルディスクリプタを close するようにしました <!-- close lsm label file descriptor -->
 * conf, attach: errno を保存して close を呼び出すようにしました <!-- save errno across call to close -->
 * templates/lxc-debian.in: dpkg --print-foreign-architectures 実行の Typo を修正しました <!-- Fix typo in calling dpkg with \-\-print-foreign-architectures option -->
 * templates/lxc-debian.in: ホストのアーキテクチャ ppc を powerpc として扱うようにしました <!-- handle ppc hostarch -> powerpc -->
 * cherry-pick した際の errno の regression を修正しました <!-- Fix regression in errno handling cherry-pick -->
 * ホストの /usr/lib/systemd からコンテナ内のファイルを生成しないようにしました (訳注: opensuse テンプレート)<!-- don't try to get stuff from /usr/lib/systemd on the host -->
 * lxc-opensuse: poweroff.target を sigpwr.target にコピーする処理を削除しました <!-- rm poweroff.target -> sigpwr.target copy -->
 * (訳注: ビルド時の) --enable-gnutls オプションを追加しました <!-- Add \-\-enable-gnutls option -->
 * tests: 不具合のある overlay モジュールでの非特権テストをスキップするようにしました (訳注: カーネルマージ前の Ubuntu の 3.13 カーネルの overlayfs)<!-- skip unpriv tests on broken overlay module -->
 * major()/minor()/makedev() の検出に AC\_HEADER\_MAJOR を使うようにしました <!-- Use AC\_HEADER\_MAJOR to detect major()/minor()/makedev() -->
 * lxc-start-ephemeral を Python 3.2 互換にしました <!-- Make lxc-start-ephemeral Python 3.2-compatible -->
 * systemd: service ファイルで Delegate を有効にしました <!-- enable delegate in service file -->
 * confile: lxc.network.<n>.ipv{4,6} が空の時、設定をクリアするようにしました <!-- clear lxc.network.<n>.ipv{4,6} when empty -->
 * seccomp: amd64 ホスト上で x32 ゲストを許可するようにしました <!-- allow x32 guests on amd64 hosts. -->
 * squeeze はサポート外のリリースとなったのでキーを削除しました <!-- squeeze is not a supported release anymore, drop the key -->
 * seccomp: SCMP\_FLTATR\_ATL\_TSKIP が利用可能であれば設定するようにしました <!-- set SCMP\_FLTATR\_ATL\_TSKIP if available -->
 * lxc-checkconfig: new[ug]idmap が setuid root されているか確認するようになりました <!-- verify new[ug]idmap are setuid-root -->
 * python3: char\* が NULL になる可能性がある場合の対処を行いました <!-- Deal with potential NULL char\* -->
 * lxc-download.in / 鍵サーバ (keyserver) が環境変数で設定できるようなりました <!--allow setting keyserver from env -->
 * lxc-download.in / 鍵サーバの変更をヘルプに追加しました <!-- Document keyserver change in help -->
 * 変数チェックを既存のスタイルに合わせるように変更しました <!-- Change variable check to match existing style -->
 * tests: IPv6 ネットワーク上の実行をサポートしました <!-- Support running on IPv6 networks -->
 * tests: コンテナを kill するようにしました (shutdown を待たなくなりました) <!-- Kill containers (don't wait for shutdown) -->
 * suggest\_default\_idmap で間違ったファイルを open していたのを修正しました <!-- Fix opening wrong file in suggest\_default\_idmap -->
 * lxc\_setup\_tios(): SIGTTOU と SIGTTIN シグナルを無視するようにしました <!-- Ignore SIGTTOU and SIGTTIN signals -->
 * print\_stats() のバッファサイズを増やしました <!-- Increased buffer length in print\_stats() -->
 * APIの不変性に関する注意書きを削除しました (訳注: 1.0 より前の記述があった)<!-- remove obsolete note about api stability -->
 * conf: ポインタアクセスでよりエラーになりにくくしました <!-- less error prone pointer access -->
 * ISSUE\_TEMPLATE.md を作成しました <!-- create ISSUE\_TEMPLATE.md -->
 * issue template: Typo の修正を行いました <!-- fix typo -->
 * conf: マウントオプションを昇順で並べ直しました <!-- order mount options -->
 * commands: NULL ポインタへの参照をしないようにしました <!-- avoid NULL pointer dereference -->
 * commands: 機能と関係のない変更を行いました (訳注: デバッグログの追加、int -> size\_t への修正)<!-- non-functional changes -->
 * lxccontainer: NULL ポインタへの参照をしないようにしました <!-- avoid NULL pointer dereference -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs may be found on our [download page](/lxc/downloads/) and we expect most distributions
will very soon ship a packaged version of LXC 1.0.10.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。そして、各ディストリビューションがすぐに LXC 1.0.10 のパッケージをリリースするでしょう。

<!--
Please note that LXC upstream strongly recommends 1.0 users to upgrade to the 2.0 LTS release.
The 1.0 branch will keep being supported until June 2019, but at this point,
only critical bugfixes and security updates will be backported.
-->
LXC 開発元として、1.0 ユーザには 2.0 LTS リリースへのアップグレードを強くおすすめします。
1.0 ブランチは 2019 年 6 月までサポートが続きます。しかし現時点では、重大なバグフィックスとセキュリティホール対策のみがバックポートされます。

<!--
Should you be interested in individual changes or just looking at the detailed development history,
our stable branch is on [Github](https://github.com/lxc/lxc/tree/stable-1.0).
-->
個々の変更点に興味がある場合、そして開発の履歴を見たい場合、stable-1.0 ブランチが [Github](https://github.com/lxc/lxc/tree/stable-1.0) にあります。


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
 * lxc\_mount\_auto\_mounts(): 失敗時にメモリを解放するようにしました <!-- free memory on failure -->
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
 * conf: pty\_info を解放したあと NULL に設定するようにしました <!-- set pty\_info to NULL after free -->
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
 * cgmanager: check\_supports\_multiple\_controllers 関数の最後でメモリを解放するようにしました <!-- free line at end of check\_supports\_multiple\_controllers -->
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
 * lxc\_monitor: エラー時に正規表現関連の変数を解放するようにしました <!-- free @preg on error -->
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

