# for i in range(1,10):
#     for j in range(1,10):
#         print(f' {i} * {j} = {i * j} ', end=' |')
#     print('')

def table(a = 2, b = 1):
    return None if a > 9 else (print(),table(a+1,1) if b > 9 else (print(f' {a} * {b} = {a * b}', end=' '),table(a, b+1)))
table()

def table2(a = 2, b = 1):
    if a >= 9:
        return
    elif b >= 9:
        print()
        table2(a+1,9)
    else :
        print(f' {a} * {b} = {a * b} ',end = ' |')
        table2(a,b+1)