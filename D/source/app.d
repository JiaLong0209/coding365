import mod;
import std.stdio;
import pattern;



version (unittest) {} else
version (IntegrationTest) {} else {
    void main() {
        writeln("Hello, D");
        /*forloop();*/
        /*UFCS();*/
        /*test();*/

        /*practice_main();*/

        run_design_pattern();
    }
}
