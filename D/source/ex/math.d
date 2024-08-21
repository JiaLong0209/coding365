
module math;

import std.format;
import std.stdio;

int multiply(int a, int b){
    return a * b;
}

int power(int a, int exp){
    return exp > 1 ? a * power(a, exp-1): (exp == 0 ) ? 1 : a;
}


