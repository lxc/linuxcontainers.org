

# The LXD API

LXD currently only implements a single version of the API, called "1.0".

An interactive version of the API documentation can be [found here](https://linuxcontainers.org/lxd/api/master/).
And some more general information about the API can be [found here](https://linuxcontainers.org/lxd/docs/master/rest-api).

## API backward compatibility

Once an API is marked as "stable", as is the case with the 1.0 API. We commit not to do any backward incompatible changes to it.
We will however make API additions which will be accompanied by an identifier which newer clients can look for.

This means that newer clients can detect whether a given target server supports the new feature and only use it if it does.

## API clients

The following API clients are developed by the LXD project.

* Go [lxd.Client](https://godoc.org/github.com/lxc/lxd/client)
* Python [pylxd](https://github.com/lxc/pylxd)

The following API clients have been submitted by third-party contributors.  They
are neither supported nor endorsed by the LXD project.

* Ruby: [Hyperkit](http://jeffshantz.github.io/hyperkit)
* Node.js:
  * [ts-lxd](http://github.com/trufflesuite/ts-lxd)
  * [node-lxd](http://github.com/alandoherty/node-lxd)
* Java: 
  * [jlxd](http://github.com/digitalspider/jlxd)
  * [relxd](https://github.com/relxd/lxd-sdk)
* Haskell: [lxd-client](https://hackage.haskell.org/package/lxd-client)
* OpenApi Specification file: [OpenApi-spec-file](https://github.com/relxd/lxd-sdk/blob/master/openapi/lxd.yaml)
