def calculate_expression(expression):
    stack = []
    num = 0
    operator = '+'

    for char in expression:
        if char.isdigit():
            num = num * 10 + int(char)
        elif char in "+-*/":
            if operator == '+':
                stack.append(num)
            elif operator == '-':
                stack.append(-num)
            elif operator == '*':
                stack[-1] *= num
            elif operator == '/':
                stack[-1] = int(stack[-1] / num)

            num = 0
            operator = char
            print(stack ,num )

    if operator == '+':
        stack.append(num)
    elif operator == '-':
        stack.append(-num)
    elif operator == '*':
        stack[-1] *= num
    elif operator == '/':
        stack[-1] = int(stack[-1] / num)

    print(stack ,num )

    return sum(stack)

# Input
expression = input()

# Output
result = calculate_expression(expression)
print(result)


