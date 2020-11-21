# linuxcontainers.org

This branch contains the content and site generator of the
https://linuxcontainers.org website. Backend code for [Try it](https://linuxcontainers.org/lxd/try-it/)
part is located at https://github.com/lxc/lxd-demo-server

## Dependencies

 * man2html-base
 * python3 (>= 3.3)
 * python3-bs4
 * python3-jinja2
 * python3-markdown
 * python3-pygments

## Generating the website

    ./generate

## Launching website within container

Make sure that the container has access to the  website folder that you just cloned.

You can use a bind-mount for the folder if necessary (host => container OR container => host)

After generating the website(above), run these commands(Ubuntu-specific) within the container:

    cd output
    python3 -m http.server 8777

You now need to obtain the IP address for the specific container. You can now navigate to the site (from the host) with the following example IP address:

> 185.5.3.12:8777

## Bug reports

Bug reports can be filed at https://github.com/lxc/linuxcontainers.org/issues/new

## Contributing

Fixes and new content are greatly appreciated but please read our
[contributing guidelines](CONTRIBUTING.md) first.

Contributions to this project should be sent as pull requests on GitHub.
