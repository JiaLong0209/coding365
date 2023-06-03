#include <iostream>
#include <cstring>
#include <regex>

using namespace std;
int main(){
    string str1 = "Apple apple bpple ppple people ppale.";
    smatch match;
    regex reg ("[a-zA-Z]*[ .]");

    while(regex_search(str1,match,reg)){
        for(string i : match){
            // cout << i << endl;
            for(char j : i){
                cout << j;
            }
        }
        str1 = match.suffix().str();
        cout << str1 << "\n";
    }
}