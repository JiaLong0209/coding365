#include <iostream>
#include<omp.h>
#include<sys/time.h>
// #include<time.h>
// Dynamic Programming


void exec_time(int (funPtr)(int a),int a){
    // omp_set_num_threads(8);
    // #pragma omp parallel for 


    struct timeval begin, end;
    gettimeofday(&begin, 0);
    
    std::cout << (funPtr)(a) << "\n";

    gettimeofday(&end, 0);
    long s = end.tv_sec - begin.tv_sec;
    long ms = end.tv_usec - begin.tv_usec;
    double elapsed = s + ms*1e-6;

    printf("total execution time : %fs\n\n", elapsed ); // time_spent);

}


int recursionFibo(int a){
    if( a <= 2) return 1;
    return recursionFibo(a-1) + recursionFibo(a - 2);
}


int DP_Fibo(int a){
    int F[a];
    F[0] = 1;
    F[1] = 1;
    for(int i = 2; i < a; i++){
        F[i] = F[i-1] + F[i-2];
    }
    return F[a-1];
}

int for_Fibo(int a){
    int sum = 0;
    int temp = 1;
    int b = 1;
    for(int i = 2; i < a; i++){
        sum = temp + b;
        temp = b;
        b = sum;
    }

    return sum;
}

// 1 1 2 3 5 8 13 21
int main(){
    int a = 41;
    // std::cout << recursionFibo(a) << "\n"; 
    std::cout << " Dynamic Programming :\n";
    exec_time(DP_Fibo,a);

    std::cout << "\n Recursion :\n";
    exec_time(recursionFibo,a);

    std::cout << "\n For loop :\n";
    exec_time(for_Fibo,a);

}