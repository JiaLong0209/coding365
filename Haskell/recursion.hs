#!/usr/bin/env runghc

---------- Recursion ----------

maximum' :: (Ord a) => [a] -> a
maximum' xs = case xs of 
    [] -> error "Empty list"
    [x] -> x
    (x:xs) ->  if x > maximum' xs then x else maximum' xs



recursion_ex = do 
    print(maximum' [1,2,10,3,5])


---------- Main fcunt ----------

main = do 
    recursion_ex
