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

calc x = ((x * 100) ^ 2) + 10


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

---------- Map and Filter ---------

map' :: (a -> b) -> [a] -> [b]
map' _ [] = []
map' f (x:xs) = f x : map' f xs  

filter' :: (a -> Bool) -> [a] -> [a]
filter' _ [] = [] 
filter' p (x:xs) 
    | p x = x : filter' p xs  
    | otherwise = filter' p xs


quickSort :: (Ord a) => [a] -> [a]
quickSort [] = []
quickSort (x:xs) = quickSort (filter' (<=x) xs) ++ [x] ++ quickSort(filter' (>x) xs)

collatzChain :: (Integral a) => a -> [a]
collatzChain 1 = [1]
collatzChain n 
    | even n = n:collatzChain (n `div` 2)
    | odd n = n:collatzChain (n*3 + 1)

longChains = map (head) (filter (\xs -> length xs > 15) (map collatzChain [1..100]))

map_filter_ex = do 
    print(map' compareWithHundred [50, 75.. 150])
    print(map' (10*) [50, 75.. 150])
    print(map' (calc) [50, 75.. 150])
    print(map' (^2) [1..10])
    print([ x^2 | x <- [1..10]])
    print(filter' (>3) [1..10])
    print(quickSort [5,3,1,2,6,4])
    print(takeWhile (<1000) (filter odd (map (^2) [1..]))) 
    print(takeWhile (<1000) [ m | m <- [x^2 | x<-[1..]], odd m])
    print(collatzChain 10)
    print(longChains)
 

---------- Lambda Function --------

addThree :: (Num a) => a -> a -> a -> a
addThree = \x -> \y -> \z -> x + y + z
-- addThree x y z = x + y + z

sum' :: (Num a) => [a] -> a
sum' = foldl (+) 0
-- sum' = foldl1 (+) -- initial value is first element 
-- sum' xs = foldl (\acc x -> acc + x) 0 xs

elem' :: (Eq a) => a -> [a] -> Bool
elem' x xs = foldl (\acc y -> if x == y then True else acc) False xs

map'' :: (a -> b) -> [a] -> [b]
map'' f xs = foldr (\y acc -> f y : acc) [] xs
-- map'' f xs = foldl (\acc y -> acc ++ [f y]) [] xs -- low efficiency

maximum' :: (Ord a) => [a] -> a
maximum' = foldr1 (\x acc -> if x > acc then x else acc)

reverse' :: [a] -> [a]
reverse' = foldl (flip (:)) []

head' :: [a] -> a
head' = foldl1 (\acc x -> acc)

last' :: [a] -> a
last' = foldl1 (\acc x -> x) 

lambda_function_ex  = do 
    print(map (+3) [1,6,10,34])
    print(map (\x -> x+3) [1,6,10,34])
    print(sum' [100,200,300])
    print(elem' 10 [100,200,300])
    print(elem' 100 [100,200,300])
    print(map'' (+3) [1,6,10,34])
    print(reverse' [1,2,3,4,5])
    print(maximum' [1,2,3,4,5])
    print(head' [1,2,3,4,5])
    print(last' [1,2,3,4,5])

    print(scanl (+) 0 [1,2,3,4,5])
    print(scanr1 (*) [1,2,3,4,5])
    print(scanl1 (*) [1,2,3,4,5])
    print(takeWhile (<1000) (scanl1 (+) (map sqrt [1..])))

---------- Function Application Operator ----------

-- Definition
-- ($) :: (a -> b) -> a -> b
-- f $ x = f x

dollar_sign_ex = do 
    print(sum (map sqrt [1..10]))
    print(sum $ map sqrt [1..10])

    print(sqrt (3 + 4 + 10))
    print(sqrt $ 3 + 4 + 10)

    print(sum (filter (>10) (map (*2) [1..10])))
    print(sum $ filter (>10) $ map (*2) [1..10])


---------- Function Composition ---------

-- (.) :: (b -> c) -> (a -> b) -> a -> c  
-- f . g = \x -> f (g x)



-- Point free style / Pointless style

-- fn x = ceiling (negate (tan (cos (max 50 x))))
-- fn  = ceiling (negate (tan (cos (max 50)))) -- error
fn = ceiling . negate . tan . cos . max 50

oddSquareSum :: Integer
-- Style 1
-- oddSquareSum = 
--     let oddSquares = filter odd $ map (^2) [1..]
--         belowLimit = takeWhile (<10000) oddSquares
--     in sum belowLimit

-- Style 2
-- oddSquareSum = sum (takeWhile (<10000) (filter odd (map (^2) [1..])))

-- Style 3
oddSquareSum = sum . takeWhile (<10000) . filter odd . map (^2) $ [1..]


composition_ex  = do 
    print(map (\x -> negate (abs x)) [5,34,-5])
    print(map (negate . abs) [5,34,-5])

    print(map (\xs -> negate (sum (tail xs))) [[1..3], [3..6]])
    print(map (negate.sum.tail) [[1..3], [3..6]])

    print(sum (replicate 5 (max 8.3 10.3)))
    print((sum . replicate 5 . max 8.3) 10.3)
    print(sum . replicate 5 . max 8.3 $ 10.3)

    print(replicate 10 (product (map (*3) (zipWith max [0,1,1] [1,0,-123]))))
    print(replicate 10 . product . map (*3) . zipWith max [0,1,1] $ [1,0,-123])

    print(fn 10)
    print(oddSquareSum)

---------- Main Function ----------
main = do 
    -- curry_ex
    -- map_filter_ex
    -- lambda_function_ex
    -- dollar_sign_ex
    composition_ex 



