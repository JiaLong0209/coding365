
n, p = map(int, input().split())
a = list(map(int, input().split()))

M1 = {a[0]: 1}  # The first element appears once

for i in range(1, n):
    M2 = M1.copy()  # copy M1 to M2
    for e in M1:
        t = (e * a[i]) % p
        M2[t] = (M2.get(t, 0) + M1[e]) % p

    M2[a[i]] = (M2.get(a[i], 0) + 1) % p  # for {a[i]}
    M1 = M2

print(M1.get(1, 0))

for i in M1:
    print(i, M1[i])
