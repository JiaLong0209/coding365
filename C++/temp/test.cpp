#include <iostream>

int main(){
    std::cout << "Hello\n\n";
    int a[5] = {4,5,6,7,7};
    for(int i : a){
        std::cout << i << "\n";
    }
    
}