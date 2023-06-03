#include <iostream>

using namespace std;

typedef int(*functionType)(int, int);

int add(int a, int b){
    return a+b;
}

int multiply(int a, int b){
    return a*b;
}

int main(){
    // functionType fptr;
    int (*fptr)(int, int);
    fptr = add;
    cout << fptr(10,15) << endl;

    fptr = multiply;
    cout << fptr(10,15) << endl;
    
    int (*fparr[]) (int, int) = {add , multiply};

    cout << fparr[0](10,15) << endl << fparr[1](10,15) << endl;

}