![Download icon](/static/img/containers.png)
# News
## LXD 0.22 リリースのお知らせ <!-- LXD 0.22 release announcement --><span class="text-muted">2015 年 11 月 10 日 <!-- 10th of November 2015 --></span>

### このリリースの主な変更点 <!-- The main changes for this release are -->

 * 停止前にコンテナをフリーズするようにしました (fork bombs 対策に役立ちます)<!-- Freeze containers before killing them (helps with fork bombs) -->
 * イメージを圧縮するアルゴリズムが設定できるようになりました (圧縮しないことも可能です) <!-- Configurable image compression algorithm (also supports no compression) -->
 * リモートイメージをダウンロードする際に HTTP プロキシが使えるようになりました <!-- Support using an HTTP proxy when downloading a remote image -->
 * イベントインターフェースの初期実装を行い、それを使う最低限のクライアントを実装しました (lxc monitor)<!-- Initial implementation of the events interface and minimal client for it (lxc monitor) -->

### バグ修正 <!-- Bugfixes -->

 * 2 つ目の LXD デーモンを起動したときに、すでに起動中の LXD のソケットを消去しないようにしました <!-- Don't remove the main LXD socket when starting a second daemon -->
 * リモートの追加が失敗したとき、キャッシュした証明書をクリーンアップするようになりました <!-- On failure to add a remote, cleanup the cached certificate -->
 * パブリックなエンドポイントと通信を行う場合には、LXD はクライアント証明書が不要になりました <!-- LXD no longer requires a client certificate to talk to public endpoints -->
 * Checkpoint/restore とコンテナの起動の際のエラーメッセージとデバッグメッセージをわかりやすくしました <!-- Better error and debug messages for checkpoint/restore and container startup -->
 * コンテナ起動時の競合の問題を修正しました <!-- Fixed a race condition during container startup -->
 * ときおり起こるハングアップを防ぐため、busybox のテストイメージを更新しました <!-- Update the busybox test image to avoid an occasional hang -->
 * lvm-setup: 古い Ubuntu のリリースでも動作するように更新しました <!-- Update to work on older Ubuntu releases -->
 * bz2 で圧縮されたイメージの展開の問題を修正しました <!-- Fix extraction of bz2 compressed images -->
 * ファイルディスクリプタのリークの問題をいくつか修正しました <!-- Fix a number of fd leaks -->
 * LXD が開始するたびに余計なマウントが作成されるのを防ぐため、シェアードマウントの扱いを修正しました <!-- Fix shmount handling to avoid creating an extra mount everytime LXD starts -->
 * lxd-images: リリースストリームにイメージが見つからない場合は、デイリーストリームにフォールバックするようにしました <!-- Fallback to the daily stream if an image can't be found in the releases stream -->
 * コンテナのコピーの際の uid/gid のマッピングの問題を修正しました <!-- Fix a uid/gid mapping issue on container copy -->
 * 無効な LXC 設定キーで LXD がハングアップする問題を修正しました <!-- Fix a LXD hang on invalid LXC configuration key -->

### アップグレードの注意 <!-- Upgrade notes -->

<!--
This LXD version corrects a problem in the implementation of the images API,  
as a result, some actions against older servers or using older clients may fail.
-->
この LXD のバージョンでは、イメージ API の実装の問題を修正しました。この結果、古いサーバに対する操作や古いクライアントを使った操作の中には失敗するものもあるかもしれません。

### 試用環境 <!-- Try it for yourself -->

<!--
This new LXD release is already available for you to try on our [demo service](/lxd/try-it).
-->
この新しい LXD のリリースが、すでに私たちの [デモサービス](/ja/lxd/try-it/) で利用できます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。

## LXD 0.21 リリースのお知らせ <!-- LXD 0.21 release announcement --><span class="text-muted">2015 年 10 月 27 日<!-- 27th of October 2015 --></span>

<!--
The main changes for this release are:
-->
このリリースの主な変更点は以下の通りです。

 * Windows 上でクライアントをビルドできるようになりました <!-- Client is now builable on Windows. -->
 * LVM ボリュームのデフォルトサイズが 10GB に減少しました <!-- Default LVM volume size has been reduced to 10GB. -->
 * クライアントでコマンドのエイリアスを設定できるようになりました <!-- Command aliases can be setup in the client. -->
 * "lxc info" コマンドがサーバの情報も出力するようになりました <!-- "lxc info" now prints server information too. -->
 * Btrfs ストレージ上でネストした LXD が使えるようになりました <!-- It's now possible to use a nested LXD on btrfs storage. -->

<!--
Additionally:
-->
加えて、

 * 様々なストレージバックエンドの修正 <!-- Various storage backend fixes -->
 * より良いエラーの取り扱いと報告 <!-- Better error handling and error reporting -->
 * 多数のバグフィックス (リリース時点での既知のバグはなくなりました) <!-- A lot of bugfixes (no known bugs left at time of release) -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。


## LXD 0.20 リリースのお知らせ <!-- LXD 0.20 release announcement --><span class="text-muted">2015 年 10 月 14 日<!-- 14th of October 2015 --></span>

<!--
The main changes for this release are:
-->
このリリースの主な変更点は以下の通りです。

 * コンテナの再起動は stop+start として実装されました (すべての設定がリロードされます) <!-- Container restart is now implemented as stop + start (reloads all config) -->
 * --config/-c を使って起動時に設定 key=value を与えられるようになりました <!-- Config key=value can now be passed at launch time using \-\-config/-c -->
 * コンテナを一時的に停止させるために新しく "pause" コマンドが使えるようになりました <!-- A new "pause" command is now available to temporarily freeze a container -->
 * デフォルトではキャッシュしたイメージはプライベートとなります <!-- Cached images are now private by default -->
 * リモートのコンテナをローカルのイメージストアに publish できるようになりました <!-- You can now publish a remote container into the local image store -->
 * キャラクタデバイス、ブロックデバイスをコンテナに追加できるようになりました <!-- It is now possible to add character or block devices to a container -->
 * イメージのリストでイメージサイズの確認ができるようになりました <!-- The image size is now shown in the image list -->

