import numpy as np
from mode import *
from score import *

games = [Osu(**osuScore), Taiko(**taikoScore), Mania(**maniaScore), Catch(**catchScore)]

for i in games:
    i.printInfo()
