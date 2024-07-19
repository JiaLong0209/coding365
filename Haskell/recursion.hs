#!/usr/bin/env runghc

---------- Recursion ----------
maximum' :: (Ord a) => [a] -> a
maximum' xs = case xs of 
    [] -> error "Empty list"
    [x] -> x
    (x:xs) ->  if x > maximum' xs then x else maximum' xs



-- Num isn't the subset of Ord 
replicate' :: (Ord i, Num i) => a -> i -> [a]
replicate' x n 
    | n <= 0 = []
    | otherwise = x:replicate' x (n-1)


take' :: (Num i, Ord i) => i -> [a] -> [a]
take' n xs = if n <= 0 then [] else case xs of 
        [] -> []
        (x:xs) -> x : take' (n-1) xs 


reverse' :: [a] -> [a]
reverse' xs = case xs of 
    [] -> []
    (x:xs) -> reverse' (xs) ++ [x]


infinite_list' :: a -> [a]
infinite_list' x = x:infinite_list' x


zip' :: [a] -> [b] -> [(a,b)]
zip' [] _ = []
zip' _ [] = []
zip' (x:xs) (y:ys) = (x,y) : zip' xs ys


elem' :: (Eq a) => a -> [a] -> Bool
elem' n xs = case xs of 
    [] -> False
    (x:xs) | n == x -> True | otherwise -> n `elem'` xs


quicksort :: (Ord a) => [a] -> [a]
quicksort xs = case xs of 
    (x:xs) -> quicksort [a | a<-xs, a<=x] ++ [x] ++ quicksort [a | a<-xs, a>=x]
    [] -> []


---------- Main fcunt ----------
recursion_ex = do 
    print(maximum' [1,2,10,3,5])
    print(replicate' (1,2) 5)
    print(take' 3 [1,2,3,4,5])
    print(reverse' [1,2,3])
    print(take' 10 (infinite_list' [1,3]))
    print(zip' [1,2,3] [10,20,30])
    print(elem' 10 [1,2,10])
    print(elem' 12 [1,2,10])
    print(quicksort [5,2,3,1,4,6,7,9,8,10])

main = do 
    recursion_ex


