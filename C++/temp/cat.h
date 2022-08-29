#ifndef _CAT_H_
#define _CAT_H_

#include "pet.h"

class Cat : public Pet{

    private:
        static int _amount;

    public:

    // void init(std::string name, double weight):Pet("CAT",name,weight){  // constructor initializtion list
    //     _amount += 1;
    //     // _name = name;
    //     // _weight = weight;
    // }

    Cat(){
        // _name = "";
        // _weight = 0;
    }

    Cat(std::string name, double weight):Pet("CAT",name,weight){
        // weight > 6 || weight < 2 ? throw std::range_error("The cat's weight must be > 2 and < 6") : init(name,weight);
        weight > 6 || weight < 2 ? throw std::range_error("The cat's weight must be > 2 and < 6") : _amount+=1;
    }
    ~Cat(){
            std::cout << "Cat destructor\n";
        _amount -= 1;
    }
    
    void feed() override {
        weight()+0.2 > 6 ? throw std::out_of_range("This cat looks too fat!!!") : grow(0.2);
    }

    static int amount(){
        return _amount;
    }

};
int Cat::_amount = 0;


#endif