# LXC について <!-- What's LXC? -->

<!--
LXC is a userspace interface for the Linux kernel containment features.
Through a powerful API and simple tools, it lets Linux users easily create
and manage system or application containers.
-->
LXC は Linux カーネルが持つコンテナ機能のためのユーザスペースのインターフェースです。
Linux ユーザがシステムコンテナやアプリケーションコンテナを簡単に作成したり管理したりするためのパワフルな API とシンプルなツールを提供しています。

# LXC の機能 <!-- Features -->

<!--
Current LXC uses the following kernel features to contain processes:
-->
現時点で、LXC はコンテナを作成するために以下のカーネルの機能を使っています。

 * Kernel namespaces(名前空間) (ipc, uts, mount, pid, network and user)<!-- Kernel namespaces (ipc, uts, mount, pid, network and user) -->
 * Apparmor and SELinux プロファイル <!-- Apparmor and SELinux profiles -->
 * Seccomp ポリシー <!-- Seccomp policies -->
 * Chroots (pivot\_root を使用) <!-- Chroots (using pivot\_root) -->
 * Kernel capabilities (ケーパビリティ) <!-- Kernel capabilities -->
 * CGroups (control groups)

<!--
LXC containers are often considered as something in the middle between a chroot and
a full fledged virtual machine. The goal of LXC is to create an environment as close as possible
to a standard Linux installation but without the need for a separate kernel.
-->
LXC はよく強力な chroot と本格的な仮想マシンの中間のようなものに見なされます。
LXC の目的は、可能な限り標準的な Linux のインストール環境に近く、しかし別々のカーネルは必要ないような環境を作ることです。 

# コンポーネント <!-- Components -->

<!--
LXC is currently made of a few separate components:
-->
LXC はいくつかのコンポーネントから構成されています。 

 * liblxc ライブラリ <!-- The liblxc library -->
 * API に対するいくつかの言語のバインディング <!-- Several language bindings for the API: -->
    * python3 (ツリー内、2.0.x での長期サポート) <!-- python3 (in-tree, long term support in 2.0.x) -->
    * lua (ツリー内、2.0.x での長期サポート) <!-- lua (in tree, long term support in 2.0.x) -->
    * [Go](https://github.com/lxc/go-lxc)
    * [ruby](https://github.com/lxc/ruby-lxc)
    * [python2](https://github.com/lxc/python2-lxc)
    * [Haskell](https://github.com/fizruk/lxc)
 * コンテナを操作するための標準的なツール群<!-- A set of standard tools to control the containers -->
 * コンテナ作成のためのテンプレート <!-- Distribution container templates -->

# ライセンス <!-- Licensing -->
<!--
LXC is free software, most of the code is released under the terms of the GNU LGPLv2.1+ license,
some Android compatibility bits are released under a standard 2-clause BSD license
and some binaries and templates are released under the GNU GPLv2 license.
-->
LXC はフリーソフトウェアで、コードのほとんどの部分が GNU LGPLv2.1+ の条項に基づいてリリースされています。
Android 互換である部分は二条項BSDライセンス (2-clause BSD license) に基づいており、GNU GPLv2 ライセンスに基づいてリリースされているバイナリやテンプレートもあります。 

<!--
The default license for the project is the GNU LGPLv2.1+.
-->
プロジェクトのデフォルトのライセンスは GNU LGPLv2.1+ です。

# サポート <!-- Support -->

<!--
LXC's stable release support relies on the Linux distributions
and their own commitment to pushing stable fixes and security updates.
-->
LXC の stable リリースは各 Linux ディストリビューションの stable に対する修正とセキュリティアップデートのポリシーに依存します。

<!--
Based on the needs and available resources from the various distributions,
specific versions of LXC can enjoy long term support with frequent bugfix updates.
-->
各種ディストリビューションでのニーズと利用可能なリソース次第で、そのディストリビューションで LXC の特定のバージョンが頻繁なバグフィックスの更新が行われる長期サポートで利用できる可能性があります。

<!--
Other releases will typically be maintained on a best effort basis which
typically means until the next stable release is out.
-->
他のリリースは、一般的に次の stable リリースが出るまでを指すベストエフォートの原則で、一般的にはメンテナンスされるでしょう。

<!--
Commercial support for LXC on Ubuntu LTS releases can be obtained from [Canonical Ltd](http://www.canonical.com).
-->
Ubuntu LTS リリースに含まれる LXC に対する商用サポートは [Canonical Ltd](http://www.canonical.com) から受けることができます。

## 延長サポート <!-- Extended support -->

<!--
LXC 2.0 and 3.0 are long term support releases:
 - LXC 2.0 will be supported until June 1st 2021
 - LXC 3.0 will be supported until June 1st 2023
-->
LXC 2.0、3.0 は長期サポート版のリリースです。
 - LXC 2.0 は 2021 年 6 月 1 日までサポートされます
 - LXC 3.0 は 2023 年 6 月 1 日までサポートされます

<!--
This is thanks to [Canonical Ltd](http://www.canonical.com) and Ubuntu who include
the long term support releases of LXC into their own LTS releases and work closely
with LXC upstream to maintain our stable branches.
-->
これは、[Canonical Ltd](http://www.canonical.com) と Ubuntu が LTS (長期サポート版) に LXC の LTS を含めているためであり、stable ブランチをメンテナンスするために LXC の開発元と密接に連携しているためです。
