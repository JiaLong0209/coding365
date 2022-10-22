#include <iostream>
#include <map>
#include <cstring>
using namespace std;

int main(){
    string test = "Hello World! helloworld!123123";
    map<char, int> freq;

    for(int i = 0; i < test.length(); i++){
        char letter = test[i];
        if(letter == ' ') continue;
        if(freq.find(letter) == freq.end()){
            freq[letter] = 0;
        }
        freq[letter]++;
    }

    for(auto itr = freq.begin(); itr != freq.end(); itr++){
        cout << itr->first << ": " << itr->second << endl;
    }


    return 0;
}
