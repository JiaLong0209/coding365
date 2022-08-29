#ifndef POLYGON_H
#define POLYGON_H
#include "shape.h"
#include "../0804/MathVector.h"

class Polygon : public Shape{  
    private:
        std::vector<MathVector> _vertex;
        int _len;

    public:

        Polygon(){
            _len = 0;
            _name += "::polygon";
        }

        Polygon(MathVector* input, int len){
            _len = len;
            for(int i = 0; i < len; i++){
                _vertex.push_back(input[i]);
            }
            _name += "::polygon";
        }

        ~Polygon(){

        }

        double perimeter() override{
            double result = 0;
            for(int i = 0; i < _len-1; i++){
                MathVector m = _vertex[i+1] - _vertex[i];
                m.length();
            }
            MathVector n = _vertex[_len-1] - _vertex[0];
            result += n.length();
            return result;
        }
        double area() override{
            double result = 0;
            for( int i = 0; i < _len - 2; i++)
            {
                Triangle t(_vertex[i],_vertex[i+1]._vertex[i+2]);
                result += t.area();
            }
            return result;
        }
};

#endif