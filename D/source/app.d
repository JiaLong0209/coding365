import mod;
import std.stdio;


version (unittest) {} else
version (IntegrationTest) {} else {
    void main() {
        writeln("Hello, D");
        /*forloop();*/
        /*UFCS();*/
        /*test();*/
        practice_main();
    }
}
