#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool cmp(int a , int b){
    return a < b;
}

void print(vector<int> arr){
    for( auto i : arr){
        cout << i << " ";
    }
    cout << endl;
}

int main(){
    vector<int> nums = {5,2,8,1,3,10,30,32,51,12,5,23,2,53,5};
    sort(nums.begin(),  nums.end(), cmp);

    cout << "Original Array : " << endl;
    print(nums);

    reverse(nums.begin(), nums.end());
    cout << "Reversed Array : " << endl;
    print(nums);
    reverse(nums.begin(), nums.end());
    int target = 10;

    // lower_bound requires the non-decreasing order.
    vector<int>::iterator it = lower_bound(nums.begin(), nums.end(), target);   
    if(it != nums.end() ){
        cout << "it = " << *it << " position = " << distance(nums.begin(), it) << endl;
    }
    else{
        cout << "it = " << *it << " position = " << distance(nums.begin(), it) << endl;
        cout << "target value not found." << endl;
    }

    
    return 0;
}