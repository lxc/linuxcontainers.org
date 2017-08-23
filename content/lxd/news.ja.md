![Logo](/static/img/containers.png)

# News
## LXD 2.17 リリースのお知らせ <!-- LXD 2.17 release announcement -><span class="text-muted">2017 年 8 月 22 日<!-- 22nd of August 2017 --></span>
新機能<!-- Features -->:

 * Ceph のユーザを指定できるようになりました ("ceph.user.name" プロパティで指定) <!-- Add support for specifying the ceph user (using the "ceph.user.name" property) -->
 * 制限を簡単に指定できる「インスタンスタイプ」を実装しました (例: "lxc launch ubuntu:16.04 -t t2.micro")<!-- Implement "instance types" as an easy way to specify limits (e.g. "lxc launch ubuntu:16.04 -t t2.micro") -->
 * LXD API の低レベルでの問い合わせができる "lxc query" コマンドを追加しました(curl を使うのと同様ですが LXD 独自の処理は実装済みなので curl よりは容易に利用できます) <!-- Add a new "lxc query" command as a low level query tool for the LXD API (similar to curl but with LXD knowledge) -->
 * コンテナが uid/gid マッピングを変更したとき、ファイルシステムの ACL を書き換えるようになりました <!-- Filesystem ACLs are now rewritten when the container changes uid/gid map -->
 * LXD は、デイリーのイメージを更新する際にバイナリの差分が使えるようになりました <!-- LXD now supports using binary deltas when refreshing daily images -->
 * "lxc image info" コマンドは LXD が自動的にキャッシュしたイメージかどうかを表示するようになりました <!-- "lxc image info" now shows whether an image was automatically cached by LXD -->

