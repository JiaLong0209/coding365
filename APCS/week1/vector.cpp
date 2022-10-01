#include<iostream>
#include<algorithm>
#include <vector>
#include <set>
// input: 1~9 *3    repeat count, reverse number
// input: 6 6 6     output: 3 6
// input: 7 9 7     output: 2 9 7
// input: 4 1 8     output: 1 8 4 1
using namespace std;

int main() {
    vector<int> arr;
    set<int> set;
    int a;
    while(cin >> a && a != 0){
        arr.push_back(a);
    }
    int maxCount = 0;
    for(int i = 0; i < arr.size(); i++){
        
        int count = 0;
        vector<int> deteleIndex;
        for(int j = 0; j < arr.size(); j++){
            if(arr[j] == arr[i]){
                count += 1;
            }
            if(arr[i] == arr[j] && count > 1){
                deteleIndex.push_back(j);
            }
        }
        for(int i = 0; i < deteleIndex.size(); i++){
            arr.erase(arr.begin()+deteleIndex[i]-i);
        }
        maxCount = count > maxCount ? count : maxCount;
        if(!arr[i+1]) break;
    }
    cout << maxCount << " ";

    // for(int i : arr){
    //     set.insert(i);
    // }
    // arr.clear();
    // for(int i : set){
    //     arr.push_back(i);
    // }

    std::sort(arr.begin(),arr.begin()+arr.size(), [](int a, int b){return a > b;});
    for(int i : arr){
        cout << i << " ";
    }
}