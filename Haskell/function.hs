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
    

---------- Guards ----------

max' :: (Ord a) => a -> a -> a
max' a b 
    | a > b = a 
    | otherwise = b

compare' :: (Ord a) => a -> a -> Ordering
a `compare'` b 
    | a > b = GT 
    | a == b = EQ
    | otherwise = LT


guards = do 
    print(max' 5 10)
    print(max' 22 10)
    print(compare' 10 20)
    print(compare' 54 20)

---------- Where ----------

bmiTeller :: (RealFloat a) => a -> a -> String
bmiTeller w h
    | bmi <= skinny = "Skinny"
    | bmi <= normal = "Normal"
    | bmi <= fat = "Fat"
    | otherwise = "Very fat"
    where
    bmi = w / h ^ 2
    skinny = 18.5
    normal = 25.0
    fat = 30.0

initials :: String -> String -> String
initials f_name l_name = [f] ++ ". " ++ [l] ++ "."
    where 
    (f:_) = f_name
    (l:_) = l_name

calcBmis :: (RealFloat a) => [(a, a)] -> [a]
calcBmis xs = [bmi w h | (w, h) <- xs]
    where bmi w h = w / (h ^ 2)


bmis = [(w, h) | w <- [40,45..55], h <- [1.4, 1.6.. 2.0]]
where_ex = do 
    print(bmiTeller 51 1.6)
    print(initials "Jialong" "Long")
    print(calcBmis bmis)

---------- Main Function ----------
main = do 
    -- pattern_match
    -- guards
    where_ex

