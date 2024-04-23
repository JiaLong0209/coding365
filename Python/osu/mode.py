import numpy as np


class OsuMode:

    def __init__(self, perfectPlus=0, perfect=0, great=0, good=0, bad=0, miss=0):
        self.notes = np.sum(np.array(list(locals().values())[1:]))
        self.hits = list(locals().values())[1:-1]
        self.weights = []
        self.text = []
        self.accuracy = 0
        self.mode = self.__class__.__name__

    def calcAccuracy(self):
        total = 0
        for i, v in enumerate(self.hits):
            total += v * self.weights[i]
        accuracy = total / (self.notes * self.weights[0])
        return f'{round(accuracy * 100, 2)}%'

    def printInfo(self):
        self.printAccuracy()
        print(f'Mode: {self.mode}')

    def printAccuracy(self):
        print('-----------------')
        for i, v in enumerate(self.hits):
            print(f'{self.text[i]}: {v}')
        print(f'\nAccuracy: {self.accuracy}')


class Osu(OsuMode):

    def __init__(self, perfect=0, good=0, bad=0, miss=0):
        super().__init__(**dict(list(locals().items())[1:-1]))
        self.hits = list(locals().values())[1:-1]
        self.text = ['300', '100', '50', '0']
        self.weights = [300, 100, 50, 0]
        self.accuracy = self.calcAccuracy()


class Taiko(OsuMode):

    def __init__(self, perfect=0, good=0, miss=0):
        super().__init__(**dict(list(locals().items())[1:-1]))
        self.hits = list(locals().values())[1:-1]
        self.text = ['良', '可', '不可']
        self.weights = [300, 100, 0]
        self.accuracy = self.calcAccuracy()


class Mania(OsuMode):

    def __init__(self, perfectPlus=0, perfect=0, great=0, good=0, bad=0, miss=0):
        super().__init__(**dict(list(locals().items())[1:-1]))
        self.hits = list(locals().values())[1:-1]
        self.text = ['300+', '300', '200', '100', '50', 'miss']
        self.weights = [300, 300, 200, 100, 50, 0]
        self.accuracy = self.calcAccuracy()


class Catch(OsuMode):

    def __init__(self, fruits=0, drops=0, droplets=0, totalFruits=0, totalDrops=0, totalDroplets=0):
        print(np.array(list(locals().values()))[:])
        self.hits = np.array(list(locals().values()))[1:-3]
        self.total = np.array(list(locals().values()))[4:]
        self.text = ['fruits', 'drops', 'droplets']
        self.weights = [300, 300, 300]
        self.mode = self.__class__.__name__
        self.accuracy = self.calcAccuracy()

    def calcAccuracy(self):
        return f'{round((np.sum(self.hits)/np.sum(self.total)) * 100, 2)}%'

    def printInfo(self):
        self.printAccuracy()
        print(f'Mode: {self.mode}')

    def printAccuracy(self):
        print('-----------------')
        for i, v in enumerate(self.hits):
            print(f'{self.text[i]}: {v}')
        print(f'\nAccuracy: {self.accuracy}')