<!--
Additionally:
-->
加えて、

 * 様々なストレージバックエンドの修正 <!-- Various storage backend fixes -->
 * より良いエラーの取り扱いと報告 <!-- Better error handling and error reporting -->
 * テストの改良 <!-- Improved testsuite -->
 * 多数のバグフィックス (リリース時点での既知のバグはなくなりました) <!-- A lot of bugfixes (no known bugs left at time of release) -->


### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。


## LXD 0.19 リリースのお知らせ <!-- LXD 0.19 release announcement --><span class="text-muted"><!-- 29th of September 2015 -->2015 年 9 月 25 日</span>

<!--
The main changes for this release are:
-->
このリリースの主な変更点は以下の通りです。

 * ZFS をサポートしました <!-- ZFS support -->
 * コンテナのネストをサポートしました <!-- Support for container nesting -->
 * stdin から読み込む際に複数行の設定キーを指定できるようになりました (値として "-" を使います)<!-- Allow setting multi-line configuration keys by reading from stdin (using "-" as the value) -->
 * コンテナの一時的なコピーを作れるようになりました (-e/--ephemeral フラグ)<!-- It's now possible to make an ephemeral copy of a container (-e/--ephemeral flag) -->
 * パブリックな読み取り専用のサーバを自動で検出するようになりました (もう --public は不要です)<!-- Public read-only servers are now auto-detected (no more \-\-public needed) -->
 * lxd-images が既存のイメージをアップデートできるようになりました (--sync フラグを使います)<!-- lxd-images now supports updating existing images (when using the \-\-sync flag) -->
 * (edit コマンドを使って) イメージのパブリック指定の設定と解除が行えるようになりました <!-- It is now possible to mark/unmark images as public (through the edit command) -->

<!--
Additionally:
-->
加えて、

 * テストスイートを完全に再構築しました <!-- A completely reworked testsuite -->
 * Windows クライアントの準備のためにリファクタリングをいくつか行いました <!-- Some refactoring in preparation for a Windows client -->
 * ドキュメントと仕様を更新しました <!-- Updated documentation and specifications -->
 * 多数のバグフィックスを行いました (リリース時点での既知のバグはなくなりました)<!-- A lot of bugfixes (no known bugs left at time of release) -->

<!--
Note that due to an API implementation problem in past releases, older command line clients  
will fail to interact with LXD 0.19's image store. Such clients should be upgraded to 0.19.
-->
過去のリリースの API 実装の問題により、古いコマンドラインクライアントでは、LXD 0.19 のイメージストアの操作が失敗することに注意してください。このような場合は 0.19 へアップグレードする必要があります。


### ダウンロード<!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。


## LXD 0.18 リリースのお知らせ <!-- LXD 0.18 release announcement --><span class="text-muted">2015 年 9 月 15 日<!-- 15th of September 2015 --></span>

<!--
The main changes for this release are:
-->
このリリースの主な変更点は以下の通りです。

 * lxc: 新たに --force-local オプションを追加しました <!-- Add a new \-\-force-local argument -->
 * lxc: ファイルの push/pull の際に stdin/stdout が使えるようになりました <!-- Allow file push/pull using stdin/stdout -->
 * lxc: 翻訳テンプレートを変更しました <!-- Rework translation template -->
 * lxd/core: 特権コンテナのイメージ作成の問題を修正しました <!-- Fix image creation of privileged containers -->
 * lxd/core: コンテナごとの apparmor プロファイルを実装しました <!-- implement per-container apparmor profiles -->
 * lxd/core: コンテナごとの seccomp プロファイルを実装しました <!-- implement per-container seccomp profiles -->
 * lxd/core: exit 時のソケットアクティベーションの問題を修正しました <!-- Fix socket-activation on exit -->
 * lxd/core: ネストした LXD のサポートを追加しました <!-- Add support for nested LXD -->
 * lxd/btrfs: btrfs におけるシェアードマウント検出の問題を修正しました <!-- Fix shared mount detection on btrfs -->
 * lxd: 新たに "shutdown" サブコマンドを実装しました <!-- Implement new "shutdown" sub-command -->
 * lxd: 新たに "activateifneeded" サブコマンドを実装しました <!-- Implement new "activateifneeded" sub-command -->
 * scripts: LVM ストレージをセットアップおよび削除するスクリプトを追加しました <!-- Add script to set up and delete LVM storage -->
 * 多数のバグ修正と、テストなどの改良を行いました <!-- A bunch more fixes, tests and other improvements -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。

## LXD 0.17 リリースのお知らせ <!-- LXD 0.17 release announcement --><span class="text-muted">2015 年 9 月 1 日<!-- 1st of September 2015 --></span>

<!--
The main changes for this release are:
-->
このリリースの主な変更点は以下の通りです。

 * lxc: 新たに "lxc file edit" コマンドを追加しました <!-- Add a new "lxc file edit" command -->
 * lxc: パブリックなリモートホストのサポートを追加しました <!-- Add support for public remotes -->
 * lxc: リモートホストの IPv6 アドレスが追加できるようになりました <!-- Support adding a remote by its IPv6 address -->
 * lxd/core: Go 1.5 でのビルドの問題を修正しました <!-- Fix building with Go 1.5 -->
 * lxd/core: スナップショットのリネームができるようになりました <!-- Allow renaming snapshots -->
 * lxd/core: コンテナに対する REST API に新たに /logs を追加しました <!-- Add a new /logs REST API to containers -->
 * lxd/core: ストレージバックエンド名とバージョンをエクスポートするようになりました <!-- Export the storage backend name and version -->
 * lxd/btrfs: 再帰的なサブボリュームのスナップショットと消去をサポートしました <!-- Support for recursive subvolume snapshot and removal -->
 * lxd/lvm: スナップショットのサポートを追加しました <!-- Add snapshot support -->
 * lxd/lvm: コンテナのコピーのサポートを追加しました <!-- Add container copy support -->
 * lxd/lvm: コンテナのリネームのサポートを追加しました <!-- Add container rename support -->
 * lxd/lvm: プールが使用中の場合は LVM 設定の変更を許可しなくなりました <!-- Disallow changing LVM config if pool is in use. -->
 * lxd/lvm: 仕様に LVM の設定キーを追加しました <!-- Document LVM config keys in specs -->
 * lxd-images: "lxd images import lxc" コマンドは廃止になりました <!-- Deprecate "lxd images import lxc" -->
 * lxd-images: マニフェストの URL を表示するようになりました <!-- Print the manifest URL -->
 * lxd-images: Ubuntu イメージの "releases" ストリームをデフォルトにしました <!-- Default to the "releases" stream for Ubuntu images -->
 * vagrant: vmware での起動をサポートしました <!-- Support running in vmware -->
 * 多数のバグ修正と、テストなどの改良を行いました <!-- A bunch more fixes, tests and other improvements -->

