#include <stdio.h>
#include <stdlib.h>
#include <iostream>

int main(){
    int* ptr;
    ptr = (int*) malloc(0xfffffffff);

    if(ptr == NULL){
        std::cout << "Fail to allocate memory!";
        exit(1);
    }

    *ptr = 123;
    std::cout << *ptr << std::endl;   


}