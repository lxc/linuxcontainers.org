## 目次 <!-- Contents -->

* [Introduction](#introduction)
* [Configuration of Instances](#configuration-of-instances)
	* [Difference between Containers and Virtual Machines](#difference-between-containers-and-virtual-machines)
	* [lxc launch flags](#lxc-launch-flags)
	* [Profiles](#profiles)
		* [Create a profile](#create-a-profile)
		* [Edit a profile](#edit-a-profile)
		* [Write a profile](#write-a-profile)
	* [Apply and edit options later](#apply-and-edit-options-later)
	* [Show configuration](#show-configuration)
	* [Cloud-init](#cloud-init)
* [Server configuration](#server-configuration)
	* [Projects](#projects)
	* [Security](#security)
	* [Remote Servers](#remote-servers)
		* [Setup simplestream servers](#setup-simplestream-servers)
		* [Setup your LXD server as remote server](#setup-your-lxd-server-as-remote-server)
		* [Connect to remote servers](#add-remote-servers)
		* [Use remote servers](#use-remote-servers)
* [Images - Part 2](#images-part-2)
	* [Import Images](#import-images)
	* [Manual download](#manual-download)
	* [Export Images](#export-images)
		* [Create Image from Containers](#create-image-from-containers)
	* [Build Images](#build-images)
		* [Write or Edit a Template](#write-or-edit-a-template)
* [Networks](#networks)
* [Storages](#storages)
* [Command aliases](#command-aliases)
* [Tips & Tricks](#tips-tricks)
* [Further Information & Links](#further-information-links)

---

# はじめに <!-- Introduction -->

<!--
!!! note "Note:"
	If you haven't set up LXD yet, take a look at the [Getting-Started Guide](/lxd/getting-started-cli/) first.
	{: .p-noteadm }
-->
!!! note "注意:"
	まだ LXD をセットアップしていないのであれば、まずは「[はじめに - コマンドライン](/ja/lxd/getting-started-cli/)」を最初にご覧ください。
	{: .p-noteadm }

<!--
This Guide gives you more information about the several features of LXD.
-->
このガイドでは、いくつかの LXD の機能について詳細な情報を紹介しています。


# インスタンスの設定 <!-- Configuration of instances -->
<!--
A list of configuration keys can be found in the [LXD documentation for instances](/lxd/docs/master/instances#keyvalue-configuration).
-->
設定キーのリストは[LXDドキュメントのインスタンスの項](https://lxd-ja.readthedocs.io/ja/latest/instances/)でご覧いただけます。

<!--
You can apply them during launch of instances (see [launch flags](#lxc-launch-flags)) or add them [later](#Apply-and-edit-options-later).
-->
インスタンスを起動する際にオプションを指定することも（[起動オプション](#lxc-launch-flags)をご覧ください）、[あとで追加する](#apply-and-edit-options-later)こともできます。

<!--
Basically you can apply two types of configurations:
-->
基本的に、次のふたつのタイプの設定を追加できます:

- [一般オプション](https://lxd-ja.readthedocs.io/ja/latest/instances/#keyvalue) <!-- [General options](/lxd/docs/master/instances#keyvalue-configuration), including: -->
    - インスタンスの起動 <!-- instance start -->
    - セキュリティ <!-- security -->
    - ハードウェアに対する制限 <!-- hardware limits -->
    - カーネルモジュール <!-- kernel modules -->
    - スナップショット <!-- snapshots -->
    - user キー（cloud-init用）<!-- user keys (for cloud-init instructions) -->
    - など <!-- and more  -->
- [デバイス](https://lxd-ja.readthedocs.io/ja/latest/instances/#_4) <!-- [Devices](/lxd/docs/master/instances#device-types), including: -->
    - ネットワーク <!-- network -->
    - ストレージ <!-- storage -->
    - usb
    - ソケット <!-- sockets -->
    - gpu
    - など <!-- and more -->


### コンテナと仮想マシンの違い <!-- Difference between Containers and Virtual Machines -->
<!--
For now virtual machines support less features than containers.   
You can see what configuration options are available for virtual machines in the [LXD documentation for instances](/lxd/docs/master/instances#keyvalue-configuration).   
All categories and keys that contain the terms `virtual-machine` or `VM` are supported.
-->
現時点では、仮想マシンに対するサポートは、コンテナがサポートする機能よりも少ないです。
仮想マシンで設定できるオプションは[LXD公式文書のインスタンスのセクション](https://lxd-ja.readthedocs.io/ja/latest/instances/#keyvalue)でご覧いただけます。
「サポートされるインスタンスタイプ」で`VM`と書かれているカテゴリー、"Condition" で `virtual-machine` と書かれている設定キーが仮想マシンでサポートされています。

### lxc launch コマンドのオプション <!-- lxc launch flags -->
<!--
You can apply flags to add configuration options to `lxc launch`.
-->
`lxc launch`でオプションを指定して、設定オプションを追加できます。

##### 設定に関連するオプションのリスト: <!-- Short list of flags: -->
<!-- use html table? -->
```
-p profilename   # プロファイルの適用

-c key=value   # 設定キーと値の適用
```

<!--
!!! note "Note:"
	See [Profiles](#profiles) below for details.
	{: .p-noteadm }
-->
!!! note "注意:"
	詳しくは後の[プロファイル](#profiles)をご覧ください。
	{: .p-noteadm }

<!--
Usage:
-->
使い方:

	lxc launch imageserver:imagename instancename -p profile1 -c key1=value

<!--
**Note:**   
-->
**注意**  

<!--
To apply multiple profiles or config keys, use one flag for each, like:
-->
複数のプロファイルや設定キーを適用するには、次のようにそれぞれにひとつの設定を与えます:

	lxc launch imageserver:imagename instancename -p profile1 -p profile2
	
	lxc launch imageserver:imagename instancename -c key1=value -c key2=value


### プロファイル <!-- Profiles -->
<!--
Profiles are like configuration files for instances (but they are saved in a database).
-->
プロファイルはインスタンスに対する設定ファイルのようなものです（設定はデータベースに保存されますが）。

#### プロファイルを与えない場合・デフォルトプロファイル <!-- No profile/Default profile -->
<!--
If you don't apply specific profiles to an instance, only the `default` profile is applied automatically.
-->
特定のプロファイルをインスタンスに適用しない場合、`default` という名前のプロファイルのみが自動的に適用されます。

<!--
You can view the content of the `default` profile with:
-->
次のように `default` プロファイルの内容を確認できます:

	lxc profile show default

#### プロファイルの作成 <!-- Create a profile -->
<!--
Use:
-->
次のように作成します:

	lxc profile create profilename

<!--
After that edit the profile, see below.
-->
その後、あとで説明するようにプロファイルを編集します。

#### プロファイルの編集 <!-- Edit a profile -->
<!--
Profiles can be edited in multiple ways:
-->
プロファイルを編集する方法は複数あります:

##### 1. テキストファイルに記載し、プロファイルの内容を適用する <!-- 1. Write a textfile and apply the content to a profile -->
<!--
See [Write a profile](#write-a-profile) below for details.
-->
詳しくはあとの[プロファイルの記述](#write-a-profile)をご覧ください。

##### 2. ターミナルエディタでプロファイルを編集 <!-- 2. Edit a profile with a terminal editor -->
<!--
Use:
-->
次のように編集します:

	lxc profile edit profilename

###### エディタの選択 <!-- Choose a specific editor -->
<!--
You can set the editor in `/home/user/.profile`.
-->
`/home/user/.profile`でエディタを設定できます。

<!--
This will set the standard terminal editor to `nano`:
-->
次のように標準のターミナルエディタとして`nano`を設定します:

	echo 'export EDITOR=nano' >> ~/.profile 


##### プロファイル中の設定キーに値を設定する <!-- 3. Set specific keys in a profile -->
<!--
Use:
-->
次のように設定します:

	lxc profile set profilename key=value


#### プロファイルを記述する <!-- Write a profile -->
<!--
Profiles are written in yaml (markup language).
So you need to follow a specific syntax.
-->
プロファイルは yaml で記述します。次のような指定の書式にしたがう必要があります。

<!--
Steps:
-->
手順:

1. 空のテキストファイルを作成し、`profilename.profile` という名前を付けます（`profilename`という部分は任意の名前に置き換えてください） <!-- Create an empty textfile and name it `profilename.profile` (replace `profilename` with a name of your choice). -->
2. 好きなエディタでそのファイルを開きます <!-- Open the file with a texteditor of your choice. -->
3. 編集して保存します <!-- Edit and save. -->

<!--
**Example** (`default` profile):
-->
**例** （`default`プロファイル）

```
config: {}
description: ""
devices:
  eth0:
    name: eth0
    nictype: bridged
    parent: lxdbr0
    type: nic
  root:
    path: /
    pool: one
    type: disk
name: default
used_by: []

```

<!--
**Explanation:**
-->
**説明:**

##### `config:`
<!--
You can apply all configuration keys listed in [LXD documentation - Instance keys](https://linuxcontainers.org/lxd/docs/master/instances#keyvalue-configuration).
-->
[LXD公式ドキュメント - インスタンスの設定キーの項](https://lxd-ja.readthedocs.io/ja/latest/instances/#keyvalue) にあるすべての設定キーを適用できます。

<!--
  Example:
  -->
例:

```
config:
  snapshots.expiry: 1M
  security.protection.delete: true
  security.idmap.isolated: true
  
```

##### `description:`
<!--
Adds a description for the profile. <!\-\- or the instance? \-\->   
Can be empty.
-->
プロファイルの説明を追加できます。空でも構いません。

##### `devices:`
<!--
You can apply all configuration keys listed in [LXD documentation - Instance device types](https://linuxcontainers.org/lxd/docs/master/instances#device-types).
-->
[LXD公式ドキュメント - インスタンスのデバイスタイプの項](https://lxd-ja.readthedocs.io/ja/latest/instances/#_4) にあるすべての設定キーを適用できます。

##### `name:`
<!--
Name of the profile (replace with a name of your choice).
-->
プロファイル名（任意の名前を付けられます）。

##### `used_by:`
<!--
Stays empty, will indicate to which instances this profile is applied.
-->
空のままにしておきます。どのインスタンスがこのプロファイルを適用したかが入ります。


#### プロファイルを LXD に追加 <!-- Add the profile to LXD -->
<!--
Create a new empty profile:
-->
空のプロファイルを作成します:
 
	lxc profile create myprofile

<!--
"Copy" the textfile to the new profile:
-->
テキストファイルを新しいプロファイルに「コピー」します:

	cat myprofile.profile | lxc profile edit myprofile

<!--
Now you can apply this profile to an instance during [launch](#lxc-launch-flags) or later (see below).
-->
これで、このプロファイルをインスタンスを[起動](#lxc-launch-flags)する際か、あとで適用できます（後述）。

### あとで設定オプションを適用・編集する <!-- Apply and edit options later -->
<!--
You can apply/remove/modify a profile or [edit the instance configuration directly](#edit-instance-configuration).
-->
プロファイルを適用・削除・修正したり、直接[インスタンスの設定を編集](#edit-instance-configuration)できます。

#### プロファイルの適用 <!-- Apply a profile -->
<!--
Use:
-->
次のように実行します:

	lxc profile add instancename profilename

#### プロファイルの削除 <!-- Remove a profile -->
<!--
Use:
-->
次のように削除します:

	lxc profile remove instancename profilename

#### プロファイルの編集 <!-- Edit a profile -->
<!--
Use:
-->
次のように編集します:

	lxc profile edit profilename

#### インスタンスの設定の編集 <!-- Edit instance configuration -->
<!--
Edit the instance configuration in a terminal editor:
-->
ターミナルエディタでインスタンスの設定を編集するには:

	lxc config edit instancename

<!--
Set specific keys:
-->
特定の設定キーに設定を行うには:

	lxc config set instancename key=value


### 設定の確認 <!-- Show configuration -->
<!--
This will show all applied configurations (including attached profiles):
-->
次のように適用されているすべての設定を確認します（適用されているプロファイルを含む）;

	lxc config show instancename -e


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
cloud-init に対する各命令は、`config` → `user.user-data` セクションに適用されます（もしくはインスタンスデータの他のセクション。[下記](#other-config-sections-for-instance-data)を参照）:


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
!!! note "Note:"
	Cloud-init may take a while until it is finished, depending on your instructions.
	{: .p-noteadm }
-->
!!! note "注意:"
	cloud-init は、指定した内容によっては終了までに時間がかかるかもしれません。
	{: .p-noteadm }

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
- [プロジェクト](#projects)
- [セキュリティ](#security)
- [リモートサーバー](#remote-servers)

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
LXD supports different kinds of remote servers:
-->
LXD はいろいろな種類のリモートサーバーに対応しています:

<!--
* `simplestream servers`: pure image servers (see [below](#setup-simplestream-servers))
* `LXD-Servers`: regular LXD-Servers that you can manage over a network (can also be used as image servers). You can choose between multiple methods:
    * [Default (TLS + Password)](#default-tls-password)
    * [Public (image) server](#public-image-server)
    * [Candid](#candid) (Authentication service)
    * [Candid+RBAC](#candid-rbac) (Role Based Access Control)
-->
* `simplestream servers`: 純粋なイメージサーバー（[後述](#setup-simplestream-servers)）
* `LXD-Servers`: ネットワーク経由で管理できる通常の LXD サーバー（イメージサーバーとしても使えます）。複数の方法を選択できます:
    * [デフォルト（TLS + Password）](#default-image-server)
	* [公開（イメージ）サーバー](#public-image-server)
	* [Candid](#candid) （認証サービス）
	* [Candid+RBAC](#candid-rbac) （ロールベースのアクセスコントロール）

### simplestream サーバーのセットアップ <!-- Setup simplestream servers -->
<!--
There are multiple servers available, for example:   
-->
いろいろなサーバーが存在します。例えば:   

<!--
- the LXD image server from Avature: [Link to GitHub Repo](https://github.com/Avature/lxd-image-server)
-->
- Avature の LXD イメージサーバー: [GitHub リポジトリ](https://github.com/Avature/lxd-image-server)

<!--
**Connect to a simplestreams server:**   
-->
**simplestream サーバーへの接続:**   
<!--
See [Add Simplestream servers](#add-simplestream-servers).
-->
[simplestream サーバーの追加](#add-simplestream-servers)をご覧ください。

### リモートサーバーとして LXD サーバーをセットアップする <!-- Setup your LXD server as remote server -->
#### デフォルト（TLS + Password） <!-- Default (TLS + Password) -->
<!--
This will setup a server with authentication based on TLS-certificates.   
For easier adding of clients, you can set a password which will authenticate the clients the first time they connect.
-->
ここでは TLS 証明書ベースの認証でサーバーをセットアップします。クライアントの追加を簡単にするために、初回接続時にクライアントを認証するためのパスワードを設定できます。

<!--
Set up a LXD-server as a remote server, with:
-->
次のようにリモートサーバーとして LXD サーバーを設定します:

    lxc config set core.https_address "[::]"
    lxc config set core.trust_password some-password

<!--
`core.https_address "[::]"` tells LXD to bind all addresses on port 8443.
`core.trust_password` sets a trust password to be used by new clients.
-->

* `core.https_address "[::]"` は LXD に、全アドレスのポート 8443 番をバインドするよう設定します
* `core.trust_password` は新しいクライアントのための認証パスワードを設定します

<!--
**Note:**
-->
**注意**
<!--
It is recommended that `core.https_address` should be set to the single address where the server should be available (rather than any address on the host), and firewall rules should be set to only allow access to the LXD port from authorized hosts/subnets.
-->
`core.https_address` はサーバーで使える単一のアドレスに設定することが推奨です（ホスト上の全アドレスでなく）。そして信頼できるホスト・サブネットからだけ LXD へのアクセスを許可するファイアウォールのルールを設定するのがよいでしょう。

<!--
Furthermore, `core.trust_password` should be unset after all clients have been added. This prevents brute-force attacks trying to guess the password.
-->
さらに `core.trust_password` は、すべてのクライアントを追加したあとに削除すべきです。これにより、ブルートフォース攻撃でパスワードを推測することを防げます。

<!--
For details see: [LXD Documentation - Security](/lxd/docs/master/security)
-->
詳しくは [LXDドキュメントのセキュリティの項](https://lxd-ja.readthedocs.io/ja/latest/security/) をご覧ください。

<br>

<!--
**Connect to this Server:**   
-->
**サーバーへの接続:**   
<!--
See [Add LXD servers](#add-lxd-servers) for how to add a server to your clients remote server list.
-->
クライアントのリモートサーバーリストにサーバーを追加するには、[リモートサーバーの追加](#add-remote-servers) をご覧ください。

#### パブリック・イメージサーバー<!-- Public image server -->
<!--
You can use an empty LXD Server (with no storage pools, no networks etc.) as a public image server.
-->
（ストレージプールやネットワークなどがない）空の LXD サーバーをパブリックのイメージサーバーとして使うことができます。

<!--
Install LXD and run:
-->
LXD をインストールし、次のように実行します:

	lxc config set core.https_address :8443 

<!--
This will make the LXD-Server available over network on port 8443.   
You also need to set the images you want to share, to `public`.
-->
これで LXD サーバーが、8443 番ポートでネットワーク経由で利用できるようになります。さらに、共有したいイメージを `public` に設定する必要があります。

#### Candid
<!--
Candid is an Authentication service.   
See [Ubuntu tutorials - Candid authentication for LXD](https://ubuntu.com/tutorials/candid-authentication-lxd#1-overview) for details and howto.
-->
Candid は認証サービスです。
詳細と使い方は [Ubuntu のチュートリアル - Candid authentication for LXD](https://ubuntu.com/tutorials/candid-authentication-lxd#1-overview) をご覧ください。

#### Candid + RBAC
<!--
See [LXD documentation - Security RBAC](https://linuxcontainers.org/lxd/docs/master/security#role-based-access-control-rbac) for details.
-->
詳しくは [LXD ドキュメントのセキュリティのRBACに関する部分](https://lxd-ja.readthedocs.io/ja/latest/security/#role-based-access-control-rbac) をご覧ください。

### リモートーサーバーの追加 <!-- Add remote servers -->

#### Simplestream サーバーの追加 <!-- Add Simplestream servers -->
<!--
Use:
-->
次のように追加します:

	lxc remote add some-name https://example.com/some/path --protocol=simplestreams

<!--
A list of images on that server can be obtained with:
-->
サーバーに存在するイメージのリストは次のように取得できます:

    lxc image list some-name:

<!--
Launch a container based on an image of that server:
-->
そのサーバーのイメージを使ってコンテナを起動するには次のように実行します:
   
    lxc launch some-name:image-name your-container


#### リモートの LXD サーバーの追加 <!-- Add remote LXD servers -->

##### デフォルト（TLS + パスワード） <!-- Default (TLS + Password) -->
<!--
You can add more servers to the remote server list with:
-->
次のようにリモートサーバーのリストにサーバーを追加できます:

	lxc remote add some-name <IP|FQDN|URL> [flags]   

<!--
Example with IP:
-->
IP アドレスを使う場合の例は次のとおりです:

    lxc remote add remoteserver2 1.2.3.4 

<!--
This will prompt you to confirm the remote server fingerprint and then ask you for the password.
-->
実行すると、リモートサーバーのフィンガープリントを確認するプロンプトが表示されます。それからパスワードを聞かれます。

##### Candid
<!--
Use:
-->
次のように実行します:

	lxc remote add some-name <IP|FQDN|URL> --auth-type=candid


#### リモートサーバーの使用 <!-- Use remote servers -->

#### リモートサーバーのイメージリスト <!-- Image list on a remote server -->
<!--
A list of images on that server can be obtained with:
-->
リモートサーバーのイメージリストは次のように取得できます:

    lxc image list my-images:

#### リモートサーバーのインスタンスの管理 <!-- Manage instances on a remote server -->
<!--
You can use the same commands but prefixing the instance
and images name with the remote host like:
-->
次のようにインスタンス名、イメージ名の前にリモートホスト名を付けて、（ローカルで実行するのと）同じコマンドを使用できます:

    lxc exec remoteserver-name:instancename -- apt-get update
   

# イメージ - Part 2 <!-- Images - Part 2 -->

## イメージに関する高度なオプション <!-- Advanced options for Images -->

<!--
1. [Add additional remote (image) servers](#add-remote-servers)
2. [Manually import an image](#import-images)
3. [Build your own image](#build-images)
-->
1. [リモートの（イメージ）サーバーの追加](#add-remote-servers)
2. [イメージの手動インポート](#import-images)
3. [独自イメージを作成](#build-images)

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
- 自分でビルドしたイメージ（[イメージのビルド](#build-images)参照）
- （手動で）ダウンロードしたイメージ（[手動でのダウンロード](#manual-download)参照）
- イメージやコンテナからエクスポートしたイメージ（[イメージのエクスポート](#export-images)と[コンテナからのイメージの作成](#create-image-from-containers)参照）

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
手動でイメージをダウンロードできます。その場合、[イメージのインポート](#import-images)で説明したようなコンポーネントをダウンロードする必要があります。

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
下記のサンプルテンプレートのひとつを使って作成を始めることができます。ニーズに合うようにテンプレートを変更してください。設定キーの詳細については [テンプレートの詳細](#template-details) をご覧ください。

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
!!! note "Note for VMs:"
	You should either build an image with cloud-init support (provides automatic size growth) or set a higher size in the template, because the standard size is relatively small (~4 GB).   
	Alternatively you can also grow it manually.
	{: .p-noteadm }
-->
!!! note "VMでの注意:"
	標準サイズが比較的小さい（〜4GB）ので、cloud-init サポートでイメージをビルドするか（自動的にサイズが大きくなります）、テンプレートにより大きなサイズを設定するかのどちらかを行う必要があります。
	または手動で拡張することもできます。
	{: .p-noteadm }

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
イメージをビルドした後、ビルドしたイメージを LXD にインポートするためには [イメージのインポート](#import-images) をご覧ください。

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
イメージをビルドした後、ビルドしたイメージを LXD にインポートするためには [イメージのインポート](#import-images) をご覧ください。

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