<!--
Note that as of this release, the use of "lxd-images import lxc" is
deprecated in favor of using the images.linuxcontainers.org remote.
-->
このリリース以降、"lxd-images import lxc" コマンドの使用は廃止となりました。代わりにリモートサーバとして images.linuxcontainers.org を使用してください。

<!--
For example:
-->
例えば、今までは:

    lxd-images import lxc centos 7 amd64 --alias centos
    lxc launch centos my-container

<!--
Now becomes:
-->
として実行していた処理は、以下のようになりました:

    lxc remote add images images.linuxcontainers.org    # one-time setup
    lxc launch images:centos/7/amd64 my-container

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。


## LXD 0.16 リリースのお知らせ <!-- LXD 0.16 release announcement --><span class="text-muted">2015 年 8 月 18 日<!--18th of August 2015 --></span>

<!--
The main changes for this release are:
-->
このリリースの主な変更点は以下の通りです。

 * コンテナの自動起動のサポートを追加しました。自動起動時の起動間隔と起動順のサポートを含みます <!-- Added container auto-start support, includes start delay and start ordering -->
 * ローカル (unix socket) からリモートデーモン (https) へのコンテナとイメージのコピーをサポートしました <!-- Support copying container and images from a local (unix socket) to a remote (https) daemon -->
 * 異なる uid/gid の割り当てを持つホスト間で非特権コンテナの転送を行う際に、id の再マッピングを行うようになりました <!-- Remap the unprivileged containers when transferring between hosts with differing allocations -->
 * 既存のコンテナで、id のマッピングが変わった際と特権・非特権の変更の際に、id の再マッピングを行うようになりました <!-- Remap existing containers when their idmap changes or when they're switched between privileged and unprivileged -->
 * EDITOR 環境変数を正しく扱うようになりました <!-- The EDITOR variable is now properly respected -->
 * リモートイメージからのコンテナの起動時に、キャッシュされたイメージを expire するようになりました <!-- When starting a container from a remote image, the cached image now expires -->
 * lxd-images に新たに --public フラグを追加しました <!-- New &#045;&#045;public flag added to lxd-images -->
 * スナップショット時に --stateful 指定ができるようになりました <!-- Allow &#045;&#045;stateful snapshots -->
 * 多数のバグフィックスと、パフォーマンスとテストの改良を行いました <!-- And a lot of bugfixes, performance and test improvements -->

### ダウンロード<!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。

## LXD 0.15 リリースのお知らせ <!-- LXD 0.15 release announcement --><span class="text-muted">2015 年 8 月 4 日<!--4th of August 2015 --></span>

<!--
The main changes for this release are:
-->
このリリースの主な変更点は以下の通りです。

 * ストレージとネットワークのホットプラグ機能を追加しました <!-- Added storage and network hotplug -->
 * ロギングの改良を行いました <!-- Improved logging -->
 * LVM と btrfs バックエンドの改良を行いました <!-- Improved LVM and btrfs backend -->
 * /dev/lxd が gccgo でも動作するようになりました <!-- /dev/lxd now works with gccgo -->
 * コンテナ内部の環境変数を設定するための新しい environment.* という設定を追加しました <!-- Added new environment.* configuration namespace to set environment variables inside the container -->
 * init と launch コマンドでコンテナ名を表示するようになりました <!-- Init and launch now print the container name -->
 * lxd-images コマンドが扱うイメージのデフォルトが Ubuntu 14.04 LTS になりました <!-- lxd-images now defaults to Ubuntu 14.04 LTS -->
 * --tcp オプションは設定 core.https_address で置き換えられました <!-- &#045;&#045;tcp has now been replaced by the core.https_address config option -->
 * LVM と btrfs サポートの改良を行いました <!-- Improved LVM and btrfs support -->
 * LXD のスピードテストをいくつか追加しました <!-- Add some LXD speed tests -->
 * LXD クライアントのみをビルドする "make client" ターゲットを Makefile に追加しました (MacOS Xで使用します) <!-- New "make client" target to only build the LXD client (use this for MacOS X) -->
 * lxdbr0 ブリッジ用のスクリプトと http プロキシコードを新たに追加しました <!-- Introduce new scripts and http proxy code for a lxdbr0 bridge -->
 * ストレージの内部構造を変更しました <!-- Rework internal storage representation -->
 * コンテナの内部構造を変更しました <!-- Rework internal container representation -->
 * データベースの内部構造を変更しました <!-- Rework internal database representation -->
 * 色々なテストの改良を行いました <!-- Various testsuite improvements -->
 * 多数のバグフィックスと小さな改良を行いました <!-- A lot more bugfixes and other small improvements -->

<!--
This release moves containers from /var/lib/lxd/lxc to /var/lib/lxd/containers  
and snapshots from /var/lib/lxd/lxc/\<name\>/snapshots to /var/lib/lxd/snapshots/\<name\>.
To do so, LXD will stop all containers on the next startup, then start them again  
after moving everything to the new location.
-->
このリリースでコンテナが /var/lib/lxd/lxc から /var/lib/lxd/containers へ、スナップショットは /var/lib/lxd/lxc/\<name\>/snapshots から /var/lib/lxd/snapshots/\<name\> へ移動しました。このため、LXD は次回の起動時にすべてのコンテナを停止し、すべてのコンテナを新しい場所に移動させたあとにコンテナを起動します。

