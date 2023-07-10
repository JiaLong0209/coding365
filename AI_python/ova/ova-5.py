import requests
import json

addr = 'https://data.coa.gov.tw/Service/OpenData/FromM/AquaticTransData.aspx'

ret = requests.get(addr)    #把指定網址的網頁內容抓下來變成HTML原始碼
p = ret.text

#這段建議用Pandas改寫看看
j = json.loads(p) #整個形成List

fish = input('請輸入想要查詢的魚貨名稱:')

for x in j:
  if x['魚貨名稱'].find(fish.strip()) >= 0:
    print('交易日期:', x['交易日期'], '\t市場名稱:', x['市場名稱'], '\t交易量', x['交易量'])
    print('上價', x['上價'], '\t中價', x['中價'], '\t下價', x['下價'], '\t平均價', x['平均價'])
    print()
