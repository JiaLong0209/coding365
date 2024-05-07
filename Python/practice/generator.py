def gen(num):
    while num <= 10:
        temp = yield num
        if temp is not None:
            num = temp
        num += 1
    return # raise StopIteration

g = gen(5)

for i in g:
    print(i, end=' ')
print()

g = gen(0)
print(f"First: {next(g)}")
print(f"Send: {g.send(6)}")

for i in g:
    print(i, end=' ')
print()
