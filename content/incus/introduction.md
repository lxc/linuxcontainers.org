# Introducing Incus
Date: 7th of August 2023

The Linux Containers project is excited to announce its latest addition, Incus!

Incus isn’t a completely new project however, it’s a fork of LXD created by Aleksa Sarai.
[Aleksa Sarai](https://github.com/cyphar) is most known for his work on runc, umoci and other OpenContainers projects as well as contributions to the Linux kernel.

But in addition to all that, he’s also been the long time packager of LXD in OpenSUSE.
Aleksa created the fork shortly after Canonical’s decision to take LXD away from Linux Containers with the name Incus being introduced immediately following the LXD 5.16 release. This fork was first intended as a personal project, but has since gathered quite a bit of interest both from the community as well as from former LXD contributors.


After some discussion with Aleksa and a fair bit of encouragement from our community, we have made the decision to take Incus under the umbrella of Linux Containers and will commit to it the infrastructure which was previously made available to LXD.

The goal of Incus is to provide a fully community led alternative to Canonical’s LXD as well as providing an opportunity to correct some mistakes that were made during LXD’s development which couldn’t be corrected without breaking backward compatibility.

In addition to Aleksa, the initial set of maintainers for Incus will include [Christian Brauner](https://github.com/brauner), [Serge Hallyn](https://github.com/hallyn), [Stéphane Graber](https://github.com/stgraber) and [Tycho Andersen](https://github.com/tych0), effectively including the entire team that once created LXD.

There is no clearly defined roadmap at this point. Incus will be tracking changes happening in LXD and will likely in time diverge from it as different decisions get made.
A stable release of Incus is likely at least a couple of months away so existing LXD users shouldn’t rush to find a way to migrate quite yet!

You can find more details or ask us your questions here:

- Github: [https://github.com/lxc/incus](https://github.com/lxc/incus)
- Forum: [https://discuss.linuxcontainers.org](https://discuss.linuxcontainers.org)

Sincerely,

Aleksa Sarai and the Linux Containers team:

&nbsp;&nbsp;  Christian Brauner
&nbsp;&nbsp;  Serge Hallyn
&nbsp;&nbsp;  Stéphane Graber
