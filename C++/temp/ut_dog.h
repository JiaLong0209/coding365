//---------------------week 2 0811-------------------------
// #include "dog.h"
// #include "toy.h"

// TEST(ToyTest, Test01){  // bane test
//     Toy a("ball");
//     ASSERT_EQ(a.getName(),"ball");
// }

// TEST(DogTest, Test02){  //weight test
//     // Dog a("bob",645);
//     // Dog b("bad pig",9);
//     Dog c("Rush C",25);
//     // ASSERT_EQ(a.getWeight(), 50);
//     ASSERT_THROW(Dog("bob",645),std::string);
//     ASSERT_THROW(Dog("bad pig",8), std::string);
//     ASSERT_EQ(c.getWeight(), 25);
// }

// TEST(DogTest, Test03){ // copy constructor test
//     Dog a("bob",20);
//     Dog b = a;
//     // std::cout << a.getName();
//     // std::cout << a.getWeight();
//     a.setName("123");
//     // std::cout << b.getName();
//     // std::cout << b.getWeight();

//     ASSERT_EQ(b.getName(),"bob");
//     ASSERT_EQ(b.getWeight(), 20);
// }

// TEST(DogTest, Test04){ // copy assignment test
//     Dog a("bob",20);
//     Dog b;
//     b = a;
//     // std::cout << a.getName();
//     // std::cout << a.getWeight();
//     a.setName("123");
//     // std::cout << b.getName();
//     // std::cout << b.getWeight();

//     ASSERT_EQ(b.getName(),"bob");
//     ASSERT_EQ(b.getWeight(), 20);
// }

// TEST(DogTest, Test05){      //addNewToy
//     Dog a("bob",20);
//     Toy toyA("rhythm Game");
//     Toy toyB("code");
//     Toy toyC("programming");
//     a.addNewToy(toyA);    
//     a.addNewToy(toyB);
//     a.addNewToy(toyC);
//     // std::cout << a.getToy(0).getName() << "\n";
//     // std::cout << a.getToy(1).getName() << "\n";
//     // std::cout << a.getToy(2).getName() << "\n";

//     ASSERT_EQ(a.getToy(0).getName(),"rhythm Game");
//     ASSERT_EQ(a.getToy(1).getName(),"code");
//     ASSERT_EQ(a.getToy(2).getName(),"programming");
// }

// TEST(DogTest, Test06){      //getName
//     Dog a("bad pig",25);
//     Toy toyA("angry bird");
//     Toy toyB("code");
//     Toy toyC("programming");
//     a.addNewToy(toyA);    
//     a.addNewToy(toyB);
//     a.addNewToy(toyC);
//     ASSERT_EQ(a.getToy(0).getName(),"angry bird");
//     ASSERT_EQ(a.getToy(1).getName(),"code");
//     ASSERT_EQ(a.getToy(2).getName(),"programming");
// }

// TEST(DogTest, Test07){
//     Dog a("bob",20);
//     Dog b("asymmetry",10);
//     ASSERT_EQ(a.isHeavierThan(b),true);
// }


//----------teacher testcase-------------------

// TEST(ToyTest, getName)
// {
// 	Toy toy1("doll");
// 	ASSERT_EQ(toy1.getName(), "doll");
// }
// TEST(DogTest, constructor)
// {
// 	Dog puppy1("soul", 20);
// 	ASSERT_EQ(puppy1.getName(), "soul");
// 	ASSERT_EQ(puppy1.getWeight(), 20);
// }
// TEST(DogTest, copy_constructor)
// {
// 	Dog puppy1("soul", 20);
// 	Dog puppy2(puppy1);
// 	ASSERT_EQ(puppy2.getName(), "soul");
// 	ASSERT_EQ(puppy2.getWeight(), 20);
// }
// TEST(DogTest, copy_assignment)
// {
// 	Dog puppy1("soul", 20);
// 	Dog puppy2 = puppy1;
// 	ASSERT_EQ(puppy2.getName(), "soul");
// 	ASSERT_EQ(puppy2.getWeight(), 20);
// }
// TEST(DogTest, AddNewToy)
// {
// 	Dog puppy1("soul", 20);
// 	Toy t1("LSB"), t2("KDF");
// 	puppy1.addNewToy(t1);
// 	puppy1.addNewToy(t2);
// 	ASSERT_EQ(puppy1.getToy(0).getName(), "LSB");
// 	ASSERT_EQ(puppy1.getToy(1).getName(), "KDF");
// }
// TEST(DogTest, getToy)
// {
// 	Dog puppy1("soul", 20);
// 	Toy t1("LSB"), t2("KDF");
// 	puppy1.addNewToy(t1);
// 	puppy1.addNewToy(t2);
// 	ASSERT_EQ(puppy1.getToy(0).getName(), "LSB");
// 	ASSERT_EQ(puppy1.getToy(1).getName(), "KDF");
// }
// TEST(DogTest, isHeavierThan)
// {
// 	Dog puppy1("soul", 20);
// 	Dog puppy2("LSB", 50);
// 	ASSERT_TRUE(puppy2.isHeavierThan(puppy1));
// }



//----------------week 3 0818----------------------

#include "pet.h"
#include "dog.h"

TEST(DogTest, TEST01_Name_Weight){
    Pet *a = new Dog("asymmetry",34);
    ASSERT_EQ( (*a).name(),"asymmetry");  
    ASSERT_EQ(  a->weight(),34);
}

TEST(DogTest, TEST02_ThrowRangeError){
    ASSERT_THROW(Dog("asynchronous",0),std::range_error);
    ASSERT_THROW(Dog("baka",123),std::range_error);
}

TEST(DogTest, TEST03_Feed){
    Pet *a = new Dog("america",48);
    // Dog a("america",48);

    a->feed();
    ASSERT_NEAR(a->weight(),48.8,0.01);
}

TEST(DogTest, TEST04_FeedOutRange){
    Dog a("array",49.6);
    ASSERT_THROW(a.feed(),std::out_of_range);
}


