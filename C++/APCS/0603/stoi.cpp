#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main(){
    string s = "100";
    int n;

    cin >> s;
    cout << "String = " << s << endl;
    // cout << "String + 30 = " << s + 30 << endl; //error

    n = stoi(s);

    cout << "Int = " << n << endl;

    cout << "n + 30 = " << n + 30 << endl;

    return 0;
}