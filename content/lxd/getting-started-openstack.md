# Installing and configuring Nova LXD

The Nova LXD project provides a Nova driver for managing full system containers using LXD as part of an OpenStack cloud.

## Manual installation - Ubuntu server

Nova LXD is available in Ubuntu 15.10;  The Nova LXD driver is installed on Nova Compute servers only:

    sudo apt-get install nova-compute-lxd

The 'nova-compute-lxd' package ensures that the nova-compute daemon is started with the correct hypervisor driver for LXD; however the 'nova' user must have group membership of the 'lxd' group to have access to manage LXD containers:

    sudo usermod -G lxd -a nova
    sudo service nova-compute restart

In order to support migration of containers between Compute hosts, LXD must be configured to listen for network connections and a trust password must be set:

    sudo lxc config set core.https_address [::]
    sudo lxc config set core.trust_password some-password

Each Nova LXD instance within your deployment must then be configured with remotes for all of Nova LXD instances:

    sudo lxc remote add host-a <ip address or DNS of remote service>

## Automated deployment using Juju

Deploying OpenStack is a complex process, for which a number of deployment tools exist; Juju provides a nice way to deploy OpenStack on Ubuntu, and a specific [bundle of charms](https://jujucharms.com/u/openstack-charmers-next/openstack-lxd) can be used to deploy OpenStack cloud using LXD.

The bundle automatically configures storage for containers root filesystems using LVM and sets up appropriate network configuration, trust passwords and remotes to support migration of containers between LXD hypervisors.

## LXD images for OpenStack

LXD does not support the use of the qcow2 image format used for KVM; LXD requires use of root filesystem archive based images. Canonical publish Ubuntu images of the required format:

    glance image-create --name="trusty" --public --progress \
        --container-format=bare --disk-format=root-tar \
        --property architecture="x86_64" \
        --property hypervisor_type=lxc \
        --copy-from http://cloud-images.ubuntu.com/trusty/current/trusty-server-cloudimg-amd64-root.tar.gz

## Creating containers

LXD containers are managed in exactly the same way as a KVM container - either via Horizon or via the Nova CLI:

    nova boot --image=trusty --flavor=m1.tiny my-first-openstack-lxd-container

You may need to associate a floating ip address and configure appropriate security rules depending on the network and security configuration of the OpenStack cloud you are using.
