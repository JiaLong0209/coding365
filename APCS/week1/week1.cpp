#include<iostream>
#include<bits/stdc++.h>
// input: 1~9 *3    repeat count, reverse number
// input: 6 6 6     output: 3 6
// input: 7 9 7     output: 2 9 7
// input: 4 1 8     output: 1 8 4 1

using namespace std;

void swap(int* array, int i, int j){
    if(array[j] == array[i]) return ;
    array[i] ^= array[j];
    array[j] ^= array[i];
    array[i] ^= array[j];
}
int main() {    
    int arr[3];
    for(int i = 0; i < 3; i++){
        cin >> arr[i];
    }


    int max = 0;
    for(int i = 0; i < 3; i++){     // counter
        int count = 0;
        for(int j = 0; j < 3; j++){
            arr[i] == arr[j]? count++: count+= 0;
        }
        max = count > max ? count : max;
    }
    cout << max << " ";


    for(int i = 0; i < 3; i++){     // bubbleSort
        for(int j = 0; j < 3-i-1; j++){
            arr[j] > arr[j+1] ? swap(arr,j,j+1): swap(arr,j,j);
        }
    }
    // sort(arr,arr+3);
    for(int i = 2; i >= 0; i--){
        cout << arr[i] << " ";
    }

    return 0;
}


