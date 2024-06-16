#include <iostream>
#include <vector>

using namespace std;

int main(){
    int h, w, n;
    cin >> h >> w >> n;
    vector<vector<int>> arr(h, vector<int>(w, 0));

    for(int i = 0; i < n; i++){
        int r, c , t, num;
        cin >> r>> c >> t >> num;
        for(int j = 0; j < h; j++){
            for(int k = 0; k < w; k++){
                if(abs(j-r) + abs(k-c) < t+1) arr[j][k] += num;
            }
        }
    }
    
    for(auto row : arr){
        for(auto values : row){
            cout << values << " ";
        }
        cout << endl;
    }

    
}
