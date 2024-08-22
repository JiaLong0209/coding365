
module mod.func;

import std.stdio;
import std.algorithm;
import std.range;
import std.random; 
import std.array;



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

string yabe(int times){
    string str = "";
    for(int i = 0; i < times; i++){
        str ~= "耶比";
    }
    return str ~ "!";
}


void continueLoop(bool skipInnerLoop = true){
    outerLoop: 
    for (int i = 0; i < 5; i++){
        for(int j = 0; j < 5; j++){
            if(j == 1) {
                writeln("Skipping for i ", i);
                if(skipInnerLoop) {
                    continue outerLoop;
                }else {
                    continue;
                }
            }
            writeln("i: ", i, " j: ", j);
        }
    }
}

void breakLoop(bool skipInnerLoop = true){
    outerLoop: 
    for (int i = 0; i < 5; i++){
        for(int j = 0; j < 5; j++){
            if(j == 1) {
                writeln("Skipping for i ", i);
                if(skipInnerLoop) {
                    break outerLoop;
                }else {
                    break;
                }
            }
            writeln("i: ", i, " j: ", j);
        }
    }
}

void printYabe(){
    auto rnd = Random(0);
    int[1000000] arr = 0;
    foreach(ref int x; arr){
        x = uniform(3, 15, rnd);
    }

    foreach(int x; arr){
        string str = "";
        for(int j = 0; j < x; j++){
            str ~= yabe(2);
        }
        writeln(str);
    }

}

void forloop(){
    writeln("Enter forloop function");
    printYabe();
    /*continueLoop(true);*/
    /*breakLoop(false);*/
}


