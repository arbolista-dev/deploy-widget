#!/usr/bin/env bash

REPO='https://github.com/arbolista-dev/cc-calculator-widget.git';
RELEASE_DIR='release';
REPO_NAME='cc-calculator-widget';
BUNDLE_PATH='dist/bundle.min.js'

# Fetch Latest Code
rm -rf $RELEASE_DIR
git clone -b master $REPO $RELEASE_DIR;
