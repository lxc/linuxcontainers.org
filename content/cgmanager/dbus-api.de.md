# Aktuelle API
Die aktuelle API besteht aus den folgenden Methoden:

### Ping (int junk) -> None
Ping wird nur verwendet, um zu testen, ob der Manager aktiv ist und funktioniert; der Wert des ganzzahligen Parameters wird ignoriert.

### GetPidcgroup (string controller, int pid) -> string cgroup
Nimmt einen Controller und eine PID entgegen und gibt den cgroup-Pfad zurück.

### GetPidcgroupAbs (string controller, int pid) -> string cgroup
Nimmt einen Controller und eine PID entgegen und gibt den absoluten cgroup-Pfad zurück.

### Create (string controller, string cgroup) -> int existed
Erstellt einen neuen cgroup-Pfad im angegebenen Controller; gibt 1 zurück, wenn der Pfad bereits existierte, 0, wenn er erstellt wurde.

### Chown (string controller, string cgroup, int uid, int gid) -> None
Ändert den Besitzer des angegebenen controller/cgroup-Pfads auf die angegebene UID und GID; dies betrifft das Verzeichnis sowie die Dateien cgroup.procs und tasks.

### Chmod (string controller, string cgroup, string file, int mode) -> None
Ändert die Berechtigungen des angegebenen controller/cgroup/Datei-Pfads auf den angegebenen Modus.

### MovePid (string controller, string cgroup, int pid) -> None
Verschiebt die angegebene PID in den angegebenen controller/cgroup.

### MovePidAbs (string controller, string cgroup, int pid) -> None
Ähnlich wie MovePid, nimmt aber einen absoluten cgroup-Pfad anstelle eines relativ zum Aufrufer (oder Proxy) angegebenen Pfads. Dieser Aufruf ist auf den Root-Benutzer beschränkt, da er es ermöglicht, die aktuellen cgroup-Beschränkungen zu umgehen.

### GetValue (string controller, string cgroup, string key) -> string value
Fragt nach dem Wert des angegebenen Schlüssels im angegebenen controller/cgroup; der Wert wird immer als Zeichenkette zurückgegeben.

### SetValue (string controller, string cgroup, string key, string value) -> None
Setzt den Wert des angegebenen Schlüssels auf den bereitgestellten Wert.

### Remove (string controller, string cgroup, int recursive) -> int existed
Entfernt den angegebenen cgroup; wenn recursive auf 1 gesetzt ist, werden auch alle Unter-cgroups entfernt. Der Rückgabewert gibt an, ob der cgroup existierte.

### GetTasks (string controller, string cgroup) -> Array von int
Gibt ein Array von Ganzzahlen zurück, die alle PIDs im angegebenen cgroup-Pfad repräsentieren.

### GetTasksRecursive (string controller, string cgroup) -> Array von int
Gibt ein Array von Ganzzahlen zurück, die alle PIDs im angegebenen cgroup-Pfad und in seinen Unterordnern repräsentieren.

### ListChildren (string controller, string cgroup) -> Array von string
Gibt ein Array von Zeichenketten zurück, die alle Kinder (Unter-cgroups) des angegebenen cgroup-Pfads repräsentieren.

### RemoveOnEmpty (string controller, string cgroup) -> None
Markiert den cgroup als entfernbar, wenn er leer ist. Sobald die letzte Aufgabe den cgroup verlässt, wird cgmanager ihn automatisch entfernen.

### Prune (string controller, string cgroup) -> None
Ruft RemoveOnEmpty für den cgroup-Pfad und alle Unterordner auf (rekursiv).

Aufgaben werden nicht beendet, aber sobald sie alle entweder auf natürliche Weise beendet werden oder weil etwas sie beendet hat, verschwindet der cgroup.

### ListControllers () -> Array von string
Gibt ein Array von Zeichenketten zurück, die die unterstützten Controller repräsentieren.

### ListKeys (string controller, string cgroup) -> Array von (string, uint, uint, uint)
Gibt ein Array (string name, uint uid, uint gid, uint mode), dass die verfügbaren cgroup-Schlüssel darstellt, zurück.

### api_version (Eigenschaft) -> Ganzzahl
Die aktuelle interne API-Version, die für Feature-Überprüfungen verwendet wird.

# API-Definitions-Dokument
Die [org.linuxcontainers.cgmanager.xml-Datei](https://github.com/lxc/cgmanager/blob/master/org.linuxcontainers.cgmanager.xml) im cgmanager cgmanager-Tree wird verwendet, um die Client-Bibliothek zu generieren und ist die maßgebliche API-Definition.