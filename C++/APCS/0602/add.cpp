#include <sstream>
#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main(){
    // int n;
    // cin >> n;
    stringstream ss;
    string str;
    int temp; // string to int


    cout << "Keyin number: " << endl;
    getline(cin, str);
    int sum = 0;
    ss.clear();
    ss << str; // ss.str(str) or str = ss.str()  
    while(true){
        ss >> temp;
        // cout << "temp = " << temp << endl;
        if(ss.fail()) break;
        sum += temp;
    }

    cout << str << endl;
    cout << "Sum = " << sum;
    

}