<!--
The --tcp daemon option has been replaced by the core.https\_address option allowing users  
to change the address and port LXD binds to. Changes are now applied immediately.
-->
--tcp デーモンオプションは、ユーザが LXD がバインドするアドレスとポートを変更するための  core.https\_address オプションに置き換えられました。この変更はすぐに適用されます。

### ダウンロード<!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。


## LXD 0.14 リリースのお知らせ <!-- LXD 0.14 release announcement --><span class="text-muted">2015 年 7 月 21 日<!-- 21st of July 2015 --></span>

<!--
The main changes for this release are:
-->
このリリースの主な変更点は以下の通りです。

 * コマンドラインのヘルプを改良しました <!-- Improve command line help -->
 * LVM バックエンドを改良しました (コンテナが実行されている間だけストレージを mount/umount できます) <!-- Improve LVM backend (only mount/umount storage while the container is running, ...) -->
 * 証明書を扱う部分を作りなおしました (ユーザインターフェース、生成と再帰問い合わせのサポート) <!-- Rework certificate handling (user interface, generation and recursive query support) -->
 * 不正なイメージの原因となる publish のバグを修正しました <!-- Fix a publish bug that would lead to invalid images -->
 * コンテナのコピー、マイグレーションの IPv6 サポートの修正を行いました <!-- Fix IPv6 support of container copy/migration -->
 * ロギングのコードが新しくなりました (syslog サポート、ログファイルのサポートとログレベル) <!-- New logging code (syslog support, logfile support and log levels) -->
 * "split" (分割された) イメージ (メタデータとrootfsが分離している) のサポートのための実装を行いました <!-- Implement support for "split" images (separate metadata and rootfs) -->
 * lxd-images にダウンロードの進捗をトラッキングする機能を追加しました <!-- Add download progress tracking to lxd-images -->
 * アーキテクチャの不整合を検出して報告するようになりました <!-- Detect and report architecture mismatches -->
 * サーバ間で直接イメージのコピーを行う機能がサポートされました <!-- Direct image copy between servers is now supported -->
 * /dev/lxd が meta-data インターフェースをサポートしました <!-- /dev/lxd now supports the meta-data interface -->
 * lxd-images を使って Ubuntu Cloud イメージがインポートできるようになりました <!-- Ubuntu cloud images may now be imported using lxd-images -->
 * その他、コードの改良を行いました (golint、リファクタリング、圧縮の扱い、テストなど) <!-- Other code improvements (golint, refactoring, compression handling, tests, ...) -->

<!--
This is the first LXD release to support the official Ubuntu Cloud images.  
At this time, those are only available for the current development release (wily)  
but we hope to have images for all supported Ubuntu releases over the next few days.
-->
このリリースは公式の Ubuntu Cloud イメージをサポートする最初の LXD のリリースです。現時点では、current の開発リリース (wily) のみ利用できます。しかし、すべてのサポートされた Ubuntu のリリースのイメージがこれから数日間で使えるようになるはずです。

<!--
To import one of those images into your LXD image store, run:
-->
これらのイメージをあなたの LXD イメージストアにインポートするには、以下のように実行します。

    lxd-images import ubuntu --alias ubuntu-cloud

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。


## LXD 0.13 リリースのお知らせ <!-- LXD 0.13 release announcement --><span class="text-muted">2015 年 7 月 7 日 <!-- 7th of July 2015 --></span>

<!--
The main changes for this release are:
-->
このリリースの主な変更点は以下の通りです。

 * ストレージバックエンドとして LVM thin pool のサポートを追加しました <!-- Add support for LVM thin pools as a storage backend. -->
 * 基本的な bash 補完を追加しました <!-- Add basic bash completion -->
 * コンテナをイメージに変換する "publish" コマンドを実装しました <!-- Implement the "publish" command, turning a container into an image -->
 * ファイルの push/pull の信頼性を改良しました <!-- Improve file push/pull reliability -->
 * 一度に複数のコンテナを start/stop/restart/delete できるようにしました <!-- Make it possible to start/stop/restart/delete multiple containers at once -->
 * gccgo を使ったビルドの修正を行いました (現時点ではこの場合には /dev/lxd を無効にします) <!-- Fix build under gccgo (currently disabling /dev/lxd in such case) -->
 * コンテナのコピー時の btrfs のパフォーマンスを改良しました (訳注: btrfs の場合は rsync でなくスナップショットでコピーを作成します)<!-- Improve btrfs performance during container copy -->
 * 他にも多数のバグ修正、細かな改良、クリーンアップを行っています <!-- A lot of other bugfixes, minor improvements and cleanups -->

<!--
This is the first release of LXD where the client may be built on operating systems  
other than Linux. At the moment, MacOS X has been confirmed to work and Windows is known not to work,  
other Unix may work too but haven't been tested.
-->
このリリースは Linux 以外のオペレーティングシステム上でクライアントがビルドできる LXD の最初のリリースです。今のところ、Mac OS X では動作確認がされています。Windows では動かないことが確認されています。他の Unix では動く可能性が高いですが、テストはされていません。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。


## LXD 0.12 リリースのお知らせ <!-- LXD 0.12 release announcement --><span class="text-muted">2015 年 6 月 23 日 <!-- 23rd of June 2015 --></span>

