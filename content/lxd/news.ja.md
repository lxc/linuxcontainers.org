![Download icon](/static/img/containers.png)
# News

## LXD 2.0.0 リリースのお知らせ <!-- LXD 2.0.0 release announcement --><span class="text-muted">2016 年 4 月 11 日 <!-- 11th of April 2016 --></span>

<!--
This is the final release of LXD 2.0!
-->
LXD 2.0 を正式にリリースしました!

<!--
LXD 2.0 is a Long Term Support release, similar to LXC 2.0 and LXCFS 2.0 and so comes  
with a 5 years support commitment from upstream, ending on 1st of June 2021.
-->
LXD 2.0 は LXC 2.0、LXCFS 2.0 と同様に、長期サポート対象のリリースです。開発元が 5 年間のサポート、つまり 2021 年の 6 月 1 日までのサポートを約束します。

<!--
A walkthrough of the LXD 2.0 features can be found here: [LXD 2.0: Blog post series](https://www.stgraber.org/2016/03/11/lxd-2-0-blog-post-series-012/)
-->
LXD 2.0 の機能の説明はこちらでご覧いただけます: [LXD 2.0: Blog post series](https://www.stgraber.org/2016/03/11/lxd-2-0-blog-post-series-012/)

<!--
Packages for LXD 2.0 should be available in Ubuntu and other Linux distributions shortly.
-->
LXD 2.0 のパッケージが Ubuntu や他の Linux ディストリビューションですぐに利用可能になるでしょう。

<!--
Until then, you can just try it online using our [demo service](/lxd/try-it/)
-->
それまでは、オンラインで[デモサービス](/lxd/try-it/)を使ってお試しください。

### LXD 2.0.0 rc9 からの主な変更点 <!-- The main changes since LXD 2.0.0 rc9 are -->

 * client: "lxc list" に json フォーマットによる出力オプションを追加しました <!-- Add a json format option to "lxc list". -->
 * client: (LXD の初期化が済んでない) 初回実行時に lxd init を実行するようにメッセージを出力するようにしました <!-- Recommend running lxd init -->
 * lxd: ネストしている場合に security.privileged を設定できるようになりました <!-- Allow setting security.privileged when nested -->

### LXD 2.0.0 rc9 以降のバグ修正 <!-- The bugfixes since LXD 2.0.0 rc9 are -->

 * client: ローカルの設定でなく展開された設定をフィルタするようにしました <!-- Filter on expanded config rather than local config -->
 * client: file push が与える間違ったファイルモードを修正しました <!-- Fix wrong mode being passed by file push -->
 * client: パスの代わりにスナップショット名を表示するようにしました <!-- Show the snapshot name instead of the path -->
 * client: ヘルプメッセージを調整しました <!-- Tweak help messages -->
 * client: 日本語メッセージを更新しました <!-- Update Japanese translation -->
 * core: ファイルモードを umask させないようにしました <!-- Don't let umask mess with modes -->
 * core: 取得するファイルの uid、gid、モードを修正しました <!-- Fix uid, gid and mode of retrieved files -->
 * core: zfs: 残ったスナップショットを削除するようにしました <!-- Clean any leftover snapshot -->
 * core: zfs: LXD と関係のないパスを無視するようにしました <!-- Ignore non-LXD paths in user count -->
 * doc: API を stable としました <!-- Mark API as stable for release -->


### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。

## LXD 2.0.0.rc9 リリースのお知らせ <!-- LXD 2.0.0.rc9 release announcement --><span class="text-muted">2016 年 4 月 6 日 <!-- 6th of April 2016 --></span>

### このリリースの主な変更点 <!-- The main changes for this release are -->

 * 1.0 API は stable になりました <!-- The 1.0 API is now considered stable -->
 * テストに lxd-benchmark ツールが新たに追加されました <!-- A new lxd-benchmark tool has been added as part of the testsuite -->
 * クライアントが日本語に翻訳されました (訳注: 一部未翻訳の部分が残っています)<!-- The client has been translated into Japanese -->

### バグ修正 <!-- Bugfixes -->

 * core: イメージのエイリアスの更新時に target が設定されているかチェックするようになりました <!-- Check that the target is set on alias update -->
 * core: /proc/self/status の cpu map を使わないようにしました <!-- Don't use the cpu map from /proc/self/status -->
 * core: gzip 以外の圧縮アルゴリズムすべての修正を行いました <!-- Fix all non-gzip compression algorithms -->
 * core: ZFS の信頼性とパフォーマンスの改良を行いました <!-- Improve ZFS reliability and performance -->
 * core: lxcbr0 はもう使われません。lxdbr0 に置き換えられました <!-- lxcbr0 is no more, replace it by lxdbr0 -->
 * core: セットアップモード中はコンテナに関わる操作を行わなくなりました <!-- Prevent container actions while in setup mode -->
 * core: lxc.rootfs.bdev を設定するようになりました (パフォーマンスの改良のため) <!-- Set lxc.rootfs.bdev (performance improvement) -->
 * core: コンテナの idmap の再マッピングの後、ストレージを停止させるようにしました <!-- Stop the storage code after we're done remapping -->
 * core: CPU の利用で無効化されている CPU が扱えるようになりました <!-- Support holes in CPU usage (disabled CPUs) -->
 * core: イベントリスナーを調整して絞るようにしました <!-- Throttle the event listeners -->
 * core: 良くない go-lxc の Start() の振る舞いに対する回避策を採りました <!-- Workaround bad go-lxc Start() behavior -->
 * extra: --fast を使うように bash completion を更新しました (パフォーマンス改良のため) <!-- Update bash completion to use --fast (performance improvement) -->
 * list: ディスクまたはネットワーク情報がない場合にクラッシュしないようにしました <!-- Don't crash on missing disk or network info -->
 * lxd-bridge: プロキシがない場合にリンクローカルアドレスを設定しないようにしました <!-- Don't set link-local without a proxy -->
 * lxd-bridge-proxy: ポート番号を 13128 に変更しました <!-- Bump port number to 13128 -->
 * lxd-bridge: 存在しない lxd-dnsmasq ユーザの代わりに lxd ユーザで dnsmasq を実行するようにしました <!-- Run dnsmasq as the lxd user instead of the non-existing lxd-dnsmasq user -->
 * main: 実行中のコンテナがある場合、ActiveIfNeeded トリガの対象となりました <!-- Have ActiveIfNeeded trigger if we have running containers -->
 * specs: イメージは 6 時間ごとに自動更新されます (という記載に変更しました) <!-- Images are auto-updated every 6 hours -->
 * tests: ファイルシステムにあまり依存しなくなりました <!-- Don't rely on the filesystem so much -->

### 試用環境 <!-- Try it for yourself -->

<!--
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).
-->
この新しい LXD のリリースが、すでに私たちの [デモサービス](/ja/lxd/try-it/) で利用できます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


## LXD 2.0.0.rc8 リリースのお知らせ <!-- LXD 2.0.0.rc8 release announcement --><span class="text-muted">2016 年 3 月 31 日 <!-- 31st of March 2016 --></span>

### このリリースの主な変更点 <!-- The main changes for this release are -->

 * LVM ボリュームサイズが環境変数でなく、設定項目として設定できるようになりました <!-- The LVM volume size is now configurable through configuration rather than environment variables -->
 * "lxc image alias list" で他のリストコマンドのようなフィルタリングが使えるようになりました <!-- "lxc image alias list" now supports filtering like the other list commands -->

### Bugfixes

 * exec の際の初期サイズ (高さ、幅) の修正を行いました <!-- Fix initial exec size -->
 * パケット送信数の値が間違っていたのを修正しました <!-- Fix wrong packets sent value -->
 * 長いパス名で RemoveAll が失敗していたことに対する回避策を採りました <!-- Workaround RemoveAll failures on long paths -->
 * doc: Markdown の修正 <!-- Fix bad markdown -->
 * コンテナの開始時に全てのテンプレートを適用するようにしました <!-- Apply all templates at container startup time -->
 * simplestreams: コードをクリーンアップしました <!-- cleanup -->
 * コマンドの実行に fork を使うようにしました <!-- Use fork for command execution -->
 * apparmor プロファイルのアンロードが失敗したことを致命的なエラーではないようにしました <!-- Failure to unload the apparmor profile isn't fatal -->
 * コンテナの停止が失敗したときのデッドロックを防ぎました <!-- Prevent deadlock on container stop failure -->

### 試用環境 <!-- Try it for yourself -->

<!--
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).
-->
この新しい LXD のリリースが、すでに私たちの [デモサービス](/ja/lxd/try-it/) で利用できます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


## LXD 2.0.0.rc7 リリースのお知らせ <!-- LXD 2.0.0.rc7 release announcement --><span class="text-muted">2016 年 3 月 28 日 <!-- 28th of March 2016 --></span>

### このリリースの主な変更点 <!-- The main changes for this release are -->

 * "lxc info" がリソース消費量を表示するようになりました <!-- "lxc info" now reports resource consumption -->
 * bash completion を改良しました <!-- Improved bash completions -->
 * イメージプロパティからコンテナを作成する機能を実装しました <!-- Implement container creation from image properties -->

