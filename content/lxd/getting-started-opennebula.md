# Installing and configuring LXD on OpenNebula

[<img src="/static/img/one-logo.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

This guide provides a walkthrough of the basics of the OpenNebula cloud management platform on LXD. First, we will use the simple MiniONE tool to build a single-node cloud environment inside a single physical or virtual machine for users looking to try out OpenNebula. Then, we will show a typical working session with the Sunstone GUI and the CLI. Finally, we will provide the links to build a distributed production environment.

## Automated Deployment with MiniONE

[MiniONE](https://github.com/OpenNebula/minione) is an evaluation tool that sets up a physical host or a virtual machine as a single-node OpenNebula cloud to quickly deploy a simple but fully functional testing environment.

MiniONE for LXD requires a dedicated virtual machine or physical host with a fresh default installation of Ubuntu 18.04+, with at least 2 GiB RAM and 20 GiB free space on disk, and privileged user access (root). For example, MiniONE can be used to easily build an OpenNebula cloud based on LXD on an Amazon Virtual Machine. The minimum recommended size is t2.medium. Just allocate at least 25GB disk space and remember to allow access to the 9869 TCP port, where the WebUI will be running.

Run the MiniONE script on the dedicated system, like this:

    wget https://github.com/OpenNebula/minione/releases/download/v5.12.1/minione
    chmod u+x minione
    sudo minione --lxd

### Try the GUI

Once MiniONE is running, you will get an overview with instructions on how to connect to the web interface:

    ### Report
    OpenNebula 5.12 was installed
    Sunstone (the webui) is runninng on:
      http://192.168.100.101:9869/
    Use following to login:
      user: oneadmin
      password: o6ARsMAdGe

The first thing we are going to do now is to log in as oneadmin to take a look at the Admin View in Sunstone, which has more options than the other Sunstone views for regular users. Take a look at all the already bootstrapped resources in the cloud:
[<img src="/static/img/one-1.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

With the Admin View you can do anything you want with your OpenNebula cloud, but obviously you don’t want all those options available for the final users! Switch to the Cloud View to see how a regular user of your cloud will see the OpenNebula GUI.
[<img src="/static/img/one-2.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

The Cloud View interface is much simpler and designed for end users that only need access to a set of basic operations. They can, for instance, create a new Virtual Machine by clicking the + button. If you want to try, just select the VM Template and click Create. After clicking on that option you will be taken to the dashboard, where you can now see your instantiated VMs.
[<img src="/static/img/one-3.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

You can click on your VM and manage it: access it through VNC, save its state, reboot it, etc:
[<img src="/static/img/one-4.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

Clicking on the console icon will direct you to the root user shell via VNC:
[<img src="/static/img/one-5.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

With the oneadmin role you can customize what your OpenNebula cloud users can do and see.

### Try the CLI

OpenNebula runs as the oneadmin user on the Linux system, so the main cloud administrator should run commands as that user too, therefore the first thing you need to do is to switch to oneadmin:

    su - oneadmin

From the oneadmin account you can see all the already bootstrapped resources:

There is one virtualization node

    onehost list

A CentOs image has been created

    oneimage list

A Virtual Machine template is registered

    onetemplate list

You can see the template configuration in further detail

    onetemplate show 0

### Access to MarketPlace

OpenNebula comes with predefined marketplaces where you can get a lot of preconfigured images with their VM Template metadata (Apps). It comes with a native integration with [images.linux containers.org](https://us.images.linuxcontainers.org/), one of the public LXD image servers.
[<img src="/static/img/one-6.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

There are various Linux distributions in the official OpenNebula Public Marketplace: Alpine, CentOS, Debian, etc. and also some service images with preconfigured applications, like WordPress or GitLab.

NOTE: Images from the official OpenNebula Marketplace are KVM-ready images, however, the LXD driver, unlike Vanilla LXD, features support for partition table images.

[<img src="/static/img/one-7.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

Containers from the public LXD image server are available as well. We can try some quite fresh Ubuntu.
[<img src="/static/img/one-8.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

And download it to the datastore.
[<img src="/static/img/one-9.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

Now when you go to the Template -> VMs section you can instantiate it.

## Building a Production  Installation

If you want to deploy a production OpenNebula environment please refer to our [documentation](http://docs.opennebula.org/5.12). Deploying an OpenNebula cloud with a front-end and several LXD virtualization nodes requires the following steps:

* [Install the OpenNebula frontend](http://docs.opennebula.org/st5.12able/deployment/opennebula_installation/frontend_installation.html)
* [Install the lxd-node package on the Virtualization Nodes](http://docs.opennebula.org/5.12/deployment/node_installation/lxd_node_installation.html)
* [Connect frontend and nodes](http://docs.opennebula.org/5.12/deployment/node_installation/lxd_node_installation.html#step-7-adding-a-host-to-opennebula)
* [Check everything is OK](http://docs.opennebula.org/5.12/deployment/node_installation/verify.html#verify-installation)

You can now deploy VMs using apps from the marketplaces

[<img src="/static/img/one-logo.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)
