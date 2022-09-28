# linuxcontainers.org

This branch contains the content and site generator of the
https://linuxcontainers.org website. Backend code for [Try it](https://linuxcontainers.org/lxd/try-it/)
part is located at https://github.com/lxc/lxd-demo-server

## Contributing

Fixes, new content and translations are greatly appreciated.
Read our [contributing guidelines](CONTRIBUTING.md) for details.

### Open Issues

Take a look at the [open issues on Github](https://github.com/lxc/linuxcontainers.org/issues/), to see where you could help.

For example:

* [Advanced Guide for LXD](https://github.com/lxc/linuxcontainers.org/issues/413)

## Generate & run a local copy

To generate & run a local copy of the website, follow the instructions below.

### Dependencies

Install the following software (naming may depends on your distribution):

 * man2html-base
 * python3 (>= 3.3)
 * python3-bs4
 * python3-jinja2
 * python3-markdown (>= 3.3.4)
 * python3-pygments
 * pymdown-extensions

### Clone the repo

    git clone https://github.com/lxc/linuxcontainers.org

**Note:** The folder `downloads` is quite big, so you can skip that folder by using [git sparse-checkout & partial clones](https://github.blog/2020-01-17-bring-your-monorepo-down-to-size-with-sparse-checkout/#sparse-checkout-and-partial-clones)
(The only exception is, when you work on the downloads page).

As a replacement for the missing `downloads` folder you need to create the following empty folders, before generating the website  (otherwise the generator shows an error):

```
downloads/cgmanager/
downloads/distrobuilder/
downloads/lxc/
downloads/lxcfs/
downloads/lxd/
```

### Generating the website

    ./generate

### Launching the website

After generating the website(above), run these commands(Ubuntu-specific):

    cd output
    python3 -m http.server 8777

Now you can access the website in your browser by using your local IP address and port:

    127.0.0.1:8777

#### (Alternative) Launching within a container

**Inside the container:**

Install the dependencies, clone the repo and generate the website (same as above).

After generating the website, run these commands(Ubuntu-specific):

    cd output
    python3 -m http.server 8777

**On the host:**

You can now navigate to the site (in a browser of your choice) with the container's IP address, for example:

    185.5.3.12:8777

## LXD documentation

Download the HTML of the LXD documentation from the latest workflow run at https://github.com/lxc/lxd/actions/workflows/sphinx.yml. Look for an artifact with filename `documentation.zip`. Unzip it into the local output folder: 

    mkdir -p linuxcontainers.org/output/lxd/docs/master
    unzip documentation.zip -d linuxcontainers.org/output/lxd/docs/master/

You must repeat this process after `./generate` runs, because it cleans the output folder.

## Man pages

Download the man pages from jenkins https://jenkins.linuxcontainers.org/job/lxc-build-tarballs/ and unzip them into the respective folder. For LXC:

    tar xvf manpages.tar.gz -C linuxcontainers.org/manpages/lxc/

Ensure that `man2html` is installed. `./generate` calls this tool and injects the main menu on top.

To install `man2html`:
    
    apt install man2html

## Bug reports & Content requests

Bug reports, requests and ideas regarding the website can be filed at https://github.com/lxc/linuxcontainers.org/issues/new
