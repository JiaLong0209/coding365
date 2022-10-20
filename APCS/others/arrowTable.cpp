#include <iostream>
#include <cstring>
using namespace std;
int main(){
    int a,b;
    string str = "any";
    while(cin >> a >> b && a && b){
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
        cout << str << endl;
    }
    return 0;
}


// input output
// 1 1,  right
// 2 2,  left
// 1 2,  down
