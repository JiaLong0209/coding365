def fibo(n: int) -> int:
    arr = list()
    for i in range(n+1):
        arr.append((i if i <= 1 else arr[i-1] + arr[i-2]))
    return arr[n] if n >= 0 else -1

def add(a: int, b: int) -> int:
    return a + b

def multiply(a: int, b: int) -> float:
    return a * b

def add_string(a: str, b: str or None) -> str:
    return a + b

def reverse_string(a: str) -> str:
    return a[::-1]

