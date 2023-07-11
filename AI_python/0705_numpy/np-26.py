import numpy as np

#通過以下條件從Numpy Array [6, 7, 8, 10, 24, 45, 99,100] 中提取符合者
    #不能被 3 整除
    #可以被 5 整除
    #可以被 3 和 5 整除
a = np.array([6, 7, 8, 10, 24, 45, 99,100])

termList = [a%3!=0, a%5==0, a%15==0]
for t in termList: print(a[t])

# f1 = lambda x: x%3!=0
# f2 = lambda x: x%5==0
# f3 = lambda x: x%15==0
# FnList = [f1,f2,f3]
# for f in FnList : print(a[f(a)])

#創建⼤⼩為 10 的隨機Numpy Array並將最⼤值替換為 0
b = np.random.random(size=10)
b[np.argmax(b)] = 0
print(b)

#創建⼀個 4x4 矩陣，列值均從 0 到 3
c = np.random.random(size=(4,4))*3
print(c)

