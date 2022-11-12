#include <iostream>

using namespace std;
int main(){
	int n; 
	
	cin >> n;
	long long a=1,e=4,A=4,E=8;
	for(int i = 1; i < n; i++){
		a += A;
		A += 4;
		e += E;
		
	}
	cout << a << " " << e << endl;
	return 0;
	
}
