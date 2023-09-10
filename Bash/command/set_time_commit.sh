#!/bin/bash

# Check if two arguments are provided
if [ $# -ne 3 ]; then
    echo "Usage: $0 <script_path> <commit_message> <time>"
    exit 1
fi

# Extract user-provided parameters
file_path="$1"
commit="$2"
execution_time="$3"

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
at_command="echo '\$(date + '%H:%M %Y-%m-%d') >> ~/command/set_time_commit.log 2>&1 && $file_path \"$commit\" >> ~/command/set_time_commit.log 2>&1'| at $execution_time_formatted"

# Run the 'at' command
eval $at_command
