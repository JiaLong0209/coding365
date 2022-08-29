#ifndef SCHOOL_H
#define SCHOOL_H

#include <vector>

#include "school_member.h"

class School {
public:
  School() = default;

  void addSchoolMember(SchoolMember * const member) {
  }

  template<typename Condition>
  std::vector<SchoolMember *> getSchoolMemberWithCondition(Condition cond) {
    std::vector<SchoolMember *> school_member_in_cond;
    
    return school_member_in_cond;
  }

private:
};

#endif
