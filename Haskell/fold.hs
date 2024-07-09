#!/usr/bin/env runghc

import Data.List (foldl')
import Math (square)

-- Example functions
-- square :: Int -> Int
-- square x = x * x
--
isEven :: Int -> Bool
isEven x = x `mod` 2 == 0

sum :: Int -> Int -> Int
sum x y = x + y

main :: IO ()
main = do
    let arr = [1, 2, 3, 4, 5]
    let result = foldl' Main.sum 0 (filter isEven (map square arr))
    print result

