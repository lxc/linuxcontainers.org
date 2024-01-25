
# Distribution packages
LXC is included in most Linux distributions. In most cases installing it is as simple as selecting it in your package manager.

Distributions also often provide backports of newer versions of LXC for their stable releases. You may want to look for that, especially if your distribution doesn't include LXC 5.0 or 4.0.

For production environment, try to stick to LXC 5.0.x or 4.0.x as these are the long term, stable releases which we will support until June 2027 (5.0.x) and June 2025 (4.0.x) respectively.

# Current development version

LXC has three active git branches:

 * **master**: Current development branch
 * **stable-5.0**: Stable update branch for LXC 5.0.x
 * **stable-4.0**: Stable update branch for LXC 4.0.x

You can clone those directly with:

    git clone git://github.com/lxc/lxc -b <branch name>

# Release tarballs

Stable release tarballs are available for download below. All the tarballs are GPG signed by one of the maintainers.
