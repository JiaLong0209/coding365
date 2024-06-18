import unittest 

def add(a: int, b: int) -> int:
    return a + b

def multiply(a: int, b: int) -> float:
    return a * b

def add_string(a: str, b: str or None) -> str:
    return a + b



class Test1(unittest.TestCase):

    def test_print_string(self):
        self.assertEqual(add_string("hello ", "world"), "hello world")

        with self.assertRaises(TypeError):
            add_string(None, None)

    def test_multiply(self):
        for i in range(10):
            for j in range(10):
                self.assertEqual(multiply(i, j), i * j)

        with self.assertRaises(TypeError):
            multiply("str", "asdf")
            multiply(None, None)
            

    def test_multiply_float(self):
        for i in range(10):
            for j in range(10):
                self.assertEqual(multiply(i+0.5, j+0.5), (i+0.5) * (j+0.5))
        
    def test_add(self):
        for i in range(10):
            for j in range(10):
                self.assertEqual(add(i, j), i + j)



unittest.main()
