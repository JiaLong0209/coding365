#include <iostream>
#pragma pack(2) // set the multiple of Alignment and Padding 
using namespace std;


typedef enum score{
    A,
    B,
    C,
    D = 60,
    E = 100,

} Score;

int main(){
    Score a = A;
    Score b = B;
    Score c = C;
    Score d = D;
    Score e = E;
    
    cout << a << endl; 
    cout << b << endl;
    cout << c << endl;
    cout << d << endl; 
    cout << e << endl;
    
    
}