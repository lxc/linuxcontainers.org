# LXD is now under Canonical
The LXD project is no longer part of the Linux Containers project but can now be found directly on Canonical's websites.

Website: https://ubuntu.com/lxd
Github: https://github.com/canonical/lxd
Forum: https://discourse.ubuntu.com/c/lxd/
Documentation: https://documentation.ubuntu.com/lxd/


**NOTE**: A community fork of LXD, Incus, is now part of the Linux Containers project.
You can learn more here: https://linuxcontainers.org/incus/

# Project announcement
Date: 4th of July 2023

Hello,

Canonical, the creator and main contributor of the LXD project has decided that after over 8 years as part of the Linux Containers community, the project would now be better served directly under Canonical’s own set of projects.

While the team behind Linux Containers regrets that decision and will be missing LXD as one of its projects, it does respect Canonical’s decision and is now in the process of moving the project over.

Concretely, the expected changes are:

- https://github.com/lxc/lxd will now become https://github.com/canonical/lxd
- https://linuxcontainers.org/lxd will disappear and be replaced with a mention directing users to [https://ubuntu.com/lxd](https://ubuntu.com/lxd)
- The LXD YouTube channel will be handed over to the Canonical team
- The LXD section on the Linux Containers community forum will slowly be sunset in favor of the Ubuntu Discourse forum run by Canonical
- The LXD CI infrastructure will be moved under Canonical’s care
- Image building for Linux Containers will no longer be relying on systems provided by Canonical, limiting image building to `x86_64` and `aarch64`.

What will not be changing:

- The rest of the Linux Containers projects remain unaffected
- The image server, currently used by both LXC and LXD will keep operating as normal, though with less architectures available as mentioned above

Those changes will likely all happen pretty rapidly as everything is relatively tightly integrated together. As a result, you may notice a bit of bumpiness while Canonical sets up the replacement infrastructure.

Sincerely,

The Linux Containers team

&nbsp;&nbsp;  Christian Brauner
&nbsp;&nbsp;  Serge Hallyn
&nbsp;&nbsp;  Stéphane Graber
