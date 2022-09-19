#include <iostream>


void InterChange(int* arr,int a,int b){
    printf("0. arr[a] = %d, arr[b] = %d\n",arr[a],arr[b]);
    arr[b] ^= arr[a];
    printf("1. arr[a] = %d, arr[b] = %d\n",arr[a],arr[b]);
    arr[a] ^= arr[b];
    printf("2. arr[a] = %d, arr[b] = %d\n",arr[a],arr[b]);
    arr[b] ^= arr[a];
    printf("3. arr[a] = %d, arr[b] = %d\n",arr[a],arr[b]);
}

int main(){   
    // 1 = 0001 , 2 = 0010, 3 = 0011, 4 = 0100
    // 5 = 0101 , 6 = 0110, 7 = 0111, 8 = 1000
    int n = 5;
    int arr[n];
    for(int i = 0; i < n; i++){
        arr[i] = i+1 ;
    }

    for(int i = 0; i < n; i++){
        printf("%d ",arr[i]);
    }
    printf("\n");
    InterChange(arr, 0, 4);

    for(int i : arr){
        printf("%d ",i);
    }
}