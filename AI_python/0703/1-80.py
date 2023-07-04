# **挑戰看看，寫出能算出總和的函式
def sumOfNumber(*nums):
    sum = 0
    for i in nums:
        sum += i
    return sum

print(sumOfNumber(10,20,30))


# ***挑戰看看，寫出能算出字串中字母的頻率的函
def frequencyOfAlphabet(str): return {i : f'{round(str.count(i)/len(str)*100,2)}%' for i in str}
# frequencyOfAlphabet = lambda str: {i : f'{round(str.count(i)/len(str)*100,2)}%' for i in str}

print(frequencyOfAlphabet("Hello world!!!"))


# ****挑戰看看，兩數之間的最大差距的自除數
def isSelfDivisor(num, i=0): return True if len(num) == i else (False if int(num) % int(num[i]) else isSelfDivisor(num, i+1))

def maxDistance(a, b):
    list = [x for x in range(a, b) if isSelfDivisor(str(x))]
    maxDist, prev = 0, list[0]
    for value in (list):
        maxDist = max(value-prev, maxDist)
        prev = value
    return maxDist

print(maxDistance(11, 20))


# def isSelfDivisor(num, i=0):
    # if(len(num) == i):
    #     return True
    # else:
    #     if(int(num) % int(num[i]) ):
    #         return False
    #     else:
    #         return isSelfDivisor(num, i+1)


# def isSelfDivisor(num):
    # for i in str(num):
    #     if(num % int(i)):
    #         return False
    #     else:
    #         continue 
    # return True
