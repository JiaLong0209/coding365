from functions import *
def reset(file):
    file.seek(0)

name = 'text.txt'
list = [x for x in range(1, 11)]
f = open(name, 'w')

print(list, file=f)
print(myMap(isPrime, list), file=f)
f.close()

f = open(name, 'r')

for line in f:
    print(line)
f.seek(50)
print(f.tell())

for line in f:
    print(line)
reset(f)
print(f.readline())

reset(f)
print(f.readlines())

f.close()
