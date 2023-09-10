#!/bin/bash 
   IFS=":" #把PATH變數 路徑1:路徑2:路徑3 拆成 路徑1 路徑2 路徑3，方便等一下的變數能夠迭代
   count=0 #記錄可執行檔的個數
   non_count=0 #記錄不可執行檔的個數

   echo $PATH
   for directory in $PATH
   do
   echo "current directory : $directory-------------------"
    if [ -d "$directory" ]  # 判斷是否是路徑
    then
      for command in "$directory"/* # 尋訪路徑下的所有檔案
        do
       # echo "------ $command ------"
        if [ -x "$command" ] # 判斷檔案是否可執行
        then
          count=$(($count + 1 ))
        else
          echo "[注意！] 偵測到不可執行的命令： $command"      
          non_count=$(( $non_count + 1 ))
        fi
      done
    fi
  done
  
  echo "總共有 $count 個可執行命令， $non_count 個不可執行命令"
