#include <iostream>
#include <cstring>
#include <iomanip>
#include <vector>
using namespace std;
string direction(int a, int b){
    string str = "any";
    // while(cin >> a >> b && a && b){
        if(a == 1 && b == 1){
            str = "right";
        }else if(a == 1 && b !=1){
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
    // }

    return str;
}
int main(){
    int a,b;
    a = b = 10;
    vector<string> row (a,"any");
    vector< vector<string> > col (b,row);
    for(int i = 0; i < row.size(); i++){
        for(int j = 0; j < col.size(); j++){
            col[i][j] = direction(j+1,i+1);
        }
    }
    for(auto i : col){
        for(auto j : i){
            cout << setw(6) << j << " ";
        }
        cout << endl;
    }
    return 0;

}


// input output
// 1 1,  right
// 2 2,  left
// 1 2,  down
