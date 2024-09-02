module mod.practice;
import std.stdio;
import std.array;
import std.format;
import std.conv;


// ----------- Enum practice ----------

void enum_ex(){
    enum mode: string{
        easy = "Easy",
        normal = "Normal",
        hard = "Hard",
    }
    writeln(mode.easy);
    writeln(mode.normal);
    writeln(mode.hard);
}


// ----------- Literals practice ----------

void literal_ex(){

    // Integer Literals
    writeln(octal!"212");
    writeln(300uL); // unsigned long
    writeln(0b010110);
    writeln(0xFF);

    // Floating-point Literals
    writeln(3123424E-10L);
    writeln(0xFF.03ffP4);  

    // Multi-line String Literals

    writeln(q{------------
        Hello World
        Have a good day
        ------------
    });

    auto str = q{auto a = 0xaf.02fadp4; ++a;};
    writeln(str);

}


// ----------- Functions practice -----------

int x = 10;
immutable int y = 20;
int z = 30;
const int* p;

char[] a = "test a".dup;
const char[] b = "test b";
immutable char[] c = "test c";



pure int purefunc(int i, const char* q, immutable int* s){
    /*i = x;*/ //error can't access mutable variable in pure function.
    i = y;
    debug writefln("Purefunc: i = %d", i); 
    return i;
}

int nothrow_add(int a, int b){
    int result;

    try { 
        writeln("Adding");
        result = a + b;
    } catch(Exception error) {}
    return result;
}

ref int ref_greater(ref int a, ref int b){
    return (a > b) ? a : b;
}

auto auto_add(int  a, double b){
    auto result = a+b;
    return result;
}

void variadic_args(int x, ...){
    for(int i = 0; i < _arguments.length; i++){
        writeln(_arguments[i]);
    }
}

inout(char)[] inout_qoute(inout(char)[] str){
    return '"' ~ str ~'"';
}

void property_func(){
    struct Rectangle {
        double width;
        double height;

        double area() const @property{
            return width * height;
        }

        void area(double newArea) @property{
            auto multiplier = newArea / area;
            width *= multiplier;
        }
        
        void info() {
            writeln("-----------\nArea: %f\nWidth: %f\nHeight: %f\n".format(area, width, height));
        }

    }

    void test(){
        auto rect = Rectangle(20, 10);
        rect.info();
        rect.area(666.6);
        rect.info();
    }
    test();
}

// ----------- Strings practice -----------

import std.uni;
import std.string;

void string_ex(){

    char[] s1 = "я тебя люблю".dup;
    char[] s2 = "World".dup;
    char[] arr = "hello2".dup;
    arr = s1.dup;

    writefln("The uppercase of %s: %s", s1, toUpper(s1));
    writefln("The capitalize of %s: %s", s1, capitalize(s1));

    s1[5..8] = s2[0..3];

    writeln(s1);
    writeln(s2);

    writeln(std.string.indexOf(s2, "ld"));
    writeln(std.string.lastIndexOf(s2, "ld"));
    
}



// ----------- Main -----------

void practice_main(){
    /*enum_ex();*/
    /*literal_ex();*/
    /*operator_ex();*/

    // ---- Functions practice
    /*purefunc(x, null, null);*/
    /*nothrow_add(x, y);*/

    /*writefln("x = %d, z = %d",x, z);*/
    /*ref_greater(x, z) += 100;*/
    /*writefln("x = %d, z = %d",x, z);*/

    /*writeln(auto_add(1, 2));*/
    /*variadic_args(1, 2u, 3L, 4.042);*/

    /*writeln(inout_qoute(a), " ", typeof(inout_qoute(a)).stringof);*/
    /*writeln(inout_qoute(b), " ", typeof(inout_qoute(b)).stringof);*/
    /*writeln(inout_qoute(c), " ", typeof(inout_qoute(c)).stringof);*/


    /*property_func();*/

    string_ex();
    

}

