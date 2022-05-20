# <!-- Source code -->ソースコード

<!--
The current development version of LXC can be cloned from GitHub with:
-->
LXC の現時点の開発バージョンは GitHub からクローンできます:

    git clone git://github.com/lxc/lxc

<!--
Source tarballs from the various stable releases are also available in the [downloads](/lxc/downloads/) section.
-->
stable リリースの各バージョンのソース tarball は [ダウンロードページ](/lxc/downloads/) から取得できます。

<!--
Patches sent upstream for review must be based on the current git tree and not on stable releases, unless the bug only affects a stable release.
-->
レビューのためにパッチを送る場合は、バグが stable リリースにのみ影響する場合を除いて、stable リリースでなく現時点の開発バージョンのツリーを元にしてください。

# <!-- Patch submission process -->パッチの提案プロセス
<!--
Every submitted patch **must** be signed off by its author.
-->
提案するパッチは全て、**必ず**著者による署名 ("Signed-off-by:" 行の付与) を行う必要があります。

<!--
The easy way is to use : `git commit -s`
-->
署名を行うには `git commit -s` を使うのが簡単です。

<!--
and if you forgot "-s" on a previous commit : `git commit --amend -s`
-->
もし前のコミットで "-s" を忘れた時は `git commit --amend -s` のように実行します。

## <!-- The mailing-list way -->メーリングリストへのパッチの投稿
<!--
You may contribute to LXC either by sending a patch or patchset directly on the [lxc-devel mailing-list](https://lists.linuxcontainers.org/listinfo/lxc-devel).
-->
パッチ、もしくはパッチセットを直接 [lxc-devel メーリングリスト](https://lists.linuxcontainers.org/listinfo/lxc-devel) に送ることによって LXC に貢献できます。

<!--
You can use `git format-patch` to generate mailable patch.
-->
メールで送るのに適した形でパッチを生成するには `git format-patch` コマンドが使えます。

<!--
Beware of "copy/paste" on mail clients as they can break tabs and lines (see `git send-email` or `git imap-send`).
-->
メールクライアントにパッチを「コピー／ペースト」することは、タブや行を壊す可能性がありますので注意してください。(`git send-email` もしくは `git imap-send` を参照してください)

## <!-- The pull-request way -->プルリクエストによるパッチの投稿
<!--
Fork the repository, create a branch, commit you work (with -s !), and push it.
-->
リポジトリをforkし、ブランチを作成し、行った作業をコミットし ("-s" を忘れないで！)、その変更をpushします。

<!--
Then follow the [GitHub's doc](https://help.github.com/articles/creating-a-pull-request/).
-->
そして[GitHub's doc](https://help.github.com/articles/creating-a-pull-request/)にあるようにプルリクエストを作成してください。
