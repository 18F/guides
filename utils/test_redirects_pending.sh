#!/bin/bash

### README ###
# This script tests temporary redirects from guides.18f.gov/[guide] to their previous location on [guide].18f.gov
# As new guides are released, remove the guide name from the list of  names to check.
# This test script will be moot once all new guides have been released.

### INSTRUCTIONS ###
# 1. Ensure that _site/sitemap.xml has been created through a local build
# 2. From repo root, run: bash utils/test_redirects.sh
# 3. Open utils/test_redirects_output.csv to see results

# Constants
OUTPUT_FILE=./utils/test_redirects_pending_output.csv
# Remove names from this list as new guides are released
GUIDE_NAMES_RGX="accessibility|agile|brand|content-guide|derisking|eng-hiring|engineering|product|ux-guide"

# parses xml for content
read_xml () {
    local IFS=\>
    read -d \< TAG CONTENT
}

# clear csv
> $OUTPUT_FILE
# csv headers
echo "REQUEST,RESPONSE CODE,RESPONSE URL" >> $OUTPUT_FILE

while read_xml; do
    if [[ $TAG = loc ]] && [[ $CONTENT =~ $GUIDE_NAMES_RGX ]]; then
        URL="https://guides.18f.gov${CONTENT}"
        # curl configs:
        # -L         Follow redirects
        # -s         Don't output anything
        # -o FILE    Write output to <file> instead of stdout
        # -w FORMAT  What to output after completion
        OUTPUT=$(curl -Ls -o /dev/null -w "%{http_code},%{url_effective}" $URL)
        echo "${URL},${OUTPUT}" >> $OUTPUT_FILE
    fi
done < ./_site/sitemap.xml
