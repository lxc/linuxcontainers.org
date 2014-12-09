# 最新の API <!-- Current API -->
<!--
The current API is made of the following methods:
-->
最新の API は以下のメソッドで構成されています:

### Ping (int junk) -> None
<!--
Ping is just used to test that the manager is alive and well, the value of the integer is ignored.
-->
Ping は manager が正常に動作しているかどうかをテストするのに使います。integer の値は無視されます。

### GetPidCgroup (string controller, int pid) -> string cgroup
<!--
Takes a controller and PID and returns the cgroup path.
-->
controller と PID を与えると、cgroup のパスを返します。

### GetPidCgroupAbs (string controller, int pid) -> string cgroup
<!--
Takes a controller and PID and returns the absolute cgroup path.
-->
controller と PID を与えると、cgroup の絶対パスを返します。

### Create (string controller, string cgroup) -> int existed
<!--
Creates a new cgroup path in the provided controller, returns 1  
if the path already existed, 0 if it was created.
-->
指定した controller 内に新しい cgroup パスを作成します。既にパスが存在する場合は 1 を、作成が成功した場合は 0 を返します。

### Chown (string controller, string cgroup, int uid, int gid) -> None
<!--
Chown the provided controller/cgroup path to the provied uid and gid,  
this will chown the directory as well as the cgroup.procs and tasks files.
-->
指定した uid と gid で、指定したパス controller/cgroup を chown します。ディレクトリ、cgroup.procs、tasks ファイルを chown します。

### Chmod (string controller, string cgroup, string file, int mode) -> None
<!--
Chmod the provided controller/cgroup/file path to the provided mode.
-->
指定したパスの controller/cgroup/file を指定した mode に chmod します。

### MovePid (string controller, string cgroup, int pid) -> None
<!--
Moves the provided PID into the provided controller/cgroup.
-->
指定した PID を指定した controller/cgroup に移動します。

### MovePidAbs (string controller, string cgroup, int pid) -> None
<!--
Similar to MovePid but takes an absolute cgroup path rather than one relative  
to the caller (or proxy). This call is restricted to root as it lets you escape  
your current cgroup restrictions.
-->
MovePid と同様ですが、呼び出し元 (もしくはプロキシ) からの相対 cgroup パスでなく、絶対 cgroup パスを指定します。
この呼び出しは現在の cgroup の制限をエスケープするので root に制限されています。

### GetValue (string controller, string cgroup, string key) -> string value
<!--
Queries the value of the given key in the given controller/cgroup.  
The value is always returned as a string.
-->
指定した controller/cgroup 内の指定した key の値を返します。常に文字列が返されます。

### SetValue (string controller, string cgroup, string key, string value) -> None
<!--
Sets the value of the given key to that provided.
-->
指定した contoller/cgroup 内の指定した key に値を設定します。

### Remove (string controller, string cgroup, int recursive) -> int existed
<!--
Removes the provided cgroup, if recursive is set to 1, any sub-cgroup will also be removed.  
The return value indicates whether the cgroup existed.
-->
指定した cgroup を削除します。もし recursive が 1 の場合は指定した cgroup のサブ cgroup も削除されます。
返り値は指定した cgroup が存在したかどうかを示します。

### GetTasks (string controller, string cgroup) -> array of int
<!--
Returns an array of int representing all the PIDs in the provided cgroup path.
-->
指定した cgroup パス内の全ての PID を int の配列で返します。

### GetTasksRecursive (string controller, string cgroup) -> array of int
<!--
Returns an array of int representing all the PIDs in the provided cgroup path and its sub-directories.
-->
指定した cgroup パスとそのサブディレクトリ (子孫の cgroup) 内の全ての PID を int の配列で返します。

### ListChildren (string controller, string cgroup) -> array of string
<!--
Returns an array of string representing all the children (sub-cgroup) of the provided cgroup path.
-->
指定した cgroup パスの全ての子供 (サブ cgroup) を文字列の配列で返します。

### RemoveOnEmpty (string controller, string cgroup) -> None
<!--
Marks the cgroup as removable when empty.  
Once the last task exists the cgroup, cgmanager will automatically remove it.
-->
指定した cgroup が空の場合に消去可能なマークをつけます。cgroup の最後のタスクがなくなったとき、cgmanager は自動的にその cgroup を消去します。

### Prune (string controller, string cgroup) -> None
<!--
Calls RemoveOnEmpty on the cgroups path and any sub-directory (recursively).
-->
指定した cgroup パスとサブディレクトリで (再帰的に) RemoveOnEmpty を呼び出します。

<!--
Tasks will not be killed but once they all exit either naturally or  
because something killed them, the cgroup will disappear.
-->
タスクが kill されることはありませんが、タスクが自然に exit するか何かの理由で kill されたらすぐに cgroup は消えるでしょう。

### ListControllers () -> array of string
<!--
Returns an array of string representing the supported controllers.
-->
サポートされるコントローラを文字列のリストの形式で返します。

### ListKeys (string controller, string cgroup) -> array of (string, uint, uint, uint)
<!--
Returns an array of (string name, uint uid, uint gid, uint mode) representing the available cgroup keys.
-->
利用可能な cgroup のキーを (string name, uint uid, uint gid, uint mode) のリストで返します。

### api\_version (property) -> integer
<!--
The current internal API version, used for feature checks.
-->
現在の内部的な API のバージョンを返します。将来的なチェックに使います。

# API を定義するドキュメント <!-- API definition document -->

<!--
The [org.linuxcontainers.cgmanager.xml file](https://github.com/cgmanager/cgmanager/blob/master/org.linuxcontainers.cgmanager.xml)
in the cgmanager cgmanager tree is used to generate the client library and is the authoritative API definition.
-->
cgmanager ツリー内の [org.linuxcontainers.cgmanager.xml ファイル](https://github.com/cgmanager/cgmanager/blob/master/org.linuxcontainers.cgmanager.xml) がクライアントライブラリを生成するのに使われます。そして、このファイルが正式な API の定義です。