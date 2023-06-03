#include <iostream>
using namespace std;

typedef union a {
    int number;
    char ch;
} Data;

int main(){
    Data a;
    a.number = 123;
    
    Data b;
    b.ch = 'a';

    a.ch = 'b';
    b.number = 100;
    cout << a.number << endl;
    cout << a.ch << endl;
    cout << b.ch << endl;
    cout << b.number << endl;

}