### バグ修正 <!-- Bugfixes -->

 * exec: 使われないコードを除去しました <!-- remove dead code path -->
 * exec: 初期のウィンドウサイズを送るようになりました <!-- send initial window size -->
 * exec: client: 常にウィンドウサイズを送らなくなりました <!-- don't always send window size -->
 * exec: 対話 (interactive) モードの時だけターミナルサイズにアクセスするようになりました <!-- only access terminal size in interactive mode -->
 * docs: s/initial/Initial
 * Tests: 出力をパースするために翻訳を行わないようにしました <!-- Don't translate lxc output for parsing it. -->
 * URL パーサの問題の回避策を採りました <!-- Workaround a URL parser issue -->
 * ZFS リストアのエラー出力の明確化を行いました <!-- Clarify the ZFS restore error -->
 * lxd-bridge: IPv6 が無効でも失敗しなくなりました <!-- Don't fail due to missing IPv6 -->

### 試用環境 <!-- Try it for yourself -->

<!--
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).
-->
この新しい LXD のリリースが、すでに私たちの [デモサービス](/ja/lxd/try-it/) で利用できます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


## LXD 2.0.0.rc6 リリースのお知らせ <!-- LXD 2.0.0.rc6 release announcement --><span class="text-muted">2016 年 3 月 23 日 <!-- 23rd of March 2016 --></span>

### このリリースの主な変更点 <!-- The main changes for this release are -->

* 新たにデーモンに "setup mode" が追加されました。これは LXD デーモンが起動した後、コンテナが起動し始める前に、LXD デーモンに対して設定を行う間に使う状態です
   <!-- New daemon "setup mode" to be used to feed configuration to the LXD
   daemon after startup and before it starts spawning containers. -->
 * "lxc config device" と "lxc profile device" コマンドに "get"、"set"、"unset" コマンドを追加しました <!-- The "get", "set" and "unset" commands have been added to "lxc config device" and "lxc profile device" -->
 * "lxc list" で壊れたコンテナを表示しないのではなく "ERROR" と表示するようになりました <!-- Broken containers are now marked as "ERROR" in "lxc list" rather than being hidden -->


### バグ修正 <!-- Bugfixes -->

 * lxd init: サーバアドレスの指定にはポートは不要であることを表示するようにしました <!-- clarify no port is wanted with server address -->
 * lxd init: 空のパスワードを受け付けるようになりました <!-- accept empty trust password -->
 * lxd init: 8443 番ポートを推奨するように表示するようにしました <!-- recommend port 8843 -->
 * README: docker と default プロファイルを適用するようにドキュメントに記載しました (訳注: LXD コンテナ内部で docker を動作させる場合) <!-- document composing docker and default profiles. -->
 * IsMock を MockMode にリネームしました (訳注: プログラム内部の変数の名前の話) <!-- Rename IsMock to MockMode -->
 * デーモン初期化処理をきれいに整理しました <!-- Cleanup daemon initialization -->
 * startDaemon 関数を消去しました <!-- Remove the startDaemon function -->
 * main.go 内の関数名を整えました <!-- Cleanup function names in main.go -->
 * waitready の改良を行いました (訳注: デーモンが内部的にきちんと処理可能状態になるのを待つようになった)<!-- Improve waitready -->
 * 新しいデバイスノードのパーミッションの問題を修正しました <!-- Fix permissions of new devices nodes -->
 * ブリッジが無効化されていても停止できるようになりました <!-- Allow the bridge to be brought down even if disabled -->
 * いくつか lxd-bridge の修正を行いました <!-- Some more lxd-bridge fixes -->
 * lxd-bridge: shellcheck の結果が良くなるように修正しました <!-- Make shellcheck happy -->

### 試用環境 <!-- Try it for yourself -->

<!--
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).
-->
この新しい LXD のリリースが、すでに私たちの [デモサービス](/ja/lxd/try-it/) で利用できます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


## LXD 2.0.0.rc5 リリースのお知らせ <!-- LXD 2.0.0.rc5 release announcement --><span class="text-muted">2016 年 3 月 21 日 <!-- 21st of March 2016 --></span>

### このリリースの主な変更点 <!-- The main changes for this release are -->

 * DELETE /1.0/images/<fingerprint> が実際に Async となるように修正を行いました。
   これは仕様に合致させるための小さな API の変更です。
   この変更により、古いクライアントに対する後方互換性が失われました (イメージの消去を行う場合のみです)。
   <!-- Fix DELETE /1.0/images/<fingerprint> to actually be Async. This is a
   minor API change to match the specification and will break backward
   compatibility with older clients (only when performing image deletion). -->
 * 非推奨だった lxd-images スクリプトが完全に削除されました <!-- The deprecated lxd-images script has now been entirely removed. -->

### バグ修正 <!-- Bugfixes -->

 * イメージの POST 時のエラー出力を改良しました <!-- Improve error reporting on image POST -->
 * スナップショット周りのエラーハンドリングのロジックを修正しました <!-- Fix error handling logic around snapshots -->
 * コンテナのシャットダウンが実際に並列で行われるように修正しました <!-- Fix container shutdown to actually happen in parallel -->
 * 'POST /1.0/images' に対する 'auto\_update' パラメータの説明をドキュメントに追加しました <!-- Document 'auto\_update' parameter for 'POST /1.0/images' -->
 * ステートフルな起動の動きを作り替えました <!-- stateful start: rework behavior -->
 * ステートフルなスナップショットの動きを作り替えました <!-- stateful start: rework behavior -->
 * 非特権の場合、mqueue をバインドマウントにしました <!-- Bind-mount mqueue if unprivileged -->
 * コンテナ内で Docker を使う場合のドキュメントを更新しました <!-- update documentation on using docker in containers -->
 * モニタータイムアウトを 5 秒に増やしました <!-- bump the monitor timeout to 5s -->
 * lxd-bridge: 少し調整しました <!-- Some tweaks -->

### 試用環境 <!-- Try it for yourself -->

<!--
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).
-->
この新しい LXD のリリースが、すでに私たちの [デモサービス](/ja/lxd/try-it/) で利用できます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


## LXD 2.0.0.rc4 リリースのお知らせ <!-- LXD 2.0.0.rc4 release announcement --><span class="text-muted">2016 年 3 月 16 日 <!-- 16th of March 2016 --></span>

### このリリースの主な変更点 <!-- The main changes for this release are -->

 * 再帰バインドマウント (ディスクエントリ上の再帰的プロパティ) をサポートしました (訳注: mount の rbind オプション)<!-- Support for recursive bind-mounts (recursive property on disk entries) -->
 * 新たにコンテナのステータスとして "ERROR" を追加しました。LXC とのコミュニケーションに問題があることを示すのに使います <!-- Add a new "ERROR" state for containers, used to indicate a communication problem with LXC -->
 * 存在しないファイルにのみ適用するテンプレートを指定できるようになりました (create\_only プロパティ) <!-- Make it possible to have templates only apply for non-existing files (create\_only property) -->
 * すべての仕様を更新し、doc/ ディレクトリに移動させました <!-- All the specifications have been updated and moved to the doc/ directory -->
 * /dev/lxd へのアクセスはコンテナ内の uid 0 のユーザに制限されるようになりました <!-- /dev/lxd access is now restricted to uid 0 in the container -->

### バグ修正 <!-- Bugfixes -->

 * devices client: 成功時にのみ成功のメッセージを表示するようになりました <!-- only print success message when successful -->
 * devlxd がコンテナの検出に失敗する問題を修正しました <!-- Fix devlxd failing to detect container -->
 * "device show" コマンドが yaml を表示するようになりました <!-- Have "device show" print yaml -->
 * specs: イメージの扱いを明確化しました <!-- Clarify image handling -->
 * specs: command-line-user-experience.md を削除しました (訳注: コマンドの help を参照するようにとのことです)<!-- Remove command-line-user-experience -->
 * specs: dia 形式のデータベース図を削除しました <!-- Remove dia database diagram -->
 * specs: デーモンの仕様を明確化しました <!-- Clarify the daemon spec -->
 * specs: /dev/lxd の仕様を現状に合うように更新しました <!-- Update /dev/lxd spec to match current state -->
 * specs: 環境変数のリストを更新しました <!-- Update environment variables list -->
 * specs: SSL の仕様を現状に合うように更新しました <!-- Update SSL spec to match current state -->
 * specs: マイグレーションの文書を再フォーマットしました <!-- Re-format the migration document -->
 * specs: 要求仕様を更新しました <!-- Update requirements -->
 * specs: ストレージバックエンドの仕様を更新しました <!-- Update storage backend spec -->
 * specs: ユーザ名前空間 (userns) について実際に合うように更新しました <!-- Update userns to match reality -->
 * docker profile: オーバーマウントができるよう apparmor プロファイルを追加しました <!-- add the apparmor enabled overmount -->
 * リモートの URL をより厳格にパースするようになりました <!-- More strictly parse remote URLs -->
 * exec セッションの外側からの devlxd へのアクセスの問題を修正しました <!-- Fix devlxd access outside of an exec session -->
 * public と simplestream のリモートに関して適切なエラーメッセージを返すようになりました <!-- Return better errors for public and simplestream remotes -->
 * デフォルトで sys\_rawio をブロックするようになりました <!-- Block sys\_rawio by default -->

### 試用環境 <!-- Try it for yourself -->

<!--
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).
-->
この新しい LXD のリリースが、すでに私たちの [デモサービス](/ja/lxd/try-it/) で利用できます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


## LXD 2.0.0.rc3 リリースのお知らせ <!-- LXD 2.0.0.rc3 release announcement --><span class="text-muted">2016 年 3 月 11 日 <!-- 11th of March 2016 --></span>

