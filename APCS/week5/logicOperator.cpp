#include<iostream>

using namespace std;

int main(){
    int a,b,x;
    cin >> a >> b >> x;
    a = a>0?1:0;
    b = b>0?1:0;
    x = x==1?1:0;
    int hasAns = 0;
    if((a & b) == x){
        cout << "AND" << endl;
        hasAns = true;
    }
    if((a | b) == x){
        cout << "OR" << endl;
        hasAns = true;
    }
    if((a ^ b) == x){
        cout << "xOR" << endl;
        hasAns = true;
    }
    if(hasAns == 0){
        cout << "IMPOSSIBLE" << endl;
    }
    return 0;
}