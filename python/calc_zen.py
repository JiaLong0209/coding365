from functools import reduce
durations = []

path = "zen_time.txt"
f = open(path, 'r')

# date, from, to, duration, day
for line in f:
    if(line[0] == '#' or line == '\n'):
        continue
    # print(line)
    splited = line.split(',')
    # print(splited)
    if splited[3]:
        duration = splited[3]
        durations.append(int(duration))


duration_sum = reduce(lambda acc, cur: acc+cur, durations, 0)
print(f'Total zen time: {duration_sum}mins ({duration_sum/60}hours)')



