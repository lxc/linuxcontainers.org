# Installing LXD and the command line tool
## Ubuntu
As LXD evolves quite rapidly, we recommend Ubuntu users use our PPA:

    add-apt-repository ppa:ubuntu-lxc/lxd-daily
    apt-get update
    apt-get install lxd

The package creates a new "lxd" group which contains all users allowed to talk to  
lxd over the local unix socket. All members of the "admin" and "sudoers" groups are automatically added.  
If your user isn't a member of one of these groups, you'll need to manually add your user to the "lxd" group.

Because group membership is only applied at login, you then either need to close  
and re-open your user session or use the "newgrp lxd" command in the shell you're going to interact with lxd from.

## Other distributions
As of today, only Ubuntu has packages for LXD. Users of other distributions  
can directly download and build LXD from git or use our latest release tarball.  
Instructions for both are available [here](/lxd/downloads).

# Importing some images
LXD is image based. Containers must be created from an image and so the image store  
must get some images before you can do much with LXD.

We expect the way to import and keep your images up to date to change in the future,  
but today we have a simple python script which we ship with LXD and that will let you  
import LXC images into it.

So let's import some current Ubuntu and Debian images:

    lxd-images import lxc ubuntu trusty amd64 --alias ubuntu
    lxd-images import lxc debian wheezy amd64 --alias debian

That's going to take a little while as it downloads both images (total of about 150MB)  
and then repacks them to be compatible with LXD.

We expect to ship compatible images soon which will avoid the repacking step.

# Creating and using your first container
Now that you have a couple of images loaded, you can finally launch your first container:

    lxc launch ubuntu first

That will create and start a new ubuntu container as can be confirmed with:

    lxc list

Your container here is called "first". You also could let LXD give it a random name by  
just calling "lxc launch ubuntu" without a name.

Now that your container is running, you can get a shell inside it with:

    lxc exec first -- /bin/bash

Or just run a command directly:

    lxc exec first -- apt-get update

To pull a file from the container, use:

    lxc file pull /etc/hosts .

To push one, use:

    lxc file push hosts /tmp

To stop the container, simply do:

    lxc stop first

And to remove it entirely:

    lxc delete first

# Multiple hosts
The "lxc" command line tool can talk to multiple LXD servers.  
It defaults to talking to the local one using a local UNIX socket.

To talk to a remote LXD, you can simply add it with:

    lxc remote host-a https://<ip address>:8443

And after that, use all the same command as above but prefixing the container  
and images name with the remote host like:

    lxc exec host-a:first -- apt-get update
