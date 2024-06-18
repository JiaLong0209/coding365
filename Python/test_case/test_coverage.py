import unittest
import coverage

from all_test_cases import *

cover = coverage.Coverage()
cover.start()

suite = unittest.TestSuite()
suite.addTest(unittest.makeSuite(TestFibo))
suite.addTest(unittest.makeSuite(TestString))
suite.addTest(unittest.makeSuite(TestCompute))
unittest.TextTestRunner(verbosity=2).run(suite)

cover.stop()
cover.save()
cover.html_report()

