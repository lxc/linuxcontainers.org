

# LXD の API <!-- The LXD API -->

<!--
LXD currently only implements a single version of the API, called "1.0".
-->
LXD では、現時点で "1.0" と呼ばれる単一のバージョンの API のみが実装されています。

<!--
Details on that API can be found at:
[https://github.com/lxc/lxd/blob/master/doc/rest-api.md](https://github.com/lxc/lxd/blob/master/doc/rest-api.md)
-->
API の詳細は以下でご覧いただけます:
[https://github.com/lxc/lxd/blob/master/doc/rest-api.md](https://github.com/lxc/lxd/blob/master/doc/rest-api.md)

## API の後方互換性 <!-- API backward compatibility -->

<!--
Once an API is marked as "stable", as is the case with the 1.0 API. We commit not to do any backward incompatible changes to it.
We will however make API additions which will be accompanied by an identifier which newer clients can look for.
-->
1.0 API のように、一度 API が "stable" とマークされた時点で、それに対する後方互換性を壊す変更をしないことを約束します。
しかし、API の追加は行うかもしれません。その場合、新しいクライアントが追加がわかるような識別子の追加を行うでしょう。

<!--
This means that newer clients can detect whether a given target server supports the new feature and only use it if it does.
-->
これは、新しいクライアントは、ターゲットとなるサーバが新しい機能をサポートしているかどうかを検出でき、新しい機能が使える場合だけその機能を使うことを意味します。

## API クライアント <!-- API clients -->

<!--
The following API clients are developed by the LXD project.
-->
以下の API クライアントは LXD プロジェクトが開発しています。

* Go [lxd.Client](https://github.com/lxc/lxd/blob/master/client.go)
* Python [pylxd](https://github.com/lxc/pylxd)

<!--
The following API clients have been submitted by third-party contributors.  They
are neither supported nor endorsed by the LXD project.
-->
以下の API クライアントはサードパーティのコントリビュータが提供しているものです。これらは LXD プロジェクトがサポートしているわけでも、承認しているわけでもありません。

* Ruby: [Hyperkit](http://jeffshantz.github.io/hyperkit)
* Node.js:
  * [ts-lxd](http://github.com/trufflesuite/ts-lxd)
  * [node-lxd](http://github.com/alandoherty/node-lxd)
* Java: 
  * [jlxd](http://github.com/digitalspider/jlxd)
  * [relxd](https://github.com/relxd/lxd-sdk)
* Haskell: [lxd-client](https://hackage.haskell.org/package/lxd-client)
* OpenApi Specification file: [OpenApi-spec-file](https://github.com/relxd/lxd-sdk/blob/master/openapi/lxd.yaml)
