# LXD wurde von Canonical übernommen
Das LXD-Projekt ist nicht mehr Teil des Linux-Containers-Projekts, sondern kann nun direkt auf den Websites von Canonical gefunden werden.

Website: https://ubuntu.com/lxd
Github: https://github.com/canonical/lxd
Forum: https://discourse.ubuntu.com/c/lxd/
Dokumentation: https://documentation.ubuntu.com/lxd/

**HINWEIS**: Ein Community-Fork von LXD, Incus, ist jetzt Teil des Linux-Containers-Projekts.
Weitere Informationen finden Sie hier: https://linuxcontainers.org/incus/

# Projektankündigung
Datum: 4. Juli 2023

Hallo,

Canonical, der Schöpfer und Hauptbeitragsleistende des LXD-Projekts, hat entschieden, dass das Projekt nach über 8 Jahren als Teil der Linux-Containers-Community nun besser direkt unter den eigenen Projekten von Canonical aufgehoben ist.

Obwohl das Team hinter Linux Containers diese Entscheidung bedauert und LXD als eines seiner Projekte vermissen wird, respektiert es die Entscheidung von Canonical und befindet sich nun im Prozess des Umzugs des Projekts.

Konkret ergeben sich folgende erwartete Änderungen:

- https://github.com/lxc/lxd wird nun zu https://github.com/canonical/lxd
- https://linuxcontainers.org/lxd wird verschwinden und durch einen Hinweis ersetzt, der Benutzer auf [https://ubuntu.com/lxd](https://ubuntu.com/lxd) verweist.
- Der LXD YouTube-Kanal wird dem Canonical-Team übergeben.
- Der LXD-Bereich im Linux-Containers-Community-Forum wird nach und nach durch das Ubuntu-Discourse-Forum von Canonical abgelöst.
- Die LXD CI-Infrastruktur wird Canonical übergeben.
- Der Image-Aufbau für Linux-Container wird nicht mehr auf Systeme von Canonical angewiesen sein, wodurch der Image-Aufbau auf `x86_64` und `aarch64` beschränkt wird.

Was sich nicht ändern wird:

- Der Rest der Linux-Containers-Projekte bleibt unberührt.
- Der Image-Server, der derzeit von LXC und LXD verwendet wird, wird wie gewohnt weiterbetrieben, allerdings mit weniger verfügbaren Architekturen, wie oben erwähnt.

Diese Änderungen werden wahrscheinlich ziemlich schnell erfolgen, da alles relativ eng miteinander integriert ist. Als Ergebnis können Sie möglicherweise eine gewisse Unruhe bemerken, während Canonical die Ersatzinfrastruktur einrichtet.

Mit freundlichen Grüßen,

Das Linux-Containers-Team

&nbsp;&nbsp;  Christian Brauner
&nbsp;&nbsp;  Serge Hallyn
&nbsp;&nbsp;  Stéphane Graber
