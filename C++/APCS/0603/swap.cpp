#include <iostream>
using namespace std;

void swap (int* a, int* b){
    int temp;
    temp = *b;
    *b = *a;
    *a = temp;
    // *a ^= *b;
    // *b ^= *a;
    // *a ^= *b;
    return;

}

int main(){
    int a = 5;
    int b = 10;

    cout << a << " " << b;

    swap(&a, &b);

    cout << endl << a << " " << b;

}