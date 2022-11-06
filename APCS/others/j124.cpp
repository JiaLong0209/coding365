// https://zerojudge.tw/ShowProblem?problemid=j124
//          input                output
// 2 6 0 8 14 0 0 0 10 0 4 0 0     26 
// 5 2 10 0 0 0 8 0 0 17 0 0 0     26
#include <iostream>
#include <vector>
#include <cmath>
using namespace std;
vector<int> V;
int sum = 0, p = 0;
int dfs(){
    int a = V[p], v;
    p+=1;
    if(!a) return 0;
    for(int i = 0; i < 2 + (a & 1); i++){
        v = dfs();
        if(v) sum += abs(v-a);
    }   
    return a;
}

int main(){
    int val;
    while(cin >> val && val >= 0) V.push_back(val);
    dfs();
    cout << sum << endl;
    return 0;
}