isor(num):
    for i in str(num):
        if(num % int(i)):
            return False
        else:
            continue 
    return True