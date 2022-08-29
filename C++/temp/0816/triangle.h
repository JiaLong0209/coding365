
#ifndef TRIANGLE_H   //if not define
#define TRIANGLE_H

#include <cmath>
#include "../0818/shape.h"
#include"../0804/MathVector.h"

class Triangle : public Shape
{
private:
    MathVector _x, _y, _z;

public:
    Triangle()
    {
    }
    Triangle(MathVector const &x, MathVector const &y, MathVector const &z)
    {
        _x = x;
        _y = y;
        _z = z;
    }
    ~Triangle()
    {
    }
    double perimeter()
    {
        double result = 0;
        MathVector r, u, w;
        r = _y - _x;
        u = _z - _y;
        w = _z - _x;
        result = r.length() + u.length() + w.length();
        return result;
    }
    double area()
    {
        double s, result;
        double a, b, c;
        a = (_y - _x).length();
        b = (_z - _y).length();
        c = (_z - _x).length();
        s = perimeter() / 2;
        result = sqrt(s * (s - a) * (s - b) * (s - c));
        return result;
    }
};
#endif

