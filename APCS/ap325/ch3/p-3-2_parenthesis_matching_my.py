while True:
    try:
        inp = input()
    except EOFError:
        break
    s, e , l, r = [], False, '({[', ')}]'
               
    for c in inp:
        if c in l:
            s = [*s,c]
        else:
            if not s or r[l.index(s.pop())] != c:
                e = True
                break

    print('no' if s or e else 'yes')
