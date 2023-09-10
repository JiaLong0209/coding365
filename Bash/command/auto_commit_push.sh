#!/bin/bash
read -p "Enter the commit message: " input
echo ${input}

git add .
git status
git commit -m "$input"
git push
