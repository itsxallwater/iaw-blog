#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd public/

echo 'www.mwright.dev' > CNAME

git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/itsxallwater/itsxallwater.github.io.git master

cd -