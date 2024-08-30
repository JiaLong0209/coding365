import std.stdio;
import std.string;

static immutable string correctPassword = "VeryNicePassword2349#*(jidfjio23*(3f\'dDF##f3$#*))";

void main(){
    writeln("Enter the password: ");
    string input = readln().strip();
    if(input == correctPassword){
        writeln("Password correct!");
    }else{
        writeln("Password incorrect!");
    }
}


