#!/bin/bash
if [[ "$TRAVIS_BRANCH" = "$MASTER_BRANCH" ]]
then
    cd levkovalenko.github.io
    shopt -s extglob
    rm -rf !(LICENSE|README.md|.gitignore)
    ls -a
    cd ..
    mv build/* levkovalenko.github.io
    cd levkovalenko.github.io
    git checkout master
    git add .
    git status
    git commit -m "AutoRebuild"
    git push -f
    cd ..
fi
