// ------------- week2 08/11 ------------------

// #ifndef DOG_H
// #define DOG_H

// #include "toy.h"


// class Dog{
//     private:
//         std::string _name;
//         double _weight;
//         int _toyAmount;
//         Toy *_toyCollection;
//         // std::vector<Toy> _toyCollection;

//     public:

//         void init(Dog const &input){
//             input._name != "" ? _name = input._name : throw std::string("name error");
//             input._weight < 10 || input._weight > 50 ? throw std::string("weight error") : _weight = input._weight;
//             _toyAmount = 0;
//         }

//         void init(std::string name, double weight){
//             name != "" ? _name = name : throw std::string("name error");
//             weight < 10 || weight > 50 ? throw std::string("weight error") : _weight = weight;
//             _toyAmount = 0;
//             // _toyCollection = new Toy[_toyAmount];
//         }

//         Dog(){
//             std::cout << "default constructor";
//             _weight = 0;
//             _name = "";
//             // _toyCollection.clear();
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
//             init(other);
//         }

//         // copy assignment Test04
//         Dog &operator=(Dog const &other ){
//             init(other);
//             return *this;
//         }

//         // add Toy in toy collections Test05
//         void addNewToy(Toy const &toyName){
//             _toyAmount += 1;
//             Toy *temp= new Toy[_toyAmount];  // **point**, need the default constructor of Toy
            
//             for(int i = 0; i < _toyAmount - 1; i++){
//                 temp[i] = _toyCollection[i];
//             } 
//             delete[] _toyCollection;
//             temp[_toyAmount - 1] = toyName;
//             _toyCollection = temp;

//             // delete[] temp;

//             // _toyCollection.push_back(toyName);
//         } 

//         // index from 0  Test06
//         Toy getToy(int index) const{
//             std::cout << index << " Amount: " << _toyAmount << "\n";
//             return (index < 0 || index+1 > _toyAmount) ? throw std::string("index error") : _toyCollection[index];
//             // return (index < 0 || index+1 > _toyCollection.size()) ? throw std::string("index error") : _toyCollection[index];

//         }

//         // true if heavier than (>) other  Test07
//         bool isHeavierThan(Dog const &other) const{
//             return (_weight > other._weight) ? true : false;
//         }
// };

// #endif

// ------------- week3 08/18 ------------------


#ifndef _DOG_H_
#define _DOG_H_

#include "pet.h"

class Dog : public Pet{
    private:
        static int _amount;
    public:

        // void init(std::string name, double weight):Pet("DOG",name,weight){
        //     _amount+=1;
        //     // _name = name;
        //     // _weight = weight;
        // }

        Dog(){
            // _name = "";
            // _weight = 0;
        }

        Dog(std::string name, double weight):Pet("DOG",name,weight){
            // weight<10 || weight>50 ? throw std::range_error("The dog's weight must be < 50 and > 10!") : init(name, weight);
            weight<10 || weight>50 ? throw std::range_error("The dog's weight must be < 50 and > 10!") : _amount+=1;
        }

        ~Dog(){
            std::cout << "Dog destructor\n";
            _amount -= 1;
        }

        static int amount(){
            return _amount;
        }

        void feed() override{
            weight() >= 50 ? throw std::out_of_range("This dog looks too fat!!!") : grow(0.8);
        }

};
int Dog::_amount = 0;

#endif