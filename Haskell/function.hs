#!/usr/bin/env runghc


---------- Pattern Matching ----------
isTwo :: (Integral a) => a -> String
isTwo 2 = "It is 2!"
isTwo x = "It is not 2!"

factorial :: (Integral a) => a -> a
factorial 0 = 1
factorial n = n * factorial(n-1)

name :: Char -> String
name 'a' = "Adam"
name 'b' = "Bert"

vector_add :: (Num a) => (a, a) -> (a, a) -> (a, a)
vector_add (x1, y1) (x2, y2) = (x1 + x2, y1 + y2)
-- vector_add a, b = (fst a, fst b, snd a, snd b)

third :: (a,b,c) -> c
third (_, _, z) = z

head' :: [a] -> a 
head' [] = error "Can't call head on an empty list!"
head' (x:_) = x

length' :: (Num b) => [a] -> b
length' [] = 0
length' (_:xs) = 1 + length' xs

-- as mode @
capital :: String -> String
capital "" = "Empty string!"
capital arg@(x:xs) = "The first letter of " ++ arg ++ " is " ++ [x]

pattern_match = do 

    print(capital "ABC")
    print(capital "abc")

    print(length' [1,2,3,4,5])

    -- print(isTwo 1)
    -- print(isTwo 2)
    -- print(isTwo 3)

    -- print(factorial(0))
    -- print(factorial(1))
    -- print(factorial(3))

    -- print(name 'a')
    -- print(name 'c')

    -- print(vector_add (1,3) (10,20))
    -- print(third (1,2,3))
    -- print(head' [10,2,3])
    
-------------------------------------


main = do 
    pattern_match






