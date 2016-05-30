# Утилиты командной строки
Для информации по утилитам командной строки обратитесь к [страницам man.](/lxc/manpages/)

# API
LXC поставляется со стабильным C API и комплектом bindings. Этот API стабилен и разделен на версии.  
Мы можем добавлять дополнения в API liblxc1 в релизах LXC но не удалять или изменять текущие символы  
without calling it liblxc2.

Первая версия LXC поставляемая со стабильным API это LXC 1.0.0.  
Только символы указанные в
[lxccontainer.h](https://github.com/lxc/lxc/blob/master/src/lxc/lxccontainer.h)
часть API, все остальное это внутренняя часть LXC  
и может быть изменено в любое время.

## C
Как указано выше, [lxccontainer.h](https://github.com/lxc/lxc/blob/master/src/lxc/lxccontainer.h) наш публичный C API.

Некоторые лучшие примеры использования API это bindings и сами утилиты LXC.

У нас также есть актуальная документация по API для текущей git master [здесь.](/lxc/apidoc/)

А теперь простой пример использования API для создания, запуска, остановки и уничтожения контейнера:

    #!c
    #include <stdio.h>

    #include <lxc/lxccontainer.h>

    int main() {
        struct lxc_container *c;
        int ret = 1;

        /* Setup container struct */
        c = lxc_container_new("apicontainer", NULL);
        if (!c) {
            fprintf(stderr, "Failed to setup lxc_container struct\n");
            goto out;
        }

        if (c->is_defined(c)) {
            fprintf(stderr, "Container already exists\n");
            goto out;
        }

        /* Create the container */
        if (!c->createl(c, "download", NULL, NULL, LXC_CREATE_QUIET,
                        "-d", "ubuntu", "-r", "trusty", "-a", "i386", NULL)) {
            fprintf(stderr, "Failed to create container rootfs\n");
            goto out;
        }

        /* Start the container */
        if (!c->start(c, 0, NULL)) {
            fprintf(stderr, "Failed to start the container\n");
            goto out;
        }

        /* Query some information */
        printf("Container state: %s\n", c->state(c));
        printf("Container PID: %d\n", c->init_pid(c));

        /* Stop the container */
        if (!c->shutdown(c, 30)) {
            printf("Failed to cleanly shutdown the container, forcing.\n");
            if (!c->stop(c)) {
                fprintf(stderr, "Failed to kill the container.\n");
                goto out;
            }
        }

        /* Destroy the container */
        if (!c->destroy(c)) {
            fprintf(stderr, "Failed to destroy the container.\n");
            goto out;
        }

        ret = 0;
    out:
        lxc_container_put(c);
        return ret;
    }

## Python
Python bindings обычно близки к C API за исключением экспорта  
корректных обьектов заместо структур.

Binding разбиты на две части, the raw расширение "\_lxc" C и "lxc" python overlay  
предоставляющий улучшенный пользовательский опыт.

Загрузка контейнера с именем "test" может быть осуществлена так:

    #!python
    import lxc
    container = lxc.Container("test")

Для удобства, сети могут быть доступны списком (с возможностью модификации):

    #!python
    container.network[0].ipv4 = "10.0.3.50"
    container.network[0].ipv4_gateway = "10.0.3.1"

Элементы конфигурации, имеющие несколько значений представлены как списки:

    #!python
    container.get_config_item("lxc.cap.drop")
        ['mac_admin', 'mac_override', 'sys_time', 'sys_module']

    container.append_config_item("lxc.cap.drop", "net_admin")
        True

    container.get_config_item("lxc.cap.drop")
        ['mac_admin', 'mac_override', 'sys_time', 'sys_module', 'net_admin']

    container.set_config_item("lxc.cap.drop", ["mac_admin", "mac_override"])
        True

    container.get_config_item("lxc.cap.drop")
        ['mac_admin', 'mac_override'])

А теперь тот же самый пример на C:

    #!/usr/bin/python3
    import lxc
    import sys

    # Setup the container object
    c = lxc.Container("apicontainer")
    if c.defined:
        print("Container already exists", file=sys.stderr)
        sys.exit(1)

    # Create the container rootfs
    if not c.create("download", lxc.LXC_CREATE_QUIET, {"dist": "ubuntu",
                                                       "release": "trusty",
                                                       "arch": "i386"}):
        print("Failed to create the container rootfs", file=sys.stderr)
        sys.exit(1)

    # Start the container
    if not c.start():
        print("Failed to start the container", file=sys.stderr)
        sys.exit(1)

    # Query some information
    print("Container state: %s" % c.state)
    print("Container PID: %s" % c.init_pid)

    # Stop the container
    if not c.shutdown(30):
        print("Failed to cleanly shutdown the container, forcing.")
        if not c.stop():
            print("Failed to kill the container", file=sys.stderr)
            sys.exit(1)

    # Destroy the container
    if not c.destroy():
        print("Failed to destroy the container.", file=sys.stderr)
        sys.exit(1)

Крутая фишка binding в возможности запускать функцию в контексте контейнера  
что можно увидеть на примере ниже в скрипте обновляющем все ваши контейнеры:

    #!/usr/bin/python3
    import lxc
    import sys

    for container in lxc.list_containers(as_object=True):
        # Start the container (if not started)
        started = False
        if not container.running:
            if not container.start():
                continue
            started = True

        if not container.state == "RUNNING":
            continue

        # Wait for connectivity
        if not container.get_ips(timeout=30):
            continue

        # Run the updates
        container.attach_wait(lxc.attach_run_command,
                              ["apt-get", "update"])
        container.attach_wait(lxc.attach_run_command,
                              ["apt-get", "dist-upgrade", "-y"])

        # Shutdown the container
        if started:
            if not container.shutdown(30):
                container.stop()
