<h2>What's LXC?</h2>

<p>LXC is a userspace interface for the Linux kernel containment
   features.<br />
   Through a powerful API and simple tools, it lets Linux
   users easily create and manage system or application containers.
</p>

<h3>Features</h3>
<p>Current LXC uses the following kernel features to contain
   processes:
  <ul>
    <li>Kernel namespaces (ipc, uts, mount, pid, network and user)</li>
    <li>Apparmor and SELinux profiles</li>
    <li>Seccomp policies</li>
    <li>Chroots (using pivot_root)</li>
    <li>Kernel capabilities</li>
    <li>Control groups (cgroups)</li>
  </ul>
</p>

<p>As such, LXC is often considered as something in the middle
   between a chroot on steroids and a full fledged virtual machine. The
   goal of LXC is to create an environment as close as possible as a
   standard Linux installation but without the need for a separate
   kernel.
</p>

<h3>Components</h3>
<p>LXC is currently made of a few separate components:
  <ul>
    <li>The liblxc library</li>
    <li>Several language bindings for the API:
       <ul>
        <li>python3 (in-tree, long term support in 1.0.x)</li>
        <li>lua (in tree, long term support in 1.0.x)</li>
        <li><a href="https://github.com/lxc/go-lxc">Go</a></li>
        <li><a href="https://github.com/lxc/ruby-lxc">ruby</a></li>
        <li><a href="https://github.com/lxc/python2-lxc">python2</a></li>
        <li><a href="https://github.com/fizruk/lxc">Haskell</a></li>
       </ul>
    </li>
    <li>A set of standard tools to control the containers</li>
    <li>Container templates</li>
  </ul>
</p>

<h3>Licensing</h3>
<p>LXC is free software, most of the code is released under the
   terms of the GNU LGPLv2.1+ license, some Android compatibility bits
   are released under a standard 2-clause BSD license and some
   binaries and templates are shipped under the GNU GPLv2 license.
</p>

<h2>Where do I get it?</h2>

<h3>From upstream</h3>
<p>You can fetch the latest upstream tarballs
   <a href="/downloads/">here</a>
   or grab it directly from git
   <a href="http://github.com/lxc/lxc">here</a> or with:
</p>

<pre>
git clone git://github.com/lxc/lxc
</pre>


<h3>In your distribution</h3>
<p>LXC is packaged by most current Linux distributions, you can
   then simply install it using your package manager.</p>
<p>Below are some useful links for some of the Linux
   distributions that are most active in LXC development:</p>

<h4>Ubuntu</h4>
<p>
  <ul>
    <li><a href="https://launchpad.net/ubuntu/+source/lxc">
        LXC in Ubuntu</a></li>
    <li><a href="https://launchpad.net/~ubuntu-lxc/+archive/daily">
        Automated upstream builds</a></li>
    <li><a href="https://help.ubuntu.com/lts/serverguide/lxc.html">
        Ubuntu Server guide chapter about LXC</a></li>
  </ul>
</p>

<h4>Oracle</h4>
<p>
  <ul>
    <li><a href="http://public-yum.oracle.com">
        LXC RPMs</a> in Public-Yum [ol6_latest] channel</li>
    <li><a href="http://www.oracle.com/technetwork/server-storage/linux/downloads/playground-1937163.html">
        Latest test/development LXC RPMs</a> in Public-Yum
        [ol6_playground_latest] channel</li>
    <li><a href="http://docs.oracle.com/cd/E37670_01/E37355/html/ol_containers.html">
        Oracle Linux Administrator's Solutions Guide chapter about LXC</a></li>
  </ul>
</p>

<h2>How do I use it?</h2>

<p>More details are available in the individual
   <a href="https://qa.linuxcontainers.org/master/current/doc/man/">manpages</a>
   shipped with LXC itself. But a basic example of how to
   create, start and stop a container would be as follow:
</p>
<pre>
lxc-create -t ubuntu -n p1
lxc-start -n p1 -d
lxc-ls --fancy p1
lxc-stop -n p1
</pre>
<p>The above will create a basic Ubuntu container called "p1",
   then start it in the background, get various information about the
   container including its IP address and finally stop it.
</p>

<p>An equivalent using the python3 API would be:</p>

<pre>
import lxc
container = lxc.Container("p1")
container.create("ubuntu")
container.start()
container.get\_ips()
container.stop()
</pre>

<p>Additional examples about the API may be found in various
   documentation and howtos listed below.
   The C API documentation itself is auto-generated and available
   <a href="https://qa.linuxcontainers.org/master/current/doc/api/">here</a>.
</p>

<h2>How can I contribute to it?</h2>
<p>Most development discussion happen on our
   <a href="http://lists.linuxcontainers.org/listinfo/lxc-devel">
   mailing-list</a>.</br />
   Patches are usually sent there for review and inclusion in
   our master branch.<br />
   Frequent alpha releases and release candidates are tagged
   and packaged by some distributions.
</p>

<p>Ubuntu users can also use our development packages available
   in <a href="https://launchpad.net/~ubuntu-lxc/+archive/daily">
   ppa:ubuntu-lxc/daily</a>
</p>

<h2>Where's the community?</h2>
<p>As previously mentioned, most discussions happen on
   mailing-lists.<br />
   We have two of those:
  <ul>
    <li>
      <a href="http://lists.linuxcontainers.org/listinfo/lxc-devel">
      lxc-devel: For patches and development discussions</a></li>
    <li>
      <a href="http://lists.linuxcontainers.org/listinfo/lxc-users">
      lxc-users: For user discussions</a></li>
  </ul>
</p>

<p>Some of us also hang out in
  <a href="http://webchat.freenode.net/?channels=%23lxcontainers">
  #lxcontainers on irc.freenode.net</a></p>


<h2>What about stable releases?</h2>
<p>Our current stable release is LXC 1.0 which was released on
   the 20th of February 2014.
</p>

<p>This release comes with 5 years of bugfix updates and
   occasional bugfix only releases (1.0.x). LXC 1.0 is the
   first release to have a dedicated stable branch with long
   term support but we expect to repeat this with later major
   releases.
</p>

<h2>External resources</h2>
<p>Here's a list of external documentation, howtos and other
   relevant posts about current LXC:
   <ul>
       <li><a href="https://www.stgraber.org/2013/12/20/lxc-1-0-blog-post-series/">LXC 1.0 blog post series by Stéphane Graber</a></li>
   </ul>
</p>
