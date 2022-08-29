#include <gtest/gtest.h>
#include "triangle.h"

TEST(TriangleTest, 01)
{
    double w[2] = {0, 0};
    double i[2] = {0, 3};
    double j[2] = {4, 0};
    MathVector x(2, w);
    MathVector y(2, i);
    MathVector z(2, j);
    Triangle t(x, y, z);
    ASSERT_EQ(t.perimeter(), 12);
    ASSERT_EQ(t.area(), 6);
}
TEST(TriangleTest, 02)
{
    double w[2] = {4, 6};
    double i[2] = {9, 6};
    double j[2] = {4, 18};
    MathVector x(2, w);
    MathVector y(2, i);
    MathVector z(2, j);
    Triangle t(x, y, z);
    ASSERT_EQ(t.perimeter(), 30);
    ASSERT_EQ(t.area(), 30);
}