<!--
The main changes for this release are:
-->
このリリースの主な変更点は以下の通りです。

 * /dev/lxd を実装しました <!-- Implement /dev/lxd -->
 * exec 時の初期コンソールサイズの修正を行いました <!-- Fix initial console size on exec -->
 * マイグレーションのメモリ消費量を減少させました <!-- Reduce memory footprint of migration -->
 * API でユーザが読める形式の日付フォーマットを使うようになりました <!-- Use user redable date strings in the API -->
 * サーバの設定キーを設定しなくても良くなりました <!-- Allow unset for server config keys -->
 * exec の様々な競合状態を修正しました <!-- Fix various race conditions with exec -->
 * 純粋な Go 言語による gettext 実装を使用するように変更しました <!-- Switch to a pure-go gettext implementation -->
 * すべての応答で正しい Content-Type をセットするようにしました <!-- Set proper Content-Type on all replies -->
 * info でホストの veth デバイスの情報を表示するようになりました <!-- how the host veth device in info -->
 * より良い Snappy ubuntu サポートのためにいくつか変更を行いました <!-- Some changes to better support Snappy ubuntu -->
 * 様々なその他のバグフィックスを行いました <!-- Various other bugfixes -->
 * ヘルプメッセージの改良を行いました <!-- Improve help messages -->
 * テストの改良を行いました <!-- Improve testsuite -->
 * ドイツ語の翻訳を追加しました <!-- Initial German translation -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。


## LXD 0.11 リリースのお知らせ <!-- LXD 0.11 release announcement --><span class="text-muted">2015 年 6 月 9 日<!-- 9th of June 2015 --></span>

<!--
The main changes for this release are:
-->
このリリースの主な変更点は以下の通りです。

 * イメージ内のテンプレートファイルをサポートしました <!-- File templating suport in images -->
 * systemd の socket activation をサポートしました <!-- Socket activation with Systemd -->
 * スタートアップ時のコンテナのクリーンシャットダウンと再起動をサポートしました <!-- Support for clean shutdown and container restart on startup -->
 * "lxc image show" コマンドの実装をしました <!-- Implement "lxc image show" -->
 * exec での SIGWINCH シグナル (ターミナルのリサイズイベント) のサポートを実装しました <!-- Implement SIGWINCH support in exec (terminal resize event) -->
 * すべての設定キーを仕様に沿ったものにしました <!-- Make all configuration keys spec-compliant -->
 * "lxc image edit" の修正を行いました <!-- Fix "lxc image edit" -->
 * 外部との接続性がなくてもすべてのテストが実行できるようになりました <!-- Allow running the testsuite without any outside connectivity -->
 * テストの出力をより読みやすいように改良しました <!-- Improve testsuite output to be more readable -->
 * その他のバグフィックスを行いました <!-- And the usual set of bugfixes. -->

<!--
NOTE: The key to set a server password is now, core.trust\_password. 
On first startup of LXD 0.11, all the old supported names will be converted to the official one.
-->
注意: サーバパスワードを設定するためのキーは core.trust\_password になりました。
LXD 0.11 の最初の起動時に、古いバージョンでサポートされていた名前はすべて正式なキー名に変換されます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。

## LXD 0.10 リリースのお知らせ <!-- LXD 0.10 release announcement --><span class="text-muted">2015 年 5 月 26 日<!-- 26th of May 2015 --></span>

<!--
The main changes for this release are:
-->
このリリースの主な変更点は以下の通りです。

 * スナップショットとリストアの実装を行いました <!-- Implemented snapshot restore -->
 * "lxc remote add" コマンドに新しいオプションである --accept-certificate を追加しました <!-- New --accept-certificate flag to lxc remote add -->
 * "lxc remote add" コマンドに新しいオプションである --password を追加しました <!-- New --password flag to lxc remote add -->
 * "lxc profile device show" と " lxc config device show" コマンドを追加しました <!-- Added "lxc profile device show" and " lxc config device show" -->
 * "lxc config show" と "lxc config set" コマンドがサーバの設定に使えるようになりました <!-- "lxc config show" and "lxc config set" now work for server configuration -->
 * "lxc profile edit" と "lxc config edit" コマンドが標準入力から設定を受け取れるようになりました <!-- lxc profile edit and lxc config edit now accept configuration on stdin -->
 * /1.0/images/aliases API に recursion のサポートを追加しました <!-- Added recursion support to /1.0/images/aliases API -->
 * /1.0/containers/{name}/snapshots API に recursion のサポートを追加しました <!-- Added recursion support to /1.0/containers/{name}/snapshots API -->
 * コマンドラインクライアントは go-lxc に依存しなくなりました <!-- The command line client no longer depends on go-lxc -->
 * uid/gid の割り当てと変換を実装しなおしました <!-- Re-worked uid/gid allocation and uid/gid shifting -->
 * ヘルプと使い方の表示の改良を行いました <!-- Improved help and usage -->
 * "lxc list" コマンドの表示の改良を行いました <!-- Improved lxc list rendering -->
 * "lxc profile show" と "lxc config show" コマンドの改良を行いました <!-- Improved lxc profile show and lxc config show -->
 * デバッグメッセージの改良を行いました <!-- Improved debug messages -->
 * /1.0 へのアクセスで LXD のバージョンがエクスポートされるようになりました <!-- The LXD version is now exported on /1.0 -->
 * README の改良を行いました <!-- Improved README -->
 * SSL 証明書の Expire が 10 年後になりました <!-- SSL certificates now expire after 10 years -->
 * 色々なテストの改良とバグの修正を行いました <!-- Various test improvements and bugfixes -->

### Downloads
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。


## LXC 0.9 リリースのお知らせ <!-- LXD 0.9 release announcement --><span class="text-muted">2015 年 5 月 12 日<!-- 12th of May 2015 --></span>

