#include <iostream>

using namespace std;

int main(){
    int n, num, prev = 1000000, count = 0, max_count = 0;
    cin >> n;
    for(int i = 0; i < n; i++){
        cin >> num;
        if(num < prev) count += 1;
        else{
            max_count = count > max_count ? count : max_count;
            count = 1;
        }
        prev = num;
    }
    max_count = count > max_count ? count : max_count;
    cout << max_count; 
    return 0;
}

