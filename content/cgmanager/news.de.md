# 2014-01-10
Der CGManager-Socket wurde nach /sys/fs/cgroup/manager/sock verschoben.

Der Proxy verschiebt diesen dann nach /sys/fs/cgroup/manager.lower/sock und bietet seinen eigenen Dienst über /sys/fs/cgroup/manager/sock an. Dies ermöglicht es einem Container, /sys/fs/cgroup/manager bind-gemountet zu haben, anstatt den Socket selbst, was es ihm erlaubt, sich zu erholen, nachdem der CGManager auf dem Host neu gestartet wurde.

# 2014-01-09
Die scm-Behandlung wurde überarbeitet. Jetzt werden alle \*Scm-DBus-Transaktionen abgeschlossen, sobald der Server den Unix-FD empfängt. Dann liest er die scm-Berechtigungen (asynchron) über den Unix-FD und sendet die Ergebnisse über denselben FD an den Client.