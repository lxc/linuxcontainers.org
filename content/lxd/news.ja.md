![Download icon](/static/img/containers.png)
# News
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