バグ修正 <!-- Bugfixes -->:

 * client: イメージをダウンロードする関数内でのコードの重複をなくしました <!-- Cleanup code duplication in image download function -->
 * client: 廃止されたクライアントのコードを削除しました <!-- Remove deprecated client code -->
 * client: ConnectPublicLXD のロジックを簡素化しました <!-- Simplify ConnectPublicLXD logic -->
 * doc: ストレージのドキュメントに volatile.pool.pristine を追加しました <!-- Add storage documentation for volatile.pool.pristine -->
 * doc: volatile.initial\_source キーを追加しました <!-- Add the volatile.initial\_source key -->
 * doc: rest-api.md 内の不適切な JSON を修正しました <!-- Fix bad JSON in rest-api.md -->(Issue #3654)
 * doc: 文書中で適切にエスケープするようにしました <!-- Properly escape path params -->
 * extra/lxc-to-lxd: デフォルトでドロップされるケーパビリティを無視するようにしました <!-- Ignore capabilities that are dropped by default -->
 * extra/lxc-to-lxd: sysfs と proc のマウントを無視するようになりました <!-- Ignore sysfs/proc mounts -->
 * extra/lxc-to-lxd: lxc.seccomp を適切に扱うようになりました <!-- Properly handle lxc.seccomp -->
 * i18n: weblate から翻訳の更新を行いました <!-- Update translations from weblate -->
 * lxc: 進捗レポートの競合を修正しました <!-- Fix race in progress reporter -->
 * lxc: リモートのプロトコル変換を再導入しました <!-- Re-introduce remote protocol migration -->
 * lxc/config: 追加の証明書関数を公開としました <!-- Expose extra certificate functions -->(Issue #3606)
 * lxc/image: イメージエイリアスのコピーの問題を修正しました <!-- Fix copy of image aliases -->
 * lxc/image: リフレッシュが完全に終わるのを待つようにしました <!-- Wait for the refresh to complete -->
 * lxc/remote: パブリックなリモートサーバでは証明書が必要でなくなりました <!-- Don't require a crt for public remotes -->(Issue #3627)
 * lxd: lxd/util.go を自身 lxd/util のサブパッケージに移動しました <!-- Move lxd/util.go into its own lxd/util/ sub-package -->
 * lxd/containers: LXD snap にディスクデバイスを与えられるようになりました <!-- Allow passing disk devices with the LXD snap -->(Issue #3660)
 * lxd/containers: さらに LXC 2.1 でのキー名の変更に対応しました: lxc.idmap <!-- Another LXC 2.1 key rename, lxc.idmap -->
 * lxd/containers: Typo の修正 <!-- Fix a typo-->: now -> know
 * lxd/containers: GPU ベンダーが混在する際の GPU のアタッチを修正しました <!-- Fix gpu attach when mixing GPU vendors -->(Issue #3642)
 * lxd/containers: デバイスのソート順を修正しました <!-- Fix sorting order of devices -->(Issue #2895)
 * lxd/containers: ホストで isolcpu が設定されている場合の問題を修正しました(isolcpuが設定されている場合の動作をサポート) <!-- Fix support for isolcpu in CPU scheduler -->(Issue #3624)
 * lxd/containers: 再度ステートフルスナップショットのリストアを動作するようにしました <!-- Make stateful snapshot restores work again -->
 * lxd/daemon: 初期の lxd/sys サブパッケージと OperationSystem 構造体を追加しました <!-- Add initial lxd/sys sub-package and OperatingSystem structure -->
 * lxd/daemon: d.os.Init の実行をすべてのパスが作られた後に行われるようにしました <!-- d.os.Init must be run after all paths are created -->
 * lxd/daemon: Daemon.ExpireLogs を独立した関数にしました <!-- Extract Daemon.ExpireLogs into a standalone function -->
 * lxd/daemon: Daemon.GetListeners を独立した関数にしました <!-- Extract Daemon.GetListeners into a standalone function -->
 * lxd/daemon: Daemon.httpClient を独立した関数にしました <!-- Extract Daemon.httpClient into a standalone HTTPClient function -->
 * lxd/daemon: Daemon.ListenAddresses を独立した関数にしました <!-- Extract Daemon.ListenAddresses into a standalone function -->
 * lxd/daemon: Daemon.PasswordCheck を独立した関数にしました <!-- Extract Daemon.PasswordCheck into a standalone function -->
 * lxd/daemon: Daemon.SetupStorageDriver を独立した関数にしました <!-- Extract Daemon.SetupStorageDriver into a standalone function -->
 * lxd/daemon: 定義されていない設定キーの使用時にログ出力後、クラッシュしなくなりました <!-- Log a warning for unknown config keys instead of crashing -->
 * lxd/daemon: Daemon.BackingFs を OS 構造体に移動させました <!-- Move Daemon.BackingFs to the OS struct -->
 * lxd/daemon: Daemon.IdmapSet を OS.IdmapSet に移動させました <!-- Move Daemon.IdmapSet to OS.IdmapSet -->
 * lxd/daemon: Daemon.isRecursionRequest を lxd/util サブパッケージに移動させました <!-- Move Daemon.isRecursionRequest to the lxd/util sub-package -->
 * lxd/daemon: Daemon.lxcpath を OS.LxcPath に移動させました <!-- Move Daemon.lxcpath to OS.LxcPath -->
 * lxd/daemon: Daemon.MockMode を OS.MockMode に移動させました <!-- Move Daemon.MockMode to OS.MockMode -->
 * lxd/daemon: Deamon.CheckTrustState と Deamon.isTrustedClient を lxd/util に移動させました <!-- Move Deamon.CheckTrustState and Deamon.isTrustedClient to lxd/util -->
 * lxd/daemon: filesystemDetect 関数を lxd/util サブパッケージに移動させました <!-- Move filesystemDetect function into lxd/util subpackage -->
 * lxd/daemon: すべてのモデルエンティティの Daemon を State に置き換えました <!-- Replace Daemon with State in all model entities -->
 * lxd/daemon: select を使用し、goroutine を少し節約するようにしました <!-- Use select and save a few goroutines -->
 * lxd/daemon: 可能な場合は Daemon の代わりに sql.DB、sys.OS を使うようにしました <!-- Use sql.DB or sys.OS instead of Daemon where possible -->
 * lxd/db: db.go 内では Daemon に対する依存を削除しました <!-- Drop dependencies on Daemon in db.go -->
 * lxd/db: db\*.go ファイルを db/ サブパッケージに移動しました <!-- Move db\*.go files into their own db/ sub-package -->
 * lxd/images: リフレッシュ時に古い "cached" という値も渡すようにしました <!-- Carry old "cached" value on refresh -->(Issue #3698)
 * lxd/import: 初期化されていない構造体は使わないようにしました <!-- Don't use un-initialized structs -->
 * lxd/networks: dnsmasq なしでも LXD が起動するようにしました <!-- Allow starting LXD without dnsmasq -->(Issue #3678)
 * lxd/networks: ip{6}tables がない場合の networkIptablesClear の動作を修正しました <!-- Fix networkIptablesClear with missing ip{6}tables -->(Issue #3688)
 * lxd/networks: ネットワーク名として "dev" が使えるようになりました <!-- Make "dev" work as a network name -->
 * lxd/networks: dnsmasq.raw を 0644 に設定するようにしました <!-- Set dnsmasq.raw to be 0644 -->(Issue #3652)
 * lxd/networks: クリーンシャットダウン時にネットワークを停止するようにしました <!-- Stop networks on clean shutdown -->
 * lxd/patches: canmount=noauto パッチの不具合を修正しました <!-- Fix canmount=noauto patch -->(Issue #3594)
 * lxd/patches: ZFS コンテナとイメージの "size" を削除するようにしました <!-- Unset "size" for ZFS containers + images -->(Issue #3679)
 * lxd/storage: pool の UsedBy でカスタムボリュームをカウントするようになりました <!-- Count custom volumes in pool UsedBy -->
 * lxd/storage: btrfs,zfs で "volume.size" が有効になりました <!-- Enable "volume.size" for {btrfs,zfs} -->
 * lxd/storage: "size" プロパティの修正を行いました <!-- Fix "size" property -->
 * lxd/storage: ログ出力時に間違ったドライバー名で出力される問題を修正しました <!-- Fix wrong driver name for log output -->
 * lxd/storage: 動作に影響のない変更 <!-- Non-functional changes -->
 * lxd/storage/ceph: --cluster を複数指定していたので修正しました <!-- Fix double \-\-cluster -->
 * lxd/storage/ceph: EINVAL になるまで unmap するようにしました  <!-- Unmap until EINVAL -->
 * lxd/storage/ceph: sysfs 経由で "/dev/rbd<idx>" を使うようにしました <!-- Use "/dev/rbd<idx>" via sysfs -->
 * lxd/storage/ceph: クローンの際は最小のイメージフィーチャーセットを使うようにしました <!-- Use minimal image feature set for clones -->
 * lxd/storage/dir: ディレクトリが空かどうかチェックするようにしました <!-- Check if directory is empty -->(Issue #3680)
 * lxd/storage/zfs: 常に既存のデータセットは空である必要があるようにしました <!-- Always require existing datasets to be empty -->(Issue #3657)
 * lxd/storage/zfs: リファクタリングを行いました <!-- Refactoring -->
 * shared: ホストのパスを変換するラッパーを追加しました <!-- Add wrapper to translate host paths -->
 * shared: GetRemoteCertificate を lxc/remote から (sharedに) 移動しました <!-- Move GetRemoteCertificate from lxc/remote -->(Issue #3606)
 * tests: ストレージバックエンドのヘルパを include するための関数を追加しました <!-- function to include storage backends helpers -->
 * tests: 関数のリファクタリングとクリーンアップを行いました <!-- Refactor cleanup functions -->
 * tests: スクリプトを lxc と lxd それぞれに関連したヘルパ関数に分離しました <!-- Split out lxc and lxd related helper functions -->
 * tests: ネットワーク関連のヘルパ関数を分離しました <!-- Split out network-related helper functions -->
 * tests: ストレージ関連のヘルパ関数を分離しました <!-- Split out storage-related helper functions -->
 * tests: テストのセットアップ関連のヘルパ関数を分離しました <!-- Split out test setup related helper functions -->
 * tests: $storage\_backends 変数を使うようにしました <!-- Use $storage\_backends variable -->

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


## LXD 2.16 リリースのお知らせ <!-- LXD 2.16 release announcement --><span class="text-muted">2017 年 7 月 25 日<!-- 25th of July 2017 --></span>
新機能<!-- New features -->:

 * LXD のストレージバックエンドとして Ceph RBD が使えるようになりました ("lxd init" でのサポートを含みます) <!-- Ceph RBD can now be used as a LXD storage backend (including "lxd init" support). -->
 * 新たに security.idmap.base キーが追加されました。これは security.idmap.isolated を使う場合に、ホスト上でのベースとなる uid/gid を指定します <!-- A new security.idmap.base key has been added to control what base uid/gid to use on the host when using security.idmap.isolated. -->
 * イメージのダウンロードを中断できるようになりました <!-- Image downloads can now be interrupted. -->
 * ファイルの転送でシンボリックリンクを扱えるようになりました <!--File transfers now support sending symlinks -->
 * "lxc copy" と "lxc move" で進捗表示をするようになりました <!-- "lxc copy" and "lxc move" will now show progress information -->
 * "lxc copy" と "lxc move" で firewall と NAT を越えるために "relay" モードと "push" モードをサポートするようになりました (--mode オプション)<!--"lxc copy" and "lxc move" now support "relay" and "push" modes to go around firewalls and NAT (\-\-mode option) -->
 * カスタムストレージボリュームのサイズを設定したり変更したりできるようになりました <!-- Custom storage volumes can now have their size set and modified -->
 * "lxc image import" が展開したイメージを含むディレクトリからの読み込みをサポートするようになりました <!-- "lxc image import" now supports reading from a directory containing an unpacked image -->
 * "vlan" プロパティを "physical" ネットワークインターフェースに設定できるようになりました (以前は "macvlan" に制限されていました)<!-- The "vlan" property can now be set on "physical" network interfaces (was previously restricted to "macvlan") -->
 * ストレージプールからイメージボリュームを削除できるようになりました。これでイメージストアからイメージを削除することなくストレージプールを削除できるようになりました <!-- It's now possible to delete image volumes from a storage pool. This allows removing a storage pool without having to remove the images from the image store. -->
 * イメージとしてコンテナを公開する前に、イメージメタデータとテンプレートを API 経由で作成したり変更したりできるようになりました <!-- The image metadata and template files can now be created or modified through the API prior to publish a container as an image. -->
 * リモートホストで、ステートフルなスナップショットをコンテナとしてリストアできるようになりました <!-- Stateful snapshots can now be restored as a new container on a remote host. -->

バグ修正<!-- Bugfixes -->:

 * client: ベースとなる http クライアントを指定できるようになりました <!-- Allow specifying base http client -->(Issue #3580)
 * client: エラーハンドリングの共通化を行いました <!-- Commonize error handling -->
 * client: 停止しているコンテナのライブマイグレーションを行おうとしないようにしました <!-- Don't live migrate stopped containers -->
 * client: オペレーションハンドラ内のクラッシュを修正しました <!-- Fix crash in operation handler -->
 * client: 名前にスペースが含まれたファイルの push/pull の問題を修正しました <!-- Fix file push/pull with names containing spaces -->
 * client: public な LXD のリモートホストを扱う際の問題を修正しました <!-- Fix handling of public LXD remote -->(Issue #3464)
 * client: 操作処理中の競合を修正しました <!-- Fix race condition in operation handling -->
 * client: マイグレーションをリレーするコードを改良しました <!-- Improve migration relay code -->
 * client: 使用中の HTTP クライアントを取得できるようになりました <!-- Make it possible to retrieve HTTP client -->(Issue #3580)
 * client: リモートの切断を正しく扱うようにしました <!-- Properly handle remote disconnections -->
 * client.go: godoc 中で廃止したパッケージの警告を表示するようにしました <!-- Make deprecation warnings visible in godoc -->(Issue #3466)
 * config: スナップショット名中に ":" が含まれる場合の処理を改良しました <!-- Try to be clever about ":" in snapshots -->
 * doc: コンテナ作成時のキャッシュに存在する以前のイメージの使用に関する注意書きを追加しました <!-- Add note on use of previous image from cache -->(Issue #3590)
 * doc: storage\_images\_delete API 拡張の文書に追加しました <!-- Document storage\_images\_delete API extension -->(Issue #3539)
 * doc: exec セッション中の control API を文書に追加しました <!-- Document the exec control API -->(Issue #3574)
 * doc: lxd のインポートに関する説明を詳細にしました <!-- Expand lxd import documentation -->
 * doc: セキュリティに関連する文書を作り直し詳細にしました <!-- Extend/rework security-related documentation. -->
 * doc: 実際に動作するサンプルを示すように help を修正しました <!-- Fix help to provide sample that actually works -->
 * doc: 空白、カンマ、クオート、括弧を修正しました <!-- Fix spaces, commas, quotes, brackets where needed -->
 * doc: コンテナ内の環境についての文書を追加しました <!-- Initial documentation of container env -->(Issue #477)
 * doc: /1.0/networks/ の "config"."ipv6.nat" の値にクオートを追加しました <!-- Need quotes for /1.0/networks/ "config"."ipv6.nat" -->
 * doc: 不要なバックスラッシュを削除しました <!-- Remove extraneous backslash -->
 * doc: containers.md を更新しました (訳注: LXDで扱えるデバイスタイプに usb と gpu を追加) <!-- Update containers.md -->
 * github: ISSUE\_TEMPLATE.md: lxd.log の場所を修正しました <!-- Fix lxd.log location -->
 * global: typo をいくつか修正しました <!-- Fix a few typos -->
 * lxc/config: 一度に複数のデバイスを削除できるようにしました <!-- Removal of multiple devices at once -->
 * lxc: 存在しない設定ファイル用のディレクトリを作成するようにしました <!-- Create missing config paths -->
 * lxc: クロスプラットフォームで設定ファイル用のディレクトリを扱えるようにしました <!-- Cross-platform HOME handling -->(Issue #3573)
 * lxc/exec: Windows でのシグナルハンドラを修正しました <!-- Fix signal handler for Windows -->(Issue #3496)
 * lxc/file: `push -p` で作成する中間ディレクトリのモードを指定しないようにしました <!-- Don't specify mode for intermediate directories created with `push -p` -->
 * lxc/image: エクスポートした際のファイル名では、常に長いフィンガープリントを使うようにしました <!-- Always use long fingerprint in exported filenames. -->
 * lxc/image: "ixc image copy" が取得元を記録していない問題を修正しました <!-- Fix "lxc image copy" not recording the source -->
 * lxc/image: "lxc image list" のフィルタのハンドリングを改良しました <!-- Improve "lxc image list" filter handling -->(Issue #3555)
 * lxc/image: エラー時の処理が抜けていたのを修正しました <!-- Missing error handling -->
 * lxc/image: コピー時にエイリアスのソースを適切に記録するようにしました <!-- Properly record alias source on copy -->(Issue #3586)
 * lxc/image: イメージにエイリアスが設定されている場合、エイリアスを更新するようにしました <!-- Update image aliases when they already exist -->
 * lxc/launch: ランダムな名前をつけたコンテナの起動に失敗する問題を修正しました <!-- Fix failure to launch containers with random names -->
 * lxc/list: --columns と --fast を同時に指定した場合にエラーになっていた問題を修正しました <!-- Error if \-\-columns and \-\-fast are used together -->
 * lxc/publish: compression\_algorithm を compressionAlgorithm に変更しました (訳注: 変数名の変更) <!-- Change compression\_algorithm to compressionAlgorithm -->
 * lxc/publish: フィンガープリントの表示の問題を修正しました <!-- Fix fingerprint printing -->
 * lxc/utils: 進捗表示での競合の可能性をなくしました <!-- Avoid potential progress race condition -->
 * lxc/utils: エラー表示でフォーマット指定を行う処理が抜けていた問題を修正しました <!-- Println doesn't do format strings -->
 * lxd/container: エラーハンドリングの問題を修正しました <!-- Fix broken error handling -->
 * lxd/containers: メモリ使用量の表示の際のエラー処理を改良しました <!-- Better handle errors in memory reporting -->(Issue #3482)
 * lxd/containers: コンテナの削除が失敗した場合の根本的なエラーを表示するようにしました <!-- Show underlying error when container delete fails -->
 * lxd/containers: LXC 2.1 の設定キーのサポートを追加しました <!-- Support for LXC 2.1 configuration keys (and fallback) -->
 * lxd/images: イメージが見つからない場合にエラー表示を行うようにしました <!-- Clear error for image not found -->
 * lxd/images: フィンガープリントが与えられた場合のイメージのリフレッシュの問題を修正しました <!-- Fix image refresh when fingerprint is passed. -->
 * lxd/import: 一時的なキーを保持するようにしました <!-- Keep volatile keys -->
 * lxd/import: コンテナをインポートする際、シンボリックリンクには依存しないようにしました <!-- Remove last dependency on symlink -->
 * lxd/init: LVM シンプロビジョニングのツールを検出するようにしました <!-- Detect LVM thin provisioning tools -->(Issue #3497)
 * lxd/networks: プロセスの PID でない場合でも失敗しないようにしました (訳注: dnsmasqのpidファイルに書かれたPIDがdnsmasqでなく、プロセス以外だった場合にエラーになり、dnsmasqプロセスをkillできないバグを修正)<!-- Don't fail on non-process PIDs -->
 * lxd/storage: アタッチしているコンテナすべての idmap をチェックするようにしました <!-- Check idmaps of all attaching containers -->(Issue #3548)
 * lxd/storage: ボリュームの ETag の扱いを修正しました <!-- Fix ETag handling of volumes -->
 * lxd/storage: ディレクトリマウント(訳注: bind マウント) の読み込み専用モードの際の問題を修正しました <!-- Fix readonly mode for directory mount -->
 * lxd/storage: コンテナとイメージの UsedBy の問題を修正しました <!-- Fix UsedBy for containers and images -->
 * lxd/storage: ボリュームの設定ロジックを修正しました <!-- Fix volume config logic -->
 * lxd/storage: storagePoolVolumeUsedByContainersGet 関数を追加しました <!-- Introduce a new storagePoolVolumeUsedByContainersGet function -->
 * lxd/storage: ストレージプールのエントリを削除する実装を各ドライバに移動しました <!-- Move db deletion to driver implementation -->
 * lxd/storage: サイズプロパティを設定を制限しました (訳注: サイズプロパティを設定できないストレージの場合にエラーになるようにした)<!-- Restrict size property in pool config -->
 * lxd/storage/lvm: lvm コマンドの実行を RunCommand 関数で実行するようにしました <!-- Convert to RunCommand -->(Issue #3507)
 * lxd/storage/lvm: エラーハンドリングの問題を修正しました <!-- Fix broken error handling -->
 * lxd/storage/lvm: thinpool でないコンテナ作成時の問題を修正しました <!-- Fix non-thinpool container creation -->(Issue #3543)
 * lxd/storage/lvm: 機能に関係しない変更を行いました <!-- Non-functional changes -->
 * lxd/storage/zfs: すべてのヘルパ関数を storage\_zfs\_utils.go に移動しました <!-- Moved all the helper functions to storage\_zfs\_utils.go -->(Issue #3471)
 * lxd/storage/zfs: s.zfsPoolVolumeCreate() を削除し、s.zfsPoolVolumeCreate() をすべて zfsPoolVolumeCreate() に変更しました <!-- Removed s.zfsPoolVolumeCreate() and changed all s.zfsPoolVolumeCreate() to use zfsPoolVolumeCreate() -->
 * lxd/storage/zfs: マウントできるすべてのデータセットに canmount=noauto を設定するようにしました <!-- Set canmount=noauto on all mountable datasets -->(Issue #3437)
 * lxd/storage/zfs: s.pool.Name の代わりに s.getOnDiskPoolName() を使うようにしました <!-- Used s.getOnDiskPoolName() instead of s.pool.Name -->
 * README: リンク切れを修正しました <!-- Fix broken links -->
 * README: LXD の説明を見直しました <!-- Seriously rework the content -->
 * shared/cancel: キャンセラーが設定されていない場合にクラッシュする問題を修正しました <!-- Fix crash if no canceler is setup -->
 * shared/cancel: 返り値の順序を修正しました (訳注: 関数の返り値を受け取る際、間違った変数で受け取っていた)<!-- Fix return value ordering -->
 * shared/cancel: request のキャンセルチャンネルを使うようにしました <!-- Use request Cancel channel -->
 * shared: RunCommand のカスタムエラータイプを使うようにしました <!-- Use custom error type for RunCommand -->(issue #3502)
 * shared/util: sysconf() が -1 を返した時、サイズを推測するようにしました <!-- Guess size when sysconf() returns -1 -->(Issue #3581)
 * shared: Websocket プロキシ はすべてをプロキシするようにしました <!-- Websocket proxy should proxy everything -->
 * tests: "lxc storage volume set" のテストを追加しました <!-- Add a test for "lxc storage volume set" -->
 * tests: 読み込み専用のディスクのテストを追加しました <!-- Add a test for read-only disks -->
 * tests: シンボリックリンクが削除された場合のインポートテストを追加しました <!-- Add import test when symlink has been removed -->
 * tests: push と relay モードのテストを追加しました <!-- Add test for push and relay mode -->
 * tests: lxdbr0 なしでもテストができるようにしました <!-- Allow running tests without lxdbr0 -->
 * tests: stop/restart の際は常に --force を指定するようにしました <!-- Always pass \-\-force to stop/restart -->
 * tests: apparmor の存在チェックを行うようにしました <!-- More apparmor presence checking -->
 * tests: カーネルがサポートしていない場合は apparmor のテストをスキップするようにしました <!-- Skip apparmor tests when no kernel support -->
 * tests: 正しく busybox がインストールされているかを確認するようにしました <!-- Validate that the right busybox is present -->
 * zfs: ファイルシステムをマウントする際には tryMount を使うようにしました <!-- Use tryMount when mounting filesystem -->

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


## LXD 2.15 リリースのお知らせ <!-- LXD 2.15 release announecment --><span class="text-muted">2017 年 6 月 27 日 <!-- 27th of June 2017 --></span>
新機能 <!-- New features -->:

 * "lxc image list" でカラムのカスタマイズができるようになりました <!-- "lxc image list" now support column customization. -->
 * "lxc list" と "lxc image list" の両方のコマンドで、出力フォーマットとして表、json、yaml、csv が選べるようになりました <!-- "lxc list" and "lxc image list" now both support table, json, yaml and csv as output formats. -->
 * コンテンツをダウンロードしている途中で、いくつかの操作がキャンセル (DELETE) できるようになりました <!-- It's now possible to cancel (DELETE) some background operations while they're downloading content. -->
 * "lxc" コマンドラインツールが、古いクライアントコードから新しいクライアントパッケージに移植されました。
   これは移植に必要なコードの最後の部分です。LXD 2.16 ではツリーから古いクライアントパッケージを削除する予定です。
 <!-- The "lxc" command line tool was ported from our old client code to the new client package. 
   This was the last bit of code which needed porting and we're now
   planning on removing the old client package from our tree with LXD 2.16. -->
 * CopyContainer と CopyContainerSnapshot 関数がクライアントパッケージに追加されました <!-- New CopyContainer and CopyContainerSnapshot functions were added to the client package. -->
 * LXD はカスタムストレージボリュームをコンテナにアタッチした際、動的に再マッピングするようになりました (訳注: id を)<!-- LXD will now dynamically remap custom storage volumes when attached to containers. -->

バグ修正 <!-- Bugfixes -->:

 * client: I/O の間操作をブロックする追加の実行オプションを追加しました <!-- Add extra exec option to block on I/O -->
 * client: イメージサーバがネットワーク経由待ち受けてない場合、コピーが失敗するようにしました <!-- Fail copy if the source isn't listening on network -->
 * client: イベントハンドラのセットアップで競合が起きる可能性があった問題を修正しました <!-- Fix potential race in event handler setup -->
 * client: 値がある場合だけファイルに関するヘッダを設定するようにしました <!-- Only set file headers if value is provided -->
 * doc: blkio 制限に関する注意書きを追加しました <!-- Add a note for blkio limits -->(Issue #3378)
 * doc: イメージのリフレッシュ API 呼び出しの説明を追加しました <!-- Document image refresh API call -->
 * doc: markdown のエスケープ忘れを修正しました <!-- Fix missing markdown escaping -->
 * doc: storage.md のフォーマットの調整を行いました <!-- Tweak storage formatting -->(Issue #3376)
 * lxc/file: 再帰 push の際、ソースパスを正規化するようにしました (訳注: filepath.Clean 使用) <!-- Clean source path for recursive push -->
 * lxc/file: Windows で適切にファイルのパーミッションを読み取るようになりました <!-- Properly read file permissions on Windows -->(Issue #3363)
 * lxd/containers: 新しい LXC でサポートされる lxc.net.&lt;n&gt;.\* 形式の設定キーをサポートしました <!-- Also support lxc.net.<n>.\* configuration keys on newer LXC -->
 * lxd/containers: umount 前にホストでディスクデバイスが存在するかどうかチェックするようにしました <!-- Check whether the disk device exists on the host before unmount -->
 * lxd/containers: exec 中の poll で POLLNVAL を検出するようにしました <!-- Detect POLLNVAL when polling during exec -->(Issue #2964)
 * lxd/containers: 起動時に EBUSY を受け取ったら失敗するようにしました <!-- Fail if we get EBUSY during startup -->(Issue #3412)
 * lxd/containers: 設定キーとして lxc.network.&lt;n&gt;.\* 形式を使うようにしました <!-- Use the lxc.network.<n>.\* configuration keys -->
 * lxd/db: 何箇所か InternalError が使われているところを SmartError に置き換えました <!-- Replace some uses of InternalError with SmartError -->
 * lxd/images: 常にフィンガープリントを展開するようになりました <!-- Always expand the fingerprint -->(Issue #3424)
 * lxd/images: 複数のキャッシュにヒットした場合は一番最近のものを使うようにしました <!-- If multiple cache hits, pick the latest -->
 * lxd/images: プロトコルが direct の場合に適切にイメージの情報を初期化するようにしました <!-- Properly initialize image info in direct case -->
 * lxd/images: 自動更新でないキャッシュされたイメージはスキップするようにしました <!-- Skip cached images without auto-update -->
 * lxd/networks: 常に dnsmasq に --conf-file オプションを与えるようにしました <!-- Always pass \-\-conf-file to dnsmasq -->(Issue #3367)
 * lxd/networks: DHCP を使う場合だけ DHCP のファイアウォールルールを生成するようにしました <!-- Only generate DHCP fw rules if enabled -->(Issue #3432)
 * lxd/networks: コンテナの消去時に IPv6 のリースを消去するようにしました <!-- Remove IPv6 leases on container delete -->
 * lxd/networks: サブネットの自動検出のエラーを調整しました <!-- Tweak error in subnet auto detection -->
 * lxd/patches: ZFS プールに対する問題のあるアップグレードを修正しました <!-- Fix bad upgrade for ZFS pools -->(Issue #3386)
 * lxd/patches: 確実にローカルのデバイスが適切に更新されるようにしました <!-- Make sure localdevices are properly updated -->(Issue #3169) 
 * lxd/shutdown: 指定された場合だけタイムアウトを待つようにしました <!-- Only timeout if told to -->(Issue #3434)
 * lxd/storage: プールに対する ETag の計算の問題を修正しました <!-- Fix ETag calculation for pools -->
 * lxd/storage: 正しくドライバ名を DB に保存するようにしました <!-- Insert driver correctly -->(Issue #3386)
 * lxd/storage/btrfs: タイプを検出する前にデフォルトのマウントフラグを適用するようにしました <!-- Apply default flags BEFORE detecting type -->(Issue #3409)
 * lxd/storage/btrfs: 要求に応じてファイルシステムの quota を有効にするようにしました <!-- Enable filesystem quotas on demand -->
 * lxd/storage/dir: freeze が失敗したときでも必要なシンボリックリンクを作成するようにしました <!-- Still create the needed symlinks on freeze failure -->
 * lxd/storage/dir: rsync がエラーになった際に unfreeze するようにしました <!-- Unfreeze on rsync errors -->
 * lxd/storage/lvm: thinpool が存在する場合は、空でないボリュームグループが使えるようになりました <!-- Allow non-empty VGs when thinpool exists -->(Issue #3456)
 * lxd/storage/rsync: rsync の際、sparse ファイルを扱えるようになりました <!-- Handle sparse files when rsyncing -->(Issue #3287)
 * lxd/storage/zfs: コンテナのスナップショットコピーの際の問題を修正しました <!-- Fix container snapshot copy -->(Issue #3395)
 * lxd/storage/zfs: ダミーのデータセットの作成を改良しました <!-- Improve dummy dataset creation -->(Issue #3399)
 * Makefile: po ファイル更新前の pot ファイルの更新 <!-- Update pot before po -->
 * shared/api: API 拡張は構造体の一番最後に移動しました <!-- API extensions go at the bottom -->
 * tests: コピー、マイグレーションのテストを更に追加しました <!-- Add more copy/migration tests -->
 * tests: カスタムボリュームのアタッチのテストを追加しました <!-- Add tests for custom storage volume attach -->
 * tests: <!-- Add tests for --> "lxc file push -r ./" のテストを追加しました
 * tests: パブリックなリモートに対する finger を実行しないようにしました <!-- Don't attempt to finger public remotes -->
 * tests: バックエンドがランダムの際、LVM のマイグレーションテストを再実行しないようにしました <!-- Don't run migration tests again on LVM when backend is random -->
 * tests: テストの場合はイン・メモリデータベースを使うようにしました <!-- Use in-memory database for tests -->

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


## LXD 2.14 リリースのお知らせ <!-- LXD 2.14 release announcement --><span class="text-muted">2017 年 5 月 30 日 <!-- 30th of May 2017 --></span>
新機能<!-- New features -->:

 * 新しいクライアントライブラリ <!-- New client library -->
    * CreateContainerFromImage 関数を追加しました <!-- Add a CreateContainerFromImage function -->
    * イメージのアップロードを実装しました <!-- Implement image upload -->
    * リモート操作を実装しました <!-- Implement remote operations -->
 * API の追加 <!-- API additions -->
    * コンテナ、ネットワーク、ストレージプール、ストレージボリュームに新たに "description" フィールドを追加しました <!-- New "description" field for containers, networks, storage pools and storage volumes -->
    * イメージのリフレッシュが可能になりました <!-- Allow for image refreshes -->(lxc image refresh)
 * コンテナを起動する際、リフレッシュされたダウンロードしたイメージより既存のキャッシュされたイメージが優先されるようになりました <!-- When launching containers, an existing cached image is now preferred over downloading a refreshed one -->
 * "lxd init" に "--preseed" オプションと YAML ファイルを与えることで、あらかじめ準備した設定を与えられるようになりました <!-- "lxd init" can now be preseeded with "\-\-preseed" and a yaml config file -->
 * 新たに btrfs.mount\_options でプールのプロパティを設定できるようになりました <!-- Introduce a new btrfs.mount\_options pool property -->
 * LVM のボリュームのリサイズを実装しました (ext4 は拡張・縮小、xfs は拡張のみ)<!-- Implement volume resizing for LVM (grow/shrink for ext4, grow only for xfs) -->

バグ修正<!-- Bugfixes -->:

 * client: 後方互換性のために image\_create\_aliases を追加しました <!-- Add image\_create\_aliases backward compat -->
 * client: 常に queryStruct 関数にポインタを渡すようにしました <!-- Always pass pointer to queryStruct -->
 * client: GetServer ではキャッシュを返さなくなりました <!-- Don't return cache on GetServer -->
 * client: サーバ証明書のフィンガープリントが設定されていない場合、設定するようにしました <!-- Fill the server fingerprint if missing -->
 * client: プライベートイメージの扱いの問題を修正しました <!-- Fix private image handling -->
 * client: オペレーションハンドラの競合問題を修正しました <!-- Fix race condition in operation handler -->
 * client: イメージコピーの際のエラーを改良しました <!-- Improve error on image copy -->
 * client: プロトコルを追跡するようにしました <!-- Keep track of protocol -->
 * client: CopyImage をターゲットサーバへ移動しました (訳注: 処理の重複を防ぎ整合性を取れるように関数が属する構造体を変更した)<!-- Move CopyImage to the target server -->
 * client: 不要な条件を削除しました <!-- Remove unneeded condition -->
 * client: ストレージボリュームではボリュームタイプを必須としました <!-- Require the volume type for storage volume -->
 * client: フィンガープリントの一部でのチェックをサポートしました <!-- Support partial fingerprints -->
 * client: クライアントでなくサーバの証明書を追跡するようにしました <!-- Track the server certificate, not client -->
 * client: CopyImage では RemoteOperation を使うようにしました <!-- Use RemoteOperation for CopyImage -->
 * doc: init に YAML で設定を与える方法を記載しました <!-- Add documentation about the init preseed feature -->
 * doc: デバイスタイプ名の typo を修正しました <!-- Correct typo in device type name -->
 * doc: markdown のエスケープを修正しました <!-- Fix markdown escaping -->
 * doc: README.md の Docker に関する説明を更新しました <!-- Update README.md Docker instructions -->
 * doc/network: macvlan とブリッジに関するセクションを追加しました <!-- Add section on macvlan vs bridge -->(Issue #3273)
 * doc/storage: 文法を修正しました <!-- Correct grammer -->
 * doc/storage: ZFS の quota と refquota に関する記述を追加しました <!-- Document zfs quota vs refquota -->(Issue #2959)
 * doc/storage: 表内の行の順序の調整を行いました <!-- Fix ordering -->
 * extra/lxc-to-lxd: mount ファイルがない場合もクラッシュしなくなりました <!-- Don't crash on missing mount file -->(Issue #3237)
 * global: typo を修正しました <!-- Fix typos -->
 * global: file の Chmod() を os.Chmod() に置き換えました <!-- Replace file Chmod() with os.Chmod() -->(Issue #3275)
 * global: containerGetParentAndSnapshotName() を使うようにしました <!-- Use containerGetParentAndSnapshotName() everywhere -->
 * i18n: リリース前の更新を行いました <!-- Pre-release update -->
 * i18n: Weblate から翻訳を更新しました <!-- Update translations from weblate -->
 * lxc: オブジェクト名 (訳注: ネットワーク名やストレージプール名) が指定されていない場合に意味不明なエラーが出るのを修正しました <!-- Fix obscure error on missing object name -->(Issue #3230)
 * lxc: 操作の進捗トラッキングの処理を実装しました <!-- Implement progress tracking for operations -->
 * lxc/copy: エラーハンドリングを改良しました <!-- Improve error handling -->(Issue #3243)
 * lxc/copy: コードを簡素化しました <!-- Simplify the code -->
 * lxc/file: Windows でのファイルの push の問題を修正しました <!-- Fix broken file push on Windows -->
 * lxc/file: Windows での再帰的なファイルの push の問題を修正しました <!-- Fix recursive file push on Windows -->
 * lxc/init: 不要な else ステートメントを削除しました <!-- Drop unnecessary else statement -->
 * lxc/remote: hex でなく文字列としてフィンガープリントを表示するようにしました <!-- Show the fingerprint as string not hex -->(Issue #3293)
 * lxc/storage: YAML のエラーを無視しなくなりました <!-- Don't ignore yaml errors -->
 * lxd: testify で一部のテストを独立して実行できるようにしました <!-- Support running individual testify test suites -->
 * lxd/containers: 一時的なキーである host\_name もクリアするようにしました <!-- Also clear the host\_name volatile key -->
 * lxd/containers: update 時に一時的なキーをクリアするようにしました <!-- Cleanup volatile keys on update -->(Issue #3231)
 * lxd/containers: macvlan インターフェースを作成する際には親インターフェースで IPv6 を無効化するようにしました <!-- Disable IPv6 on created macvlan parents -->
 * lxd/containers: fillNetworkDevice は nic に対してのみ実行するようにしました <!-- fillNetworkDevice is only for nic -->
 * lxd/containers: 可能な限り networkSysctl を使うようにしました <!-- Use networkSysctl whenever possible -->
 * lxd/daemon: /1.0 の際の ETag の扱いを修正しました <!-- Fix ETag handling for /1.0 -->
 * lxd/daemon: サーバのフィンガープリントを設定するようにしました <!-- Actually set ServerFingerprint -->
 * lxd/db: db のテストに testify のテストを追加しました。既存のテストを作りなおしました <!-- Add a testify test suite for db tests, rework existing tests -->
 * lxd/db: lxdSuiteTest が終了するごとにモックデーモンでデータベースの状態をクリアするようにしました <!-- Clear database state in the mock daemon after each lxdSuiteTest -->
 * lxd/db: db へのパッチで不要である特別なモックモードを実行しないようにしました <!-- Don't special-case mock mode unnecessarily in db patches -->
 * lxd/db: ストレージプールがない場合に NoSuchObjectError を返すようになりました <!-- Return NoSuchObjectError on missing storage pools -->(Issue #3257)
 * lxd/db: デーモンレベルのロジックから DB レベルの更新ロジックを分離しました <!-- Separate db-level update logic from daemon-level one -->
 * lxd/images: アップロード時にイメージが既に存在しているかどうかをチェックするようになりました <!-- Check if the image already exists on upload -->
 * lxd/images: 複数回アンロックの可能性があったのを修正しました <!-- Fix potential double unlock -->
 * lxd/images: イメージの自動更新ロジックにあったリグレッションを修正しました <!-- Fix regression in image auto-update logic -->
 * lxd/images: イメージ取得元の証明書を保存し、ダウンロード時に与えるようにしました <!-- Save image source certificate and pass it to the download -->
 * lxd/images: autoUpdateImage 関数を分割しました <!-- Split autoUpdateImage function -->
 * lxd/import: コンテナ名を指定しない場合、エラーになるようにしました <!-- Error on out missing name -->
 * lxd/init: --auto を与えた場合のバリデーション機能を別メソッドに分けました <!-- Extract validation of \-\-auto args into a separate method -->
 * lxd/init: 状態を帰るインライン関数を独立したメソッドに移動させました <!-- Move state-changing inline functions to own methods -->
 * lxd/init: 問題が起こった場合、初期状態にロールバックするようにしました <!-- Rollback to initial state if anything goes wrong -->
 * lxd/init: デフォルトポートを適切に設定するようにしました <!-- Properly set the default port -->(Issue #3341)
 * lxd/networks: ETag のリグレッションを修正しました <!-- Fix ETag regression -->
 * lxd/patches: 使われてない変数を削除しました <!-- Drop unused variable -->
 * lxd/profiles: Docker プロファイルを削除しました <!-- Remove the Docker profile -->
 * lxd/storage: プールが使用中かどうかを検出するヘルパーを追加しました <!-- Add helper to detect if pool is in use -->
 * lxd/storage: lxdResolveMountoptions() を追加しました <!-- Add lxdResolveMountoptions() -->
 * lxd/storage: MS\_LAZYTIME をマウントオプションに追加しました <!-- Add MS\_LAZYTIME to mount options -->
 * lxd/storage: 各種のファイルパーミッションの定数を定義しました <!-- Add permission helpers -->
 * lxd/storage: 無限ループを防ぐように修正しました <!-- Avoid an infinite loop -->
 * lxd/storage: 問題のある内部の型を修正しました <!-- Fix bad internal types -->
 * lxd/storage: マウントヘルパーをストレージユーティリティへ移動させました <!-- Move mount helpers to storage utils -->
 * lxd/storage: カスタムボリュームだけを消去するようにしました <!-- Only delete custom volumes -->
 * lxd/storage: コンテナ構造体を ContainerMount() に与えるようにしました <!-- Pass container struct to ContainerMount() -->
 * lxd/storage: ストレージプールチェックの順序を変更しました <!-- Re-order storage pool checks -->
 * lxd/storage/btrfs: getBtrfsPoolMountOptions() を追加しました <!-- Add getBtrfsPoolMountOptions() -->
 * lxd/storage/btrfs: 異なるバージョンの LXD 間のマイグレーションが扱えるようになりました <!-- Handle migration on different LXDs -->(Issue #3323)
 * lxd/storage/btrfs: 使われていない変数を削除しました <!-- Remove unused variable -->
 * lxd/storage/btrfs: lxdResolveMountoptions() を使うようにしました <!-- Use lxdResolveMountoptions() -->
 * lxd/storage/lvm: 既存の Thin pool を再利用できるようにしました <!-- Allow re-using existing thinpools -->(Issue #3351)
 * lxd/storage/lvm: ボリュームグループが使用中かどうかチェックするようにしました <!-- Check whether volume group is already in use -->
 * lxd/storage/lvm: 空でないボリュームグループは使えないようにしました <!-- Disallow using non-empty volume groups -->(Issue #3351)
 * lxd/storage/lvm: 空のときだけ VG を削除するようにしました <!-- Only delete VG when empty -->(Issue #3351)
 * lxd/storage/lvm: 適切にマウントオプションを解決するようになりました <!-- Resolve mount options properly -->(Issue #3284)
 * lxd/storage/lvm: プールの作成を簡素化し、改良しました <!-- Simplify and improve pool creation -->
 * lxd/storage/zfs: mountpoint=none を与えてイメージデータセットを作成するようにしました <!-- Create image dataset with mountpoint=none -->(Issue #3359)
 * lxd/storage/zfs: データセット作成後にフォルダのパーミッションを設定するようにしました <!-- Fix folder permissions after dataset creation -->(Issue #3090)
 * lxd/storage/zfs: zfs の EBUSY バグを回避しようとするようにしました <!-- Try to work around zfs EBUSY bug  -->(Issue #3228)
 * Makefile: i18n ターゲットに update-po を追加しました <!-- Add update-po to i18n target -->
 * Makefile: static-analysis ターゲットを修正しました <!-- Fix static-analysis target -->
 * shared: "lxc edit" の実行で、テンプレートがエディタの yaml-mode で起動するようにしました <!-- Add yaml-mode marker in template for "lxc edit" actions -->
 * shared/cmd: 初期コマンドの I/O ロジックを持つ新しい shared/cmd パッケージを追加しました <!-- Add new package with initial command I/O logic -->
 * shared/cmd: 色々な AskXXX メソッドに対して cmd.Context を完全にサポートしました <!-- Complete cmd.Context support for various AskXXX methods -->
 * shared/cmd: testify に依存しなくなりました <!-- Don't depend on testify -->
 * shared/cmd: cmdInit をユニットテスト可能なようにログを生成するようにしました <!-- Make the log cmdInit unit-testable -->
 * shared/logger: golint がクリーンに実行できるようにしました <!-- Make golint clean -->
 * shared/logger: PrintStack を GetStack に置き換えました <!-- Replace PrintStack with GetStack -->
 * shared/logging: LogfmtFormat を export しました <!-- Export LogfmtFormat -->
 * shared/logging: golint がクリーンに実行できるようにしました <!-- Make golint clean -->
 * shared/termios: golint がクリーンに実行できるようにしました <!-- Make golint clean -->
 * tests: btrfs.mount\_options のテストを追加しました <!-- Add btrfs.mount\_options test -->(Issue #3264)
 * tests: LV リサイズのテストを追加しました <!-- Add LV resizing tests -->
 * tests: LVM のマウントオプションのテストを追加しました <!--Add mount option test for LVM -->(Issue #3284)
 * tests: quota のテストを追加しました <!-- Add quota tests -->
 * tests: ランダムにストレージバックエンドを選択できるようにしました <!-- Allow random storage backend selection -->
 * tests: busybox がうまくシャットダウンするのに依存しなくなりました <!-- Don't rely on busybox shutting down nicely -->
 * tests: 再度 jenkins 特有のチェックを削除しました (訳注: 一度削除した処理がどこかのコミットで戻ってた?) <!-- Drop jenkins-specific check again -->
 * tests: 明確にシェルのタイプを shellcheck に与えるようにしました <!-- Explicitly pass shell type to shellcheck -->
 * tests: ストレージのテストでは LXD\_BACKEND 環境変数を使うようにしました <!-- Honor the LXD\_BACKEND environment variable in storage tests -->
 * tests: 確実にストレージボリュームがマウントされるようにしました <!-- Make sure storage volume is mounted -->
 * tests: Jenkins の無効なテストを削除しました <!-- Remove invalid test for Jenkins -->
 * tests: テストスイートではインデントにスペースを使うようにしました <!-- Test suites use space indent -->
 * tests/deps: golint がクリーンに実行できるようにしました <!-- Make golint clean -->

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


## LXD 2.0.10 リリースのお知らせ <!-- LXD 2.0.10 release announcement --><span class="text-muted">2017 年 5 月 11 日 <!-- 11th of May 2017 --></span>
<!--
This is the tenth bugfix release for LXD 2.0.
-->
このリリースは LXD 2.0 の 10 回目のバグフィックスリリースです。

### LXD 2.0.9 以降の変更は以下の通りです <!-- The changes since LXD 2.0.9 are -->

細かな改良点 <!-- Minor improvements -->:

 * client: 新しいクライアントライブラリをバックポートし、内部コマンドの一部を移植しました <!-- Backported the new client library and ported some of the internal commands over to it -->
 * lxc: manpage コマンドを追加しました <!-- Add a manpage command -->
 * lxc: すべてのコマンドで --version オプションを使えるようになりました <!-- Allow --version to be passed with any command -->
 * lxc: help2man との互換性のために、クライアント内のヘルプをすべて再作成しました <!-- Reworked all help messages in the client to be compatible with help2man -->
 * lxd: AppArmor 名前空間が特権コンテナでも有効になりました <!-- AppArmor namespacing is now also enabled for privileged containers -->

バグ修正 <!-- Bugfixes -->:

 * build: デバッグログを追加しました <!-- Add debug logging -->
 * client: profile list コマンドを修正しました (訳注: スペースを含む名前の場合に正常に表示されるよう) <!-- Fix profile list -->
 * client: 不要な条件を削除しました <!-- Remove unneeded condition -->
 * doc: loop デバイスの ZFS を拡張するための方法を追記しました <!-- Add instructions to grow ZFS loop -->
 * doc: btrfs の qgroups のエスケープについての注意書きを追加しました <!-- Add note about escaping btrfs qgroups -->
 * doc: カーネルのリングバッファに対するアクセス制限を行う方法に関する sysctl パラメータの注釈を追加しました <!-- Add note about restricting access to kernel ring buffer -->
 * doc: ドキュメントを分割し、コンテナの文書は containers.md に移しました <!-- Extract containers documentation to containers.md -->
 * doc: ドキュメントを分割し、プロファイルの文書は profiles.md に移しました <!-- Extract profiles documentation to profiles.md -->
 * doc: ドキュメントを分割し、サーバの文書は server.md に移しました <!-- Extract server documentation to server.md -->
 * doc: デバイスの例で不適切な名前を修正しました <!-- Fix badly named example device -->
 * doc: 表が崩れていたのを修正しました <!-- Fix broken table -->
 * doc: LXD が ZFS データセットを完全に制御下に置くことに対する注意を追加しました <!-- Note that LXD assumes full control over the pool -->
 * doc: configuration.md に他のドキュメントへのリンクを置きました <!-- Update configuration.md with links to other documents -->
 * doc: 新しいクライアント API 文書へのリンクに書き換えました <!-- Update README.md for new API client -->
 * extra/lxc-to-lxd: ディスクまたはネットワーク情報がない場合にクラッシュしないようにしました <!-- Don't crash on missing mount file -->
 * extra/lxc-to-lxd: --move-rootfs の説明の Typo を修正しました <!-- Typo in description of \-\-move-rootfs -->
 * extra/vagrant: 末尾の空白を削除しました <!-- Trailing whitespace -->
 * global: すべての filepath.Walk 呼び出しでのエラーハンドリングを修正しました <!-- Fix error handling in all filepath.Walk calls -->
 * global: 多数の Typo を修正しました <!-- Fix a number of typos -->
 * global: リダイレクトの際には User-Agent と他のヘッダをフォワードするようにしました <!-- Forward user-agent and other headers on redirect -->
 * global: file の Chmod() を os.Chmod() に置き換えました <!-- Replace file Chmod() with os.Chmod() -->
 * global: containerGetParentAndSnapshotName() 関数を使うようにしました <!-- Use containerGetParentAndSnapshotName() -->
 * global: すべての場所で RunCommand を使うようになりました <!-- Use RunCommand everywhere -->
 * lxc: 翻訳用の文字列からスペースを削除しました <!-- Don't include spaces in translated strings -->
 * lxc: バッチモードを改良しました <!-- Improve batch mode -->
 * lxc: ヘルプやエラー時のメッセージの出力をより一貫性のあるものにしました <!-- Make help/usage a bit more consistent -->
 * lxc: 共通で利用する関数や型を utils.go に移動しました <!-- Move common functions/types to utils.go -->
 * lxc: エラー時に転送状態を適切にクリアするようにしました <!-- Properly clear transfer stats on error -->
 * lxc: より良い man を出力するための改良を行いました <!-- Rework for better manpages -->
 * lxc/config: 新たに設定を扱うコードを追加しました <!-- Add new config handling code -->
 * lxc/config: 常にリモートの images: に対しては "simplestream" を使うようにしました <!-- Always use "simplestreams" for the images: -->
 * lxc/config: パスの扱いを修正しました <!-- Fix path handling -->
 * lxc/config: SaveConfig 中での DeepCopy 関数の呼び出しのバグを修正しました <!-- Fix SaveConfig's DeepCopy call -->
 * lxc/copy: エラーの扱いを改良しました <!-- Improve error handling -->
 * lxc/copy: ソース側 (コピー元) のエラーも返すようにしました <!-- Return the source error too -->
 * lxc/copy: 簡素化しました <!-- Simplify -->
 * lxc/copy: 非同期に操作を待つようにしました <!-- Wait asynchronously -->
 * lxc/image: エイリアスの説明 (description) を表示するようにしました <!-- Show the alias description -->
 * lxc/image: 末尾の空白を削除しました <!-- Trailing whitespace -->
 * lxc/init: 不要な else ステートメントを削除しました <!-- Drop unnecessary else statement -->
 * lxc/list: リストのフォーマットオプションのヘルプを追加しました <!-- Document list format options -->
 * lxc/list: json 出力のリグレッションを修正しました <!-- Fix regression in json output -->
 * lxc/list: データの展開を行う共通の処理をヘルパー関数に移動しました <!-- Move common data extraction to a helper function -->
 * lxc/profile: "profile unset" を適切に実装しました <!-- Properly implement "profile unset" -->
 * lxc/publish: コンテナが実行状態になるのを待つようになりました <!-- Wait for the conainer to be running -->
 * lxc/remote: フィンガープリントを hex でなく文字列として表示するようにしました <!-- Show the fingerprint as string not hex -->
 * lxc/utils: 操作の進捗トラッキングの処理を実装しました <!-- Implement progress tracking for operations -->
 * lxd: 不要な場合の logger.Log の使用を止めました <!-- Drop use of logger.Log when not needed -->
 * lxd/apparmor: ネストでの AppArmor のスタックの扱いを修正しました <!-- Fix AppArmor stack handling with nesting -->
 * lxd/containers: containerGetParentAndSnapshotName() 関数を追加しました <!-- Add containerGetParentAndSnapshotName() -->
 * lxd/containers: initLXD() にソフトリミットを追加しました <!-- Added soft limit in initLXD() -->
 * lxd/containers: メモリの hard limit が設定される際にも soft limit を (hard limit の 90% に) 設定するようにしました <!-- Added soft memory limit even when hard is selected -->
 * lxd/containers: unix-block/unix-char に対する追加のバリデーションを追加しました <!-- Add extra validation for unix-block/unix-char -->
 * lxd/containers: root ディスクデバイスを検出する関数を追加しました <!-- Add function to detect root disk device -->
 * lxd/containers: (訳注: veth ペアの) ホスト側のインターフェース名を変わらないように指定できるようになりました <!-- Allow for stable host interface names -->
 * lxd/containers: uid/gid のエラー出力をわかりやすくしました <!-- Clarify uid/gid error -->
 * lxd/containers: デバイスのバリデーションコードをクリーンアップしました <!-- Cleanup root device validation -->
 * lxd/containers: ブリッジに接続される veth のホスト側で IPv6 を無効化しました <!-- Disable IPv6 on host side veth when bridged -->
 * lxd/containers: スナップショットの削除の失敗を無視しなくなりました <!-- Don't ignore snapshot deletion failures -->
 * lxd/containers: id の範囲を int32 としてパースしなくなりました <!-- Don't parse id ranges as int32 -->
 * lxd/containers: 失敗時にマイグレーションの成功を報告しなくなりました <!-- Don't report migration success on failure -->
 * lxd/containers: FindProcess を使わずに、exec.Cmd を与えるようにしました <!-- Don't use FindProcess, just pass exec.Cmd -->
 * lxd/containers: 使用中のスナップショットの最大値をきちんと返すようになりました <!-- Find current max snapshot value -->
 * lxd/containers: 不適切な root デバイスの検出コードを修正しました <!-- Fix bad root device detection code -->
 * lxd/containers: ベースイメージのトラッキングの不具合を修正しました <!-- Fix base image tracking -->
 * lxd/containers: exec で s.conn (訳注: WebSocket接続) への並列の読み書きを修正しました <!-- Fix concurent read/write to s.conns in exec -->
 * lxd/containers: FileRemove でのエラーハンドリングを修正しました <!-- Fix error handling on FileRemove -->
 * lxd/containers: minor 番号が 255 より大きなデバイスの扱いを修正しました <!-- Fix handling of devices with minor>255 -->
 * lxd/containers: コピー中のデバイスの上書きに関する問題を修正しました <!-- Fix override of Devices during copy -->
 * lxd/containers: ソフトリミットのロジックに float64 を使うように修正しました <!-- Fix soft limit logic to use float64 -->
 * lxd/containers: 要求に応じて idmap を初期化するようにしました <!-- Initialize idmap on demand -->
 * lxd/containers: 正常でない websocket のクローズ時に forkexec を kill するようにしました <!-- Kill forkexec on abnormal websocket closure -->
 * lxd/containers: パスを 1 つのディスクでのみ使用するようにしました <!-- Path may only be used by one disk -->
 * lxd/containers: 適切に idmap のキャッシュを無効化するようにしました <!-- Properly invalidate the idmap cache -->
 * lxd/containers: 失敗時にメモリ制限を適切に元に戻すようにしました <!-- Properly revert memory limits on failure -->
 * lxd/containers: アーキテクチャを適切に確認するようになりました <!-- Properly validate architectures -->
 * lxd/containers: USER, HOME, LANG のデフォルト値を設定しました <!-- Set default values for USER, HOME and LANG -->
 * lxd/containers: 既に処理されている条件分岐を削除しました <!-- This condition has already been deal -->
 * lxd/containers: uid と gid にはすべて int64 を使うようになりました <!-- Use int64 for uid and gid everywhere -->
 * lxd/containers: コンテナの idmap をできるだけ早く確認するようにしました <!-- Validate container idmap as early as possible -->
 * lxd/containers: root のセットアップ後に拡張設定を確認するようにしました <!-- Validate expanded configuration after root setup -->
 * lxd/containers: コンテナの作成時に拡張設定を確認するようにしました <!-- Validate the expanded config at container create -->
 * lxd/daemon: 起動時に idmap の妥当性をチェックするようになりました <!-- Check for the validity of the id maps at startup -->
 * lxd/daemon: 競合をいくつか修正しました <!-- Fix some race conditions -->
 * lxd/daemon: devlxd を tmpfs でマウントするようにしました <!-- Mount a tmpfs under devlxd -->
 * lxd/daemon: s/Default map/Available map/ (訳注: ログ出力の文字列修正)
 * lxd/daemon: サーバの証明書のフィンガープリントを設定するようにしました <!-- Set ServerFingerprint -->
 * lxd/daemon: shmounts に tmpfs を使うようにしました <!-- Use a tmpfs for shmounts -->
 * lxd/db: 接続ごとに外部キーを有効化するようにしました <!-- Actually enable foreign keys per connection -->
 * lxd/db: 更新がない場合を扱えるようにしました <!-- Deal with the case where no updates exist -->
 * lxd/db: 新しい DB からのダウングレードを検出して失敗にするようになりました <!-- Detect downgrades with newer DB and fail -->
 * lxd/db: DB ロックのタイムアウトを 30 秒に上げ、30ms ごとにリトライするようにしました <!-- Raise DB lock timeout to 30s, retry every 30ms -->
 * lxd/db: CASCADE に頼るようにしました <!-- Rely on CASCADE -->
 * lxd/db: 余分なクリーンアップコードを削除しました <!-- Remove some extra cleanup code -->
 * lxd/devlxd: Go 開発版での UnixConn からの fd の展開を修正しました <!-- Fix extraction of fd from UnixConn with go tip -->
 * lxd/events: events API 中のログ出力を改良しました <!-- Improve formatting in events API -->
 * lxd/images: イメージが既に存在するかどうかをチェックするようにしました <!-- Check if the image already exists -->
 * lxd/images: 残っていた不要なデバッグ用の処理を削除しました <!-- Drop leftover debug statement -->
 * lxd/images: 部分的なイメージのフィンガープリントのマッチを修正しました <!-- Fix partial image fingerprint matches -->
 * lxd/images: imagesDownloading 変数をデーモン構造体の外に出しました <!-- Move imagesDownloading out of the daemon struct -->
 * lxd/images: エイリアスの説明 (description) を適切に返すようにしました <!-- Properly return the alias description -->
 * lxd/images: キャッシュにサーバ証明書を記録するようにしました <!-- Record the server certificate in the cache -->
 * lxd/images: 少しコードをリファクタリングしました <!-- Refactor code a bit -->
 * lxd/images: イメージの取得元の証明書を保存し、ダウンロード時にそれを使うようにしました <!-- Save image source certificate and pass it to the download -->
 * lxd/images: autoUpdateImage 関数を分割しました <!-- Split autoUpdateImage function -->
 * lxd/init: uid/gid が不足している場合にはユーザ名前空間に関する警告メッセージを表示するだけにしました <!-- Only show userns message if lacking uid/gid -->
 * lxd/init: 既にチェックされている条件を再度チェックしている部分の処理を削除しました <!-- The 'storageBackend' has already been checked -->
 * lxd/main: activateifneeded 内のコメントを修正しました <!-- Fix comment in activateifneeded -->
 * lxd/main\_forkexec: os.FindProcess の使用を止めました <!-- Remove os.FindProcess -->
 * lxd/main\_netcat: ロギングを実装しました <!-- Implement logging -->
 * lxd/main\_netcat: 新しいヘルパーに切り替えました <!-- Switch to new helper -->
 * lxd/main\_nsexec: cgo: 割り当てたメモリを開放するようにしました <!-- Free allocated memory -->
 * lxd/main: デーモンと activeifneeded の実行を root に制限しました <!-- Restrict daemon and activateifneeded to root -->
 * lxd/migration: rsync のエラーの扱いを改良しました <!-- Better handle rsync errors (subprocesses) -->
 * lxd/migration: CRIUに関連したエラー出力をわかりやすくしました <!-- Clarify CRIU related errors -->
 * lxd/migration: EAGAIN を適切に扱うようにしました <!-- Handle EAGAIN properly -->
 * lxd/migration: netcat が EAGAIN を扱うようにしました <!-- Make our netcat handle EAGAIN -->
 * lxd/migration: rsync のログ出力を少し調整しました <!-- Tweak rsync logging a bit -->
 * lxd/operations: 使われないループを削除しました <!-- Remove useless for loops -->
 * lxd/profiles: root ディスクデバイスを確認するようにしました <!-- Verify root disk devices -->
 * lxd/storage/btrfs: 常に再帰的にサブボリュームを扱う関数を使うようにしました <!-- Always use the recursive subvol functions -->
 * lxd/storage/btrfs: マイグレーション後の空のディレクトリを掃除するようにしました <!-- Cleanup empty migration dirs -->
 * lxd/storage/btrfs: 再帰的なサブボリュームの削除を修正しました <!-- Fix recursive subvol deletion -->
 * lxd/storage/btrfs: ネストしたサブボリュームを正しく扱うようにしました <!-- Properly handle nested subvolumes -->
 * lxd/storage: コンテナ用のディレクトリが確実に正しいパーミッションとなるようにしました <!-- Ensure the container directory has the right permission -->
 * lxd/storage: マウント用のヘルパをストレージのユーティリティ用のソースファイルに移動させました <!-- Move mount helpers to storage utils -->
 * lxd/storage: containerGetRootDiskDevice 関数を少し最適化しました <!-- Optimize containerGetRootDiskDevice a bit -->
 * Makefile: gorilla/context を常に include するようにしました <!-- Always include gorilla/context -->
 * Makefile: "go get" を繰り返し呼ぶのを止めました <!-- Drop repeated calls to "go get" -->
 * Makefile: システムの libsqlite3 が利用可能な場合は使うようにしました <!-- Use system libsqlite3 if available -->
 * shared: コーディングスタイルの調整を行いました <!-- coding-style pedantry -->
 * shared/api: ContainerPut 構造体に stateful フィールドを追加しました <!-- Add the Stateful field to ContainerPut -->
 * shared/api: イメージ作成のソースを適切に定義するようにしました <!-- Properly define the image creation source -->
 * shared/api: 一貫性のある json と yaml のフィールド名を使うようにしました <!-- Use consistent json and yaml field names -->
 * shared/cmd: 初期コマンドの I/O ロジックを持つ新しい shared/cmd パッケージを追加しました <!-- Add a new shared/cmd package with initial command I/O logic -->
 * shared/cmd: 色々な AskXXX メソッドに対して cmd.Context を完全にサポートしました <!-- Complete cmd.Context support for various AskXXX methods -->
 * shared/gnuflag: golint 向けの修正を行いました <!-- Fix golint -->
 * shared/i18n: 簡素化とgolint がクリーンに実行できるようにしました <!-- Simplify and make golint clean -->
 * shared/idmap: DefaultIdmapSet 関数は常に root に対して実行するようになりました <!-- DefaultIdmapSet is always for root -->
 * shared/idmap: GetOwner 関数を削除しました <!-- Drop GetOwner -->
 * shared/idmap: いくつか問題を修正しました <!-- Fix various issues -->
 * shared/idmap: カーネルの ID マップをパースする処理を実装しました <!-- Implement parsing of kernel id maps -->
 * shared/idmap: Usable() 関数を実装しました (訳注: コンテナに必要な id の範囲の有効性のチェックなど)<!-- Implement Usable() functions -->
 * shared/idmap: shadow の ID ファイルのパースを改良しました <!-- Improve parsing of the shadow id files -->
 * shared/idmap: デフォルトを見つけようとするようになりました <!-- Make more of an effort to find a default -->
 * shared/idmap: idmap の変更中のデバッグコードを削除しました <!-- Remove debugging during idmap changes -->
 * shared/ioprogress: 簡素化とgolint がクリーンに実行できるようにしました <!-- Simplify and make golint clean -->
 * shared/logger: フォーマットをきれいに行えるようにしました <!-- Add pretty formatting -->
 * shared/logger: ログ出力のための新しいパッケージを作成しました <!-- Create new package for logger -->
 * shared/logger: golint がクリーンに実行できるようにしました <!-- Make golint clean -->
 * shared/logger: PrintStack を GetStack に置き換えました <!-- Replace PrintStack with GetStack -->
 * shared/logging: LogfmtFormat を export しました <!-- Export LogfmtFormat -->
 * shared/logging: golint がクリーンに実行できるようにしました <!-- Make golint clean -->
 * shared/simplestreams: 利用可能な場合は常に squashfs を選択するようにしました <!-- Always prefer squashfs when available -->
 * shared/simplestreams: イメージファイルリストを export するようにしました <!-- Export image file list -->
 * shared/simplestreams: エラーハンドリングを改良しました <!-- Improve error handling -->
 * shared/simplestreams: イメージのリビルドを適切に扱うようになりました <!-- Properly handle image rebuilds -->
 * shared/termios: golint がクリーンに実行できるようにしました <!-- Make golint clean -->
 * shared/util: errno を検出する関数を追加しました <!-- Add function to detect errno -->
 * shared/util: "lxc edit" の実行でテンプレートがエディタの yaml-mode で起動するようにしました <!-- yaml-mode Add yaml-mode marker in template for "lxc edit" actions. -->
 * shared/util: Windows では chown を実行しなくなりました <!-- Don't do chown on windows -->
 * shared/util: FileCopy が常にオーナーを保持するようにしました <!-- FileCopy should also keep owner -->
 * shared/util: FileCopy が常にファイルのモードを維持するようになりました <!-- FileCopy should keep the same mode -->
 * shared/version: golint がクリーンに実行できるようにしました <!-- Make golint clean -->
 * tests: db のテストでは testify test suite を使うようにし、既存のテストを書き直しました <!-- Add a testify test suite for db tests, rework existing tests -->
 * tests: golint を追加しました <!-- Add golint -->
 * tests: lxd init --auto のテストを追加しました <!-- Add lxd init --auto tests -->
 * tests: ストレージバックエンドをランダムで選択できるようにしました <!-- Allow random storage backend selection -->
 * tests: devlxd もアンマウントするようにしました <!-- Also unmount the devlxd path -->
 * tests: loop デバイスを常にクリーンアップするようにしました <!-- Always cleanup loop devices -->
 * tests: zfs の競合を避けました <!-- Avoid a zfs race -->
 * tests: "lxd init" テストで zpool をリークしなくなりました <!-- Don't leak zpools in "lxd init" test -->
 * tests: 明確にシェルのタイプを shellcheck に与えるようにしました <!-- Explicitly pass shell type to shellcheck -->
 * tests: lxd の auto init のテストを修正しました <!-- Fix lxd auto init test suite -->
 * tests: Typo を修正しました <!-- Fix typo -->
 * tests: リブートにかかる時間をもう少し長く取るようにしました <!-- Give more time to reboot test -->
 * tests: ストレージのテストでは LXD\_BACKEND 環境変数を使うようにしました <!-- Honor the LXD\_BACKEND environment variable in storage tests -->
 * tests: デッドコードのテストパフォーマンスを改良しました <!-- Improve performance of deadcode test -->
 * tests: 確実にクライアント証明書が生成されるようにしました <!-- Make sure a client certificate is generated -->
 * tests: 確実にストレージボリュームがマウントされるようにしました <!-- Make sure storage volume is mounted -->
 * tests: テンプレートのテストスイートで適切にクリーンアップされるようにしました <!-- Properly cleanup in template testsuite -->
 * tests: テストにかかった時間を記録するようにしました <!-- Record how long the tests take -->
 * tests: Jenkins の無効なテストを削除しました <!-- Remove invalid test for Jenkins -->
 * tests: client/ と lxc/config/ で golint を実行するようにしました <!-- Run golint on client/ and lxc/config/ -->
 * tests: "go fmt" の代わりに gofmt を使うように変更しました <!-- Switch to use gofmt instead of "go fmt" -->
 * tests: テストスイートのファイルパーミッションから実行権を削除しました <!-- Testsuites are sourced, not executed -->
 * tests: モニタ自身で exit するので kill の失敗を無視するようにしました <!-- The monitor can exit on its own -->
 * tests: 行末のスペースを削除しました <!-- Trailing whitespaces -->
 * tests: 新しいクライアントに対する更新を行いました <!-- Update for new client -->
 * tests: stable ブランチ用に init のテストを更新しました <!-- Update init test for stable branch -->
 * tests: pyflakes と pep8 を別々に呼ぶ代わりに flake8 を使うようにしました <!-- Use flake8 instead of separate pyflakes and pep8 -->
 * tests/deps: golint がクリーンに実行できるようにしました <!-- Make golint clean -->
 * tests/lxd-benchmark: --help と --version の扱いを修正しました <!-- Fix \-\-help and \-\-version handling -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


## LXD 2.13 リリースのお知らせ <!-- LXD 2.13 release announcement --><span class="text-muted">2017 年 ４月 25 日 <!-- 25th of April 2017 --></span>
### このリリースに含まれる変更点 <!-- The changes in this release include -->
新機能 <!-- New features -->:

 * lxc/copy: スナップショットを含まない形でコンテナのコピーができるようになりました <!-- Allow copying a container without its snapshots -->(--container-only)
 * lxd/storage/zfs: 新たに "zfs.clone\_copy" プロパティが追加されました (クローンでなく完全なコピーを作ります) <!-- Introduce a new "zfs.clone\_copy" property (will make a full copy rather than using a clone) -->
 * client: 新たに、より良いデザインの [クライアントライブラリ](https://godoc.org/github.com/lxc/lxd/client) がテスト向けに利用可能になりました <!-- New, better designed, [client library](https://godoc.org/github.com/lxc/lxd/client) available for testing -->
 * lxd/containers: UNIXキャラクタ/ブロックデバイスを、コンテナ内の異なった名前にマップできるようになりました ("source" と "path" キーを設定してください)<!-- unix-char/unix-block devices can now be mapped to a different name in the container (set "source" and "path" keys) -->
 * lxd/containers: 特権コンテナでも AppArmor 名前空間が有効になりました <!-- AppArmor namespacing is now enabled for privileged containers too -->
 * lxd/storage/lvm: Thinpool でない LVM ストレージプールを実装しました ("lvm.use\_thinpool" を "false" に設定してください)<!-- Implement non-thinpool LVM storage pools (set "lvm.use\_thinpool" to "false") -->
 * lxc/list: 出力フォーマットに CSV が選べるようになりました <!-- Support for CSV as an output format -->
 * lxd/init: 既存の btrfs 環境内でのサブボリュームの作成をサポートしました <!-- Support for creating a subvolume in an existing btrfs environment -->
 * lxd/storage: rsync の帯域幅を制限するために "rsync.bwlimit" を追加しました <!-- Implement the "rsync.bwlimit" pool property to restrict rsync bandwidth -->
 * lxd/network: VXLAN のマルチキャストインターフェースを上書きできるようになりました ("tunnel.NAME.interface" を設定してください)<!-- Allow overriding the VXLAN multicast interface (set "tunnel.NAME.interface") -->

バグ修正 <!-- Bugfixes -->:

 * client: 基本的なログ出力を追加しました <!-- Add basic logging code -->
 * client: file push のパスの扱いを修正しました <!-- Fix file push path handling -->(Issue #3153)
 * doc/api-extensions: 適切にマークダウンをエスケープしました <!-- Properly escape markdown -->
 * doc/configuration: 廃止になった設定オプションを削除しました <!-- Drop deprecated config options -->
 * doc/configuration: ドキュメントを分割し、コンテナの文書は containers.md に移しました <!-- Extract containers documentation to containers.md -->
 * doc/configuration: ドキュメントを分割し、ネットワークの文書は networks.md に移しました <!-- Extract networking documentation to networks.md -->
 * doc/configuration: ドキュメントを分割し、プロファイルの文書は profiles.md に移しました <!-- Extract profiles documentation to profiles.md -->
 * doc/configuration: ドキュメントを分割し、サーバの文書は server.md に移しました <!-- Extract server documentation to server.md -->
 * doc/configuration: ドキュメントを分割し、ストレージの文書は storage.md に移しました <!-- Extract storage documentation to storage.md -->
 * doc/configuration: ストレージボリュームの設定の説明を修正しました <!-- Fix storage volume configuration -->(Issue #3140)
 * doc/configuration: configuration.md に他の分割した文書へのリンクを置きました <!-- Update with links to other documents -->
 * doc/lxd-ssl-authentication: PKI の CRL に関する注意書きを削除しました (実装されてないので) <!-- Drop mention of PKI CRL (not implemented) -->
 * doc/production-setup: 表が崩れていたのを修正しました <!-- Fix broken table -->
 * doc/README: 新しいクライアント API 文書へのリンクに書き換えました <!-- Update for new API client -->
 * doc/storage: btrfs の qgroups のエスケープについての注意書きを追加しました <!-- Add note about escaping btrfs qgroups -->(Issue #3135)
 * doc/storage: 少しフォーマットを調整しました <!-- Re-format a bit -->
 * i18n: weblate から翻訳を更新しました <!-- Update translations from weblate -->
 * lxc/copy: ソース側 (コピー元) のエラーも返すようにしました <!-- Return the source error too -->(Issue #3086)
 * lxc/copy: 非同期に操作を待つようにしました <!-- Wait for operations asynchronously -->
 * lxc/list: リストのフォーマットオプションのヘルプを追加しました <!-- Document list format options -->
 * lxc/manpage: すべてのコマンドが "man lxc" で表示されるようになりました <!-- Show all commands in "man lxc" -->(Issue #3214)
 * lxd/containers: containerGetParentAndSnapshotName() 関数を追加しました (訳注: 親コンテナ名、スナップショット名を取得するヘルパー関数)<!-- Add containerGetParentAndSnapshotName() -->
 * lxd/containers: メモリの hard limit が設定される際にも soft limit を (hard limit の 90% に) 設定するようにしました <!-- Added soft memory limit even when hard is selected -->
 * lxd/containers: (訳注: veth ペアの) ホスト側のインターフェース名を変わらないように指定できるようになりました <!-- Allow for stable host interface names -->(Issue #3143)
 * lxd/containers: minor 番号が 255 より大きなデバイスの扱いを修正しました <!-- Fix handling of devices with minor>255 -->
 * lxd/containers: securtiy.syscalls.blacklist の typo を修正しました <!-- Fix typo in securtiy.syscalls.blacklist -->
 * lxd/containers: unix デバイスの削除の問題を修正しました (不正な cgroup.deny 指定)<!-- Fix unix device removal (bad cgroup.deny entry) -->(Issue #3107)
 * lxd/containers: 作成時のストレージのエラーメッセージを改良しました <!-- Improve storage error messages on creation -->(issue #3110)
 * lxd/containers: 適切に idmap のキャッシュを無効化するようにしました <!-- Properly invalidate the idmap cache -->
 * lxd/daemon: PKI 証明書の扱いを改良しました <!-- Improve PKI certificate handling -->(Issue #3162)
 * lxd/db: 更新がない場合を扱えるようにしました <!-- Deal with the case where no updates exist -->
 * lxd/images: 残っていた不要なデバッグ用の処理を削除しました <!-- Drop leftover debug statement -->
 * lxd/init: --storage-backend の説明にすべてのストレージオプションを追加しました <!-- Add all storage options -->
 * lxd/main\_activateifneeded: 新しいクライアントコードへのポーティングを行いました <!-- Port to new client code -->
 * lxd/main\_callhook: 新しいクライアントコードへのポーティングを行いました <!-- Port to new client code -->
 * lxd/main\_daemon: 新しいクライアントコードへのポーティングを行いました <!-- Port to new client code -->
 * lxd/main\_forkexec: os.FindProcess の使用を止めました <!-- Remove use of os.FindProcess -->(Issue #3037)
 * lxd/main\_import: 存在しないスナップショットパスを扱うようにしました <!-- Handle non-existing snapshots path -->(Issue #3198)
 * lxd/main\_import: 新しいクライアントコードへのポーティングを行いました <!-- Port to new client code -->
 * lxd/main\_init: 新しいクライアントコードへのポーティングを行いました <!-- Port to new client code -->
 * lxd/main\_migratedumpsuccess: 新しいクライアントコードへのポーティングを行いました <!-- Port to new client code -->
 * lxd/main\_netcat: ログ出力を実装しました <!-- Implement logging -->(Issue #2494)
 * lxd/main\_netcat: 新しいヘルパーに移行しました <!-- Switch to new helper -->
 * lxd/main\_ready: 新しいクライアントコードへのポーティングを行いました <!-- Port to new client code -->
 * lxd/main\_shutdown: 新しいクライアントコードへのポーティングを行いました <!-- Port to new client code -->
 * lxd/main\_waitready: 新しいクライアントコードへのポーティングを行いました <!-- Port to new client code -->
 * lxd/migration: ステートフルなりストアの問題を修正しました <!-- Fix stateful restore -->
 * lxd/operations: 使われないループを削除しました <!-- Remove useless for loops -->
 * lxd/profiles: ETag の扱いを修正しました <!-- Fix ETag handling -->
 * lxd/rsync: netcat が EAGAIN を扱うようにしました <!-- Make our netcat handle EAGAIN -->(Issue #3168)
 * lxd/storage: プロファイル変更の際、プールの存在をチェックするようにしました <!-- Check that pool exists on profile changes -->(Issue #3137)
 * lxd/storage: 設定のバリデーションを修正し、改良しました <!-- Fix and improve config validation -->
 * lxd/storage/lvm: スナップショットの扱いを改良しました <!-- Improve snapshot handling -->
 * lxd/storage/lvm: {Try}RunCommand() の呼び出しを調整しました (訳注: LVM関係で外部コマンドを実行する部分の調整) <!-- Tweak {Try}RunCommand() calls -->
 * shared/api: ContainerPut 構造体に stateful フィールドを追加しました <!-- Add the Stateful field to ContainerPut -->
 * shared/api: イメージ作成のソースを適切に定義するようにしました <!-- Properly define the image creation source -->
 * shared/gnuflag: golint 向けの修正を行いました <!-- Fix golint -->
 * shared/i18n: 簡素化と golint がクリーンに実行できるようにしました <!-- Simplify and make golint clean -->
 * shared/ioprogress: 簡素化と golint がクリーンに実行できるようにしました <!-- Simplify and make golint clean -->
 * shared/logger: ログ出力に行番号を追加しました <!-- Add line number logging -->
 * shared/logger: フォーマットをきれいに行えるようにしました <!-- Add pretty formatting -->
 * shared/logger: ログ出力のための新しいパッケージを作成しました <!-- Create new package for logger -->
 * shared/util\_linux: errno を検出するための関数を追加しました <!-- Add function to detect errno -->(Issue #2494)
 * shared/version: golint がクリーンに実行できるようにしました <!-- Make golint clean -->
 * tests/lxd-benchmark: 新しいクライアントコードへのポーティングを行いました <!-- Port to new client code -->
 * tests: 追加の "file push -p" テストを追加しました <!-- Add additional "file push -p" tests -->
 * tests: 追加のインポートテストを追加しました <!-- Add additional import tests -->(Issue #3198)
 * tests: 追加のストレージプールテストを追加しました <!-- Add additional storage pool tests -->
 * tests: copy と move の際のマイグレーションテストを追加しました <!-- Add migration tests for copy and move  -->(Issue #3006)
 * tests: テストスイートの実行権を落としました (source で読まれるため)<!-- Keep testsuite non-executable (they're sourced) -->
 * tests: 確実にクライアント証明書が生成されるようにしました <!-- Make sure a client certificate is generated -->
 * tests: インポートテストで依存するレコードも確実に削除するようにしました <!-- Make sure we also delete dependent records in import tests -->
 * tests: テストにかかった時間を記録するようにしました <!-- Record how long the tests take -->
 * tests: client/ と lxc/config/ に対して golint を実行するようにしました <!-- Run golint on client/ and lxc/config/ -->
 * tests: DB を変更する前にコンテナを停止させるようにしました <!-- Stop containers before modifying the DB -->
 * tests: pyflakes と pep8 を別々に呼ぶ代わりに flake8 を使うようにしました <!-- Use flake8 instead of separate pyflakes and pep8 -->
 * tests: インポートテストを簡略化するために shutdown/respawn ヘルパーを使うようにしました <!-- Use shutdown/respawn helpers to simplify import tests -->

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


## LXD 2.12 リリースのお知らせ <!-- LXD 2.12 release announcement --><span class="text-muted">2017 年 3 月 20 日<!-- 20th of March 2017 --></span>
### このリリースに含まれる変更点 <!-- The changes in this release include -->
新機能 <!-- New features -->:

 * lxc/exec: ssh スタイルの -t/-T/-n オプションを実装しました <!-- Implement ssh-style -t/-T/-n -->
 * lxd/init: すべてのストレージドライバをサポートしました <!-- Support all storage drivers -->

バグ修正 <!-- Bugfixes -->:

 * doc: カーネルのリングバッファに対するアクセス制限を行う方法に関する sysctl パラメータの注釈を追加しました <!-- Add a note about restricting access to kernel ring buffer -->
 * doc: バックアップ戦略に関する文書を追加しました <!-- Document backup strategies -->
 * doc: POST で X-LXD-type が有効であることを追加しました <!-- Document that X-LXD-type is valid for POST -->
 * lxc: エラー時に転送状態を適切にクリアするようにしました <!-- Properly clear transfer stats on error -->
 * lxc/copy: copy 時にライブマイグレーションを試みなくなりました (訳注: copy の際にライブマイグレーションかどうかを指定できるようになった)<!-- Don't attempt to live migration on copy -->
 * lxc/list: list コマンドのシンプルなフォーマットの例を追加しました <!-- Add a simple list formatting example -->
 * lxd/backup: バックアップのハンドリングを改良しました <!-- Improve backup handling -->
 * lxd/backup: コンテナのストレージボリュームを記録するようにしました <!-- Record container's storage volume -->
 * lxd/backup: ストレージプールの構造を記録するようにしました <!-- Record storage pool struct -->
 * lxd/containers: 使用中のスナップショットの最大値をきちんと返すようになりました <!-- Find max value currently used -->
 * lxd/daemon: デフォルトで廃止されたキーを削除できるようになりました <!-- Allow unsetting deprecated keys with default -->
 * lxd/daemon: 壊れたパッチが当たった状態では StoragePoolCheck() を実行しないようにしました <!-- Skip StoragePoolCheck() broken patch -->
 * lxd/images: キャッシュにサーバ証明書を記録するようにしました <!-- Record the server certificate in the cache -->
 * lxd/init: 利用可能なストレージバックエンドをわかりやすく出力するようになりました <!-- Better render available storage backends -->
 * lxd/internal: コンテナのストレージボリュームをチェックするようにしました <!-- Check for container storage volume -->
 * lxd/patches: update の前に設定が空かどうかチェックするようにしました <!-- Check if config is empty before update -->
 * lxd/patches: 既存のプールの設定が存在していることを確認するようにしました <!-- Ensure existing pool config is kept -->
 * lxd/storage: SetupStorageDriver() を適合させました (訳注: Storage API のアップグレードに伴い強制チェックができるように SetupStorageDriver を変更した)<!-- Adapt SetupStorageDriver() -->
 * lxd/storage: container\_lxc を shared/api にマッチさせるように修正しました <!-- Fix container\_lxc to match shared/api -->
 * lxd/storage: Storage{Start,Stop}() が bool とエラーを返すようになりました <!-- Make Storage{Start,Stop}() return bool and error -->
 * lxd/storage/btrfs: isBtrfsFilesystem() を追加しました (訳注: パスが Btrfs かどうかチェックする)<!-- Add isBtrfsFilesystem() -->
 * lxd/storage/lvm: 強制的に lvmetad のキャッシュを更新するようにしました <!-- Force lvmetad cache update -->
 * lxd/storage/zfs: 再利用のイメージのためにボリュームエントリーを作成するようにしました <!-- Create a volume entry for re-used images -->
 * lxd/storage/zfs: カーネルモジュールがロードされていない場合にロードするようにしました <!-- Load kernel module in case it isn't -->
 * lxd/storage/zfs: スナップショットのマウントポイントを削除しないようにしました <!-- Prevent removal of the snapshot mountpoint -->
 * lxd/storage/zfs: zfs の umount が失敗した場合、lazy umount を試すようにしました <!-- Try lazy umount if zfs umount fails -->
 * scripts/lxc-to-lxd: --move-rootfs の説明の Typo を修正しました <!-- Typo in description of \-\-move-rootfs -->
 * shared/api: POST もカバーするように storage.go を更新しました <!-- Update storage.go to cover POST too -->
 * shared/simplestreams: イメージファイルリストを export するようにしました <!-- Export image file list -->
 * tests: lxd import のテストを追加しました <!-- Add tests for lxd import -->
 * tests: btrfs の検出コードを修正しました <!-- Fix btrfs detection code -->
 * tests/lxd-benchmark: --help と --version の扱いを修正しました <!-- Fix \-\-help and \-\-version handling -->

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


## LXD 2.11 リリースのお知らせ <!-- LXD 2.11 release announcement --><span class="text-muted">2017 年 3 月 8 日<!-- 8th of March 2017 --></span>
### このリリースに含まれる変更点 <!-- The changes in this release include -->

新機能 <!-- New features -->:

 * 初期の 1 つ以上のエイリアスを設定するためのフィールド "aliases" が POST /1.0/images 内に追加されました <!-- New "aliases" field in POST /1.0/images allowing for an initial set of aliases to be passed. -->
 * ヘルプメッセージとクライアントで manpage を生成するための "lxc manpage" コマンドを改良しました <!-- Reworked help messages and "lxc manpage" command to generate manpages for the client. -->
 * "macvlan" デバイス向けの "vlan" NIC プロパティを追加しました。ホストデバイスの特定の VLAN に接続できます <!-- New "vlan" nic property for "macvlan" devices, allowing to connect to a particular VLAN on the host device. -->

バグ修正 <!-- Bugfixes -->:

 * doc: loop デバイスの ZFS を拡張するための方法を追記しました <!-- Add instructions to grow ZFS loop -->
 * doc: ストレージのドキュメントを改良しました <!-- Improve storage doc -->(Issue #3013)
 * global: すべての場所で RunCommand を使うようになりました <!-- Use RunCommand everywhere -->
 * i18n: テンプレートをリフレッシュしました <!-- Refresh templates -->
 * i18n: weblate から翻訳を更新しました <!-- Update translations from weblate -->
 * i18n: 翻訳テンプレートを更新しました <!-- Update translation templates -->
 * lxc: すべてのコマンドで --version オプションを使えるようになりました <!-- Allow \-\-version to be passed with any command -->
 * lxc: ヘルプやエラー時のメッセージの出力をより一貫性のあるものにしました <!-- Make help/usage a bit more consistent -->
 * lxc: より良い man を出力するための改良を行いました <!-- Rework for better manpages -->
 * lxc/image: エイリアスの説明 (description) を表示するようにしました <!-- Show the alias description -->
 * lxc/profile: "profile unset" を適切に実装しました <!-- Properly implement "profile unset" -->
 * lxd/containers: FindProcess を使わずに、exec.Cmd を与えるようにしました <!-- Don't use FindProcess, just pass exec.Cmd -->(Issue #3037)
 * lxd/containers: 失敗時にメモリ制限を適切に元に戻すようにしました <!-- Properly revert memory limits on failure -->(Issue #3017)
 * lxd/images: エイリアスの説明 (description) を適切に返すようにしました <!-- Properly return the alias description -->
 * lxd/images: 少しコードをリファクタリングしました <!-- Refactor code a bit -->
 * lxd/migration: ストレージプールが使用できない場合は設定から削除するようにしました <!-- Actually unset the storage pool if unavailable -->(Issue #3036)
 * lxd/migration: rsync のエラーの扱いを改良しました <!-- Better handle rsync errors (subprocesses) -->
 * lxd/migration: btrfs の正しいプールプロパティを設定するようにしました <!-- Set correct pool property for btrfs -->(Issue #3036)
 * lxd/migration: zfs の正しいプールプロパティを設定するようにしました <!-- Set correct pool property for zfs -->(Issue #3036)
 * lxd/migration: rsync のログ出力を少し調整しました <!-- Tweak rsync logging a bit -->
 * lxd/patches: まだマウントされてない場合は tryMount() を呼ぶようにしました <!-- Call tryMount() if not already mounted -->(Issue #3026)
 * lxd/patches: lvrename コマンドを lvm のデバイスパスの存在を確認してから実行するようにしました <!-- Conditionalize lvrename -->(Issue #3026)
 * lxd/patches: LV が存在しない場合は image データベースのエントリを削除するようにしました <!-- Delete image db entry if LV is missing -->(Issue #3026)
 * lxd/patches: 論理ボリュームサイズを検出するようにしました <!-- Detect the logical volume size -->
 * lxd/patches: 誤った btrfs のソースプロパティを修正しました <!-- Fix incorrect btrfs source properties -->(Issue #3020)
 * lxd/patches: lvm と dir が混じったストレージの upgrade を扱えるようにしました <!-- Handle mixed-storage <lvm,dir> upgrade -->(Issue #3026)
 * lxd/patches: lvm で MNT\_DETACH を使うようにしました <!-- Use MNT\_DETACH for lvm -->(Issue #3026)
 * lxd/patches: lvm スナップショットディレクトリには RemoveAll() を使うようにしました <!-- Use RemoveAll() for lvm snapshots dir -->(Issue #3026)
 * lxd/storage/btrfs: loop バックエンドのプールを正しく扱うようにしました <!-- Correctly handle loop-backed pools -->(Issue #3020)
 * lxd/storage/btrfs: 特別なサブボリュームパスを扱うようにしました <!-- Handle custom subvolume paths -->(Issue #3020)
 * lxd/storage/dir: 有効なプールのソースパスを制限しました <!-- Limit valid pool source paths -->(Issue #3023)
 * lxd/storage/lvm: {pv,vg}scan を呼ぶようにしました <!-- Call {pv,vg}scan -->
 * lxd/storage/lvm: メソッドから関数へ関数を書き換えました <!-- Dumb down functions from methods to functions -->(Issue #3026)
 * lxd/storage: btrfs でない更新元を扱うようにしました <!-- Deal with source not being btrfs -->(Issue #3024)
 * lxd/storage: スナップショットが確実に正しいプールを持つようにしました <!-- Ensure correct pool for snapshots  -->(Issue #3036)
 * lxd/storage: btrfs のマイグレーションコードを堅牢にしました <!-- Harden the btrfs migration code -->(Issue #3024)
 * lxd/storage: prepareLoopDev() がエラーを直接レポートしているのでエラーメッセージを削除しました <!-- Report prepareLoopDev() error directly -->
 * shared/idmap: 色々問題を修正しました <!-- Fix various issues -->
 * tests: dir と btrfs のテストをさらに追加しました <!-- Add more dir and btrfs tests -->(Issue #3023)
 * tests: ストレージテストの LVM 部分を改良しました <!-- Improve lvm part of storage tests -->

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


## LXD 2.10.1 リリースのお知らせ <!-- LXD 2.10.1 release announcement --><span class="text-muted">2017 年 3 月 2 日<!-- 2nd of March 2017 --></span>
### このリリースに含まれる変更点 <!-- The changes in this release include -->
<!--
This is a bugfix release for LXD 2.10, fixing a number of issues reported after release.
-->
このリリースは LXD 2.10 に対するバグフィックスのためのリリースです。2.10 リリース後に報告された問題をいくつか修正しています。

バグ修正 <!-- Bugfixes -->:

 * global: すべての filepath.Walk 呼び出しでのエラーハンドリングを修正しました <!-- Fix error handling in all filepath.Walk calls -->
 * lxd/images: ベースイメージのトラッキングの不具合を修正しました <!-- Fix base image tracking -->(Issue #2999)
 * lxd/init: root 以外での実行ができるようになりました <!-- Allow running as non-root -->
 * lxd/storage: set\_autoclear\_loop\_device() を追加しました (訳注: loop デバイスに LO\_FLAGS\_AUTOCLEAR フラグを設定する関数)<!-- Add set\_autoclear\_loop\_device() -->
 * lxd/storage/lvm: loop デバイスを使った lvm ストレージプールが使えるようになりました <!-- Allow loop-backed lvm storage pools -->
 * lxd/storage/lvm: defer 呼び出しを修正しました <!-- Fix defer calls -->
 * lxd/storage/lvm: ボリューム delete 時に loop device が確実に存在しているようにしました <!-- Make sure loop devices stays around on volume delete -->
 * lxd/storage/lvm: ファイルを削除する前に LO\_FLAGS\_AUTOCLEAR を設定するようにしました <!-- Set LO\_FLAGS\_AUTOCLEAR before file removal -->
 * lxd/storage/lvm: LV に対してはコンテナ名を元に LVM で使用可能な名前を使うようにしました <!-- Use lvmized container name for LV -->
 * lxd/storage/zfs: 成功時に元の状態に戻さないようにしました <!-- Do not revert on success -->
 * lxd/storage/zfs: 起動時に loop デバイスを使ったストレージプールをインポートするようにしました <!-- Import loop-backed storage pools on startup -->
 * shared/simplestreams: エラーハンドリングを改良しました <!-- Improve error handling -->
 * shared/util: UUID と BlockDev の探索中にエラーをチェックするようにしました <!-- Check for err in {UUID, BlockDev} lookup -->
 * tests: さらに別の LVM プールのボリュームサイズを修正しました <!-- Fix yet another LVM pool's volume size -->
 * tests: リブートにもう少し時間を与えるようにしました <!-- Give more time to reboot -->
 * tests: LVM の作成は "lxc storage" にのみ依存するようになりました <!-- Rely on "lxc storage" create only for lvm -->

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


## LXD 2.10 リリースのお知らせ <!-- LXD 2.10 release announcement --><span class="text-muted">2017 年 2 月 28 日<!-- 28th of February 2017 --></span>

### このリリースに含まれる変更点 <!-- The changes in this release include -->
新機能 <!-- New features -->:

 * LVM バックエンドを使う場合、lvm.vg\_name と lvm.thinpool\_name が変更できるようになりました <!-- With the LVM backend, lvm.vg\_name and lvm.thinpool\_name can now be modified -->
 * "lxd init" をコンテナやイメージが存在する場合でも実行できるようになりました <!-- "lxd init" can now be run even after containers and images are present -->

バグ修正 <!-- Bugfixes -->:

 * doc: markdown 内で正しくエスケープするようにしました <!-- Escape markdown -->
 * doc: デバイスの例で不適切な名前を修正しました <!-- Fix badly named example device -->
 * global: uid と gid にはすべて int64 を使うようになりました <!-- Use int64 for uid and gid everywhere -->
 * i18n: 翻訳とテンプレートを更新しました <!-- Refresh translations and templates -->
 * i18n: Weblate から翻訳を更新しました <!-- Update translations from weblate -->
 * lxc: 共通で利用する関数や型を utils.go に移動しました <!-- Move common functions/types to utils.go -->
 * lxc/action: バッチモードを改良しました <!-- Improve batch mode -->(Issue #2966)
 * lxc/file: シンボリックリンクの転送を検出して失敗とするようにしました <!-- Detect and fail to transfer symlinks -->(Issue #2970)
 * lxc/publish: コンテナが実行状態になるのを待つようになりました <!-- Wait for the container to be running -->
 * lxd/containers: uid/gid のエラー出力をわかりやすくしました <!-- Clarify uid/gid error -->
 * lxd/containers: id の範囲を int32 としてパースしなくなりました <!-- Don't parse id ranges as int32 -->
 * lxd/containers: コピー中のデバイスの上書きに関する問題を修正しました <!-- Fix override of Devices during copy -->(Issue #2872)
 * lxd/containers: uint32 のチェックがきちんと行われるよう修正しました <!-- Fix uint32 check -->
 * lxd/containers: 要求に応じて idmap を初期化するようにしました <!-- Initialize idmap on demand -->
 * lxd/containers: 正常でない websocket のクローズ時に forkexec を kill するようにしました <!-- Kill forkexec on abnormal websocket closure -->
 * lxd/containers: アーキテクチャを適切に確認するようになりました <!-- Properly validate architectures -->(Issue #2971)
 * lxd/containers: idmap の変更時のデバッグ出力を削除しました <!-- Remove debugging during idmap changes -->
 * lxd/containers: コンテナのストレージの初期化を簡素化しました <!-- Simplify container storage init -->
 * lxd/containers: コンテナの idmap をできるだけ早く確認するようにしました <!-- Validate container idmap as early as possible -->
 * lxd/containers: コンテナの作成時に拡張設定を確認するようにしました <!-- Validate the expanded config at container create -->
 * lxd/daemon: 起動時に idmap の妥当性をチェックするようになりました <!-- Check for the validity of the id maps at startup -->(Issue #2885)
 * lxd/daemon: 新しい DB からのダウングレードを検出して失敗にするようになりました <!-- Detect downgrades with newer DB and fail -->
 * lxd/daemon: 競合をいくつか修正しました <!-- Fix some race conditions -->
 * lxd/events: events API 中のログ出力を改良しました <!-- Improve formatting in events API -->
 * lxd/images: 最適化されていないストアを適切に扱うようになりました <!-- Properly handled non-optimized stores -->
 * lxd/init: uid/gid が不足している場合にはユーザ名前空間に関する警告メッセージを表示するだけにしました <!-- Only show userns message if lacking uid/gid -->
 * lxd/patches: ボリュームグループと論理ボリュームを有効化するようにしました <!-- Activate volume group and logical volumes -->
 * lxd/patches: lvm の volume.size をパースしないようにしました <!-- Do not parse volume.size for lvm -->
 * lxd/patches: 既存のデータセットからの zfs upgrade の問題を修正しました <!-- Fix zfs upgrade from existing dataset -->
 * lxd/storage: 適切なログ出力を追加しました <!-- Add proper logging -->
 * lxd/storage: プロファイルでボリュームが使われているかどうかをチェックするようにしました <!-- Check if profiles use pool or volume -->
 * lxd/storage: loop デバイス用のファイルが使われているかどうかを検出するようにしました <!-- Detect if loop file is already in use -->
 * lxd/storage: ストレージボリュームのアタッチを改良しました <!-- Improve storage volume attachment -->
 * lxd/storage: フラグ引数を設定できるようにしました (訳注: ループバックデバイスを準備する時にioctlに渡すフラグを引数として与えられるようにした)<!-- Make flag argument configurable -->
 * lxd/storage: ストレージドライバのキャッシュ処理を storage.go に移動させました <!-- Move storage drivers cache to storage.go -->
 * lxd/storage: 使っていない関数の引数を削除しました <!-- Remove unused function argument -->
 * lxd/storage: 正しいエラーメッセージを返すようにしました <!-- Return correct error messages -->
 * lxd/storage: StoragePoolInit() の処理を簡素化しました <!-- Simplifiy StoragePoolInit() -->
 * lxd/storage/btrfs: 非特権の場合、quota が有効にできないことをログに出力するようにしました <!-- Quotas can't be enabled when unprivileged -->
 * lxd/storage/lvm: ボリュームグループと論理ボリュームを有効化するようにしました <!-- Activate volume groups and logical volumes -->
 * lxd/storage/lvm: ボリュームサイズを設定しないようにしました <!-- Don't set volume size -->
 * shared/idmap: GetOwner 関数を削除しました <!-- Drop GetOwner -->
 * shared/idmap: Usable() 関数を実装しました (訳注: コンテナに必要な id の範囲の有効性のチェックなど)<!-- Implement Usable() functions -->
 * shared/idmap: デフォルトの id マッピングを見つけようとする処理を追加しました <!-- Make more of an effort to find a default -->
 * tests: ストレージボリュームの attach, detach のテストを追加しました <!-- Add test for storage volume {attach,detach} -->
 * tests: "lxd init" テストで zpool をリークしなくなりました <!-- Don't leak zpools in "lxd init" test -->

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


## LXD 2.9.3 リリースのお知らせ <!-- LXD 2.9.3 release announcement --><span class="text-muted">2017 年 2 月 24 日 <!-- 24th of February 2017 --></span>
### このリリースに含まれる変更点 <!-- The changes in this release include -->
<!--
This is another bugfix release for LXD 2.9, fixing migration issues reported by our users.
-->
このリリースは LXD 2.9 に含まれる、ユーザから報告されたマイグレーションの問題を修正するためのリリースです。

バグ修正 <!-- Bugfixes -->:

 * client: 常にリモートの images: に対しては "simplestream" を使うようにしました <!-- Always use "simplestreams" for the images: remote -->
 * doc: storage.md にクライアントコマンドの例を追加しました <!-- Add client tool examples to storage.md -->
 * doc: pool のプロパティである lvm.{thinpool,vg}\_name の説明を追加しました <!-- Add lvm.{thinpool,vg}\_name pool properties -->
 * lxd: root デバイスのバリデーションコードをクリーンアップしました <!-- Cleanup root device validation -->
 * lxd/containers: unix-block/unix-char に対する追加のバリデーションを追加しました <!-- Add extra validation for unix-block/unix-char -->
 * lxd/containers: quota を適用する前にストレージの準備が完了しているかどうかをチェックするようにしました <!-- Check whether storage is ready before applying quota -->
 * lxd/containers: スナップショットの削除の失敗を無視しなくなりました <!-- Don't ignore snapshot deletion failures -->
 * lxd/daemon: s/Default map/Available map/ (訳注: ログ出力の文字列修正)
 * lxd/init: "lxd init" を一般ユーザで実行できるようになりました <!-- "lxd init" can now be run as a normal user -->
 * lxd/main: activateifneeded 内のコメントを修正しました <!-- Fix comment in activateifneeded -->
 * lxd/main: デーモンと activeifneeded の実行を root に制限しました <!-- Restrict daemon and activateifneeded to root -->
 * lxd/patches: upgrade 時のプールとボリュームの設定についての問題を修正しました <!-- Fix pool and volume configuration on upgrade -->
 * lxd/patches: (訳注: volume.lvm.thinpool\_name を) lvm.thinpool\_name にリネームしました <!-- Move to lvm.thinpool\_name pool key -->
 * lxd/storage: (訳注: コンテナのストレージボリュームに対する操作ができるかどうかをチェックする) ContainerStorageReady() 関数を追加しました <!-- Add ContainerStorageReady() -->
 * lxd/storage: (訳注: ストレージボリュームのデフォルト値を設定値に入れる) storageVolumeFillDefault() を (訳注: コンテナの作成時とカスタムストレージボリュームを足した際に) 呼ぶようにしました
 * lxd/storage: 設定のチェックの際には設定を変更しないようにしました <!-- Don't modify configuration during config check -->
 * lxd/storage: エラー時に DB からイメージの情報を確実に削除するようにしました <!-- Ensure image is wiped from DB on error -->
 * lxd/storage: イメージにデフォルト値を設定するようにしました <!-- Fill in default configuration for images -->
 * lxd/storage: プールとボリュームが正しく設定を継承するように実装しました <!-- Implement correct config inheritance for pools and volumes -->
 * lxd/storage: 作成時のみデフォルト値を設定するようにしました (訳注: 5 つ上の設定で一部変更されています)<!-- Only fill in defaults on creation -->
 * lxd/storage: lvm で正しいサイズプロパティのみ設定するようにしました <!-- Only set size property on lvm -->
 * lxd/storage: UsedBy を適切に報告するようにしました <!-- Properly report UsedBy -->
 * lxd/storage: プールとボリュームの設定をチェックが OK かどうかをチェックしてからストレージサイズを受け取ります <!-- Store size values as given to us -->
 * lxd/storage/btrfs: 常に mount オプションを与えるようにしました <!-- Always pass the mount options -->
 * lxd/storage/btrfs: 常に再帰的にサブボリュームを扱う関数を使うようにしました <!-- Always use the recursive subvol functions -->
 * lxd/storage/btrfs: 使われていないコードを削除しました <!-- Drop dead code -->
 * lxd/storage/btrfs: upgrade を改良しました <!-- Improve upgrade -->
 * lxd/storage/btrfs: loop デバイスの場合のみ size を使うようにしました <!-- Only use size in the loop case -->
 * lxd/storage/btrfs: ネストしたサブボリュームを正しく扱うようにしました <!-- Properly handle nested subvolumes -->
 * lxd/storage/btrfs: "source" が空の場合は loop ファイルを設定するようにしました <!-- Set loop file if "source" is empty -->
 * lxd/storage/dir: デバイスをまたがった upgrade を扱うようにしました <!-- Handle cross-device upgrade -->
 * lxd/storage/lvm: lvm.thinpool\_name と lvm.vg\_name を追加しました <!-- Add lvm.thinpool\_name and lvm.vg\_name -->
 * lxd/storage/lvm: 存在する volume group を再利用できるようになりました <!-- Allow to reuse existing volume groups -->
 * lxd/storage/lvm: 常に lvm.thinpool\_name を設定するようにしました <!-- Always set lvm.thinpool\_name -->
 * lxd/storage/lvm: delete 時に 2 度コンテナをアンマウントしなくなりました <!-- Don't unmount the container twice on delete -->
 * lxd/storage/lvm: サイズで "i" という文字を扱えるようになりました (訳注: 例えば GB でなく GiB という単位を扱えるようになった) <!-- Handle "i" in sizes -->
 * lxd/storage/lvm: "size" でなく正しく "volume.size" をパースするようになりました (訳注: 設定で "volume.size" の値を使うべきところで "size" を使おうとしていたので修正)<!-- Parse "volume.size" not "size" property -->
 * lxd/storage/lvm: 設定項目から volume.lvm.thinpool\_name を削除しました <!-- Remove volume.lvm.thinpool\_name -->
 * lxd/storage/lvm: StoragePoolVolume{M,Um}ount の間ロックするようにしました <!-- Lock during StoragePoolVolume{M,Um}ount -->
 * lxd/storage/zfs: StoragePoolVolume{M,Um}ount の間ロックするようにしました <!-- Lock during StoragePoolVolume{M,Um}ount -->
 * lxd/storage/zfs: 設定キーを正しく扱うようにしました <!-- Correctly handle configuration keys -->
 * lxd/storage/zfs: loop デバイスの場合のみ size を使うようにしました <!-- Only use size property in the loop case -->
 * lxd/storage/zfs: 何度も出力されるログメッセージを削除しました <!-- Remove very repetitive log message -->
 * lxd/storage/zfs: 古い (訳注: LXD で作成した) イメージでは mountpoint=none を設定するようにしました <!-- Set mountpoint=none on old images -->
 * shared/idmap: DefaultIdmapSet 関数は常に root に対して実行するようになりました <!-- DefaultIdmapSet is always for root -->
 * shared/idmap: カーネルの ID マップをパースする処理を実装しました <!-- Implement parsing of kernel id maps -->
 * shared/idmap: shadow の ID ファイルのパースを改良しました <!-- Improve parsing of the shadow id files -->
 * shared/simplestreams: イメージのリビルドを適切に扱うようになりました <!-- Properly handle image rebuilds -->
 * tests: 統一したコマンドを実行するように他のコマンド実行に合わせました <!-- Adapt to command line unification -->
 * tests: LVM 特有のストレージプールテストを追加しました <!-- Add LVM specific storage pool tests -->
 * tests: devlxd もアンマウントするようにしました <!-- Also unmount the devlxd path -->
 * tests: loop デバイスを常にクリーンアップするようにしました <!-- Always cleanup loop devices -->
 * tests: LVM では常に 25MB のボリュームを使うようにしました <!-- Always use 25MB volumes for LVM -->
 * tests: lxd の auto init のテストを修正しました <!-- Fix lxd auto init test suite -->
 * tests: デッドコードのテストパフォーマンスを改良しました <!-- Improve performance of deadcode test -->
 * tests: カスタムボリュームの作成をテストするようにしました <!-- Test custom storage volume creation -->

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


## LXD 2.9.2 リリースのお知らせ <!-- LXD 2.9.2 release announcement --><span class="text-muted">2017 年 2 月 20 日 <!-- 20th of February 2017 --></span>
### このリリースに含まれる変更点 <!-- The changes in this release include -->
<!--
This is another bugfix release for LXD 2.9, fixing migration issues reported by our users.
-->
このリリースは LXD 2.9 に含まれる、ユーザから報告されたマイグレーションの問題を修正するためのリリースです。

バグ修正 <!-- Bugfixes -->:

 * lxd/containers: root ディスクデバイスを検出する関数を追加しました <!-- Add fun to detect root disk device -->
 * lxd/containers: 適切な root ディスクデバイスを保証するようにしました <!-- Ensure proper root disk device -->
 * lxd/containers: デバイスからプールを取得する処理を追加しました <!-- Helper to retrieve pool from devices -->
 * lxd/containers: パスを 1 つのディスクでのみ使用するようにしました <!-- Path may only be used by one disk -->
 * lxd/init: ストレージ関連の処理で発生したリグレッションを修正しました <!-- Fix regressions caused by storage work -->
 * lxd/init: 細かな修正を行いました <!-- Small fixes -->
 * lxd/migration:有効なストレージプールを検出するヘルパを呼ぶようにしました <!--  Call helper to detect valid storage pool -->
 * lxd/migration: ストレージ API を使ったコンテナの移動を修正しました <!-- Fix moving containers with storage api -->
 * lxd/patches: 部分的なアップグレードを扱い、プールを修正するようにしました <!-- Handle partial upgrades + pool fixes -->
 * lxd/patches: btrfs のアップグレードを改良しました <!-- Improve btrfs upgrade -->
 * lxd/patches: dir のアップグレードを改良しました <!-- Improve dir upgrade -->
 * lxd/patches: (訳注: 2 度目のアップグレードの実行では) プールの更新のみを再実行するようにしました <!-- Only rerun pool updates -->
 * lxd/profiles: root ディスクデバイスを確認するようにしました <!-- Verify root disk devices -->
 * lxd/storage/btrfs: 作成したプール上で quota を有効にしました <!-- Enable quotas on the pools we create -->
 * lxd/storage/dir: データベースからイメージを削除するようにしました <!-- Delete image from database -->
 * Makefile: 常に gorilla/context を include するようにしました <!-- Always include gorilla/context -->
 * Makefile: "go get" を 1 度だけ呼ぶようにしました <!-- Drop repeated calls to "go get" -->
 * tests: lxd init --auto のテストを追加しました <!-- Add lxd init --auto tests -->
 * tests: プロファイル中の root ディスクデバイスに対するテストを追加しました <!-- Add test for root disk devices in profiles -->
 * tests: 使用可能なツールに基づいたテストを実行するようにしました <!-- Execute tests based on available tools -->
 * tests: タブとスペースの混在を再度修正しました <!-- Fix mixed tab/spaces again -->

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


## LXD 2.9.1 リリースのお知らせ <!-- LXD 2.9.1 release announcement --><span class="text-muted">2017 年 2 月 16 日 <!-- 16th of February 2017 --></span>
### このリリースに含まれる変更点 <!-- The changes in this release include -->
<!--
We made this follow-up bugfix release to correct a few regressions introduced by LXD 2.9.
-->
LXD 2.9 で混入したいくつかのリグレッションを修正するために、このバグフィックスリリースを行いました。

バグ修正 <!-- Bugfixes -->:

 * doc: ディスクデバイスの "pool" プロパティをドキュメントに追加しました <!-- Document the "pool" property for disk devices -->
 * lxc/storage: create のヘルプを修正しました <!-- Fix help output for create -->
 * lxc/storage: 処理を簡素化しました <!-- simplify -->
 * lxd/daemon: 廃止されたストレージのキーを削除できるようになりました <!-- Allow unsetting the deprecated storage keys -->
 * lxd/patches: ストレージをアップグレードするコードにコメントを追加しました <!-- Add more comments to storage upgrade code -->
 * lxd/storage: ロギングの改良を行いました <!-- Improve logging -->
 * lxd/storage: 操作コードのリネームと追加を行いました <!-- Rename and add opcode functions -->
 * lxd/storage: ZFS {pool, dataset} が存在すれば使い、そうでなければ作成するようにしました <!-- Use existing ZFS {pool, dataset} or create it -->
 * lxd/storage: ロックの際に単一の操作 ID を使うようにしました <!-- Use unified operation ids when locking -->
 * tests: ZFSで、プールとしてデータセットを使うか、そうでなければ存在するプールを使うようにしました <!-- Use dataset as pool or existing pool for ZFS -->

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


## LXD 2.9 リリースのお知らせ <!-- LXD 2.9 release announcement --><span class="text-muted">2017 年 2 月 15 日 <!-- 15th of February 2017 --></span>
### このリリースに含まれる変更点 <!-- The changes in this release include -->
新機能 <!-- New features -->:

 * LXD ストレージ管理 API を導入しました <!-- Introduce the LXD storage management API -->
    * LXD で複数のストレージプールが使えます <!-- Allows for multiple storage pools in LXD -->
    * プールはコンテナやカスタムボリュームを保存するのに使えます <!-- Pools can be used to store containers and custom volumes -->
    * 新たな /1.0/storage-pools API を追加しました (rest-api.md をご覧ください) <!-- New /1.0/storage-pools API (see rest-api.md) -->
    * 新たな "lxc storage" コマンドセットを追加しました <!-- New "lxc storage" set of commands -->
    * "lxd init" コマンドは新たにストレージプールの作成をサポートしました <!-- Updated "lxd init" to support creating storage pools -->
 * "lxc network attach" でネットワークインターフェースの設定ができるようになりました <!-- Allow setting network interface name with "lxc network attach" -->
 * 新たに "lxc file delete" コマンドと API を追加しました <!-- New "lxc file delete" command and API -->
 * API を使ってファイルを上書きするのでなく、追加する機能を追加しました <!-- Ability to append to rather than overwrite a file through the API -->
 * DHCPのリース時間を設定するオプションとして新たに "ipv4.dhcp.expiry" と "ipv6.dhcp.expiry" を追加しました <!-- New "ipv4.dhcp.expiry" and "ipv6.dhcp.expiry" config options for DHCP lease time -->

バグ修正 <!-- Bugfixes -->:

 * doc: PUT と PATCH の違いについて説明を追加しました <!-- Clarify PUT vs PATCH -->(Issue 2873)
 * doc: LXD が ZFS データセットを完全に制御下に置くことに対する注意を追加しました <!-- Note that LXD assumes full control over its ZFS dataset -->
 * doc: 最新の DB スキーマに合致するように database.md を更新しました <!-- Update database.md to match current DB schema -->
 * lxc: 翻訳用の文字列からスペースを削除しました <!-- Don't include spaces in translated strings -->
 * lxc/list: json 出力のリグレッションを修正しました <!-- Fix regression in json output -->(Issue 2887)
 * lxd/containers: ブリッジに接続される veth のホスト側で IPv6 を無効化しました <!-- Disable IPv6 on host side veth when bridged -->(issue 2845)
 * lxd/containers: 存在しないパスの解決をブロックしなくなりました <!-- Don't block resolution on non-existing paths -->
 * lxd/containers: イメージのフィンガープリントを 2 度チェックしないようにしました <!-- Don't check the image fingerprint twice -->
 * lxd/containers: exec で s.conn (訳注: WebSocket接続) への並列の読み書きを修正しました <!-- Fix concurent read/write to s.conns in exec -->(Issue 2862)
 * lxd/containers: FileRemove でのエラーハンドリングを修正しました <!-- Fix error handling on FileRemove -->
 * lxd/containers: USER, HOME, LANG のデフォルト値を設定しました <!-- Set default values for USER, HOME and LANG -->(Issue 2830)
 * lxd/daemon: devlxd を tmpfs でマウントするようにしました <!-- Mount a tmpfs under devlxd -->(Issue 2877)
 * lxd/daemon: shmounts に tmpfs を使うようにしました <!-- Use a tmpfs for shmounts -->
 * lxd/db: 接続ごとに外部キーを有効化するようにしました <!-- Actually enable foreign keys per connection -->
 * lxd/db: DB ロックのタイムアウトを 30 秒に上げ、30ms ごとにリトライするようにしました <!-- Raise DB lock timeout to 30s, retry every 30ms -->(Issue 2826)
 * lxd/db: CASCADE に頼るようにしました <!-- Rely on CASCADE -->(Issue 2844)
 * lxd/db: 余分なクリーンアップコードを削除しました <!-- Remove some extra cleanup code -->
 * lxd/devlxd: Go 開発版での UnixConn からの fd の展開を修正しました <!-- Fix extraction of fd from UnixConn with go tip -->
 * lxd/images: 部分的なイメージのフィンガープリントのマッチを修正しました <!-- Fix partial image fingerprint matches -->
 * lxd/images: imagesDownloading 変数をデーモン構造体の外に出しました <!-- Move imagesDownloading out of the daemon struct -->
 * lxd/init: ストレージバックエンドのチェックを 2 度行わないようにしました <!-- Don't check the storage backend twice -->
 * lxd/migration: CRIUに関連したエラー出力をわかりやすくしました <!-- Clarify CRIU related errors -->
 * lxd/migration: 失敗時にマイグレーションの成功を報告しなくなりました <!-- Don't report migration success on failure -->
 * lxd/nsexec: fdopendir() が返す \*DIR ストリームをクローズするようにしました <!-- Close \*DIR stream returned by fdopendir() -->
 * lxd/nsexec: 割り当てたメモリを開放するようにしました <!-- Free allocated memory -->
 * lxd/storage/btrfs: 再帰的なサブボリュームの削除を修正しました <!-- Fix recursive subvol deletion -->
 * lxd/storage/zfs: デバイスをトラッキングするロジックを簡素化しました <!-- Simplify device tracking logic -->
 * Makefile: 使用可能な場合はシステムの libsqlite3 を使うようにしました <!-- Use system libsqlite3 if available -->
 * network: IPv6 を使っていないホストでは ip6tables のクリアをスキップするようにしました <!-- Skip ip6tables clear on non-ipv6 hosts -->(Issue 2842)
 * shared: リダイレクトの際には User-Agent と他のヘッダをフォワードするようにしました <!-- Forward user-agent and other headers on redirect -->(Issue 2805)
 * shared/api: 一貫性のある json と yaml のフィールド名を使うようにしました <!-- Use consistent json and yaml field names -->
 * shared/simplestreams: 利用可能な場合は常に squashfs を選択するようにしました <!-- Always prefer squashfs when available -->
 * shared/utils: Windows では chown を実行しなくなりました <!-- Don't do chown on windows -->
 * shared/utils: FileCopy が常にオーナーを保持するようにしました <!-- FileCopy should also keep owner -->
 * shared/utils: FileCopy が常にファイルのモードを維持するようになりました <!-- FileCopy should keep the same mode -->
 * tests: shared/api に対して golint を追加しました <!-- Add golint for shared/api -->
 * tests: zfs の競合を避けました <!-- Avoid a zfs race -->
 * tests: ネットワーク関連のテーブルを空にして確認するテストを追加しました <!-- Empty and validate network tables -->
 * tests: typo を修正しました <!-- Fix typo -->
 * tests: テンプレートのテストスイートで適切にクリーンアップするようにしました <!-- Properly cleanup in template testsuite -->
 * tests: "go fmt" の代わりに gofmt を使うように変更しました <!-- Switch to use gofmt instead of "go fmt" -->
 * tests: モニタは自身で exit するので kill の失敗を無視するようにしました <!-- The monitor can exit on its own (ignore kill failure) -->

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


## LXD 2.0.9 リリースのお知らせ <!-- LXD 2.0.9 release announcement --><span class="text-muted">2017 年 1 月 26 日<!-- 26th of January 2017 --></span>
<!--
This is the ninth bugfix release for LXD 2.0.
-->
このリリースは LXD 2.0 の 9 回目のバグフィックスリリースです。

### LXD 2.0.8 以降の変更は以下の通りです <!-- The changes since LXD 2.0.8 are -->

<!-- Minor improvements -->細かな改良点:

 * シグナルによって kill された exec セッションの exit コードからシグナル番号がわかるようになりました (訳注: 128+シグナル番号が返る) <!-- Exec sessions being killed by a signal will now report the signal number as part of their exit code. -->
 * VLAN デバイスのタイプが API とクライアントで正しくレポートされるようになりました <!-- VLAN device types are now properly reported in the API and client. -->
 * クライアントがイメージの最終利用日を表示するようになりました (lxc image info) <!-- The client will now show the date an image was last used at (in lxc image info). -->
 * 一度に複数のイメージを消去できるようになりました <!-- The client will now let you delete multiple images at once. -->
 * LXD の翻訳は [Weblate](https://hosted.weblate.org/projects/linux-containers/lxd/) を使うようになりました<!-- LXD is now using [Weblate](https://hosted.weblate.org/projects/linux-containers/lxd/) for its translations. -->

<!-- Bugfixes -->バグ修正:

 * client: Monitor API に終了したシグナルを追加しました <!-- Add a done signal to Monitor API -->
 * client: http のエラーの扱いを改良しました <!-- Better handle http errors -->
 * client: 更新のためのメソッドを共通化し、PATCH の追加を行いました <!-- Commonize update methods -->
 * doc: cloud-init 経由のネットワーク設定の説明を追加しました <!-- Add Documentation on Network Configuration via cloud-init -->
 * doc: README.md に godoc へのリンクを設置しました <!-- Added reference to godoc to README.md -->
 * doc: README.md の CI と　Weblate の記述を更新しました <!-- Update README.md for CI and Weblate status -->
 * extra/lxc-to-lxd: サポートされない (LXCの) 設定項目をさらに追加しました <!-- Add more unsupported config keys -->
 * extra/lxc-to-lxd: プロパティはすべて文字列でなければならなくなりました <!-- All properties must be strings -->
 * extra/lxc-to-lxd: デフォルトでは rootfs は移動でなく、コピーするようになりました <!-- Copy the rootfs by default, don't move it -->
 * extra/lxc-to-lxd: python3-lxc がインストールされていない場合のエラー表示をわかりやすくしました <!-- Show nicer error on missing python3-lxc -->
 * extra/lxc-to-lxd: (訳注: LXCの設定のうちLXDで使える設定項目のチェックを) ホワイトリストを使うように変更しました <!-- Switch to using a config whitelist -->
 * global: typo を修正しました <!-- Fix typos -->
 * global: "gofmt -s" を実行しました <!-- run -->
 * lxc: タイムスタンプの扱いを改良しました <!-- Better handle timestamps -->
 * lxc: ヘルプの出力をより一貫性のあるメッセージにしました <!-- Make help messages more consistent -->
 * lxc: yaml のエラーを正確にチェックするようになりました <!-- Properly check yaml errors -->
 * lxc/init: 例を修正しました <!-- Fix example -->
 * lxc/init: 引数のリストを正しく置き換えるようになりました <!-- Properly replace args list -->
 * lxc/launch: オプションの解析を行うコードを init.go のメソッドを呼び出すだけにしました (重複しているコードの削除) <!-- Just use init.go's flags() -->
 * lxc/list: IPv4 と IPv6 アドレスの出力をソートするようになりました <!-- Sort IPv4 and IPv6 addresses -->
 * lxc/remote: ヘルプを更新しました <!-- Update help -->
 * lxd-bridge: ip6tables のフィルタルールを追加しました <!-- Add ip6tables filter rules -->
 * lxd-bridge: DHCP は UDP でのみ通信するようになりました <!-- DHCP happens over UDP only -->
 * lxd-bridge: IPv4 のファイアウォールをオプショナルにしました (デフォルトは有効です) <!-- Make IPv4 firewalling optional (default is enabled) -->
 * lxd/containers: コンテナ生成時の基本的なログ出力を追加しました <!-- Add basic logging to container creation -->
 * lxd/containers: FileResponse に in-memory のバッファを与えることが可能になりました <!-- Allow passing in-memory buffers to a FileResponse -->
 * lxd/containers: コンテナにアタッチする際に (訳注: setuid に加えて) setgroups も実行するようにしました <!-- Also call setgroups when attaching to the container -->
 * lxd/containers: ネットワークの設定項目を設定する関数の競合状態を避けるようにしました <!-- Avoid race condition in network fill function -->
 * lxd/containers: raw.lxc で設定する項目のうち、lxc.syslog と lxc.ephemeral をブラックリストに追加しました <!-- Blacklist lxc.syslog and lxc.ephemeral in raw.lxc -->
 * lxd/containers: exec 実行時にクリーンに exit できるように、バックグラウンドタスクを検出するようになりました <!-- Detect background tasks to allow clean exit on exec -->
 * lxd/containers: 正しい順序でマウントを行うようになりました <!-- Do mounts in the right order -->
 * lxd/containers: シンボリックリンクから xattr を読み取らないようにしました <!-- Don't attempt to read xattrs from symlinks -->
 * lxd/containers: 存在しないパスの解決をブロックしなくなりました <!-- Don't block resolution on non-existing paths -->
 * lxd/containers: last\_state.power を 2 度記録しないようになりました <!-- Don't record last\_state.power twice -->
 * lxd/containers: Exec() がアタッチされた PID を返すようになり、引数で bool の値をとるようになりました (訳注: bool はコマンドの終了を待つかどうかを与える)<!-- Exec() return attached PID && take bool arg -->
 * lxd/containers: コンテナ状態の記録を修正しました <!-- Fix container state recording -->
 * lxd/containers: major/minor デバイス番号を設定するデバイスのホットプラグを修正しました <!-- Fix device hotplug with major/minor set -->
 * lxd/containers: ファイルの push のエラーハンドリングを修正しました <!-- Fix file push error handling -->
 * lxd/seccomp: seccomp プロファイルの修正を行いました (訳注: LXC がプロファイルの空行からシステムコール番号を読もうとしていたので修正) <!-- Fix generated seccomp profile -->
 * lxd/containers: file\_manip コマンドのロギングを修正しました <!-- Fix logging for file\_manip commands -->
 * lxd/containers: export 中のエラーハンドリングとレポートを改良しました <!-- Improve error handling and reporting during export -->
 * lxd/containers: ディレクトリの置換時に明確にエラーを返すようになりました <!-- Return a clear error when replacing a directory -->
 * lxd: http クライアントのためのコードパスを共通化しました <!-- Common codepath for http client -->
 * lxd: デーモンの TLS の設定で InsecureSkipVerify を設定しないようにしました <!-- Don't set InsecureSkipVerify on daemon's tls config -->
 * lxd: デーモンのバージョンをロギングするようにしました <!-- Log daemon version -->
 * lxd/daemon: より厳密なパーミッションでディレクトリを作成するようにしました <!-- Make directories with stricter permissions -->
 * lxd/daemon: LXD\_DIR のグループと全ユーザに対して +x を設定するようにしました <!-- Make LXD\_DIR with +x for group and everyone -->
 * lxd: コンテナが起動した時点でのみデーモンが準備できたとマークするようになりました <!-- Only mark daemon ready once containers are up -->
 * lxd: 値が削除された場合、デーモンの設定項目を適切に確認するようになりました <!-- Properly validate daemon keys on unset -->
 * lxd: HTTPS アドレスの更新時にもカスタムの http サーバを使用するようになりました <!-- Use our custom http server when updating HTTPS address too -->
 * lxd/db: db.go から使われていないコードを削除しました <!-- Drop unused code from db.go -->
 * lxd/images: イメージダウンロードでの競合が起こらないようにしました <!-- Close race condition in image download -->
 * lxd/containers: ネットワーク経由の転送時にスピードをトラッキングするようになりました <!-- Track speed during network transfers -->
 * lxd/main: activateifneeded 関数を自身用のソースファイルに移動させました <!-- Move activateifneeded to own file -->
 * lxd/main: callhook 関数を自身用のソースファイルに移動させました <!-- Move callhook to own file -->
 * lxd/main: daemon 用関数を自身用のソースファイルに移動させました <!-- Move daemon to own file -->
 * lxd/main: forkexec 関数を自身用のソースファイルに移動させました <!-- Move forkexec to own file -->
 * lxd/main: forkgetnet 関数を自身用のソースファイルに移動させました <!-- Move forkgetnet to own file -->
 * lxd/main: forkmigrate 関数を自身用のソースファイルに移動させました <!-- Move forkmigrate to own file -->
 * lxd/main: forkstart 関数を自身用のソースファイルに移動させました <!-- Move forkstart to own file -->
 * lxd/main: init 関数を自身用のソースファイルに移動させました <!-- Move init to own file -->
 * lxd/main: migratedumpsuccess 関数を自身用のソースファイルに移動させました <!-- Move migratedumpsuccess to own file -->
 * lxd/main: netcat 関数を自身用のソースファイルに移動させました <!-- Move netcat to own file -->
 * lxd/main: ready 関数を自身用のソースファイルに移動させました <!-- Move ready to own file -->
 * lxd/main: shutdown 関数を自身用のソースファイルに移動させました <!-- Move shutdown to own file -->
 * lxd/main: waitready 関数を自身用のソースファイルに移動させました <!-- Move waitready to own file -->
 * lxd/main: nsexec.go を main\_nsexec.go にリネームしました <!-- Rename nsexec.go to main\_nsexec.go -->
 * lxd/migrate: 生成したスナップショットのリストを使うようにしました <!-- Use the generated snapshot list -->
 * lxd/patches: すべてのパッチを create 時に適用済みとマークするようにしました <!-- Mark all patches as applied on create -->
 * lxd/profiles: 未使用の変数を修正しました <!-- Fix unusued variable -->
 * lxd/storage: パスを subvolume と仮定しなくなりました <!-- Don't assume a path is a subvolume -->
 * lxd/storage: ContainerStart 関数の引数としてコンテナ名とパスを取るように変更しました (訳注: 以前はコンテナ構造体を取得して内部でコンテナ名とパスを取り出していた)<!-- Change ContainerStart to take the name and path to start -->
 * lxd/containers: create 時の EEXISTS の検出を書き直しました <!-- Rework EEXISTS detection on create -->
 * lxd/storage: zfs: デバイスをトラッキングするロジックを簡略化しました <!-- Simplify device tracking logic -->
 * Makefile: "make dist" をより信頼性が向上するように作りなおしました <!-- Rework "make dist" to be more reliable -->
 * shared: GetPollRevents() 関数を追加しました (訳注: C の poll の wrapper) <!-- add GetPollRevents() -->
 * shared: WebsocketExecMirror() 関数を追加しました (訳注: コンテナ内の PTY に接続して実行するコマンドを扱う)<!-- Add WebsocketExecMirror() -->
 * shared: すべての証明書フィンガープリントの生成を共通化しました <!-- Centralize all cert fingerprint generation -->
 * shared: TransferProgress に Reader でなく ReadCloser を与えるようになりました <!-- Convert TransferProgress to ReadCloser -->
 * shared: ExecReaderToChannel() が sync.Once を使うようになりました <!-- ExecReaderToChannel() use sync.Once -->
 * shared: アーキテクチャを扱う部分をパッケージ化しました <!-- Give Architecture handling its own package -->
 * shared: IO プログレストラッカー部分をパッケージ化しました <!-- Give IO progress tracker its own package -->
 * shared: simplestreams クライアントをパッケージ化しました <!-- Give simplestreams client its own package -->
 * shared: バージョンを扱う部分をパッケージ化しました <!-- Give version handling its own package -->
 * shared: 書き込みのトラッキングを実装しました <!-- Implement write tracking -->
 * shared: 証明書のフィンガープリントを計算するヘルパー関数を作成しました <!-- Make a helper to compute cert fingerprint -->
 * shared: Device/Devices type を lxd パッケージに移動しました <!-- Move Device/Devices types to lxd package -->
 * shared: FromLXCState 関数 (訳注: LXC コンテナの状態を返す関数) を shared の外 (訳注: LXC コンテナの処理部分) へ移動させました <!-- Move FromLXCState out of shared -->
 * shared: REST API を新しいパッケージに移動しました <!-- Move REST API to new package -->: certificate
 * shared: REST API を新しいパッケージに移動しました <!-- Move REST API to new package -->: container
 * shared: REST API を新しいパッケージに移動しました <!-- Move REST API to new package -->: godoc
 * shared: REST API を新しいパッケージに移動しました <!-- Move REST API to new package -->: image
 * shared: REST API を新しいパッケージに移動しました <!-- Move REST API to new package -->: network
 * shared: REST API を新しいパッケージに移動しました <!-- Move REST API to new package -->: operation
 * shared: REST API を新しいパッケージに移動しました <!-- Move REST API to new package -->: profile
 * shared: REST API を新しいパッケージに移動しました <!-- Move REST API to new package -->: response
 * shared: REST API を新しいパッケージに移動しました <!-- Move REST API to new package -->: server
 * shared: REST API を新しいパッケージに移動しました <!-- Move REST API to new package -->: status
 * shared: WebsocketUpgrader を network.go へ移動させました <!-- Move WebsocketUpgrader to network.go -->
 * shared: GroupName 関数を削除し、UserId 関数を追加しました <!-- Remove GroupName function and add UserId one -->
 * shared: idmapset\_test\_linux.go を idmapset\_linux\_test.go にリネームしました <!-- Rename idmapset\_test\_linux.go to idmapset\_linux\_test.go -->
 * shared: ファイル転送のトラッキングの環境依存をなくしました <!-- Support absolute file transfer tracking -->
 * shared/idmap: デバッグコードを削除しました <!-- Drop debugging code -->
 * shared/idmapset: intersection テストを修正しました <!-- Fix intersection test -->
 * shared/logging: 独自のログフォーマッターを導入しました <!-- Introduce our own formatter -->
 * shared/logging: PrintStack の出力をエラーレベルに変更しました (訳注: runtime.Stack の出力部分を debug から error レベルに変更した)<!-- Make PrintStack print at the Error level -->
 * shared/simplestreams: 独自の http ハンドラに依存しなくなりました <!-- Don't depend on custom http handler -->
 * shared/simplestreams: 引数として UserAgent を与えるようにしました <!-- Pass UserAgent as argument -->
 * shared/util: Int64InSlice() 関数を追加しました <!-- Add Int64InSlice() -->
 * shared/util: GetByteSizeString() 関数が精度を引数として持つようになりました <!-- Have GetByteSizeString() take a precision argument -->
 * shared/util: byte のパースを改良しました <!-- Improve byte parsing -->
 * shared/util: ParseByteSizeString() が byte を扱うようになりました <!-- ParseByteSizeString() deal with bytes -->
 * tests: db テストのエラーを無視しなくなりました <!-- Don't ignore errors in db tests -->
 * tests: 不適切な変数名を変更しました <!-- Fix bad variable name -->
 * tests: 新しい開発版で動作するように deadcode を修正しました <!-- Fix deadcode to work with new upstream -->
 * tests: shellcheck が cd で混乱する問題を修正しました <!-- Fix shellcheck being confused by cd -->
 * tests: スタンドアロンの remote のテストを追加しました <!-- Fix standalone remote test -->
 * tests: Jenkins に合うようにテスト名を短縮しました <!-- Shorten test name to fit on Jenkins -->
 * tests: テストスイートを起動するコードを簡略化しました <!-- Simplify testsuite spawn code -->
 * tests: lxd のシャットダウンをテストするようにしました <!-- Test lxd shutdown -->
 * tests: lxc reboot の代わりに lxc restart を使うようにしました <!-- Use lxc restart instead of reboot -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


## LXD 2.8 リリースのお知らせ <!-- LXD 2.8 release announcement --><span class="text-muted">2017 年 1 月 24 日 <!-- 24th of January 2017 --></span>

### このリリースに含まれる変更点 <!-- The changes in this release include -->
新しい機能 <!-- New features -->:

 * シグナルによって kill された exec セッションの exit コードからシグナル番号がわかるようになりました (訳注: 128+シグナル番号が返る)<!-- Exec sessions being killed by a signal will now report the signal number as part of their exit code. -->
 * 我々の Go クライアント API の改訂の第一段階が終了しました。REST API 定義がすべて含まれる新しい [api モジュール](https://godoc.org/github.com/lxc/lxd/shared/api) となりました <!-- The first stage of our Go client API rework is now done with a new [api module](https://godoc.org/github.com/lxc/lxd/shared/api) containing all REST API definitions. -->
 * LXD が管理するブリッジで使用する dnsmasq が非特権ユーザで動作するようになりました <!-- The dnsmasq instance used for LXD managed bridges is now running as an unprivileged user. -->
 * VLAN デバイスのタイプが API とクライアントで正しくレポートされるようになりました <!-- VLAN device types are now properly reported in the API and client. -->
 * クライアントがイメージの最終利用日を表示するようになりました <!-- The client will now show the date an image was last used at -->(in lxc image info).
 * LXD の翻訳は [Weblate](https://hosted.weblate.org/projects/linux-containers/lxd/) を使うようになりました<!-- LXD is now using [Weblate](https://hosted.weblate.org/projects/linux-containers/lxd/) for its translations. -->

バグ修正 <!-- Bugfixes -->:

 * client: Monitor API に終了したシグナルを追加しました <!-- Add a done signal to Monitor API -->
 * client: http のエラーの扱いを改良しました <!-- Better handle http errors -->
 * doc: cloud-init 経由のネットワーク設定の説明を追加しました <!-- Add Documentation on Network Configuration via cloud-init -->
 * doc: README.md の CI の記述を更新し、Weblate と godoc を追加しました <!-- Update README.md for CI and Weblate -->
<!-- * doc: Update README.md for godoc -->
 * global: Typo を修正しました <!-- Fix typos -->
 * global: "gofmt -s" を実行しました <!-- run -->
 * i18n: フランス語翻訳を改良し、すべて翻訳しました <!-- Improved and completed french translation -->
 * i18n: 日本語翻訳を更新しました <!-- Update message catalogs and Japanese translation -->
 * i18n: Weblate からの翻訳の更新を行いました <!-- Update translations from weblate -->
 * lxc: タイムスタンプの扱いを改良しました <!-- Better handle timestamps -->
 * lxc/file: 再帰的な push でのディレクトリのパーミッションを修正しました <!-- Fix directory permissions on recursive push --> (Issue #2759)
 * lxc/init: 引数のリストを正しく置き換えるようになりました <!-- Properly replace args list -->
 * lxc/list: 未使用の変数を修正しました <!-- Fix unused variable -->
 * lxc/list: 出力の IP アドレスをソートするようになりました <!-- Sort IP addresses in output -->
 * lxc/network: ネットワークの変更操作の改良を行いました <!-- Better handle network modifications -->(Issue #2785)
 * lxc/network: show の UsedBy リストをソートするようになりました <!-- Sort UsedBy list on show -->
 * lxc: yaml のエラーを正確にチェックするようになりました <!-- Properly check yaml errors -->
 * lxc/remote: ヘルプを更新しました <!-- Update help -->
 * lxd/containers: FileResponse に in-memory のバッファを与えることが可能になりました <!-- Allow passing in-memory buffers to a FileResponse -->
 * lxd/containers: シンボリックリンクから xattr を読もうとしなくなりました <!-- Don't attempt to read xattrs from symlinks -->(Issue #2801)
 * lxd/containers: export 中のエラーハンドリングとレポートを改良しました <!-- Improve error handling and reporting during export -->
<!-- * lxd/containers: Report -1 (255) on signal exit during exec (Translator's note: 別のコミットで打ち消された変更/This change is overwritten by other commit) -->
 * lxd/containers: シグナルで kill された場合、終了コードでシグナル番号を返すようになりました <!-- Report exit code when we got killed by signal -->
 * lxd/db: db.go から使っていないコードを削除しました <!-- Drop unused code from db.go -->
 * lxd/devices: 正規表現の失敗を無視しなくなりました <!-- Don't ignore regexp failures -->
 * lxd/images: イメージダウンロードでの競合が起こらないようにしました <!-- Close race condition in image download -->(Issue #2739)
 * lxd/init: 入力時の問い合わせの文言の修正を行いました。「CIDRサブネット」→「CIDRアドレス」<!-- We need an address in CIDR notation instead of CIDR subnet -->
 * lxd/migrate: 生成したスナップショットのリストを使うようにしました <!-- Use the generated snapshot list -->
 * lxd/network: 静的なアドレス割当を行う場合に leases ファイルをクリーンアップするようにしました <!-- Clean up leases for static assignments -->(Issue #2781)
 * lxd/networks: 空の dnsmasq の pid ファイルを扱えるようにしました <!-- Handle empty dnsmasq pid file -->(Issue #2767)
 * lxd/network: ネットワークディレクトリのパーミッションを変更しました <!-- Update permissions of network directories -->(Issue #2804)
 * lxd/patches: すべてのパッチを create 時に適用済みとマークするようにしました <!-- Mark all patches as applied on create -->
 * lxd/profiles: 未使用の変数を修正しました <!-- Fix unusued variable -->
 * lxd/storage: パスを subvolume と仮定しなくなりました <!-- Don't assume a path is a subvolume -->(Issue #2748)
 * shared: Int64InSlice() を追加しました <!-- Add Int64InSlice() -->
 * shared: GetByteSizeString() 関数が精度を引数として持つようになりました <!-- Have GetByteSizeString() take a precision argument -->
 * shared: GetByteSizeString() と ParseByteSizeString() の byte のパースを改良しました <!-- Improve byte parsing in GetByteSizeString() and ParseByteSizeString() -->
 * shared: Device/Devices type を lxd パッケージに移動しました <!-- Move Device/Devices types to lxd package -->
 * shared: ParseByteSizeString() が byte を扱うようになりました <!-- ParseByteSizeString() deal with bytes -->
 * shared: GroupName 関数を削除し、UserId 関数を追加しました <!-- Remove GroupName function and add UserId one -->
 * tests: db テストのエラーを無視しなくなりました <!-- Don't ignore errors in db tests -->
 * tests: 新しい開発版で動作するように deadcode を修正しました <!-- Fix deadcode to work with new upstream -->
 * tests: shellcheck が cd で混乱する問題を修正しました <!-- Fix shellcheck being confused by cd -->
 * tests: 可能であれば lxc restart を使うようになりました <!-- Use lxc restart whenever possible -->

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


## LXD 2.7 リリースのお知らせ <!-- LXD 2.7 release announcement --><span class="text-muted">2016 年 12 月 20 日<!-- 20th of December 2016 --></span>
### このリリースに含まれる変更点 <!-- The changes in this release include -->
新しい機能 <!-- New features -->:

 * iptables の FORWARD ルールの生成をコントロールするネットワーク属性 "ipv4.firewall"、"ipv6.firewall" を新たに追加しました <!-- New "ipv4.firewall" and "ipv6.firewall" network attributes controlling the generation of iptables FORWARD rules -->
 * 追加の静的ルートをネットワークに設定できるネットワーク属性 "ipv4.routes"、"ipv6.routes" を新たに追加しました <!-- New "ipv4.routes" and "ipv6.routes" network attributes allowing for additional static routes to be set to the network. -->
 * 新たに追加した "lxd import" コマンドにより、"containers" ディレクトリだけ存在する（訳注：正確には"containers" ディレクトリにバックアップ情報のファイルだけ存在する）ところからコンテナのインポートができます <!-- New "lxd import" command allowing importing of containers when all that exists is the "containers" directory. -->

バグ修正 <!-- Bugfixes -->:

 * client: 更新のためのメソッドを共通化し、PATCH の追加を行いました <!-- Commonize update methods and add PATCH -->
 * extra/lxc-to-lxd: サポートされない (LXCの) 設定項目をさらに追加しました <!-- Add more unsupported config keys -->
 * extra/lxc-to-lxd: プロパティはすべて文字列でなければならなくなりました <!-- All properties must be strings -->(Issue #2663)
 * extra/lxc-to-lxd: デフォルトでは rootfs は移動でなく、コピーするようになりました <!-- Copy rootfs by default, do not move -->
 * extra/lxc-to-lxd: python3-lxc がインストールされていない場合のエラー表示をわかりやすくしました <!-- Show nicer error on missing python3-lxc -->
 * extra/lxc-to-lxd: (訳注: LXCの設定のうちLXDで使える設定項目のチェックを) ホワイトリストを使うように変更しました <!-- Switch to using whitelist -->
 * i18n: フランス語翻訳を更新しました <!-- Update french translation -->
 * lxc/file: push における off by one エラーを修正しました <!-- Fix off by one error in push -->
 * lxc: ヘルプメッセージを改良しました <!-- Improve help messages -->(Issue #2719)
 * lxc/init: 例を修正しました <!-- Fix example -->
 * lxc/launch: オプションの解析を行うコードを init.go のメソッドを呼び出すだけにしました (重複しているコードの削除) <!-- Just use init.go's flags() -->
 * lxd: http クライアントのためのコードパスを共通化しました <!-- Common codepath for http client -->
 * lxd: デーモンの TLS の設定で InsecureSkipVerify を設定しないようにしました <!-- Don't set InsecureSkipVerify on daemon's tls config -->
 * lxd: デーモンのバージョンをロギングするようにしました <!-- Log daemon version -->
 * lxd: LXD\_DIR のパーミッションをデフォルトで 711 にしました (非特権コンテナに必要です)<!-- Make LXD\_DIR 711 by default (needed for unprivileged containers) -->
 * lxd: コンテナが起動した時点でのみデーモンが準備できたとマークするようになりました <!-- Only mark daemon ready once containers are up -->
 * lxd: 値が削除された場合、デーモンの設定項目を適切に確認するようになりました <!-- Properly validate daemon keys on unset -->(Issue #2698)
 * lxd: サブコマンドのコードをリファクタリングしました <!-- Refactoring of sub-command code -->
 * lxd: HTTPS アドレスの更新時にもカスタムの http サーバを使用するようになりました <!-- Use our custom http server when updating HTTPS address too -->
 * lxd/containers: コンテナ生成時の基本的なログ出力を追加しました <!-- Add basic logging to container creation -->
 * lxd/containers: ネットワークの設定項目を設定する関数の競合状態を避けるようにしました <!-- Avoid race condition in network fill function -->
 * lxd/containers: lxc.syslog と lxc.ephemeral をブラックリストに追加しました (lxc の設定項目で lxd で使用しない項目に追加)<!-- Blacklist lxc.syslog and lxc.ephemeral -->
 * lxd/containers: 残ったテンポラリファイルを消去するようにしました <!-- Cleanup leftover temp file -->
 * lxd/containers: exec 実行時にクリーンに exit できるように、バックグラウンドタスクを検出するようになりました <!-- Detect background tasks to allow clean exit on exec -->
 * lxd/containers: 正しい順序でマウントを行うようになりました <!-- Do mounts in the right order -->(Issue #2717)
 * lxd/containers: last\_state.power を 2 度記録しないようになりました <!-- Don't record last\_state.power twice -->
 * lxd/containers: コンテナ状態 (訳注: last\_state.power) の記録を修正しました <!-- Fix container state recording -->(Issue #2686)
 * lxd/containers: major/minor デバイス番号を設定するデバイスのホットプラグを修正しました <!-- Fix device hotplug with major/minor set -->
 * lxd/containers: ファイルの push のエラーハンドリングを修正しました <!-- Fix file push error handling -->
 * lxd/containers: file\_manip コマンドのロギングを修正しました <!-- Fix logging for file\_manip commands -->
 * lxd/containers: FromLXCState 関数 (訳注: LXC コンテナの状態を返す関数) を shared の外 (訳注: LXC コンテナの処理部分) へ移動させました <!-- Move FromLXCState out of shared -->
 * lxd/containers: ディレクトリの置換時に明確にエラーを返すようになりました <!-- Return a clear error when replacing a directory -->(Issue #2668)
 * lxd/containers: create 時の EEXISTS の検出を書き直しました <!-- Rework EEXISTS detection on create -->
 * lxd/networks: ネットワークごとのリースの更新ができるようになりました <!-- Allow for network-specific lease updates -->
 * lxd/networks: DHCP over TCP は実装されていないのでブロックするようにしました <!-- DHCP over TCP has never been implemented -->
 * lxd/nsexec: (訳注: setuid に加えて) setgroups も実行するようにしました <!-- Also call setgroups -->(Issue #2724)
 * lxd/seccomp: seccomp プロファイルの修正を行いました (訳注: LXC がプロファイルの空行からシステムコール番号を読もうとしていたので修正) <!-- Fix generated seccomp profile -->
 * lxd/storage: ContainerStart 関数の引数としてコンテナ名とパスを取るように変更しました (訳注: 以前はコンテナ構造体を取得して内部でコンテナ名とパスを取り出していた)<!-- Change ContainerStart to take the name and path to start -->
 * Makefile: "make dist" を作りなおしました <!-- Rework "make dist" -->
 * shared: アーキテクチャを扱う部分をパッケージ化しました <!-- Give Architecture handling its own package -->
 * shared: IO プログレストラッカー部分をパッケージ化しました <!-- Give IO progress tracker its own package -->
 * shared: simplestreams クライアントをパッケージ化しました <!-- Give simplestreams client its own package -->
 * shared: バージョンを扱う部分をパッケージ化しました <!-- Give version handling its own package -->
 * shared: 独自のログフォーマッターを導入しました <!-- Introduce our own formatter -->
 * shared: 証明書のフィンガープリントを計算するヘルパー関数を作成しました <!-- Make a helper to compute cert fingerprint -->
 * shared: PrintStack の出力をエラーレベルに変更しました (訳注: runtime.Stack の出力部分を debug から error レベルに変更した)<!-- Make PrintStack print at the Error level -->
 * shared: WebSocketUpgrader 変数を network.go へ移動させました (訳注: operation.go から) <!-- Move WebsocketUpgrader to network.go -->
 * shared: idmapset\_test\_linux.go を idmapset\_linux\_test.go にリネームしました <!-- Rename idmapset\_test\_linux.go to idmapset\_linux\_test.go -->
 * shared/idmap: デバッグコードを削除しました <!-- Drop debugging code -->
 * shared/idmap: intersection テストを修正しました <!-- Fix intersection test -->
 * shared/simplestreams: 独自の http ハンドラに依存しなくなりました <!-- Don't depend on custom http handler -->
 * shared/simplestreams: 引数として UserAgent を与えるようにしました <!-- Pass UserAgent as argument -->
 * tests: PKI テストを追加しました <!-- Add pki test -->
 * tests: ホスト上に存在する場合のみ lxdbr0 をアタッチするようにしました <!-- Only attach lxdbr0 if it is present on the host -->
 * tests: テストスイートを起動するコードを簡略化しました <!-- Simplify testsuite spawn code -->
 * tests: lxd のシャットダウンをテストするようにしました <!-- Test lxd shutdown -->

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


## LXD 2.0.8 リリースのお知らせ <!-- LXD 2.0.8 release announcement --><span class="text-muted">2016 年 11 月 24 日<!-- 24th of November 2016 --></span>
<!--
Follow-up bugfix release to fix a regression introduced by the rushed 2.0.7 release.
-->
このリリースは、急いでリリースした 2.0.7 で発生したリグレッションを修正するためのバグフィックスリリースです。

### LXD 2.0.7 以降の変更は以下の通りです <!-- The changes since LXD 2.0.7 are -->

バグ修正 <!-- Bugfixes -->:

 * パブリックなリモートホストのアドレスをつかまなくなりました <!-- Don't grab addresses from public remotes -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


## LXD 2.6.2 リリースのお知らせ <!-- LXD 2.6.2 release announcement --><span class="text-muted">2016 年 11 月 24 日 <!-- 24th of November 2016 --></span>
<!--
Follow-up bugfix release to fix a regression introduced by the rushed 2.6.1 release.
-->
このリリースは、急いでリリースした 2.6.1 で発生したリグレッションを修正するためのバグフィックスリリースです。

### このリリースに含まれる変更点 <!-- The changes in this release include -->

バグ修正 <!-- Bugfixes -->:

 * パブリックなリモートホストのアドレスをつかまなくなりました <!-- Don't grab addresses from public remotes -->

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


## LXD 2.0.7 リリースのお知らせ <!-- LXD 2.0.7 release announcement --><span class="text-muted">2016 年 11 月 24 日<!-- 24th of November 2016 --></span>
<!--
This is an emergency bugfix release to fix a critical regression in LXD 2.0.6.
-->
このリリースは LXD 2.0.6 における深刻なリグレッションを修正するための緊急のバグフィックスリリースです。

<!--
The regression was causing pre-existing unprivileged containers to  
potentially start as privileged containers upon restart.
-->
このリグレッションによって、既存の非特権コンテナが、再起動時に特権コンテナとして起動してしまう可能性がありました。

### LXD 2.0.6 以降の変更は以下の通りです <!-- The changes since LXD 2.0.6 are -->

バグ修正<!-- Bugfixes -->:

 * extra/bash: コンテナリストのパースを改善しました <!-- Better parse containers list -->
 * lxc/copy: コンテナのコピーがより安定するようになりました <!-- Make container copy more robust -->(Issue #2640)
 * lxd/containers: 特権コンテナに idmap を割り当てないようにしました <!-- Don't assign idmaps to privileged containers -->
 * lxd/containers: 古いコンテナをパースする際に壊さなくなりました <!-- Don't break when parsing old containers -->
 * lxd/containers: テンプレートを重複して適用しなくなりました <!-- Don't double apply templates -->
 * lxd/containers: 並列でのマップのイテレーションと変更を修正しました <!-- Fix concurrent map iteration+modification -->
 * lxd/containers: 事前に id のマッピングがされていたコンテナの id マッピングの扱いを修正しました <!-- Fix idmap handling of pre-idmap containers -->(Issue #2644)
 * tests: ファイルテンプレートに対するテストを追加しました <!-- Add tests for file templating -->(Issue #2642)

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


## LXD 2.6.1 リリースのお知らせ <!-- LXD 2.6.1 release announcement --><span class="text-muted">2016 年 11 月 24 日<!-- 24th of November 2016 --></span>
<!--
This is an emergency bugfix release to fix a critical regression in LXD 2.6.
-->
このリリースは LXD 2.6 における深刻なリグレッションを修正するための緊急のバグフィックスリリースです。

<!--
The regression was causing pre-existing unpriivleged containers to  
potentially start as privileged containers upon restart.
-->
このリグレッションによって、既存の非特権コンテナが、再起動時に特権コンテナとして起動してしまう可能性がありました。

### このリリースに含まれる変更点 <!-- The changes in this release include -->

バグ修正 <!-- Bugfixes -->:

 * extra/bash: コンテナリストのパースを改善しました <!-- Better parse containers list -->
 * lxc/copy: コンテナのコピーがより安定するようになりました <!-- Make container copy more robust -->(Issue #2640)
 * lxc/init: lxc の警告から unicode の文字を削除しました <!-- Remove unicode character from lxc warning -->
 * lxd/containers: 特権コンテナに idmap を割り当てないようにしました <!-- Don't assign idmaps to privileged containers -->
 * lxd/containers: 古いコンテナをパースする際に壊さなくなりました <!-- Don't break when parsing old containers -->
 * lxd/containers: テンプレートを重複して適用しなくなりました <!-- Don't double apply templates -->
 * lxd/containers: 並列でのマップのイテレーションと変更を修正しました <!-- Fix concurrent map iteration+modification -->
 * lxd/containers: 事前に id のマッピングがされていたコンテナの id マッピングの扱いを修正しました <!-- Fix idmap handling of pre-idmap containers -->(Issue #2644)
 * tests: ファイルテンプレートに対するテストを追加しました <!-- Add tests for file templating -->(Issue #2642)

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


## LXD 2.0.6 リリースのお知らせ <!-- LXD 2.0.6 release announcement --><span class="text-muted">2016 年 11 月 23 日 <!-- 23rd of November 2016 --></span>
<!--
This is the sixth bugfix release for LXD 2.0.
-->
このリリースは LXD 2.0 の 6 回目のバグフィックスリリースです。

### LXD 2.0.5 以降の変更は以下の通りです <!-- The changes since LXD 2.0.5 are -->
<!-- Minor improvements -->細かな改良点:

 * コンテナごとに特定の uid/gid マップが使える機能のサポートを追加しました (userns-idmap.md を参照してください) <!-- Support for container specific uid/gid maps (see userns-idmap.md) -->

<!-- Bugfixes -->バグ修正:

 * appveyor: appveyor の設定を追加しました <!-- Add config to git -->(Issue #2537)
 * appveyor: 修正前にファイルのクリーンアップを行いました <!-- Cleanup appveyor.yml before modifications -->
 * appveyor: 名前にプラットフォームを示すものを含むアーカイブを作成するようになりました <!-- Create archive with platform specifier in its name -->
 * appveyor: テスト名と時間を詳細に表示するようにしました <!-- Do verbose testing for test names and timings -->
 * appveyor: ダウンロード用にコンパイル済みのバイナリを出力するようになりました <!-- Publish compiled binaries for download -->
 * client: 進捗処理を実装し直しました <!-- Rework progress handling -->
 * doc: ハッキングガイドを追加しました <!-- Add hacking guide --> (debugging.md)
 * doc: README に公式に Windows のサポートについて追加しました <!-- Add official Windows support in README -->
 * doc: README 記載の、必要とされる liblxc のバージョンを上げました <!-- Bump liblxc version required in README -->
 * doc: rest-api 文書内の API エンドポイントの記載をソートしました <!-- Sort API endpoints in rest-api.md -->
 * doc: README に docker のインストールの詳細を追加しました <!-- Update README to specify docker installation details -->
 * doc: 動作環境を更新し、LXC 2.0.0 以上が必要であると記載しました <!-- Update requirements, we actually require 2.0.0 or higher -->
 * doc: rest-api 文書内でメソッドの並びを統一しました <!-- Use consistent method ordering in rest-api.md -->
 * extra/bash: クライアントコマンドの bash-completion でパラメータに dash が使えるようになりました <!-- Allow dash in parameters to lxc-client bash-completion -->
 * extra/bash: クライアントコマンドの \_lxd\_profiles を修正しました <!-- Fix \_lxd\_profiles in lxc-client bash-completion -->
 * extra/lxc-to-lxd: コンテナが存在しない場合のエラー表示を行うようにしました <!-- Better output with no container -->
 * extra/lxc-to-lxd: 変換元のパスが存在するかどうかチェックするようになりました <!-- Check that source path exists --> (disk) (Issue #2572)
 * extra/lxc-to-lxd: 一貫性のあるログ出力をおこなうようにしました <!-- Consistent logging -->
 * extra/lxc-to-lxd: 実行中のコンテナに対する dry-run で失敗しないようになりました <!-- Don't fail dry-run with runnning containers -->
 * extra/lxc-to-lxd: pylxd への依存をなくしました <!-- Drop dependency on pylxd -->
 * extra/lxc-to-lxd: lxdpath の扱いを修正しました <!-- Fix lxdpath handling -->
 * extra/lxc-to-lxd: 出力を整えました <!-- Formatting -->
 * extra/lxc-to-lxd: lxc.aa\_profile が設定されている場合は設定を移行するようになりました <!-- Migrate lxc.aa\_profile if set -->
 * extra/lxc-to-lxd: 結果を表示し、正しい終了コードを返すようになりました <!-- Print summary and proper exit code -->
 * lxc/copy: 成功したマーカーとして operation を使わないようにしました <!-- Don't use the operation as a marker of success -->
 * lxc/copy: コピーソース側の操作の完了を待つようにしました <!-- Wait on the source operation too -->
 * lxc/delete: help を更新しました <!-- update help text -->
 * lxc/exec: Windows では term を "dumb" に設定するようにしました <!-- Set term to "dumb" on windows -->(Issue #2288)
 * lxc/finger: help を更新しました <!-- update help text -->
 * lxc: Windows と Mac でのテストを修正しました <!-- Fix tests on Windows/Mac -->
 * lxc/list: ヘルプメッセージの typo を修正しました <!-- Fix typo in help message -->
 * lxc/remote: Go 開発版での remote add を修正しました <!-- Fix remote add with Go tip -->
 * lxc/restore: help を更新しました <!-- update help text -->
 * lxc: yaml の拡張子として .yaml を使うようにしました <!-- Use .yaml as the yaml extension in examples -->
 * lxd/certificates: ドキュメント記載の証明書フィールドをすべて export しました <!-- Export all documented certificate fields -->
 * lxd/containers: コンテナに /snap のみが存在する場合でも、/snap/bin を PATH に含めるようになりました <!-- Add /snap/bin to PATH even if only /snap exists -->
 * lxd/containers: OnStart で何らかのエラーが発生したとき、AppArmor 関連のクリーンアップをするようにしました <!-- Also clean up apparmor stuff in OnStart when something fails -->
 * lxd/containers: file の操作時に userns にアタッチするようになりました <!-- Attach to userns on file operations -->
 * lxd/containers: mkdir の失敗をよりわかりやすく表示するようにしました <!-- Be more verbose on mkdir failure -->
 * lxd/containers: 並列の stop/shutdown を改良しました <!-- Better handle concurrent stop/shutdown -->
 * lxd/containers: OnStop 内でエラーをキャッチして返すようにしました <!-- Catch and return more errors in OnStop -->
 * lxd/containers: コンテナの消去を失敗した際のエラー表示をわかりやすくしました <!-- Clarify container delete failure error -->
 * lxd/containers: 再起動時に一時的な (ephemeral) コンテナを破棄しないようにしました <!--  Don't destroy ephemeral container on restart -->(Issue #2555)
 * lxd/containers: 一時的なコンテナを二重に消去しなくなりました <!-- Don't double delete ephemeral containers -->
 * lxd/containers: 正しくないログを表示しなくなりました <!-- Don't show invalid logs -->
 * lxd/containers: 4.8 以上のカーネルで forkmount が動作するように修正しました <!-- Fix forkmount to work with 4.8 and higher -->
 * lxd/containers: export 時の不適切なメタデータファイル名を修正しました <!-- Fix invalid filename of metadata on export -->(Issue #2467)
 * lxd/containers: update 時の設定のバリデーションを改良しました <!-- Improve config validation on update -->
 * lxd/containers: コンテナのエラーハンドリングを改良しました <!--Improve container error handling -->
 * lxd/containers: コンテナのロックメカニズムを改良しました <!-- Improve container locking mechanism -->(Issue #2612)
 * lxd/containers: OnStart/OnStop hook のエラーをログに出力するようにしました <!-- log OnStart/OnStop hook errors -->
 * lxd/containers: コンテナの自動起動の信頼性を向上させました <!-- More reliable container autostart -->(Issue #2469)
 * lxd/containers: カーネルモジュールがロードされていない場合のみロードするようにしました <!-- Only load kernel modules if not loaded -->
 * lxd/containers: CPU 割当 (allowance) を適切にバリデートするようになりました <!-- Properly validate CPU allowance -->
 * lxd/containers: メモリ制限を適切にバリデートするようになりました <!-- Properly validate memory limits -->(Issue #2483)
 * lxd/containers: go-lxc のエラーを記録するようになりました <!-- Record the err from go-lxc -->
 * lxd/containers: OnStop のレガシーなコードを削除しました <!-- Remove legacy code from OnStop -->
 * lxd/containers: (訳注: exec で) 使っていないコードの削除を行いました <!-- Remove unused code -->
 * lxd/containers: publish の際にプロパティを保存するようになりました <!-- Save properties on publish -->
 * lxd/containers: LXC (liblxc) のログレベルをデーモンに合わせるようにしました <!-- Set LXC loglevel to match daemon -->(Issue #2528)
 * lxd/containers: raw.lxc の先頭の空白をスキップするようにしました <!-- Skip leading whitespace in raw.lxc -->
 * lxd/containers: ステートフルスタートの際、必要に応じてストレージを起動するようになりました <!-- Start storage when necessary in stateful start -->
 * lxd/containers: stop 時のコンテナの freeze にタイムアウトを設定しました <!-- Timeout container freeze on stop -->
 * lxd/images: ディスクスペース超過による unpack のエラーを検出するようになりました <!-- Detect out of disk space unpack errors -->(Issue #2201)
 * lxd/images: 不必要なイメージのコピーを行わないようにしました <!-- Don't make unnecessary image copies -->(Issue #2508)
 * lxd/images: interval (訳注: images.auto\_update\_interval) が 0 の場合はイメージを更新しないようになりました <!-- Don't update images at all if interval is 0 -->
 * lxd/images: simplestream キャッシュをディスクに保存するようになりました (リモートイメージをオフラインで使用できるようになりました) <!-- Store the simplestreams cache to disk -->(Issue #2487)
 * lxd/init: zfs のカーネルサポートを検出するようになりました <!-- Detect zfs kernel support -->
 * lxd/init: コンテナ内では ZFS を無視するようにしました <!-- Ignore ZFS if in a container -->
 * lxd/main: activateifneeded 関数内で DB が存在しない場合は即座に exit するようになりました <!-- Immediately exit when no DB in activateifneeded -->
 * lxd/migration: ログ収集の競合を修正しました <!-- Fix a race for collecting logs -->
 * lxd/migration: ファイル作成によるデバッグを削除しました <!-- Remove debugging by file creation -->
 * lxd/migration: 適切なタイミングでストレージのマイグレーションを開始するようにしました <!-- Start migration storage at the right time -->(Issue #2505)
 * lxd/storage: ZFS の使用イメージを削除する場合の 10 秒のディレイを修正しました <!-- Fix 10s delay on removing used ZFS images -->(Issue #2617)
 * lxd/storage: directory バックエンドでコピーの間はコンテナをフリーズするようにしました <!-- Freeze before copying in dir backend -->
 * lxd/storage: rsync のコードを簡素化しました <!-- Simplify rsync code -->
 * shared/certificates: IP アドレスをパースする際はより詳細に行うようにしました <!-- Be more thorough when parsing ip addr -->
 * shared: http.Transports の KeepAlive を無効にしました <!-- Disable keepalives in http.Transports -->
 * shared: Linux 特有なテストを移動させました <!-- Move Linux specific tests away -->(Issue #2449)
 * shared/simplestreams: 使っていないプロパティを削除しました <!-- Cleanup unused properties -->
 * tests: LXD\_DEBUG の修正を改良しました <!-- Better fix LXD\_DEBUG -->
 * tests: 残っているコンテナを削除するようになりました <!-- Cleanup leftover containers -->
 * tests: filemanip のテストが main.sh に依存しなくなりました <!-- Don't depend on main.sh for filemanip -->
 * tests: LXD\_VERBOSE を実装しました <!-- Implement LXD\_VERBOSE -->
 * tests: LXD\_DEBUG を設定した状態で冗長な出力を減らしました <!-- Reduce verbosity under LXD\_DEBUG -->
 * travis: クライアントのテストを実行するようにしました <!-- Run the client tests -->
 * travis: Jenkins Go のバージョンにマッチするように更新しました <!-- Update to match Jenkins Go versions -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


## LXD 2.6 リリースのお知らせ <!-- LXD 2.6 release announcement --><span class="text-muted">2016 年 11 月 22 日 <!-- 22nd of November 2016 --></span>
### このリリースに含まれる変更点 <!-- The changes in this release include -->
新機能 <!-- New features-->:

 * コンテナごとに特定の uid/gid マップが使える機能のサポートを追加しました (userns-idmap.md を参照してください) <!-- Support for container specific uid/gid maps (see userns-idmap.md) -->
 * コンテナのマイグレーション中の進捗を送るようになりました (API のみ)<!-- Send progress notification during container migration (API only) -->
 * コピー元のイメージプロパティをコンテナのプロパティにコピーするようになりました (image. ネームスペースのプロパティ) <!-- Copy the source image properties into the container properties (image. namespace) -->

バグ修正 <!-- Bugfixes -->:

 * doc: ハッキングガイドを追加しました <!-- Add hacking guide -->(debugging.md)
 * doc: configuration.md に gpu 向けで抜けていた pci オプションを追加しました <!-- Add missing pci options for gpu in configuration.md -->
 * doc: README 記載の、必要とされる liblxc のバージョンを上げました <!-- Bump liblxc version required in README -->
 * doc: user.network-config を文書化しました <!-- Document user.network-config -->
 * doc: 実行の記録には API 拡張が必要である旨追記しました <!-- Exec recording needs an API extension -->
 * doc: README に docker のインストールの詳細を追加しました <!-- Specify docker installation details in README -->
 * lxc/delete: help を更新しました <!-- Update help text -->
 * lxc/file: Windows での再帰的なファイルの pull/push を修正しました <!-- Fix recursive file pull/push on Windows -->
 * lxc/finger: help を更新しました <!-- Update help text -->
 * lxc/restore: help を更新しました <!-- Update help text -->
 * lxc: 進捗処理を実装し直しました <!-- Rework progress handling -->
 * lxd/containers: 実際に最後に使われた更新エラーを表示するようになりました <!-- Actually surface the last used update error -->
 * lxd/containers: コンテナに /snap のみが存在する場合でも、/snap/bin を PATH に含めるようになりました <!-- Add /snap/bin to PATH even if only /snap exists -->
 * lxd/containers: file の操作時に userns にアタッチするようになりました <!-- Attach to userns on file operations -->
 * lxd/containers: 並列の stop/shutdown を改良しました <!-- Better handle concurent stop/shutdown -->
 * lxd/containers: コンテナの消去を失敗した際のエラー表示をわかりやすくしました <!-- Clarify container delete failure error -->
 * lxd/containers: --debug モードを指定した場合は liblxc のログレベルを正しく debug に設定するようになりました <!-- Correctly set liblxc loglevel to debug when in \-\-debug mode -->
 * lxd/containers: 一時的なコンテナを二重に消去しなくなりました <!-- Don't double delete ephemeral containers -->
 * lxd/containers: コンテナのエラーハンドリングを改良しました <!-- Improve container error handling -->
 * lxd/containers: コンテナのロックメカニズムを改良しました <!-- Improve container locking mechanism -->(Issue #2612)
 * lxd/containers: publish の際にプロパティを保存するようになりました <!-- Save properties on publish -->
 * lxd/containers: raw.lxc の先頭の空白をスキップするようにしました <!-- Skip leading whitespace in raw.lxc -->
 * lxd/containers: ステートフルスタートの際、必要に応じてストレージを起動するようになりました <!-- Start storage when necessary during stateful start -->
 * lxd/containers: stop 時のコンテナの freeze にタイムアウトを設定しました <!-- Timeout container freeze on stop -->
 * lxd/containers: ネットワーク経由の転送時にスピードをトラッキングするようになりました <!-- Track speed during network transfers -->
 * lxd/images: interval (訳注: images.auto\_update\_interval) が 0 の場合はイメージを更新しないようになりました <!-- Don't update images at all if interval is 0 -->
 * lxd/main: activateifneeded 関数内で DB が存在しない場合は即座に exit するようになりました <!-- Immediately exit when no DB in activateifneeded -->
 * lxd/networks: checkNetwork 内でのマイナーな typo を修正しました <!-- Fixed minor typo in checkNetwork -->
 * lxd/networks: FAN ブリッジ上で dnsmasq を起動するようになりました <!-- Spawn dnsmasq on FAN bridges -->
 * lxd/storage: ZFS の使用イメージを削除する場合の 10 秒のディレイを修正しました <!-- Fix 10s delay on removing ZFS used images -->(Issue #2617)
 * lxd/storage: directory バックエンドでコピーの間はコンテナをフリーズするようにしました <!-- Freeze container during copy on directory backend -->
 * scripts/lxc-to-lxd: コンテナが存在しない場合のエラー表示を行うようにしました <!-- Better output with no container -->
 * scripts/lxc-to-lxd: 変換元のパスが存在するかどうかチェックするようになりました <!-- Check that source path exists -->(disk) (Issue #2572)
 * scripts/lxc-to-lxd: 一貫性のあるログ出力をおこなうようにしました <!-- Consistent logging -->
 * scripts/lxc-to-lxd: 実行中のコンテナに対する dry-run で失敗しないようになりました <!-- Don't fail dry-run with runnning containers -->
 * scripts/lxc-to-lxd: pylxd への依存をなくしました <!-- Drop dependency on pylxd -->
 * scripts/lxc-to-lxd: lxdpath の扱いを修正しました <!-- Fix lxdpath handling -->
 * scripts/lxc-to-lxd: 出力を整えました <!-- Formatting -->
 * scripts/lxc-to-lxd: lxc.aa\_profile が設定されている場合は設定を移行するようになりました <!-- Migrate lxc.aa\_profile if set -->
 * scripts/lxc-to-lxd: 結果を表示し、正しい終了コードを返すようになりました <!-- Print summary and proper exit code -->
 * shared/idmapset: Intersects 関数内の typo を修正しました <!-- Fix typo in Intersects -->
 * shared/simplestreams: 使っていないプロパティを削除しました <!-- Cleanup unused properties -->
 * tests: 残っているコンテナを削除するようになりました <!-- Cleanup leftover containers -->
 * tests: filemanip のテストが main.sh に依存しなくなりました <!-- Don't depend on main.sh for filemanip -->
 * tests: 冗長な出力を減らす LXD\_VERBOSE を実装しました <!-- Implement LXD\_VERBOSE for reduced verbosity -->
 * tests: LXD\_DEBUG を設定した状態で冗長な出力を減らしました <!-- Reduce verbosity under LXD\_DEBUG -->

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


## LXD 2.5 リリースのお知らせ <!-- LXD 2.5 release announcement --><span class="text-muted">2016 年 10 月 25 日 <!-- 25th of October 2016 --></span>
### このリリースに含まれる変更点 <!-- The changes in this release include -->
新機能 <!-- New features -->:

 * lxc/remote: 新しいリモートホストを FQDN/IP で追加できるようになりました (name なしで) <!-- Allow adding a new remote just by FQDN/IP (without a name) -->
 * lxd/containers: API に exec の出力を記録する機能を実装しました <!-- Implement exec output recording in the API -->
 * lxd/images: simplestream キャッシュをディスクに保存するようになりました (リモートイメージをオフラインで使用できるようになりました) <!-- Store the simplestreams cache to disk (allows for offline use of those remote images) -->
 * lxd/certificates: 証明書の PUT/PATCH のサポートを追加しました <!-- Add support for PUT/PATCH of certificates -->
 * lxd/containers: exec セッション中のシグナルのフォワーディングをサポートしました <!-- Support signal forwarding in exec session -->
 * lxd/containers: GPU のホットプラグのサポートを追加しました (デバイスタイプ "gpu")<!-- Add support for GPU hotplug ("gpu" device type) -->

バグ修正 <!-- Bugfixes -->:

 * appveyor: appveyor の設定を追加しました <!-- Add appveyor config to git -->(Issue #2537)
 * client: http.Transports の KeepAlive を無効にしました <!-- Disable keepalives in http.Transports -->
 * client: Windows と Mac 上でのクライアントテストを修正しました <!-- Fix tests of client on Windows/Mac -->
 * doc: README に公式に Windows のサポートについて追加しました <!-- Add official Windows support to README -->
 * doc: rest-api 文書内の API エンドポイントの記載をソートしました <!-- Sort API endpoints in rest-api -->
 * doc: rest-api 文書内でメソッドの並びを統一しました <!-- Use consistent method ordering in rest-api -->
 * doc: すべてスペースを使うようにしました <!-- Use spaces everywhere -->
 * doc: 動作環境を更新し、LXC 2.0.0 以上が必要であると記載しました <!-- We actually require 2.0.0 or higher -->
 * doc: github の markdown レンダラ向けに調整を行いました <!-- Workaround github markdown renderer -->
 * examples: yaml の拡張子として .yaml を使うようにしました <!-- Use .yaml as the yaml extension -->
 * extra: クライアントコマンドの bash-completion に network コマンドを追加しました <!-- Added the command network to lxc-client bash-completion -->
 * extra: クライアントコマンドの bash-completion でパラメータに dash が使えるようになりました <!-- Allow dash in parameters to lxc-client bash-completion -->
 * extra: クライアントコマンドの \_lxd\_profiles を修正しました <!-- Fix \_lxd\_profiles in lxc-client bash-completion -->
 * lxc/copy: 成功したマーカーとして operation を使わないようにしました <!-- Don't use the operation as a marker of success -->
 * lxc/copy: コピーソース側の操作の完了を待つようにしました <!-- Wait on the source operation too -->
 * lxc/exec: Windows では term を "dumb" に設定するようにしました <!-- Set term to "dumb" on windows -->(Issue #2288)
 * lxc/file: ヘルプのtypoを修正しました <!-- Fix help typo -->
 * lxc/file: mkdir -p / を修正しました <!-- Fix mkdir -p / -->
 * lxc/file: ファイルをサーバに送る前にパスを正規化するようにしました <!-- Normalize paths before sending them to the server -->(Issue #2557)
 * lxc/init: -n に対する nictype の値の typo を修正しました <!-- Fix typo in nictype value for \-n -->
 * lxc/list: lxc list のヘルプ内の typo を修正しました <!-- Fix typo in lxc list help -->
 * lxc/push: typo を修正しました <!-- Fix typo -->(Issue #2501)
 * lxc/remote: Go 開発版での remote add を修正しました <!-- Fix remote add with Go tip -->
 * lxd/certificates: ドキュメント記載の証明書フィールドをすべて export しました <!-- Export all documented certificate fields -->
 * lxd/containers: mkdir の失敗をよりわかりやすく表示するようにしました <!-- Be more verbose on mkdir failure -->
 * lxd/containers: OnStop 内でエラーをキャッチして返すようにしました <!-- Catch and return more errors in OnStop -->
 * lxd/containers: OnStart で何らかのエラーが発生したとき、AppArmor 関連のクリーンアップをするようにしました <!-- Clean up apparmor stuff in OnStart when something fails -->
 * lxd/containers: 再起動時に一時的な (ephemeral) コンテナを破棄しないようにしました <!-- Don't destroy ephemeral container on restart -->(Issue #2555)
 * lxd/containers: 正しくないログを表示しなくなりました <!-- Don't show invalid logs -->
 * lxd/containers: exec: 使っていないコードの削除を行いました <!-- Remove unused code -->
 * lxd/containers: 4.8 以上のカーネルで forkmount が動作するように修正しました <!-- Fix forkmount to work with 4.8 and higher -->
 * lxd/containers: seccomp のエラーメッセージを修正しました <!-- Fix wording of seccomp error message -->
 * lxd/containers: update 時の設定のバリデーションを改良しました <!-- Improve config validation on update -->
 * lxd/containers: OnStart/OnStop hook のエラーをログに出力するようにしました <!-- Log OnStart/OnStop hook errors -->
 * lxd/containers: コンテナの自動起動の信頼性を向上させました <!-- More reliable container autostart -->(Issue #2469)
 * lxd/containers: カーネルモジュールがロードされていない場合のみロードするようにしました <!-- Only load kernel modules if not loaded -->
 * lxd/containers: CPU 割当 (allowance) を適切にバリデートするようになりました <!-- Properly validate CPU allowance -->
 * lxd/containers: メモリ制限を適切にバリデートするようになりました <!-- Properly validate memory limits -->(Issue #2483)
 * lxd/containers: go-lxc のエラーを記録するようになりました <!-- Record the err from go-lxc -->
 * lxd/containers: OnStop のレガシーなコードを削除しました <!-- Remove legacy code from OnStop -->
 * lxd/containers: 正しいデバイスのタイプをログに記録するようになりました <!-- Report correct dev type in log -->
 * lxd/containers: LXC (liblxc) のログレベルをデーモンに合わせるようにしました <!-- Set LXC loglevel to match daemon -->(Issue #2528)
 * lxd/containers: USB のベンダー ID が必須で、プロダクト ID は必須でなくなるように修正しました <!-- USB vendorid is mandatory, productid isn't -->
 * lxd/devices: netlink 情報をもう少し厳しく扱うようにしました <!-- Be less optimistic about netlink info -->
 * lxd/devices: usb に対してnetlink の DEVNAME エントリを使うようにしました <!-- Use DEVNAME entry of netlink for usb -->
 * lxd/images: ディスクスペース超過による unpack のエラーを検出するようになりました <!-- Detect out of disk space unpack errors -->(Issue #2201)
 * lxd/images: 不必要なイメージのコピーを行わないようにしました <!-- Don't make unnecessary image copies -->(Issue #2508)
 * lxd/images: export 時の不適切なメタデータファイル名を修正しました <!-- Fix invalid filename of metadata on export -->(Issue #2467)
 * lxd/init: zfs のカーネルサポートを検出するようになりました <!-- Detect zfs kernel support -->
 * lxd/init: コンテナ内では ZFS を無視するようにしました <!-- Ignore ZFS if in a container -->
 * lxd/migration: ログ収集の競合を修正しました <!-- Fix a race for collecting logs -->
 * lxd/migration: ファイル作成によるデバッグを削除しました <!-- Remove debugging by file creation -->
 * lxd/migration: 適切なタイミングでストレージのマイグレーションを開始するようにしました <!-- Start migration storage at the right time -->(Issue #2505)
 * lxd/networks: 常に dnsmasq との通信を許可するようにしました <!-- Always allow communication with dnsmasq -->(Issue #2506)
 * lxd/networks: IPv6 で --enable-ra を常に与えられるようになりました <!-- Always pass \-\-enable-ra with IPv6 -->(Issue #2481)
 * lxd/networks: DHCP チェックサムを埋めるようにしました <!-- Fill DHCP checksums -->
 * lxd/networks: IPv6 の DHCP ロジックを修正しました <!-- Fix IPv6 DHCP logic -->
 * shared/cert: IP アドレスのパースを詳細に行うようにしました <!-- be more thorough when parsing ip addr -->
 * shared: Linux 特有なテストを移動させました <!-- Move Linux specific tests away -->(Issue #2449)
 * travis: クライアントのテストを実行するようにしました <!-- Run the client tests -->
 * travis: Jenkins Go のバージョンにマッチするように更新しました <!-- Update to match Jenkins Go versions -->

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


## LXD 2.4.1 リリースのお知らせ <!-- LXD 2.4.1 release announcement --><span class="text-muted">2016 年 10 月 5 日<!-- 5th of October 2016 --></span>

<!--
The primary goal for this release is to publish release tarballs that actually report LXD  
as "2.4.1" rather than "2.3" as the release ones mistakenly did.
-->
このリリースの主な目的は、リリースのミスによりバージョン表示が LXD "2.3" となっていたのを、実際に "2.4.1" と表示させるためのリリースを行うことです。

<!--
We're including a couple of bugfixes in the process too.
-->
リリースにはいくつかのバグフィックスも含んでいます。

### このリリースに含まれる変更点 <!-- The changes in this release include -->

バグ修正 <!-- Bugfixes -->:

 * shared: logging のインポートを削除しました <!-- Remove logging import -->
 * tests: 偶然新しい依存関係が生じないようにチェックするテストを追加しました <!-- add a test to make sure we don't accidentally include new deps -->
 * extras: lxc クライアントの bash-completion に shell コマンドを追加しました <!-- Added the command shell to lxc-client bash-completion -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。


## LXD 2.0.5 リリースのお知らせ <!-- LXD 2.0.5 release announcement --><span class="text-muted">2016 年 10 月 5 日 <!-- 5th of October 2016 --></span>

<!--
This is the fifth bugfix release for LXD 2.0.
-->
このリリースは LXD 2.0 の 5 回目のバグフィックスリリースです。

### LXD 2.0.4 以降の変更は以下の通りです <!-- The changes since LXD 2.0.4 are -->

<!--
Note that several migration fixes included in this release depend on a newer go-lxc.  
If building manually, you may need to update your copy of go-lxc.  
If building for a distribution, you may need to update your packaged version of go-lxc to a newer snapshot.
-->
このリリースに含まれるマイグレーションに関する修正のいくつかは、新しい go-lxc に依存していることに注意してください。
マニュアルでビルドする場合、go-lxc のコピーも更新する必要があるでしょう。
ディストリビューション用のビルドの場合、go-lxc のパッケージバージョンを新しい物に更新する必要があるでしょう。

細かな改良点 <!-- Minor improvements -->:

 * AppArmor の名前空間とスタッキングをサポートしました <!-- Support for AppArmor namespacing and stacking -->
 * LXD デーモンのロギングをよりわかりやすく、より一般的に役立つように作りなおしました <!-- Rework LXD daemon logging to be cleaner and more generally useful -->(Issue #1928)
 * "lxc info CONTAINER" はコンテナが存在するリモートホスト名を表示するようになりました <!-- "lxc info CONTAINER" now shows the name of the remote for the container -->
 * クライアントのエラーメッセージにコンテナが存在するリモートホスト名を表示するようになりました <!-- Client errors now include the remote the container is on -->
 * コンテナに /snap/bin が存在する場合は PATH に含めるようになりました <!-- /snap/bin is included to PATH if present in the container -->

バグ修正 <!-- Bugfixes -->:

 * doc: txqueuelen の調整について追加しました <!-- Add txqueuelen tweak. -->
 * doc: btrfs のネストの際は user\_subvol\_rm\_allowed オプション付きでマウントする必要があることを追記しました <!-- Clarify that user\_subvol\_rm\_allowed is needed for btrfs nesting -->(Issue #2338)
 * doc: environment.md の表のスタイルを修正しました <!-- Fix the table style of environment.md -->(Issue: #2410)
 * doc: production-setup.md の typo の修正 <!-- Fix typos in production-setup.md -->
 * doc: production-setup.md 内の行末のスペースを削除しました <!-- Remove trailing spaces in production-setup.md -->
 * doc: スペースのみの行を削除しました <!-- Spacing cleanup -->
 * extras: (訳注: bash completion で) start、stop、exec コマンドに対してコンテナ状態のチェックを行うようになりました <!-- Containers state checking for start, stop and exec commands -->
 * extras: LXC から LXD へのコンテナ変換の修正を行いました <!-- Fixed container convert from LXC to LXD -->
 * fuidshift: パスのシンボリックリンクを展開するようになりました <!-- expand symlinks to last path component -->
 * lxc: 使っていない httpAddr プロパティを削除しました <!-- Drop unused httpAddr property -->
 * lxc/exec: lxc exec のヘルプに -- args を追加しました <!-- Document lxc exec \-\- args -->
 * lxc/exec: 環境変数を取得する際、go 1.5 で導入された os.LookupEnv を使用するようになりました <!-- Use os.LookupEnv from go 1.5 to find environment vars -->
 * lxc: config.go のヘルプ内の例の出力位置を調整しました <!-- Fix spacing alignment in config.go's examples -->
 * lxc/help: エラーを stdout に出力するようにしました <!-- Send error to stdout -->(Issue #2301)
 * lxd/apparmor: 非特権の場合は制限を緩くしました <!-- Be less restrictive when unprivileged -->
 * lxd-bridge: dnsmasq の実行が失敗したときにエラーになるようになりました <!-- Fail on dnsmasq failure -->
 * lxd-bridge: lxd-bridge-proxy でクラッシュする問題を修正しました <!-- Fix crash in lxd-bridge-proxy -->
 * lxd: 名前の衝突を一貫性を持って処理するようになりました <!-- Consistently handle name conflicts -->
 * lxd/container: あらゆる設定キーを削除できるようになりました <!-- Allow unsetting any config key -->
 * lxd/container\_lxc: xattrs を扱うようになりました <!-- handle xattrs -->
 * lxd/container: コンフリクトの際、petname の生成をリトライするようになりました <!-- Retry generating petnames -->
 * lxd/container: pause されたコンテナに対して force オプションを指定せずに "restart" を実行するとエラーを返すようになりました <!-- Return an error on "restart" without force of a paused container -->(Issue #2311)
 * lxd/container: コンテナ操作のロック処理を見直しました <!-- Rework container operation locking -->(Issue #2297)
 * lxd/daemon: ソケットのアクティベーションを自身で行うようにしました <!-- Do our own socket activation -->(Issue #2333)
 * lxd/db: int64 の扱いを修正しました <!-- Fix int64 handling -->
 * lxd/db: スキーマのアップデート時にデータベースのバックアップを取得するようになりました <!-- Make a database backup on schema updates -->(Issue #2299)
 * lxd/db: DB スキーマの更新処理を作りなおしました <!-- Rework DB schema updates -->
 * lxd/image: lzma alone ファイルフォーマットのサポートに関する修正を行いました <!-- Fix support for lzma alone file format -->(Issue #2360)
 * lxd/image: メモリの少ないシステムでの squashfs の調整を行いました <!-- Tweak squashfs for low-memory systems -->(Issue #2382)
 * lxd/init: LXD がバインドするアドレスのデフォルトを all (::) に変更しました <!-- Change default host to all (::) -->
 * lxd/init: バリデーション関数を一貫性があるように変更しました <!-- Change validation functions for consistency -->
 * lxd/init: "zfs" が使用できない場合のデフォルトを "dir" にしました <!-- Default to "dir" when "zfs" isn't available -->(Issue #2340)
 * lxd/init: IP アドレスとして "all" を与えてもエラーにならないようにしました <!-- Don't fail when passed "all" as an IP -->
 * lxd/init: 新しい zfs pool で圧縮を有効にしました <!-- Enable compression on new zfs pools -->
 * lxd/init: ZFS プールのデフォルト値として表示していた値を修正しました <!-- Fix listed default value for ZFS pool -->(Issue #2339)
 * lxd/init: パーティションのサイズ決めをよりインテリジェントなロジックを使うようにしました <!-- use more intelligent logic for partition sizing -->
 * lxd/migration: 異なる CoW ベースのバックエンドタイプをまたいだコピーを実質的にサポートしました <!-- Actually support copying across different CoW based backend types -->(Issue #2359)
 * lxd/migration: c/r エラーに警告も表示するようになりました <!-- Also show warnings on c/r errors -->
 * lxd/migration: ghost limit を増やしました <!-- Bump ghost limit -->
 * lxd/migration: 利用できない場合は ActionScript を使わないようにしました <!-- Don't use ActionScript if it's not available -->
 * lxd/migration: スナップショットの設定を保存するようになりました <!-- Preserve snapshot configuration -->
 * lxd/migration: リストアが失敗した場合にダンプしたコンテナを再開させるようになりました <!-- Resume dumped container on failed restore -->
 * lxd/migration: liblxc の新しい preserves\_inodes 機能を使うようになりました <!-- Use liblxc's new preserves\_inodes feature -->
 * lxd/network: ボンディングの検出を行うようになりました <!-- Detect bonds -->
 * lxd/network: openvswitch の検出を行うようになりました <!-- Detect openvswitch -->
 * lxd/network: networkIsInUse を修正しました <!-- Fix networkIsInUse -->
 * lxd/network: isOnBridge の移動とリネームを行いました <!-- Move and rename isOnBridge -->
 * lxd/profile: プロファイル名が存在する場合のエラーをわかりやすくしました <!-- Cleaner error on existing profile name -->
 * lxd/profile: プロファイルの消去の際、適切にクリーンアップするようにしました <!-- Properly cleanup on profile removal -->(Issue #2347)
 * lxd/storage: コンテナのコピーの際、すべてをコピーするようになりました <!-- Copy everything on container copy -->(Issue #2371)
 * lxd/storage: ZFS プールに関する追加のチェックと設定をするようになりました <!-- Extra checks and config for ZFS pools -->
 * Makefile: テストの依存関係を再帰的に include しないようにしました <!-- Don't recursively include test deps -->
 * README: AppVeyor のバッジを追加しました (Windows のテスト) <!-- Add AppVeyor badge (Windows testing) -->
 * shared: Windows 用に GetOwner スタブを追加しました <!-- Add GetOwner stub for Windows -->(fixes #2438)
 * shared: 適切な拡張鍵用途 (Extended Key Usage) を持つクライアント証明書を生成するようになりました <!-- Generate client certificate with proper extended usage info -->
 * shared: TestReaderToChannel の転送を小さくしました <!-- Make TestReaderToChannel transfer smaller -->
 * shared: 新しいラッパー関数 RunCommand を追加しました <!-- New RunCommand wrapper function -->
 * tests: 偶然新しい依存関係が生じないようにチェックするテストを追加しました <!-- Add a test to make sure we don't accidentally include new deps -->
 * tests: GetAllXattr() のテストを追加しました <!-- add test for GetAllXattr() -->
 * tests: apparmor のバージョンチェックを修正しました <!-- Fix apparmor version check -->
 * tests: より新しい shellcheck 対応の修正を行いました <!-- Fix for newer shellcheck -->
 * tests: UTC タイムゾーンを強制するようにしました <!-- Force UTC timezone -->
 * tests: 現在の LXD の残り物だけをチェックするようにしました <!-- Only check leftovers on active LXD -->
 * tests: xattr がサポートされていない場合はテストをスキップするようにしました <!-- skip tests when xatts are not supported -->

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


## LXD 2.4 リリースのお知らせ <!-- LXD 2.4 release announcement --><span class="text-muted">2016 年 10 月 4 日<!-- 4th of October 2016 --></span>

### このリリースに含まれる変更点 <!-- The changes in this release include -->

新機能 <!-- New features -->:

 *  (クライアントでリレーを行う) push ベースのマイグレーション用の API サポートを追加しました<!-- Add API support for push based migration (with a client acting as relay) -->
 * プロファイルに新たに used\_by プロパティを追加しました (networks と同様) <!-- Add a new used\_by property to profiles (similar to networks) -->
 * "lxc profile list" を表を表示するように更新しました <!-- Update "lxc profile list" to show a table -->
 * "lxd init" での NAT の設定をサポートしました <!-- Support configuring NAT through "lxd init" -->

バグ修正 <!-- Bugfixes -->:

 * lxd/init: プロファイルに実際に新しいネットワークを追加するようになりました <!-- Actually add new network to profile -->
 * lxd/init: Typo を修正しました <!-- Typo fix -->
 * lxd/migration: 利用できない場合は ActionScript を使わないようにしました <!-- Don't use ActionScript if it's not available -->
 * lxd/network: ネットワークがない設定ができるようになりました <!-- Allow nil network config -->
 * lxd/network: より適切に部分的に IPv6 を無効化するようになりました <!-- Better deal with partially disabled IPv6 -->
 * lxd/network: 自動 NAT 設定を修正しました <!-- Fix automatic nat settings -->
 * lxd/network: IPv6 フォワーディングロジックを修正しました <!-- Fix IPv6 forwarding logic -->
 * lxd/network: sysctl に関するレアな競合状態を修正しました <!-- Fix rare race condition with sysctl -->
 * lxd/network: lintian が発見した Typo を修正しました <!-- Fix typo discovered by lintian -->
 * lxd/zfs: ZFS プールに関する追加のチェックと設定をするようになりました <!-- Extra checks and config for ZFS pools -->
 * doc: AppVeyor のバッジを追加しました (Windows のテスト) <!-- Add AppVeyor badge (Windows testing) -->
 * Makefile: テストの依存関係を再帰的に include しないようにしました <!-- Don't recursively include test deps -->
 * shared: Windows 用に GetOwner スタブを追加しました <!-- Add GetOwner stub for Windows -->
 * shared: 適切な拡張鍵用途 (Extended Key Usage) を持つクライアント証明書を生成するようになりました <!-- Generate client certificate with proper extended usage info -->
 * test: apparmor バージョンチェックを修正しました <!-- Fix apparmor version check -->
 * test: shellcheck の警告を修正しました <!-- Fix shellcheck warning -->
 * test: UTC タイムゾーンを強制するようにしました <!-- Force UTC timezone -->
 * test: コンテナのクリーンアップをより信頼性高くしました <!-- Make container cleanup more reliable -->

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


## LXD 2.3 リリースのお知らせ <!-- LXD 2.3 release announcement --><span class="text-muted">2016 年 9 月 27 日 <!-- 27th of September 2016 --></span>
<!--
LXD 2.3 includes a few major features we've been working on for months.
-->
LXD 2.3 には私たちがここ数ヶ月取り組んでいたいくつかの主要な機能が含まれています。

<!--
The main one is a completely new set of API endpoints, configuration options and commands.  
This allows creating and configuring bridges through LXD, including IPv4  
and IPv6 connectivity, Ubuntu FAN support, cross-host tunnels with GRE  
or VXLAN, various DNS modes, DHCP configuration and MAC filtering.
-->
その主要なものとは、API エンドポイント、設定オプション、コマンドの完全な新しいセットです。
これにより、IPv4 と IPv6 の接続性、Ubuntu FAN のサポート、GRE または VXLAN を使ったクロスホストのトンネル、様々な DNS モード、DHCP 設定、MAC フィルタリングを含む LXD 経由のブリッジの作成や設定ができるようになりました。

<!--
The other feature we're very excited about is support for AppArmor  
namespaces and stacking. This will allow containers to load apparmor  
profiles and further confine their workloads.
-->
私たちがとてもわくわくしている他の機能は、AppArmor の名前空間とスタッキングのサポートです。
これにより、コンテナが AppArmor のプロファイルをロードし、さらに負荷を制限することができます。

### このリリースに含まれる変更点 <!-- The changes in this release include -->

新機能 <!-- New features -->:

 * 新しいネットワーク管理 API を導入しました <!-- Introduce the new network management API -->
    * /1.0/networks への POST (rest-api.md 参照)<!-- POST to /1.0/networks (see rest-api.md) -->
    * /1.0/networks への PUT (rest-api.md 参照)<!-- PUT to /1.0/networks/NAME (see rest-api.md) -->
    * /1.0/networks への PATCH (rest-api.md 参照)<!-- PATCH to /1.0/networks/NAME (see rest-api.md) -->
    * /1.0/networks への DELETE (rest-api.md 参照)<!-- DELETE to /1.0/networks/NAME (see rest-api.md) -->
    * "lxc network" コマンド <!-- commands -->
    * "lxd init" でのネットワーク設定 <!-- Network configuration in "lxd init" -->
    * デフォルトのプラファイルはネットワーク設定を含まなくなりました <!-- The default profile now comes without network configuration -->
    * 古い lxd-bridge のコードが削除されました <!-- The old lxd-bridge code has been removed -->
    * configuration.md に設定の詳細が追加されました <!-- Details of configuration options in configuration.md -->
 * AppArmor 名前空間とプロファイルのスタッキングのサポート <!-- Support for AppArmor namespaces and profile stacking -->
    * サポートされているカーネルでは、コンテナは AppArmor を使います <!-- On supported kernels, containers will now be able to use apparmor -->
 * デーモンの設定オプションとして新たに storage.lvm\_mount\_options を導入しました <!-- Introduce a new storage.lvm\_mount\_options daemon configuration option -->
 * ログメッセージのプライオリティの見直しと、ログメッセージのためのコンテキストを追加しました <!-- Rework log message priorities and add more context to log messages -->
 * "lxc info" の出力にリモートホスト名を出力するようになりました <!-- "lxc info" now shows the remote name in its output -->
 * クライアントのエラーメッセージにリモートホスト名を出力するようになりました <!-- The client now includes the remote name in error messages -->

バグ修正 <!-- Bugfixes -->:

 * apparmor: 非特権の場合は制限を緩くしました <!-- Be less restrictive when unprivileged -->
 * apparmor: コンテナごとに AppArmor 名前空間を作るようにしました <!-- create an apparmor namespace for each container -->
 * doc: PATCH の追加に伴い rest-api を修正しました <!-- Fix rest-api for PATCH addition -->
 * doc: environment.md の表のスタイルを修正しました <!-- Fix the table sytle of environment.md -->
 * extras: bash completion で start、stop、exec コマンドに対してコンテナ状態のチェックを行うようになりました <!-- Containers state checking for start, stop and exec commands in bash completion -->
 * extras: LXC から LXD へのコンテナ変換の修正を行いました <!-- Fixed container convert from LXC to LXD -->
 * extras: bash completion を現在のオプションに更新しました <!-- Update bash completion for current options -->
 * lxc: 使っていない httpAddr プロパティを削除しました <!-- Drop unused httpAddr property -->
 * lxc/exec: lxc exec のヘルプに -- args を追加しました <!-- Document lxc exec \-\- args -->
 * lxc/file: ターゲットディレクトリへの再帰的な pull を行うようになりました <!-- Make the target directory on recursive pull -->
 * lxd/db: テストの実行時にデータベースのバックアップを取らないようにしました <!-- Don't try to backup the database when running tests -->
 * lxd/db: int64 の扱いを修正しました <!-- Fix int64 handling -->
 * lxd/images: メモリの少ないシステムでの squashfs の調整を行いました <!-- Tweak squashfs for low-memory systems -->
 * lxd/init: バリデーション関数を一貫性があるように変更しました <!-- Change validation functions for consistency -->
 * lxd/init: 新しい zfs pool で圧縮を有効にしました <!-- Enable compression on new zfs pools -->
 * lxd/log: ログ関数用のフォーマットのラッパーを追加しました <!-- Add format wrappers for log functions -->
 * lxd/log: ログ関数用のラッパーを追加しました <!-- Add wrappers for log functions -->
 * lxd/log: 新しいラッパーに移行しました <!-- Transition to new wrappers -->
 * lxd/migration: 異なる CoW ベースのバックエンドタイプをまたいだコピーを実質的にサポートしました <!-- Actually support copying across different CoW based backend types -->
 * lxd/migration: c/r エラーに警告も表示するようになりました <!-- Also show warnings on c/r errors -->
 * lxd/migration: コピーの間、スナップショットの設定を保存するようになりました <!-- Preserve snapshot configuration during copy -->
 * lxd/network: ボンディングの検出を行うようになりました <!-- Detect bonds -->
 * lxd/network: openvswitch を検出するようになりました <!-- Detect openvswitch -->
 * lxd/network: networkIsInUse を修正しました <!-- Fix networkIsInUse -->
 * lxd/network: isOnBridge の移動とリネームを行いました <!-- Move and rename isOnBridge -->
 * shared: 型チェック関数をエクスポートするようになりました <!-- Export type checking functions -->
 * shared: fuidshift: パスのシンボリックリンクを展開するようになりました <!-- Expand symlinks to last path component -->
 * shared: 新しいラッパー関数 RunCommand を追加しました <!-- New RunCommand wrapper function -->
 * snappy: /snap/bin が存在する場合は PATH に追加するようにしました <!-- Add /snap/bin to PATH if present -->

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


## LXD 2.2 リリースのお知らせ <!-- LXD 2.2 release announcement --><span class="text-muted">2016 年 9 月 14 日 <!-- 14th of September 2016 --></span>

### このリリースに含まれる変更点 <!-- The changes in this release include -->

<!--
New features:
-->
新機能:

 * client: "manpage" コマンドを追加しました <!-- Add a "manpage" command -->(Issue #2280)
 * client: エイリアスとして "rename" を追加しました <!-- Add a "rename" alias -->(Issue #2320)
 * client/file: 再帰的なファイルの push/pull ができるようになりました <!-- Recursive file push/pull -->(-r) (Issue #1218)
 * client/file: 再帰的なディレクトリ作成をサポートしました <!-- Support recursive directory creation -->(-p) (Issue #2290)
 * client/info: CPU 使用率が表示されるようになりました <!-- Add cpu usage -->(Issue #1867)
 * client/publish: 圧縮アルゴリズムをオーバーライドできるようになりました <!-- Allow overriding compression algorithm -->(Issue #2296)
 * daemon: スキーマのアップデート時にデータベースのバックアップを取得するようになりました <!-- Make a database backup on schema updates -->(Issue #2299)
 * daemon/container: CPU の使用率情報が提供できるようになりました <!-- Expose CPU usage -->(Issue #1867)
 * daemon/container: 再帰的なファイルの push/pull ができるようになりました <!-- Recursive file push/pull -->(Issue #1218)
 * daemon/image: 圧縮アルゴリズムをオーバーライドできるようになりました <!-- Allow overriding compression algorithm -->(Issue #2296)
 * daemon/init: キャッシュされた古いイメージを自動的に更新するかどうかを尋ねるようになりました <!-- Ask for images.auto\_update\_interval -->(Issue #2167)
 * daemon/storage: 新たに storage.zfs\_use\_refquota オプションを追加しました <!-- Add new storage.zfs\_use\_refquota option -->(Issue #2354)

<!--
Bugfixes:
-->
バグ修正:

 * client/exec: 環境変数を取得する際、go 1.5 で導入された os.LookupEnv を使用するようになりました <!-- Use os.LookupEnv from go 1.5 to find environment vars -->
 * client/help: lxc help を標準出力に出力するように変更しました <!-- Change lxc help to to go to stdout -->(Issue #2301)
 * daemon: 名前の衝突を一貫性を持って処理するようになりました <!-- Consistently handle name conflicts -->
 * daemon/container: あらゆる設定キーを削除できるようになりました <!-- Allow unsetting any config key -->
 * daemon/container: USB デバイス番号の major/minor が入れ替わっていたので修正しました <!-- Fix USB transposed major/minor -->
 * daemon/container: publish の際、xattrs を扱うようになりました <!-- Handle xattrs on publish -->
 * daemon/container: コンフリクトの際、petname の生成をリトライするようになりました <!-- Retry generating petnames on conflict -->
 * daemon/container: pause されたコンテナに対して force オプションを指定せずに "restart" を実行するとエラーを返すようになりました <!-- Return an error on "restart" without force of a paused container -->(Issue #2311)
 * daemon/container: コンテナ操作のロック処理を見直しました <!-- Rework container operation locking -->(Issue #2297)
 * daemon/container: デバイスの接続が切断されたあと、USB バスディレクトリの削除を試みるようになりました <!-- Try to remove the usb bus dir after device disconnect -->(Issue #2306)
 * daemon/container: USB ホットプラグに関する様々なバグ修正を行いました <!-- Various USB hotplug fixes -->(Issue #2312)
 * daemon/dir: コンテナのコピーの際、すべてをコピーするようになりました <!-- Copy everything on container copy -->(Issue #2371)
 * daemon: ソケットのアクティベーションを自身で行うようにしました <!-- Do our own socket activation -->(Issue #2333)
 * daemon/image: lzma alone ファイルフォーマットのサポートに関する修正を行いました <!-- Fix support for lzma alone file format -->(Issue #2360)
 * daemon/init: LXD がバインドするアドレスのデフォルトを all (::) に変更しました <!-- Change default host to all (::) -->
 * daemon/init: "zfs" が使用できない場合のデフォルトを "dir" にしました <!-- Default to "dir" when "zfs" isn't available -->(Issue #2340)
 * daemon/init: ZFS プールのデフォルト値として表示していた値を修正しました <!-- Fix listed default value for ZFS pool -->(Issue #2339)
 * daemon/init: パーティションのサイズ決めをよりインテリジェントなロジックを使うようにしました <!-- Use more intelligent logic for partition sizing -->
 * daemon/profile: プロファイル名が存在する場合のエラーをわかりやすくしました <!-- Cleaner error on existing profile name -->
 * daemon/profile: プロファイルの消去の際、適切にクリーンアップするようにしました <!-- Properly cleanup on profile removal -->(Issue #2347)
 * doc: txqueuelen の調整について追加しました <!-- Add txqueuelen tweak -->
 * doc: btrfs のネストの際は user\_subvol\_rm\_allowed オプション付きでマウントする必要があることを追記しました <!-- Clarify that user\_subvol\_rm\_allowed is needed for btrfs nesting -->(Issue #2338)
 * doc: production-setup.md の typo の修正 <!-- Fix typos in production-setup.md -->
 * doc: api_extensions を api-extensions にリネームしました <!-- Rename api\_extensions to api-extensions -->
 * i18n: 各国語の翻訳リソースファイルを更新し、日本語の翻訳を更新しました <!-- Update po files and Japanese translation -->
 * lxd-bridge: lxd-bridge-proxy でクラッシュする問題を修正しました <!-- Fix crash in lxd-bridge-proxy -->
 * tests: エイリアスのテスト内の競合を修正しました <!-- Fix race in alias test -->
 * tests: TestReaderToChannel の転送を小さくしました <!-- Make TestReaderToChannel transfer smaller -->
 * tests: 現在の LXD の残り物だけをチェックするようにしました <!-- Only check leftovers on active LXD -->

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


## LXD 2.1 リリースのおしらせ <!-- LXD 2.1 release announcement --><span class="text-muted">2016 年 8 月 16 日<!-- 16th of August 2016 --></span>
<!--
LXD 2.1 is the first feature release following LXD 2.0 LTS.
-->
LXD 2.1 は、LXD 2.0 LTS リリース以降初めての、機能の変更と強化が図られたリリースです。

<!--
Note that this release does not have LTS status and as such will not  
benefit from multi-year support or bugfix releases.
-->
このリリースは LTS ではありませんので、複数年にわたるサポートやバグフィックスといった恩恵を受けないことに注意してください。

<!--
For production environments, we recommend that you stick to the LXD 2.0 LTS release.
-->
本番用途では、LXD 2.0 LTS を使い続けることをおすすめします。


### このリリースに含まれる変更点 <!-- The changes in this release include -->

<!--
New features:
-->
新機能:

 * client: デフォルトで `lxc shell` というエイリアスを追加しました <!-- Add a `lxc shell` alias by default -->
 * client: lxc に Unix 風のエイリアスを追加しました <!-- Build unix-like aliases directly into LXC -->(`lxc {cp,ls,mv,rm}`, `lxc image {cp,ls,rm}`, `lxc image alias {ls,rm}`, `lxc remote {ls,mv,rm}`, <!-- and -->`lxc config device {ls,rm}`)
 * client: 要求に応じてクライアント証明書を生成するようになりました <!-- Generate the client certificate on-demand -->
 * client/copy: 追加のプロファイルと設定を指定できるようになりました <!-- Allow additional profiles and config to be set -->
 * client/copy: 同一ホスト上で指定しない場合、ランダムな名前をつけるようになりました <!-- Pick a random name if not specified and same host -->
 * client/image: --format オプションを追加し、json 出力が指定できるようになりました <!-- Add \-\-format and json output -->
 * client/image: 一度に複数のイメージを消去できるようになりました <!-- Allow deleting multiple images at once -->
 * client/list: カラムのキーを設定できるようになりました <!-- Add support for config key columns -->(e.g. `lxc list -c ns,security.privileged:privileged`)
 * client/profile: `lxc profile apply` は `lxc profile assign` になりました<!-- `lxc profile apply` is now `lxc profile assign` -->
 * client/profile: 新しいサブコマンド `lxc profile add` と `lxc profile remove` が追加されました <!-- New `lxc profile add` and `lxc profile remove` sub-commands -->
 * client/version: デフォルトでは version コマンドを表示しなくなりました <!-- Do not show the version command by default -->
 * daemon: グローバルな設定項目 core.https\_allowed\_credentials を追加しました <!-- Add a global core.https\_allowed\_credentials key -->
 * daemon: すべての PUT 呼び出しで ETag をサポートしました <!-- Implement ETag support for all PUT calls -->
 * daemon: PKI 認証を実装しました (doc/lxd-ssl-authentication.md を参照してください)<!-- Implement PKI authentication (see doc/lxd-ssl-authentication.md) -->
 * daemon: PUT をサポートしているエンドポイントすべてに対して PATCH メソッドを実装しました <!-- Implement the PATCH method for all endpoints already supporting PUT -->
 * daemon/container: : コンテナを強制シャットダウンするためのタイムアウトを設定する設定値を追加しました <!-- Add config key for container force shutdown timeout -->(boot.host\_shutdown\_timeout)
 * daemon/container: seccomp に関する設定項目をいくつか追加しました <!-- Add some seccomp knobs -->(security.syscalls.{blacklist,blacklist\_default,blacklist\_compat,whitelist} and raw.seccomp)
 * daemon/container: デバイスタイプとして "usb" のサポートを追加しました (doc/configuration.md 参照してください)<!-- Add support for the "usb" device type (see doc/configuration.md) -->
 * daemon/container: コンテナの最終使用日を記録するようになりました (`lxc info` と `lxc list` で表示されます)<!-- Record the last used date for containers (also expose in `lxc info` and `lxc list`) -->
 * daemon/zfs: 設定中に強制的にスナップショットを削除できるようになりました <!-- Allow forcing snapshot removal through configuration -->(storage.zfs\_remove\_snapshots) (訳注: コンテナのリストア中の強制削除のことだと思います)

Bugfixes:

 * LXD 2.0.1, 2.0.2, 2.0.3, 2.0.4 で行ったバグフィックスすべてが含まれます <!-- All the bugfixes listed as part of LXD 2.0.1, 2.0.2, 2.0.3 and 2.0.4 -->
 * tests: より新しい shellcheck 対応の修正 <!-- Fix for newer shellcheck -->
 * lxd-bridge: dnsmasq の実行が失敗したときにエラーになるようになりました <!-- Fail on dnsmasq failure -->
 * c/r: 新しい ->migrate API にスイッチしました <!-- switch to the new ->migrate API -->
 * c/r: liblxc の新しい preserves\_inodes 機能を使うようになりました <!-- use liblxc's new preserves\_inodes feature -->
 * c/r: ghost limit を増やしました <!-- bump ghost limit -->

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



## LXD 2.0.4 リリースのお知らせ <!-- LXD 2.0.4 release announcement --><span class="text-muted">2016 年 8 月 15 日 <!-- 15th of August 2016 --></span>

<!--
This is the fourth bugfix release for LXD 2.0.
-->
このリリースは LXD 2.0 の 4 回目のバグフィックスリリースです。

### LXD 2.0.3 以降の変更は以下の通りです <!-- The changes since LXD 2.0.3 are -->

細かな改良点 <!-- Minor improvements -->:

 * /dev/net/tun はデフォルトのデバイスになりました (常に存在します) <!-- /dev/net/tun is now a default device (always present) -->
 * lxd-bridge: dnsmasq は IPv6 の名前解決をするように設定しました <!-- lxd-bridge: dnsmasq is now configured with IPv6 name resolution -->
 * lxd-bridge: iptables ルールにコメントをつけるようにしました <!-- lxd-bridge: iptables rules now have a comment --> (Issue #2125)
 * "lxd init" lxd init は適切なデフォルト値が設定されるようになりました <!-- "lxd init" now comes with reasonable defaults --> (Issue #1933)
 * 新規インストール時に "images:" のリモートは simplestreamsを使うようになりました <!-- The "images:" remote now uses simplestreams on new installations -->
 * "lxc image export" は常にイメージのフィンガープリントをファイル名に使うようにしました <!-- "lxc image export" now always uses the image fingerprint as filename -->
 * "lxc image import" の URL インポートで進捗を表示するようにしました <!-- Import progress is now reported for URL imports in "lxc image import" -->

### バグ修正 <!-- Bugfixes -->

 * apparmor: 機能の検知の追加と少しの整理 <!-- apparmor: Add feature detection and clean things a bit -->
 * apparmor: LXC の apparmor profile に依存しなくなりました <!-- apparmor: Don't depend on the LXC apparmor profile --> (Issue #1942)
 * apparmor: 主な2つのルール名を変更しました <!-- apparmor: Rename main two chunks of rules --> (Issue #1942)
 * apparmor: apparmor profile をさらにモジュール化しました <!-- apparmor: Setup a more modular apparmor profile --> (Issue #1942)
 * client: http client を go routines と共有しないようにしました <!-- client: Don't share http client with go routines --> (Issue #2186)
 * client: 存在しないデバイスを削除しようとしたときにエラーになるようにしました <!-- client: Error when trying to remove a non-existent device --> (Issue #2277)
 * client: "lxc info" で表示される API 情報を修正しました <!-- client: Fix API info reporting in "lxc info" -->
 * client: 綴りを修正しました permisson -> permission <!-- client: Fix spelling: permisson -> permission --> (Issue #2211)
 * client: client.websocket を public API にしました <!-- client: Make client.websocket a public API -->
 * client: --version オプションを見えるようにしました <!-- client: Make \-\-version option visible --> (Issue #2171)
 * client: WebsocketRecvStream の引数の制約を緩和しました <!-- client: Relax constraints on WebsocketRecvStream args -->
 * client: actionCmds で名前付き引数を使うようにしました<!-- client: Use named args for actionCmds -->
 * client/finger: fingerコマンドから使用していないフィールドを削除しました <!-- client/finger: Remove unused field from finger cmd --> (Issue #2170)
 * client/image: URLからのイメージインポートを修正しました <!-- client/image: Fix image import from URL --> (Issue #2272)
 * client/list: 並行な読み書きを修正しました <!-- client/list: fix concurrent read/write --> (Issue #2183)
 * client/list: "lxc list" のエラーハンドリングと競合を修正しました <!-- client/list: Fix error handling and race in "lxc list" --> (Issue #1753)
 * client/pause: `lxc pause` にいくつかのヘルプを追加しました <!-- client/pause: Add some additional help to `lxc pause` -->
 * client/profile: ヘルプメッセージに "lxc profile unset" を追加しました <!-- client/profile: Add "lxc profile unset" to help message --> (Issue #2227)
 * daemon/container: 実際に containers list error を処理するようにしました <!-- daemon/container: Actually handle containers list error -->
 * daemon/container: よくある問題のために整合性チェックをするようにしました <!-- daemon/container: Add sanity checks for common problems --> (Issue #2190)
 * daemon/container: デバイスの処理をアルファベット順にしました <!-- daemon/container: Alphabetize device processing --> (Issue #2233)
 * daemon/container: デバイスの整合性チェックのエラーを改善しました <!-- daemon/container: Better errors when sanity checking devices -->
 * daemon/container: デバイスタイプが存在しないか間違っている場合の処理を改良しました <!-- daemon/container: Better handle missing or invalid device types --> (Issue #2210)
 * daemon/container: limits.*.priorityの値のドキュメントとバリデーションを追加しました <!-- daemon/container: Document and validate limits.*.priority values --> (Issue #2231)
 * daemon/container: イメージのエクスポート対象の挙動のドキュメントとバグ修正をしました <!-- daemon/container: Document image export target behavior and fix bugs --> (Issue #2205)
 * daemon/container: コンテナが停止している時にコンテナの unfreeze を行わないようにしました <!-- daemon/container: Don't unfreeze a container on stop --> (Issue #2164)
 * daemon/container: 初期化エラーのメッセージのフラグ名を修正しました <!-- daemon/container: Fix flag name in init error message -->
 * daemon/container: limits.disk.priority が 0 に設定された場合を修正しました <!-- daemon/container: Fix limits.disk.priority when set to 0 --> (Issue #2230)
 * daemon/container: openvswitch での nic のホットプラグを修正しました <!-- daemon/container: Fix nic hotplug with openvswitch --> (Issue #2106)
 * daemon/container: ネストしたコンテナの unix-char/unix-block を修正しました <!-- daemon/container: Fix unix-char/unix-block in nested containers --> (Issue #2279)
 * daemon/container: 無効な物理デバイスのチェックを改良しました <!-- daemon/container: Improve check for invalid physical devices -->
 * daemon/container: wait-for-websocket が無効の時に戻り値を記憶するようにしました <!-- daemon/container: Remember the return code in the non wait-for-websocket case --> (Issue #2243)
 * daemon/container: {create,remove}UnixDevice から使われていない"name" 引数を削除しました <!-- daemon/container: Remove unused "name" argument from {create,remove}UnixDevice -->
 * daemon/container: より多くのエラー情報をユーザに戻すようにしました <!-- daemon/container: Return more error information back to the user --> (Issue #2190)
 * daemon/container: ディスクデバイスの順序を名前の前にパスでソートするようにしました <!-- daemon/container: Sort disk devices by their path before their names --> (Issue #2249)
 * daemon/container: シャットダウン時に freeze されているコンテナを unfreeze するようにしました <!-- daemon/container: Unfreeze frozen container on shutdown --> (Issue #2164)
 * daemon/db: dbアップグレード時に$LXD\_DIR/containers が存在しなくても失敗しないようにしました <!-- daemon/db: Don't fail db upgrade if $LXD\_DIR/containers doesn't exist --> (LP: #1602025)
 * daemon/db: docker プロファイルから fuse デバイスを削除しました <!-- daemon/db: remove fuse device from docker profile --> (Issue #2213)
 * daemon/migration: tempdir の取り扱いを修正しました <!-- daemon/migration: fix tempdir handling -->
 * daemon/profile: 無効なプロファイル名の使用を防止するようにしました <!-- daemon/profile: Prevent using invalid profile names --> (Issue #2274)
 * daemon/zfs: 32bit 環境下での zfs ボリュームのサイズを修正しました <!-- daemon/zfs: Fix ZFS volume size on 32bit architectures --> (Issue #2158)
 * daemon/zfs: 削除時に copy- のつくスナップショットのみ削除するようにしました <!-- daemon/zfs: Only delete copy- snapshots on delete --> (Issue #2127)
 * daemon/zfs: zfs.ImageCreate エラー時にサブボリュームも削除するようにしました <!-- daemon/zfs: Remove subvolume in zfs.ImageCreate error flow --> (Issue #2194)
 * doc: /dev/net/tun と /dev/fuse をドキュメントに追加しました <!-- doc: Add /dev/net/tun and /dev/fuse to docs -->
 * doc: README.md に squashfs-tools のインストールのコマンドを追加しました <!-- doc: Added command to install squashfs-tools in README.md -->
 * doc: pongo テンプレートの config\_get のドキュメントを追加しました <!-- doc: Document config\_get in pongo templates -->
 * doc: curl での api examples の間違いを修正しました <!-- doc: Fixed errors on api examples with curl -->
 * doc: LXDの本番利用向けのドキュメントを追加しました <!-- doc: Initial documentation for production use of LXD --> (Issue #2256)
 * doc: README.md のパッケージを少し並び替えました <!-- doc: Shuffle packages a bit in README.md -->
 * lxd-bridge-proxy: 使われていないコードを削除しました <!-- lxd-bridge-proxy: Remove unused code -->
 * Makefile: "make dist" でもgo getを複数走らせるようにしました <!-- Makefile: Also have "make dist" run multiple go get -->
 * scripts: lxc-to-lxd が virtualenv 下で動くようにしました <!-- scripts: Make lxc-to-lxd work inside virtualenv --> (Issue #2175)
 * simplestreams: サイズの表示を修正しました <!-- simplestreams: Fix size reporting --> (Issue #2223)
 * simplestreams: ラベルなしのイメージを処理するようにしました <!-- simplestreams: Handle images without labels -->
 * simplestreams: squashfs と tar.xz でイメージの一覧が使えるようになりました <!-- simplestreams: List images available as both squashfs and tar.xz -->
 * simplestreams: 有効期間の終了を適切に処理するようにしました <!-- simplestreams: Properly deal with unset expiry -->
 * simplestreams: 適切な user-agent をセットするようにしました <!-- simplestreams: Set proper user-agent -->
 * simplestreams: 正しい順序でハッシュを使用するようにしました <!-- simplestreams: Use the hashes in the right order --> (Issue #2239)

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。

## LXD 2.0.3 リリースのお知らせ <!-- LXD 2.0.3 release announcement --><span class="text-muted">2016 年 6 月 28 日 <!-- 28th of June 2016 --></span>

<!--
This is the third bugfix release for LXD 2.0.
-->
このリリースは LXD 2.0 の 3 回目のバグフィックスリリースです。

### LXD 2.0.2 以降の変更は以下の通りです <!-- The changes since LXD 2.0.2 are -->

重要な変更点 <!-- Notes -->:

 * LXD には "unsquashfs" コマンドが必要になりました。新しい Ubuntu イメージを展開するために必要なためです <!-- The "unsquashfs" command is now a LXD requirement as it is needed to
   unpack the newer Ubuntu images. -->
 * Sync の応答を返すエンドポイントへの POST リクエストに対して、REST API は Location ヘッダ付きの 201 番コードを返すようになりました。これまでは、Location ヘッダなしの 200 番コードが返っている場合がありました <!--  The REST API will now return a 201 code accompanied with a Location
   header following a POST to an endpoint returning an Sync response. It
   used to be sometimes returning a 200 without the Location header. -->
 * デフォルトで、コンテナには /dev/fuse デバイスが作成されるようになりました <!-- Containers now get a /dev/fuse device by default. -->

細かな改良点 <!-- Minor improvements -->:

 * extras: bash completion を改良しました <!-- Better bash completion coverage -->
 * client/delete: --force の短縮形として -f が使えるようになりました <!-- Allow -f as a shortcut of --force -->
 * client/info: サーバ情報が証明書のフィンガープリントを含むようになりました <!-- Include the certificate fingerprint in server info --> (Issue #2098)
 * client/info: エラー時の --show-log の実行例にリモートホストの名前を表示するようにしました <!-- Show remote in the \-\-show-log example provided on error -->
 * core: 新しい Ubuntu イメージで必要なので squashfs のサポートを追加しました <!-- Add squashfs support as needed by newer Ubuntu images -->
 * core: ブラウザが LXD とやりとりできるよう、TLS cipher リストを調整しました <!-- Tweak TLS cipher list a bit to allow browsers to talk to LXD --> (Issue #2034)
 * daemon/container: デフォルトで /dev/fuse をセットアップするようになりました <!-- Setup /dev/fuse by default -->

バグ修正 <!-- Bugfixes -->:

 * client: 接続エラーの際の扱いを改良しました <!-- Better handle connection errors -->
 * client: サブコマンドのエイリアスをサポートするために、すべてのエイリアス引数をチェックするようになりました <!-- Check all alias args to support subcommand aliases --> (Issue #2095)
 * client/file: edit の際にファイルのパーミッションを変更しなくなりました <!-- Don't modify file permissions on edit -->
 * client/image: イメージコピーの際にデーモンが提示したフィンガープリントを使うようにしました <!-- Use the daemon provided fingerprint on image copy --> (Issue #2162)
 * client: クライアントの URL を正規化するようにしました <!-- Normalize the URLs in the client --> (Issue #2112)
 * client/remote: 'remote add' 時のパニックを修正しました <!-- Fix a panic in 'remote add' --> (Issue #2089)
 * client/remote: &lt;FQDN&gt;:&lt;PORT&gt; のパースを修正しました <!-- Fix parsing of <FQDN>:<PORT> -->
 * core: PEM デコードエラーの扱いを改良しました <!-- Better handle PEM decoding errors --> (Issue #2119)
 * core: ReaderToChannel 内でゼロバイト送出をチェックするようになりました <!-- Check for zero byte send in ReaderToChannel --> (Issue #2072)
 * core: 並列の Websocket 書き込みの際のクラッシュを修正しました <!-- Fix a concurrent websocket write crash -->
 * core: WebsocketUpgrader のバッファサイズとしてデフォルト値を使うようになりました <!-- Use default buffer size for WebsocketUpgrader -->
 * daemon: lxd コマンドのヘルプの改行が抜けていたので追加しました <!-- Add missing linebreak to lxd help -->
 * daemon/api: sync の POST リクエストの際に Location ヘッダをセットするようにしました <!-- Set Location on sync POST requests --> (Issue #2092)
 * daemon/btrfs: btrfs でのリストアの失敗を修正しました <!-- Fix failure to restore on btrfs --> (Issue #2058)
 * daemon/certificate: すでに存在する証明書を追加しようとした場合、失敗するようになりました <!-- Fail to add an existing certificate -->
 * daemon/config:圧縮アルゴリズムに "none" を設定できるようにしました (再発バグの修正)<!-- Allow "none" as compression algorithm (regression fix) -->
 * daemon/container: イメージのエクスポート時の rootfs tarball の出力パスを追加しました <!-- Add target path to rootfs tarball in image export --> (Issue #1980)
 * daemon/container: バインドマウントの扱いを改良しました <!-- Better handle bind mounts -->
 * daemon/container: 存在しないファイルの GET の際は 404 を返すようになりました <!-- GET of a nonexistent file now 404s --> (Issue #2059)
 * daemon/container: device cgroup の定義を読みやすくしました <!-- Make devices cgroup config more readable -->
 * daemon/containers: ディスクのセットアップが失敗した際のエラーメッセージを改良しました <!-- Improve error message on disk setup failure -->
 * daemon/container: 更新が失敗した際の Undo 処理に defer を使うようにしました <!-- Use defer to undo changes on failed update -->
 * daemon/db: db のアップグレードのテスト時は zfs.img の chmod しないようにしました <!-- Don't try to chmod zfs.img when testing db upgrades -->
 * daemon/db: テストモードの際は /var/lib/lxd/containers の更新をしないようにしました <!-- Don't try to update /var/lib/lxd/containers in go tests -->
 * daemon/init: ストレージキーを unset するようにしました <!-- Actually unset the storage keys -->
 * daemon/lvm: LVM の最近のバージョンでは lvextend を呼ばなくしました <!-- Don't call lvextend with recent LVM versions -->
 * daemon/migration: zfs/btrfs の send 時にバッファリングを設定するようにしました <!-- Setup some buffering for zfs/btrfs send -->
 * daemon/migration: チェックポイント・リストアのコードを全体的にシンプルにしました <!-- Simplify checkpoint/restore code everywhere -->
 * daemon/migration: LXC の新しいマイグレーション API に切り替えました <!-- switch to the new LXC migrate API -->
 * daemon/zfs: ブロックデバイスの検出を改良しました <!-- Improve block device detection -->
 * daemon/zfs: マウントされてない場合はマウントするようにしました <!-- Mount if not mounted --> (Issue #1888)
 * doc: ZFS スナップショットの欠点について記載しました <!-- Clarify ZFS snapshot shortcomings --> (Issue #2055)
 * doc: configuration.md から JSON の例を削除しました <!-- Drop JSON example from configuration.md -->
 * doc: すべてのフィールドをカバーするように証明書の JSON の例を修正しました <!-- Fix certificates JSON examples to cover all fields -->
 * doc: "unix-block" の説明内の Typo を修正しました <!-- Fix typo in "unix-block" description -->
 * doc: 共有フォルダの説明を改良しました <!-- Improve shared folder documentation (README) --> (Issue #2123)
 * lxd/patches: 一度だけ適用するパッチの仕組みのサポートを追加しました (DB スキーマの更新からの分離) <!-- Add support for one-time patches (separate from DB schema updates) -->
 * Makefile: go get が悪化し、3 回実行する必要が出てきました <!-- go get has become worse, now need 3 runs -->
 * Makefile: xgettext-go のリポジトリ URL を更新しました <!-- Update repository URL for xgettext-go -->
 * migration: エラーの際の処理を統合しました <!-- Consolidate error handling -->
 * test: エイリアス作成の際のリターンコードとして 201 を有効にしました <!-- 201 is a valid return code for alias creation -->
 * test: ReaderToChannel のテストを追加しました <!-- Add a test for ReaderToChannel -->
 * test: "lxc file edit" 時の対象のファイルのオーナーとパーミッションのテストを追加しました <!-- Add test for "lxc file edit" target file owner and permission -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。

## LXD 2.0.2 リリースのお知らせ <!-- LXD 2.0.2 release announcement --><span class="text-muted">2016 年 5 月 30 日<!--30th of May 2016 --></span>

<!--
This is the second bugfix release for LXD 2.0 and its first security update.
-->
このリリースは LXD 2.0 に対する 2 回目のバグフィックスリリースであり、最初の脆弱性対応のアップデートです。

## CVE-2016-1581

<!--
Robie Basak noticed that after setting up a loop based ZFS pool through "lxd init"  
the resulting file (/var/lib/lxd/zfs.img) was world readable.
-->
"lxd init" を使って loop ベースの ZFS プールを設定すると、出来上がったファイル (/var/lib/lxd/zfs.img) が、全ユーザに読み取り権限のあるファイルとなってしまうことについて、Robie Basak から報告を受けました。

<!--
This would allow any user on the system, and a potential attacker to copy and  
then read the data of any LXD container, regardless of file permissions inside the container.
-->
これにより、コンテナ内のファイルのパーミッションに関わらず、システム上の全ユーザがすべての LXD コンテナのデータをコピーして読むことができます。そして、攻撃者が同じことを行う可能性があります。

<!--
LXD 2.0.2 fixes the "lxd init" logic to always set the mode of zfs.img to 0600.
-->
LXD 2.0.2 は "lxd init" のロジックを修正し、常に zfs.img のモードが 0600 に設定されるようにしました。

<!--
Additionally a one-time upgrade step will trigger on first run and reset any existing  
zfs.img mode to be 0600.
-->
加えて、アップグレード処理が LXD の最初の実行時に実行され、既存の zfs.img のモードを 0600 に設定します。

<!--
If you manage an affected system and suspect an unauthorized user may have accessed  
the zfs.img file, you should consider replacing any secret that was stored in the  
affected containers (private keys and similar credentials).
-->
もし、影響を受けるシステムを管理しており、許可されていないユーザが zfs.img ファイルにアクセスしたことが疑われる場合は、対象のコンテナ内に格納されている機密情報 (秘密鍵や同等のクレデンシャル) を置き換えることを検討すべきです。

## CVE-2016-1582

<!--
Robie Basak noticed that when switching an unprivileged container (default, security.privileged=false)  
into privileged mode (by setting security.privileged to true), the container rootfs is properly  
remapped but the container directory itself (/var/lib/lxd/containers/XYZ) remains at 0755.
-->
非特権コンテナ (デフォルトのモードです。security.privileged=false) を特権モードのコンテナ (security.privileged=true に設定されます) に切り替える際、コンテナの rootfs は適切に (ユーザ、グループの) 再マッピングが行われますが、コンテナディレクトリ自身 (/var/lib/lxd/containers/XYZ) はモードが 0755 のままとなることについて、Robie Basak から報告を受けました。

<!--
This is a problem because it allows an unprivileged user on the host to access any world readable path  
under /var/lib/lxd/containers/XYZ which may include setuid binaries.
-->
これにより、ホスト上の非特権ユーザすべてが /var/lib/lxd/containers/XYZ 以下の、setuid バイナリを含む全ユーザに読み取り権限のあるパスにアクセスできることになり、問題です。

<!--
Such setuid binaries could then be used on the host to access otherwise unaccessible data  
or to escalate one's privileges.
-->
このような setuid バイナリが、通常ではアクセスできないようなデータにアクセスしたり、自身の権限を昇格させたりする目的でホスト上で使われる可能性があります。

<!--
LXD 2.0.2 fixes this behavior by making sure all privileged containers are always root-owned and have  
their mode set to 0700 to prevent traversal by unprivileged users.
-->
LXD 2.0.2 は、すべての特権コンテナが常に確実に root 所有であるようにし、非特権ユーザによるトラバーサルを防ぐためにモードを 0700 に設定することで、このような動作を修正しました。

<!--
Additionally a one-time upgrade step will trigger on first run and reset any existing privileged containers'  
ownership and mode to root:root 0700
-->
加えて、アップグレード処理が LXD の最初の実行時に実行され、既存の特権コンテナの所有権とモードを root:root 0700 に設定します。

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。

### 対象のコミット <!-- Commits -->

 * CVE-2016-1581: [https://github.com/lxc/lxd/commit/7e8afe809284da64277eb080b456ab24ea53b516](https://github.com/lxc/lxd/commit/7e8afe809284da64277eb080b456ab24ea53b516)
 * CVE-2016-1582: [https://github.com/lxc/lxd/commit/f10e1bc47c1b385b396a35e540cb8cd9435783ea](https://github.com/lxc/lxd/commit/f10e1bc47c1b385b396a35e540cb8cd9435783ea)


## LXD 2.0.1 リリースのお知らせ <!-- LXD 2.0.1 release announcement --><span class="text-muted">2016 年 5 月 16 日<!-- 16th of May 2016 --></span>

<!--
This is the first bugfix release for LXD 2.0.
-->
このリリースは LXD 2.0 に対する最初のバグフィックスリリースです。

### LXD 2.0.0 以降修正されたバグは以下の通りです <!-- The bugfixes since LXD 2.0.0 are -->

 * shmounts がマウントできなくてもコンテナの起動が失敗しなくなりました <!-- Don't fail to start when shmounts can't be mounted, instead fail container startup -->
 * プロキシが変更されたときに simplestream のキャッシュを無効化するようにしました <!-- Invalidate the simplestreams cache on proxy change -->
 * コンテナの起動時に、設定ファイルをログ保存ディレクトリに直接書くようになりました <!-- Write the container's config file on start to the log path directly -->
 * list で空のレスポンスが原因でクラッシュするバグを修正しました <!-- Fix crash in list due to empty responses -->(Issue #1903)
 * 存在しないプロファイルを消去しようとした際に失敗するようになりました <!-- Fail when removing non-existent profiles -->(Issue #1886)
 * image import のヘルプに --alias を追加しました <!-- Document --alias to image import -->(Issue #1900)
 * "lxc start" と "lxc stop" のオプション (stateful/stateless) を修正しました <!-- Fix "lxc start" and "lxc stop" options (stateful/stateless) -->
 * 不正なソースストリームな場合にわかりやすいエラーメッセージを出力するようにしました <!-- Give better error on invalid source stream -->(simplestreams)
 * 基本的な REST API の使用例を README.md に追加しました <!-- Add basic REST API usage example to README.md -->
 * lxc stop --help の typo を修正しました <!-- Fix typo in lxc stop \-\-help -->
 * lxc-to-lxd を stable な pylxd API を使うように変換しました <!-- Convert lxc-to-lxd to stable supported pylxd API -->(Issue #1901)
 * イメージの更新が失敗した場合に適切にログが出力されるようになりました <!-- Properly log image update failures -->
 * イメージの検証を改良し、不正なイメージの場合はロールバックするようになりました <!-- Better validate and rollback bad images -->(Issue #1913)
 * send 操作が SmartError 経由で値を返すようになりました <!-- Send operation return value through SmartError -->
 * lxc list の基本的なフィルタリングを修正しました <!-- Fix basic filtering in lxc list -->(Issue #1917)
 * 初めての起動時にユーザにコンテナの起動方法を案内するようになりました <!-- Tell the user how to launch a container on first start -->(Issue #1931)
 * ローカルイメージの名前と一致しない場合は "remote" を "remote:" と認識するようになりました <!-- Redirect "remote" to "remote:" when not conflicting -->(Issue #1931)
 * スナップショットに対して LXC の設定をロードしないようにしました <!-- Don't load the LXC config for snapshots -->(Issue #1935)
 * list: 値が設定されていないキーでフィルタリングできるようになりました <!-- Allow filtering by unset key -->(Issue #1917)
 * `lxc launch` の例を修正しました <!-- Fix example in `lxc launch` -->
 * 日本語メッセージの更新とその他の言語の po ファイルの更新を行いました <!-- Update Japanese translation and other po files -->
 * 古いカーネルでは cpuset.cpus にフォールバックするようにしました <!-- Fall back to cpuset.cpus on older kernels -->(Issue #1929)
 * サーバの設定キーを適切に検証するようになりました <!-- Properly validate the server configuration keys -->(Issue #1939)
 * ストレージの daemonConfig の扱いを修正しました <!-- Fix daemonConfig handling of storage -->
 * forkmigrate 時に設定ファイルを消去しないようにしました <!-- Don't remove config file on forkmigrate -->
 * 設定の検証が変わったので、設定の処理を修正しました <!-- Fix config handling following config validation change -->
 * ドキュメントの Markdown の文法を修正しました <!-- Fixed Markdown syntax in documentation -->
 * ディスクを消去しているとき、すぐに失敗とならないようにしました <!-- Don't fail early when removing disks -->(Issue #1964)
 * 再帰的にデバイスを消去しなくなりました <!-- Don't recursively delete devices -->
 * unix デバイスで消去に失敗したものがあっても失敗しなくなりました <!-- Don't fail when some unix devices fail to be deleted -->
 * unix-char、unix-block デバイスに対する設定チェックとして同じチェックを使うようにしました <!-- Use the same config checks for unix-char and unix-block -->
 * fs オブジェクトが存在しない場合でも (コンテナパスが) 消去できるようになりました <!-- Allow removing when fs object no longer exists -->(Issue #1967)
 * ログファイルを適切に expire するようになりました <!-- Do proper logfile expiry -->(Issue #1966)
 * ロギングをより一貫性があるようにしました <!-- Make logging a bit more consistent -->
 * zfs のエラーを無視しなくなりました <!-- Don't ignore zfs errors -->
 * すでに存在するファイルのモード、uid、gid を適切に更新するようになりました <!-- Properly update the mode, uid and gid on existing files -->(Issue #1975)
 * 不正な証明書ファイルを検出するようになりました <!-- Detect invalid certificate files -->(Issue #1977)
 * 壊れた apparmor のステータスチェックを修正しました <!-- Fix broken apparmor status check -->
 * boolean 文字列として on/off が使えるようになりました <!-- Allow on/off as boolean strings -->
 * コンテナの設定キーを適切に検証するようになりました <!-- Properly validate the container configuration keys -->(Issue #1940)
 * rsync の転送エラーを表示するようにしました <!-- Don't mask rsync transfer errors -->
 * execPath をグローバル変数に移動しました <!-- Move execPath to a global variable -->
 * websocket 上の rsync の際、nc -U の代わりにカスタムの netcat を使うようになりました <!-- Use custom netcat instead of nc -U for rsync over websocket -->(Issue #1944)
 * マイグレーション中の間違った state ディレクトリパスを修正しました <!-- Fix wrong state dir path in migration -->
 * ストレージの削除が失敗したときもイメージの削除が失敗しなくなりました <!-- Don't fail deleting images when the storage delete fails -->
 * 日本語メッセージの改良を行いました <!-- Improve messages in the Japanese translation -->
 * いくつかの処理で criu コマンドの存在チェックを行うようになりました <!-- Add more checks for the criu binary -->
 * (ライヴ) マイグレーションのテストを作り替えました <!-- Rework (live) migration tests -->
 * create 時の devices はオプショナルであることを明確にドキュメントに記載しました <!-- Make it explicit in documentation that devices on create are optional -->
 * すべてのイメージのコピーの取得元を適切に記録するようになりました <!-- Properly record the source of all image copies -->(Issue #2010)
 * コンテナが作成中の場合に ERROR 状態にならないようにしました <!-- Don't mark containers as ERROR while being created -->(Issue #1988)
 * operations に対して送られるイベントをクリーンアップするようになりました <!-- Cleanup events sent for operations -->(Issue #1992)
 * ZFS の refcounting に関する問題を修正しました <!-- Fix ZFS refcounting issues -->(Issue #1916 and Issue #2013)
 * スナップショットをコピーした際、スナップショットの設定もコピーするようにしました <!-- Propagate snapshot config when copying a snapshot -->(Issue #2017)
 * スナップショットに対する `lxc config show` コマンドを実装しました <!-- Implement `lxc config show` for snapshots -->
 * REST API の使い方に Unix ドメインソケット経由のサンプルを追加しました <!-- Add Unix socket example to REST API usage. -->

### ダウンロード <!-- Downloads -->
<!--
The release tarballs can be found on our [download page](/lxd/downloads/).
-->
このリリースの tarball は [ダウンロードページ](/lxd/downloads/) から取得できます。

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
