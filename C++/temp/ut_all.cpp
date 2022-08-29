// unit test
#include <gtest/gtest.h>
#include <string>
#include <iostream>
// #include "./0823/AppTest.h"
// #include "ut_dog.h"
// #include "ut_cat.h"
#include "ut_yard.h"

// TEST(HELLOWORLD, PrintHelloWorld){
//     string output =  PrintHelloWorld();
//     string compare = "Hello World! \n";
//     ASSERT_EQ(output, compare);
// }
 
int main(int argc, char **argv){    //for google test
    // std::cout << "Test" ;
    testing::InitGoogleTest(&argc,argv);
    return RUN_ALL_TESTS();
}
