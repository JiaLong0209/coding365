# **挑戰看看，寫出能算出總和的函式
def myF(*z):
    t = 0;
    for i in z:
        t += i
    return t 
    
a = 1
b = 2
c = 3
d = 4
myF(a,b,c,d)


# ***挑戰看看，寫出能算出字串中字母的頻率的函式
def charCounter(str):
    dic = {}
    str = str.lower()
    str_set = set(str)
    length = len(str)

    for i in str_set:
        count = 0
        for j in str:
            if(j == i):
                count += 1
        f = round(count/length*100)
        dic[i] = "%s%%" %f
    return dic

print(charCounter("He sdfsdsf llo Wo sdff sdfnme rld!"))


# ****挑戰看看，兩數之間的最大差距的自除數
def isSelfDivisor(num):
    num_str = str(num)
    le = len(num_str)
    c = 0
    for i in num_str:
        if(int(i) == 0):
             return False
        if(num % int(i) == 0):
            c += 1
    if(c == le):
        return True
    else:
        return False

def Fn(a ,b):
    list = []
    gapList = [0,0]
    m = 0
    for i in range(int(a), int(b)):
        if(isSelfDivisor(i)):
            list.append(i)
    print(list)
    for index,num in enumerate(list):
        if index+1 in range(len(list)):
            if(list[index+1] - list[index] > m):
                m = list[index+1] - list[index]
                gapList[0] = list[index]
                gapList[1] = list[index+1]
        if index+1 not in range(len(list)):
            return gapList

x = input("開始的數值：")
y = input("結束的數值：")
Fn(x,y)