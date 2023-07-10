import sys

url = 'https://data.coa.gov.tw/Service/OpenData/FromM/AquaticTransData.aspx'
url = url + '?$filter=TypeName=尼羅紅魚'

u = url.encode(encoding='utf-8')

print(url)
print(u)
