#include <iostream>
#include <cmath>
#include <algorithm>
#include <vector>

using namespace std; 

class Solution {
public:
    
    
    int minMaxGame(vector<int>& nums, int mode = 0) {
        int n = nums.size();
        if(nums.size() == 1) return nums.front();
        if(nums.size() == 2 && mode == 0){
            return nums[0] < nums[1] ? nums[0] : nums[1];
        }else if(nums.size() == 2 && mode == 1){
            return nums[0] > nums[1] ? nums[0] :nums[1];
        }
        vector<int> minV(nums.begin(), nums.begin()+ n/2);
        vector<int> maxV(nums.begin()+ n/2, nums.end());
        int min = minMaxGame(minV,0);
        int max = minMaxGame(maxV,1);
        
        return mode == 0 ?( max <= min ? max : min) :( min >= max ? min : max);
    }
};