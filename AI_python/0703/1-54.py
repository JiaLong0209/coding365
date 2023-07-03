l = [1,3,1,2,2,4,5,3]
l = list(set(l))
# l.sort(reverse=True)

print(sorted(l, reverse=True))

dic1 = {1:10, 2:20}
dic2 = {3:30, 4:40}
dic3 = {5:50, 6:60}

d = {}
for i in [dic1,dic2,dic3]:
    for j in i.items():
        d[j[0]] = j[1] 
print(d)

