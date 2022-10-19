#!/bin/bash
rm -r levkovalenko.github.io/*[^LICENSE,README.md,.gitignore]
rm levkovalenko.github.io/*a*
mv build/* levkovalenko.github.io
cd levkovalenko.github.io
git checkout master
git add .
git status
git config --global user.email "levozavr@mail.ru"
git config --global user.name "Lev Kovalenko"
git commit -m "AutoRebuild"
git push -f
cd ..

