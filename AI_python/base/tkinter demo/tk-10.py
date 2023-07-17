

import tkinter
from tkinter import ttk

win = tkinter.Tk()
win.title("NTUT EECS")
win.geometry("600x500+200+20")

'''
我們的Table，改用TreeView做
'''
tree = ttk.Treeview(win)
tree["columns"] = ("姓名", "年齡", "身高", "體重")
tree.column("姓名", width=100)
tree.column("年齡", width=100)
tree.column("身高", width=100)
tree.column("體重", width=100)
tree.heading("姓名", text="姓名")
tree.heading("年齡", text="年齡")
tree.heading("身高", text="身高")
tree.heading("體重", text="體重")
tree.insert("", 0, text="line1", values=("賴桑", "53", "181", "102"))
tree.insert("", 1, text="line2", values=("阿冰冰", "38", "170", "55"))
tree.insert("", 2, text="line3", values=("小莉", "28", "169", "50"))
tree.insert("", 3, text="line4", values=("米糕", "30", "172", "63"))
tree.insert("", 4, text="line5", values=("軟軟", "31", "175", "65"))
tree.insert("", 5, text="line6", values=("白白亮亮", "29", "175", "61"))
 
tree.pack()
win.mainloop()