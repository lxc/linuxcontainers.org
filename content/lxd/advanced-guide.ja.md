[TOC]

# はじめに <!-- Introduction -->

<!--
!!! note
	If you haven't set up LXD yet, take a look at the [Getting-Started Guide](/lxd/getting-started-cli/) first.
-->
!!! note "注意"
	まだ LXD をセットアップしていないのであれば、まずは「[はじめに - コマンドライン](/ja/lxd/getting-started-cli/)」を最初にご覧ください。

<!--
This guide gives you more information about the several features of LXD.
-->
このガイドでは、いくつかの LXD の機能について詳細な情報を紹介しています。


# インスタンスの設定 <!-- Configuration of instances -->
<!--
See [How to create instances](/lxd/docs/latest/howto/instances_create) and [How to configure instances](/lxd/docs/latest/howto/instances_configure).
-->
[インスタンスを作成するには](https://lxd-ja.readthedocs.io/ja/latest/howto/instances_create/)（[英語版](/lxd/docs/latest/howto/instances_create)）と[インスタンスを設定するには](https://lxd-ja.readthedocs.io/ja/latest/howto/instances_configure/)（[英語版](/lxd/docs/latest/howto/instances_configure)）をご覧ください。

# Cloud-init
<!--
See [How to use `cloud-init`](/lxd/docs/latest/cloud-init) and the [`cloud-init` documentation](https://cloudinit.readthedocs.io/en/latest/).
-->
[cloud-initを使用するには](https://lxd-ja.readthedocs.io/ja/latest/cloud-init/)（[英語版](/lxd/docs/latest/cloud-init)）と[`cloud-init` documentation](https://cloudinit.readthedocs.io/en/latest/)をご覧ください。

# サーバー設定 <!-- Server configuration -->
<!--
See [LXD documentation - Server settings](/lxd/docs/master/server) for all Server configuration options.
-->
すべてのサーバーの設定オプションは [LXDドキュメントのサーバー設定の項](https://lxd-ja.readthedocs.io/ja/latest/server/) をご覧ください。

<!--
Below we will introduce some topics, including:
-->
ここでは次のようなテーマについて紹介します:

<!--
- [Projects](#projects)
- [Security](/lxd/docs/latest/security)
- [Remote servers](/lxd/docs/latest/reference/remote_image_servers/)
-->
- [プロジェクト](#_23)
- [セキュリティ](https://lxd-ja.readthedocs.io/ja/latest/security/) （[英語版](/lxd/docs/latest/security/)）
- [リモートサーバー](https://lxd-ja.readthedocs.io/ja/latest/reference/remote_image_servers/) （[英語版](/lxd/docs/latest/reference/remote_image_servers/)）

## プロジェクト <!-- Projects -->
<!--
You can split your server into projects.Each project can have it's own instances, profiles etc.
-->
サーバーをプロジェクトに分割できます。プロジェクトでは、独自のインスタンスやプロファイルを持つことができます。

<!--
See [LXD documentation - Projects](/lxd/docs/master/projects) for more information and configuration.
-->
詳しい情報や設定は [LXDドキュメントのプロジェクトの項](https://lxd-ja.readthedocs.io/ja/latest/projects/) をご覧ください。

# `distrobuilder` を使ったイメージのビルド <!-- Using `distrobuilder` to build images -->

<!--
For building your own images, you can use [`distrobuilder`](https://github.com/lxc/distrobuilder) (a tool developed by us).
-->
自分でイメージをビルドする場合に、[`distrobuilder`](https://github.com/lxc/distrobuilder) を使えます（われわれが開発しています）。

## distrobuilder のインストール <!-- Install distrobuilder -->
<!--
See [How to install `distrobuilder`](/distrobuilder/docs/latest/howto/install/).
-->
[How to install `distrobuilder`](/distrobuilder/docs/latest/howto/install/)をご覧ください。

## テンプレートの作成・編集 <!-- Write or Edit a Template -->
<!--
You need an image template (e.g. `ubuntu.yaml`) to give instructions to distrobuilder.
-->
distrobuilder に手順を示すためのイメージテンプレート（例: `ubuntu.yaml`）が必要です。

<!--
You can start by using one of the example templates below. Modify those templates so they fit your needs.
-->
下記のサンプルテンプレートのひとつを使って作成を始めることができます。ニーズに合うようにテンプレートを変更してください。

<!--
See [Template details](#template-details) below for an overview of configuration keys.
-->
設定キーの詳細については [テンプレートの詳細](#_42) をご覧ください。

### サンプルテンプレート <!-- Example Templates -->
<!--
Standard template (includes all available options): [https://github.com/lxc/distrobuilder/blob/master/doc/examples/scheme.yaml](https://github.com/lxc/distrobuilder/blob/master/doc/examples/scheme.yaml)
-->
標準テンプレート（すべての使用可能なオプションを含みます）: [https://github.com/lxc/distrobuilder/blob/master/doc/examples/scheme.yaml](https://github.com/lxc/distrobuilder/blob/master/doc/examples/scheme.yaml)

<!--
Official LXD templates for various distributions:
[https://github.com/lxc/lxc-ci/tree/master/images](https://github.com/lxc/lxc-ci/tree/master/images)
-->
さまざまなディストリビューションの LXD 公式テンプレート:
[https://github.com/lxc/lxc-ci/tree/master/images](https://github.com/lxc/lxc-ci/tree/master/images)

### テンプレートの詳細 <!-- Template details -->
<!--
You can define multiple keys in templates:
-->
テンプレート内には複数のキーを定義できます:

<!--
| Section: | Description: | Documentation: |
| ---      | ---          | ---            |
| `image`  | defines distribution, architecture, release etc.| see [image.md](https://github.com/lxc/distrobuilder/blob/master/doc/image.md) |
| `source` | defines main package source, keys etc. | see [source.md](https://github.com/lxc/distrobuilder/blob/master/doc/source.md) |
| `targets` | defines configs for specific targets (e.g. LXD-client, instances etc.) |  see [targets.md](https://github.com/lxc/distrobuilder/blob/master/doc/targets.md) |
| `files` | defines generators to modify files | see [generators.md](https://github.com/lxc/distrobuilder/blob/master/doc/generators.md) |
| `packages` | defines packages for install or removal; add repositories |   see [packages.md](https://github.com/lxc/distrobuilder/blob/master/doc/packages.md) |
| `actions` | defines scripts to be run after specific steps during image building |  see [actions.md](https://github.com/lxc/distrobuilder/blob/master/doc/actions.md) |
| `mappings` | maps different terms for architectures for specific distributions (e.g. x86_64: amd64) | see [mappings.md](https://github.com/lxc/distrobuilder/blob/master/doc/mappings.md) |
-->
| セクション: | 説明: | ドキュメント: |
| --- | --- | --- |
| `image` | ディストリビューション、アーキテクチャ、リリースなどを定義します | [Image](/distrobuilder/docs/latest/reference/image/) 参照 |
| `source` | メインパッケージのソースやキーなどを定義します | [Source](/distrobuilder/docs/latest/reference/source/) 参照 |
| `targets` | 特定のターゲット（例: LXDクライアント、インスタンスなど）に対する設定を定義します | [Targets](/distrobuilder/docs/latest/reference/targets/) 参照 |
| `files` | ファイルを変更するための generators を定義します | [Generators](/distrobuilder/docs/latest/reference/generators/) 参照 |
| `packages` | インストールしたり削除したりするパッケージ、追加するリポジトリを定義します | [Package management](/distrobuilder/docs/latest/reference/packages/) 参照 |
| `actions` | イメージをビルドする途中の特定のステップの後に実行するスクリプトを定義します | [Actions](/distrobuilder/docs/latest/reference/actions/) 参照 |
| `mappings` | 特定のディストリビューションで使われているアーキテクチャ文字列と LXD で使われるアーキテクチャ文字列の差異をマッピングします (例: x86_64: amd64) | [Mappings](/distrobuilder/docs/latest/reference/mappings/) 参照 |

<!--
!!! note "Note for VMs"
	You should either build an image with cloud-init support (provides automatic size growth) or set a higher size in the template, because the standard size is relatively small (~4 GB).
	Alternatively you can also grow it manually.
-->
!!! note "VMでの注意"
	標準サイズが比較的小さい（〜4GB）ので、cloud-init サポートでイメージをビルドするか（自動的にサイズが大きくなります）、テンプレートにより大きなサイズを設定するかのどちらかを行う必要があります。
	または手動で拡張することもできます。

## イメージのビルド <!-- Build an Image -->

### コンテナイメージ <!-- Container Image -->
<!--
Build a container image with:
-->
次のようにコンテナイメージをビルドします:

	distrobuilder build-lxd filename [target folder]

<!--
Replace:
-->
上の例は次のように置き換えてください:

<!--
* `filename` - with a template file (e.g. `ubuntu.yaml`).
* (optional)`[target folder]` - with the path to a folder of your choice; if not set, distrobuilder will use the current folder
-->
* `filename` - テンプレートファイル名（例: `ubuntu.yaml`）
* （オプション）`[target folder]` - イメージを出力する任意のフォルダーへのパス。設定しない場合はカレントフォルダーを使います

<!--
After the image is built, see [Import images](/lxd/docs/latest/howto/images_copy/#import-an-image-from-files) for how to import your image to LXD.
-->
イメージをビルドした後、ビルドしたイメージを LXD にインポートするためには [イメージのインポート](https://lxd-ja.readthedocs.io/ja/latest/howto/images_copy/#id3) （[英語版](https://linuxcontainers.org/lxd/docs/latest/howto/images_copy/#import-an-image-from-files)）をご覧ください。

<!--
See [Building.md on distrobuilder's GitHub repo](https://github.com/lxc/distrobuilder/blob/master/doc/building.md#lxd-image) for details.
-->
詳しくは [How to build images](/distrobuilder/docs/latest/howto/build/#lxd-image) をご覧ください。

### 仮想マシンイメージ <!-- Virtual Machines Image -->
<!--
Build a virtual machine image with:
-->
次のように仮想マシンイメージをビルドします:

	distrobuilder build-lxd filename --vm [target folder]

<!--
Replace:
-->
上の例は次のように置き換えてください:

<!--
* `filename` - with a template file (e.g. `ubuntu.yaml`).
* (optional)`[target folder]` - with the path to a folder of your choice; if not set, distrobuilder will use the current folder
-->
* `filename` - テンプレートファイル名（例: `ubuntu.yaml`）
* （オプション）`[target folder]` - イメージを出力する任意のフォルダーへのパス。設定しない場合はカレントフォルダーを使います

<!--
After the image is built, see [Import images](/lxd/docs/latest/howto/images_copy/#import-an-image-from-files) for how to import your image to LXD.
-->
イメージをビルドした後、ビルドしたイメージを LXD にインポートするためには [イメージのインポート](https://lxd-ja.readthedocs.io/ja/latest/howto/images_copy/#id3) （[英語版](https://linuxcontainers.org/lxd/docs/latest/howto/images_copy/#import-an-image-from-files)）をご覧ください。

## さらなる情報 <!-- More information -->

<!--
[Distrobuilder GitHub repo](https://github.com/lxc/distrobuilder)

[Distrobuilder documentation](https://github.com/lxc/distrobuilder/tree/master/doc)
-->
* [Distrobuilder GitHub リポジトリ](https://github.com/lxc/distrobuilder)
* [Distrobuilder ドキュメント](/distrobuilder/docs/latest/)

# ネットワーク <!-- Networks -->
<!--
See LXD-documentation for details:
-->
詳しくは LXD ドキュメントをご覧ください:

<!--
* [Networks documentation](/lxd/docs/latest/networks)
* [Network devices](/lxd/docs/latest/reference/devices_nic)
* [Proxy devices](/lxd/docs/latest/reference/devices_proxy)
-->
* [ネットワーク](https://lxd-ja.readthedocs.io/ja/latest/networks/)（[英語版](/lxd/docs/master/networks)）
* [ネットワークデバイス](https://lxd-ja.readthedocs.io/ja/latest/reference/devices_nic/)（[英語版](/lxd/docs/latest/reference/devices_nic)）
* [プロキシデバイス](https://lxd-ja.readthedocs.io/ja/latest/reference/devices_proxy/)（[英語版](/lxd/docs/latest/reference/devices_proxy)）


# ストレージ <!-- Storages -->
<!--
See LXD-documentation for details:
-->
詳しくは LXD ドキュメントをご覧ください:

<!--
[Storage documentation](/lxd/docs/master/storage)
-->
[ストレージ](https://lxd-ja.readthedocs.io/ja/latest/storage/)

# コマンドエイリアス <!-- Command aliases -->
<!--
You can create internal command aliases with:
-->
LXD 内部で使うコマンドのエイリアスを次のコマンドで作ることができます:

	lxc alias

<!--
List all aliases:
-->
すべてのエイリアスのリストは次のように表示できます:

	lxc alias list

<!--
Create a new alias:
-->
新しいエイリアスを作るには次のように実行します:

	lxc alias add <alias> <target>

<!--
For example:
-->
例:

	lxc alias add delete "delete -i"

<!--
This will link the command `lxc delete` to `lxc delete -i`.
So if you run `lxc delete` the LXD-client will run `lxc delete -i` instead.
-->
これはコマンド `lxc delete` を `lxc delete -i` にリンクします。LXD クライアントで `lxc delete` と実行すると、代わりに `lxc delete -i` が実行されます。

# その他の情報とリンク <!-- Further Information & Links -->
<!--
You find more information on the following pages:
-->
次のページに詳しい情報があります:

<!--
- [LXD documentation](/lxd/docs/master/index)

- [Forum](https://discuss.linuxcontainers.org/)
    - [Tutorials Section](https://discuss.linuxcontainers.org/c/tutorials)
-->
* [LXD ドキュメント](https://lxd-ja.readthedocs.io/ja/latest/) （[英語版](/lxd/docs/master/index)）
* [フォーラム](https://discuss.linuxcontainers.org/)
    * [Tutorials Section](https://discuss.linuxcontainers.org/c/tutorials)
