import requests
from bs4 import BeautifulSoup as soup
import pandas as pd

def getPage(url):
    return soup(requests.get(url).text,'html.parser')

url = "https://vipmbr.cpc.com.tw/mbwebs/ShowHistoryPrice_oil.aspx"
data = {}
page = getPage(url)
labels = [i.text for i in page.select('th')]

for tr in page.select('#MyGridView tr')[1:]:
    for i,v in enumerate(tr.select('span')):
        data[labels[i]] = [v.text] if (data.get(labels[i]) == None) else [*data[labels[i]],v.text]

df = pd.DataFrame.from_dict(data)
print(df)
df.to_csv('cpc.csv')



# labels = ['調價日期', '無鉛汽油92', '無鉛汽油95', '無鉛汽油98', '高級柴油', '二行程無鉛汽油', '煤油', '甲種漁船油(KL)', '乙種漁船油(KL)', '低硫燃料油(0.5%)(KL)', '甲種低硫燃料油/低硫鍋爐油(0.5%)(KL)', '特種低硫燃料油(KL)	', '低硫鍋爐油(1%)(KL)']
# for i,v in enumerate(page.select('span')[:-1]): 
#     index, text = i%13, v.text 
#     if(data.get(labels[index]) == None):
#         data[labels[index]]=[text]
#     else:
#         data[labels[index]].append(text)
