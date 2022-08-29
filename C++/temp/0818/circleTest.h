// #include <gtest/gtest.h>

#include "circle.h"
#include "shape.h"
#include "../0816/triangle.h"

class CircleTest_F : public :: testing  :: test{
    protected:
    double arr[2] = {3,4};
    double r = 5;
    Circle c;
    void Setup() override
    {

    c = Circle c(arr, r);
    std::cout << "Setup functin  is called \n";

    }

};
// test fixture 
TEST_F(CircleTest_F, Test01){
    ASSERT_NEAR(c.perimeter(),2 * r * M_PI, 0.0001);
}

TEST_F(CircleTest_F, Test02){
    ASSERT_NEAR(c.area(),r * r * M_PI, 0.0001);
    ASSERT_EQ(c.getName(), "shape::circle");
}

TEST_F(CircleTest_F, Test03){
    double d = 0;
    ASSERT_THROW(Circle(arr, d), std::string);
}

TEST_F(CircleTest_F, Test04){
    Shape *s = new Circle(arr, r);
    s->getName();
    ASSERT_EQ(s->getName(), "shape::circle");
}


// TEST(CircleTest, TEST01){
//     double arr[2] = {3,4};
//     double r = 5;
//     Circle c(arr, r);
//     ASSERT_NEAR(c.perimeter(),2 * r * M_PI, 0.0001);
//     // ASSERT_EQ(c.perimeter(),10 * M_PI);
// }

// TEST(CircleTest, TEST02){
//     double arr[2] = {3,4};
//     double r = 5;
//     Circle c(arr, r);
//     ASSERT_NEAR(c.area(),r * r * M_PI, 0.0001);
//     ASSERT_EQ(c.getName(), "shape::circle");
// }

// TEST(CircleTest, TEST03){
//     double arr[2] = {3,4};
//     double r = -1.0;
//     Circle c(arr,r);
//     ASSERT_THROW(Circle(arr, r), std::string);
// }

// TEST(CircleTest, TEST04){
//     double arr[2] = {3,4};
//     double r = 5;
//     Shape *s = new Circle(arr, r);
//     s->getName();
//     ASSERT_EQ(s->getName(), "shape::circle");
    // Shape *s2 = new Triangle();
    // Shape s3();
    // std::vector<Shape *> v;
    // v.push_back(new Circle(arr,r));
    // v.push_back(new Triangle());
    
    // for(int i = 0; i < v.size() ; i++){
    //     v.at(i) -> perimeter();
    // }
// }
