l = [1,3,1,2,2,4,5,3]
l = list(set(l))
# l.sort(reverse=True)

print(sorted(l, reverse=True))

dic1 = {1:10, 2:20}
dic2 = {3:30, 4:40}
dic3 = {5:50, 6:60}

d = {}
# for i in [dic1,dic2,dic3]:
#     for key, value in i.items():
#         d[key] = value

for i in [dic1,dic2,dic3]:
    for index, key in enumerate(i):
        d[key] = i[key]
print(d)

