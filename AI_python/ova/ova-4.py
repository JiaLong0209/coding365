import requests
from bs4 import BeautifulSoup as soup

addr = 'https://www.esunbank.com.tw/bank/personal/deposit/rate/forex/foreign-exchange-rates'

def getPage(url):
    ret = requests.get(url)    #把指定網址的網頁內容抓下來變成HTML原始碼
    p = ret.text
    doc = soup(p, "html.parser") #再把HTML原始碼丟給BeautifulSoup自動根據HTML標籤分類整理
    return doc

myPage = getPage(addr)   #先抓到整理後的網頁內容

sl = myPage.find_all('td')

print('幣別\t\t即期買入\t即期賣出\t網銀買入\t網銀賣出\t現金買入\t現金賣出')
print('====\t\t========\t========\t========\t========\t========\t========')

for i in range(0,15):
    thisLine = ''   #準備一個列, 空字串, 可以讓每一欄都更新
    for j in range(0,7):
        s = sl[i*7+j].text  #抓出一欄
        if j == 0:  #如果是第0欄, 就是幣別
            s = s.replace('\n','')
            thisLine = thisLine + s + '\t'  #把這一欄的內容, 加入列中
        else: #都是數值, 就是台幣的金額
            if s.strip() != '': #如果這一欄不是空字串, 表示是數值, 加入列中
                thisLine = thisLine + s + '\t\t'
            else:
                #thisLine = thisLine + '0.0\t\t'
                thisLine = thisLine + '\t\t'  #空字串, 直接加入列中, 表示沒有資料
    print(thisLine)
