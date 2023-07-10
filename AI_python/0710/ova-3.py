import requests
from bs4 import BeautifulSoup as soup
import pandas as pd

def getPage(url):
    return soup(requests.get(url).text,'html.parser')

url = "https://vipmbr.cpc.com.tw/mbwebs/ShowHistoryPrice_oil.aspx"
data = {}
columns = ['調價日期', '無鉛汽油92', '無鉛汽油95', '無鉛汽油98', '高級柴油', '二行程無鉛汽油', '煤油', '甲種漁船油(KL)', '乙種漁船油(KL)', '低硫燃料油(0.5%)(KL)', '甲種低硫燃料油/低硫鍋爐油(0.5%)(KL)', '特種低硫燃料油(KL)	', '低硫鍋爐油(1%)(KL)']
page = getPage(url)
for i,v in enumerate(page.select('span')[:-1]): 
    index, text = i%13, v.text 
    if(data.get(columns[index]) == None):
        data[columns[index]]=[text]
    else:
        data[columns[index]].append(text)

# data[columns[0]] = data[columns[0]][:-1]
df = pd.DataFrame.from_dict(data)
print(df)
df.to_csv('cpc.csv')
# print(data)


