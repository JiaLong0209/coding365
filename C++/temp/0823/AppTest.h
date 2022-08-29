#include <gtest/gtest.h>
#include "App.h"
#include "../0818/shape.h"
// #include "../0818/circle.h"
// #include "../0818/polygon.h"
// #include "../0816/triangle.h"

class AppTest_F : public :: testing ::Test
{
protected:
    double arr[2] = {3, 4};
    double r = 5;
    double x[2] = {0, 0};
    double y[2] = {4, 0};
    double z[2] = {4, 4};
    double w[2] = {0, 4};
    MathVector arr1[4] = {MathVector(2, x), MathVector(2, y), MathVector(2, z), MathVector(2, w)};
    Polygon p;
    Circle c;

    void SetUp() override
    {
        p = Polygon(arr1, 4); // area = 16
        c = Circle(arr, r);   // area = 25 * 3.14
    }
};

TEST_F(AppTest_F, Test01)
{
    App a;
    a.Add(&c);
    a.Add(&p);
    a.sort();
    ASSERT_NEAR(a.at(0)->area(), 16, 0.01);
    ASSERT_NEAR(a.at(1)->area(), 78.537, 0.01);
}
