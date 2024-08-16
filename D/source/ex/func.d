
module ex.func;

import std.stdio;
import std.algorithm;
import std.range;


T max(T)(T a, T b){
    return a > b ? a : b;
}

template Factorial(int n){ 
    enum Factorial = n <= 1 ? 1 : n * Factorial!(n - 1);
}

void sayHello(string str){
	writeln("Hello, ", str);
}

void test(){
    auto names = ["B", "C", "C++", "D"];
    foreach(name ; names){
        sayHello(name);
    }
}

