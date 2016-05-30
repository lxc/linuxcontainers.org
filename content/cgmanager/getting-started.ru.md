# CGManager в Ubuntu и Debian
В Ubuntu, установка cgmanager и cgm может быть сделана с:

    sudo apt-get install cgmanager cgmanager-utils

Если logind не помещен в свою cgroup, вы можете сделать это:

    sudo cgm create all me
    sudo cgm chown all me $(id -u) $(id -g)
    sudo cgm movepid all me $$

# Сборка CGManager в других дистрибутивах
Если у вас запущен другой дистрибутив, вы можете установить вручную:

    git clone git://github.com/lxc/cgmanager
    sh bootstrap.sh
    ./configure --prefix=/
    make
    sudo make install
    sudo /sbin/cgmanager --debug -m name=systemd

# Использование CGManager изнутри контейнера LXC
Для использования cgmanager в контейнере, вам нужно указать lxc смонтировать сокет  
cgmanager в контейнер добавив следующую линию в  
конфигурационный файл контейнера (т.е. /var/lib/lxc/container/config).

    lxc.mount.auto = cgroup
