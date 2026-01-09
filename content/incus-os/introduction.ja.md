[TOC]

# IncusOS とは? <!-- What's IncusOS? -->
<!--
IncusOS is an immutable OS solely designed around safely and reliably running Incus. It uses modern security features like UEFI Secure Boot and TPM to provide a safe boot experience and seamless full disk encryption.
-->
IncusOS は、Incus を安全・確実に動かすことだけを考えて設計されたイミュータブルな OS です。 UEFI セキュアブートやTPMのようなモダンなセキュリティの機能を使って、安全なブート体験とシームレスな完全なディスクの暗号化を提供します。

<!--
Updates are applied atomically using an A/B scheme allowing for an easy revert in case of problems.
-->
更新は A/B 方式を使ってアトミックに適用され、問題があった場合は簡単に元に戻せます。

<!--
The system itself is completely locked down with no local or remote shell, only an authenticated REST API to access Incus and manage the OS through it.
-->
システム自身は、ローカルあるいはリモートのシェルを提供せずに完全にロックダウンされ、認証された REST API のみが Incus にアクセスし、API を通して OS を管理します。

<iframe width="560" height="315" src="https://www.youtube.com/embed/Is_HgmwayGs?si=X2BmX0DPrB7eJWAN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
IncusOS is ideal for anyone who's focused on building and running infrastructure on top of Incus and wants the underlying infrastructure to be reliable and easy to update.
-->
IncusOS は、Incus の上にインフラストラクチャーを構築・稼働させることにフォーカスし、下層のインフラストラクチャーを信頼性があり更新が容易であるものにしたい人にとって理想的です。

<!--
All IncusOS servers are guaranteed to be running bit for bit the same software, eliminating any deployment variance and making it trivial to scale or re-deploy even large number of servers.
-->
すべての IncusOS サーバーは、bit 単位で完全に同一なソフトウェアを稼働することが保証され、デプロイメントのばらつきをなくし、大量のサーバーでもスケールや再デプロイを容易にします。


# コア機能 <!-- Core features -->

<!--
Main design features:
-->
主な設計の特徴:

 - 安全なブート（UEFIセキュアブートとTPM 2.0の計測）<!-- Boot safety (UEFI Secure Boot and TPM 2.0 measurements) -->
 - 完全なディスク暗号化（TPMを使用したLUKSやZFS暗号化） <!-- Full disk encryption (TPM backed LUKS and ZFS encryption) -->
 - イミュータブル（A/Bパーティション方式、すべてのOSパーティションは読み取り専用で署名される） <!-- Immutable (A/B partition scheme, all OS partitions read-only and signed) -->
 - ロックダウン（APIのみでの管理）<!-- Locked down (API only management) -->
 - モダンな Intel／AMD または ARM システムのための設計 <!-- Designed for modern Intel/AMD or ARM systems -->

<!--
Storage features:
-->
ストレージ機能:

 - 自動のローカルZFSプール <!-- Automatic local ZFS pool -->
 - 追加のディスク上に複雑なZFSプールを作成することをサポート <!-- Support for complex ZFS pool creation on additional disks -->
 - ファイバーチャネルとマルチパスのサポート <!-- Fiber Channel & Multipath support -->
 - NVME-over-TCPのサポート <!-- NVME-over-TCP support -->
 - iSCSI サポート <!-- iSCSI support -->
 - Clustered LVMのサポート（ファイバーチャネル、NVME-over-TCP、iSCSIのいずれかの上に）<!-- Clustered LVM support (on top of Fiber Channel, NVME-over-TCP or iSCSI) -->
 - CephまたはLinstorを使ったソフトウェア定義ストレージのサポート <!-- Ceph support for software defined storage (Linstor coming soon) -->

<!--
Network features:
-->
ネットワーク機能:

 - VLAN対応の自動ブリッジングによりインスタンスを任意のインターフェースに簡単に取り付け <!-- Automatic VLAN-aware bridging making it easy to attach instances to any interface -->
 - リンクアグリゲーションのサポート（passiveとネゴシエーションの両方） <!-- Link aggregation support (both passive and negotiated) -->
 - LLDP のサポート <!-- LLDP support -->
 - エンタープライズプロキシーサーバーのサポート（Kerberos認証を含む） <!-- Support for enterprise proxy servers (including Kerberos authentication) -->
 - 堅牢なNTPのサポート <!-- Robust NTP support -->
 - syslogを使ったリモートロギングのサポート（UDP、TCP、TLS） <!-- Remote logging support through syslog (UDP, TCP, TLS) -->
 - OVS/OVNを使ったソフトウェア定義ネットワークのサポート <!-- OVS/OVN support for software defined networking -->
 - Tailscaleをネイティブでサポート（Netbirdも近日対応予定） <!-- Native support for Tailscale (Netbird coming soon) -->

