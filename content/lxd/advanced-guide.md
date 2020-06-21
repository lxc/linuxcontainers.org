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


# Further Information & Links
You find more information on the following pages:

- [LXD documentation](/lxd/docs/master/index)

- [Forum](https://discuss.linuxcontainers.org/)
    - [Tutorials Section](https://discuss.linuxcontainers.org/c/tutorials)
