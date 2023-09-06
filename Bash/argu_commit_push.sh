#!/bin/bash

if [ $# -eq 0 ]; then
    echo "No commit message provided."
    exit 1
fi

commit_message=${1}

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "Git is not installed. Please install Git before running this script."
    exit 1
fi

# Check if the repository is a Git repository
if ! git rev-parse --is-inside-work-tree &> /dev/null; then
    echo "This is not a Git repository. Please initialize Git before running this script."
    exit 1
fi

# Add all changes to the staging area
git add .

# Check if there are any changes to commit
if ! git diff --cached --quiet; then
    # Commit changes with the provided message
    git commit -m "$commit_message"

    # Check if the commit was successful
    if [ $? -eq 0 ]; then
        echo "Commit successful."
    else
        echo "Error: Failed to commit changes."
        exit 1
    fi

    # Push changes to the remote repository
    git push

    # Check if the push was successful
    if [ $? -eq 0 ]; then
        echo "Push successful."
    else
        echo "Error: Failed to push changes."
        exit 1
    fi
else
    echo "No changes to commit."
fi
