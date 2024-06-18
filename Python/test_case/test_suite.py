import unittest


import unittest 

def add(a: int, b: int) -> int:
    return a + b

def multiply(a: int, b: int) -> float:
    return a * b

def add_string(a: str, b: str or None) -> str:
    return a + b

def reverse_string(a: str) -> str:
    return a[::-1]


class TestCompute(unittest.TestCase):


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


class TestString(unittest.TestCase):

    def test_add_string(self):
        self.assertEqual(add_string("hello ", "world"), "hello world")

        with self.assertRaises(TypeError):
            add_string(None, None)

    def test_reverse_string(self):
        self.assertEqual(reverse_string("string"), "gnirts")
        self.assertEqual(reverse_string("self"), "fles")
        self.assertEqual(reverse_string("こんにちは"), "はちにんこ")



suite = unittest.TestSuite()
suite.addTest(unittest.makeSuite(TestCompute))
# suite.addTest(unittest.makeSuite(TestString))
suite.addTest(TestString("test_reverse_string"))

unittest.TextTestRunner(verbosity=2).run(suite)



