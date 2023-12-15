#!/usr/bin/env bash

### README ###
# This script tests redirects from the original paths in standalone guide
# sitemaps to their new location at guides.18f.gov/[guide].
# This test script will be moot once all new guides have been released,
# the redirects are confirmed, and the old sites have been retired.

### INSTRUCTIONS ###
# 1. Determine which guide you would like to test and confirm its sitemap
#    is available in utils/sitemaps/[guide-name]
# 2. Run: bash utils/test_redirects_migrated.sh [guide-name]
# 3. Check utils/test_redirects_migrated_output.csv

# Constants
GUIDE=$1
OUTPUT_FILE=./utils/test_redirects_migrated_output.csv
# Remove names from this list as new guides are released
GUIDE_NAMES_RGX="accessibility|agile|brand|content-guide|derisking|eng-hiring|engineering|product-guide|ux-guide"

# parses xml for content
read_xml () {
    local IFS=\>
    read -d \< TAG URL
}

# clear csv
> $OUTPUT_FILE

# csv headers
echo "REQUEST,RESPONSE CODE,RESPONSE URL" >> $OUTPUT_FILE

while read_xml; do
    if [[ $TAG = loc ]] && [[ $URL =~ $GUIDE_NAMES_RGX ]]; then
        echo "Checking $URL"
        # curl configs:
        # -L                Follow redirects (will display 200 if redirect is followed)
        # -s --show-error   Don't output progress bar, just errors
        # -o FILE           Write output to <file> instead of stdout
        # -w FORMAT         What to output after completion
        OUTPUT=$(curl -Ls --show-error -o /dev/null -w "%{http_code},%{url_effective}" $URL)
        echo "${URL},${OUTPUT}" >> $OUTPUT_FILE
    fi
done < ./utils/sitemaps/$GUIDE.xml

