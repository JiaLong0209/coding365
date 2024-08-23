
module mod.file;

import std.conv;
import std.file;
import std.stdio;
import std.string;

void saveToFile(string filename, string data){
    File file = File(filename, "w");
    writefln("Open file: %s", filename);
    file.writefln("%s", data);
    writefln("Write %s into file: %s", data, filename);
    file.close();
    writefln("Close file: %s\n", filename);
}

string loadFromFile(string filename){
    return readText(filename).strip();
}

int loadIntFromFile(string filename){
    return to!int(readText(filename).strip());
}


