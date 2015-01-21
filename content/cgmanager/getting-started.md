# CGManager in Ubuntu and Debian
In Ubuntu, installing cgmanager and the cgm program can be done with:

    sudo apt-get install cgmanager cgmanager-utils

If logind has not placed you into your own cgroup, you can then do so using:

    sudo cgm create all me
    sudo cgm chown all me $(id -u) $(id -g)
    sudo cgm movepid all me $$

# Building CGManager on other distributions
If you are running another distribution, you can install it by hand using:

    git clone git://github.com/lxc/cgmanager
    sh bootstrap.sh
    ./configure --prefix=/
    make
    sudo make install
    sudo /sbin/cgmanager --debug -m name=systemd

# Using CGManager from inside a LXC container
To use cgmanager in containers, you need to tell lxc to bind mount the  
cgmanager socket into the container by adding the following line into  
the container configuration file (e.g. /var/lib/lxc/container/config).

    lxc.mount.auto = cgroup
