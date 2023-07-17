import pandas as pd
import numpy as np

df = pd.read_csv('./0707/hw1.csv')
print(df)

#取得資料中唯一的，能用 unique()
rpt=np.array(df['report_id'])
ur=np.unique(rpt)
print(ur)
print(len(ur))
hos=np.array(df['hospital_id'])
uh=np.unique(hos)
print(uh)
print(len(uh))

#開始設計條件！！先預想 BMI

'''
資料科學家就是這樣幹！
每天看這些資料然後參考不同的資訊來源
想看看哪些可能會呈現資料不同的表徵
'''

df['BMI']=df['weight']/((df['height']/100.0)**2)
print(df)

#同來呈現，如果明顯有差異，那應該就是BMI

import matplotlib.pyplot as plt

female=df['sex']==0
female=np.unique(female)
male=df['sex']==1
male=np.unique(male)

arrsex=[len(female),len(male)]
plt.pie(arrsex,labels=['female','male'])
# plt.show()
plt.savefig('hw1.png')