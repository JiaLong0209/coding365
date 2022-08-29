
#include "../src/school_member.h"
#include "../src/school.h"
#include "../src/teacher.h"

TEST(StuTest, Test01){
    // Student* stuA = new Student(1,"apple");
    // stuA->addScore(100);
    // stuA->addScore(10);
    // stuA->addScore(1);
    // double score = stuA->getScore(1);
    // ASSERT_EQ(stuA->getScoreCount(),3);
    // std::cout << stuA->getScoreCount() << "\n";
    // std::cout << stuA->getScore(3) << "\n";
    // ASSERT_EQ(stuA->getScore(1),100);
    // ASSERT_EQ(stuA->getScore(2),10);
    // ASSERT_EQ(stuA->getScore(3),1);

}


TEST(StuTest, Test02){
    School ntut;
    // SchoolMember *a = new Student(1, "john");
    // ntut.addSchoolMember(a);

    Student b;
    b = Student(2, "newbo");
    ntut.addSchoolMember(&b);

    b.addScore(100);
    b.addScore(200);
    ASSERT_EQ(b.getScore(1),100);

    Teacher c;
    c = Teacher(3, "tea");
    c.addStudent(b);

    ntut.addSchoolMember(&c);
    
    // SchoolMember* m = new Teacher(4,"tea1");
    // delete m;
    // School zs;
    // zs = ntut;
    
    // ntut.a->addScore(100);
    // std::cout << ntut.a->getScore(1) << "\n";

}