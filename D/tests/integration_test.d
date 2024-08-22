

module integration_test;

import std.stdio;
import std.conv;
import std.algorithm;
import std.array;

import mod.math;
import mod.file;


void main(){
    version(IntegrationTest){
        runIntegrationTests();
    } else {
        writeln("Integration tests version is NOT active.");
    }
}

void runIntegrationTests(){
    writeln("Running integration tests...");

    string base = "data/";
    string[] filenames = ["file", "math"];
    string extension = ".txt";

    string[] filepaths = filenames.map!(name => base~name~extension).array; 

    foreach(name; filenames){
        string filepath = base~name~extension;
        switch (name) {
            case "file":
                saveToFile(filepath, "hello");
                auto result = loadFromFile(filepath);
                writeln(result);
                assert(result == "hello");
            break;

            case "math":
                saveToFile(filepath, to!string(power(2, 10)));
                auto result = loadIntFromFile(filepath);
                writeln(result);
                assert(result == 1024);
            break;

            default:
                writeln("No test for this.");
            break;

        }
        
    }

    writeln("Integration tests finished!");

}


