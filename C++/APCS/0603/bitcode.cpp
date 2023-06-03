#include <iostream>
#define SIZE_MASK 0x60
#define ORIGIN_MASK 0x18

using namespace std;

int add(int a, int b){
    cout << "a = " << a << " b = " << b << endl;
    return b == 0 ? a : add(a^b, (a&b) << 1);
}

int main(){
    unsigned char tag = 0x32;
    unsigned char size;

    size = tag & SIZE_MASK;
    cout << (size >> 5) << endl;

    cout << "Add " << endl <<  add(15,33) << endl;

    return 0;
}