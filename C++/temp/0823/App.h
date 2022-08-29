
#ifndef APP_H
#define APP_H
#include <vector>
#include <algorithm>
#include "../0818/shape.h"

bool compare(Shape *i, Shape *j)
{
    return i->area() < j->area();
}

class App
{
private:
    std::vector<Shape*> _shapes;

public:
    App()
    {
    }

    ~App()
    {
    }

    void Add(Shape *input)
    {
        _shapes.push_back(input);
    }

    void sort()
    {
        std::sort(_shapes.begin(), _shapes.end(), compare);
    }

    Shape *at(int i)
    {
        return _shapes.at(i);
    }
};
#endif
