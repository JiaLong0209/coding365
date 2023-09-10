#!/bin/bash
echo $( ./animal.sh "dog")
echo "for in"
for i in {1..5}
do
    echo "$i "
done

echo "for (())"
for ((i = 0; i < 10; i+= 2))
do 
    echo "$i"
done 

echo "hello owrld"

function greeting (){
	echo "Hello World $1 "
}

