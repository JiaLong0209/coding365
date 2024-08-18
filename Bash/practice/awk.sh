#!/bin/bash

head /etc/passwd | awk -F :  '{ sum += $3 }; END { print sum }'

head /etc/passwd | awk -F : '
    BEGIN { print "name\tUID" };
    { print $1 "\t" $3 };
    END { print "from /etc/passwd" }
    '

ps axu | head -n 1000 |  grep -v "ps axu" | awk '
    BEGIN {
        print "Processes \%CPU >= 1%:"
        print "USER\t\%CPU\t\%MEM\tCOMMAND"
    }
    
    $3>=1.0 {
        print $2 "\t" $3 "\t" $4 "\t" $11;
    }
'

# List $PATH
awk '
    BEGIN {
           n = split (ENVIRON["PATH"], path, ":")
           for (i = 1; i <= n; ++i)
           print path[i]
    }
'


