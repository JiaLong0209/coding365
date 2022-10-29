#include <iostream>
#include <string>
#include <vector>

using namespace std;

string add(string a, string b)
{
    a = string(max(a.size(), b.size()) + 1 - a.size(), '0') + a;
    b = string(a.size() - b.size(), '0') + b;
    for (int i = a.size()-1, carry = 0; i >= 0; i--)
    {
        int sum = a[i] + b[i] - 96 + carry;
        carry   = sum / 10;
        a[i]    = sum % 10 + '0';
    }
    int i = a.find_first_not_of('0');
    return 0 <= i ? a.substr(i) : a.substr(0, 1);
}

std::string My_add(const std::string& a, const std::string& b) {
    std::vector<char> arrA;
    std::vector<char> arrB;
    std::vector<int> res;
    std::string ans;
    for(char i : a){
        arrA.push_back(i);
    }
    for(char i : b){
        arrB.push_back(i);
    }
    int d = arrA.size()-arrB.size();
    if(d > 0){
        for(int i = 0;i < d; i++){
            arrB.insert(arrB.begin(),'0');
        }
    }else{
        for(int i = 0;i < ~d+1; i++){
            arrA.insert(arrA.begin(),'0');
        }
    }
    int next = 0;
    for(int i = arrA.size()-1; i >= 0; i--){
        res.insert(res.begin(), (arrA[i]+arrB[i] -96)%10+next);
        next = ((int)arrA[i]-48 + (int)arrB[i]-48)>9;
        if(i == 0 && next) res.insert(res.begin(), next);
    }
    for(int i : res){
        ans += std::to_string(i);
    }
    return ans;
}

int main(){
    std::cout << add("190","923") << std::endl;
    std::cout << add("273", "1900") << std::endl;
    return 0;
}