### このリリースの主な変更点 <!-- The main changes for this release are -->

 * GET /1.0/containers/NAME/snapshots/SNAPNAME はスナップショットに含まれる設定とデバイスを返すようになりました <!-- GET /1.0/containers/NAME/snapshots/SNAPNAME now returns the configuration and devices included in the snapshot -->
 * デーモンの使う HTTP プロキシに関する 3 つの新たな設定項目が導入されました <!-- Three new configuration options have been introduced to configure the daemon to use an HTTP proxy -->
    * core.proxy\_https (設定されていない場合は HTTPS\_PROXY 環境変数を使用します <!-- if not set, uses HTTPS\_PROXY env variable -->)
    * core.proxy\_http (設定されていない場合は HTTP\_PROXY 環境変数を使用します <!-- if not set, uses HTTP\_PROXY env variable -->)
    * core.proxy\_ignore\_hosts (設定されていない場合は NO\_PROXY 環境変数を使用します <!-- if not set, uses NO\_PROXY env variable -->)
 * simplestream のデータを 1 時間キャッシュするようになりました。リモートサーバに何度もアクセスを行うことがありません <!-- Cache remote simplestream data for an hour in the daemon so we don't hammer the remote server -->
 * LXD サーバから取得したイメージが自動で更新できるようになりました <!-- Allow for auto-update of images coming from a LXD server -->

### バグ修正 <!-- Bugfixes -->

 * ConnectInfo が RemoteConfig を使うように変更しました <!-- Change ConnectInfo to take a RemoteConfig. -->
 * カーネルの多重マウントを防ぐ回避策を講じました <!-- Workaround kernel overmounting protection -->
 * migration: ファイルシステムの移動を少しスマートにするようにしました (訳注: ライブマイグレーション時、コンテナの稼働中にコンテナのファイルシステムやスナップショットを移動したあとにチェックポイントと最後の同期を行うようにした)<!-- attempt to be slightly smart about moving filesystems -->
 * tests: UTC で比較を行うことでエラーを防ぐようにしました <!-- disarm the gremlins by comparing things in UTC -->
 * zfs: スナップショットだけを send する場合の処理を修正しました <!-- fix handling of the "snapshot only" send case -->
 * LVM LV サイズを減らせるようになりました。そのテストを追加しました <!-- Allow reducing the LVM LV size and update tests -->
 * profiles: 見つからない場合のエラーメッセージをマスクしないようにしました <!-- don't mask error message when not found -->
 * mounting: ブロックデバイスの時だけファイルシステムをマウントするようにしました <!-- only block devices hold filesystems -->
 * イベントロッキングを作りなおしました <!-- Rework event locking -->
 * コンテナロックの同時読み書きによるパニックを修正しました <!-- Fix panic due to concurent read/edit of container lock -->
 * zfs: pool のヘッダ行をスキップするようにしました <!-- Skip the pool header line -->
 * auto モードの時だけ適用される init 引数を明確にしました <!-- Make it clear that the init arguments only apply in auto mode -->
 * 存在する名前でスナップショットを取得しようとした場合のエラーメッセージを修正しました <!-- Fix error message when snapshotting with existing name -->
 * lvm: エラーをエラーとしてログに書くようにしました <!-- make errors log as errors -->
 * NewClient が呼ばれた時はクライアント証明書を生成しないようにしました <!-- Don't generate client certificates when calling NewClient -->
 * イメージ名の解析を修正しました <!-- Fix parsing image names -->
 * forkgetfile と forkputfile からのエラーをフォワードするようにしました <!-- Forward errors from forkgetfile and forkputfile -->
 * https\_address の変更をより信頼性が高くなるようにしました <!-- Make changing https\_address more reliable -->
 * migration: スナップショット送信のクリーンアップを defer しないようにしました <!-- don't defer cleanup of sending snapshots -->

### 試用環境 <!-- Try it for yourself -->

<!--
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).
-->
この新しい LXD のリリースが、すでに私たちの [デモサービス](/ja/lxd/try-it/) で利用できます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


## LXD 2.0.0.rc2 リリースのお知らせ <!-- LXD 2.0.0.rc2 release announcement -><span class="text-muted">2016 年 3 月 7 日<!-- 7th of March 2016 --></span>

### このリリースの主な変更点 <!-- The main changes for this release are -->

 * REST の CORS ヘッダ用の設定項目を追加しました <!-- Add configuration keys for the rest of the CORS headers -->
 * lxd-images のドロップに一歩近づきました。lxd-images は単なる shim になりました (訳注: 内部的に lxc コマンド or テスト用のスクリプトに変換して実行するだけのスクリプト)<!-- Get one step closer to dropping lxd-images, lxd-images is now just a shim -->
 * Go 1.5 未満はサポートされなくなりました。依存関係のために 1.4 をサポートしなくなったためです <!-- Deprecate support for Go < 1.5 as some of our dependencies dropped 1.4 support -->

### バグ修正 <!-- Bugfixes -->

 * エイリアスを使ってリモートの lxd からイメージをインポートする際の問題を修正しました <!-- Fix image import from remote lxd using aliases -->
 * 特別な一時的エントリの作成時の問題を修正しました <!-- Fix creation of extra volatile entries -->
 * 標準出力がファイルの時のテストを修正しました <!-- Fix testsuite for when stdout is a file -->
 * イメージを扱う前にストレージドライバを初期化するようにしました <!-- Initialize the storage driver before messing with images -->
 * lxd init は root でしか実行できなくなりました <!-- Restrict lxd init to root -->
 * ソケットが準備出来たあとにだけ、コンテナをロードしようとするようにしました <!-- Only attempt to load containers AFTER the socket is setup -->
 * イメージダウンロードのデフォルトプロトコルを修正しました <!-- Fix default protocol in image download -->
 * IP アドレスが設定されたときだけ、フォワーディングの設定をするようにしました <!-- Only setup forwarding when an IP is set -->
 * client: NewClientFromInfo にデフォルトの設定を追加しました <!-- add default config in NewClientFromInfo -->
 * dbUpdateFromV26 内の間違ったデバイスタイプを修正しました <!-- Fix incorrect device type in dbUpdateFromV26 -->

### 試用環境 <!-- Try it for yourself -->

<!--
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).
-->
この新しい LXD のリリースが、すでに私たちの [デモサービス](/ja/lxd/try-it/) で利用できます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。



## LXD 2.0.0.rc1 リリースのお知らせ <!-- LXD 2.0.0.rc1 release announcement --><span class="text-muted">2016 年 3 月 2 日 <!-- 2nd of March 2016 --></span>

<!--
This is the first release candidate for LXD 2.0. This means that we believe all features required  
for LXD 2.0 have now been merged and we only expect bugfixes and minor usability improvements  
to land between now and final release.
-->
このリリースは LXD 2.0 の最初のリリース候補です。これは、LXD 2.0 で必要なすべての機能がマージされたと私たちが考えていることを意味します。そして、この後ファイナルリリースまでの間、バグフィックスと小さな使い勝手の改良だけが行われることになるでしょう。

### このリリースの主な変更点 <!-- The main changes for this release are -->

 * cgroup 名前空間 (namespace) をサポートしました <!-- Support for the Cgroup namespace. -->
 * lxc.network.X.ipv{4,6}[.gateway] を raw.lxc に設定できるようになりました (raw.lxc での設定に関しては注意が必要です)<!-- It is now possible to set the lxc.network.X.ipv{4,6}[.gateway] raw.lxc keys (with usual caution with regard to raw.lxc) -->
 * コンテナが非特権の場合は、/proc と /sys は制限なくストレートにマウントされます (訳注: 非特権の場合はrwでマウントされます。特権の場合は書き込めると良くないファイルはroでそれ以外rwでマウントされます)<!-- /proc and /sys are now clean straight mounts when the container is unprivileged -->
 * IP アドレスのスコープが提供されるようになりました。これはデフォルトでローカルアドレスをフィルタするのに使われます <!-- The scope of IP addresses is now exported and used to filter local addresses out by default -->
 * 標準出力が tty でない場合、lxc exec はデフォルトで non-interactive モードになります <!-- lxc exec now defaults to non-interactive mode when stdout isn't a tty -->
 * クライアントが表示するテーブルはすべて同じような見た目になります <!-- All the tables rendered by the client now look alike -->
 * Simplestream がクライアントとサーバの両方でネイティブにサポートされるようになりました。lxd-images での必要性が除外されたためです <!-- Simplestreams is now natively supported by both the client and the server, eliminating the need for lxd-images -->
 * バックグラウンドでのイメージの同期がサーバでサポートされ、すべてのキャッシュされたイメージがデフォルトで同期されるようになりました <!-- Background image syncronization is now supported by the server and done by-default for all cached images -->
 * イメージが使われた最後の時間と、それがキャッシュにストアされているかどうかが API 経由で取得できるようになり、"lxc image info" で見られるようになりました <!-- The last time an image was used and whether it's stored in the cached is now exported over the API and visible in "lxc image info" -->
 * プロファイルが説明フィールドを持つようになりました <!-- Profiles now have a description field -->
 * コンテナを kill するのでなく、ディスクにチェックポイントするステートフルなコンテナの停止が可能になりました。次の起動時にレジュームします <!-- It is now possible to do a stateful container stop where the container is checkpointed to disk rather than killed, then resumed on next start. -->
 * "docker" プロファイルがデフォルトで提供されるようになりました。LXD コンテナ内部で Docker を実行できるようにするのに必要な設定がなされています <!-- A "docker" profile is now present by default with those settings required to be able to run Docker inside a LXD container. -->
 * イメージの import がアップロードの進捗表示を行うようになりました <!-- Image import now reports upload progress. -->

