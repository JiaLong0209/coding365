a = "This company is not poor at all."
b = "I'm not at all happy about it"
start = 'not'
end = 'at all'
print(a.replace('not poor at all', 'good'))

print(a.replace(a[a.find(start):a.find(end)+len(end)],'good'))
print(b.replace(b[b.find('not'):b.find('at all')+6],'good'))

print(type(start))