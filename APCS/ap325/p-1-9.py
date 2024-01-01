def nqr(n, k, p):
    if k >= n:
        return 1  # no more rows, successful
    total = 0
    for i in range(n):  # try each column
        # check valid
        valid = True
        for j in range(k):
            if p[j] == i or abs(i - p[j]) == k - j:
                valid = False
                break
        if not valid:
            continue
        p[k] = i
        total += nqr(n, k + 1, p)
    return total

def main():
    p = [0] * 15
    for i in range(1, 12):
        print(nqr(i, 0, p), end=" ")

if __name__ == "__main__":
    main()

