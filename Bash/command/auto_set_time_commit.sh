#!/bin/bash

# Check if two arguments are provided
if [ $# -ne 2 ]; then
    echo "Usage: $0 <commit_message> <time>"
    exit 1
fi

# Extract user-provided parameters
commit="$1"
execution_time="$2"

# Validate the script path
 # if [ ! -f "$file_path c" ]; then
    # echo "Script not found at '$file_path."
    # exit 1
 # fi

# Calculate the desired execution time
# Make sure the provided time is in the format "HH:MM YYYY-MM-DD"
# Example: "15:30 2023-09-10"
execution_time_formatted=$(date -d "$execution_time" +"%H:%M %Y-%m-%d")

# Create the 'at' command
at_command="echo '~/command/argu_commit_push.sh \"$commit\" >> ~/command/set_time_commit.log' | at $execution_time_formatted"

# Run the 'at' command
eval $at_command
