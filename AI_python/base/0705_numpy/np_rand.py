import numpy as np


r = np.random.random(size=(5,5))
a = np.random.normal(loc=10, scale=10.0, size=(3,3))
b = np.random.randint(low=0, high=10, size=(5,5))

print(r)
print(a)
print(b)
print(b[:,::-1])
print(b[::-1,::-1])
print(np.nonzero(b))

# f = open('text.txt', 'w')
# print(b, f)
# f.close()
