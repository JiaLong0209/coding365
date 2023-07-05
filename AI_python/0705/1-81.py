def factorial(n):
    return 1 if n ==0 else factorial(n-1)*n

def gcf(a,b):
    return a if b == 0 else gcf(b, a%b) 

print(factorial(5))
print(gcf(48, 36))