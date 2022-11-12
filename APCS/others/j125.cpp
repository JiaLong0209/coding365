// https://zerojudge.tw/ShowProblem?problemid=j125
//       input           output
//      4                  4
//      9 4 3 2            6
//      5 9 8 10 
//      3 3 2 8 
//      6 3 3 4
#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
#include <queue>
#include <utility>
using namespace std;

struct object{
    int x,y,d;
};
int dx[4] = {1,-1,0,0}, dy[4] = {0,0,1,-1};
vector<vector<int>> v(304,vector<int> (304,0)), dis(304,vector<int> (304,0));
int bestPath(int num,int n){
    queue<object> q;
    q.push({1,1,1});
    while(!q.empty()){
        auto [x,y,d] = q.front();
        q.pop();
        if(dis[x][y] || !x || !y || x > n || y > n) continue;
        dis[x][y] = d;
        for(int i = 0; i < 4; i++){
             if(abs(v[x][y]-v[x+dx[i]][y+dy[i]]) <= num){
                q.push({x+dx[i],y+dy[i],d+1});
             }
        }
    }
    // cout << dis[n][n] << " ";
    return dis[n][n];
}

int main(){
    int n;
    cin >> n;
    for(int i = 0; i < n; i++) for(int j = 0; j < n; j++) cin >> v[i][j];
    int p = 0;
    for(int i = 1 << 20; i; i >>= 1){
        if(!bestPath(p+i,n)){
             p += i;
        }
        // cout << p+i << " " << endl;
    }
    // cout << endl;
    bestPath(p+1, n);
    // cout << bestPath(5,n) << endl;
    cout << p+1 << endl << dis[n][n]-1<< endl;
    return 0;
}