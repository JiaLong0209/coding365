#include <gtest/gtest.h>
#include "dog.h"

TEST(DogTest, getName){
    Dog a("Dog1", 20);
    ASSERT_EQ(a.getName(), "Dog1");
}

TEST(DogTest, getWeight){
    Dog a("Dog1", 20);
    ASSERT_EQ(a.getWeight(), 20);
}
TEST(DogTest, addNewToy){
    Dog a("Dog1", 20);
    a.addNewToy("toy1");
    a.addNewToy("toy2");
    ASSERT_EQ(a.getToy(0), "toy1");
    ASSERT_EQ(a.getToy(1), "toy2");
}
TEST(DogTest, getToy){
    Dog a("Dog1", 20);
    a.addNewToy("toy1");
    a.addNewToy("toy2");
    ASSERT_EQ(a.getToy(0), "toy1");
    ASSERT_EQ(a.getToy(1), "toy2");
}