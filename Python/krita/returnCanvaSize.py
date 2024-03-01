from krita import *

print(Krita.instance().documents())

for doc in Krita.instance().documents():
    print(doc.name())
    print(f'{doc.width()}x{doc.height()}')
    