### バグ修正 <!-- Bugfixes -->

 * GenCert 関数のリファクタリングを行い、再利用できるようになりました <!-- Refactor the GenCert function so it can be reused. -->
 * tests: コメントアウトしていたコードを除去しました <!-- get rid of commented out code -->
 * lxc.NewClient を作りなおしました。ディスクキャッシュが不要になりました <!-- Rework lxd.NewClient so we don't need a disk cache. -->
 * shared: 制限をパースする関数を export しました <!-- export limit parsing function -->
 * アップグレードの手順を README に追加しました <!-- Add upgrade procedure to README -->
 * websocket: 並列の書き込み時の panic() を修正しました <!-- fix panic() on concurrent writes -->
 * state 関数が fail しないようにしました <!-- Don't allow the state functions to fail -->
 * specs: Etag セクションを削除しました (実装されていません) <!-- Remove section on Etag (not implemented) -->
 * specs: rest-api のレイアウトの修正を行いました <!-- Fix rest-api layout -->
 * list: PID カラムでクラッシュする問題を修正しました <!-- Fix crash on PID column -->
 * lxc init での名前の表示の問題を修正しました <!-- Fix name printing on lxc init -->
 * blkio 制限の色々な問題を修正しました <!-- Fix a variety of issues with blkio limits -->
 * apparmor プロファイル内でハードコードされていたアーキテクチャパスを修正しました <!-- Fix hardcoded architecture path in apparmor profile -->
 * tests: ネットワークのテスト時の失敗を修正しました <!-- Fix failure on networked test -->
 * tests: 証明書チェックの数を修正しました <!-- Fix the number of certs check -->
 * スナップショット時の設定の問題を修正しました <!-- Fix snapshot configuration -->
 * ステートフルかどうかのチェックがファイルシステムに頼らないようにしました <!-- Don't rely on the filesystem to check if stateful -->
 * チェックポイントの失敗を検出できるようにしました <!-- Catch checkpoint failures -->
 * DB テストを修正しました <!-- Fix DB test -->
 * イベントリスナー周りのロックを改良しました <!-- Better lock around event listeners -->
 * コンテナが正しくリブートしない問題を修正しました <!-- Fix container not rebooting properly -->
 * インストール手順中のビルドに必要なパッケージに "make" を追加しました <!-- Add package "make" to build dependencies installation command -->
 * 不完全な sub?id エントリで停止しないようにしました <!-- Don't stop at an unsatisfactory sub?id entry -->
 * client: "lxc stop remote:" コマンドのエラー出力の改良 <!-- better error on `lxc stop remote:` -->
 * クライアントで可能な場合はいつでも shared 構造体を使うようにしました <!-- Just use the shared struct whenever possible in the client -->
 * launch 時のダウンロードの進捗表示を修正しました <!-- Fix download progress on launch -->
 * 表での数字の揃えを修正しました <!-- Fix alignment of numbers in tables -->

### アップグレードの注意 <!-- Upgrade notes -->

<!--
 * This release deprecates the lxd-images tool, instead use the ubuntu:
   and ubuntu-daily: default remotes to achieve the same feature. If you
   absolutely must copy an image into the local store, it can be done with
   "lxc image copy ubuntu:14.04 local: --alias ubuntu".
   -->
   * このリリースで lxd-images が非推奨となりました。代わりに同じ機能を持ち、デフォルトで設定される ubuntu: か ubuntu-daily: リモートサーバを使用してください。確実にイメージをローカルストアにコピーする必要がある場合、"lxc image copy ubuntu:14.04 local: --alias ubuntu" で実現できます。

### 試用環境 <!-- Try it for yourself -->
<!--
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).
-->
この新しい LXD のリリースが、すでに私たちの [デモサービス](/ja/lxd/try-it/) で利用できます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。

## LXD 2.0.0.beta4 リリースのお知らせ <!-- LXD 2.0.0.beta4 release announcement --><span class="text-muted">2016 年 2 月 23 日 <!-- 23rd of February 2016 --></span>

### このリリースの主な変更点 <!-- The main changes for this release are -->

 * REST API の変更 <!-- REST API changes -->
    * /1.0 で返る API バージョンに関するデータが変わりました。api\_status, api\_version and api\_extensions が返ります <!-- The API versioning data at /1.0 has changed, now includes, api\_status, api\_version and api\_extensions -->
    * アーキテクチャのフィールドで、意味がわかりづらい整数の代わりに文字列が返るようになりました <!-- Architecture fields are now returned as strings instead of obscure integer -->
    * GET /1.0/containers/NAME/state を作りなおしました。より詳しいネットワーク、ディスク使用量、メモリ消費量の情報を含むようになりました <!-- GET /1.0/containers/NAME/state has been reworked, now includes more detailed network information, disk usage information as well as memory consumption data. -->
 * "lxc list" に速く表示できるフィールドだけを表示する \-\-fast モードを追加しました <!-- New \-\-fast mode for "lxc list" which only lists "cheap" fields -->
 * "lxc info" がコンテナのアーキテクチャを表示するようになりました <!-- The container architecture is now listed in "lxc info" -->
 * プロセス数制限 (pids cgroup) を追加しました <!-- Add process count limit (pids cgroup) -->

### バグ修正 <!-- Bugfixes -->
 * リモートのイメージエイリアスからのコンテナ作成時のバグを修正しました <!-- Fix container creation from remote image alias -->
 * エラーに対する Content-Type の値を修正しました <!-- Fix Content-Type value for errors -->
 * コンテナを停止する前にユーザに問い合わせるようになりました <!-- Don't stop containers before asking the user -->
 * cgo を使ってターミナル機能を再実装しました (ppc64el 上の動作が修正されました)<!-- Re-implement terminal functions through cgo (fixes ppc64el) -->
 * /dev/zero へのアクセスを許可しました <!-- Allow access to /dev/zero -->
 * tests: pprof を自己完結するようにしました <!-- Keep pprof self-contained -->
 * bridge-utils の代わりに iproute2 を使うようになりました <!-- Use iproute2 instead of bridge-utils -->
 * lxd-images: sync を修正しました <!-- Fix sync -->
 * cgroup 名前空間が有効なカーネルで cgroupfs をマウントできるようにしました <!-- allow cgroupfs mounting on cgns kernels -->
 * コンテナのプロセス数取得を pids cgroup を使って最適化しました <!-- Optimize container process count (use pid cgroup) -->
 * file push 時のパーミッションの問題を修正しました <!-- Fix file push permissions -->
 * list: 10 並列でコンテナの問い合わせを行うようにしました <!-- Query containers by batch of 10 -->
 * ホストのネットワークが変化した時だけリバランスするようにしました <!-- Only re-balance on host network changes -->
 * list: go routines を少し最適化するようにしました <!-- Attempt to optimize the go routines slightly -->

### アップグレードの注意 <!-- Upgrade notes -->

 * このリリースは古いバージョンの LXD に対する後方互換性がありません。
   クライアントとサーバのすべてを同じバージョンで実行するように注意してください。
   <!-- This release breaks backward compatibility with older LXD versions.
   Please make sure all your clients and servers run the same version. -->
 * REST API の変更に関する前述の記載をご覧ください <!-- See notes above for changes to the REST API. -->

### 試用環境 <!-- Try it for yourself -->
<!--
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).
-->
この新しい LXD のリリースが、すでに私たちの [デモサービス](/ja/lxd/try-it/) で利用できます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


## LXD 2.0.0.beta3 リリースのお知らせ <!-- LXD 2.0.0.beta3 release announcement --><span class="text-muted">2016 年 2 月 18 日<!-- 18th of February 2016 --></span>

