import pandas as pd
import requests
from bs4 import BeautifulSoup as soup

url = 'https://www.esunbank.com.tw/bank/personal/deposit/rate/forex/foreign-exchange-rates'
labels = ['幣種','即期買入','即期賣出','網銀買入','網銀賣出','現金買入','現金賣出']
selectors = ['span.button','.BBoardRate','.SBoardRate','.BuyIncreaseRate','.SellDecreaseRate','.CashBBoardRate','.CashSBoardRate']
data = {}

def getPage(url):
    return soup(requests.get(url).text, 'html.parser')

def update(value, i):
    data[labels[i]] = [value] if(data.get(labels[i]) == None) else [*data[labels[i]],value]

page = getPage(url)

for index,selector in enumerate(selectors):
    for i in page.select(selector):
        update(i.text.strip(),index)

df = pd.DataFrame.from_dict(data)
df.to_csv('spot_rate.csv')
print(df)

