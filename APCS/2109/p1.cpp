#include <iostream>
#include <string>
using namespace std;
int main(){
    int n, size = 7;
    scanf("%d", &n);
    for(int i = 0; i < n; i++){
        string str = "";
        char err[3] = {' ', ' ', ' '};
        int arr[2][size]; 
        for(int j = 0; j < 2; j++) for(int k = 0; k < size; k++) cin >> arr[j][k];
        for(int j = 0; j < 2; j++) if(arr[j][1] == arr[j][3] || arr[j][1] != arr[j][5]) err[0] = 'A';
        if(arr[0][6] != 1 || arr[1][6] != 0) err[1] = 'B';
        for(int j = 1; j <= 5; j+=2) if(arr[0][j] == arr[1][j]) err[2] = 'C';
        for(int j = 0; j < 3; j++) if(err[j] != ' ') str += err[j]; 
        if(str.size() != 0) cout << str << endl; else cout << "None" << endl;
    }
    return 0;
}

