#ifndef SCHOOL_MEMBER_H
#define SCHOOL_MEMBER_H

#include <string>

// SchoolMember is the base class of Student and Teacher
class SchoolMember {
public:
  SchoolMember(int id, std::string const & name, std::string const & department)
  {}

  int id() const {
  }

  std::string name() const {
  }

  std::string department() const {
  }

  // 轉系
  void transfer(std::string const & department) {
  }

private:
  int _id;
  std::string _name;
  std::string _department;
};

#endif
