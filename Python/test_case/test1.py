import unittest 

def add(a: int, b: int) -> int:
    return a + b

def multiply(a: int, b: int) -> float:
    return a * b

class TestCompute(unittest.TestCase):

    def test_multiply(self):
        for i in range(10):
            for j in range(10):
                self.assertEqual(multiply(i, j), i * j)

    def test_add(self):
        for i in range(10):
            for j in range(10):
                self.assertEqual(add(i, j), i + j)

unittest.main()
