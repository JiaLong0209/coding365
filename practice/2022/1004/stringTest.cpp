#include<iostream>
#include<cstring>

int main(){
    std::string str = "test";
    std::string str2 = "123";
    std::cout << str+str2 << '\n';
    std::string a = NULL;
    // for(char i : str){
    //     std::cout << i << " ";
    // }
    for(char i : str){
        a += i;
    }
    std::cout << a;

}