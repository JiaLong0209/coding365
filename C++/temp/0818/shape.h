#ifndef SHAPE_H
#define SHAPE_H

#include <iostream>
#include "../0816/triangle.h"
#include "../0818/circle.h"
#include "../0818/polygon.h"


class Shape
{
    private: 
    
    protected:
        std::string _name;

    public:

        Shape () {
            // std::cout << "shape default constuctor\n";
            _name = "shape";
        }

        ~Shape () {

        }

        std::string getName () {
            return _name;
        }

        void setName (std::string input) {
            _name = input;
        }

        // pure virtual function
        // Shape s3; // unable to do this
        virtual double perimeter() = 0;
        virtual double area() = 0;
        // unsure how to implement
        // double perimeter () {
        // }
        // double area () {
        // }
};


#endif


