# Installing and configuring LXD on OpenNebula

[<img src="/static/img/one-logo.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

This guide provides a walkthrough of the basics of the OpenNebula cloud orchestration system on LXD. First we use the simple MinONE tool to build a single-node cloud environment inside a single physical or virtual machine for users looking to try out OpenNebula, then we show a typical working session with the GUI and the CLI, and finally we provide the links to build a distributed production environment.

## Automated Deployment with MiniONE

MiniONE is a tool that sets up a physical host or a virtual machine as a single-node cloud to quickly deploy a simple but fully functional test scenario.

MiniONE for LXD evaluation requires a dedicated virtual machine or physical host with a fresh default installation of Ubuntu 18.04 or 18.10, min. 2 GiB RAM and 20 GiB free space on disk, and privileged user access (root).
For example MiniONE allows to easily build a LXD/OpenNebula environment on an Amazon VM. The minimal recommended size is perhaps t2.medium. Just give it at least 25GB disk space and allow access to the 9869 TCP where the WebUI is running.

Run the MiniONE script on the dedicated system

    wget https://github.com/OpenNebula/minione/releases/download/v5.8.0/minione
    chmod u+x minione
    sudo minione --lxd

### Try the GUI

Once the MiniONE is done, you will get an overview how to connect to the web interface similar to following:

    ### Report
    OpenNebula 5.8 was installed
    Sunstone (the webui) is runninng on:
      http://192.168.100.101:9869/
    Use following to login:
      user: oneadmin
      password: o6ARsMAdGe

After MiniONE finishes, the first thing we are going to do is to log in as oneadmin to take a look at the Admin View of Sunstone, which has more options than the other Sunstone views for a regular users. Take a look at all the already bootstrapped resources in the cloud.
[<img src="/static/img/one-1.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

With the Admin View you can do anything in OpenNebula, but you don’t want all those options for the final users! Switch to the Cloud View to see how a final user will see OpenNebula.
[<img src="/static/img/one-2.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

The Cloud View interface is much simpler and targeted at end users.
Create a new Virtual Machine by clicking the `+` button. Select the only available template and click `Create`.
After clicking create you will be taken to the dashboard where you can see your running VMs.
[<img src="/static/img/one-3.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

You can click on your VM and manage it: access it through VNC, Save its state, Reboot it, etc:
[<img src="/static/img/one-4.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

Clicking on the Console icon will direct you to the root user shell via VNC
[<img src="/static/img/one-5.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

With the oneadmin role you can customize what your cloud users can do and see.

### Try the CLI

OpenNebula runs as the oneadmin user, and the main administrator should run commands as that user, therefore the first thing you need to do is to switch to oneadmin:

    su - oneadmin
From the oneadmin account you can see all the already bootstrapped resources:

There is one virtualization node

    onehost list

A Centos image has been created

    oneimage list

A Virtual Machine template is registered

    onetemplate list

You can see the template configuration if further detail

    onetemplate show 0

### Access to MarketPlace

OpenNebula comes with predefined MarketPlaces where you can get a lot of prepared images (Apps). There is an integration with [images](https://us.images.linuxcontainers.org), one of the public LXD image servers
[<img src="/static/img/one-6.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

There are various Linux distributions: Alpine, Centos, Debian etc and also some service images with preconfigured applications, like WordPress or GitLab.
[<img src="/static/img/one-7.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

Containers from the public LXD image server as well. We can try some quite fresh Ubuntu.
[<img src="/static/img/one-8.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

And Download it to the datastore.
[<img src="/static/img/one-9.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)

Now when you go to the Template -> VMs section you can instantiate it.

## Building a Production  Installation

If you want to get a production cloud deployment you can read the [documentation](http://docs.opennebula.org/stable). Deploying a environment with a frontend and several LXD nodes requires the following steps:

* [Install the OpenNebula frontend](http://docs.opennebula.org/stable/deployment/opennebula_installation/frontend_installation.html)
* [Install the lxd-node package on the Virtualization Nodes](http://docs.opennebula.org/stable/deployment/node_installation/lxd_node_installation.html)
* [Connect frontend and nodes](http://docs.opennebula.org/stable/deployment/node_installation/lxd_node_installation.html#step-7-adding-a-host-to-opennebula)
* [Check everything is OK](http://docs.opennebula.org/stable/deployment/node_installation/verify.html#verify-installation)

You can now deploy VMs using apps from the marketplaces

[<img src="/static/img/one-logo.png" alt="OpenNebula GUI"/ style="display:block;float:none;margin-left:auto;margin-right:auto;padding-top:1em;padding-bottom:1em;">](https://opennebula.org)