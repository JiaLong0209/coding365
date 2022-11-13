#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>
using namespace std;
class Solution {
public:
    int lastStoneWeight(vector<int>& s) {
        while(1){
            sort(s.begin(),s.end(),[](int a,int b){return a > b;}); 
            if(s.size()<=2)return s.size() == 1? s[0] : s[0] - s[1];
            if(s[0] == s[1]){
                s.erase(s.begin(),s.begin()+2);
            }else {
                s[0] = s[0] - s[1];
                s.erase(s.begin()+1);
            }
        }   
    }
};

int main() {
    // vector<int> v({1,2,3,4,5,56});
    // // v.erase(v.begin(), v.begin() + 1 );
    // v.erase(v.begin()+2);
    // for(auto i : v) {
    //     cout << i << " ";
    // }
    // cout << endl;
    vector<int> depth({0});
    if(!depth[1]){
        depth.push_back(123);
    }
     
    for(int i = 0; i < depth.size(); i++){
        cout << depth[i] << " ";
    }    
}   