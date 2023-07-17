import requests
from bs4 import BeautifulSoup as soup

addr = "http://www.yahoo.com.tw"

def getPage(url):
  ret = requests.get(url)
  p = ret.text
  doc = soup(p, "html.parser")
  return doc

myPage = getPage(addr)

link = list()
for element in myPage.find_all("a"):
  link.append(element.get("href"))

print( f"目前首頁下有 { len(link) } 個連結:" )
count = 1
for l in link:
  print( f"第 { count } 個連結 ==> { l } " )
  count += 1
