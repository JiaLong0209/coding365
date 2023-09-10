#!/bin/bash
function greeting (){
	echo "Hello World $1 "
}

function sigma (){
    echo 10
}

for ((i=0; i<5; i++)){
	greeting $i
}
var=$(sigma)
echo $var
echo $((0 <= 2))
