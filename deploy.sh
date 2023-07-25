#!/bin/bash

echo "Switching Branch"
git checkout master

echo "Building App"
npm run build

echo "Deploying App"
scp -r build/* nnisarggada@nnisarg.in:/var/www/missionicu/

echo "Done!"
