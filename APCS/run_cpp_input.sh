#!/bin/bash
echo "File: $1 < $2"
g++ $1 -std=c++14 -Wall -o "out" && ./out < $2 && rm ./out                                                                               (base) 




