
def plusOne(n): return n+1

def isPrime(n):
    return True if n == 2 else min([n % i for i in range(2, n)])!=0 if n > 2 else False

def myMap(fun, list): return [fun(i) for i in list]

print(myMap(plusOne, [1,2,3,4,5,6,7,8,9]))
print(myMap(isPrime, [1,2,3,4,5,6,7,8,9]))


# def isPrime(n):
#     try:
#         return True if n == 2 else min([n % i for i in range(2, n)])!=0 
#     except:
#         return False
