# Building and running lxcfs from git

LXCFS is meant to be run once per host system at /var/lib/lxcfs.

Building lxcfs requires the following libraries and development headers:

 - libcgmanager-dev
 - libnih-dbus-dev
 - libnih-dev
 - libfuse-dev

Then to build and run it from the git repository, do:

    git clone git://github.com/lxc/lxcfs
    cd lxcfs
    ./bootstrap.sh
    ./configure
    make
    sudo mkdir -p /var/lib/lxcfs
    sudo ./lxcfs -s -f -o allow_other /var/lib/lxcfs/

And that's it, you'll have lxcfs mounted on top of /var/lib/lxcfs/.
