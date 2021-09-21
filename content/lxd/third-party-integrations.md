[TOC]

# Third-party integrations

Beside [using LXD natively](/lxd/getting-started-cli/), you can also use LXD within external tools.

LXD integrations are available for the following tools:

- [Ansible](#ansible)
- [Juju](#juju)
- [Terraform](#terraform)
- [Puppet Bolt](#puppet-bolt)
- [Packer](#packer)

---

## Ansible

[<img src="/static/img/Ansible_logo.svg" alt="Ansible logo"/ height="174" width="141" style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://www.ansible.com/)

[Ansible](https://www.ansible.com/) is an open-source software provisioning, configuration management, and application-deployment tool.

The main integrations between Ansible and LXD are:

* A [connection plugin](https://docs.ansible.com/ansible/latest/collections/community/general/lxd_connection.html#ansible-collections-community-general-lxd-connection) allowing Ansible to manage a LXD instance just as any other Linux system
* An [inventory plugin](https://docs.ansible.com/ansible/latest/collections/community/general/lxd_inventory.html) to detect LXD instances
* A [plugin](https://docs.ansible.com/ansible/latest/collections/community/general/lxd_container_module.html) to create and manage LXD containers
* A [plugin](https://docs.ansible.com/ansible/latest/collections/community/general/lxd_profile_module.html) to manage LXD profiles

To manage LXD in Ansible, you need a LXD Server (see [Set up LXD](#set-up-lxd)).


## Juju

[<img src="/static/img/juju_orange_hex.png" alt="Juju logo"/ height="111" width="308" style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://juju.is/)

[Juju](https://juju.is/) is an open-source software for application management and automation.

Juju can be used to deploy a variety of workloads across many different clouds and virtualization providers.
It supports both deploying workloads against a LXD server or cluster and using LXD on the machines it's deploying to separate otherwise colocated services.

Take a look at the Step-by-Step Guide for LXD in the [Juju Documentation](https://juju.is/docs/olm/lxd).


## Terraform

[<img src="/static/img/Terraform_PrimaryLogo_NonAtt_Color_RGB.png" alt="Terraform logo"/ height="96" width="308" style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://terraform.io)

[Terraform](https://terraform.io) is an open-source infrastructure-as-code software tool for configuration and service management.

The LXD integration allows for Terraform to deploy instances on LXD servers with support for local and remote deployments.

Take a look at the [Terraform Documentation on LXD](https://registry.terraform.io/providers/terraform-lxd/lxd/latest/docs) for more information.

To manage LXD in Terraform, you need a LXD Server (see [Set up LXD](#set-up-lxd)).


## Puppet Bolt

[<img src="/static/img/bolt-logo-dark-vsm.png" alt="Bolt logo"/ height="117" width="308" style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://puppet.com/docs/bolt/latest/bolt.html)

[Bolt](https://puppet.com/docs/bolt/latest/bolt.html) is an open source orchestration tool that automates the manual work it takes to maintain your infrastructure.

The LXD transport allows for interacting with LXD instances.

For more information, see the [Puppet Bolt Documentation on LXD](https://puppet.com/docs/bolt/latest/bolt_transports_reference.html#lxd).

To manage LXD in Puppet Bolt, you need a LXD Server (see [Set up LXD](#set-up-lxd)).


## Packer

[<img src="/static/img/Packer_PrimaryLogo_NonAtt_Color_RGB.png" alt="Packer logo"/ height="121" width="308" style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://www.packer.io)

[Packer](https://www.packer.io) is an open source tool for creating identical machine images for multiple platforms.

With Packer's LXD builder, it's possible to re-use your existing cloud image building pipeline and with the LXD builder, build a LXD container image.

Take a look at the [Packer Documentation on LXD](https://www.packer.io/docs/builders/lxd) for more information.

Additionally our [Getting started guide on images](https://linuxcontainers.org/lxd/getting-started-cli/#images) and the [Advanced guide on instance configuration](https://linuxcontainers.org/lxd/advanced-guide/#configuration-of-instances) might contain useful information regarding image choice, configuration options etc.

To create LXD images in Packer, you need a LXD Server (see [Set up LXD](#set-up-lxd)).


## Additional Information

### Set up LXD

If you haven't set up a LXD server already, you might start with our [Getting started guide](/lxd/getting-started-cli/), especially the chapters about [Installation](/lxd/getting-started-cli/#installation) and [Initial configuration](/lxd/getting-started-cli/#initial-configuration).

For instructions on setting up a LXD remote server, see the [Advanced guide](https://linuxcontainers.org/lxd/advanced-guide/#set-up-your-lxd-server-as-remote-server) as well.
