#include "cat.h"

TEST(CatTest, TEST01_Name_Weight){
    Pet *a = new Cat("asymmetry",3);
    ASSERT_EQ( (*a).name(),"asymmetry");  
    ASSERT_EQ(  a->weight(),3);
}

TEST(CatTest, TEST02_ThrowRangeError){
    ASSERT_THROW(Cat("asynchronous",0),std::range_error);
    ASSERT_THROW(Cat("baka",123),std::range_error);
}

TEST(CatTest, TEST03_Feed){
    // Cat a("america",5);
    Pet *a = new Cat("array",5);
    a->feed();
    ASSERT_NEAR(a->weight(),5.2,0.01);
}

TEST(CatTest, TEST04_FeedOutRange){
    Pet *a = new Cat("array",5.9);
    ASSERT_THROW(a->feed(),std::out_of_range);
}
