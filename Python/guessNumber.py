import random 
max, min = 100, 1
x = input(f'Enter a number ({min}, {max}):')
lose = False
times = 1
answer = random.randint(1, 100)

def again(cond=0):
    global x
    if (cond): print(f'Value error! The number must be {min}~{max}')
    x = int(input(f"Times: {times} ,try again ({min}, {max}): "))

# print(f'answer = {answer}')
while((x := int(x)) != answer):  # walrus operator :=
    while (x<min or x>max): again(1)
    if (max-min == 1 or times>=7): break
    if x < answer :
        print('Too small!')
        min = (x+1 if x < answer else min)
    elif x > answer: 
        print('Too big!')
        max = (x-1 if x > answer else max)
    else: break
    times += 1
    again()

if(times >= 7 and x != answer): 
    print(f'You loss, because you attemption times >= 7, answer is {answer}')
else:
    print(f'You win, answer is {answer}!') if x == answer else print(f'You loss, answer is {answer}!')
print(f'Attemption times: {times}')


