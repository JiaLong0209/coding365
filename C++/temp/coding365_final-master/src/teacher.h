#ifndef TEACHER_H
#define TEACHER_H

#include <algorithm>  // std::find_if
#include <stdexcept>  // std::domain_error, std::range_error
#include <string>
#include <vector>

#include "school_member.h"
#include "student.h"

class Teacher {
public:
  Teacher(int const id, std::string const & name, std::string const & department = "Mechanical & Electrical Engineering")
  {}

  // Don't have to handle duplicate ids.
  void addStudent(Student const & stu) {
    
  }

  Student getStudentById(int const id) const {
    // If you don't know how to use the capture clause, which is the [],
    // you can use a functor and set the id into it before passing.
    
  }

private:
  // store this teacher's students
};

#endif
