def calculate_expression(expression):
    stack = []
    num = 0
    operator = '+'

    for char in expression:
        if char.isdigit():
            num = num * 10 + int(char)
        elif char == '(':
            stack.append((num, operator))
            num = 0
            operator = '+'
        elif char == ')':
            prev_num, prev_operator = stack.pop()
            if prev_operator == '+':
                stack.append((prev_num + num, operator))
            elif prev_operator == '-':
                stack.append((prev_num - num, operator))
            elif prev_operator == '*':
                stack.append((prev_num * num, operator))
            elif prev_operator == '/':
                stack.append((prev_num // num, operator))
            num = 0
        elif char in "+-*/":
            operator = char

    if stack:
        prev_num, prev_operator = stack.pop()
        if prev_operator == '+':
            stack.append((prev_num + num, operator))
        elif prev_operator == '-':
            stack.append((prev_num - num, operator))
        elif prev_operator == '*':
            stack.append((prev_num * num, operator))
        elif prev_operator == '/':
            stack.append((prev_num // num, operator))
    else:
        stack.append((num, operator))

    result = stack[0][0]

    return result

# Input
expression = input()

# Output
result = calculate_expression(expression)
print(result)
