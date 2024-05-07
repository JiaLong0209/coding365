
class Node:
    def __init__(self,name):
        self.name = name
        self.next = None
    
    def __iter__(self): # Iterable
        node = self
        while (node is not None):
            yield node
            node = node.next 
        return 


n1 = Node('node-1')
n2 = Node('node-2')
n3 = Node('node-3')

n1.next = n2
n2.next = n3


for node in n1:
    print(node.name)



