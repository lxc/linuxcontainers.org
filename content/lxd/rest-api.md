![Logo](/static/img/containers.png)

# The LXD API

LXD currently only implements a single version of the API, called "1.0".

Details on that API can be found at:  
[https://github.com/lxc/lxd/blob/master/doc/rest-api.md](https://github.com/lxc/lxd/blob/master/doc/rest-api.md)

## API backward compatibility

Once an API is marked as "stable", as is the case with the 1.0 API. We commit not to do any backward incompatible changes to it.  
We will however make API additions which will be accompanied by an identifier which newer clients can look for.

This means that newer clients can detect whether a given target server supports the new feature and only use it if it does.

## API clients

The following API clients have been submitted by third-party contributors.  They
are neither supported nor endorsed by the LXD project.

* Ruby: [Hyperkit](http://jeffshantz.github.io/hyperkit)
* Node.js: [node-lxd](http://github.com/alandoherty/node-lxd)
