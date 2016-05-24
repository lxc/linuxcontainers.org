![Logo](/static/img/containers.png)

# Установка и настройка Nova LXD

Проект Nova LXD предоставляет драйвер Nova для управления комплексной системой контейнеров с использованием LXD как часть OpenStack cloud.

## Ручная установка - Ubuntu server (Ubuntu 16.04)

Nova LXD доступна в Ubuntu 16.04;  Драйвер Nova LXD устанавливается только на сервера Nova Compute:

    sudo apt-get install nova-lxd

Пакет 'nova-lxd' проверяет, запущен ли демон nova-compute
с корректным драйвером гипервизора LXD; тем не менее пользователь 'nova' должен
иметь членство в группе 'lxd' для доступа к контейнерам
LXD:

    sudo usermod -G lxd -a nova
    sudo service nova-compute restart

Для поддержки миграции контейнеров между хостами Compute, LXD должен быть настроен на прием соединений  
из сети, и установлен надежный пароль:

    sudo lxc config set core.https_address [::]
    sudo lxc config set core.trust_password some-password

На каждом развернутом экземпляре Nova LXD должны быть настроены удаленные подключения ко всем инстансам Nova LXD:

    sudo lxc remote add host-a <ip address or DNS of remote service>

## Автоматическое развертывание с Juju

Развертывание OpenStack это сложный процесс, для его осуществления существует несколько утилит развертывания; Juju предлагает удобный вариант  
развертывания OpenStack на Ubuntu, а специальный [волшебный пакет](https://jujucharms.com/u/openstack-charmers-next/openstack-lxd) может быть использован для развертывания OpenStack cloud с LXD.

Пакет автоматически настраивает хранилище для корневых систем контейнеров с использованием LVM и устанавливает подходящие настройки сети,  
надежные пароли и удаленные подключения для поддержки миграции контейнеров между гипервизорами LXD.

## Образы LXD для OpenStack

LXD не поддерживает использование формата образов qcow2 KVM; LXD требуются образы на основе файловой системы "raw".  
Canonical публикует образы Ubuntu images в требуемом формате:

    glance image-create --name="trusty" --public --progress \
        --container-format=bare --disk-format=raw \
        --copy-from http://cloud-images.ubuntu.com/trusty/current/trusty-server-cloudimg-amd64-root.tar.gz

## Создание контейнеров

Контейнеры LXD управляются точно таким же способом, как и контейнеры KVM - через Horizon или через Nova CLI:

    nova boot --image=trusty --flavor=m1.tiny my-first-openstack-lxd-container

Вам может понадобится присвоить временный IP адрес и настроить необходимые политики безопасности в зависимости от сети и  
настроек безопасности используемого вами OpenStack cloud.
