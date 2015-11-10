# 명령어 도구
명령어 도구에 관한 설명은 [사용법](/ko/lxc/manpages)을 참고하십시오.

# API
LXC는 C API와 여러 언어 바인딩을 포함하고 있습니다. API들은 동일버전에서는 변하지 않으며 적절히 버전 관리가 되고 있습니다.
LXC 차기 버전 공개시 liblxc1 API에 추가는 이루어질 수 있지만, 기존의 API 심볼이 변경되거나 제거되는 일은 liblxc2가 되기 전까지는 없습니다.

안정화된 API를 포함하고 있는 첫번째 LXC 버전은 LSC 1.0.0입니다.
[lxccontainer.h](https://github.com/lxc/lxc/blob/master/src/lxc/lxccontainer.h)에 포함되어 있는 심볼들만 API이며, 나머지는 LXC의 내부용이므로 언제든지 바뀔 수 있습니다.

## C
위에 언급된 것 처럼, [lxccontainer.h](https://github.com/lxc/lxc/blob/master/src/lxc/lxccontainer.h)는 공개된 C API입니다.

API 사용에 관련된 몇몇 좋은 예제들은 바인딩과 LXC 도구 내에 있습니다.

현재 git의 master 브랜치에 대한 최신 API 문서는 [여기](/lxc/apidoc/)에 있습니다.

그리고 컨테이너의 생성, 시작, 종료, 삭제에 대해 API 사용법 예제가 아래에 있습니다.

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
python 바인딩은 구조체 대신에 적절한 객체를 사용하고 있다는 점만 제외하면 C API와 매우 유사합니다.

바인딩은 두 부분으로 구성되어 있습니다. 원시 "\_lxc" C 확장과 사용자의 편의성이 개선된 "lxc" python 오버레이 입니다.

"test"라는 컨테이너를 불러오려면 아래와 같이 수행하면 됩니다.

    #!python
    import lxc
    container = lxc.Container("test")

편의를 위해 네트워크들은 리스트로 접근할 수 있습니다. (수정하는 것도 마찬가지입니다.)

    #!python
    container.network[0].ipv4 = "10.0.3.50"
    container.network[0].ipv4_gateway = "10.0.3.1"

여러 값을 가지는 설정 항목들은 아래처럼 리스트로 표시됩니다.

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
        ['mac_admin', 'mac_override']

그리고 위의 C의 예제와 같은 예제는 아래와 같습니다.

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

python 바인딩의 큰 특징은 컨테이너의 컨텍스트 내로 함수를 실행할 수 있다는 점입니다. 아래의 모든 컨테이너를 업데이트하는 스크립트 예제에서 볼 수 있습니다.

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
