# CGManager in Ubuntu und Debian
In Ubuntu kann die Installation von CGManager und dem cgm-Programm mit folgendem Befehl durchgeführt werden:

```bash
    sudo apt-get install cgmanager cgmanager-utils
```

Falls logind Sie nicht in Ihre eigene cgroup platziert hat, können Sie dies manuell durchführen:

```bash
    sudo cgm create all me
    sudo cgm chown all me $(id -u) $(id -g)
    sudo cgm movepid all me $$
```

# CGManager auf anderen Distributionen installieren
Wenn Sie eine andere Distribution verwenden, können Sie CGManager manuell installieren, indem Sie die folgenden Befehle ausführen:

```bash
    git clone git://github.com/lxc/cgmanager
    sh bootstrap.sh
    ./configure --prefix=/
    make
    sudo make install
    sudo /sbin/cgmanager --debug -m name=systemd
```

# Verwenden von CGManager von innerhalb eines LXC-Containers
Um cgmanager in Containern zu verwenden, müssen Sie LXC mitteilen, den cgmanager-Socket in den Container zu binden. Fügen Sie dazu die folgende Zeile zur Konfigurationsdatei des Containers hinzu (z. B. /var/lib/lxc/container/config):

```bash
    lxc.mount.auto = cgroup
```