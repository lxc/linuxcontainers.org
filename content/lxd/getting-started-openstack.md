

# Installing and configuring Nova LXD

The Nova LXD project provides a Nova driver for managing full system containers using LXD as part of an OpenStack cloud.

## Manual installation - Ubuntu server (Ubuntu 16.04)

Nova LXD is available in Ubuntu 16.04;  The Nova LXD driver is installed on Nova Compute servers only:

    sudo apt-get install nova-lxd

The 'nova-lxd' package ensures that the nova-compute daemon is started
with the correct hypervisor driver for LXD; however the 'nova' user must
have group membership of the 'lxd' group to have access to manage LXD
containers:

    sudo usermod -G lxd -a nova
    sudo service nova-compute restart

In order to support migration of containers between Compute hosts, LXD must be configured to listen for network
connections and a trust password must be set:

    sudo lxc config set core.https_address [::]
    sudo lxc config set core.trust_password some-password

Each Nova LXD instance within your deployment must then be configured with remotes for all of Nova LXD instances:

    sudo lxc remote add host-a <ip address or DNS of remote service>

## Automated deployment using Juju

Deploying OpenStack is a complex process, for which a number of deployment tools exist; Juju provides a nice way
to deploy OpenStack on Ubuntu, and a specific [bundle of charms](https://jujucharms.com/u/openstack-charmers-next/openstack-lxd) can be used to deploy OpenStack cloud using LXD.

The bundle automatically configures storage for containers root filesystems using LVM and sets up appropriate network configuration,
trust passwords and remotes to support migration of containers between LXD hypervisors.

## LXD images for OpenStack

LXD requires use of 'raw' images that are generally to be installed onto a block device, such as a disk partition or an LVM volume. Canonical publishes raw images of Ubuntu for various arches (arm64, armhf, i386, amd64, ppc64el). These can be imported similarly to the following example, that imports an amd64 Ubuntu trusty image:

    glance image-create --name="trusty" --public --progress \
        --container-format=bare --disk-format=raw \
        --copy-from http://cloud-images.ubuntu.com/trusty/current/trusty-server-cloudimg-amd64-root.tar.gz

## Creating containers

LXD containers are managed in the same manner as KVM containers - either via Horizon or via the Nova CLI:

    nova boot --image=trusty --flavor=m1.tiny my-first-openstack-lxd-container

You may need to associate a floating ip address and configure appropriate security rules, depending on the network and
security configuration of the OpenStack cloud you are using.
