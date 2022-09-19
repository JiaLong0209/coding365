#include <iostream>
#include <sys/time.h>

using namespace std;
int n = 30;

void exec(int* (funPtr)(int* arr),int* arr){
    struct timeval begin, end;
    gettimeofday(&begin, 0);
    (funPtr)(arr);

    gettimeofday(&end, 0);
    long s = end.tv_sec - begin.tv_sec;
    long ms = end.tv_usec - begin.tv_usec;
    double diff = s + ms / 1000000.0;
    cout << "time : " << diff << endl;
}
void copyArr(int* arr, int* arr2){
    for(int i = 0; i < n; i++){
        arr2[i] = arr[i];
    }
}
void printArr(int arr[], int n){
    for(int i = 0; i < n; i++){
        cout << arr[i] << " ";
    }
    cout << endl << endl;
}

void swap(int arr[], int a, int b){
    arr[a] ^= arr[b];
    arr[b] ^= arr[a];
    arr[a] ^= arr[b];

}

int* mySort(int* arr){
    for(int i = 0; i < n; i++){
        for(int j = 0; j < n ; j++){
            if(arr[j] > arr[i]){
                swap(arr,i,j);
            }
            // printArr(arr, n);
        }
    }
    return arr;
}

int* bubbleSort(int * arr){
    for(int i = 0; i < n-1; i++){
        for(int j = 0; j < n-i-1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1);
            }
            // printArr(arr,n);
        }
    }
    return arr;
}

int main(){

    // srand((unsigned) time(NULL));
    int arr[n],arr2[n],arr3[n],arr4[n];
    for(int i = 0; i < n; i++){
        arr[i] = rand() % 100;
    }
    copyArr(arr,arr2);
    copyArr(arr,arr3);

    cout << "before \n";
    printArr(arr, n);

    cout << "mySort" << endl;
    exec(mySort,arr);
    printArr(arr, n);

    cout << "bubbleSort" << endl;
    exec(bubbleSort,arr2);
    printArr(arr2, n);


}
