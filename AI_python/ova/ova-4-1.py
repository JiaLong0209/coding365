#第一步永遠都是把整個目標網址的網頁內容之HTML抓回來
import requests
from bs4 import BeautifulSoup as soup

addr = "https://www.esunbank.com.tw/bank/personal/deposit/rate/forex/foreign-exchange-rates"

def getPage(url):
  ret = requests.get(url)
  p = ret.text
  doc = soup(p, "html.parser")
  return doc

myPage = getPage(addr)

td = myPage.find_all("td")

try:
  f = open('EXG_20220721.txt','w')
  for t in td:
    f.write(t.text + "|")
    print(t.text)
  f.close()
except:
  print("Can not save file...")
