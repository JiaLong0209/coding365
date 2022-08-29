#ifndef SCHOOL_H
#define SCHOOL_H

#include <vector>

#include "school_member.h"

class School {
public:
  School() = default;

  ~School(){
    // for(SchoolMember* member : _schoolMembers){
    //   delete member;
    // }
    // for(int i = 0; i < _schoolMembers.size(); i++){
    //   delete _schoolMembers.at(i);
    // }
    // _schoolMembers.clear();
    
  }

  void addSchoolMember(SchoolMember * const member) {
    _schoolMembers.push_back(member);
  }

  

  template<typename Condition>
  std::vector<SchoolMember *> getSchoolMemberWithCondition(Condition cond) {
    std::vector<SchoolMember *> school_member_in_cond;
    
    for(SchoolMember* member : _schoolMembers){
      // if(cond(member)){
      //   school_member_in_cond.push_back(member);
      // }
      cond(member)?school_member_in_cond.push_back(member):NULL;
    }
    return school_member_in_cond;
  }

  int memberAmount(){
    return _schoolMembers.size();
  }


private:
  std::vector<SchoolMember*> _schoolMembers;
  void deep_copy(std::vector<SchoolMember*> schoolMember){
    for(SchoolMember* member : schoolMember){
      _schoolMembers.push_back(member);
    }
  }
  // copy constructor
  School(School const &other){
    deep_copy(other._schoolMembers);
  }

  // copy assignment
  School &operator=(School const &other){
    deep_copy(other._schoolMembers);
    return *this;
  }
};

#endif
