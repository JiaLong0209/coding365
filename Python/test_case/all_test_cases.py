import unittest
from functions import *

class TestFibo(unittest.TestCase):
    
    def test_negative(self):
        for i in range(-1, -1000, -1):
            self.assertEqual(fibo(i), -1)

    def test_zero_to_ten(self):
        answer = [0,1,1,2,3,5,8,13,21,34,55]
        for i,v in enumerate(answer):
            self.assertEqual(fibo(i), v)

    def test_type_error(self):
        with self.assertRaises(TypeError):
            fibo("str")
            fibo(23.42)
            fibo(None)
            fibo(True)
            fibo(False)

    def test_large_number(self):
        self.assertEqual(fibo(100), 354224848179261915075)
        self.assertEqual(fibo(200), 280571172992510140037611932413038677189525)
        self.assertEqual(fibo(300), 222232244629420445529739893461909967206666939096499764990979600)
        self.assertEqual(fibo(400), 176023680645013966468226945392411250770384383304492191886725992896575345044216019675)
        self.assertEqual(fibo(500), 139423224561697880139724382870407283950070256587697307264108962948325571622863290691557658876222521294125)
        self.assertEqual(fibo(600), 110433070572952242346432246767718285942590237357555606380008891875277701705731473925618404421867819924194229142447517901959200)
        self.assertEqual(fibo(700), 87470814955752846203978413017571327342367240967697381074230432592527501911290377655628227150878427331693193369109193672330777527943718169105124275)
        self.assertEqual(fibo(800), 69283081864224717136290077681328518273399124385204820718966040597691435587278383112277161967532530675374170857404743017623467220361778016172106855838975759985190398725)
        self.assertEqual(fibo(900), 54877108839480000051413673948383714443800519309123592724494953427039811201064341234954387521525390615504949092187441218246679104731442473022013980160407007017175697317900483275246652938800)

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