<!--
The main changes for this release are:
-->
このリリースの主な変更点は以下の通りです。

 * メモリとファイルディスクリプタのリークを修正しました (それに対するテストも追加しました) <!-- Fixed memory and file descriptior leaks (and add extra tests for those) -->
 * setfacl が失敗したときに chmod にフォールバックするようになりました (ACL サポートのないファイルシステム向け) <!-- Fallback to chmod when setfacl fails (filesystem without ACLs support) -->
 * コンテナのロギングの修正を行い、lxc info コマンド経由でログが見れるようになりました <!-- Fixed container logging and make it available through lxc info (--show-log) -->
 * 特権コンテナに対する正しい uid/gid マッピングをセットアップするようになりました <!-- Setup the right uid/gid map for privileged containers -->
 * "lxc config edit" と "lxc profile edit" コマンドで無効な設定を行った時に報告するようになりました <!-- Report invalid configuration in "lxc config edit" and "lxc profile edit" -->
 * 初めて lxc コマンドを実行した際に分かりやすい出力を行うようになりました。また、プロファイルと設定の例を改良しました <!-- Improved the first use experience and the profile/config examples -->
 * "lxc config profile \*" コマンドを "lxc profile \*" コマンドに変更しました (古いコマンドもまだ有効です) <!-- Rename "lxc config profile \*" to "lxc profile \*" (old syntax is still supported) -->
 * より信頼できるデータベースの扱いを行うようになりました <!-- More reliable database handling -->
 * コピーしたコンテナは新しい MAC アドレスを取得するようになりました <!-- Container copies get a new MAC address -->
 * コンテナ環境内で USER 環境変数が設定されるようになりました (exec 時) <!-- USER is now set in the container environment (on exec) -->
 * コンテナのビルドに使われるイメージを追跡し、それを使ってコピーとマイグレーションの最適化を行うようになりました <!-- Track the image used to build the container and use this to optimize copy/migration -->
 * データベースのテストを改良しました <!-- Improved database testing -->
 * exec 時の pts デバイスの所有権に関する問題を修正しました <!-- Fixed pts device owneship on exec -->
 * raw.lxc が早く追加されすぎていたのを修正しました (lxc.network.script などの実行の失敗を引き起こしていました) <!-- Fixed raw.lxc being applied too early (resulted in broken lxc.network.script and others) -->
 * lxc と lxd の両方で引数のパースを改良しました <!-- Better argument parsing in both lxc and lxd -->
 * コンテナとネットワークのリスト表示のパフォーマンスを改良しました <!-- Improved performance in container and network listing -->
 * 信頼する証明書のデータベース中で証明書の名前が衝突する問題を修正しました <!-- Fixed certificate name conflicts in the trust database -->

### Downloads
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。


## LXD 0.8.1 リリースのお知らせ <!-- LXD 0.8.1 release announcement --><span class="text-muted">2015 年 4 月 29 日 <!-- 29th of April 2015 --></span>

<!--
Bugfix only release on top of 0.8 fixing some regressions:
-->
0.8 で生じたバグの修正のみを目的とするリリースです。

 * 全てのアーキテクチャでのビルドの問題を修正しました <!-- Fix building on all architectures -->
 * go-protobuf リポジトリの URL を変更しました <!-- Change the go-protobuf repository URL -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。


## LXD 0.8 リリースのお知らせ<!-- LXD 0.8 release announcement --><span class="text-muted">2015 年 4 月 28 日<!-- 28th of April 2015 --></span>

<!--
The major changes for this release are:
-->
このリリースの主な変更点は以下の通りです。

 * lxc file push の uid/gid の問題を修正しました <!-- Fixed uid/gid in lxc file push -->
 * PROXY 環境変数を使うようになりました <!-- Respect PROXY environment variables -->
 * データベースのロック問題を修正しました <!-- Fix database locking issues -->
 * デバッグオプションを更に追加しました <!-- Add more debugging options -->
 * 一時的なコンテナの様々な問題を修正しました <!-- Various fixes to ephemeral containers -->
 * スナップショットから新しくコンテナを作成する際の問題を修正しました <!-- Fix creating a new container from a snapshot -->
 * btrfs のサブボリュームが使用できる場合は、サブボリュームを使ってより速くコンテナを作れるようになりました <!-- When available, use btrfs subvolumes for faster container creation -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。


## LXC 0.7 リリースのお知らせ <!-- LXD 0.7 release announcement --><span class="text-muted">2015 年 4 月 14 日 <!-- 14th of April 2015 --></span>

<!--
The major changes for this release are:
-->
このリリースの主な変更点は以下の通りです。

 * コンテナがプライベートイメージから起動できるようになりました <!-- Containers can now be started from a private image -->
 * 一時的 (Ephemeral) なコンテナをサポートしました <!-- Ephemeral containers are supported -->
 * デバッグの改良を行いました <!-- Improved debugging -->
 * 一部のドキュメントを更新しました <!-- Some documentation update -->
 * いくつか小さい修正を行いました <!-- A few more minor fixes -->

