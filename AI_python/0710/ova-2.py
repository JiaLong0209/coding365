import requests
from bs4 import BeautifulSoup as soup

def getPage(url):
    return soup(requests.get(url).text, 'html.parser')

url =   "http://www.yahoo.com.tw"

page = getPage(url)

link = [i.get('href') for i in page.find_all('a')]

print(f'The current page has {len(link)} links:')
for i,v in enumerate(link):
    print(f'{i+1}. {v}')