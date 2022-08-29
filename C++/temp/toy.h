// #include <iostream>
// #include <gtest/gtest.h>


#ifndef _TOY_H_
#define _TOY_H_
#include "dog.h"



class Toy{
    private:
    
        std::string _name;

    public:

        Toy(){  //default constructor, maybe some functions need to use this function. ex:addNewToy();
            _name = "";
        }

        Toy(std::string name){
            // if(_name != ""){
            //     delete [] _name;
            // }
            _name = name;
        }

        std::string getName() const {   // Test 01
            return _name;
        }
};

// class Dog{
//     private:
//         std::string _name;
//         double _weight;
//         int _toyAmount;
//         Toy *_toyCollection;

//     public:

//         void init(std::string name, double weight){
//             _name = name;
//             if(weight <= 10){
//                 _weight = 10;
//             }else if(weight >= 50){
//                 _weight = 50;
//             }else{
//                 _weight = weight;
//             }
//             _toyAmount = 0;
//             // _toyCollection = new Toy[_toyAmount];
//         }

//         Dog(){
//             _weight = -1.0;
//             _name = "";
//         }

//         // constructor  Test02
//         Dog(std::string name, double weight){
//             init(name,weight);
//         }

//         std::string getName() const{
//             return _name;
//         }

//         double getWeight() const{
//             return _weight;
//         } 

//         void setName(std::string name) {
//             _name = name;
//         }

//         // copy constructor Test03
//         Dog(Dog const &other){
//             init(other._name,other._weight);
//         }

//         // copy assignment Test04
//         Dog &operator=(Dog const &other ){
//             init(other._name, other._weight);
//             return *this;
//         }

//         // add Toy in toy collections Test05
//         void addNewToy(Toy const &toy){
//             Toy *temp= new Toy[_toyAmount];  // **point**, need the default constructor of Toy
//             for(int i = 0; i < _toyAmount; i++){
//                 temp[i] = _toyCollection[i];
//             }
//             delete[] _toyCollection;
//             _toyAmount += 1;
//             _toyCollection = new Toy[_toyAmount];
//             for(int i = 0; i < _toyAmount - 1; i++){
//                 _toyCollection[i] = temp[i];
//             } 
//             _toyCollection[_toyAmount - 1] = toy;
//             delete[] temp;
//         }

//         // index from 0  Test06
//         Toy getToy(int index) const{
//             return _toyCollection[index];
//         }

//         // true if heavier than (>) other  Test07
//         bool isHeavierThan(Dog const &other) const{
//             return (_weight > other._weight) ? true : false;
//         }
// };

#endif