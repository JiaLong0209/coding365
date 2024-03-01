from datetime import date 
from functools import reduce

durations = []
today = date.today()

read_file = "zen_time.txt"
result_file = "result.log"

f = open(read_file, 'r')

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
f.close()
f = open(result_file, 'a')

date_string = f'Date: {today} \n'
total_zen_time =  f'Total zen time: {duration_sum}mins ({round(duration_sum/60, 2)}hours) \n'
divider = '-'*40 + '\n'

print(date_string, end='')
print(total_zen_time, end='')
print(divider, end='')

f.seek(0)
f.write(date_string)
f.write(total_zen_time)
f.write(divider)

f.close()

