// #ifndef DOG_H
// #define DOG_H
#include <iostream>



class Dog{

    private:
        std::string _name;
        double _weight;
        int _toyAmount;
        std::string *_toyCollection;



    public:
        Dog(){
            _toyAmount = 0;
            _toyCollection = new std::string[_toyAmount];
        }
        Dog(std::string name, double weight)
        {
            _name = name;
            _weight = weight;
            _toyAmount = 0;
            _toyCollection = new std::string[_toyAmount];
        }
        ~Dog(){
            delete[] _toyCollection;
        }
        

        std::string getName(){
            return _name;
        }

        double getWeight(){
            return _weight;
        }

        void addNewToy(std::string toyName){
            std::string *old_toycollection = new std::string[_toyAmount];
            for (int i = 0; i < _toyAmount; i++){
                old_toycollection[i] = _toyCollection[i];
            }
            delete[] _toyCollection;
            _toyAmount += 1;
            _toyCollection = new std::string[_toyAmount];
            for (int i = 0; i < _toyAmount - 1; i++){
                _toyCollection[i] = old_toycollection[i];
            }
            _toyCollection[_toyAmount - 1] = toyName;
            delete[] old_toycollection;

            // _toyAmount += 1;
            // _toyCollection[_toyAmount - 1] = toyName;
        }
        std::string getToy(int index){
            return _toyCollection[index];
        }

};
