import numpy as np


class OsuMode:
    def __init__(self, perfectPlus=0, perfect=0, great=0, good=0, bad=0, miss=0):
        self.notes = np.sum(np.array(list(locals().values())[1:]))
        self.hits = list(locals().values())[1:]
        self.weights = []
        self.text = []
        self.accuracy = 0
        # print(dict(list(locals().items())[1:]))

    def calcAccuracy(self):
        total = 0
        for i, v in enumerate(self.hits):
            total += v * self.weights[i]
        accuracy = total / (self.notes * self.weights[0])
        return f'{round(accuracy * 100, 2)}%'

    def printInfo(self):
        print('-----------------')
        for i, v in enumerate(self.hits):
            print(f'{str(self.weights[i])}: {v}')
        print(f'\nAccuracy: {self.accuracy}')


class Taiko(OsuMode):
    def __init__(self, perfect=0, good=0, miss=0):
        super().__init__(**dict(list(locals().items())[1:-1]))
        self.hits = list(locals().values())[1:-1]
        self.weights = [300, 100, 0]
        self.accuracy = self.calcAccuracy()

    def printInfo(self):
        print('-----------------')
        for i, v in enumerate(self.hits):
            print(f'{str(self.weights[i])}: {v}')
        print(f'\nAccuracy: {self.accuracy}')
        print('Mode: Taiko')


class Mania(OsuMode):
    def __init__(self, perfectPlus=0, perfect=0, great=0, good=0, bad=0, miss=0):
        super().__init__(**dict(list(locals().items())[1:-1]))
        self.hits = list(locals().values())[1:-1]
        self.weights = [300, 300, 200, 100, 50, 0]
        self.accuracy = self.calcAccuracy()

    def printInfo(self):
        print('-----------------')
        for i, v in enumerate(self.hits):
            print(f'{str(self.weights[i]) if i else "300+"}: {v}')
        print(f'\nAccuracy: {self.accuracy}')
        print('Mode: Mania')


hits = {"perfect": 1835,
        "good": 50,
        "miss": 5
        }

hits_arr = np.array([1003, 342, 53])

# b = OsuMode(**hits)

mania = Mania(perfectPlus=13530, **hits)
mania.printInfo()

taiko = Taiko(**hits)
taiko.printInfo()
