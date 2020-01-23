

# distrobuilder について <!-- What's distrobuilder? -->
<!--
`distrobuilder` is an image building tool for LXC and LXD.
-->
`distrobuilder` は LXC と LXD 用のイメージを作成するツールです。

<!--
It's used to build all our official images available on [our image server](https://images.linuxcontainers.org).
-->
[私たちのイメージサーバ](https://images.linuxcontainers.org) にある公式イメージすべての作成に使っています。

<!--
The image defintion is a YAML document which describes the source of the
image, its package manager, what packages to install/remove for specific
image variants, os releases and architectures, as well as additional
files to generate and arbitrary actions to execute as part of the image
build process.
-->
イメージの定義は YAML 文書です。これはイメージのソース、そのイメージで使うパッケージ管理ツール、OS リリースやアーキテクチャなどの特定のイメージの種類でどのパッケージをインストールしたり削除したりするかを記述します。
また、イメージのビルドプロセス中に生成して追加するファイルや、任意のアクションも記述します。

<!--
The output is either a plain root filesystem, a LXD image or a LXC image.
-->
単純なルートファイルシステム、LXD イメージ、LXC イメージのいずれも出力できます。

<!--
You can see it at work here: [https://jenkins.linuxcontainers.org/view/Images/](https://jenkins.linuxcontainers.org/view/Images/)
-->
次のサイトで動きを見ることができます: [https://jenkins.linuxcontainers.org/view/Images/](https://jenkins.linuxcontainers.org/view/Images/)

# インストール <!-- Installing it -->
<!--
Release tarballs can be found in the [Downloads](/distrobuilder/downloads) section.
-->
リリース版 tarball は [ダウンロードページ](/distrobuilder/downloads) にあります。

<!--
The current build can also be installed directly with:
-->
最新の状態のビルドを直接次のようにインストールできます:

    go get -v -x github.com/lxc/distrobuilder/distrobuilder

# 開発言語、ライセンス、コントリビュート <!-- Language, licensing and contributions -->
<!--
distrobuilder is written in Go, it's free software and is developed under the Apache 2 license.
-->
distrbuilder は Go で書かれています。フリーソフトウェアであり、Apache 2 ライセンスの元で開発されています。

<!--
There are no CLA or similar legal agreements required to contribute to distrobuilder,
however we do require commits be signed-off (following the DCO - Developer Certificate of Ownership).
-->
distrobuilder に貢献するのに必要な CLA や同様の法的合意はありません。しかし、コミットを signed-off する必要があります (DCO - Developer Certificate of Ownership に従います)。
