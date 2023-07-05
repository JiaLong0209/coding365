from functools import reduce

# def sumOfNumber(*nums):
#     return reduce(lambda x, y: x+y, nums)

# **挑戰看看，寫出能算出總和的函式
def sumOfNumber(*nums):
    sum = 0
    for i in nums:
        sum += i
    return sum

print(sumOfNumber(10,20,30))


# ***挑戰看看，寫出能算出字串中字母的頻率的函式
def frequencyOfAlphabet(str): 
    return {i : f'{round(str.count(i)/len(str)*100,2)}%' for i in str}

print(frequencyOfAlphabet("Hello world!!!"))

# ****挑戰看看，兩數之間的最大差距的自除數
def isSelfDivisor(s, i=0): 
    return True if len(s) == i else (False if (int(s) % int(s[i]) if s[i]!='0' else True) else isSelfDivisor(s, i+1))

def distanceList(list): 
    return [(list[i+1]-v if i+1<len(list) else v) for i,v in enumerate(list)][0:-1]

def maxDistance(a, b):
    return max(distanceList([x for x in range(a, b+1) if isSelfDivisor(str(x))]))

print(maxDistance(11, 20))


# frequencyOfAlphabet = lambda str: {i : f'{round(str.count(i)/len(str)*100,2)}%' for i in str}


# simple
# def isSelfDivisor(num, i=0):
#     if(len(num) == i):
#         return True
#     elif(num[i] == '0'):
#         return False
#     elif(int(num) % int(num[i])):
#         return False
#     else:
#         return isSelfDivisor(num, i+1)

# def distanceList(list): 
#     distList = []
#     for i,v in enumerate(list):
#         if(i+1<len(list)):
#             distList.append(list[i+1]-v)
#     return distList

# def maxDistance(a, b):
#     list = [x for x in range(a, b+1) if isSelfDivisor(str(x))]
#     distList = distanceList(list)
#     return max(distList)

# print(maxDistance(11, 21))


# other method

# def isSelfDivisor(num):
#     for i in num:
#         if(int(i)==0):
#             return False
#         elif(int(num) % int(i)):
#             return False
#         else:
#             continue 
#     return True


# def maxDistance(a, b):
#     list = [x for x in range(a, b+1) if isSelfDivisor(str(x))]
#     maxDist, prev = 0, list[0]
#     for cur in (list):
#         maxDist = max(cur-prev, maxDist)
#         prev = cur
#     return maxDist

# teacher version
# def selfDiv(n):
#   s = str(n)
#   for s1 in range(len(s)):
#     dm = int(int(s[s1]))
#     if dm != 0:
#       if n % dm != 0:
#         return False
#     else:
#       return False
#   return True

# a, b = 11, 20
# # a, b = 100, 900
# d, e = [], []
# max = 0
# for x in range(a,b+1):
#   if selfDiv(x) == True:
#     d.append(x)
# for y in range(0,len(d)-1):
#   if d[y+1] - d[y] > max:
#     max = d[y+1] - d[y]
#     e.clear()
#     e.append(d[y])
#     e.append(d[y+1])
# print(e)
# print(max)