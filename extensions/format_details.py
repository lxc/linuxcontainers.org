### Extension to convert the format of the Discourse [details]
### tag to the format required by pymdownx.details.

from markdown.preprocessors import Preprocessor
from markdown.extensions import Extension
import re

class FixFormatting(Preprocessor):

    def run(self, lines):

        if '[details' in str(lines):
            # If there is a [details.*] tag in the markdown file,
            # process the file.

            new_lines = []
            details = 0

            for line in lines:
                if '[details' in line:
                    # If the line introduces a details block, start
                    # it in the required format.

                    details = 1
                    match = re.search(r'\[details=(.+)\]', line)
                    if match:
                        new_lines.append("??? details "+match.group(1)+"\n")
                    else:
                        new_lines.append("??? details\n")

                elif '[/details]' in line:
                    # If the line ends a details block, stop special
                    # processing.

                    details = 0
                    new_lines.append("\n")

                elif details == 1:
                    # If the line is in a details block, indent it.

                    new_lines.append("    "+line)

                else:
                    # Otherwise, use the line as is.

                    new_lines.append(line)

            return new_lines
        else:
            return lines


class FormatDetailsExtension (Extension):

    def extendMarkdown(self, md):
        md.preprocessors.register(FixFormatting(md), 'formatdetails', 9999)
