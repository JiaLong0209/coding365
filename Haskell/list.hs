#!/usr/bin/env runghc

a = [1,2,3,4,5] ++ [11,12,13,14,15] ++ [101, 102, 103]

b = 3:1:2: [4,5,6]

-- main = print b
-- main = print (b !! 0) -- index 0


c = [[1,2,3,4,5,6,7]]


-- main = print ([4,5,6]: c)
-- main = print (tail (c !! 0))
-- main = print (init (c !! 0))
-- main = print (take 3 (c !! 0))
-- main = print (reverse (c !! 0))
-- main = print (product (c !! 0))
-- main = print (5 `elem` (c !! 0)) -- check if 5 is in the list
-- main = print (elem 18 (c !! 0))


-- List range
d = [1..10]
e = [-5,5..100]
f = [100, 98 .. 0]
alphabet = ['a'..'z']
upper_alphabet = ['A'..'Z']

-- main = print (f) 
-- main = print ([0, 0.1 .. 1])
-- main = print (take 9 [0, 100.. ] )
-- main = print (take 9 (cycle [0, 100]))
-- main = print (take 9 (repeat [0, 100, 200]))
-- main = print (alphabet)


-- List Comprehension

g = [x | x <- [1.. 100], x*10 <= 100, x `mod` 2 == 0]

even_odd xset = [if odd x then "odd" else "even" | x <- xset] -- function
product_list xs ys = [ x*y | x <- xs, y <- ys]
length_func xs = sum [ 1 | _ <- xs]
remove_uppercase string = [ c | c <- string, c `elem` ['a'..'z'] ]
remove_odd_nested_list nlist = [[ x | x <- list, not (odd x)] | list <- nlist ]


-- main = print (g)
-- main = print (even_odd [1..10])
-- main = print (product_list [1,2,3] [10,20,30])
-- main = print (length_func [1 .. 100])
-- main = print (remove_uppercase "SDFпайапоеийжаJO*hSе#S(e)!VlMИОЙФE.еDJlI#*()!)*#(JF#*JраЕАИонфбoжоеасд)_()JVЙАСИОЙД!ёщЁщэあいうでぃ(S(JEF:SSEF}}QF)")
main = print (remove_odd_nested_list [[1..10],[50..60],[100..120]])










