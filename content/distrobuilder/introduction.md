

# What's distrobuilder?
`distrobuilder` is an image building tool for LXC and LXD.

It's used to build all our official images available on [our image server](https://images.linuxcontainers.org).

The image defintion is a YAML document which describes the source of the
image, its package manager, what packages to install/remove for specific
image variants, os releases and architectures, as well as additional
files to generate and arbitrary actions to execute as part of the image
build process.

The output is either a plain root filesystem, a LXD image or a LXC image.

You can see it at work here: https://jenkins.linuxcontainers.org/view/Images/

# Installing it
Release tarballs can be found in the [Downloads](/distrobuilder/downloads) section.

The current build can also be installed directly with:

    go get -v -x github.com/lxc/distrobuilder

# Language, licensing and contributions
distrobuilder is written in Go, it's free software and is developed under the Apache 2 license.

There are no CLA or similar legal agreements required to contribute to distrobuilder,
however we do require commits be signed-off (following the DCO - Developer Certificate of Ownership).
