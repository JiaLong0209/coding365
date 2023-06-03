#include <iostream>
#include <string>

// echo 100 200 | xargs ./argAdd
// cat arg.txt | xargs ./argAdd
using namespace std;

int main(int argc, char* argv[]){
    int result;
    if(argv[1] != NULL && argv[2] != NULL){
        cout << "Argv[0] = " << argv[0] << endl;
        cout << "Argv[1] = " << argv[1] << endl;
        cout << "Argv[2] = " << argv[2] << endl;
        
        result = stoi(argv[1]) + stoi(argv[2]);
        cout << result << endl;
    }else {
        cout << "Usage: ./argAdd a_String b_String" << endl;
    }
    return result;
}