#!/bin/bash

url=https://photo.tku.edu.tw/pic.cshtml?no=F97F69EC0C0D6000
max=200
for n in $(seq 1 $max); do
    echo $n
    curl -Is $url > /dev/null & 
done
