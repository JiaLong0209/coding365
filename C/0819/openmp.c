#include <stdio.h>
#include <stdlib.h>
#include <sys/time.h>
#include <omp.h>
#define length 300000000


void fun(double *z, double a, double *x, double *y, int n){
    struct timeval begin, end;
    omp_set_num_threads(7);

    gettimeofday(&begin,0);
    #pragma omp parallel for
    for(int i = 0; i < n; i++){
        z[i] = a*x[i] + y[i];
    }    

    gettimeofday(&end, 0);

    long seconds = end.tv_sec - begin.tv_sec;
    long microseconds = end.tv_usec - begin.tv_usec;
    double elapsed = seconds + microseconds*1e-6;

    printf("%f\n",z[length-1]);
    printf("Execution time : %f \n",elapsed);
    
}

void initialize_vector(double * vector){
    for(int i =0; i<length; i++){
        *(vector+1) = i;

    }
}

int main(){
    double* x = (double*)malloc(sizeof(double)*length);
    double* y = (double*)malloc(sizeof(double)*length);
    double* z = (double*)malloc(sizeof(double)*length);
    
    initialize_vector(x);
    initialize_vector(y);
    initialize_vector(z);
    fun(z,10,x,y,length);
}