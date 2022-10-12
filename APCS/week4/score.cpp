#include <iostream>
#include <algorithm>
#include <ctime>
using namespace std;
// 1,   13 , worst case 13
// 2,   70  69, best case 69
// 3,   10 55 80,  55 80
void printArr(int* a, int n);
int main(){
    int a[20];
    int n;
    int low, high;
    auto start = clock();
    // while(scanf("%d",&n) != EOF){
        scanf("%d",&n);
        for(int i = 0; i < n; i++){
            scanf("%d",&a[i]);
        }
        sort(a, a+n);
        printArr(a, n);
        low = high = -1;
        for(int i = 0; i < n; i++){
            low = (a[i] > low && a[i] < 60)? a[i] : low;
            high = (a[i] >= 60 && high < 60) || (high > 60 && a[i] < high && a[i] >= 60) ? a[i] : high;
        }
        cout << low << " " << high << endl;
        if(low < 60 && high >= 60) cout << low << endl << high << endl;
        if(low >= 60) cout << "best case \n" << high << endl;
        if(high < 60) cout << "worst case \n" << low << endl;

    // }

    auto end = clock();    
    cout << (double)(end - start)/CLOCKS_PER_SEC << endl;
    return 0;
}


void printArr(int* a,int n){
    for(int i = 0; i < n; i++){
        cout << a[i] << " ";
    }
    cout << endl;

}