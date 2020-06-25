## Contents

* [Introduction](#introduction)
* [Configuration of Instances](#configuration-of-instances)
	* [Difference between Containers and Virtual Machines](#difference-between-containers-and-virtual-machines)
	* [lxc launch flags](#lxc-launch-flags)
	* [Profiles](#profiles)
		* [Create a profile](#create-a-profile)
		* [Edit a profile](#edit-a-profile)
		* [Write a profile](#write-a-profile)
	* [Apply and edit options later](#apply-and-edit-options-later)
	* [Show configuration](#show-configuration)
	* [Cloud-init](#cloud-init)
* [Server configuration](#server-configuration)
	* [Projects](#projects)
	* [Security](#security)
	* [Remote Servers](#remote-servers)
		* [Setup simplestream servers](#setup-simplestream-servers)
		* [Setup your LXD server as remote server](#setup-your-lxd-server-as-remote-server)
		* [Connect to remote servers](#add-remote-servers)
		* [Use remote servers](#use-remote-servers)
* [Further Information & Links](#further-information-links)

---

#Introduction

!!! note "Note:"
	If you haven't set up LXD yet, take a look at the [Getting-Started Guide](/lxd/getting-started-cli/) first.
	{: .p-noteadm }

This Guide gives you more information about the several features of LXD.


# Configuration of instances
A list of configuration keys can be found in the [LXD documentation for instances](/lxd/docs/master/instances#keyvalue-configuration).

You can apply them during launch of instances (see [launch flags](#lxc-launch-flags)) or add them [later](#Apply-and-edit-options-later).

Basically you can apply two types of configurations:

- [General options](/lxd/docs/master/instances#keyvalue-configuration), including:
    - instance start
    - security
    - hardware limits
    - kernel modules
    - snapshots
    - user keys (for cloud-init instructions)
    - and more 
- [Devices](/lxd/docs/master/instances#device-types), including:
    - network
    - storage
    - usb
    - sockets
    - gpu
    - and more


### Difference between Containers and Virtual Machines
For now virtual machines support less features than containers.   
You can see what configuration options are available for virtual machines in the [LXD documentation for instances](/lxd/docs/master/instances#keyvalue-configuration).   
All categories and keys that contain the terms `virtual-machine` or `VM` are supported.

### lxc launch flags
You can apply flags to add configuration options to `lxc launch`.

##### Short list of flags:
<!-- use html table? -->
```
-p profilename   # apply a profile

-c key=value   # apply a config key/value 
```

!!! note "Note:"
	See [Profiles](#profiles) below for details.
	{: .p-noteadm }


Usage:

	lxc launch imageserver:imagename instancename -p profile1 -c key1=value

**Note:**   
To apply multiple profiles or config keys, use one flag for each, like:

	lxc launch imageserver:imagename instancename -p profile1 -p profile2
	
	lxc launch imageserver:imagename instancename -c key1=value -c key2=value


### Profiles
Profiles are like configuration files for instances (but they are saved in a database).

#### No profile/Default profile
If you don't apply specific profiles to an instance, only the `default` profile is applied automatically.

You can view the content of the `default` profile with:

	lxc profile show default

#### Create a profile
Use:

	lxc profile create profilename

After that edit the profile, see below.

#### Edit a profile
Profiles can be edited in multiple ways:

##### 1. Write a textfile and apply the content to a profile
See [Write a profile](#write-a-profile) below for details.

##### 2. Edit a profile with a terminal editor
Use:

	lxc profile edit profilename

###### Choose a specific editor  
You can set the editor in `/home/user/.profile`.

This will set the standard terminal editor to `nano`:

	echo 'export EDITOR=nano' >> ~/.profile 


##### 3. Set specific keys in a profile
Use:

	lxc profile set profilename key=value


#### Write a profile
Profiles are written in yaml (markup language).
So you need to follow a specific syntax.

Steps:

1. Create an empty textfile and name it `profilename.profile` (replace `profilename` with a name of your choice).
2. Open the file with a texteditor of your choice.
3. Edit and save.

**Example** (`default` profile):

```
config: {}
description: ""
devices:
  eth0:
    name: eth0
    nictype: bridged
    parent: lxdbr0
    type: nic
  root:
    path: /
    pool: one
    type: disk
name: default
used_by: []

```

**Explanation:**

##### `config:`
You can apply all configuration keys listed in [LXD documentation - Instance keys](https://linuxcontainers.org/lxd/docs/master/instances#keyvalue-configuration).

  Example:

```
config:
  snapshots.expiry: 1M
  security.protection.delete: true
  security.idmap.isolated: true
  
```

##### `description:`
Adds a description for the profile. <!-- or the instance? -->   
Can be empty.

##### `devices:`
You can apply all configuration keys listed in [LXD documentation - Instance device types](https://linuxcontainers.org/lxd/docs/master/instances#device-types).

##### `name:`
Name of the profile (replace with a name of your choice).

##### `used_by:`
Stays empty, will indicate to which instances this profile is applied.


#### Add the profile to LXD
Create a new empty profile:
 
	lxc profile create myprofile

"Copy" the textfile to the new profile:

	cat myprofile.profile | lxc profile edit myprofile

Now you can apply this profile to an instance during [launch](#lxc-launch-flags) or later (see below).

### Apply and edit options later
You can apply/remove/modify a profile or [edit the instance configuration directly](#edit-instance-configuration).

#### Apply a profile
Use:

	lxc profile add instancename profilename

#### Remove a profile
Use:

	lxc profile remove instancename profilename

#### Edit a profile 
Use:

	lxc profile edit profilename

#### Edit instance configuration
Edit the instance configuration in a terminal editor:

	lxc config edit instancename

Set specific keys:

	lxc config set instancename key=value


### Show configuration
This will show all applied configurations (including attached profiles):

	lxc config show instancename -e


# Cloud-init
`cloud-init` is a software for automatic customization of a linux distribution.

Features include:

* install packages
* apply/edit configuration
* add users
* and more

Requirements:   

* Images with cloud-init support:   
For example, official LXD images that contain the term `cloud` in `ALIAS` have implemented cloud-init support.

## Apply instructions for cloud-init
You can apply instructions for cloud-init inside a LXD profile.

For easier editing, we write the content of the profile in a texteditor and apply the textfile to a new profile.

### Write a cloud-init profile

1. Create a new textfile and name it for example: `cloud-profile1.profile`
2. Open it in a texteditor of your choice and start editing.

Every instruction for cloud-init is applied in section `config`-> `user.user-data` (or other sections for instance data, see [below](#other-config-sections-for-instance-data)):

```
config:
  user.user-data: |
    #cloud-config
    key: value
```

Example:

```
config:
  user.user-data: |
    #cloud-config
    package_upgrade: true
    packages:
      - package1
      - package2

```

This will upgrade all installed packages and install package1 and package2.
<br>
<br>

##### More instructions for cloud-init
For more instructions see [examples in  the cloud-init documentation](https://cloudinit.readthedocs.io/en/latest/topics/examples.html).

##### Other config-sections for instance data

- `user.meta-data` - see [cloud-init docs - instance metadata](https://cloudinit.readthedocs.io/en/latest/topics/instancedata.html)
- `user.vendor-data` - see [cloud-init docs - vendordata](https://cloudinit.readthedocs.io/en/latest/topics/vendordata.html)
- `user.network-config` - see [cloud-init docs - network configuration](https://cloudinit.readthedocs.io/en/latest/topics/network-config.html)

**Tip:**   
You can check whether the syntax is correct with: [cloud-init faq - debug user-data](https://cloudinit.readthedocs.io/en/latest/topics/faq.html#how-can-i-debug-my-user-data)

### Apply the profile
After you saved the textfile, we can apply it with the following steps.

Create a new profile in LXD:
 
	lxc profile create cloud-profile1

Apply the textfile to the new profile:

	cat cloud-profile1.profile | lxc profile edit cloud-profile1

#### Launch the instance with cloud-init
Apply the profile during `lxc launch` with flag `-p`:
 
	lxc launch imageserver:image instancename -p cloud-profile1

Now cloud-init will start working.

!!! note "Note:"
	Cloud-init may take a while until it is finished, depending on your instructions.
	{: .p-noteadm }

#### Cloud-init status
You can get the status of cloud-init with:

	cloud-init status

Reports:   
`status: running`
: means cloud-init is still working

or

`status: done`
: means cloud-init has finished work

<br>

You can also use the following flag, which will only respond when cloud-init is finished:

	cloud-init status --wait


### More information:
See:
 [Cloud-init documentation](https://cloudinit.readthedocs.io/en/latest/)
 
 
# Server configuration
See [LXD documentation - Server settings](/lxd/docs/master/server) for all Server configuration options.

Below we will introduce some topics, including:

- [Projects](#projects)
- [Security](#security)
- [Remote Servers](#remote-servers)

## Projects
You can split your server into projects.   
Each project can have it's own instances, profiles etc.   
See [LXD documentation - Projects](/lxd/docs/master/projects) for more information and configuration.

## Security
See [LXD documentation - Security](/lxd/docs/master/security) for details on Server security.

## Remote Servers
LXD supports different kinds of remote servers:

* `simplestream servers`: pure image servers (see [below](#setup-simplestream-servers))
* `LXD-Servers`: regular LXD-Servers that you can manage over a network (can also be used as image servers). You can choose between multiple methods:
    * [Default (TLS + Password)](#default-tls-password)
    * [Public (image) server](#public-image-server)
    * [Candid](#candid) (Authentication service)
    * [Candid+RBAC](#candid-rbac) (Role Based Access Control)

### Setup simplestream servers
There are multiple servers available, for example:   

- the LXD image server from Avature: [Link to Github Repo](https://github.com/Avature/lxd-image-server)

**Connect to a simplestreams server:**   
See [Add Simplestream servers](#add-simplestream-servers).

### Setup your LXD server as remote server

#### Default (TLS + Password)
This will setup a server with authentification based on TLS-certificates.   
For easier adding of clients, you can set a password which will authenticate the clients the first time they connect.

Set up a LXD-server as a remote server, with:

    lxc config set core.https_address "[::]"
    lxc config set core.trust_password some-password

`core.https_address "[::]"` tells LXD to bind all addresses on port 8443.       `core.trust_password` sets a trust password to be used by new clients.

**Note:**
It is recommended that `core.https_address` should be set to the single address where the server should be available (rather than any address on the host), and firewall rules should be set to only allow access to the LXD port from authorized hosts/subnets.

Furthermore, `core.trust_password` should be unset after all clients have been added. This prevents brute-force attacks trying to guess the password.

For details see: [LXD Documentation - Security](/lxd/docs/master/security)

<br>

**Connect to this Server:**   
See [Add LXD servers](#add-lxd-servers) for how to add a server to your clients remote server list.

#### Public image server
You can use an empty LXD Server (with no storage pools, no networks etc.) as a public image server.

Install LXD and run:

	lxc config set core.https_address :8443 

This will make the LXD-Server available over network on port 8443.   
You also need to set the images you want to share, to `public`.

#### Candid
Candid is an Authentication service.   
See [Ubuntu tutorials - Candid authentication for LXD](https://ubuntu.com/tutorials/candid-authentication-lxd#1-overview) for details and howto.

#### Candid + RBAC
See [LXD documentation - Security RBAC](https://linuxcontainers.org/lxd/docs/master/security#role-based-access-control-rbac) for details.


### Add remote servers

#### Add Simplestream servers
Use:

	lxc remote add some-name https://example.com/some/path --protocol=simplestreams

A list of images on that server can be obtained with:

    lxc image list some-name:

Launch a container based on an image of that server:
   
    lxc launch some-name:image-name your-container


#### Add remote LXD servers

##### Default (TLS + Password)
You can add more servers to the remote server list with:

	lxc remote add some-name <IP|FQDN|URL> [flags]   

Example with IP:

    lxc remote add remoteserver2 1.2.3.4 

This will prompt you to confirm the remote server fingerprint and then ask you for the password.

##### Candid
Use:

	lxc remote add some-name <IP|FQDN|URL> --auth-type=candid


#### Use remote servers

#### Image list on a remote server
A list of images on that server can be obtained with:

    lxc image list my-images:

#### Manage instances on a remote server
You can use the same commands but prefixing the instance
and images name with the remote host like:

    lxc exec remoteserver-name:instancename -- apt-get update
   





# Further Information & Links
You find more information on the following pages:

- [LXD documentation](/lxd/docs/master/index)

- [Forum](https://discuss.linuxcontainers.org/)
    - [Tutorials Section](https://discuss.linuxcontainers.org/c/tutorials)
