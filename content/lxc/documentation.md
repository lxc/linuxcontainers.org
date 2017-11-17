# Command line tools
For the command line tools, please refer to the [man pages.](/lxc/manpages/)

# API
LXC ships with a stable C API and a bunch of bindings. That API is stable and properly versioned.
We may make additions to the liblxc1 API in LXC releases but will not remove or change existing symbols
without calling it liblxc2.

The first LXC version to ship with the stable API was LXC 1.0.0.
Only symbols listed in
[lxccontainer.h](https://github.com/lxc/lxc/blob/master/src/lxc/lxccontainer.h)
are part of the API, everything else is internal to LXC
and can change at any point.

## C
As mentioned above, [lxccontainer.h](https://github.com/lxc/lxc/blob/master/src/lxc/lxccontainer.h) is our public C API.

Some of the best examples of API usage are the bindings and the LXC tools themselves.

We also have a up to date API documentation for current git master [here.](/lxc/apidoc/)

And now a simple example of how to use the API to create, start, stop and destroy a container:

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
The python bindings are typically very close to the C API except for the part where it exports
proper objects instead of structs.

The binding is made in two parts, the raw "\_lxc" C extension and the "lxc" python overlay
which provides an improved user experience.

Loading a container called "test" can be done with:

    #!python
    import lxc
    container = lxc.Container("test")

For convenience, networks can be accessed as a list (and modified that way too):

    #!python
    container.network[0].ipv4 = "10.0.3.50"
    container.network[0].ipv4_gateway = "10.0.3.1"

Multi-value configuration entries are represented as list:

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

And now for the same end to end example as was done in C:

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

A great feature of the python binding is the ability to run a function in the container's context
as can be seen in the example below of a script updating all of your containers:

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
