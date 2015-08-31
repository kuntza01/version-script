#!/bin/bash
set -e
#updating portal-core version in portals
while read portal; do
  #move to portal directory
  echo "... updating $portal ..."
  cd $1/$portal
  #checkout version branch and update to current
  git checkout -B coreVersionBump
  git fetch upstream master
  git reset --hard upstream/master
  #edit bower.json and package.json, update to version
  #call node script to do so with the version argument
  node $1/updateVersion.js $2
  #commit the change and open a PR
  git add bower.json package.json
  git commit -m "Bumping portal-core dependency to $2"
  git push -f origin coreVersionBump
  hub pull-request -m "Bumping portal-core dependency to $2"
  #back to master
  git checkout master
done <directories.txt
