import requests
import json

url = 'https://data.coa.gov.tw/Service/OpenData/FromM/AquaticTransData.aspx'

p = requests.get(url).text

j = json.loads(p)

fish = "蝦仁"


print(j)

