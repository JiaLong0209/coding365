#ifndef STUDENT_H
#define STUDENT_H

#include <numeric>  // std::accumulate
#include <stdexcept>  // std::out_of_range, std::range_error
#include <string>
#include <vector>

#include "school_member.h"

class Student : public SchoolMember{
public:
  Student(int const id, std::string const & name, std::string const & department = "Mechanical & Electrical Engineering") : SchoolMember(id,name,department)
  {
    // _id = id;
    // _name = name;
    // _department = department;
  }
  Student(){

  }
  ~Student ()override{
    // for(double score : _scores){
    //   delete score;
    // }
    // for(int i = 0; i < _scores.size(); i++){
    //   delete _scores.at(i);
    // }
    _scores.clear();
  }

  void addScore(double const score) {
    _scores.push_back(score);
  }

  double getScore(int const number_of_test) const {
    return (number_of_test <=0 || number_of_test > _scores.size())? throw std::out_of_range("ERROR: NO_SUCH_NUMBER_OF_TEST") : _scores.at(number_of_test-1);
  }

  double scoreAverage() const {
    _scores.size()==0 ? throw std::range_error("ERROR: NO_SCORE"):NULL;
    // if(_scores.size() == 0){
    //   throw std::range_error("ERROR: NO_SCORE");
    // }
    double sum = 0;
    for(double score : _scores){
      sum += score;
    }
    return sum / _scores.size();
  }

  int getScoreCount(){
    return _scores.size();
  }

private: 
  // store student's hw scores
  std::vector<double> _scores;

};

#endif
