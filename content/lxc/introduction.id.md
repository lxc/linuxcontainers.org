<!--
# What's LXC?
-->
# Apa itu LXC?

<!--
LXC is a userspace interface for the Linux kernel containment features. Through a powerful API and simple tools, it lets Linux users easily create and manage system or application containers.
-->
LXC adalah antarmuka userspace untuk fitur containment Linux kernel. Melalui API yang kuat dan alat yang sederhana, ini memungkinkan pengguna Linux dengan mudah membuat dan mengelola sistem atau aplikasi container.

<!--
# Features
-->
# Fitur - fitur

<!--
Current LXC uses the following kernel features to contain processes:

 * Kernel namespaces (ipc, uts, mount, pid, network and user)
 * Apparmor and SELinux profiles
 * Seccomp policies
 * Chroots (using pivot\_root)
 * Kernel capabilities
 * CGroups (control groups)
-->
LXC saat ini menggunakan fitur kernel berikut untuk memuat proses:

 * Kernel namespaces (ipc, uts, mount, pid, network and user)
 * Apparmor dan SELinux profiles
 * Seccomp policies
 * Chroots (using pivot\_root)
 * Kernel capabilities
 * CGroups (control groups)

<!--
LXC containers are often considered as something in the middle between a chroot and a full fledged virtual machine. The goal of LXC is to create an environment as close as possible to a standard Linux installation but without the need for a separate kernel.
-->
Container LXC sering dianggap sebagai sesuatu di tengah-tengah antara chroot dan mesin virtual yang lengkap. Tujuan LXC adalah menciptakan lingkungan yang sedekat mungkin dengan instalasi Linux standar tetapi tanpa memerlukan kernel terpisah.

<!--
# Components
-->
# Komponen

<!--
LXC is currently made of a few separate components:
-->
LXC saat ini dibuat dari beberapa komponen terpisah:

<!--
 * The liblxc library
 * Several language bindings for the API:
    * [python3](https://github.com/lxc/python3-lxc)
    * [lua](https://github.com/lxc/lua-lxc)
    * [Go](https://github.com/lxc/go-lxc)
    * [ruby](https://github.com/lxc/ruby-lxc)
    * [Haskell](https://github.com/fizruk/lxc)
 * A set of standard tools to control the containers
 * Distribution container templates
-->
 * Library liblxc
 * Beberapa language bindings untuk API:
    * [python3](https://github.com/lxc/python3-lxc)
    * [lua](https://github.com/lxc/lua-lxc)
    * [Go](https://github.com/lxc/go-lxc)
    * [ruby](https://github.com/lxc/ruby-lxc)
    * [Haskell](https://github.com/fizruk/lxc)
 * Seperangkat alat standar untuk mengatur Container
 * Distribusi template Container


<!--
# Licensig
-->
# Lisensi

<!--
LXC is free software, most of the code is released under the terms of the GNU LGPLv2.1+ license, some Android compatibility bits are released under a standard 2-clause BSD license and some binaries and templates are released under the GNU GPLv2 license.
-->
LXC adalah perangkat lunak gratis, sebagian besar kode dirilis di bawah ketentuan lisensi GNU LGPLv2.1+, beberapa kompatibilitas Android dirilis di bawah lisensi 2-klausul BSD standar dan beberapa binari serta template dirilis di bawah lisensi GNU GPLv2.

<!--
The default license for the project is the GNU LGPLv2.1+.
-->
Lisensi default untuk proyek ini adalah GNU LGPLv2.1+.

<!--
# Support
-->
# Dukungan

<!--
LXC's stable release support relies on the Linux distributions and their own commitment to pushing stable fixes and security updates.
-->
Dukungan rilis stabil LXC bergantung pada distribusi Linux dan komitmen mereka untuk mendorong perbaikan stabil dan pembaruan keamanan.

<!--
Based on the needs and available resources from the various distributions, specific versions of LXC can enjoy long term support with frequent bugfix updates.
-->
Berdasarkan kebutuhan dan sumber daya yang tersedia dari berbagai distribusi, versi tertentu LXC dapat menikmati dukungan jangka panjang dengan pembaruan perbaikan bug yang sering dilakukan.

<!--
Other releases will typically be maintained on a best effort basis which typically means until the next stable release is out.
-->
Rilis lainnya biasanya akan dipertahankan berdasarkan upaya terbaik yang biasanya berarti hingga rilis stabil berikutnya keluar.

<!--
## Extended support
-->
## Dukungan yang diperluas

<!--
LXC 5.0 and 4.0 are long term support releases:
-->
LXC 5.0 dan 4.0 adalah rilis dengan dukungan jangka panjang:

<!--
 - LXC 5.0 will be supported until June 1st 2027
 - LXC 4.0 will be supported until June 1st 2025
-->
- LXC 5.0 didukung hingga 1 Juni 2027
- LXC 4.0 didukung hingga 1 Juni 2025
