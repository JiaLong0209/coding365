import pandas as pd
import numpy as np

mask = pd.read_csv('maskdata.csv')
new = pd.DataFrame()
new['location']= [u'新北市新店區']
new['adult']=[0]
new['children']=[0]

for i,v in enumerate(mask['醫事機構地址']):
    if(v.startswith('新北市新店區')):
        new['adult'] += mask['成人口罩剩餘數'][i]
        new['children'] += mask['兒童口罩剩餘數'][i]

print(new)