### このリリースの主な変更点 <!-- The main changes for this release are -->

 * "lxc publish" で実行中のコンテナに対して実行を強制することができるようになりました (一時的にコンテナは停止します) <!-- "lxc publish" can now be forced to publish running containers (it will temporarily stop them) -->
 * "lxc image list" が description によってソートされて表示されるようになりました <!-- "lxc image list" now shows images sorted by description -->
 * REST API を完全に見直し、すべて仕様にマッチするように更新しました <!-- Complete review of the REST API and update to make it all match the specification. -->
    * GET /1.0 は "public" フィールドを表示します <!-- GET /1.0 now shows the "public" field -->
    * GET /1.0/certificates はエンドポイントの有効なリストを返します <!-- GET /1.0/certificates now returns a valid list of endpoints -->
    * GET /1.0/containers/NAME はパフォーマンスの問題のために、詳細なコンテナの実行ステータス ("status" キー) を返さなくなりました。詳細な実行ステータスを取得するためには /1.0/containers/NAME/state という別のクエリが必要です <!-- GET /1.0/containers/NAME for performance reasons no longer returns the detailed container runtime status ("status" key), a separate query to /1.0/containers/NAME/state is now needed -->
    * GET /1.0/containers/NAME/logs はエンドポイントの有効なリストを返します <!-- GET /1.0/containers/NAME/logs now returns a valid list of endpoints -->
    * POST /1.0/containers/NAME/snapshots は "stateful" フィールドを設定しなくても良くなりました (デフォルトで false に設定されます) (訳注: 翻訳公開当初「設定する必要がありました」と逆の訳になっていました)<!-- POST /1.0/containers/NAME/snapshots no longer requires the "stateful" field to be set (defaults to false) -->
    * POST /1.0/images を使って、すべてのサポートされている入力タイプで "properties" と "filename" を上書きできます <!-- POST /1.0/images now lets you override "properties" and "filename" for all supported input types -->
    * GET /1.0/images/aliases/NAME が正しいデータを返すようになりました ("name" と "target" フィールドが入れ替わりました) <!-- GET /1.0/images/aliases/NAME now returns valid data (the "name" and "target" fields were swapped) -->
    * POST /1.0/images/aliases/NAME を実装しました <!-- POST /1.0/images/aliases/NAME has been implemented -->
    * PUT /1.0/images/aliases/NAME を実装しました <!-- PUT /1.0/images/aliases/NAME has been implemented -->
    * GET /1.0/images/FINGERPRINT は空の "target" フィールドを alias に表示しません <!-- GET /1.0/images/FINGERPRINT no longer shows an empty "target" field for aliases -->
    * GET /1.0/networks/NAME を再設計しました <!-- GET /1.0/networks/NAME has been re-designed -->
    * GET /1.0/operations/UUID/wait?timeout=X が実際にタイムアウトするようになりました <!-- GET /1.0/operations/UUID/wait?timeout=X now actually times out -->
    * POST /1.0/profiles/NAME を実装しました <!-- POST /1.0/profiles/NAME has been implemented -->
    * タイムスタンプがすべて RFC3339 文字列となり、一貫して名付けられるようになりました  (created\_at, updated\_at, expires\_at, uploaded\_at) <!-- All timestamps are now RFC3339 strings and consistently named (created\_at, updated\_at, expires\_at, uploaded\_at) -->
    * 同期操作の応答では、空の "operation" フィールドを含まなくなりました <!-- Syncronous replies no longer contain an empty "operation" field -->
 * サーバ間の通信に追加のセキュリティが適用されるようになりました: <!-- Extra security now applies for cross-server communication: -->
    * 問い合わせと同時に証明書が渡された場合をのぞいて、以下の操作ではシステムの CA によって有効であるとされたリモートの証明書が必要になりました: <!-- Unless a certificate is passed along with the query, the following operations now require the remote certificate to be valid according to system CA: -->
         * マイグレーションによるコンテナ作成 (copy, move, ライブマイグレーション) <!-- Container creation from migration (copy, move & live migration) -->
         * リモートイメージによるコンテナの作成 <!-- Container creation from remote image -->
         * 他の LXD サーバからのイメージコピー <!-- Image copy from other LXD server -->
         * https でのイメージのインポート <!-- Image import from https -->
    * コマンドラインクライアントは自動的に必要な "certificate" フィールドを上記の要求に対して設定します <!-- The command client will automatically set the necessary "certificate" field for you for those requests -->
 * このバージョンから、LXD は Go 1.3 をサポートしません <!-- Starting with this release, Go 1.3 is no longer supported by LXD. -->

### バグ修正 <!-- Bugfixes -->

 * lxc file で不正なコンテナ名を修正しました <!-- Fix invalid container name in lxc file -->
 * tests: スラッシュを含むエイリアスのテストを追加しました <!-- Add test for aliases with slashes -->
 * ephemeral と architecture フラグの更新の問題を修正しました <!-- Fix updating ephemeral and architecture flags -->
 * publish のエラーメッセージを少しわかりやすくしました <!-- Clarify publish error message a bit -->
 * 最後が / (スラッシュ) で終わるエイリアスの操作の問題を修正しました <!-- Fix interacting with aliases with a trailing slash -->
 * specs: REST API を実際に合うように更新しました <!-- Update rest-api to match reality -->
 * イメージのパースが終わるまで、イメージを所定の場所に移動しなくなりました <!-- Don't move the image into place until it's been parsed -->
 * 確実に正しい Dialer と Proxy を使うようにしました <!-- Make sure we always use the right dialer and proxy -->
 * specs: キー名が間違っていたのを修正しました <!-- Fix wrong key name -->
 * Windows 上の lxc file の問題を修正しました <!-- Fix lxc file on Windows -->
 * LXD 0.27 以前からのアップグレードで DB のマイグレーションが失敗していたのを修正しました <!-- Fix broken DB migration when upgrading from LXD 0.27 or older -->
 * クライアントツールでグローバル変数の使用を止めました <!-- Avoid global variables in client tool -->
 * 接続の初期の失敗によるエラーの修正を行いました <!-- Fix errors due to early failure to connect -->
 * 転送時に常にファイルサイズを出力するようにしました <!-- Always export the file size on transfer -->
 * いくつか Typo を修正しました <!-- Fixed some typos -->
 * lxd-images: init 時に atexit を register するようにしました <!-- Register atexit at init time -->
 * specs: btrfs send/receive に関してストレージの仕様を更新しました <!-- Update storage spec for btrfs send/receive -->
 * 開発元の go-systemd を使うようになりました (これは Go 1.3 に対する後方互換性がありません) <!-- Use upstream go-systemd (this breaks backward compatibility with Go 1.3) -->

### アップグレードの注意 <!-- Upgrade notes -->

 * このリリースは、古い LXD のバージョンに対する後方互換性がありません。<!-- This release breaks backward compatibility with older LXD versions. -->
   クライアントとサーバを同じバージョンで実行するようにしてください <!-- Please make sure all your clients and servers run the same version. -->
 * REST API とセキュリティポリシーの変更に関する前述の記載をご覧ください <!-- See notes above for changes to the REST API and security policies. -->

### 試用環境 <!-- Try it for yourself -->
<!--
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).
-->
この新しい LXD のリリースが、すでに私たちの [デモサービス](/ja/lxd/try-it/) で利用できます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


## LXD 2.0.0.beta2 リリースのお知らせ <!-- LXD 2.0.0.beta2 release announcement --><span class="text-muted">2016 年 2 月 10 日<!-- 10th of February 2016 --></span>

### このリリースの主な変更点 <!-- The main changes for this release are -->
 * 再度 /dev/console を有効にしました <!-- /dev/console has been re-enabled -->
 * btrfs バックエンドが最適化されたコンテナの転送 (send/receive) をサポートしました <!-- The btrfs backend now supports optimized container transfer (send/receive) -->
 * ソースファイルの所有権、パーミッションが "lxc file push" のときにデフォルトで保存されるようになりました <!-- Source file ownership and permissions are conserved by default on "lxc file push" -->
 * "lxc list" と "lxc image list" がフィルタとして正規表現を受け付けるようになりました <!-- Both "lxc list" and "lxc image list" now accept regular expressions as filter -->
 * lxc info がコンテナの作成日 (わかっている場合のみ)、プロファイルのリスト、詳細なスナップショット情報を表示するようになりました。<!-- lxc info now shows the container creation date (if known), the list of profiles and detailed snapshot information -->
 * 再帰的なエイリアスがクライアントでサポートされました <!-- Recursive aliases are now supported in the client --> (e.g. "delete: delete -f")
 * "lxc delete" を実行中のコンテナに対して実行する場合は "-f/--force" オプションが必要になりました <!-- "lxc delete" now requires a "-f/\-\-force" flag when run against a running container -->
 * "lxc delete" に、消去時にユーザの確認を要求する -i オプションが追加されました <!-- "lxc delete" now has a -i option to always request user confirmation on delete -->

### バグ修正 <!-- Bugfixes -->
 * arm64 上の LXD のビルドの問題を修正しました <!-- Fix building LXD on arm64 -->
 * 新しいバージョン番号に対する "make dist" の問題を修正しました <!-- Fix "make dist" for new version numbers -->
 * specs: 再度、データベースの仕様を実際に合わせました <!-- Re-sync database spec with reality -->
 * 設定されていないキーの設定を外そうとしたときに失敗するようになりました <!-- Fail when unsetting a key that's not currently set -->
 * 後方互換性のためのコードを消去しました <!-- Remove backward compatibility code -->
 * 新しいコンテナルートにスナップショットをコピーする際の問題を修正しました <!-- Fix copying snapshot as new container root -->
 * マイグレーションの失敗時にスナップショットの停止が失敗する問題を修正しました <!-- Fix failure to stop snapshots on migration failure -->
 * rsync を使ったスナップショットのマイグレーションの問題を修正しました <!-- Fix migration of snapshots using rsync -->
 * マイグレーションのフォールバックとして rsync を使うようになりました <!-- Implement migration fallback to rsync -->
 * ShiftIfNecessary を起動時のシフトに変更しました (訳注：マイグレーション時のスナップショットの[u|g]idのマッピングの変更をコンテナ起動時に行うようにした、だと思う)<!-- Change ShiftIfNecessary to shift on startup -->
 * info 中の i18n メッセージカタログの (再) 作成 <!-- make i18n for profiles output in info -->
 * ヘルプ出力をより効率的にするために冗長な言い回しを減らしました <!-- reduce verbiage to fit help text more efficiently -->
 * blkio 制限をより堅固にしました <!-- Make blkio limits more robust -->
 * デフォルトのプロファイルに eth0 の名前 ("name") として "eth0" を追加しました <!-- add eth0 "name" to the default profile -->
 * プロファイルを適用したメッセージは成功時のみ表示するようにしました <!-- only print profile applied message on success -->
 * init: zfs モジュールの modprobe を試みるようにしました <!-- Attempt to modprobe the zfs module -->
 * init: フォーマットされていないディスクでの動作のために zpool create -f を使うようにしました <!-- Use zpool create -f to work on unformatted disks -->
 * init: 利用可能なバックエンドの検出を改良しました <!-- Improve detection of available backends -->
 * zfs: バックエンドが異なるストレージ間のコピー時の問題を修正しました <!-- Fix cross-backend copies -->
 * stresstest.sh の limits.memory の単位を M から MB に修正しました <!-- fix stresstest.sh to use byte suffix for limits.memory -->
 * command-line-user-experience の limits.memory の例の単位の末尾に byte を追加しました (訳注：M→MB、G→GB) <!--  fix command-line-user-experience examples of limits.memory to include byte suffix -->

