### Extension to include the HTML code needed to put the
### Table of Contents into a sidebar.
### If a markdown page contains "[TOC]", all required code
### will be inserted.

from markdown.preprocessors import Preprocessor
from markdown.extensions import Extension

class InsertToCStuff(Preprocessor):

    def run(self, lines):

        if '[TOC]' in str(lines):
            # If there is a [TOC] tag in the markdown file, add the following
            # lines to the top of the file.

            new_lines = ['<div class="col-9 u-wrap-content" markdown="1">\n',
                         '<div class="toc-link u-hide--medium u-hide--large">\n',
                         '<a href="#table-of-contents">Go to Table of Contents</a>\n',
                         '</div>\n']
        else:
            # If there is no [TOC] tag, leave the file unchanged.
            return lines

        # Keep all lines that do not contain "[TOC]".
        for line in lines:
            if not '[TOC]' in line:
                new_lines.append(line)

        # Add the following lines to the bottom of the file.
        new_lines.extend(['</div><div class="col-3 u-wrap-content" markdown="block">\n',
                          '<a name="table-of-contents"></a>',
                          '\n',
                          '[TOC]\n'])

        return new_lines


class IncludeToCExtension (Extension):

    def extendMarkdown(self, md):
        md.preprocessors.register(InsertToCStuff(md), 'includetoc', 9999)
