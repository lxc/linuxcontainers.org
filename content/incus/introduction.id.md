[TOC]

<!--
# What is Incus?
-->
# Apa itu Incus?

<!--
Incus is a next generation system container and virtual machine manager.
-->
Incus adalah manajer sistem container dan mesin virtual.

<!--
It provides a user experience similar to that of a public cloud. With it, you can easily mix and match both containers and virtual machines, sharing the same underlying storage and network.
-->
Ini memberikan pengalaman pengguna yang serupa dengan cloud publik. Dengan ini, anda dapat dengan mudah memadupadankan container dan mesin virtual, berbagi penyimpanan dan jaringan dasar yang sama.

<!--
Incus is image based and provides images for a [wide number of Linux distributions](https://images.linuxcontainers.org). It provides flexibility and scalability for various use cases, with support for different storage backends and network types and the option to install on hardware ranging from an individual laptop or cloud instance to a full server rack.
-->
Incus berbasis image dan menyediakan image untuk [sejumlah besar distribusi Linux](https://images.linuxcontainers.org). Ini memberikan fleksibilitas dan skalabilitas untuk berbagai kasus penggunaan, dengan dukungan untuk backend penyimpanan dan jenis jaringan yang berbeda dan opsi untuk menginstal pada perangkat keras mulai dari laptop individual atau cloud instance hingga rak server lengkap.


<!--
When using Incus, you can manage your instances (containers and VMs) with a simple command line tool, directly through the REST API or by using third-party tools and integrations. Incus implements a single REST API for both local and remote access.
-->
Ketika menggunakan Incus, Anda dapat mengatur instance (container dan VM) dengan CLI, langsung melalui REST API atau menggunakan alat pihak ketiga dan integrasi. Incus mengimplementasikan satu REST API untuk lokal dan remote akses.

<!--
The Incus project [was created](/incus/announcement/) by Aleksa Sarai as a community driven alternative to Canonical's LXD.
Today, it's led and maintained by much of the same people that once created LXD.
-->
Proyek Incus [dibuat](/incus/announcement/) oleh Aleksa Sarai sebagai alternatif untuk Canonical LXD yang berbasis komunitas.
Saat ini, Incus dipimpin dan dikelola oleh orang-orang yang sama yang pernah membuat LXD.

<!--
## Get started
-->
## Memulai

<!--
To get a better idea of what Incus is and what it does, you can [try it online](/incus/try-it/)!
-->
Untuk lebih memahami apa itu Incus dan apa fungsinya, Anda dapat [mencobanya secara online](/incus/try-it/)!

<!--
Then if you want to run it locally, take a look at our [getting started guide](/incus/docs/main/tutorial/first_steps/).
-->
Lalu jika Anda ingin menjalankannya secara lokal, [lihat panduan memulai kami](/incus/docs/main/tutorial/first_steps/).

<!--
## Containers and virtual machines
-->
## Container dan mesin virtual

<!--
Incus provides support for system containers and virtual machines.
-->
Incus menyediakan dukungan untuk sistem container dan mesin virtual.

<!--
When running a system container, Incus simulates a virtual version of a full operating system. To do this, it uses the functionality provided by the kernel running on the host system.
-->
Ketika menjalankan sistem container, Incus mensimulasikan versi virtual dari sistem operasi lengkap. Untuk melakukkan hal ini, ia menggunakan fungsionalitas yang disediakan oleh kernel yang berjalan pada sistem host.

<!--
When running a virtual machine, Incus uses the hardware of the host system, but the kernel is provided by the virtual machine. Therefore, virtual machines can be used to run, for example, a different operating system.
-->
Ketika menjalankan sebuah mesin virtual, Incus menggunakan hardware host system, namun kernel disediakan oleh mesin virtual. Karena itu, mesin virtual dapat digunakan untuk menjalankan, misalnya, sistem operasi yang berbeda.

<!--
You can learn more about the differences between application containers, system containers and virtual machines in [our documentation](/incus/docs/main/explanation/containers_and_vms/).
-->
Anda dapat mempelajari lebih lanjut mengenai perbedaan antara aplikasi container, sistem container dan mesin virtual pada [dokumentasi kami](/incus/docs/main/explanation/containers_and_vms/).

<!--
# Features
-->
# Fitur - fitur

<!--
Some of the biggest features of Incus are:
-->
Beberapa fitur terbesar dari Incus adalah:

<!--
Core API
: * [Secure by design](/incus/docs/main/security) (through unprivileged containers, resource restrictions, authentication, ...)
  * [Intuitive](/incus/docs/main/rest-api) (with a simple, clear API and crisp command line experience)
  * [Scalable](/incus/docs/main/clustering) (from containers on your laptop to clusters of thousands of compute nodes)
  * [Event based](/incus/docs/main/events) (providing logging, operation, and lifecycle events)
  * [Remote usage](/incus/docs/main/remotes) (same API used for local and network access)
  * [Project support](/incus/docs/main/projects) (as a way to compartmentalize sets of images and profiles)
-->
API Inti
: * [Secure by design](/incus/docs/main/security) (melalui container tanpa hak istimewa, pembatasan sumber daya, autentikasi, ...)
  * [Intuitif](/incus/docs/main/rest-api) (dengan API yang sederhana dan jelas serta pengalaman baris perintah yang tajam)
  * [Dapat Diskalakan](/incus/docs/main/clustering) (dari container di laptop Anda hingga cluster ribuan node komputasi)
  * [Berbasis event](/incus/docs/main/events) (menyediakan logging, operasi dan event lifecycle)
  * [Penggunaan jarak jauh](/incus/docs/main/remotes) (API yang sama digunakan untuk akses lokal dan jaringan)
  * [Dukungan proyek](/incus/docs/main/projects) (sebagai cara untuk mengelompokkan kumpulan image dan profil)

<!--
Instances and profiles
: * [Image based](https://images.linuxcontainers.org) (with images for a wide variety of Linux distributions, published daily)
  * [Instances](/incus/docs/main/instances) (containers and virtual-machines)
  * [Configurable through profiles](/incus/docs/main/profiles) (applicable to both containers and virtual machines)
-->
Instance dan Profil
: * [Berbasis Image](https://images.linuxcontainers.org) (dengan image untuk berbagai distribusi Linux, diterbitkan setiap hari)
  * [Instance](/incus/docs/main/instances) (container dan mesin virtual)
  * [Dapat dikonfigurasi melalui profil](/incus/docs/main/profiles) (berlaku untuk container dan mesin virtual)

<!--
Backup and export
: * [Backup and recovery](/incus/docs/main/backup) (for all objects managed by Incus)
  * [Snapshots](/incus/docs/main/reference/instance_options/#snapshot-scheduling-and-configuration) (to save and restore the state of an instance)
  * [Container and image transfer](/incus/docs/main/image-handling) (between different hosts, using images)
  * [Instance migration](/incus/docs/main/migration) (importing existing instances or transferring them between servers)
-->
Pencadangan dan expor
: * [Pencadangan dan pemulihan](/incus/docs/main/backup) (untuk semua objek yang dikelola oleh Incus)
  * [Snapshots](/incus/docs/main/reference/instance_options/#snapshot-scheduling-and-configuration) (untuk menyimpan dan memulihkan keadaan sebuah instance)
  * [Container dan transfer image](/incus/docs/main/image-handling) (antara host yang berbeda, menggunakan image)
  * [Migrasi instance](/incus/docs/main/migration) (mengimpor instance yang ada atau mentransfernya antar server)

<!--
Configurability
: * [Multiple storage backends](/incus/docs/main/explanation/storage/) (with configurable storage pools and storage volumes)
  * [Network management](/incus/docs/main/explanation/networks/) (including bridge creation and configuration, cross-host tunnels, ...)
  * [Advanced resource control](/incus/docs/main/reference/instance_options/#resource-limits) (CPU, memory, network I/O, block I/O, disk usage and kernel resources)
  * [Device passthrough](/incus/docs/main/reference/devices/) (USB, GPU, unix character and block devices, NICs, disks and paths)
-->
Kemampuan Konfigurasi
: * [Beberapa backend penyimpanan](/incus/docs/main/explanation/storage/) (dengan storage pools dan volume penyimpanan yang dapat dikonfigurasi)
  * [Manajemen jaringan](/incus/docs/main/explanation/networks/) (termasuk pembuatan dan konfigurasi bridge, cross-host tunnel, ...)
  * [Kontrol sumber daya tingkat lanjut](/incus/docs/main/reference/instance_options/#resource-limits) (CPU, memori, I/O jaringan, I/O blok, penggunaan disk dan sumber daya kernel)
  * [Passthrough perangkat](/incus/docs/main/reference/devices/) (USB, GPU, karakter unix dan perangkat blok, NIC, disk dan path)

<!--
# Availability
-->
# Ketersediaan

<!--
Incus works on any recent Linux distribution.
-->
Incus berfungsi pada distribusi Linux terbaru mana pun.

<!--
Incus upstream doesn't directly provide packages, but packages are available in a number of distributions or can be found in 3rd party repositories.
-->
Incus upstream tidak secara langsung menyediakan paket, namun paket tersedia di sejumlah distro atau dapat ditemukan di repository pihak ke-3.

<!--
In addition, the Incus client is available for Windows and macOS. You can use the client to connect to an Incus server running on a Linux machine.
-->
Selain itu, Incus klien juga tersedia untuk Windows dan MacOS. Anda dapat menggunakan Incus klien untuk terhubung ke server Incus yang berjalan pada mesin Linux.

<!--
Current installation instructions can be found in our [installation guide](/incus/docs/main/installing/).
-->
Instruksi instalasi saat ini dapat ditemukan di [panduan instalasi kami](/incus/docs/main/installing/).

<!--
# Support
-->
# Dukungan

<!--
Incus has two kind of releases:
-->
Incus memiliki dua jenis rilis:

<!--
 * LTS releases
 * Feature releases
-->
 * Rilis LTS
 * Rilis Fitur

<!--
The current LTS release is Incus 6.0 and is supported until June 2029.
-->
Rilis LTS saat ini adalah Incus 6.0 dan ini didukung hingga Juni 2029.

<!--
Feature releases are pushed out every month or so and contain new features as well as bugfixes.
The normal support length for those releases is of about a month, or until the next release comes out.
Some Linux distributions might offer longer support for particular feature releases that they decided to ship.
-->
Rilis fitur didorong setiap bulan atau lebih dan berisi fitur-fitur baru serta perbaikan bug.
Panjang dukungan normal untuk rilis tersebut adalah sekitar satu bulan, atau hingga rilis berikutnya keluar.

<!--
Commercial support for Incus can be obtained from [Zabbly](https://zabbly.com/incus).
-->
Dukungan komersial untuk Incus dapat diperoleh dari [Zabbly](https://zabbly.com/incus).

<!--
# Language, licensing and contributions
-->
# Bahasa, lisensi dan kontribusi

<!--
Incus is written in Go. It is free software and developed under the [Apache 2 license](https://www.apache.org/licenses/LICENSE-2.0).
-->
Incus ditulis menggunakan Go. Ini adalah software gratis dan dikembangkan menggunakan lisensi [Apache 2](https://www.apache.org/licenses/LICENSE-2.0).

<!--
The Incus source code is available on [GitHub](https://github.com/lxc/incus).
-->
Sumber kode Incus tersedia di [GitHub](https://github.com/lxc/incus).

<!--
There are no CLA or similar legal agreements required to contribute to Incus. However, we require commits be signed-off (following the DCO - Developer Certificate of Ownership). See the [Contribution guidelines](/incus/docs/main/contributing/) for more information.
-->
Tidak ada CLA atau perjanjian hukum yang diwajibkan ketika akan berkontribusi ke Incus. Namun, kami mewajibkan commit signed-off (mengikuti DCO - Developer Certificate of Ownership). Kunjungi [Panduan Kontribusi](/incus/docs/main/contributing/) untuk informasi lebih lanjut.

[<img src="/static/img/GitHub_Logo.png" alt="GitHub logo" style="display:block;float:none;margin-left:auto;margin-right:auto;padding:1em 0;max-height:120px"/>](https://github.com/lxc/incus)