### 試用環境 <!-- Try it for yourself -->

<!--
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).
-->
この新しい LXD のリリースは、すでに私たちの [デモサービス](/ja/lxd/try-it/) で利用できます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


## LXD 2.0.0.beta1 リリースのお知らせ <!-- LXD 2.0.0.beta1 release announcement --><span class="text-muted">2016 年 1 月 26 日<!-- 26th of January 2016 --></span>

### このリリースの主な変更点 <!-- The main changes for this release are -->

 * "lxc config edit" がローカルサーバの設定を編集できるようになりました <!-- "lxc config edit" now works to edit the local server configuration -->
 * Block I/O 制限がサポートされました <!-- Add support for block I/O limits -->
 * ネットワーク I/O 制限がサポートされました <!-- Add support for network I/O limits -->

### バグ修正 <!-- Bugfixes -->

 * 存在しないエイリアスを削除しようとする際にエラーを出すようにしました <!-- error out on deleting nonexistent alias -->
 * LXC 設定の読みこみを修正しました <!-- Fix LXC config rendering -->
 * テキストエディタの検出を改良しました <!-- Improve detection of text editor -->
 * "lxc file edit" を修正しました <!--  Fix "lxc file edit" -->
 * ネットワーク制限を追加しました <!-- Add network limits -->
 * デーモンの IPv6 の扱いを修正しました <!-- Fix IPv6 handling in daemon code -->
 * file pull/push の仕様と文書を更新しました <!-- Update specs and documentation on file pull/push -->
 * 壊れた LXC をより良く扱うようにしました (訳注：設定の読みこみに失敗するような壊れたコンテナに対して "BROKEN" というステータスを返して対応できるようにした)<!-- Better deal with broken LXC -->
 * zfs に対するマウントポイントを設定するのを防ぐために README を更新しました <!-- Update README to avoid setting a mountpoint for zfs -->
 * イメージのコピーに成功した際にメッセージを表示するようにしました <!-- Print message on sucessfull copy of image -->
 * TYPO を修正しました (sucessfully → successfully) <!-- Fix small typo s/sucessfully/successfully -->
 * forkstart のデバッグを改良しました <!-- Improve forkstart debugging -->
 * (訳注：move で) マイグレーションでない場合は常に Rename() を呼ぶようにしました <!-- Always call Rename() when not migrating -->
 * イメージのアップロードでテンポラリファイルを使うようにしました <!-- Use a tempfile for image uploads -->
 * restore で start コマンドが失敗した場合にエラーを報告するようにしました <!-- report errors if the restore call's start command fails -->
 * (訳注：lxc edit file で) ファイル転送時にターゲットのファイルを切り詰めるようにしました <!-- Truncate the target on file transfer -->
 * 設定の raw キーは危険であることを注意書きしました <!-- Mention that raw keys are risky -->
 * 特権コンテナの /dev/tty に書きこみを許可しました <!-- Allow writes to /dev/tty in privileged containers -->
 * ステートフルなスナップショットとリストアを実装しました <!-- implement stateful snapshot restore -->
 * スナップショットの削除が失敗しても delete が失敗しないようにしました <!-- don't fail to delete when deleting snapshots fails -->

### 試用環境 <!-- Try it for yourself -->
<!--
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).
-->
この新しい LXD のリリースが、すでに私たちの [デモサービス](/ja/lxd/try-it/) で利用できます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。



## LXD 0.27 リリースのお知らせ <!-- LXD 0.27 release announcement --><span class="text-muted">2016 年 1 月 19 日 <!-- 19th of January 2016 --></span>

### このリリースの主な変更点 <!-- The main changes for this release are -->

 * コンテナの disk quota に対応しました (zfs と btrfs のみです)<!-- Support for container disk quota (zfs and btrfs only) -->
 * イメージのコピーとコンテナの起動の間の進捗表示を行うようになりました <!-- Download progress during image copy and container launch -->
 * LXC コンテナを LXD コンテナに移行するスクリプトの初期バージョンを開発しました (非特権コンテナを除くほとんどすべての設定をサポートします) <!-- Initial work on a LXC to LXD script (supports almost every configuration except for unprivileged containers) -->
 * 新たなコンテナプロパティ linux.kernel\_modules を追加しました (コンテナの起動前にロードするモジュールのリストです) <!-- New linux.kernel\_modules container property (list of modules to load before starting the container) -->
 * 新たなサーバプロパティ core.https\_allowed\_origin を追加しました (Access-Control-Allow-Origin ヘッダを制御します)<!-- New core.https\_allowed\_origin server property (controls the Access-Control-Allow-Origin header) -->
 * プロファイルの変更がすべての対象のコンテナに動的に行われるようになりました <!-- Profile changes are now live-applied to all affected containers -->
 * "lxc config edit" コマンドがサーバに対しても動作するようになりました <!-- "lxc config edit" now works against servers too -->
 * security.nesting の変更が動的に行われるようになりました <!-- Changes to security.nesting are now live-applied -->
 * lvm バックエンドでの xfs がサポートされました <!-- Support for xfs with the lvm backend -->
 * "lxc image list" コマンドでフィルタリングができるようになりました (名前、ハッシュ、プロパティで) <!-- "lxc image list" now supports filtering (by name, hash and properties) -->
 * bash completion プロファイルの改良を行いました <!-- Improved bash completion profile -->
 * "lxc remote list" コマンドでデフォルトのリモートサーバが表示されるようになりました <!-- The default remote is now visible in "lxc remote list" -->
 * "lxc info" コマンドが、コンテナが一時的か永続的かを表示するようになりました <!-- "lxc info" now indicates whether a container is ephemeral or persistent -->
 * ヘルプメッセージを色々改良しました <!-- Various improvement to help messages -->

### バグ修正 <!-- Bugfixes -->

 * デフォルトの http タイムアウトを 10 秒に設定しました <!-- Set a default http timeout of 10s -->
 * metadata.yaml がない場合でも publish の途中でクラッシュしなくなりました <!-- Don't crash during publish when metadata.yaml is missing -->
 * マイグレーション中のエラー報告を改良しました <!-- Improve error reporting during migration -->
 * コピーの間のエラー報告を改良しました <!-- Improve error reporting during copy -->
 * コンテナがディスクから削除された時点でのみ、コンテナをデータベースから削除するようにしました <!-- Make sure containers are only removed from the database once removed from disk -->
 * イメージがディスクから削除された時点でのみ、イメージをデータベースから削除するようにしました <!-- Make sure images are only removed from the database once removed from disk -->
 * LVM > 2.02.99 の場合の LVM バックエンドの修正を行いました <!-- Fix LVM backend on LVM > 2.02.99 -->
 * 高負荷時の DB パフォーマンスの改良を行いました <!-- Improve DB performance when under heavy load -->
 * 非特権の CRIU イメージで正しく uidshift するようになりました <!-- Correctly uidshift unprivileged CRIU images -->
 * forkmigrate 実行時の競合を修正しました <!-- Fix a race in forkmigrate -->
 * イベントインターフェースの競合状態に関する修正を行いました <!-- Fix race condition in event interface -->
 * lxd-images コマンドがエラーになった場合に表示が乱れる問題を修正しました <!-- Fix screen corruption when lxd-images hits an error -->
 * 作成時に与えられたデバイスを無視しないようにしました <!-- Don't ignore provided devices at create time -->
 * URLの最後に "/" が付いている場合も付いていない場合もサポートするように web サーバを修正しました <!-- Fix web server to support all URLs with and without trailing slash -->
 * zfs pool の設定を削除することができるようになりました <!-- Make it possible to unset the zfs pool -->
 * lxd-setup-lvm-storage: デフォルトサイズとして 10G を追加しました <!-- Add default size of 10G -->
 * api: {Save|Load}Config は引数としてパスを受け取る必要があるようになりました (訳注: 設定ファイルのパスがハードコードされていたのを引数で与えられるようになりました) <!-- {Save|Load}Config should take a path as an argument -->
 * 自動的に veth インターフェースをホストのブリッジに追加するように修正しました <!-- Fix automatically adding veth interface to the host bridge -->
 * スナップショットが過去に存在していた場合の zfs pool の設定を削除する際の問題を修正しました <!-- Fix unsetting zfs pool when snapshots used to exist -->

### 試用環境 <!-- Try it for yourself -->
<!--
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).
-->
この新しい LXD のリリースは、すでに私たちの [デモサービス](/ja/lxd/try-it/) で利用できます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


## LXD 0.26 リリースのお知らせ <!-- LXD 0.26 release announcement --><span class="text-muted">2016 年 1 月 4 日 <!-- 4th of January 2016 --></span>

