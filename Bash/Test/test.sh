#!/bin/bash
   
   echo -n "請輸入資料(限一般字元)："
   read input
   
   chars="$(echo $input | sed -e 's/[^[:alnum:]]//g')"
   
   if [ "$chars" = "$input" ] 
   then
     valid=1
  else
    valid=0
  fi
  
  if [ "$valid" = "0" ] ; then
    echo "還敢亂輸入阿"
    exit 1
  else
    echo "你輸入的是有效資料"
  fi
