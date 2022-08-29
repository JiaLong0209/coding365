// unit test
#include <gtest/gtest.h>
// #include "HelloWorld.h"
// #include "ut_all.h"
// #include "../0804/MathVectorTest.h"
// #include "../0804/ut_dog.h"
// #include "../0811/ut_dog.h"
// #include "../0811/toy.h"
// #include "../toy.h"
// #include "../0816/triangleTest.h"
#include "../0818/circleTest.h"
// #include "../0818/polygonTest.h"

// TEST(HELLOWORLD, PrintHelloWorld){
//     string output =  PrintHelloWorld();
//     string compare = "Hello World! \n";
//     ASSERT_EQ(output, compare);
// }

int main(int argc, char **argv){    //for google test
    testing::InitGoogleTest(&argc,argv);
    return RUN_ALL_TESTS();
}
