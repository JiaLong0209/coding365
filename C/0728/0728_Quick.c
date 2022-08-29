#include<stdio.h>
#include<stdlib.h>
#define SIZE 7
void Interchange(int* arr,int i,int j){
    arr[j] ^= arr[i];
    arr[i] ^= arr[j];
    arr[j] ^= arr[i];
}
int Partition(int* arr,int m,int p){
    int i,j;
    int v = arr[m];
    i = m;
    j = p;
    while(i < j){
        /* your code*/ 
        do{
            i++;
        }while(arr[i] < v);
        while(arr[j] > v){
            j--;
        }
        if(i < j){
            Interchange(arr,i,j);
        }
    }
    /* your code*/
    arr[m] = arr[j];
    arr[j] = v;

    return j;
}
void QuickSort(int* arr,int p,int q){
    if(p < q){
       /* your code*/
       int j = Partition(arr, p, q+1);
        QuickSort(arr, p, j-1);
        QuickSort(arr, j+1, q);
    }
}
int main(){
    int arr[SIZE+1] = {0,7,1,3,4,5,2,6};
    for(int i = 1;i<SIZE+1;i++){
        printf("%d ",arr[i]);
    }
    printf("\n");
    QuickSort(arr,1,SIZE);
    for(int i = 1;i<SIZE+1;i++){
        printf("%d ",arr[i]);
    }
    return 0;
}