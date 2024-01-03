while True:
    try:
        inp = input()
    except EOFError:
        break

    stack = []
    error = False
    for char in inp:
        if char in "([{":
            stack.append(char)
        else:
            if not stack or ")]}"["([{".index(stack.pop())] != char:
                error = True
                break

    if stack or error:
        print("no")
    else:
        print("yes")

