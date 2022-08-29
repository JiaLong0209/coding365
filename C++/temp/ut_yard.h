#include <gtest/gtest.h>
#include "yard.h"
#include "cat.h"
#include "dog.h"

// using namespace testing;
bool condition(Pet* pet){
    return pet->weight() > 20 ? true : false;
}

void extraMethod(Yard* yard){
    yard->addPet(new Cat("cat01",2));
    yard->addPet(new Dog("dog01",30));
    yard->addPet(new Cat("cat02",3));
    yard->addPet(new Dog("dog02",50));
    yard->addPet(new Cat("cat03",2));

}
//          :inheritance :: namespace :: class
class YardTest: public :: testing :: Test{
    protected:
        Yard y;

        void SetUp() override{  // call the function at the start
            ASSERT_EQ(Pet::amount(), 0);
            ASSERT_EQ(Cat::amount(), 0);
            ASSERT_EQ(Dog::amount(), 0);
            // std::cout << "SetUp is called \n ";
        }
        void TearDown() override{   // call the function at the end

            // ASSERT_EQ(Pet::amount(), 5);
            // ASSERT_EQ(Cat::amount(), 3);
            // ASSERT_EQ(Dog::amount(), 2);
            // std::cout << "TearDown is called \n ";
        }
};

class Fun{
    public:
        bool operator()(Pet* p){
            return p->weight() < 20;
        }
};

TEST_F(YardTest, test01){
    // Yard y;
    extraMethod(&y);

    std::vector <Pet *> ans;
    std::cout << y.getPets().size() << std::endl;
    ans = y.getPetWithCondition(condition);
    std::cout << ans.size() << std::endl;
    ASSERT_EQ(ans.size(), 2);

    ASSERT_EQ(Pet::amount(), 5);
    ASSERT_EQ(Cat::amount(), 3);
    ASSERT_EQ(Dog::amount(), 2);
}

TEST_F(YardTest, test02){
    extraMethod(&y);

    std::vector <Pet *> ans;
    ans = y.getPetWithCondition([](Pet* p){
        return p->weight()>0;
    });  //lambda
    ASSERT_EQ(ans.size(), 5);
}

TEST_F(YardTest, test03){
    extraMethod(&y);

    std::vector <Pet *> ans;
    Fun f;
    ans = y.getPetWithCondition(f);  
    ASSERT_EQ(ans.size(), 3);
}