#include <stdio.h>
#include <stdlib.h>

// int main(){
//     int var1 = 0;

//     int* dynamic_var1_ptr = (int*) malloc(sizeof(int));
//     *dynamic_var1_ptr = 10;
//     printf("%d\n", *dynamic_var1_ptr);
//     free(dynamic_var1_ptr);
//     printf("%d\n", *dynamic_var1_ptr);

//     int a = 4;
//     int b = 0x5500;
//     printf("%d",b >> 8);

//     return 0;
// }

// int main(){
//     int var1 = 0;

//     int* dynamic_var1_ptr = (int*) calloc(length, sizeof(int));

//     for(int i = 0; i<length + 5; i++){
//         *(dynamic_var1_ptr + i) = i + 1;
//         printf("value : %d      address : %p \n",*(dynamic_var1_ptr + i), dynamic_var1_ptr + i);

//     }
//     free(dynamic_var1_ptr);
//     return 0;
    
// }



//-------------------------------2:00---------------------------------




// #define length 5
// #define new_length 1

// int main(){
//     int var1 = 0;
//     int* dynamic_var1_ptr = (int*) calloc(length,sizeof(int));

//     int* dynamic_var2_ptr = realloc(dynamic_var1_ptr, sizeof(int)*new_length);

//     for(int i = 0; i < 10; i++){
//         *(dynamic_var2_ptr + i ) = i + 1;
//         printf("value : %d      address : %p \n",*(dynamic_var2_ptr + i),dynamic_var2_ptr + i);
//     }

//     printf("dynamic_var1_ptr's address : %p \n",dynamic_var1_ptr);
//     printf("dynamic_var2_ptr's address : %p \n",dynamic_var2_ptr);  //same address
//     free(dynamic_var2_ptr);
//     return 0;
// }


#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define ROWS 5
#define COLS 5
#define MAX 50
#define MIN 5

void allocate_space_matrix(int** array, int row, int col){
    for(int i = 0; i < row; i++){
        // array[i] = (int*) malloc(sizeof(int)*col);
        *(array+i) = (int*) calloc(col,sizeof(int)*col);
    }
}

void initialize_matrix(int** array, int row, int col){
    for(int i = 0; i < row; i++){
        for(int j = 0; j < col; j++){
            *(*(array+i)+j) = MIN + rand() % (MAX-MIN) + 1; //assign the value 5~45
        }
    }
}
void print_matrix(int ** array, int row, int col){
    for(int i = 0; i < row; i++){
        for(int j = 0; j < col; j++){
            printf(" %4d",*(*(array+i)+j));  //array[i][j]
        }
        printf("\n");

    }
}

int main(){
    int** array = (int**) malloc(sizeof(int*)*ROWS);
    time_t t;
    //Intializes random number generator 
    srand((unsigned) time(&t));

    allocate_space_matrix(array,ROWS,COLS);
    initialize_matrix(array,ROWS,COLS);
    print_matrix(array,ROWS,COLS);

    // printf("%d \n", *(*(array+1)+2));

    return 0;
}