# CGManager とは? <!-- What's CGManager? -->

<!--
CGManager is a central privileged daemon that manages all your cgroups for you  
through a simple D-Bus API. It's designed to work with nested LXC containers  
as well as accepting unprivileged requests including resolving user namespaces UIDs/GIDs.
-->
CGManager はシンプルな D-Bus API を通して全ての cgroup を管理する、特権を持つデーモンです。
CGManager はネストした LXC コンテナも、ユーザ名前空間での UID/GID の解決を含む特権を持たないユーザからのリクエストも受け付けるように設計されています。

# コンポーネント <!-- Components -->
## cgmanager

<!--
This daemon runs on the host, mounts cgroupfs into a separate mount  
namespace (so it's invisible from the host), binds /sys/fs/cgroup/cgmanager/sock  
for incoming D-Bus queries and generally handles all clients running directly on the host.
-->
このデーモンはホスト上で実行します。ホストとは別のマウント名前空間内で cgroupfs をマウントし (なのでホスト上からは見えません)、D-Bus の問い合わせを受け付けるために /sys/fs/cgroup/cgmanager/sock をバインドし、ホスト上で実行されている全てのクライアントを扱います。

<!--
cgmanager accepts both authentication requests using D-Bus + SCM credentials  
used for translation of uid, gid and pid across namespaces or using simple  
"unauthenticated" (just the initial ucred) D-Bus for queries coming from the host level.
-->
cgmanager は、名前空間をまたいだ uid、gid、pid の変換のために使う D-Bus + SCM 認証情報を使った認証リクエストも、ホストレベルから来る「非認証の」(初期の ucred) D-Bus を使ったリクエストも受け付けます。

## cgproxy

<!--
You may see this daemon run in two cases. On the host if your kernel is older than 3.8  
(doesn't have pidns attach support) or in containers (where only cgproxy runs).
-->
このデーモンの実行は 2 種類のケースで目にするかも知れません。(PID名前空間へのアタッチがサポートされていない) 3.8 より古いカーネルのホスト上においてと、(cgproxy のみが実行される) コンテナ内においてです。

<!--
cgproxy doesn't itself do any cgroup configuration change but instead as its name indicates,  
proxies requests to the main cgmanager process.
-->
cgproxy は自身ではいかなる cgroup に対する設定の変更を行いません。しかし、代わりに名前が示すように、プロキシリクエストをメインの cgmanager プロセスに投げます。

<!--
This is necessary so a process may talk to /sys/fs/cgroup/cgmanager/sock  
using straight D-Bus (for example using dbus-send).
-->
cgproxy は、プロセスが直接 D-Bus を使って (例えば dbus-send を使って) /sys/fs/cgroup/cgmanager/sock と通信を行うのに必要です。

<!--
cgproxy will then catch the ucred from that query and do an authenticated SCM query to the  
real cgmanager socket, passing the arguments through ucred structs so that they get properly  
translated into something cgmanager in the host namespace can understand.
-->
cgproxy はクエリから ucred を受信し、実際の cgmanager ソケットに認証された SCM クエリを投げ、ホストの名前空間にいる cgmanager が理解できるものに適切に変換できるように ucred 構造体を通して引数を渡します。

## cgm
<!--
A simple command line tool which talks to the D-Bus service and lets you  
perform all the usual cgroup operations from the command line.
-->
D-Bus サービスと通信するシンプルなコマンドラインツールです。コマンドラインを通して通常の cgroup の全ての操作が実行できます。

# 通信プロトコル <!-- Communication protocol -->

<!--
As mentioned above, cgmanager and cgproxy use D-Bus. It's recommended that  
external clients (so not cgproxy itself) use the standard D-Bus API  
and do not attempt to implement the SCM creds protocol as it's unnecessary and easy to get wrong.
-->
先に述べたように、cgmanager と cgproxy は D-Bus を使います。外部のクライアント (cgproxy は違います) は標準の D-Bus API を使い、不要で容易に間違いの起こる SCM cred プロトコルを実装しようとしないことを推奨します。

<!--
Instead, simply assume that talking to /sys/fs/cgroup/cgmanager/sock will always do the right thing.
-->
そうしないことで、/sys/fs/cgroup/cgmanager/sock と通信を行うことが常に正しいと簡単に仮定できます。

<!--
The cgmanager API is only available on that separate D-Bus socket, cgmanager itself doesn't attach  
to the system bus and so a running dbus daemon isn't a requirement of cgmanager/cgproxy.
-->
cgmanager API は独立した D-Bus ソケット上でのみ利用可能です。cgmanager 自身はシステムのバスには接続しません。なので、 dbus デーモンの実行は cgmanager/cgproxy に必須ではありません。

<!--
You can read more about the D-Bus API [here](/cgmanager/dbus-api).
-->
D-Bus API の更に詳しい情報は [こちら](/cgmanager/dbus-api) で読むことができます。

# ライセンス <!-- Licensing -->
<!--
CGManager is free software, most of the code is released under the terms of the GNU LGPLv2.1+ license,  
some binaries are released under the GNU GPLv2 license.
-->
CGManager はフリーソフトウェアで、コードのほとんどの部分が GNU LGPLv2.1+ の条項に基づいてリリースされています。GNU GPLv2 ライセンスに基づいてリリースされているバイナリもあります。

<!--
The default license for the project is the GNU LGPLv2.1+.
-->
プロジェクトのデフォルトのライセンスは GNU LGPLv2.1+ です。

# <!-- Support -->
<!--
CGManager's stable release support relies on the Linux distributions  
and their own commitment to pushing stable fixes and security updates.
-->
CGManager の stable リリースは各 Linux ディストリビューションの stable に対する修正とセキュリティアップデートのポリシーに依存します。

<!--
Commercial support for CGManager on Ubuntu LTS releases can be obtained from [Canonical Ltd](http://www.canonical.com).
-->
Ubuntu LTS リリースに含まれる CGManager に対する商用サポートは [Canonical Ltd](http://www.canonical.com) から受けることができます。
