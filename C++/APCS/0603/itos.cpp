#include <iostream>
#include <vector>
#include <string>
#include <sstream>


using namespace std;

int main(){
    int n = 10;
    
    string s;
    stringstream ss;

    cout << "Int = " << n << endl;
    cout << "Int + 30 = " << n + 30 << endl;
    // cout << "Int + \"jialong\" = " << n + "jialong" << endl;

    ss << n;
    ss >> s;
    ss.str("");
    ss.clear();
    
    cout << "String = " << s << endl;
    cout << "String + \"jialong\" = " << s + "jialong" << endl;
    
    ss << s;
    ss >> n;

    cout << "String + 30 = " << n + 30 << endl; 

    return 0;
}