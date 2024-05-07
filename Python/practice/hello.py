import dis

a = 10
b = 30
c = a+b

dis.dis( """
import dis
a = 10
b = 30
c = a+b
        """)

