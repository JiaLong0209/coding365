#ifndef TEST_H
#define TEST_H

#include <iostream>
#include <cstring>
using namespace std;
string arrow(int a,int b){
    string str = "any";
        if(a == 1 && b == 1){
            str = "right";
        }
        else if(a == 1 && b !=1){
            str = b % 2 == 1? "right" : "down";
        }else if(b == 1 && a != 1){
            str = a % 2 == 1? "right" : "down";
        }else if(a == b){
            str = a % 2 == 1? "up" : "left";
        }else{
            if(a < b){
                str = b % 2 == 1? "right" : "left";
            }else{
                str = a % 2 == 1? "up" : "down";
            }
        }
        // cout << a << " " << b << endl;
        // cout << str << endl;
    return str;
}

#endif