### このリリースの主な変更点 <!-- The main changes for this release are -->

 * veth デバイスのホスト側の名前を指定するためのネットワークインターフェースのプロパティである "host\_name" が新たに追加されました <!-- New "host\_name" network interface property that specifies the name of the host side veth device -->
 * 停止しているコンテナのファイルに対する pull/push/edit が可能になりました <!-- It is now possible to pull/push/edit files of a stopped container -->
 * "lxc list" コマンドでどのカラムを表示するかを指定できるようになりました (さらに、新たに PID が表示できるようになりました) <!-- It's now possible to specify what "lxc list" columns to show (including a new PID column) -->

### バグ修正 <!-- Bugfixes -->

 * すべての CPU が使用できると仮定するのでなく、適切にアクティブな CPU マップを継承するようになりました <!-- Properly inherit the active CPU map rather than assuming all CPUs are usable -->
 * zfs: いくつかの境界条件の問題を修正しました <!-- Fix a couple of race conditions -->
 * lvm: イメージからのコンテナの作成に関する修正を行いました <!-- Fix creation of container from an image -->
 * 毎回 Finger() を呼ぶことをやめ、ネットワークのラウンドトリップタイムを半減させました <!-- Cut down network round trips in half by not calling Finger() every time -->
 * コンテナの shmounts とデバイスディレクトリの不正なパーミッションを修正しました <!-- Fix invalid permissions on container shmounts and devices directories -->
 * コンテナの停止時に常にデバイスとマウントがクリーンアップされていなかった問題を修正しました <!-- Fix container teardown not always cleaning up devices & mounts -->
 * ホストがトリガーとなるコンテナの停止・再起動のパフォーマンスを改善しました (5 秒早くなりました) <!-- Improve performance of host-triggered container stop/restart (5s faster) -->
 * LXD のコールフックのタイムアウトを 30 秒に設定しました (失敗時に無限にハングアップしたままになる代わりに)<!-- Make lxd callhook timeout after 30s (instead of hanging indefinitely on failure) -->
 * テストのクリーンアップとドキュメントの追加を行いました <!-- Cleanup and document the testsuite -->
 * add/rename/remove 時のリモートの証明書の扱いに関する修正を行いました <!-- Fix remote certificate handling on add/rename/remove -->

### 試用環境 <!-- Try it for yourself -->
<!--
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).
-->
この新しい LXD のリリースは、すでに私たちの [デモサービス](/ja/lxd/try-it/) で利用できます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


## LXD 0.25 リリースのお知らせ <!-- LXD 0.25 release announcement --><span class="text-muted">2015 年 12 月 21 日 <!-- 21st of December 2015 --></span>

### このリリースの主な変更点 <!-- The main changes for this release are -->

 * "lxc exec" コマンドに新たに --mode オプションが追加されました。これにより対話的でないモードを強制できます <!-- New \-\-mode argument to "lxc exec", makes it possible to force non-interactive mode. -->
 * s390x アーキテクチャ (IBM z/series 64bit) のフルサポート <!-- Full support of the s390x architecture (IBM z/series 64bit) -->
 * @ARGS@ キーワードを使用することで、コマンドエイリアス中にコマンド引数を指定できるようになりました <!-- Command aliases can now move the command arguments by using the @ARGS@ keyword -->
 * CPU 制限のフルサポート (デフォルト値は全ての CPU、最大優先度、時間制限なしです): <!-- Full support for CPU limits (defaults to all CPUs, maximum priority and no time limit): -->
    * limits.cpu: CPU の数 (e.g. 2) またはコアの範囲 (e.g. 0,2-3) <!-- Number of CPUs (e.g. 2) or range of core (e.g. 0,2-3) -->
    * limits.cpu.allowance: 負荷がかかっている場合の CPU 時間の割合 (e.g. 50%) または絶対時間指定 (e.g. 10ms/50ms) <!-- Percentage of CPU time under load (e.g. 50%) or hard time limit (10ms/50ms) -->
    * limits.cpu.priority: ホストに負荷がかかっている場合のコンテナの優先度。1 (最低) から 10 (最高) の間の値で指定します (e.g. 5)<!-- Container priority when host is under load as a value between 1 (lowest) and 10 (highest) (e.g. 5) -->
 * メモリ制限のフルサポート (デフォルト値はメモリ制限なし、hard 使用、スワップ有効、priority 最大値): <!-- Full support for memory limits (defaults to all memory, hard enforcement, swap enabled and maximum priority): -->
    * limits.memory: バイト指定での制限 (kB, MB, GB, TB, PB, EB を使用可能) (e.g. 256MB) またはホスト搭載メモリに対する割合 (e.g. 20%) <!-- Limit in bytes (kB, MB, GB, TB, PB, EB suffixes supported) (e.g. 256MB) or in percentage of the host memory (e.g. 20%) -->
    * limits.memory.enforce: hard (コンテナは割当以上のメモリを使えない)もしくは soft (高負荷時のみ制限が適用) <!-- hard (container cannot use more memory than allocated) or soft (limit only applies under load) -->
    * limits.memory.swap: true または false。コンテナがスワップを使えるかどうかを指定します <!-- true or false, indicates whether the container may use the swap -->
    * limits.memory.swap.priority: スワップ使用の優先度。1 から 10 の値で指定します。1 を指定するとほとんどのデータがディスクにスワップアウトします <!-- Priority for swap usage, from 1 to 10, with 1 causing the most data to be swapped out to disk -->
 * CPU とメモリに対する制限は指定した時点で適用されます <!-- All CPU and memory limits are now applied live. -->
 * 最適化された (send/receive) ZFS コンテナとスナップショットのマイグレーションのサポートを追加しました <!-- Support for optimized (send/receive) ZFS container & snapshot migration -->

### バグ修正 <!-- Bugfixes -->

 * 新しいテストで特定されたストレージの様々な境界条件に関する修正を行いました <!-- Fix a variety of storage race conditions as identified by new tests -->
 * lxd-images: エラーメッセージをより明確に出力するようになりました <!-- Give clearer error messages -->
 * イメージの expire ロジックの修正を行いました <!-- Fix image expiry logic -->
 * ロギングのコードのリファクタリングを行いました <!-- Refactor logging code -->
 * マイグレーションのコードを仕様に準拠させるように修正しました <!-- Fix migration code to be spec-compliant -->
 * 使用可能な CGroup コントローラの検出を行うようになりました <!-- Detect available CGroup controllers -->
 * zfs: 最新ではない古いスナップショットからのリストアを防ぐようになりました <!-- Prevent restoring from old (not latest) snapshosts -->
 * デバイスをコンテナに追加した際により明確にエラーを報告するようになりました <!-- Report clearer errors when adding devices to containers -->
 * zfs: コンテナのリネームに関する修正を行いました <!-- Fix container rename -->
 * lvm: コンテナのリネームに関する修正を行いました <!-- Fix container rename -->
 * lvm: 古いバージョンの LVM 上での不具合を回避するようにしました <!-- Workaround failure on older LVM versions -->
 * lvm: fdleak のメッセージを隠すようにしました <!-- Hide fdleak messages -->
 * 整合性を保つためにディレクトリをいくつか移動するようになりました <!-- Move some directories around for consistency -->
 * exec: 排他的な書き込みのために fds map をロックするようにしました <!-- lock fds map for exclusive writes -->
 * lvm: スナップショットのリネームの処理を修正しました <!-- Fix snapshot rename handling -->
 * lvm: コンテナのスナップショットのマイグレーションの修正を行いました <!-- Fix container snapshot migration -->
 * コンテナ DB の (余分なレコードの) クリーンアップに関する修正を行いました <!-- Fix container DB cleanup (leftover records) -->
 * イメージの (余分なレコードの) クリーンアップに関する修正を行いました <!-- Fix image cleanup (leftover records) -->
 * コンテナの arch == 0 の際にホストのアーキテクチャを使うようにしました <!-- Use the host architecture when container arch == 0 -->
 * 設定とデバイスのバリデーションを (DBへのInsert時でなく) コンテナの作成、設定の更新時に行うようにしました <!-- Do config & device validation upstream -->
 * DB の余分なレコードのクリーンアップを行うようにしました <!-- Cleanup DB leftovers -->
 * イメージが存在する場合により明確なエラーメッセージを返すようにしました <!-- Return a clear error message when an image already exists -->
 * 設定されている場合だけ remote\_cache\_expiry を返すようにしました <!-- Only return remote\_cache\_expiry if set -->
 * volatile を適用しない場合に flush するようにしました <!-- Flush volatile when they don't apply -->

### テスト <!-- Testsuite -->

 * テストが全てのストレージバックエンドで実行できるようになりました <!-- The testsuite can now be run with all storage backends -->
 * 境界条件がいくつか除去されました <!-- Several race conditions have been eliminated -->
 * テストでファイルシステム構造がクリーンかどうかをチェックするようになりました <!-- The testsuite now checks that the filesystem structure is clean -->
 * テストでデータベースのテーブルがクリーンかどうかチェックするようになりました <!-- The testsuite now checks that the database tables are clean -->
 * 失敗が無視されていたテストをいくつか修正しました <!-- Fix a couple of tests whose failure was being ignored -->
 * --force-local を使うことでテストが劇的にスピードアップするようになりました <!-- Dramatically speed up testsuite by using \-\-force-local -->
 * shutdown と waitready コマンドを使うようになりました <!-- Use shutdown and waitready commands -->

