#include <iostream>
#include <vector>
#include <cstring>
#include <bits/stdc++.h>
using namespace std;
int main(){
	int n;
	int c;
	vector<int> v;
	cin >> c;
	int m;
	
	while(cin >> n && itos(n) != "\n"){
		v.push_back(n);
		
	}
	for(auto& i; i!= v.end();i++ ){
		cout << i << " " << endl;
	}
//	
//	for(int i = 0; i < c; i++){
//          cin >> m;
//          cin >> n;
//          int max = n;
//          v.push_back(n);
//          for(int j = 1; j < m; j++){
//            cin >> n;
//            max = n>=max? n : max;
//            v.push_back(n);
//
//          }
//          if(max == v[0]){
//            cout << 0 << endl;
//          }else{
//            cout << max << endl;
//          }
//        v.clear();
//	}

	return 0;

}

