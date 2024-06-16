#include <bits/stdc++.h>
int main(){
    int h, w, n,r, c , t, num;
    std::cin >> h >> w >> n;
    std::vector<std::vector<int>> arr(h, std::vector<int>(w, 0));
    for(int i = 0; i < n; i++) while( std::cin >> r >> c >> t >> num) for(int j = 0; j < h; j++) for(int k = 0; k < w; k++) if(abs(j-r) + abs(k-c) <= t) arr[j][k] += num;
    for(auto row : arr){
        for(auto value : row) std:: cout << value << " ";
        std::cout << std::endl; 
    }
}
