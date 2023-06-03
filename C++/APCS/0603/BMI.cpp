#include <iostream>
#include <string>

using namespace std;

int main(){
    double height, weight;
    double BMI;

    cout << "Please input your height (m) : ";
    cin >> height;
    cout << "Please input your weight (kg) : ";
    cin >> weight;

    BMI = weight / (height * height);
    cout << "Your BMI : " << BMI << endl;
}