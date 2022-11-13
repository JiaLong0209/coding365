#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>
#include <limits>
using namespace std;
class Solution {
public:
    int minPathSum(vector<vector<int>> grid) {
        int ySize = grid.size()-1;
        int xSize = grid[0].size()-1;
        vector<vector<int>> cache(ySize+1,vector<int>(xSize+1,-1));
        for(int i = 0; i <= ySize; i++){
            for(int j = 0; j <= xSize; j++){
                if(i == 0 && j == 0){
                    cache[0][0] = grid[0][0];
                    continue;
                }
                int upMin = 2e9 ,leftMin = 2e9;
                if(i-1 >= 0) upMin = cache[i-1][j];
                if(j-1 >= 0) leftMin = cache[i][j-1];
                cache[i][j] = min(upMin,leftMin) + grid[i][j];
            }
        }
        return cache[ySize][xSize];
    }
    
};