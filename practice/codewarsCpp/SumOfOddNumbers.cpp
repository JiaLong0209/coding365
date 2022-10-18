#include <iostream>
using namespace std;

long long rowSumOddNumbers(long long n ){
    return n*n*n;
}



long long My_rowSumOddNumbers(long long n ){

    long long result = 0;
    int odd = 1;
    for(int i = 1; i <= n;i++){
        int sum = 0;
        for(int j =0; j < i ; j++){
            sum += odd;
            odd += 2;

        }
        result = sum;
    }
    return result;
}