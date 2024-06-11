#include <iostream>
#include <vector>
using namespace std;

void mySwap(vector<int>& a, vector<int>& b) {
    vector<int> temp = a;
    a = b;
    b = temp;
}

int main() {
    int n, m, a, b;
    cin >> n >> m;
    vector<vector<int>> dices(n, vector<int>({1,2,6,5,3,4}));
    for(int i = 0; i < m; i++){
        cin >> a >> b;
        if(b == -1){
            int t = dices[a-1][0];
            dices[a-1][0] = dices[a-1][4];
            dices[a-1][4] = dices[a-1][5];
            dices[a-1][5] = t;
        }else if(b == -2){
            int t = dices[a-1][3];
            for(int i = 3; i > 0; i--){
                dices[a-1][i] = dices[a-1][i-1];
            }
            dices[a-1][0] = t;
        }else mySwap(dices[a-1], dices[b-1]);
    }
    for(auto arr : dices) cout << arr[0] << " ";
    return 0;
}

