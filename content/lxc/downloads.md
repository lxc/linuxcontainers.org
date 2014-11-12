![Download icon](/static/img/download.png)
# Distribution packages
LXC is included in most Linux distributions.  
In most cases installing it is as simple as selecting it in your package manager.

Distributions also often provide backports of newer versions of LXC for their stable releases.  
You may want to look for that, especially if your distribution doesn't include LXC 1.0.

For production environment, try to stick to LXC 1.0.x as this is the long term,  
stable release which we will support until April 2019.

For Ubuntu users, we have official PPAs for LXC:

 * [stable](https://launchpad.net/~ubuntu-lxc/+archive/stable): Backports of the current stable release
 * [daily-stable](https://launchpad.net/~ubuntu-lxc/+archive/daily-stable): Daily builds of the stable-1.0 branch
 * [daily](https://launchpad.net/~ubuntu-lxc/+archive/daily): Daily builds of the master branch

# Current development version

LXC has two active git branches:

 * **master**: Current development branch
 * **stable-1.0**: Stable update branch for LXC 1.0.x

You can clone those directly with:

    git clone git://github.com/lxc/lxc -b <branch name>

# Release tarballs

Stable release tarballs are available for download below.  
All the post 1.0 ones are GPG signed by one of the maintainers.
