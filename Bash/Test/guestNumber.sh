#!/bin/bash
declare -i max=100; declare -i count=0 ; declare -i guess=0

answer=$(( $RANDOM % $max+1))
#echo $answer

while [ $guess != $answer ]
do 
    if [ $guess -lt $answer ]; then
	echo -e "too small!!"
    elif [ $guess -gt $answer ]; then
    	echo -e "too big!!"
    fi
    echo "Please enter a number 1 ~ $max: "
    read guess
done

echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
echo "answer is $answer"

