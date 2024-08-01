#!/usr/bin/env runghc
-- import Data.List (foldl')
import qualified Math as M
import qualified Geometry.Sphere as Sphere
import qualified Geometry.Cuboid as Cuboid
import qualified Geometry.Cube as Cube

---------- Math Module -----------

isEven :: Int -> Bool
isEven x = x `mod` 2 == 0

sum :: Int -> Int -> Int
sum x y = x + y

math_ex = do 
    print(foldl Main.sum 0 $ filter isEven $ map M.square [1..5])

---------- Geometry Modules -----------

geometry_ex = do 
    print(Sphere.volume 1.2)
    print(Sphere.area 1.2)

    print(Cuboid.volume 1 2 3 )
    print(Cuboid.area 1 2 3 )

    print(Cube.volume 2)
    print(Cube.area 2)

---------- Main Function -----------
main :: IO ()
main = do
    geometry_ex

