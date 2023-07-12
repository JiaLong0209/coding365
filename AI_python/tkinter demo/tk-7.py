import tkinter as tk

def choose():
    print(testVar.get())
    print(test2Var.get())
    print(radioVar.get())

window = tk.Tk()
window.title('GUI')
window.geometry('380x400')
window.resizable(False, False)

testVar = tk.IntVar()
test = tk.Checkbutton(text="這是啟用的勾選框",state="normal",variable=testVar)
test.pack()
test2Var = tk.IntVar()
test2 = tk.Checkbutton(text="這是禁用的勾選框",state="disabled",variable=test2Var)
test2.pack()

radioVar = tk.IntVar()
radio1 = tk.Radiobutton(text='Button1',variable=radioVar, value=1) 
radio2 = tk.Radiobutton(text='Button2',variable=radioVar, value=2) 
radio3 = tk.Radiobutton(text='Button3',variable=radioVar, value=3)

radio1.place(x=40,y=125)
radio2.place(x=140,y=125)
radio3.place(x=240,y=125)

menu = tk.Menu(window)
window.config(menu=menu)
menu2 = tk.Menu(menu, tearoff=0)
menu2.add_command(label='開啟')
menu2.add_command(label='儲存')
menu2.add_command(label='另存')
menu.add_cascade(label='功能',menu=menu2)

mybutton = tk.Button(window, text='Know choice', command=choose)
mybutton.pack()

window.mainloop()
