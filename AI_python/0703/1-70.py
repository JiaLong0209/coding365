l = [1,3,1,2,2,4,5,3]

# Dictionary Comprehension 
d = {i : l.count(i)  for i in l}  

# Filter and Lambda function
print(dict(filter(lambda x: x[1]>1,d.items())))


# for i in l:
#     print(i)
#     d[i] += (1 if d[i] >= 1 else 0)
    # d[i] += 1 if d[i] >= 1 else d[i] = 1

