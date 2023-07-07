import pandas as pd
import numpy as np

# 算出新北市新店區的成人、兒童口罩剩餘總和
mask = pd.read_csv('maskdata.csv')
NTC = pd.DataFrame()
NTC['location']= [u'新北市新店區']
NTC['adult']=[0]
NTC['children']=[0]
for i,v in enumerate(mask['醫事機構地址']):
    if('新北市新店區' in v):
        NTC['adult'] += mask['成人口罩剩餘數'][i]
        NTC['children'] += mask['兒童口罩剩餘數'][i]

print(NTC, end='\n\n')

# 挑戰看看，算出各縣市的成人、兒童口罩剩餘總和
columns = ['location','adult','children']
mask = pd.read_csv('maskdata.csv')
mask_dict = {'location':[],'adult':[],'children':[]}

for i,v in enumerate(mask['醫事機構地址']):
    location = v[:3]
    if(location not in mask_dict[columns[0]]):
        mask_dict[columns[0]].append(location)
        mask_dict[columns[1]].append(mask['成人口罩剩餘數'][i])
        mask_dict[columns[2]].append(mask['兒童口罩剩餘數'][i])
    else:
        index = mask_dict[columns[0]].index(location)
        mask_dict[columns[1]][index] += mask['成人口罩剩餘數'][i]
        mask_dict[columns[2]][index] += mask['兒童口罩剩餘數'][i]

mask_df = pd.DataFrame.from_dict(mask_dict)
print(mask_df)