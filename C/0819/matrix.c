// #include <stdio.h>
// #include <stdlib.h>
// #include <time.h>

// #define MAX 50
// #define MIN 5
// #define MATRIX1_ROW 5
// #define MATRIX1_COL 3
// #define MATRIX2_ROW 3
// #define MATRIX2_COL 5

// void allocate_space_matrix(int** array, int row, int col);
// void initialize_matrix(int** array, int row, int col);
// void assign_val_matrix(int** array, int row, int col);
// void print_matrix(int** array, int row, int col);
// void matmul(int** array1, int row1, int col1,
//             int** array2, int row2, int col2,int** output);


// void allocate_space_matrix(int** array, int row, int col){
//     printf("allocate");
//     // your code
//     for(int i = 0; i<row; i++){
//         array[i] = (int*) malloc(sizeof(int)*col);
//     }
// }
// void initialize_matrix(int** array, int row, int col){
//     printf("init");
//     // your code
//     for(int i = 0; i<row;i++){
//         for(int j = 0; j<col; j++){
//             array[i][j] = 0;
//         }
//     }
// }

// void assign_val_matrix(int** array, int row, int col){
//     printf("assign");

//     for(int i=0; i<row; i++){
//         for(int j=0; j<col;i++){
//             *(*(array+1)+j) = MIN + rand() % (MAX-MIN) + 1;
//         }
//     }
// }

// void print_matrix(int** array, int row, int col){
//     // your code
//     for(int i = 0; i < row; i++){
//         for(int j = 0; j < col; j++){
//             printf("  %4d",*(*(array+i)+j));
//         }
//         printf("\n");
//     }
// }

// void matmul(int** array1, int row1, int col1,
//             int** array2, int row2, int col2,int** output){
//     int sum;
//     for(int i = 0; i < row1; i++ ){
//         for(int j = 0; j < col2; j++){
//             sum = 0;
//             for(int n = 0; n < col1; n++){
//                 sum += array1[i][n] * array2[n][j];
//             }
//             *(*(output+i)+j) = sum;
//         }
//     }
// }

// int main(){
//     int** array1 = (int**) malloc(sizeof(int*)*MATRIX1_ROW);
//     int** array2 = (int**) malloc(sizeof(int*)*MATRIX2_ROW);

//     time_t t;

//     //Intializes random number generator 
//     srand((unsigned) time(&t));


//     //Build array1 and array2
//     printf("\n\nMatrix 1, rows = %d, column = %d : \n", MATRIX1_ROW, MATRIX1_COL);

//     printf("allocate");
//     allocate_space_matrix(array1,MATRIX1_ROW,MATRIX1_COL);
//     assign_val_matrix(array1, MATRIX1_ROW, MATRIX1_COL);
//     print_matrix(array1,MATRIX1_ROW, MATRIX1_COL);

//     printf("\n\n Matrix 2, rows = %d, column = %d : \n", MATRIX2_ROW,MATRIX2_COL);
//     allocate_space_matrix(array2,MATRIX2_ROW,MATRIX2_COL);
//     assign_val_matrix(array2, MATRIX2_ROW, MATRIX2_COL);
//     print_matrix(array2,MATRIX2_ROW, MATRIX2_COL);

//     //Matrix 1 by matrix 2
//     int** output = (int**) malloc(sizeof(int*)*MATRIX1_ROW);
//     printf("\n\n Matrix 1 X Matrix 2 , rows = %d , column = %d : \n", MATRIX1_ROW,MATRIX2_COL);
//     allocate_space_matrix(output,MATRIX1_ROW,MATRIX2_COL);
//     matmul(array1,MATRIX1_ROW,MATRIX2_COL,
//             array2,MATRIX2_ROW,MATRIX2_COL,
//             output);
//     print_matrix(output,MATRIX1_ROW,MATRIX2_COL);
//     printf("\n\n");

//     //Release memory
//     free(array1);
//     free(array2);
//     free(output);
//     return 0;
// }





#include<stdio.h>
#include<stdlib.h>
#include <sys/time.h> // gettimeofday
#include<time.h>
#include<omp.h>  //omp set 

#define MAX 50
#define MIN 5
#define MATRIX1_ROW 2000
#define MATRIX1_COL 1000
#define MATRIX2_ROW 1000
#define MATRIX2_COL 2000

void allocate_space_matrix(int** *array,int row,int col);
void initialize_matrix(int** array,int row,int col);
void assign_val_matrix(int** array,int row,int col);
void print_matrix(int** array,int row,int col);
void matmul(int** array1,int row1,int col1,
            int** array2,int row2,int col2,int** output);

