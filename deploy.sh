#!/usr/bin/env bash

REPO='https://github.com/arbolista-dev/cc-calculator-widget.git';
RELEASE_DIR='./dist';
TEMP_DIR='./tmp';
BUNDLE_PATH='dist/bundle.min.js'

# Fetch Latest Code
[ -d $RELEASE_DIR ] || mkdir $RELEASE_DIR;
[ -d $TEMP_DIR ] || mkdir $TEMP_DIR;
cd $TEMP_DIR;
git clone -b master $REPO;

# Symlinks
ln -nfs $TEMP_DIR/$BUNDLE_PATH $BUNDLE_PATH;
chgrp -h www-data $APP_DIR;
