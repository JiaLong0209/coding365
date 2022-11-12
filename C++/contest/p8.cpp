#include <iostream>
#include <vector>
#include <cmath>

using namespace std;
int main(){
	long long n;
	long long t;
	long long sum = 0;

	vector<long long> arr;
	cin >> n;

	for(int i = 0; i < n; i++){
		cin >> t;
		arr.push_back(t);
	}

	for(int i = 0; i < arr.size(); i++){
        int minIndex = i;
		for(int j = i+1;j < arr.size(); j++){
            minIndex = arr[j] <= arr[minIndex] ? j : minIndex;
		}
        if(arr[minIndex] < arr[i]){
            arr[minIndex] ^= arr[i];
            arr[i] ^= arr[minIndex];
            arr[minIndex] ^= arr[i];
            sum += (arr[i]+arr[minIndex])*abs(i-minIndex);
            sum = sum % 1000000007;
        }
	}

	cout << sum << endl;
	return 0;
}

