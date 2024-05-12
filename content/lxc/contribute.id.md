<!--
# Source code
-->
# Sumber Kode

<!--
The current development version of LXC can be cloned from GitHub with:
-->
Versi development LXC saat ini dapat diclone dari Github dengan:

    git clone git://github.com/lxc/lxc

<!--
Source tarballs from the various stable releases are also available in the [downloads](/lxc/downloads/) section.
-->
Sumber kode tarball dari berbagai rilis stabil juga tersedia di bagian [unduhan](/lxc/downloads/).

<!--
Patches sent upstream for review must be based on the current git tree and not on stable releases, unless the bug only affects a stable release.
-->
Patch yang dikirim ke hulu untuk ditinjau harus didasarkan pada git tree saat ini dan bukan pada rilis stabil, kecuali bug hanya memengaruhi rilis stabil.

<!--
# Patch submission process
-->
# Proses Pengajuan Patch

<!--
Every submitted patch **must** be signed off by its author.
-->
Setiap pengajuan patch **harus** ditandatangani oleh author.

<!--
The easy way is to use : `git commit -s`
-->
Cara yang mudah adalah dengan menggunakkan : `git commit -s`

<!--
and if you forgot "-s" on a previous commit : `git commit --amend -s`
-->
dan jika Anda lupa "-s" pada commit sebelumnya : `git commit --amend -s`

<!--
## The mailing-list way
-->
## Cara mailing-list

<!--
You may contribute to LXC either by sending a patch or patchset directly on the [lxc-devel mailing-list](https://lists.linuxcontainers.org/).
-->
Anda dapat berkontribusi ke LXC dengan mengirimkan patch atau patchset langsung ke [milis lxc-devel](https://lists.linuxcontainers.org/).

<!--
You can use `git format-patch` to generate mailable patch.
-->
Anda dapat menggunakan `git format-patch` untuk membuat patch yang dapat dikirimkan.

<!--
Beware of "copy/paste" on mail clients as they can break tabs and lines (see `git send-email` or `git imap-send`).
-->
Hati-hati terhadap "copy-paste" pada klien email karena dapat merusak tab dan baris (lihat `git send-email` atau `git imap-send`).

<!--
## The pull-request way
-->
## Cara pull-request

<!--
Fork the repository, create a branch, commit you work (with -s !), and push it.
-->
Fork repositori, buat sebuah branch, commit pekerjaanmu (dengan -s !), dan push.

<!--
Then follow the [GitHub's doc](https://help.github.com/articles/creating-a-pull-request/).
-->
Lalu ikuti [dokumentasi GitHub](https://help.github.com/articles/creating-a-pull-request/).
