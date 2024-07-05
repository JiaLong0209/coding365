#!/usr/bin/env runghc

a = (1,2,3)
b = [(1,2,3),(4,5,6)]

-- main = print b
-- main = print (([1,2], 4, [(2,4,(1,2,3))]))
-- main = print (fst (1,2))
-- main = print (snd (1,2))
-- main = print (zip [0..] [100..])
-- main = print ((3, 4))


right_triangles = [ (x,y,z) | x <- [1..100], y <- [1..100], z <- [1..100], x^2 + y^2 == z^2, x <= y, y <= z]

main = print (right_triangles)


