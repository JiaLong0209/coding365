
#include <stdio.h>
#include <stdlib.h>

void InsertionSort(int *arr, int n)
{
    int j, item, count;
    for (j = 2; j <= n; j++)
    {
        item = arr[j];
        int i = j - 1;
        while (i >= 1 && item < arr[i])
        {
            arr[i + 1] = arr[i];
            i -= 1;
        }
        arr[i + 1] = item;
        // for(int i =1;i<=8;i++){
        //     printf("%d ",arr[i]);
        // }
        printf("\n");
    }
}
int add(int a, int b){
    return a+b;
}

int main(){
    // int a = 10;
    // int b = 20;
    printf("%d ",add(10,20));
}

void BubbleSort(int *arr, int n)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (arr[j + 1] == 0)
            {
                continue;
            }
            if (arr[j] > arr[j + 1])
            {
                int t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
            // for (int i = 0; i < n; i++)
            // {
            //     printf("%d ", arr[i]);
            // }
            // printf("\n");
        }
    }
}

// int main(){
//  int arr[] = {0,3,4,1,5,2,8,6,7};
//     InsertionSort(arr,8);
//     for(int i =1;i<=8;i++){
//         printf("%d ",arr[i]);
//     }
// }

// int main(){
//     int arr[] = {5,4,3,2,1};
//     BubbleSort(arr,5);

// }

#define SIZE 7
void Interchange(int *arr, int i, int j)
{
    arr[j] ^= arr[i];
    arr[i] ^= arr[j];
    arr[j] ^= arr[i];
}
int Partition(int *arr, int low, int high)
{
    int i, j;
    int std = arr[low];
    i = low;
    j = high;
    while (i < j)
    {
        do
        {
            i++;
        } while (arr[i] < std);
        do
        {
            j--;
        } while (arr[j] > std);

        if (i < j)
        {
            Interchange(arr, i, j);
        }
    }
    arr[low] = arr[j];
    arr[j] = std;
    // for(int i=0;i<7;i++){
    //     printf("%d ",arr[i]);
    // }
    printf("\n");
    return j;
}
void QuickSort(int *arr, int low, int high)
{
    if (low < high)
    {
        int j;
        j = Partition(arr, low, high + 1);
        QuickSort(arr, low, j - 1);
        QuickSort(arr, j + 1, high);
    }
}

// int main(){
//     int arr[SIZE+1] = {0,7,1,3,4,5,2,6};
//     for(int i = 1;i<SIZE+1;i++){
//         printf("%d ",arr[i]);
//     }
//     printf("\n");
//     QuickSort(arr,1,SIZE);
//     for(int i = 1;i<SIZE+1;i++){
//         printf("%d ",arr[i]);
//     }
//     return 0;
// }

int arr[SIZE+1] = {0,5,1,3,7,4,6,2};
int temp_arr[SIZE+1] = {0};
void Merge(int low,int mid,int high){
    int h = low;
    int i = low;
    int j = mid+1;
    while(h<=mid && j<=high){
        if(arr[h]<=arr[j]){
            temp_arr[i] = arr[h];
            h++;
        }
        else{
            temp_arr[i] = arr[j];
            j++;
        }
        i++;
    }
    if (h > mid)
    {
        for(int k = j;k<=high;k++){
            temp_arr[i] = arr[k];
            i++;
        }
    }
    else{
        for(int k = h;k <= mid;k++){
            temp_arr[i] = arr[k];
            i++;
        }
    }
    for(int k = low;k<=high;k++){
        arr[k] = temp_arr[k];
    }

}

void MergeSort(int low,int high){
    if(low < high){
        int mid;
        mid = (low + high) /2;
        MergeSort(low,mid);
        MergeSort(mid+1,high);
        Merge(low,mid,high);
    }
}
// int main(){
//     printf("The list is: \n");
//     for(int i = 1; i<SIZE+1;i++){
//         printf("%d  ",arr[i]);
//     }
//     MergeSort(1,SIZE);
//     printf("\nThe list after MergeSort: \n");
//     for(int i =1;i<SIZE+1;i++){
//         printf("%d  ",arr[i]);
//     }
// }

// int main()
// {
//     int n = 10;
//     int arr[n] = {10, 8, 9, 6, 7, 5, 4, 1, 2, 3};
//     InsertionSort(arr, n);
//     BubbleSort(arr, n);
// }