import pandas as pd
import numpy as np

df = pd.DataFrame()

# df[0] = [1,2,3,4,5]
for i in range(0, 11):
    df[i] = [x+i*10 for x in range(0, 10)]

print(df)
print(df.head(3))
print(df.tail(5))
print(df.describe())

n = df.to_numpy()
print(n)

c = df.to_csv('num.csv')
print(c)