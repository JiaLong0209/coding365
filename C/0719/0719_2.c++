#include<stdio.h>
#include<stdlib.h>
// int main(){
//     int a;
//     scanf("%d",&a);
//     if(a%2==0){
//         printf("even \n");
//     }else{
//         printf("odd \n");
//     }
// }

// int main(){
    // int a,b,c,n=1;
    // scanf("%d %d %d",&a,&b,&c);
    // if(a == b || b == c || a == c){
    //     if(a == b && b == c){
    //         printf("the three values are the same \n");
    //         return 0;
    //     }

    //     printf("the two values are the same \n");
    // }else{
    //     printf("the three values are not the same \n");
    // }


    // method2
    // int n = 0, len = 3, a[len];
    // scanf("%d %d %d",&a[0],&a[1],&a[2]);
    // for(int i = 0; i < len; i++){
    //     if(a[i] == a[i+1]){
    //         n++;
    //     }
    // }
    // if(n == 0){
    //     printf("the %d vaules are not the same",len);
    // }else{
    //     printf("the %d vaules are the same",++n);
    // }
// }

// int main(){
//     int a;
//     while( scanf("%d",&a)){
//     switch(a%2){
//         case 1:
//             printf("odd \n");
//         break;
//         default:
//             printf("even \n");
//     }

//     }
// }

// int main(){
//     int a;
//     while(scanf("%d",&a)){
//         while(a--){
//             printf("%d \n",a);
//         }
//     }
// }

// int main(){
//     int target = 17;
//     int a;
//     scanf("%d",&a);
//     while(a != target){
//         if(a < target){
//             printf("To small");
//         }else if(a > target){
//         scanf("%d",&a);
//     }
// }

// int main(){
//     int target = 15;
//     int a;
//     do{
//         scanf("%d",&a);
//         if(a > target){
//             printf("to large \n");
//         }else if(a < target){

//             printf("to small \n");
//         }else{
//             printf("Congratulations \n");
//         }
//     }while( a != target);
// }

// int main(){
//     int a;
//     for(int i = 1; i < 100; i+=2){
//         printf("%d \n",i);
//     }

// }

// int main(){
//     int a;
//     scanf("%d",&a);
//     for(int i = 1; i <= a; i++){
//         if(a%i == 0){
//             printf("%d \n",i);
//         }
//     }
// }

// int main(){
//     int n;
//     scanf("%d",&n);
//     for(int i = 0; i < n; i++){
//         for(int j = 0; j < n; j++){
//             if(i == 0 || i == n-1){
//                 printf("*");
//             }else{
//                 if(j == 0 || j == n-1){
//                     printf("*");
//                 }else{
//                     printf(" ");
//                 }
//             }
//         }
//         printf("\n");
//     }  
// }

int main(){
    int n;
    scanf("%d",&n);
    for(int i = 1; i <= n; i++){
        for(int j = n-i+1; j <= n; j++){
            if(i == 1 || i == n){
            printf("*");
            }else{
                if(j == n-i+1 || j == n){
                    printf("*");
                }else{
                    printf(" ");
                }
            }
        }
        printf("\n");
    }
}

// int main(){
//     int a[6] = {12,23,34,45,56,567};
//     int num;
//     int sum;
//     do{
//         printf("enter the number: ");
//         scanf("%d",&num);
//         sum += a[num-1];
//     }while(num != 0);
//     printf("Total: %d",sum);
// }
