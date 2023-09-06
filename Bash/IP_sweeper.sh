#!/bin/bash 

# [usage] = ./IP_sweeper.sh [first three ranges of your IP]  // 192.168.3



for ip in `seq 1 254`; do
    echo 'current IP: '$1.$ip
    ping -c 1 $1.$ip | grep "64 bytes" | cut -d " " -f 4 | tr -d ":" &
done

# for thridIP in `seq 1 254`; do
#     for ip in `seq 1 254`; do
#         echo 'current IP: '$1.$thridIP.$ip
#         ping -c 1 $1.$thridIP.$ip | grep "64 bytes" | cut -d " " -f 4 | tr -d ":" &
#     done
# done 


# ping 192.168.3.175 | grep "64 bytes" | cut -d " " -f 4 | tr -d ":" &
    # grep , 64 bytes from 192.168.3.175: icmp_seq=1 ttl=64 time=0.024 ms
    # tr -d ":"    // pass colon(:) as a delimiter and deletes it
    # &            // allow the thread to work simultaneously

