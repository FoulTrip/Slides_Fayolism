#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into build
cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# If you are deploying to https://<USERNAME>.github.io/
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# If you are deploying to https://<USERNAME>.github.io/
# git push -f git@github.com:FoulTrip/Slides_fayolism.git main:gh-pages