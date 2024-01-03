N = 100010

def distinct(from_arr, to_arr, n):
    if n < 1:
        return 0
    v = list(from_arr[:n])  # copy from_arr to v
    v.sort()
    to_arr[0] = v[0]
    num = 1  # number of distinct numbers
    for i in range(1, n):
        if v[i] != v[i - 1]:  # distinct
            to_arr[num] = v[i]
            num += 1
    return num

def main():
    a = [0] * N
    b = [0] * N
    n = int(input())
    a[:n] = map(int, input().split())
    k = distinct(a, b, n)
    print(k)
    for i in range(k - 1):
        print(b[i], end=" ")
    print(b[k - 1])

if __name__ == "__main__":
    main()

