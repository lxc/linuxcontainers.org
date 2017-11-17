
# Пакеты для дистрибутивов
LXC включен во многие дистрибутивы Linux.
В большинстве случаев установка просто выбор его в вашем пакетном менеджере.

Дистрибутивы часто предоставляют backports новых версий LXC для своих стабильных выпусков.
Вы можете захотеть взглянуть на них, особенно если ваш дистрибутив не включает LXC 1.0.

Для окружения в продакшене остановитесь на LXC 1.0.x так как это версия с продленной поддержкой,
стабильный релиз который мы поддерживаем до апреля 2019.

Для пользователей Ubuntu у нас есть официальные PPAs для LXC:

 * [lxc-lts](https://launchpad.net/~ubuntu-lxc/+archive/lxc-lts): Latest long term release
 * [lxc-stable](https://launchpad.net/~ubuntu-lxc/+archive/lxc-stable): Latest stable release

А для тех кому нужны снимки для разработчиков:

 * [lxc-git-master](https://launchpad.net/~ubuntu-lxc/+archive/lxc-git-master): "master" branch
 * [lxc-git-stable-1.0](https://launchpad.net/~ubuntu-lxc/+archive/lxc-git-stable-1.0): "stable-1.0" branch
 * [lxc-git-stable-1.1](https://launchpad.net/~ubuntu-lxc/+archive/lxc-git-stable-1.1): "stable-1.1" branch

# Current development version

LXC имеет две активных ветки git:

 * **master**: Current development branch
 * **stable-1.0**: Stable update branch for LXC 1.0.x

Вы можете склонировать их напрямую:

    git clone git://github.com/lxc/lxc -b <branch name>

# Архивы TAR релизов

Архивы TAR стабильных релизов доступны для загрузки ниже.
Начиная с 1.0 все подписаны GPG одним из ментейнеров.
