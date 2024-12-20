#!/usr/bin/env runghc

module Geometry.Cuboid 
(volume, area) where

rectArea :: Float -> Float -> Float 
rectArea a b = a * b

volume :: Float -> Float -> Float -> Float
volume a b c = rectArea a b * c

area :: Float -> Float -> Float -> Float
area a b c = rectArea a b * 2 + rectArea a c * 2 + rectArea b c * 2

