#include <stdio.h>
#include <iostream>
#include <vector>

using namespace std;

int n, m, k;
const int BOSS = 100000, BOMB = 1;

void print_arr(vector<vector<int>> &table, string title = "Table"){
    int n = table.size();
    int m = table[0].size();
    cout << "----------------" << title << "---------------"<< endl;
    for(int i = 0; i < n; i++){
        for(int j = 0; j < m; j++){
            printf("%7d ", table[i][j]);
        }
        cout << endl;
    }
    cout << endl;
}

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

    // Update position
    for(auto &info : infos){

        if(table[info[0]][info[1]] == 0 && ! is_die(info)) die(info);

        if(is_die(info)) continue; 

        // leave bombs
        table[info[0]][info[1]] %= BOSS; 

        int next_r = info[0] + info[2];
        int next_c = info[1] + info[3];
        if(valid_position(next_r, next_c)) {
            cout << "Overflow" << endl;
            table[info[0]][info[1]] += BOMB; 
            die(info);
            continue;
        }
        table[info[0]][info[1]] += BOMB; 

        // new position 
        info[0] = next_r;
        info[1] = next_c;
        table[info[0]][info[1]] += BOSS; 

    }

    // Update bomb
    for(auto &info : infos){ 
        if(is_die(info)){
            continue;
        }
        // check bomb
        if(table[info[0]][info[1]] % BOSS ){
            cout << "BOMB!" << endl;
            die(info);
            table[info[0]][info[1]] = 0;
        }
    }
}

void print_all(vector<vector<int>> &table,vector<vector<int>> &infos){
    cout << "Total boss: " << total_boss(table) << endl;
    cout << "Total bomb: " << total_bomb(table) << endl;
    print_arr(table);
    print_arr(infos, "Infos");
}


int main(){
    cin >> n >> m >> k;
    vector<vector<int>> table(n, vector<int>(m, 0));
    vector<vector<int>> infos(k, vector<int>(5, 0));

    for(int i = 0 ; i < k; i++) for(int j = 0; j < 4; j++) cin >> infos[i][j];
    for(auto info : infos) table[info[0]][info[1]] += BOSS;
    

    while(total_boss(table)){
        print_all(table, infos);
        next_round(table, infos);
        cout << "==========================================" << endl;

    }
    cout << endl << "Final Result: " << endl;
    print_all(table, infos);
    cout << total_bomb(table) << endl;
    return 0;
}