### アップグレードの注意 <!-- Upgrade notes -->

 * limits.memory で使用する単位は kB, MB, GB, TB, EB, PB になりました。古い単位は初回の LXD 起動時に一度だけ更新されます。
 <!-- limits.memory suffixes are now kB, MB, GB, TB, EB and PB. Old
   suffixes are upgraded as a one-time operation on the next LXD startup. -->
 * migrate REST API の呼び出しは secret に対する wss URL でなく、ソースオペレーションに対する https URL を使うようになりました。これは仕様に合わせるための変更です。
 <!--  The migrate REST API call now takes a https URL to the source
   operation rather than a wss URL to the secrets. This was changed to
   match the specification. -->

### 試用環境 <!-- Try it for yourself -->
<!--
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).
-->
この新しい LXD のリリースは、すでに私たちの [デモサービス](/ja/lxd/try-it/) で利用できます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


## LXD 0.24 リリースのお知らせ <!-- LXD 0.24 release announcement --><span class="text-muted">2015 年 12 月 8 日 <!-- 8th of December 2015 --></span>

### このリリースの主な変更点 <!-- The main changes for this release are -->
 * macvlan ネットワークインターフェースをサポートしました <!-- Support for macvlan network interfaces -->
 * 物理ネットワークインターフェースをサポートしました <!-- Support for physical network interfaces -->
 * s390x 上でのビルドをサポートしました <!-- Support for building on s390x -->
 * copy/move 時に、スナップショットも元のコンテナと同時に転送されるようになりました <!-- Snapshots are now transfered along with their parent container on copy/move -->
 * limits.cpu のための CPU スケジューラを実装しました <!-- A CPU scheduler for limits.cpu has been implemented -->
 * "lxc config unset/set" がリモートサーバに対して動作するようになりました <!-- now works against a remote server -->

### バグ修正 <!-- Bugfixes -->
 * "lxc list" の IP アドレスの表示方法を改良しました <!-- Improved IP rendering in "lxc list" -->
 * ネストしたコンテナ内の apparmor の扱いに関する修正を行いました <!-- Fix apparmor handling in nested containers -->
 * デバイスのホットプラグの間に起こる色々なハングアップと不具合の修正を行いました <!-- Fix various hangs and failures during device hotplug -->
 * スナップショットからのイメージの publish で、毎回全く同じ出力を生成するようになりました <!-- Image publishing from a snapshot now produces the exact same output every time -->
 * スナップショットの publish に関する修正を行いました <!-- Fix publishing of snapshots -->
 * 代替の gettext 実装への切り替えを行い、翻訳レイヤーの修正を行いました。<!-- Fix our translation layer by switching to an alternative gettext implementation -->
 * UUID の実装をこれまでとは違う別の実装に切り替えました <!-- Switch UUID implementation to an alternative implementation -->
 * migratable プロファイルを削除しました (現時点の CRIU は標準的なコンテナをマイグレーションできます) <!-- Drop migratable profile (current CRIU can migrate a standard container) -->
 * ディスクをコンテナ内にマウントする際、必要なディレクトリがない場合は作成するようにしました <!-- Create missing directories when mounting a disk into a container -->
 * イメージの作成を直列化しました (全体的な負荷の減少のため) <!-- Serialize image creation (reduces overall load) -->
 * 色々な ZFS 関係のバグを修正しました (カーネルモジュールがない場合にロードする、削除のリトライ、マウントの扱いの改良) <!-- Various ZFS bugfixes (load kernel module when missing, re-try destroys and better handle mounts) -->
 * よりシンプルに、かつ信頼性が向上するように、完全に LXC コンテナドライバを作りなおしました <!-- Completely rework the LXC container driver to be simpler and more reliable -->
 * volatile なキーがプロファイルに設定されないようにしました <!-- Prevent setting volatile keys on profiles -->
 * 古くなった volatile キーを自動的にクリーンアップするようにしました <!-- Automatically cleanup stale volatile keys -->
 * 名前のない (ランダムに名付けられた) コンテナの起動に関する修正を行いました <!-- Fix launching un-named (randomly named) containers -->

### アップグレード時の注意 <!-- Upgrade notes -->

 * 古い lxc クライアントを新しいサーバに対して実行するとハングアップすることがあります。必ずクライアントも更新してください <!-- Older lxc clients will hang on exec against a newer server, make sure to update the client. -->
 * limits.cpus は limits.cpu になりました。最初の LXD の起動時に変換されます <!-- limits.cpus is now called limits.cpu, a one-time migration is done at LXD startup. -->

### 試用環境 <!-- Try it for yourself -->
<!--
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).
-->
この新しい LXD のリリースは、すでに私たちの [デモサービス](/ja/lxd/try-it/) で利用できます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


## LXD 0.23 リリースのお知らせ <!-- LXD 0.23 release announcement --><span class="text-muted">2015 年 11 月 24 日<!-- 24th of November 2015 --></span>

### このリリースの主な変更点 <!-- The main changes for this release are -->

 * LXD を新たにインストールするときに、ストレージ、ネットワーク、パスワードのセットアップの助けとなるように、新たに "lxd init" コマンドが使えるようになりました <!-- A new "lxd init" command is available to help setup storage, network and password on new LXD installations -->
 * ログメッセージがイベント API 経由で送出されるようになりました <!-- Log messages are now sent over the events API -->
 * 新たにコンテナ API と "lxc info" からプロセス数を取得できるようになりました <!-- New process count metric available in the containers API and in "lxc info" -->
 * Windows でカラーでコンソールを表示できるようになりました <!-- Console color support on Windows -->
 * (API の) operations の処理を書き換えました。変更ごとのイベントと、ダウンロードの状態が含まれるようになりました <!-- Rewritten operations handling, now includes events for each changes and includes download status -->
 * "lxc image import" コマンドで、HTTP ヘッダ経由で LXD イメージの広告を行う https ウェブサーバへの URL を指定できるようになりました <!-- "lxc image import" can now take the URL to an https webserver advertising a LXD image through HTTP headers -->
 * LXD が提供する最小限の HTTP プロキシが更に軽量となるように書きなおされました <!-- The minimal HTTP proxy shipped by LXD has been rewritten to be even lighter -->

### バグ修正 <!-- Bugfixes -->

 * "lxc config get &lt;server-config-key&gt;" が期待通りに動くようになりました <!-- now works as expected -->
 * lxd-images: イメージのインポート時のメモリ消費量がさらに少なくなりました <!-- Much lower memory usage when importing an image -->
 * events API 経由のログエントリがより読みやすくなりました <!-- More readable log entries over the events API -->
 * "lxc monitor" コマンドのイベントフィルタリングが正しく動作するようになりました <!-- Event filtering in "lxc monitor" now works properly -->
 * コンテナのアーキテクチャが正しく追跡されるようになりました <!-- Container architectures are now properly tracked -->
 * publish されたコンテナが常にイメージ中にメタデータを持つことを LXD が保証するようになりました <!-- LXD now ensures that published containers will always have metadata in their image -->
 * コンテナのコピー時に、デバイスと設定が正しくコピーされるようになりました <!-- Container copy now copies devices and config properly -->
 * イメージのインポートが失敗した際に適切なエラーメッセージが表示されるようになりました <!-- Image import failure now result in proper error messages -->
 * "lxc launch" の失敗時、"lxc info --show-log" の使用を提案するようになりました <!-- "lxc info \-\-show-log" is now also suggested on "lxc launch" failures -->

### アップグレード時の注意<!-- Upgrade notes -->

<!--
Users of the operations API may have to update their code to suit the new operation code.  
The new implementation is now specification-compliant, meaning that all operation queries  
always return a full operation object wrapped in an Async reply and with operation-specific  
properties inside the metadata.
-->
operations API のユーザは、新しい操作コードに適合するように、コードをアップデートする必要があるでしょう。
新しい実装は仕様に準拠するようになりました。これは、すべての操作クエリは、常に非同期応答にラップされた、操作特有のプロパティをメタデータ内に持つ、完全な操作オブジェクトを返すということです。

<!--
The "lxc" client was updated to be backward compatible when possible.
-->
"lxc" クライアントは可能な限り後方互換性を保つように更新されました。

### 試用環境 <!-- Try it for yourself -->

<!--
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).
-->
この新しい LXD のリリースは、すでに私たちの [デモサービス](/ja/lxd/try-it/) で利用できます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


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
This new LXD release is already available for you to try on our [demo service](/lxd/try-it/).
-->
この新しい LXD のリリースは、すでに私たちの [デモサービス](/ja/lxd/try-it/) で利用できます。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。

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
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


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
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


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
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


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
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。

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
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


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
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。

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
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


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
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


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
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


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
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


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
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。

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
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


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
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


## LXD 0.8.1 リリースのお知らせ <!-- LXD 0.8.1 release announcement --><span class="text-muted">2015 年 4 月 29 日 <!-- 29th of April 2015 --></span>

<!--
Bugfix only release on top of 0.8 fixing some regressions:
-->
0.8 で生じたバグの修正のみを目的とするリリースです。

 * 全てのアーキテクチャでのビルドの問題を修正しました <!-- Fix building on all architectures -->
 * go-protobuf リポジトリの URL を変更しました <!-- Change the go-protobuf repository URL -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


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
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


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
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


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
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


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
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


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
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


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
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


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
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。

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
 * LXD [REST API](/lxd/rest-api/) の試験的な使用<!-- Experiment with the LXD REST API -->

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
The release tarballs can be found on our [download page](/lxd/downloads/).
-->

このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。
