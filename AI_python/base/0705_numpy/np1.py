import numpy as np

l = np.arange(12)
m = np.reshape(l, (2,3,2))
f = np.full((3,5,20,100), fill_value=2)

print(l)
print(m)
print(f)


print(type(l))
print(type(m))
print(f.size)