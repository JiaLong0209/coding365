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

ex3 = do
    print(5 == 5)
    print(5 /= 5)
    print(5 `compare` 3)
    print(1 `compare` 3)
    print(3 `compare` 3)

show_read_ex = do
    -- show: convert to string
    print(show [1,2,3])
    print(show "adfjoi")

    -- read: string to other type
    print(read "[1,2,3]" ++ [5,4])
    print((read "4" :: Float) * 4)
    print(read "(3, 'a')" :: (Double, Char))

main = do 
    -- ex1
    -- ex2
    -- ex3
    show_read_ex