<!--
Please note that it's still early in the LXD development and that current LXD isn't intended  
for production use and comes with no support statement from upstream.  
(reported bugs and patches will be included in the next release
-->
このリリースはまだ LXD 開発の初期であり、現時点の LXD はまだプロダクション用途向きではないことに注意してください。そしてサポートはありません。(報告されたバグ修正やパッチは次のリリースに含まれる予定です)

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。


## LXD 0.6 リリースのお知らせ <!-- LXD 0.6 release announcement --><span class="text-muted">2015 年 4 月 7 日 <!-- 7th of April 2015 --></span>

<!--
The major changes for this release are:
-->
このリリースの主な変更点は以下の通りです。

 * Vagrant の設定ファイルが追加されました <!-- Added a vagrant configuration file -->
 * コンテナの MAC アドレスが固定になりました <!-- The container's MAC address is now persistent -->
 * リモートサーバの扱いに関する様々な修正を行いました <!-- Variety of fixes regarding remote servers handling -->
 * 再帰的な問い合わせが可能になりました (イメージサーバに対する劇的なスピードの改善) <!-- Recursive query support (massive speed improvement for image servers) -->
 * TLS において強固な暗号のみを使うように設定しました <!-- TLS now configured to only support strong ciphers -->
 * イメージのインポート時にエイリアスを設定できるようになりました <!-- Support setting aliases at image import time -->
 * テストの範囲を改良しました <!-- Improved test coverage -->
 * クライアントのエラーメッセージを改良しました <!-- Improved error messages on the client -->
 * 特権コンテナの扱いに関する修正を行いました <!-- Fix privileged containers handling -->
 * LXD が powerpc 上でビルドできるようになりました <!-- LXD can now be built on powerpc -->
 * 多数のバグ修正と調整を行いました <!-- And a lot more bugfixes and tweaks -->

<!--
Please note that it's still early in the LXD development and that current LXD isn't intended  
for production use and comes with no support statement from upstream.  
(reported bugs and patches will be included in the next release)
-->
このリリースはまだ LXD 開発の初期であり、現時点の LXD はまだプロダクション用途向きではないことに注意してください。そしてサポートはありません。(報告されたバグ修正やパッチは次のリリースに含まれる予定です)

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。


## LXD 0.5 リリースのお知らせ <!-- LXD 0.5 release announcement --><span class="text-muted">2015 年 3 月 24 日<!-- 24th of March 2015 --></span>

<!--
The major changes for this release are:
-->
このリリースの主な変更点は以下の通りです。

 * IPv6 でリモートサーバを扱えるようになりました <!--  IPv6 support for remote servers -->
 * リモートサーバがシステムが信頼する証明書を持つようになった場合のチェックを行うようにしました <!-- Check if the remote server happens to have a certificate which is trusted by the system -->
 * "lxc image copy" コマンドを実装しました <!-- Implemented "lxc image copy" -->
 * リモートの扱いを改良しました (デフォルトの設定、https:// と unix:// のサポート、多数の使いやすいエイリアス) <!-- Improved remote handling (default configuration, support for https:// and unix:// and a bunch of convenient aliases) -->
 * key/value の保存に対する API の一貫性を確保しました (常にディレクトリとしてエクスポートするようになりました) <!-- API consistency for key/value storage (always exported as dictionaries) -->
 * リモートのイメージが長いハッシュでも短いハッシュでも起動できるようになりました <!-- Remote images can now be started by their long or short hash -->
 * リモートのイメージのプロパティがローカルのキャッシュにきちんとミラーされるようになりました <!-- Remote image properties are now properly mirrored in the local cache -->
 * 多数のデータベースのロック問題が解決されました <!-- A lot of database locking issues have been resolved -->

<!--
Please note that it's still early in the LXD development and that current LXD isn't intended  
for production use and comes with no support statement from upstream.  
(reported bugs and patches will be included in the next release)
-->
このリリースはまだ LXD 開発の初期であり、現時点の LXD はまだプロダクション用途向きではないことに注意してください。そしてサポートはありません。(報告されたバグ修正やパッチは次のリリースに含まれる予定です)

<!--
At this point, most core LXD features are present but many of the  
particular options aren't implemented yet (don't match our  
specifications), we expect to make great progress in supporting all of  
the expected options over the next couple of releases.
-->
現時点で、ほとんどの LXD の機能の主要なものが提供されるようになりました。しかし、まだ多数の特定のオプションが実装されていません (仕様と一致していません)。今後の数リリースのうちで、予定しているオプションのすべてがサポートされるように大きく進歩する予定です。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。


## LXD 0.4 リリースのお知らせ <!-- LXD 0.4 release announcement --><span class="text-muted">2015 年 3 月 17 日 <!-- 17th of March 2015 --></span>

<!--
The major changes for this release are:
-->
このリリースの主な変更点は以下の通りです。

 * リモートにあるイメージからのコンテナの起動がサポートされました <!-- Support for starting a container from a remote image -->
 * ホスト間のコンテナのコピー／移動がサポートされました <!-- Support for copying/moving containers between hosts -->
 * コマンドラインが改良されました (リスト、エイリアス、プロファイル、短いハッシュ、など) <!-- Improved command line (listing, aliases, profiles, partial hashes, ...) -->
 * エラーログが改良されました <!-- Improved error logging -->
 * 仕様によりきっちり合うように API が修正されました <!-- API fixes to more closely match the spec -->
 * 多数のバグフィックス <!-- A lot of bugfixes -->

<!--
Please note that it's still early in the LXD development and that current LXD isn't intended  
for production use and comes with no support statement from upstream.  
(reported bugs and patches will be included in the next release)
-->
このリリースはまだ LXD 開発の初期であり、現時点の LXD はまだプロダクション用途向きではないことに注意してください。そしてサポートはありません。(報告されたバグ修正やパッチは次のリリースに含まれる予定です)

<!--
At this point, most core LXD features are present but many of the  
particular options aren't implemented yet (don't match our  
specifications), we expect to make great progress in supporting all of  
the expected options over the next couple of releases.
-->
現時点で、ほとんどの LXD の機能の主要なものが提供されるようになりました。しかし、まだ多数の特定のオプションが実装されていません (仕様と一致していません)。今後の数リリースのうちで、予定しているオプションのすべてがサポートされるように大きく進歩する予定です。

### Downloads
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。


## LXD 0.3 リリースのお知らせ <!-- LXD 0.3 release announcement --><span class="text-muted">2015 年 3 月 10 日 <!-- 10th of March 2015 --></span>

<!--
The major changes for this release are:
-->
このリリースでの主な変更点は以下の通りです。

 * lxd:
    * exec を作りなおしました。インタラクティブモードとノン・インタラクティブモードを分離し、エスケープシーケンスを適切にサポートするようになりました <!-- Reworked exec, now with separate interactive and non-interactive modes and proper support for escape sequences. -->
    * イメージの取り扱いを改良しました。新たに圧縮アルゴリズムを追加し、イメージのエクスポートをサポートしました <!-- Improved image handling, now supporting more compression algorithms and support for image export. -->
    * ライブマイグレーションの初期サポート (特別な設定をコンテナに行う必要があります) <!-- Initial support of live migration (requires particular container configuration) -->
    * コンテナの設定とプロファイルの初期サポート <!-- Initial support of container configuration and profiles -->
        * ディスクとネットワークインターフェースのサポート <!-- Support for disks and network interfaces -->
        * プロファイルの作成・削除・割り当てのサポート <!-- Support for creating/deleting/assigining profiles -->
    * 特に指定されない限り全ての新しいコンテナに適用される "default" プロファイルを導入しました <!-- Introduce a "default" profile which is applied to all new containers unless otherwise specified. -->

