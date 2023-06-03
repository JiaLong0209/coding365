#include<stdio.h>
#include<string>
#include<iostream>
#include<vector>
#include<sstream>


using namespace std;

int main() {
    stringstream ss;
    char name[100] = "Hello World";
    cout << "Student name : ";
    scanf("%[^\n]", name);
    double subjects = 5;
    double sum = 0;
    double average = 0;
    vector<int> scores(subjects, 0);

    for(int i = 0; i < subjects; i++){
         cout << "Score of class " << i+1 << " : ";
         cin >> scores[i];       
         sum += scores[i];
    }
    cout << endl;
    average = (sum / subjects);

    cout << "Sum = " << sum << endl;
    // cout << "Average = " << average << endl;
    printf("Average = %.2lf \n", average);
    // string temp;
    // ss << average;
    // ss >> temp;
    // cout << "Average = " << temp << endl;
    
    
    
}