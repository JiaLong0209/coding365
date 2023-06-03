#include <iostream>
#include <stack>
#include <string>

using namespace std;

int main(){
    stack<char> s;
    string str;
    cin >> str;
    for(char i : str){
        s.push(i);
    }

    for(int i = 0; i < str.size(); i++){
        cout << s.top();
        s.pop();
    }
    
    return 0;   
}