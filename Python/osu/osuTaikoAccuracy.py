import numpy as np

class taiko:
    def __init__(self, perfect, good, miss):
        self.totalNote = perfect + good + miss
        self.hits = [perfect, good, miss]
        self.weights = [1, 1/3, 0]
        self.text = ['300','100','0']
        self.calcAccuracy()        

    def calcAccuracy(self):
        self.accuracy, total = 0, 0
        for i,v in enumerate(self.hits):
            total += v * self.weights[i]
        accuracy = total / (self.totalNote * self.weights[0])
        self.accuracy = f'{round(accuracy*100,2)}%'

    def printInfo(self):
        print('---------------------')
        for i,v in enumerate(self.hits):
            print(f'{self.text[i]}: {v}')
        print()
        print(f'Accuracy: {self.accuracy}')

# 3 goods = 2 misses and 1 perfect
# becuase 1 good = 33.3%, 2 misses and 1 perfect can equal 33.3%
hits = {"perfect": 5,
        "good": 15,
        "miss": 10
        }

hits_arr = np.array([1003, 342, 53])

a = taiko(**hits)

a.printInfo()
a.printInfo()

b = taiko(*hits_arr*4)
b.printInfo() 