#include <iostream>
using namespace std;

int main(){
    int* ptr, a = 100;
    ptr = &a;

    cout << a << endl;
    cout << *ptr << endl;

    int b; 
    b = *ptr + 1;
    *ptr = 3 * b;
    
    cout << b << endl;
    cout << a << endl;
    cout << *ptr << endl;

}