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
    print ("ex1:")
    print (addTwo 10 20)

fac :: Integer -> Integer -- big integer
fac n = product [1..n]


ex2 = do
    print ("ex2:")
    print(fac 19) 
    print(typeOf fac)

ex3 = do
    print ("ex3:")
    print(5 == 5)
    print(5 /= 5)
    print(5 `compare` 3)
    print(1 `compare` 3)
    print(3 `compare` 3)

show_read_ex = do
    print ("show_read_ex: ")
    -- show: convert to string
    print(show [1,2,3])
    print(show "adfjoi")

    -- read: string to other type
    print(read "[1,2,3]" ++ [5,4])
    print((read "4" :: Float) * 4)
    print(read "(3, 'a')" :: (Double, Char))

enum_type = do 
    -- Enum Class: succ, pred functions
    print(succ 'B')
    print([3..10])

bounded_type = do 
    -- Bouneded Class: minBound, maxBound functions
    print(minBound :: Int)
    print(maxBound :: Int)

    print(minBound :: Bool)
    print(maxBound :: Bool)

    print(minBound :: Char)
    print(maxBound :: Char)

    print(fac 10)

num_type = do 
    -- Integral: Int, Integer
    -- Floating: Float, Double
    -- Num: Integral, Floating
    
    -- fromIntegral :: (Num b, Integral a) => a -> b
    print(fromIntegral (length [1,2,3,4,5]) + 7.4) -- Int to Float
    print( (read (show (length [1,2,3,4,5])) :: Float) + 7.4) -- Int to Float



main = do 

    num_type
    -- bounded_type
    -- enum_type
    -- show_read_ex
    -- ex1
    -- ex2
    -- ex3



