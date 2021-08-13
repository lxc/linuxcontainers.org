# Pull requests

Changes to this project should be proposed as pull requests on GitHub
at: https://github.com/lxc/linuxcontainers.org

Proposed changes will then go through code review there and once acked,
be merged in the main branch.


# License and copyright

The linuxcontainers.org website is licensed under the following license:

    Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International

Any contribution to the content must be made under the terms of this license.


Unless otherwise mentioned in the header, all other files are also
licensed under the terms of the CC BY NC SA 4.0 license.


The author of a change remains the copyright holder of their code
(no copyright assignment).


# Developer Certificate of Origin

To improve tracking of contributions to this project we use the DCO 1.1
and use a "sign-off" procedure for all changes going into the branch.

The sign-off is a simple line at the end of the explanation for the
commit which certifies that you wrote it or otherwise have the right
to pass it on as an open-source contribution.


> Developer Certificate of Origin
> Version 1.1
>
> Copyright (C) 2004, 2006 The Linux Foundation and its contributors.
> 660 York Street, Suite 102,
> San Francisco, CA 94110 USA
>
> Everyone is permitted to copy and distribute verbatim copies of this
> license document, but changing it is not allowed.
>
> Developer's Certificate of Origin 1.1
>
> By making a contribution to this project, I certify that:
>
> (a) The contribution was created in whole or in part by me and I
>     have the right to submit it under the open source license
>     indicated in the file; or
>
> (b) The contribution is based upon previous work that, to the best
>     of my knowledge, is covered under an appropriate open source
>     license and I have the right under that license to submit that
>     work with modifications, whether created in whole or in part
>     by me, under the same open source license (unless I am
>     permitted to submit under a different license), as indicated
>     in the file; or
>
> (c) The contribution was provided directly to me by some other
>     person who certified (a), (b) or (c) and I have not modified
>     it.
>
> (d) I understand and agree that this project and the contribution
>     are public and that a record of the contribution (including all
>     personal information I submit with it, including my sign-off) is
>     maintained indefinitely and may be redistributed consistent with
>     this project or the open source license(s) involved.

An example of a valid sign-off line is:

    Signed-off-by: Random J Developer <random@developer.org>

Use your real name and a valid e-mail address.
Sorry, no pseudonyms or anonymous contributions are allowed.

**Note:**
* Sign-off each commit individually, even when it is part of a larger set.
* If multiple authors are participating, sign-off each commit individually by their author.

You can for example use [git commit -s](https://www.git-scm.com/docs/git-commit#Documentation/git-commit.txt--s) to sign-off each commit.

# Commits

* Prefer smaller commits over large commits: For example one for each section
* Add useful messages to your commits, that describe the content or changes

# Style & Content

## Language

The standard language for this project is American English (AE).

Translations for other languages are possible and appreciated. See [Translations](CONTRIBUTING.md#translations) below for details.

## Text- & Programming-Languages used

* **Markdown:** 
  Standard Markdown language and the following extensions:

   ```
   codehilite
   toc
   extra
   tables
   footnotes
   admonition
   wikilinks
   attr_list
   fenced_code
   ```

   See also:

   * [source file of generate](https://github.com/lxc/linuxcontainers.org/blob/master/generate) for currently enabled extensions.
   * [python-markdown documentation](https://python-markdown.github.io/extensions/) for details.

* **HTML:** Used only when necessary.

### Special css-classes in use

* For `Notes` and `Warnings`:

  Add the css-class `.p-noteadm` directly below the content:

  ```
    !!! note "Note:"
	Content
	{: .p-noteadm }
  ```


## Guidelines for the content

* create a Table of Content (TOC) manually (with a markdown list), the toc extension is only used for creation of hyperlinks.

* write short and continuous text
* use lists, tables & code tags 
* use headers for each section and sub-section

## Translations

Copy the original file you want to translate (if a file for the translation is not already existing) and rename it.

**File name:**

Add the shortcut of the language to the filename.
For example, for the `advanced-guide.md`:

    advanced-guide.ja.md  # japanese version

**Layout**:

Keep the original layout.

**Accuracy:**

Translate as accurate as possible.

**Quality:**

You should have good language skills.

**Completeness:**

Your pull request does not have to be complete, every piece of translation is a good start.

**Keep the original content:**

Add the original text as comments inside the text, with:

`<!-- original text -->`

**Example:** 

Take a look at the [source file of the japanese version of the advanced guide](https://raw.githubusercontent.com/lxc/linuxcontainers.org/master/content/lxd/advanced-guide.ja.md).

# Test your changes

Before opening a pull request, you should test the changes you made.

Generate and run a local copy of the website (see [Readme.md](README.md)) and check whether it works and looks correct in your browser.


