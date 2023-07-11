
# ***挑戰看看，寫出能算出字串中字母的頻率的函式
def frequencyOfAlphabet(str): 
    return {i : f'{round(str.count(i)/len(str)*100,2)}%' for i in str}

# ****挑戰看看，兩數之間的最大差距的自除數
def isSelfDivisor(s, i=0): 
    return True if len(s) == i else (False if (int(s) % int(s[i]) if s[i]!='0' else True) else isSelfDivisor(s, i+1))

def distanceList(list): 
    return [(list[i+1]-v if i+1<len(list) else v) for i,v in enumerate(list)][0:-1]

def maxDistance(a, b):
    return max(distanceList([x for x in range(a, b+1) if isSelfDivisor(str(x))]))

def plusOne(n): return n+1

def isPrime(n):
    return True if n == 2 else min([n % i for i in range(2, n)])!=0 if n > 2 else False

def myMap(fun, list): return [fun(i) for i in list]
