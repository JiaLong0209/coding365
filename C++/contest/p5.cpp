#include <iostream>
#include <vector>
#include <cmath>

using namespace std;
int capacity;
vector<int> w;
vector<int> v;

int find(int index){
    if(index >= w.size()) return 0;
    int takeW = find(index+1) + w[index]; 
    int takeV = find(index+1) + v[index];

    int notakeW = find(index+1);
    int notakeV = find(index+1);
    
    cout << notakeW << " " << notakeV << endl;
    return takeV > notakeV ? takeV : notakeV;
}

int main(){
    capacity = 7;
    w = {2,1,2,1,1,3};
    v = {1,1,3,2,3,5};
    int size = w.size();
    vector<vector<int>> dp(size+1,vector<int> (size+1,0));
    int res = find(0);
    cout << res << endl;
    return res;
}