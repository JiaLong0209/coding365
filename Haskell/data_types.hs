#!/usr/bin/env runghc

---------- Algebraic Data Types --------

---- You can export this module:
-- module Shapes
-- ( Point(..)
-- , Shape(..)
-- , surface
-- , nudge
-- ) where

data Bool = False | True

data Point = Point Float Float deriving (Show)
data Shape = Circle Point Float | Rectangle Point Point deriving (Show)

area :: Shape -> Float  
area (Circle _ r) = pi * r ^ 2
area (Rectangle (Point x1 y1) (Point x2 y2)) = (abs $ x2 - x1) * (abs $ y2 - y1) 

nudge :: Shape -> Float -> Float -> Shape
nudge (Circle (Point x y ) r ) a b = Circle (Point (x+a) (y+b)) r 
nudge (Rectangle (Point x1 y1) (Point x2 y2)) a b = Rectangle (Point (x1+a) (y1+b)) (Point (x2+a) (y2+b))

algebraic_type_ex = do  
    print(area $ Circle (Point 10 10) 20)
    print(area $ Rectangle (Point 10 10) (Point 20 20))
    print(Circle (Point 10 10) 20)
    print(map (Circle $ Point 10 10) [1..4])
    print(nudge (Circle (Point 10 10) 20) 50 100 )

---------- Main Function ----------
main = do 
    algebraic_type_ex


