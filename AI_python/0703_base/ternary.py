a, b = 10, 20

print( b if a < b else b)
      # tuple
print( (a, b) [a < b]) # is [a<b] true return index 1 

print({True: a, False: b} [a < b])


# lambda is more efficient than above two methods
# because in lambda  we are assure that
# only one expression will be evaluated unlike in
# tuple and Dictionary
print((lambda: b, lambda: a)[a < b]())