#include <iostream>
#include <vector>
using namespace std;
// input : 0            output: 0 : Won at round 1
//         4
//         2 5 0 2

// input : 2            output: 2 2 : Lost at round 2
//         2
//         2 0

// 5 < 2, 2 < 0, 0 < 5
int judge(int a, int b){
    if(a == b ) return 0;
    switch (a)
    {
    case 0:
        switch (b)
        {
        case 2:
            return 1;
            break;
        case 5:
            return -1;
            break;
        }
        break;
    case 2:
        switch (b)
        {
        case 5:
            return 1;
            break;
        case 0:
            return -1;
            break;
        }
        break;
    case 5:
        switch (b)
        {
        case 0:
            return 1;
            break;
        case 5:
            return -1;
            break;
        }
        break;
    }
    return 0;
}
int main() {
    int f, n;
    vector<int> arr;
    cin >> f >> n;
    for(int i = 0; i < n; i++){
        int a;
        cin >> a;
        arr.push_back(a);
    }
    for(int i = 0; i < n; i++){
        if(judge(f,arr[i]) == 1){
            cout << f << " : " << "Won at round " << i+1 << endl;
            return 0;
        }else if(judge(f, arr[i]) == 0){
            cout << f << " ";
            if(i <= 2 && arr[i-2] == arr[i-1]){
                if(arr[i-1]==0){
                    f = 5;
                }else if(arr[i-1] == 2){
                    f = 0;
                }else{
                    f = 2;
                }
            }else{
                f = arr[i-1];
            }
            continue;
        }else{
            cout << f << " : " << "Lose at round " << i+1 << endl;
            return 0;
        }
    }
    return 0;
}