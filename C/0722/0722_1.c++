#include<stdio.h>
#include<stdlib.h>

#define PI 3.14
#define f(x) x+10


// int main(){
//     int a = 10;
//     float b = 20.0;
//     char c = 'a';
//     char d[] = "df3";

//     printf("Hello %s!",d);
//     printf("%d",f(3));
// }

// int main(){
//     double arr[3][3][3];
//     int a[3] = {0};
//     for(int i = 0; i < 3; i++){
//         a[i] += 10;
//         printf("a[%d] = %d \n",i,a[i]);
//     }
//     printf("%ld",sizeof(arr)/sizeof(double));
// }


// int main(){
//     char s1[5] = "dbcd";
//     for(int i = 0; i < 4; i++){
//         printf("%c",s1[i]);
//     }
// }



// int add(int val1, int val2){
//     return val1 + val2;
// }

// int main(){
//     printf("%d",add(1,55));
// }

// int main(){
//     int var = 0;
//     int* var_p;
//     var_p = &var;
//     printf("%p %p\n",&var,var_p);
// }

// void swap(int* val1,int* val2){
//     int temp = *val1;
//     *val1 = *val2;
//     *val2 = temp;
// }

// int main(){
//     int var1 = 10;
//     int var2 = 20;

//     printf("%d %d %p %p\n",var1,var2,&var1,&var2);
//     swap(&var1,&var2);
//     printf("%d %d %p %p\n",var1,var2,&var1,&var2);
// }



// typedef struct student_info{
//     int number;
//     float score[3];
//     char id;
// }STU_INFO; //set other struct name


// int main(){
//     STU_INFO stu;
//     stu.number = 10;
//     printf("%d",stu.number);
// }


int main(){  //dynamic memory allocation
    int* dy_val = (int*) malloc(sizeof(int));
    int arr = 10;
}