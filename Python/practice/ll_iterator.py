class NodeIter():
    def __init__(self, node):
        self.curr_node = node

    def __next__(self): # Iterator
        if self.curr_node is None:
            raise StopIteration
        node, self.curr_node = self.curr_node, self.curr_node.next
        return node

    def __iter__(self): # Iterable
        return self


class Node:
    def __init__(self,name):
        self.name = name
        self.next = None
    
    def __iter__(self): # Iterable
        return NodeIter(self)


n1 = Node('node-1')
n2 = Node('node-2')
n3 = Node('node-3')
n4 = Node('node-4')
n5 = Node('node-5')

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5

it = iter(n1)
first = next(it)

print(type(it), type(first))

for node in it:
    print(node.name)

