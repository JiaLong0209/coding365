#第一步永遠都是把整個目標網址的網頁內容之HTML抓回來
import requests
from bs4 import BeautifulSoup as soup

addr = "https://vipmbr.cpc.com.tw/mbwebs/ShowHistoryPrice_oil.aspx"

def getPage(url):
  ret = requests.get(url)
  p = ret.text
  doc = soup(p, "html.parser")
  return doc

myPage = getPage(addr)

#第二步把我們要的根據HTML標籤的特色撈出來
sp = myPage.find_all("span")
for s in sp:
  print(s.text)
