// #include<gtest/gtest.h>
#include "../dog.h"
TEST(ToyTest, Test01){
    Toy a("ball");
    ASSERT_EQ(a.getName(),"ball");
}

TEST(DogTest, Test02){
    Dog a("bob",645);
    Dog b("bad pig",9);
    Dog c("Rush C",25);
    ASSERT_EQ(a.getWeight(), 50);
    ASSERT_EQ(b.getWeight(), 10);
    ASSERT_EQ(c.getWeight(), 25);
}

TEST(DogTest, Test03){
    Dog a("bob",20);
    Dog b = a;
    // std::cout << a.getName();
    // std::cout << a.getWeight();
    a.setName("123");
    // std::cout << b.getName();
    // std::cout << b.getWeight();

    ASSERT_EQ(b.getName(),"bob");
    ASSERT_EQ(b.getWeight(), 20);
}

TEST(DogTest, Test04){
    Dog a("bob",20);
    Dog b;
    b = a;
    // std::cout << a.getName();
    // std::cout << a.getWeight();
    a.setName("123");
    // std::cout << b.getName();
    // std::cout << b.getWeight();

    ASSERT_EQ(b.getName(),"bob");
    ASSERT_EQ(b.getWeight(), 20);
}

TEST(DogTest, Test05){      //addNewToy
    Dog a("bob",20);
    Toy toyA("rhythm Game");
    Toy toyB("code");
    Toy toyC("programming");
    a.addNewToy(toyA);    
    a.addNewToy(toyB);
    a.addNewToy(toyC);
    ASSERT_EQ(a.getToy(0).getName(),"rhythm Game");
    ASSERT_EQ(a.getToy(1).getName(),"code");
    ASSERT_EQ(a.getToy(2).getName(),"programming");
}

TEST(DogTest, Test06){      //getName
    Dog a("bad pig",25);
    Toy toyA("angry bird");
    Toy toyB("code");
    Toy toyC("programming");
    a.addNewToy(toyA);    
    a.addNewToy(toyB);
    a.addNewToy(toyC);
    ASSERT_EQ(a.getToy(0).getName(),"angry bird");
    ASSERT_EQ(a.getToy(1).getName(),"code");
    ASSERT_EQ(a.getToy(2).getName(),"programming");
}

TEST(DogTest, Test07){
    Dog a("bob",20);
    Dog b("asymmetry",10);
    ASSERT_EQ(a.isHeavierThan(b),true);
}