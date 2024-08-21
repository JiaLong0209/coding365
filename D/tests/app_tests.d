
module app_tests;


import math;
import std.stdio;

unittest {
    assert(multiply(2, 10) == 20);
    assert(power(2, 4) == 16);
    foreach(int i; 1..9){
        foreach(int j; 1..9){
            assert(multiply(i, j) == i*j);
        }
    }
    int[] power_arr = [1,2,4,8,16,32,64]; 
    for(int i = 0; i < power_arr.length; i++){
        assert(power(2, i) == power_arr[i]);
    }
}

