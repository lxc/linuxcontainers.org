![Download icon](/static/img/download.png)
# Paquets dans les distributions
LXC est inclus dans la majorité des distributions Linux.  
Dans la plupart des cas, il ne suffit que de le sélectionner dans  
votre géstionaire de paquets pour l'installer.

Assez souvent les distributions fournissent aussi des "backports" de versions  
plus récentes de LXC pour la version stable du système.  
Cela peut être une option intéressante, surtout si votre distribution n'inclus pas LXC 1.0.

Pour un environement de production, il est recommendé de rester sur les versions 1.0.x de LXC  
car elles sont suppportées plus longtemps (jusqu'à avril 2019).

Pour les utilisateurs d'Ubuntu, nous avons aussi des PPAs officielles:

 * [stable](https://launchpad.net/~ubuntu-lxc/+archive/stable): "Backports" de la version stable actuelle
 * [daily-stable](https://launchpad.net/~ubuntu-lxc/+archive/daily-stable): Paquets journaliers de la branche "stable-1.0"
 * [daily](https://launchpad.net/~ubuntu-lxc/+archive/daily): Paquets journaliers de la branche "master"

# Version de développement actuelle

LXC a deux branches en développement actif:

 * **master**: Version en développement
 * **stable-1.0**: Branche stable pour LXC 1.0.x

Ces branches sont clonables avec:

    git clone git://github.com/lxc/lxc -b <nom de la branche>

# Tarballs des versions stables

Des tarballs (.tar.gz) des versions stables sont disponibles ci-dessous.  
Toutes les versions à partir de 1.0 sont signées avec GPG par un des mainteneurs.
