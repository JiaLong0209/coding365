#include <stdio.h>
#include <stdlib.h>
int main() {
    int *x;
    x = (int*)malloc(7 *sizeof(int));
    *(x+0) = 5;
    *(x+1) = 1;
    *(x+2) = 4;
    *(x+3) = 8;
    *(x+4) = 7;
    *(x+5) = 3;
    *(x+6) = 2;

    printf("The element x[2] = %d \n",x[2]);
    free(x);
    
    return 0;
}