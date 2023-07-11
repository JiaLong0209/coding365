import numpy as np

#創建⼀個值從10～19的⼀維Numpy Array
a = np.arange(10, 20)
print(a)

#反轉向量(第⼀個元素成為最後⼀個)
print(a[::-1])

#創建⼀個帶有隨機值的3x3x3 Numpy Array
b = np.random.random(size=(3,3,3))
print(b)

#創建⼀個具有隨機值的 5x5 矩陣並找到最⼩值和最⼤值
c = np.random.random(size=(5,5))
print(c.min(), c.max())

# * 通過 np.pad 在 3 x 3 矩陣周圍添加寬度為1的邊框(⽤ 0 填充)
d = np.random.randint(low=0, high=10, size=(3,3))
print(np.pad(d,1))

#將 3x3 隨機矩陣歸⼀化為0~1，每⼀個元素都套⽤：（x - x min）/（x max - x min)
e = np.random.randint(low=0, high=100,size=(3,3))
print(np.array(list(map(lambda x: (x-e.min())/(e.max()-e.min()),e))))
# fn = lambda x : (x-e.min())/(e.max()-e.min())
# print(fn(e))

#給定⼀個⼀維陣列0~12，取所有2到9之外的元素
f = np.random.randint(low=0, high=13, size=20)
print(np.array([x for x in f if x<2 or x>9]))
# print(f[np.logical_or(f<2, f>9)])

# f1 = f[f<2]
# f2 = f[f>9]
# print(np.concatenate((f1,f2)))



