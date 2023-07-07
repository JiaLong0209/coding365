import numpy as np
import pandas as pd
import matplotlib 
import matplotlib.pyplot as plt
# matplotlib.use('Agg')

x = np.arange(0, 8*np.pi, 0.25)
y = np.sin(x)

plt.subplot(221)
plt.plot(x,y)

plt.subplot(222)
plt.bar(x,y,width=0.2)

plt.subplot(223)
plt.hist(x,bins=150, density=False)

plt.subplot(224)
plt.scatter(x,y, s=3, c='#f35')

plt.savefig('image1.png')

print(x)
print(y)