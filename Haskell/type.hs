#!/usr/bin/env runghc
import Data.Typeable

removeUppercase :: [Char] -> [Char]
removeUppercase str = [x  | x <- str, x `elem` ['a'..'z']]

addTwo :: Int -> Int -> Int
addTwo x y = x + y

ex1 = do
    -- print ("Name: ")
    -- name <- getLine
    -- print (removeUppercase name)
    print (addTwo 10 20)

fac :: Integer -> Integer -- big integer
fac n = product [1..n]


ex2 = do
    print(fac 19) 
    print(typeOf fac)
    -- print(typeOf head [1,2,3,4])

main = do 
    -- ex1
    ex2
