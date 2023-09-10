declare -i count=10
for ((i=0; i<count; i++))
    do
    	$(touch "${i}.sh"; chmod 755 ${i}.sh)
    done

echo Finish~~~
