#/bin/bash

# Check if each number is even or odd
for num in "$@"; do
    if [ $((num % 2)) -eq 0 ]; then
        echo "$num is even."
    elif [ $((num % 2)) -ne 0 ]; then
        echo "$num is odd."
    else
        echo "Invalid input."
    fi
done
