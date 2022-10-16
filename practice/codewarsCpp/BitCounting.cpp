#include <iostream>
#include <string>

unsigned int countBits3(unsigned long long n){
  int count = 0;
  while (n) {
    n &= (n-1);
    ++count;
  }
  return count;
}


#include <limits>
#include <bitset>
inline constexpr unsigned int countBits2(const unsigned long long n) noexcept {
  std::bitset<std::numeric_limits<unsigned long long>::digits> b(n);
  return b.count();
}

unsigned int countBits1(unsigned long long n){  
  return n < 2 ? n : n % 2 + countBits1(n / 2);
}

unsigned int MyCountBits(unsigned long long n){
  //your code here
  std::cout << n << "\n";
  std::string str = " ";
  int count = 0;
  if(n == 0) return 0;
  while(n > 0){
    str += n % 2;
    n /= 2;
  }
  for(int i : str){
    if(i == 1){
        count += 1;
    }
  }
  std::cout << count << "\n";
  return count;
};
