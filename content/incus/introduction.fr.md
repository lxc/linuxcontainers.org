[TOC]

<!--
# What is Incus?
Incus is a next-generation system container, application container, and virtual machine manager.
-->
# Qu’est-ce qu’Incus ?
Incus est un gestionnaire nouvelle génération de conteneurs système et d’application ainsi que de machines virtuelles.

<!--
It provides a user experience similar to that of a public cloud. With it, you can easily mix and match both containers and virtual machines, sharing the same underlying storage and network.
-->
Il fournit une expérience utilisateur similaire à celle d’un cloud public. Avec Incus, vous pouvez gérer des conteneurs et machines virtuelles partageant le même stockage et le même réseau sous-jacents, en toute simplicité.

<!--
Incus is image based and provides images for a [wide number of Linux distributions](https://images.linuxcontainers.org). It provides flexibility and scalability for various use cases, with support for different storage backends and network types and the option to install on hardware ranging from an individual laptop or cloud instance to a full server rack.
-->
Incus est basé sur des images système et en fournit pour un [grand nombre de distributions Linux](https://images.linuxcontainers.org). Il offre flexibilité et évolutivité pour de nombreux cas d’utilisation, avec le support de différents systèmes de stockage et types de réseau, et peut être installé sur des supports divers, de l’ordinateur portable à l’instance cloud, en passant par le serveur physique.

<!--
When using Incus, you can manage your instances (containers and VMs) with a simple command line tool, directly through the REST API or by using third-party tools and integrations. Incus implements a single REST API for both local and remote access.
-->
En utilisant Incus, vous pouvez gérer vos instances (conteneurs et VM) avec son outil en ligne de commande, directement via son API REST, ou en utilisant des intégrations et outils tiers. Incus implémente une API REST unique, aussi bien pour l’accès local que pour l’accès à distance.

<!--
The Incus project [was created](/incus/announcement/) by Aleksa Sarai as a community driven alternative to Canonical's LXD.
Today, it's led and maintained by many of the same people that once created LXD.
-->
Le projet Incus a [été créé](/incus/announcement/) par Aleksa Sarai comme une alternative à Canonical LXD gérée par la communauté.
Aujourd’hui, il est dirigé et maintenu par bon nombre des personnes qui ont créé LXD.

<!--
## Get started
To get a better idea of what Incus is and what it does, you can [try it online](/incus/try-it/)!
-->
## Pour commencer
Pour vous faire une idée plus précise de ce qu’est Incus et de ce qu’il peut faire, vous pouvez [l’essayer en ligne](/incus/try-it/) !

<!--
Then if you want to run it locally, take a look at our [getting started guide](/incus/docs/main/tutorial/first_steps/).
-->
Ensuite, si vous souhaitez l’utiliser localement, vous pouvez consulter notre [guide de démarrage](/incus/docs/main/tutorial/first_steps/).

<!--
## Containers and virtual machines
Incus provides support for system containers, application containers, and virtual machines.
-->
## Conteneurs et machines virtuelles
Incus prend en charge les conteneurs système et d’application ainsi que les machines virtuelles.

<!--
When running a system container, Incus simulates a virtual version of a full operating system. To do this, it uses the functionality provided by the kernel running on the host system.
-->
Lors de l’exécution d’un conteneur système, Incus simule une version virtuelle d’un système d’exploitation complet. Pour ce faire, il utilise les fonctionnalités fournies par le noyau du système hôte.

<!--
When running an application container, Incus runs isolated applications within the host's operating system using container images, similar to how Docker operates.
-->
Lors de l’exécution d’un conteneur d’application, Incus lance les applications isolées sur le système hôte par l’intermédiaire d’images de conteneurs, comme le fait Docker.

<!--
When running a virtual machine, Incus uses the hardware of the host system, but the kernel is provided by the virtual machine. Therefore, virtual machines can be used to run, for example, a different operating system.
-->
Lors de l’exécution d’une machine virtuelle, Incus utilise le matériel du système hôte, mais le noyau est fourni par la machine virtuelle. De ce fait, les machines virtuelles peuvent être utilisées pour lancer, par exemple, un système d’exploitation différent.

<!--
You can learn more about the differences between application containers, system containers and virtual machines in [our documentation](/incus/docs/main/explanation/containers_and_vms/).
-->
Pour en savoir plus sur les différences entre conteneurs d’application, conteneurs système, et machines virtuelles, consultez [notre documentation](/incus/docs/main/explanation/containers_and_vms/).

<!--
# Features
Some of the biggest features of Incus are:
-->
# Caractéristiques
Voici quelques-unes des principales caractéristiques d’Incus :

<!--
Core API
: * [Secure by design](/incus/docs/main/security) (through unprivileged containers, resource restrictions, authentication, ...)
  * [Intuitive](/incus/docs/main/rest-api) (with a simple, clear API and crisp command line experience)
  * [Scalable](/incus/docs/main/clustering) (from containers on your laptop to clusters of thousands of compute nodes)
  * [Event based](/incus/docs/main/events) (providing logging, operation, and lifecycle events)
  * [Remote usage](/incus/docs/main/remotes) (same API used for local and network access)
  * [Project support](/incus/docs/main/projects) (as a way to compartmentalize sets of images and profiles)
-->
API de base
: * [Sécurisée par design](/incus/docs/main/security) (grâce aux conteneurs non privilégiés, aux restrictions de ressources, à l’authentification…)
  * [Intuitive](/incus/docs/main/rest-api) (avec une API simple et une interface en ligne de commande claire)
  * [Évolutive](/incus/docs/main/clustering) (de quelques conteneurs sur votre ordinateur portable à des clusters de calcul de plusieurs milliers de nœuds)
  * [Basée sur les événements](/incus/docs/main/events) (avec des événements de journalisation, sur les opérations en cours, et tout au long du cycle de vie d’Incus)
  * [Utilisable à distance](/incus/docs/main/remotes) (la même API est utilisée pour les accès locaux et distants)
  * Proposant une [gestion par projet](/incus/docs/main/projects) (pour compartimenter des ensembles d’images et de profils)

<!--
Instances and profiles
: * [Image based](https://images.linuxcontainers.org) (with images for a wide variety of Linux distributions, published daily)
  * [Instances](/incus/docs/main/instances) (containers and virtual-machines)
  * [Configurable through profiles](/incus/docs/main/profiles) (applicable to both containers and virtual machines)
-->
Instances et profils
: * [Gestion par images](https://images.linuxcontainers.org) (avec la publication quotidienne d’images pour une grande variété de distributions Linux)
  * [Instances](/incus/docs/main/instances) (conteneurs et machines virtuelles)
  * [Configuration par profils](/incus/docs/main/profiles) (applicables aux conteneurs et aux machines virtuelles)

<!--
Backup and export
: * [Backup and recovery](/incus/docs/main/backup) (for all objects managed by Incus)
  * [Snapshots](/incus/docs/main/reference/instance_options/#snapshot-scheduling-and-configuration) (to save and restore the state of an instance)
  * [Container and image transfer](/incus/docs/main/image-handling) (between different hosts, using images)
  * [Instance migration](/incus/docs/main/migration) (importing existing instances or transferring them between servers)
-->
Sauvegarde et exportation
: * [Sauvegarde et récupération](/incus/docs/main/backup) (pour tous les objets gérés par Incus)
  * [Instantanés](/incus/docs/main/reference/instance_options/#snapshot-scheduling-and-configuration) (pour sauvegarder et restaurer l’état d’une instance)
  * [Transfert de conteneurs et d’images](/incus/docs/main/image-handling) (entre différents hôtes à l’aide d’images)
  * [Migration d’instances](/incus/docs/main/migration) (importation d’instances existantes ou transfert entre serveurs)

<!--
Configurability
: * [Multiple storage backends](/incus/docs/main/explanation/storage/) (with configurable storage pools and storage volumes)
  * [Network management](/incus/docs/main/explanation/networks/) (including bridge creation and configuration, cross-host tunnels, ...)
  * [Advanced resource control](/incus/docs/main/reference/instance_options/#resource-limits) (CPU, memory, network I/O, block I/O, disk usage and kernel resources)
  * [Device passthrough](/incus/docs/main/reference/devices/) (USB, GPU, unix character and block devices, NICs, disks and paths)
-->
Configurabilité
: * [Divers systèmes de stockage](/incus/docs/main/explanation/storage/) (avec des pools et des volumes de stockage configurables)
  * [Gestion du réseau](/incus/docs/main/explanation/networks/) (création de bridges, de tunnels entre hôtes…)
  * [Contrôle avancé des ressources](/incus/docs/main/reference/instance_options/#resource-limits) (gestion des processeurs, de la mémoire, des E/S du réseau et des périphériques, de l’utilisation des disques et des ressources du noyau)
  * [Passthrough de périphériques](/incus/docs/main/reference/devices/) (USB, GPU, périphériques en mode caractère ou bloc, cartes réseau, disques et chemins d’accès)


<!--
# Availability
Incus works on any recent Linux distribution.
-->
# Disponibilité
Incus fonctionne sur n’importe quelle version récente de Linux.

<!--
Incus upstream doesn't directly provide packages, but packages are available in a number of distributions or can be found in 3rd party repositories.
-->
Le projet Incus ne fournit pas directement de paquets d’installation, mais un certain nombre de distributions Linux et de dépôts tiers en proposent.

<!--
In addition, the Incus client is available for Windows and macOS. You can use the client to connect to an Incus server running on a Linux machine.
-->
De plus, le client Incus est aussi disponible pour Windows et macOS. Vous pouvez utiliser le client pour vous connecter à un serveur Incus fonctionnant sur une machine Linux.

<!--
Current installation instructions can be found in our [installation guide](/incus/docs/main/installing/).
-->
Les instructions d’installation peuvent être consultées dans notre [guide d’installation](/incus/docs/main/installing/).

<!--
# Support
Incus has two kind of releases:
-->
# Support
Incus a deux types de versions :

<!--
 * LTS releases
 * Feature releases
-->
 * Les versions LTS
 * Les versions de fonctionnalité

<!--
The current LTS release is Incus 6.0 and is supported until June 2029.
-->
La version LTS actuelle est Incus 6.0 et est supportée jusqu’en juin 2029.

<!--
Feature releases are pushed out every month or so and contain new features as well as bugfixes.
The normal support length for those releases is of about a month, or until the next release comes out.
Some Linux distributions might offer longer support for particular feature releases that they decided to ship.
-->
Les versions de fonctionnalité sont publiées tous les mois environ et contiennent de nouvelles fonctionnalités ainsi que des corrections de bugs.
La durée normale du support pour ces versions est d’environ un mois, ou jusqu’à la sortie de la version suivante.
Certaines distributions Linux sont susceptibles offrir un support plus long pour les versions qu’elles embarquent.

<!--
Commercial support for Incus can be obtained from [Zabbly](https://zabbly.com/incus).
-->
Un support commercial pour Incus peut être obtenu auprès de [Zabbly](https://zabbly.com/incus).

<!--
# Language, licensing and contributions
Incus is written in Go. It is free software and developed under the [Apache 2 license](https://www.apache.org/licenses/LICENSE-2.0).
-->
# Langage, licence et contributions
Incus est écrit en Go. C’est un logiciel libre développé sous la [licence Apache 2](https://www.apache.org/licenses/LICENSE-2.0).

<!--
The Incus source code is available on [GitHub](https://github.com/lxc/incus).
-->
Le code source d’Incus est disponible sur [GitHub](https://github.com/lxc/incus).

<!--
There are no CLA or similar legal agreements required to contribute to Incus. However, we require commits be signed-off (following the DCO - Developer Certificate of Ownership). See the [Contribution guidelines](/incus/docs/main/contributing/) for more information.
-->
Il n’est pas nécessaire de signer un contrat de licence du contributeur (CLA) ou autre pour contribuer à Incus. Cependant, nous demandons que les commits soient signés (suivant le certificat de propriété du développeur — DCO). Veuillez consulter le [guide de contribution](/incus/docs/main/contributing/) pour plus d’informations.

[<img src="/static/img/GitHub_Logo.png" alt="GitHub logo" style="display:block;float:none;margin-left:auto;margin-right:auto;padding:1em 0;max-height:120px"/>](https://github.com/lxc/incus)
