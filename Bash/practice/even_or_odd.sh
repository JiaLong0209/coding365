#!/bin/bash

# Prompt the user for a list of numbers separated by spaces
echo "Enter a list of numbers separated by spaces:"
read -a nums

# Check if each number is even or odd
for num in "${nums[@]}"; do
    if [ $((num % 2)) -eq 0 ]; then
        echo "$num is even."
    elif [ $((num % 2)) -ne 0 ]; then
        echo "$num is odd."
    else
        echo "Invalid input."
    fi
done
