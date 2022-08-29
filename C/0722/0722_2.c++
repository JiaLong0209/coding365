#include <stdio.h>
#include <stdlib.h>
#include <time.h>
/*
Function Definitions 
return-type  function-name(parameter-list){
    declarations
    ....
    ....
    statements
}

void function(void);

int function(void);

void function(a);

int function(a);

struct function(a);
*/

// int main(){
//     int i;

//     // srand(10);
//     srand((unsigned) time (NULL));

//     for(i = 0; i < 5; i++){
//         printf("%d\n",rand());
//     }
// }

// int f(int x){
//     return x*2-1;
//     return x+3;
//     return x*7/4;
//     if(x == 4){
//         return 7;
//     }
// }

// int max(int a, int b, int c){
//     int max;
//     if(a > b){
//         max = a;
//     }else if(b > c){
//         max = b;
//     }else if(c > a){
//         max = c;
//     }
//     return max;
// }

// int max(int a[]){
//     int size;
//     int max;
//     size = sizeof(a)/sizeof(int);
//     printf("size is :%d \n",size);
//     for(int i = 0; i < size; i++){
//         if(a[i] > a[i+1]){
//             max = a[i];
//         }
//     }
//     return max;
// }

// int main(){
//     int a[3];
//     for(int i = 0; i < 3; i++){
//         scanf("%d",&a[i]);
//     }
//     printf("%d",max(a));
// }

// void f(int x){
//     if(x == 0){
//         return;
//     }
//     f(x-1);
//     for(int i = 1; i <= x; i++){
//         printf("*");
//     }
//     printf("\n");
// }

// int main(){
//     int n = 5;
//     // for(int i = 1; i <= n; i++){
//     //     for(int j = n-i; j < n; j++){
//     //         printf("*");
//     //     }
//     //     printf("\n");
//     // }
//     f(n);
// }


// int i = 1;
// int main(){
//     printf("%d \n",i);
//     int i=2;
//     printf("%d \n",i);
//     {
//         printf("%d \n",i);
//         int i=3;
//         printf("%d \n",i);
//     }
//         printf("%d \n",i);
//     return 0;
// }

// int i=5;
// int f(){
//     i++;
//     printf("%d \n",i);
//     return 0;
// }

// int main(){
//     printf("%d \n",i);
//     int i = 6;
//     i++;
//     f();
//     printf("%d \n",i);
//     return 0;
// }

// int main(){
//     int i =3;
//     printf("%d \n",i);

//     if(i==3){
//         i++;
//         int i=6;
//         printf("%d",i);
//         i++;
//     }
//     if(i==3){
//         printf("%d \n",i);
//     }
//     return 0;
// }

// int f(int i){
//     if(i == 2){
//         return i;
//     }
//     return f(i+1);
// }
// int main(){
//     printf("%d",f(0));
// }

// int factorial(int n){
//     if(n == 0 or n == 1){
//         return 1;
//     }
//     return n*factorial(n -1);
// }
// int main(){
//     printf("%d",factorial(4));
// }

// int stepAnalysis(int n){
//     if(n <=2){
//         return n;
//     }
//     return stepAnalysis(n-1)+stepAnalysis(n-2);
// }
// int main(){
//     for(int i = 0; i < 10; i++){
//     printf("%d \n",stepAnalysis(i));
//     }
// }


int moved=0;
// void hanoiTower(int n, char A, char B, char C){ // A = from_rod, B = to_rod, C = auxiliary_rod
//     if(n == 1){
//         printf("Move disc from %c to %c \n",A,C);
//         moved++;
//     }
//     else{
//         hanoiTower(n-1, A, C, B);
//         hanoiTower(1, A, B, C);
//         hanoiTower(n-1, B, A, C);
//     }
// }

void hanoiTower(int n,char A,char B,char C){
    if(n == 1){
        printf("Move disc from %c to %c. \n",A,C);
        moved++;
    }else{
        hanoiTower(n-1,A,C,B);
        hanoiTower(1,A,B,C);
        hanoiTower(n-1,B,A,C);
    }
}


int main(){
    int n;
    printf("Please key-in number of sheet :");
    scanf("%d",&n);
    hanoiTower(n, 'A', 'B', 'C');
    printf("\nTotal moved %d steps\n\n",moved);
    return 0;
}



// Division algorithm

// int GCD_loop(int a, int b){
//     if(a < b){
//         int t = a;
//         a = b;
//         b = t;
//     }
//     if(a % b == 0) return b;
//     while(b > 1){
//         if(a % b == 0) return b;
//         int t = a;
//         a = b;
//         b = t%b;

//     }
//     return b;
// }
// int GCD_recursion(int a, int b){
//     if(a < b){
//         int t = a;
//         a = b;
//         b = t;
//     }
//     if(a % b == 0){
//         return b;
//     }
//     return GCD_recursion(b,a%b);
// }
// int main(){
//     printf("%d \n",GCD_recursion(69,60));
//     printf("%d \n",GCD_loop(69,60));
// }



