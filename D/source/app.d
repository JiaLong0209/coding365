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


int doubleIt (int x) {
    return x * 2;
}

void UFCS(){
    int[] arr = [1, 2, 3, 4, 5, 6];
    int num = arr[0];


    int delegate(int) dou = (int x) => x * 2;
    
    writeln(dou(num));
    writeln(num.doubleIt);

    // Traditional function call
    writeln(map!(x => x * x)(arr)); 

    // Using UFCS
    writeln(arr.map!(x => x * x)); 

    // Traditional function call chaining
    writeln(array(take(map!(x => x * x)(arr), 3))); // Output: [1, 4, 9]

    // Using UFCS
    writeln(arr.map!(x => x * x).take(3).array); // Output: [1, 4, 9]

    string str = "hello world";
    

    // Traditional function call chaining
    writeln(filter!(c => std.algorithm.find("aeiou", c) !is null)(str)); 

    // Using UFCS
    writeln(str.filter!(c => std.algorithm.find("aeiou", c) !is null)); 

}


void main() {
    UFCS();
    /*test();*/

}
