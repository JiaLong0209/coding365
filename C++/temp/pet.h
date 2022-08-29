
#ifndef _PET_H_
#define _PET_H_

class Pet{
    private:
        std::string _kind;
        std::string _name;
        double _weight;
        static int _amount;  // add pets amount
        
    protected:
        void grow(double growWeight){
            _weight += growWeight; 
        }

    public:
        Pet(){

        }
        virtual ~Pet(){
            std::cout << "Pet destructor\n";
            _amount -= 1;
        }

        Pet(std::string const &kind, std::string const& name, double const& weight):_kind(kind),_name(name),_weight(weight)  // constructor initialization list 
        {
            _amount += 1;
        }

        static int amount(){
            return _amount;
        }

        std::string name(){
            return _name;
        }

        double weight(){
            return _weight;
        }

        virtual void feed() = 0;
};

int Pet::_amount = 0;

#endif