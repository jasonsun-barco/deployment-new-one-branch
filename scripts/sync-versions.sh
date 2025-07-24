#!/bin/bash

# Script to sync XML manifest versions with package.json version
PACKAGE_VERSION=$(node -p "require('./package.json').version")

echo "Updating XML manifests to version: $PACKAGE_VERSION"

# Update main config.xml
sed -i "s/<Version>.*<\/Version>/<Version>$PACKAGE_VERSION<\/Version>/" src/config/config.xml

# Update all package.xml files
find src/packages -name "package.xml" -exec sed -i "s/<Version>.*<\/Version>/<Version>$PACKAGE_VERSION<\/Version>/" {} \;

echo "All XML manifests updated to version $PACKAGE_VERSION"