<!--
Management features:
-->
管理機能:

 - オペレーションセンターを使った集中管理 <!-- Central management through Operations Center -->
 - メインのOS設定と個々のアプリケーションデータの両方のバックアップ／リストアー <!-- Backup/Restore of both the main OS config and individual application data -->
 - OS全体または個々のアプリケーションのファクトリーリセット <!-- Factory reset of either the whole OS or individual applications -->
 - 柔軟なアップデート管理 <!-- Flexible update management -->

# 技術的な詳細 <!-- Technical details -->
<!--
IncusOS is built on top of Debian 13 with our own Incus and kernel builds.
-->
IncusOSは、Debian 13の上に、私たちが独自にビルドしたIncusとカーネルを使って構成しています。

<!--
In addition to running Incus itself, IncusOS can also be used as the underlying OS to run Operations Center and Migration Manager, allowing for an easy migration from a VMware or similar environment over to Incus.
-->
Incusそのものを動かすのに加えて、Incusはオペレーションセンターとマイグレーションマネージャーを動かすための基礎となるOSとしても使えます。 これにより、VMwareや似たような環境からIncusへの移行を容易にします。

<!--
We make extensive use of systemd's modern OS features to build our images, handle updates and take care of things like first boot partitioning and TPM backed disk encryption.
-->
私たちはsystemdのモダンなOS機能を広範囲に使って、イメージを構築し、OSの更新を処理し、初回ブート時のパーティション作成やTPMを使った暗号化などに対処しています。

# 更新とリリースの頻度 <!-- Updates and release cadence -->
<!--
We currently maintain two update channels for IncusOS:
-->
現在私たちはIncusOSに2つの更新チャンネルを提供しています：

 - stable
 - testing

<!--
All installations default to the `stable` channel which typically sees at least one weekly update to pick up the latest stable bugfix release of the Linux kernel as well as any relevant security issues.
-->
すべてのインストールはデフォルトでは `stable` チャンネルを使用します。このチャンネルでは Linux カーネルや重要なセキュリティーの問題の最新の安定版のバグフィクスリリースを含む更新が通常は週に少なくとも一回あります。

<!--
The `testing` channel sees much more frequent builds, typically once a day.
-->
`testing` チャンネルはもっと頻繁にビルドが提供され、通常は1日に1回更新されます。

<!--
IncusOS systems default to checking for updates every 6 hours and will automatically update Incus itself with a very short API downtime (no impact to running instances) and will stage any OS update to be booted upon reboot.
-->
IncusOS のシステムはデフォルトでは6時間ごとに更新を確認し、非常に短いAPIのダウンタイムだけで（稼働中のインスタンスには影響なし）自動的にIncus自身を更新し、OSの更新は次回のリブート時にスケジュールします。

<!--
Configuration options are available to change the update frequency or disable automatic updates altogether as well as specifying scheduled downtime periods to apply the application updates.
-->
更新の頻度を変更したり、自動更新を完全に無効にしたり、アプリケーションの更新を適用するためのスケジュールされたダウンタイムを設定するための設定オプションが利用できます。

# 貢献 <!-- Contributing -->
<!--
IncusOS's development is done on Github at https://github.com/lxc/incus-os
-->
IncusOS は Github で開発されています https://github.com/lxc/incus-os 。

<!--
The IncusOS project is made partly of configuration files to drive [mkosi](https://github.com/systemd/mkosi) which is used to build our images and partly of our own Go code for the OS management daemon and related tools.
-->
IncusOS プロジェクトは、イメージのビルドに使われる [mkosi](https://github.com/systemd/mkosi) を駆動するための設定ファイルと、OS 管理デーモンと関連ツール用の Go で書かれたコードで構成されています。

<!--
All code is releasd under the Apache 2.0 license.
-->
すべてのコードは Apache 2.0 ライセンスのもとにリリースされています。

