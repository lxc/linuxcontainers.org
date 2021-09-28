# Source code
The current development version of LXC can be cloned from GitHub with:

    git clone git://github.com/lxc/lxc

Source tarballs from the various stable releases are also available in the [downloads](/lxc/downloads/) section.

Patches sent upstream for review must be based on the current git tree and not on stable releases, unless the bug only affects a stable release.

# Patch submission process
Every submitted patch **must** be signed off by its author.

The easy way is to use : `git commit -s`

and if you forgot "-s" on a previous commit : `git commit --amend -s`

## The mailing-list way
You may contribute to LXC either by sending a patch or patchset directly on the [lxc-devel mailing-list](https://lists.linuxcontainers.org/listinfo/lxc-devel).

You can use `git format-patch` to generate mailable patch.

Beware of "copy/paste" on mail clients as they can break tabs and lines (see `git send-email` or `git imap-send`).

## The pull-request way
Fork the repository, create a branch, commit you work (with -s !), and push it.

Then follow the [GitHub's doc](https://help.github.com/articles/creating-a-pull-request/).
