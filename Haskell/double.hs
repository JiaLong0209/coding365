#!/usr/bin/env runghc
-- type :l double.hs in ghci to load this .hs

-- functions
double_fun x = x + x
double_two_fun x y = double_fun x + double_fun y
doubleSmall x = if x < 1000 then x*2 else x


-- variables
a = double_fun 100 -- 200

b = double_two_fun 120 a -- 640

c = doubleSmall b -- 1280


-- main function
main = print c


