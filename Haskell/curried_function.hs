#!/usr/bin/env runghc


---------- Curried Functions ---------

multThree :: (Num a) => a -> (a -> (a -> a ))
multThree x y z = x * y * z 

compareWithHundred :: (Num a, Ord a) => a -> Ordering
compareWithHundred = compare 100
-- compareWithHundred x = compare 100 x

divideByTen :: (Floating a) => a -> a
divideByTen = (/10)

applyTwice :: (a->a) -> a -> a
applyTwice f x = f (f x)

zipWith' :: (a->b->c) -> [a] -> [b] -> [c]
zipWith' _ _ [] = []
zipWith' _ [] _ = []
zipWith' f (x:xs) (y:ys) = f x y :  zipWith' f xs ys

flip' :: (a->b->c) -> (b->a->c)
flip' f x y = f y x
-- flip' f = g where g x y = f y x


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

    print( applyTwice (* 10) 5)
    print( applyTwice (3:) [1])
    print( (:) 3[3])

    print(zipWith' (+) [1,2,3] [10,20,30])
    print(zipWith' (*) [1,2,3] [10,20,30])
    print(zipWith' (zipWith' (*)) [[1,2,3],[1,2,3,4],[1,2,3,4,5]] [[3,2,1], [10,2,5,13], [34,52,53,3,1]] ) 

    print(flip' (zip) [1,2,3] "App")
    print(zipWith' (flip' div) [10,10 ..] [100, 120.. 200])


---------- Main Function ----------
main = do 
    curry_ex



