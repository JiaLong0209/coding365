#!/bin/bash

find ~/ -name "*.d" -exec du {} --apparent-size -b -h \; | sort -h -r 


ps aux | head  |  tr -s ' ' ','

# Random password generator
head /dev/urandom | tr -dc A-Za-z0-9 | head -c 12 
