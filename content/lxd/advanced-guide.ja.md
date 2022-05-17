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
See [Configure instances](/lxd/getting-started-cli/#configure-instances).
-->
[インスタンスの設定](/ja/lxd/getting-started-cli/#configure-instances)をご覧ください。

<!--
For now virtual machines support less features than containers.
-->
現時点では、仮想マシンがサポートする機能は、コンテナがサポートする機能よりも少ないです。

<!--
You can see what configuration options are available for virtual machines in the [LXD documentation for instances](/lxd/docs/master/instances#keyvalue-configuration).All categories and keys that contain the terms `virtual-machine` or `VM` are supported.
-->
仮想マシンで設定できるオプションは[LXD公式文書のインスタンスのセクション](https://lxd-ja.readthedocs.io/ja/latest/instances/#keyvalue)でご覧いただけます。「サポートされるインスタンスタイプ」で`VM`と書かれているカテゴリー、"Condition" で `virtual-machine` と書かれている設定キーが仮想マシンでサポートされています。

## lxc launch コマンドのオプション <!-- lxc launch flags -->
<!--
You can apply flags to add configuration options to `lxc launch`.
-->
`lxc launch`でオプションを指定して、設定オプションを追加できます。

### 設定に関連するオプションのリスト: <!-- Short list of flags: -->
<!-- use html table? -->
```
-p profilename   # プロファイルの適用

-c key=value   # 設定キーと値の適用
```

<!--
Usage:
-->
使い方:

	lxc launch imageserver:imagename instancename -p profile1 -c key1=value

!!! note "注意"
	<!--
    To apply multiple profiles or config keys, use one flag for each, like:
	-->
	複数のプロファイルや設定キーを適用するには、次のようにそれぞれにひとつの設定を与えます:
	
	    lxc launch imageserver:imagename instancename -p profile1 -p profile2

	    lxc launch imageserver:imagename instancename -c key1=value -c key2=value

## <a name="profiles">プロファイル <!-- Profiles -->
<!--
See [Use profiles](/lxd/getting-started-cli/#use-profiles).
-->
[プロファイルの使用](/ja/lxd/getting-started-cli/#use-profiles)をご覧ください。

# Cloud-init
<!--
`cloud-init` is a software for automatic customization of a linux distribution.
-->
`cloud-init`は Linux ディストリビューションを自動的にカスタマイズするためのソフトウェアです。

<!--
Features include:
-->
次のような機能があります:

* パッケージのインストール <!-- install packages -->
* 設定の適用や編集 <!-- apply/edit configuration -->
* ユーザーの追加 <!-- add users -->
* その他 <!-- and more -->

<!--
Requirements:
-->
動作環境:

<!--
* Images with cloud-init support:
For example, official LXD images that contain the term `cloud` in `ALIAS` have implemented cloud-init support.
-->
* cloud-init をサポートするイメージ:
例えば、`ALIAS` に `cloud` という文字列を含む LXD の公式イメージは `cloud-init` をサポートしています。

## cloud-init で行う処理を適用する <!-- cloud-init Apply instructions for cloud-init -->
<!--
You can apply instructions for cloud-init inside a LXD profile.
-->
LXD プロファイル中で cloud-init で行う処理を適用できます。

<!--
For easier editing, we write the content of the profile in a texteditor and apply the textfile to a new profile.
-->
簡単に編集するには、テキストエディターでプロファイルを記述し、そのテキストファイルを新しいプロファイルに適用します。

### cloud-init プロファイルを記述する <!-- Write a cloud-init profile -->

1. 新しいテキストファイルを、例えば `cloud-profile1.profile` のような名前で作成します <!-- Create a new textfile and name it for example: `cloud-profile1.profile` -->
2. テキストエディターでそのファイルを開いて編集を行います <!-- Open it in a texteditor of your choice and start editing. -->

<!--
Every instruction for cloud-init is applied in section `config`-> `user.user-data` (or other sections for instance data, see [below](#other-config-sections-for-instance-data)):
-->
cloud-init に対する各命令は、`config` → `user.user-data` セクションに適用されます（もしくはインスタンスデータの他のセクション。[下記](#_19)を参照）:


```
config:
  user.user-data: |
    #cloud-config
    key: value
```

<!--
Example:
-->
例:

```
config:
  user.user-data: |
    #cloud-config
    package_upgrade: true
    packages:
      - package1
      - package2

```

<!--
This will upgrade all installed packages and install package1 and package2.
-->
この例では、インストールされているパッケージすべてをアップデートし、package1 と package2 をインストールします。
<br>
<br>

##### cloud-init に対するその他の命令 <!-- More instructions for cloud-init -->
<!--
For more instructions see [examples in  the cloud-init documentation](https://cloudinit.readthedocs.io/en/latest/topics/examples.html).
-->
より詳細な命令については [examples in  the cloud-init documentation](https://cloudinit.readthedocs.io/en/latest/topics/examples.html) をご覧ください。

##### インスタンスデータの他の設定セクション <!-- Other config-sections for instance data -->

<!--
- `user.meta-data` - see [cloud-init docs - instance metadata](https://cloudinit.readthedocs.io/en/latest/topics/instancedata.html)
- `user.vendor-data` - see [cloud-init docs - vendordata](https://cloudinit.readthedocs.io/en/latest/topics/vendordata.html)
- `user.network-config` - see [cloud-init docs - network configuration](https://cloudinit.readthedocs.io/en/latest/topics/network-config.html)
-->
- `user.meta-data` - [cloud-init docs - instance metadata](https://cloudinit.readthedocs.io/en/latest/topics/instancedata.html) を参照
- `user.vendor-data` - [cloud-init docs - vendordata](https://cloudinit.readthedocs.io/en/latest/topics/vendordata.html) を参照
- `user.network-config` - [cloud-init docs - network configuration](https://cloudinit.readthedocs.io/en/latest/topics/network-config.html) を参照

**Tips:**
<!--
You can check whether the syntax is correct with: [cloud-init FAQ - debug user-data](https://cloudinit.readthedocs.io/en/latest/topics/faq.html#how-can-i-debug-my-user-data)
-->
cloud-init の書式が合っているかどうかは [cloud-init FAQ - debug user-data](https://cloudinit.readthedocs.io/en/latest/topics/faq.html#how-can-i-debug-my-user-data) でチェックできます。

### プロファイルの適用 <!-- Apply the profile -->
<!--
After you saved the textfile, we can apply it with the following steps.
-->
テキストファイルを保存したあとは、次のステップでそのファイルを適用します。

<!--
Create a new profile in LXD:
-->
LXD で新しいプロファイルを作成します:

	lxc profile create cloud-profile1

<!--
Apply the textfile to the new profile:
-->
そして、そのテキストファイルを作成したプロファイルに適用します:

	cat cloud-profile1.profile | lxc profile edit cloud-profile1

#### cloud-init を使ったインスタンスの起動 <!-- Launch the instance with cloud-init -->
<!--
Apply the profile during `lxc launch` with flag `-p`:
-->
`lxc launch` コマンドに `-p` オプションを指定して、起動時にプロファイルを適用します:

	lxc launch imageserver:image instancename -p cloud-profile1

<!--
Now cloud-init will start working.
-->
これで cloud-init が動作し始めます。

<!--
!!! note
	Cloud-init may take a while until it is finished, depending on your instructions.
-->
!!! note "注意"
	cloud-init は、指定した内容によっては終了までに時間がかかるかもしれません。

#### cloud-init の状態 <!-- Cloud-init status -->
<!--
You can get the status of cloud-init with:
-->
次のようにして、cloud-init の状態を取得できます:

	cloud-init status

<!--
Reports:
-->
上記のコマンドを実行した場合の結果:
<!--
`status: running`
: means cloud-init is still working
-->
`status: running`
: cloud-init は実行中です。

<!--
or
-->
もしくは

<!--
`status: done`
: means cloud-init has finished work
-->
`status: done`
: cloud-init の実行が終了しました。

<br>

<!--
You can also use the following flag, which will only respond when cloud-init is finished:
-->
次のような `--wait` オプションを指定して、cloud-init が終了したときだけ反応を返すようにできます:

	cloud-init status --wait


### さらなる情報: <!-- More information: -->
<!--
See:
-->
次をご覧ください:
 [Cloud-init documentation](https://cloudinit.readthedocs.io/en/latest/)


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
- [Security](#security)
- [Remote Servers](#remote-servers)
-->
- [プロジェクト](#_23)
- [セキュリティ](#_24)
- [リモートサーバー](#_25)

## プロジェクト <!-- Projects -->
<!--
You can split your server into projects.
Each project can have it's own instances, profiles etc.
See [LXD documentation - Projects](/lxd/docs/master/projects) for more information and configuration.
-->
サーバーをプロジェクトに分割できます。プロジェクトでは、独自のインスタンスやプロファイルを持つことができます。
詳しい情報や設定は [LXDドキュメントのプロジェクトの項](https://lxd-ja.readthedocs.io/ja/latest/projects/) をご覧ください。

## セキュリティ <!-- Security -->
<!--
See [LXD documentation - Security](/lxd/docs/master/security) for details on Server security.
-->
サーバーセキュリティの詳細は [LXDドキュメントのセキュリティの項](https://lxd-ja.readthedocs.io/ja/latest/security/) をご覧ください。

## リモートサーバー <!-- Remote Servers -->
<!--
See [Image handling](/lxd/docs/master/image-handling/) for detailed information.
-->
詳しい情報は[イメージの扱い](https://lxd-ja.readthedocs.io/ja/latest/image-handling/)（[英語版](/lxd/docs/master/image-handling/)）をご覧ください。

<!--
LXD supports different kinds of remote servers:
-->
LXD は色々な種類のリモートサーバーをサポートしています:

<!--
* `Simple streams servers`: Pure image servers that use the [simple streams format](https://git.launchpad.net/simplestreams/tree/).
* `Public LXD servers`: Empty LXD servers with no storage pools and no networks that serve solely as image servers. Set the `core.https_address` configuration option (see [Server configuration](/lxd/docs/master/server/#server-configuration)) to `:8443` and do not configure any authentication methods to make the LXD server publicly available over the network on port 8443. Then set the images that you want to share to `public`.
* `LXD servers`: Regular LXD servers that you can manage over a network, and that can also be used as image servers. For security reasons, you should restrict the access to the remote API and configure an authentication method to control access. See [Access to the remote API](/lxd/docs/master/security/#access-to-the-remote-api) and [Remote API authentication](/lxd/docs/master/authentication/) for more information.
-->
* `Simple streams サーバー`: [simple streams フォーマット](https://git.launchpad.net/simplestreams/tree/)を使った純粋なイメージサーバー
* `公開 LXD サーバー`: ストレージプールやネットワークを持たない空の LXD サーバーで、イメージサーバーとしてのみ機能します。`core.https_address` オプション（詳しくは[サーバー設定](https://lxd-ja.readthedocs.io/ja/latest/server/)を参照）を `:8443` に設定し、認証を設定しないことで、ネットワークに 8443 番ポートで LXD サーバーを一般公開します。そして、共有したいイメージを `public` に設定します。
* `LXD サーバー`: ネットワーク上で管理できる通常の LXD サーバーを、イメージサーバーとしても使えます。セキュリティ上の理由から、リモート API へのアクセスを制限し、アクセスを制御するために認証方法を設定する必要があります。詳細は、[リモート API へのアクセス](https://lxd-ja.readthedocs.io/ja/latest/security/#api)と[リモート API 認証](https://lxd-ja.readthedocs.io/ja/latest/authentication/)をご覧ください。

### リモートの Simple streams サーバーの使用 <!-- Use a remote simple streams server -->

<!--
To add a simple streams server as a remote, use the following command:
-->
リモートサーバーとして Simple streams サーバーを追加するには、次のように実行します:

	lxc remote add some-name https://example.com/some/path --protocol=simplestreams

### リモートの LXD サーバーの使用 <!-- Use a remote LXD server -->

<!--
To add a LXD server as a remote, use the following command:
-->
リモートサーバーとして LXD サーバーを追加するには、次のように実行します:

	lxc remote add some-name <IP|FQDN|URL> [flags]

<!--
Some authentication methods require specific flags (for example, use `lxc remote add some-name <IP|FQDN|URL> --auth-type=candid` for Candid authentication). See [Remote API authentication](/lxd/docs/master/authentication/) for more information.
-->
認証方式によっては特定のオプションが必要です（例えば、Candid 認証の場合は `lxc remote add some-name <IP|FQDN|URL> --auth-type=candid` となります）。詳しい情報は[リモート API 認証](https://lxd-ja.readthedocs.io/ja/latest/authentication/)をご覧ください。

<!--
An example using an IP address:
-->
IP アドレスを使う場合の例は次のとおりです:

    lxc remote add remoteserver2 1.2.3.4

<!--
This will prompt you to confirm the remote server fingerprint and then ask you for the password or token, depending on the authentication method used by the remote.
-->
実行すると、リモートサーバーのフィンガープリントを確認するプロンプトが表示されます。それからリモートサーバーが使用している認証方式に応じて、パスワードまたはトークンを聞かれます。

### リモートサーバーの使用 <!-- Use remote servers -->

#### リモートサーバーのイメージリスト <!-- Image list on a remote server -->
<!--
A list of images on that server can be obtained with:
-->
リモートサーバーのイメージリストは次のように取得できます:

    lxc image list my-images:

#### インスタンスの起動 <!-- Launch an instance -->
<!--
Launch an instance based on an image of that server:
-->
そのサーバーのイメージを使ってインスタンスを起動するには:

    lxc launch some-name:image-name your-instance [--vm]

#### リモートサーバーのインスタンスの管理 <!-- Manage instances on a remote server -->
<!--
You can use the same commands but prefixing the server and instance name like:
-->
次のようにサーバー名、イメージ名の前にリモートホスト名を付けて、（ローカルで実行するのと）同じコマンドを使用できます:

    lxc exec remoteserver-name:instancename -- apt-get update

<!--
You can replace `apt-get update` with any command the instance supports.
-->
そのインスタンスで使える任意のコマンドが `apt-get update` の代わりに使えます。

# イメージ - Part 2 <!-- Images - Part 2 -->

## イメージに関する高度なオプション <!-- Advanced options for Images -->

<!--
1. [Add additional remote (image) servers](#add-remote-servers)
2. [Manually import an image](#import-images)
3. [Build your own image](#build-images)
-->
1. [リモートの（イメージ）サーバーの追加](#simplestream_1)
2. [イメージの手動インポート](#_32)
3. [イメージのビルド](#_38)

### イメージのインポート <!-- Import Images -->
<!--
You can import images, that you:
-->
次のようなイメージをインポートできます:

<!--
- built yourself (see [Build Images](#build-images)),
- downloaded manually (see [Manual Download](#manual-download))
- exported from images or containers (see [Export Images](#export-images) and [Create Image from Containers](#create-image-from-containers))
-->
- 自分でビルドしたイメージ（[イメージのビルド](#_38)参照）
- （手動で）ダウンロードしたイメージ（[手動でのダウンロード](#_35)参照）
- イメージやコンテナからエクスポートしたイメージ（[イメージのエクスポート](#_36)と[コンテナからのイメージの作成](#_37)参照）

##### コンテナイメージのインポート <!-- Import container image -->

<!--
Components:
-->
次のようなコンポーネントがある場合:

- lxd.tar.xz
- rootfs.squashfs

<!--
Use:
-->
次のように実行します:

	lxc image import lxd.tar.xz rootfs.squashfs --alias custom-imagename


##### 仮想マシンイメージのインポート <!-- Import virtual-machine image -->

<!--
Components:
-->
次のようなコンポーネントがある場合:

- lxd.tar.xz
- disk.qcow2

<!--
Use:
-->
次のように実行します:

	lxc image import lxd.tar.xz disk.qcow2 --alias custom-imagename


#### 手動でのダウンロード <!-- Manual download -->
<!--
You can also download images manually.
For that you need to download the components described [above](#import-images).
-->
手動でイメージをダウンロードできます。その場合、[イメージのインポート](#_32)で説明したようなコンポーネントをダウンロードする必要があります。

##### LXD公式のイメージサーバーから <!-- From official LXD imageserver -->

<!--
**Note:** It is easier to use the usual method with `lxc launch`.
Use manual download only if you have a specific reason, like modification of the files before use for example.
-->
**注意:** 通常使用する `lxc launch` を使ったほうが簡単です。例えば、使用前にファイルを修正するなどの、何か特別な理由があるときのみ手動でのダウンロードを使用してください。

<!--
**Link to official Imageserver:**
[https://images.linuxcontainers.org/images/](https://images.linuxcontainers.org/images/)
-->
**公式のイメージサーバーへのリンク**
[https://images.linuxcontainers.org/images/](https://images.linuxcontainers.org/images/)

### イメージのエクスポート <!-- Export Images -->
<!--
Use:
-->
次のように実行します:

	lxc image export imagename [target folder] [flags]

<!--
Flags:
`--vm` - Query virtual machine images
-->
オプション:
`--vm` - 仮想マシンイメージを問い合わせる

#### コンテナからのイメージの作成 <!-- Create Image from Containers -->
<!--
See command:
-->
次のコマンドを実行し、ヘルプをご覧ください:

	lxc publish

### イメージのビルド <!-- Build Images -->
<!--
For building your own images, you can use [`distrobuilder`](https://github.com/lxc/distrobuilder) (a tool developed by us).
-->
自分でイメージをビルドする場合に、[`distrobuilder`](https://github.com/lxc/distrobuilder) を使えます（われわれが開発しています）。

#### distrobuilder のインストール <!-- Install distrobuilder -->
<!--
You can install distrobuilder via snap or compile it manually:
-->
distrobuilder は snap 経由、もしくは手動でインストールできます:

##### Snap 経由でのインストール <!-- Install via Snap -->
<!--
See [https://snapcraft.io/distrobuilder](https://snapcraft.io/distrobuilder).
-->
[https://snapcraft.io/distrobuilder](https://snapcraft.io/distrobuilder) をご覧ください。

##### コンパイル <!-- Compile -->
<!--
See [Instructions on distrobuilder GitHub repo](https://github.com/lxc/distrobuilder/#installing-from-source).
-->
[distrobuilder の Github リポジトリの手順](https://github.com/lxc/distrobuilder/#installing-from-source) をご覧ください。

#### テンプレートの作成・編集 <!-- Write or Edit a Template -->
<!--
You need an image template (e.g. `ubuntu.yaml`) to give instructions to distrobuilder.
-->
distrobuilder に手順を示すためのイメージテンプレート（例: `ubuntu.yaml`）が必要です。

<!--
You can start by using one of the example templates below.
Modify those templates so they fit your needs.
See [Template details](#template-details) below for an overview of configuration keys.
-->
下記のサンプルテンプレートのひとつを使って作成を始めることができます。ニーズに合うようにテンプレートを変更してください。設定キーの詳細については [テンプレートの詳細](#_42) をご覧ください。

##### サンプルテンプレート <!-- Example Templates -->
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

##### テンプレートの詳細 <!-- Template details -->
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
| `image` | ディストリビューション、アーキテクチャ、リリースなどを定義します | [image.md](https://github.com/lxc/distrobuilder/blob/master/doc/image.md) 参照 |
| `source` | メインパッケージのソースやキーなどを定義します | [source.md](https://github.com/lxc/distrobuilder/blob/master/doc/source.md) 参照 |
| `targets` | 特定のターゲット（例: LXDクライアント、インスタンスなど）に対する設定を定義します | [targets.md](https://github.com/lxc/distrobuilder/blob/master/doc/targets.md) 参照 |
| `files` | ファイルを変更するための generators を定義します | [generators.md](https://github.com/lxc/distrobuilder/blob/master/doc/generators.md) 参照 |
| `packages` | インストールしたり削除したりするパッケージ、追加するリポジトリを定義します | [packages.md](https://github.com/lxc/distrobuilder/blob/master/doc/packages.md) 参照 |
| `actions` | イメージをビルドする途中の特定のステップの後に実行するスクリプトを定義します | [actions.md](https://github.com/lxc/distrobuilder/blob/master/doc/actions.md) 参照 |
| `mappings` | 特定のディストリビューションで使われているアーキテクチャ文字列と LXD で使われるアーキテクチャ文字列の差異をマッピングします (例: x86_64: amd64) | [mappings.md](https://github.com/lxc/distrobuilder/blob/master/doc/mappings.md) 参照 |

<!--
!!! note "Note for VMs"
	You should either build an image with cloud-init support (provides automatic size growth) or set a higher size in the template, because the standard size is relatively small (~4 GB).
	Alternatively you can also grow it manually.
-->
!!! note "VMでの注意"
	標準サイズが比較的小さい（〜4GB）ので、cloud-init サポートでイメージをビルドするか（自動的にサイズが大きくなります）、テンプレートにより大きなサイズを設定するかのどちらかを行う必要があります。
	または手動で拡張することもできます。

#### イメージのビルド <!-- Build an Image -->

##### コンテナイメージ <!-- Container Image -->
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
After the image is built, see [Import Images](#import-images) for how to import your image to LXD.
-->
イメージをビルドした後、ビルドしたイメージを LXD にインポートするためには [イメージのインポート](#_32) をご覧ください。

<!--
See [Building.md on distrobuilder's GitHub repo](https://github.com/lxc/distrobuilder/blob/master/doc/building.md#lxd-image) for details.
-->
詳しくは [distrobuilder の Github リポジトリの Building.md](https://github.com/lxc/distrobuilder/blob/master/doc/building.md#lxd-image) をご覧ください。

##### 仮想マシンイメージ <!-- Virtual Machines Image -->
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
After the image is built, see [Import Images](#import-images) for how to import your image to LXD.
-->
イメージをビルドした後、ビルドしたイメージを LXD にインポートするためには [イメージのインポート](#_32) をご覧ください。

#### さらなる情報 <!-- More information -->

<!--
[Distrobuilder GitHub repo](https://github.com/lxc/distrobuilder)

[Distrobuilder documentation](https://github.com/lxc/distrobuilder/tree/master/doc)
-->
* [Distrobuilder GitHub リポジトリ](https://github.com/lxc/distrobuilder)
* [Distrobuilder ドキュメント](https://github.com/lxc/distrobuilder/tree/master/doc)

# ネットワーク <!-- Networks -->
<!--
See LXD-documentation for details:
-->
詳しくは LXD ドキュメントをご覧ください:

<!--
* [Networks documentation](/lxd/docs/master/networks)
* [Network devices](/lxd/docs/master/instances#type-nic)
* [Proxy devices](/lxd/docs/master/instances#type-proxy)
-->
* [ネットワーク](https://lxd-ja.readthedocs.io/ja/latest/networks/)
* [ネットワークデバイス](https://lxd-ja.readthedocs.io/ja/latest/instances/#type-nic)
* [プロキシデバイス](https://lxd-ja.readthedocs.io/ja/latest/instances/#type-proxy)


# ストレージ <!-- Storages -->
<!--
See LXD-documentation for details:
[Storage documentation](/lxd/docs/master/storage)
-->
詳しくは LXD ドキュメントをご覧ください:

* [ストレージプール](https://lxd-ja.readthedocs.io/ja/latest/storage/)

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

# Tips & Tricks

#### インスタンスの誤った削除を防ぐ <!-- Prevent accidental deletion of an instance -->
<!--
`Method 1`: Set an alias to be always prompted for approval when using `lxc delete`:
-->
`方法1`: `lxc delete` を使う際には常にプロンプトで確認するようにエイリアスを設定する:

	lxc alias add delete "delete -i"

<!--
`Method 2`: Or apply this configuration key to the instance: `security.protection.delete=true`
This way the instance can't be deleted, until you change this config key.
-->
`方法2`: インスタンスにつぎの設定を行います: `security.protection.delete=true`。この設定キーを削除しない限りは、インスタンスを削除できません。


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
* [LXD ドキュメント](https://lxd-ja.readthedocs.io/ja/latest/) （オリジナル: [LXD documentation](/lxd/docs/master/index)）
* [フォーラムのTutorials Section](https://discuss.linuxcontainers.org/c/tutorials)
