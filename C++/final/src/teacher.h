#ifndef TEACHER_H
#define TEACHER_H

#include <algorithm>  // std::find_if
#include <stdexcept>  // std::domain_error, std::range_error
#include <string>
#include <vector>

#include "school_member.h"
#include "student.h"

class Teacher : public SchoolMember{

private:
  // store this teacher's students
   std::vector<Student*> _students;



public:
  Teacher(int const id, std::string const & name, std::string const & department = "Mechanical & Electrical Engineering"): SchoolMember(id,name,department)
  {
    // _id = id;
    // _name = name;
    // _department = department;
  }

  Teacher(){

  }

  ~Teacher() override{
    for(Student* stu : _students){
      delete stu;
    }
    // _students.clear();
  }
  Student getStudentById(int const id) const {
    // If you don't know how to use the capture clause, which is the [],
    // you can use a functor and set the id into it before passing.
    for(Student * stu : _students){
      if(stu->id() == id){
        return *stu;
      }
    }
    throw std::range_error("ERROR: STUDENT_NOT_EXIST");

  }

  // Don't have to handle duplicate ids.
  void addStudent(Student const & stu) {
    if(stu.department()==department()){
      _students.push_back(new Student(stu.id(),stu.name(),stu.department()));
    }else{
      throw std::domain_error("ERROR: NOT_IN_THE_SAME_DEPARTMENT");
    }
    // (stu.department()!=department()) ? throw std::domain_error("ERROR: NOT_IN_THE_SAME_DEPARTMENT"):_students.push_back(stu);
  }

};

#endif
