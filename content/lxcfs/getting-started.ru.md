# Сборка и запуск lxcfs из git

LXCFS должен быть запущен в единственном экземпляре на хост системе в /var/lib/lxcfs.

Сборка lxcfs требует следующих библиотек и программных заголовков:

 - libcgmanager-dev
 - libnih-dbus-dev
 - libnih-dev
 - libfuse-dev

Для сборки и запуска из git репозитория:

    git clone git://github.com/lxc/lxcfs
    cd lxcfs
    ./bootstrap.sh
    ./configure
    make
    sudo mkdir -p /var/lib/lxcfs
    sudo ./lxcfs -s -f -o allow_other /var/lib/lxcfs/

И все, lxcfs смонтирован в /var/lib/lxcfs/.
