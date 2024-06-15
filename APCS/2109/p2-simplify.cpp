#include <stdio.h>
#include <iostream>
#include <vector>

using namespace std;

int n, m, k;
const int BOSS = 100000, BOMB = 1;

int total_boss(vector<vector<int>> &table){
    int sum = 0;
    for(auto row : table) for(auto value : row) sum += (value / BOSS);
    return sum;
}

int total_bomb(vector<vector<int>> &table){
    int sum = 0;
    for(auto row : table) for(auto value : row) sum += value % BOSS ? 1 : 0;
    return sum;
}

void die(vector<int> &info){
    info[4] = 1;
}

bool is_die(vector<int> &info){
    return info[4] == 1 ? true : false;
}

bool valid_position(int x, int y){
    return (x >= n || x < 0 || y >= m || y < 0) ? true : false;
}

void next_round(vector<vector<int>> &table,vector<vector<int>> &infos){
    for(auto &info : infos){
        if(table[info[0]][info[1]] == 0 && ! is_die(info)) die(info);
        if(is_die(info)) continue; 
        table[info[0]][info[1]] %= BOSS; 

        int next_r = info[0] + info[2];
        int next_c = info[1] + info[3];
        if(valid_position(next_r, next_c)) {
            table[info[0]][info[1]] += BOMB; 
            die(info);
            continue;
        }
        table[info[0]][info[1]] += BOMB; 

        info[0] = next_r;
        info[1] = next_c;
        table[info[0]][info[1]] += BOSS; 

    }

    for(auto &info : infos){ 
        if(is_die(info)) continue;
        if(table[info[0]][info[1]] % BOSS ){
            die(info);
            table[info[0]][info[1]] = 0;
        }
    }
}


int main(){
    cin >> n >> m >> k;
    vector<vector<int>> table(n, vector<int>(m, 0));
    vector<vector<int>> infos(k, vector<int>(5, 0));

    for(int i = 0 ; i < k; i++) for(int j = 0; j < 4; j++) cin >> infos[i][j];
    for(auto info : infos) table[info[0]][info[1]] += BOSS;
    while(total_boss(table)) next_round(table, infos);

    cout << total_bomb(table) << endl;
    return 0;
}
