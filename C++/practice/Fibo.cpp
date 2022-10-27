#include<iostream>
#include<vector>
#include<time.h>
#include<iomanip>

long long Fibo(int n){
    return n < 2? n : Fibo(n-1)+ Fibo(n-2); 
}
long long Fibo_for(int n){
    if(n < 2) return n;
    long long a = 1;
    long long b = 0;
    long long sum = 0;
    for(int i = 1; i < n; i++){
        sum = a + b;
        b = a;
        a = sum;
    }
    return sum;
}
long long Fibo_DP(int n){
    std::vector<long long> vec({0,1});
    for(int i = 2; i <= n; i++){
        vec.push_back(vec[i-1]+vec[i-2]);
    }
    return vec[n];
}

int main() {
    int n ;
    std::vector<long long> v;
    clock_t start, end;
    double exeTime;
    while(std::cin >> n){    
        start = clock();
        for(int i = 0; i < n; i++){
            v.push_back(Fibo_DP(i));
        }
        end = clock();
        for(int i = 0; i < v.size(); i++){
            if(i % 10 == 0) std::cout << std::endl;
            std::cout << std::setw(5) << v[i] << " ";
        }
        std::cout << "\n" << "Time = " << (double)(end -start)/1e6 << "\n";
        v.clear();
    }
    return 0;
}