void allocate_space_matrix(int** *array,int row,int col){

    *array = (int**) malloc(sizeof(int*)*row);  // pointer
    for(int i = 0;i < row;i++){
        (*array)[i] =  (int*) malloc(sizeof(int)*col);
    }


}

void initialize_matrix(int** array,int row,int col){
     for(int i =0;i<row;i++){
        for(int j=0;j<col;j++){
            *(*(array+i)+j) = 0; 
        }
    }
}

void assign_val_matrix(int** array,int row,int col){
    for(int i =0;i<row;i++){
        for(int j=0;j<col;j++){
            *(*(array+i)+j) = MIN + rand() % (MAX-MIN) + 1; 
        }
    }
}

void print_matrix(int** array,int row,int col){
    for(int i =0;i<row;i++){
        for(int j=0;j<col;j++){
            printf("  %4d",*(*(array+i)+j));
        }
        printf("\n");
    }
}

void matmul(int** array1,int row1,int col1,
            int** array2,int row2,int col2,int** output){
    struct timeval begin, end;
    omp_set_num_threads(8);
    int i,j,k;
    gettimeofday(&begin,0);
    int temp = 0;
    #pragma omp parallel for private(i,j,k) shared(array1,array2,output)
    for(i = 0;i < row1;i++){
        for(j = 0;j < col2;j++){
            for(k = 0;k < col1;k++){
               temp += *(*(array1+i)+k) * *(*(array2+k)+j);
            }
            *(*(output+i)+j) = temp;
            temp = 0;
        }
    }
    gettimeofday(&end,0);


    long seconds = end.tv_sec - begin.tv_sec;
    long microseconds = end.tv_usec - begin.tv_usec;
    double elapsed = seconds + microseconds*1e-6;

    printf("Execution time : %f \n",elapsed);
    

}

// void fun(double *z, double a, double *x, double *y, int n){
//     struct timeval begin, end;
//     omp_set_num_threads(7);

//     gettimeofday(&begin,0);
//     #pragma omp parallel for
//     for(int i = 0; i < n; i++){
//         z[i] = a*x[i] + y[i];
//     }    

//     gettimeofday(&end, 0);

//     long seconds = end.tv_sec - begin.tv_sec;
//     long microseconds = end.tv_usec - begin.tv_usec;
//     double elapsed = seconds + microseconds*1e-6;

//     printf("%f\n",z[length-1]);
//     printf("Execution time : %f \n",elapsed);
    
// }


int main(){
    // int** array1 = (int**) malloc(sizeof(int*)*MATRIX1_ROW);
    // int** array2 = (int**) malloc(sizeof(int*)*MATRIX2_ROW);
    int** array1;
    int** array2;

    time_t t;

    /* Intializes random number generator */
    srand((unsigned) time(&t));
     
    //Build array1 and array2
    printf("\n\nMatrix 1 , rows = %d , column = %d : \n",MATRIX1_ROW,MATRIX1_COL);
    allocate_space_matrix(&array1,MATRIX1_ROW,MATRIX1_COL);
    assign_val_matrix(array1,MATRIX1_ROW,MATRIX1_COL);
    // print_matrix(array1,MATRIX1_ROW,MATRIX1_COL);

    printf("\n\nMatrix 2 , rows = %d , column = %d : \n",MATRIX2_ROW,MATRIX2_COL);
    allocate_space_matrix(&array2,MATRIX2_ROW,MATRIX2_COL);
    assign_val_matrix(array2,MATRIX2_ROW,MATRIX2_COL);
    // print_matrix(array2,MATRIX2_ROW,MATRIX2_COL);

    //Matrix 1 by matrix 2
    int** output ; // (int**) malloc(sizeof(int*)*MATRIX1_ROW);
    printf("\n\nMatrix 1 X Matrix 2  , rows = %d , column = %d : \n",MATRIX1_ROW,MATRIX2_COL);
    allocate_space_matrix(&output,MATRIX1_ROW,MATRIX2_COL);
    initialize_matrix(output,MATRIX1_ROW,MATRIX2_COL);
    matmul(array1,MATRIX1_ROW,MATRIX1_COL,
           array2,MATRIX2_ROW,MATRIX2_COL,
           output);
    // print_matrix(output,MATRIX1_ROW,MATRIX2_COL);
    printf("\n\n");

    //Release memory
    free(array1);
    free(array2);
    free(output);
    return 0;
}