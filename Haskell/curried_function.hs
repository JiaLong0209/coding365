#!/usr/bin/env runghc


---------- Curried Functions ---------

multThree :: (Num a) => a -> (a -> (a -> a ))
multThree x y z = x * y * z 

compareWithHundred :: (Num a, Ord a) => a -> Ordering
compareWithHundred = compare 100
-- compareWithHundred x = compare 100 x

divideByTen :: (Floating a) => a -> a
divideByTen = (/10)


curry_ex = do 
    -- max :: (Ord a) => a -> a -> a
    print(max 4 5)
    print((max 4) 5)
    print(((multThree 5) 5) 5)
    print((multThree 5 5) 5)

    print(compareWithHundred 1000)
    print(compareWithHundred 10)

    print(divideByTen 500)
    print(500 / 10 )
    print((/10) 500 )
    print((/) 500 10 )



---------- Main Function ----------
main = do 
    curry_ex



