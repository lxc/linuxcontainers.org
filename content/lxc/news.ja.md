# News
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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
will very soon ship a packaged version of LXC 1.0.8.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads) から取得できます。そして、各ディストリビューションがすぐに LXC 1.0.8 のパッケージをリリースするでしょう。

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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
will very soon ship a packaged version of LXC 1.1.5.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads) から取得できます。そして、各ディストリビューションがすぐに LXC 1.1.5 のパッケージをリリースするでしょう。

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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
will very soon ship a packaged version of LXC 1.1.4.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads) から取得できます。そして、各ディストリビューションがすぐに LXC 1.1.4 のパッケージをリリースするでしょう。

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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
will very soon ship a packaged version of LXC 1.1.3.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads) から取得できます。そして、各ディストリビューションがすぐに LXC 1.1.3 のパッケージをリリースするでしょう。

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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
will very soon ship a packaged version of LXC 1.1.2.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads) から取得できます。そして、各ディストリビューションがすぐに LXC 1.1.2 のパッケージをリリースするでしょう。

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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
will very soon ship a packaged version of LXC 1.1.1.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads) から取得できます。そして、各ディストリビューションがすぐに LXC 1.1.1 のパッケージをリリースするでしょう。

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
 * core: 新たに lxc.init\_cmd オプションを追加しました。デフォルトの init コマンドである /sbin/init を上書きします <!-- Add new lxc.init\_cmd config option to override the default init command (/sbin/init) -->
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
<!-- The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
will very soon ship a packaged version of LXC 1.1.0, unless they decide to stick to the long term 1.0 release. -->
このリリースの tarball は [ダウンロードページ](/lxc/downloads) から取得できます。そして、各ディストリビューションが長期サポートの 1.0 リリースの採用を続ける決定をしない場合は、すぐに LXC 1.1.0 のパッケージをリリースするでしょう。

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
The release tarballs may be found on our [download page](/lxc/downloads) and we expect most distributions  
will very soon ship a packaged version of LXC 1.0.7.
-->
このリリースの tarball は [ダウンロードページ](/lxc/downloads) から取得できます。そして、各ディストリビューションがすぐに LXC 1.0.7 のパッケージをリリースするでしょう。

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
        <a href="/downloads">download page</a> and we expect most
        distributions will very soon ship a packaged version of LXC 1.0.6. -->
  このリリースの tarball は [ダウンロードページ](/lxc/downloads) から取得できます。
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
  このリリースの tarball は [ダウンロードページ](/lxc/downloads) から取得できます。
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
  このリリースの tarball は [ダウンロードページ](/lxc/downloads) から取得できます。
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
  このリリースの tarball は [ダウンロードページ](/lxc/downloads) から取得できます。
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
  このリリースの tarball は [ダウンロードページ](/lxc/downloads) から取得できます。
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
  このリリースの tarball は [ダウンロードページ](/lxc/downloads) から取得できます。
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

