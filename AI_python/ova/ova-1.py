import urllib.request as ur

conn = ur.urlopen("https://www.cwb.gov.tw/V8/C/W/Town/Town.html?TID=6502800")
thedata = conn.read()

# print(thedata)
# print(conn.status)
# print(conn.getheader("Content-Type"))

for key,val in conn.getheaders():
  print(key, val)
