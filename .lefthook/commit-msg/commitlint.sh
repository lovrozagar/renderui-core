# .lefthook/commit-msg/commitlint.sh

#!/bin/bash

# Print the commit message
echo $(head -n1 "$1") | bunx commitlint --color
