#ifndef STUDENT_H
#define STUDENT_H

#include <numeric>  // std::accumulate
#include <stdexcept>  // std::out_of_range, std::range_error
#include <string>
#include <vector>

#include "school_member.h"

class Student {
public:
  Student(int const id, std::string const & name, std::string const & department = "Mechanical & Electrical Engineering")
  {}

  void addScore(double const score) {
    _scores.push_back(score);
  }

  double getScore(int const number_of_test) const {

  }

  double scoreAverage() const {
    
  }

private:
  // store student's hw scores
};

#endif
