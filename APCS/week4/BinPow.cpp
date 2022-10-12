#include <iostream>
#include <ctime>

using namespace std;

int BinPow(int a, int n){
    unsigned long long r = 1;
    while( n > 0){
        if(n & 1) r *= a;
        a *= a;
        n >>= 1;
        // cout << "r = " << r << " "; 
    }
    return r;
    
}

int Pow(int a , int n){
    int r = 1;
    for(int i = 0; i < n; i++){
        r *= a;
    }
    return r;
}

int main(){
    int a = 2;
    int n = 900;

    auto start = clock();
    unsigned long long x = BinPow(a,n);
    cout << x << endl; 
    auto end = clock();

    cout << start-end/CLOCKS_PER_SEC << endl << '\n';


    auto start2 = clock();
    unsigned long long y = Pow(a,n);
    cout << x << endl; 
    auto end2 = clock();
    cout << start2-end/CLOCKS_PER_SEC << "\n\n";


    return 0;
}