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
main = print (5 `elem` (c !! 0)) -- check if 5 is in the list
-- main = print (elem 18 (c !! 0))







