#!/bin/bash
if [[ "$TRAVIS_BRANCH" = "$MASTER_BRANCH" ]]
then
    mv build/* levkovalenko.github.io
    cd levkovalenko.github.io
    git checkout master
    git add .
    git status
    git commit -m "AutoRebuild"
    git push -f
    cd ..
fi
