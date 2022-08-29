#ifndef CIRCLE_H
#define CIRCLE_H

#include "../0804/MathVector.h"
#include "shape.h"

class Circle : public Shape{
    private:
        MathVector _center;
        double _radius;
    public:
        Circle(){
            _name += "::circle";
        }

        Circle(double* input, double radius){
            if(radius <= 0){
                throw std::string("radius must > 0");
            }

            _radius = radius;
            _center.expand(input[0]);
            _center.expand(input[1]);
            _name += "::circle";
        }

        ~Circle(){

        }

        double perimeter() override{
            return 2*_radius  * M_PI;
        }

        double area() override{
            return _radius * _radius * M_PI;
        }


};

#endif

