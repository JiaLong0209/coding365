#include <iostream>
#include <vector>
#include <cstring>
#include <cmath>
#include <map>
#include <algorithm>
using namespace std;
class S {
	public:
		int shape;
		double x;
		double y;
		S(){
		}
		S(int shape, double x, double y){
			this->shape = shape;
			this->x = x;
			this->y = y;
		}
		double getDis(double x, double y){
			return sqrt((this->x-x)*(this->x-x)+(this->y-y)*(this->y-y));
		};
};

class Pair{
    public:
        double d;
        S s;
        Pair(){
        }
        Pair(double d, S s){
            this->d = d;
            this->s = s;
        }
};

int main(){
	int n,m,k,l;
	cin >> n >> m >> k >> l;
	int shape;
	double x,y;
	vector<Pair> dis;
	vector<S> AS;

	for(int i = 0; i < k; i++){
		cin >> shape >> x >> y;
		S* s = new S(shape,x,y);
		AS.push_back(*s);
	}

	for(int i = 0; i < l; i++){
		cin >> shape >> x >> y;
		dis.clear();
		S* newS = new S(shape,x,y);
		int isSur = 0;
		vector<double> disOnly;
		for(auto& s : AS){
            Pair *p = new Pair(s.getDis(newS->x,newS->y),s);
            dis.push_back(*p);
            disOnly.push_back(s.getDis(newS->x,newS->y));

		}
		vector<double> near;
		vector<S> nearS;
		sort(disOnly.begin(),disOnly.end());
        for(int k = 0; i < n; k++){
            near.push_back(disOnly[k]);
            for(auto& j : dis){
                if(j.d == near[k]){
                    nearS.push_back(j.s);
                }
            }
        }
        vector<int> groups(m,0);

        for(int k = 0; k < nearS.size(); k++){
            groups[nearS[k].shape] += 1;

        }
        groups[i] += 1;
        int max = 0;
        for(auto& b : groups){
            max = b>max ? b : max;
        }
        if(groups[i] == max){
            cout << 1 << endl;
        }else{
            cout << 0 << endl;
        }
		// sort(dis.begin(),dis.end());
        AS.push_back(*newS);

	}

	//for(auto& i : dis){
	//	cout << i.s.x << endl;
	//}
	return 0;

}

