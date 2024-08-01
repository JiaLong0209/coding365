#!/usr/bin/env runghc

---------- Data.List --------
-- import Data.List (nub, sort, intersperse)
-- import Data.List hiding (sort)
import qualified Data.List as L
import Data.List 
import Geometry

numUni :: (Eq a) => [a] -> Int
numUni = length . nub

search :: (Eq a) => [a] -> [a] -> Bool
search needle haystack = 
    let n = length needle 
    in foldl (\acc cur -> if take n cur == needle then True else acc) False (tails haystack)


data_list_ex = do 
    print(nub [1,2,3,3,3,3,3,5])
    print(numUni [1,2,3,3,3,3,3,5])
    print(L.nub [1,2,3,3,5])

    print(intersperse '.' "yoshitaka")
    print(intercalate "..." ["abc", "ABC", "ZZZ"])
    print(transpose [[1..3], [4..6]])
    print(concat [[1..5],[10..12]])
    print(concatMap (replicate 3) [1..6])

    print(and $ map (>5) [1,2,3,4,5,5,6])
    print(any (>5) [1,2,3,4,5,5,6])
    print(all (>5) [1,2,3,4,5,5,6])

    print(take 13 $ iterate (*2) 1)
    print(splitAt 2 "asdfzxcvqwer")
    print(splitAt 2 [1,2,3,3,4,4,12])
    print(let (a,b) = splitAt 2 "xxoooo" in b ++ a)

    print(takeWhile (/=3) [1,2,2,2,23,3,31,2,2,3,3,3,4,5])
    print(dropWhile (/=3) [1,2,2,2,23,3,31,2,2,3,3,3,4,5])

    print(break (==4) [1..10])
    print(span (<=5) [1..10])

    print(sort $ ['a'..'z'] ++ ['A'..'Z'] ++ ['1'..'9'])
    print(group $ "aaabxcbddggdaa")
        
    print(inits [1..5])
    print(tails [1..5])
    print(let xs = "Hello" in zip (inits xs) (tails xs))

    print(search "app" "Apple, app, bad")

---------- Geometry Module --------


geometry_ex = do 
    print(Sphere.volume 1)
    print(Sphere.volume 2)



---------- Main Function ----------
main = do 
    -- data_list_ex
    geometry_ex


