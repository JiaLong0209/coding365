def sumOfNumber(*nums):
    sum = 0
    for i in nums:
        sum += i
    return sum

print(sumOfNumber(10,20,30))

# frequencyOfAlphabet = lambda str: {i : f'{round(str.count(i)/len(str)*100,2)}%' for i in str}

def frequencyOfAlphabet(str): return {i : f'{round(str.count(i)/len(str)*100,2)}%' for i in str}
    
print(frequencyOfAlphabet("Hello world!!!"))


# def isDivisor(num, i=0):
    # if(len(num) == i):
    #     return True
    # else:
    #     if(int(num) % int(num[i]) ):
    #         return False
    #     else:
    #         return isDivisor(num, i+1)


# def isDivisor(num):
    # for i in str(num):
    #     if(num % int(i)):
    #         return False
    #     else:
    #         continue 
    # return True

def isDivisor(num, i=0): return True if len(num)==i else (False if int(num) % int(num[i]) else isDivisor(num, i+1))

def maxDistanceOfDivisor(a, b):
    list = [x for x in range(a, b) if isDivisor(str(x))]
    maxDist, prev = 0, list[0]
    for value in (list):
        maxDist = max(value-prev, maxDist)
        prev = value
    return maxDist

print(maxDistanceOfDivisor(11, 20))