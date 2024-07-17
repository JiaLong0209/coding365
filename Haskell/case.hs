#!/usr/bin/env runghc

---------- Case Expressions ----------
-- Structure: case expression of pattern -> result  
                               --pattern -> result  
                               --pattern -> result  

-- head' :: [a] -> a
-- head' [] = error "Empty Lists"
-- head' (x:_) = x

head' :: [a] -> a
head' xs =  case xs of 
    [] -> error "Empty Lists"
    (x:_) -> x

data Color = Red | Green | Blue

colorDescriber :: Color -> String
colorDescriber c = case c of 
    Red   -> "The color is Red"
    Green -> "The color is Green"
    Blue  -> "The color is Blue"

listDescriber :: [a] -> String
listDescriber xs = "The list is " ++ case xs of 
    [] -> "a empty list"
    [x] -> "a singleton list"
    xs -> "a longer list"

case_ex = do
    print(head' [1,2,3])
    print(colorDescriber Red)
    print(colorDescriber Green)
    print(listDescriber [])
    print(listDescriber [1,2])
    print(listDescriber [4])

---------- Main fcunt ----------

main = do 
    case_ex
