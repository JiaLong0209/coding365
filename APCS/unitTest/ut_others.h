#include "../others/ut_test.h"

TEST(ArrowTableTest, TEST3x3){
    ASSERT_EQ(arrow(1,1),"right");
    ASSERT_EQ(arrow(2,1),"down");
    ASSERT_EQ(arrow(2,2),"left");
    ASSERT_EQ(arrow(1,2),"down");
    ASSERT_EQ(arrow(1,3),"right");
    ASSERT_EQ(arrow(2,3),"right");
    ASSERT_EQ(arrow(3,3),"up");
    ASSERT_EQ(arrow(3,2),"up");
    ASSERT_EQ(arrow(3,1),"right");
}
TEST(ArrowTableTest, TEST5x5){
    ASSERT_EQ(arrow(4,1),"down");
    ASSERT_EQ(arrow(4,2),"down");
    ASSERT_EQ(arrow(4,3),"down");
    ASSERT_EQ(arrow(4,4),"left");
    ASSERT_EQ(arrow(3,4),"left");
    ASSERT_EQ(arrow(2,4),"left");
    ASSERT_EQ(arrow(1,4),"down");
    ASSERT_EQ(arrow(1,5),"right");
    ASSERT_EQ(arrow(2,5),"right");
    ASSERT_EQ(arrow(3,5),"right");
    ASSERT_EQ(arrow(4,5),"right");
    ASSERT_EQ(arrow(5,5),"up");
    ASSERT_EQ(arrow(5,4),"up");
    ASSERT_EQ(arrow(5,3),"up");
    ASSERT_EQ(arrow(5,2),"up");
    ASSERT_EQ(arrow(5,1),"right");
}