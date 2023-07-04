def sum(*nums):
    result = 0
    for i in nums:
        result += i
    return result

print(sum(10,20,30))

def frequencyOfAlphabet(str):
    return {i : f'{round(str.count(i)/len(str)*100,2)}%' for i in str}

print(frequencyOfAlphabet("Hello world!!!"))