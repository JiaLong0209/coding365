h, w, n = map(int, input().split())
arr = [[0 for _ in range(w)] for _ in range(h)]
for i in range(n): 
    r,c , t, num = map(int, input().split())
    for j in range(h): 
        for k in range(w): 
            arr[j][k] += num if abs(j-r) + abs(k-c) <= t else 0

for row in arr: 
    for i, v in enumerate(row): print(f"{v}{ '\n' if i == w-1 else ''}", end='')
