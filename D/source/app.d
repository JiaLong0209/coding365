import mod.UFCS;
import mod.func;
import std.stdio;

version (unittest) {} else
version (IntegrationTest) {} else {
    void main() {
        writeln("Hello, D");
        forloop();
        /*UFCS();*/
        /*test();*/
    }
}
