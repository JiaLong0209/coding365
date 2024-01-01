from itertools import permutations

def nq(n):
    p = list(range(n))  # first permutation
    total = 0
    for perm in permutations(p):  # iterate through all permutations
        # check valid
        valid = all(abs(perm[i] - perm[j]) != j - i for i in range(n) for j in range(i + 1, n))
        if valid:
            total += 1
    return total

def main():
    for i in range(1, 8):
        print(nq(i), end=" ")

if __name__ == "__main__":
    main()

