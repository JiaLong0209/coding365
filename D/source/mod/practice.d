module mod.practice;
import std.stdio;
import std.array;
import std.conv;


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


void practice_main(){
    /*enum_ex();*/
    literal_ex();
}