* lxc:
    * 色々な "list" コマンドのユーザ体験の改良を行いました <!-- Improved user experience for the various "list" commands -->
    * info コマンドを改良しました。PID と IP アドレスが表示されるようになりました <!-- Improved info command, now showing PID and IP addresses -->
    * image info コマンドを実装しました。イメージのプロパティとエイリアスを表示します <!-- Implement the image info command, shows all image properties and aliases. -->
    * LXD に対する翻訳例として、初期の部分的なフランス語翻訳を行いました <!-- Early (partial) french translation as an example translation of LXD. -->
    * イメージとプロファイルに対する "edit" コマンドをサポートしました <!-- Support of the "edit" command for images and profiles. -->
 * lxd-images:
    * 最小の busybox イメージの作成をサポートするようになりました <!-- Now supports creating a minimal busybox image. -->
    * images.linuxcontainers.org からイメージをインポートする際の広範囲に対する改良を行いました。もう再パッケージングは不要です。 <!-- Vastly improved image imports from images.linuxcontainers.org by no longer requiring repacking. -->
    * Python 3.2 でも動作するようになりました <!-- Now working with python3.2 -->
 * テストスイート <!-- Testsuite -->:
    * コンテナの設定、プロファイル、デバイス、マイグレーション、コマンド実行(exec)、データベースに対するテストを追加しました <!-- Added tests for container configuration, profiles, devices, migration, exec and database. -->
    * 最小の busybox イメージを実行して、数秒で実行するようになりました <!-- Now running using a minimal busybox image, making it run in just a few seconds. -->
 * 多数のバグフィックスを行いました <!-- Many bugfixes -->

<!--
Please note that it's still early in the LXD development and that current LXD isn't intended  
for production use and comes with no support statement from upstream.  
(reported bugs and patches will be included in the next release)
-->
このリリースはまだ LXD 開発の初期であり、現時点の LXD はまだプロダクション用途向きではないことに注意してください。そしてサポートはありません。(報告されたバグ修正やパッチは次のリリースに含まれる予定です)

<!--
At this point, most core LXD features are present but many of the  
particular options aren't implemented yet (don't match our  
specifications), we expect to make great progress in supporting all of  
the expected options over the next couple of releases.
-->
現時点で、ほとんどの LXD の機能の主要なものが提供されるようになりました。しかし、まだ多数の特定のオプションが実装されていません (仕様と一致していません)。今後の数リリースのうちで、予定しているオプションのすべてがサポートされるように大きく進歩する予定です。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。


## LXD 0.2 リリースのお知らせ <!-- LXD 0.2 release announcement --><span class="text-muted">2015 年 2 月 27 日 <!-- 27th of February 2015 --></span>

<!--
The major changes for this release are:
-->
このリリースでの主な変更点は以下の通りです。

 * ビルトインイメージストアの最初のバージョン <!-- Initial version of the built-in image store -->
   * 全てのコンテナはイメージから作らなければならなくなりました <!-- All containers must now be created from images -->
   * イメージは提供の "lxd-images" ツールを使って LXD にインポートできます <!-- Images can be imported into LXD by using the provided "lxd-images" tool -->
   * イメージを見つけやすくするためのイメージのエイリアスを設定できます <!-- Image aliases can be setup to make it easier to find your images -->
 * データベースバックエンド (全ての LXD データは SQLite のデータベースに保存されるようになりました) <!-- Database backend (all LXD data is now stored in a SQLite database) -->
 * コンテナ設定の初期段階 (APIの一部のみ) <!-- Early stage of container configuration (partial API only) -->
 * gcc-go 経由の多数のアーキテクチャ向けのビルドのサポート (全ての依存関係に互換性があるとは限りません) <!-- Support for building for many architectures through gcc-go (not all dependencies are compatible) -->
 * exec のメカニズムの再構築 <!-- Reworked exec mechanism -->
 * 多数のバグフィックス <!-- A lot of bugfixes -->

<!--
Please note that it's still early in the LXD development and that current LXD isn't intended  
for production use and comes with no support statement from upstream.  
(reported bugs and patches will be included in the next release)
-->
このリリースはまだ LXD 開発の初期であり、現時点の LXD はまだプロダクション用途向きではないことに注意してください。そしてサポートはありません。(報告されたバグ修正やパッチは次のリリースに含まれる予定です)

<!--
We are still busy working on container migration, proper container configuration and a stable REST API.
-->
我々はまだコンテナのマイグレーション、適切にコンテナを設定できるようにすること、stable な REST API の開発に精力的に取り組んでいます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。

## LXD 0.1 リリースのお知らせ <!-- LXD 0.1 release announcement --><span class="text-muted">2015 年 2 月 13 日 <!-- 13th of February 2015 --></span>

<!--
This is the initial LXD release.
-->
これは LXD の初めてのリリースです。

<!--
With this first release of LXD, it is possible to:
-->
この LXD の初めてのリリースでは、以下が可能です。

 * コンテナの一覧<!-- List containers -->
 * Ubuntu 14.04 LTS amd64 コンテナに対する create、destroy、start、stop、execute コマンドの実行 <!-- create, destroy, start, stop and execute commands into an Ubuntu 14.04 LTS amd64 container -->
 * コンテナの外と中の間でのファイルの転送 <!-- Transfer files in and out of containers -->
 * lxc コマンドラインツールを使った複数の LXD ホストの管理 <!-- Management of multiple LXD hosts through the lxc command line tool -->
 * LXD [REST API](/lxd/rest-api) の試験的な使用<!-- Experiment with the LXD REST API -->

<!--
Support for other container images, container migration, container configuration and profiles  
and a stable REST API will be coming in the next few releases.
-->
他のコンテナイメージ、コンテナマイグレーション、コンテナの設定とプロファイル、Stable な REST API はこの後のリリースで提供予定です。

<!--
This release is our first development snapshot and isn't intended for production use  
and comes with no support statement from upstream. 
(reported bugs and patches will be included in the next release)
-->
このリリースは最初の開発スナップショットであり、プロダクション用途向きではなく、サポートもありません。(報告されたバグ修正やパッチは次のリリースに含まれる予定です)

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads).
-->

このリリースの tarball は [ダウンロードページ](/lxd/downloads) から取得できます。
