#include<iostream>
#include<cstring>
#include<vector>
using namespace std;

int p = 0;
int sum = 0;
vector<int> V;

int DFS(){
    int u = V[p++], v;
    if(!u) return 0;
    for(int i = 0; i < 2 + (u & 1); i++){
        v = DFS();
        if(v) sum += abs(u - v);
    }
    return u;
}
int main(){
    int v;
    while(cin >> v) V.push_back(v);
    DFS();
    cout << sum << endl;
    return 0;
}