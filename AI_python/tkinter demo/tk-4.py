import tkinter as tk

window = tk.Tk()
window.title('Login')

def OK_event():
    print("Account= ", acc.get(), " , Password= ", pwd.get(), " , Member=", member.get())

def validate(P):
    if str.isdigit(P) or P == '':
        return True
    else:
        return False

mylabel = tk.Label(window, text='Account:')
mylabel.grid(row=0, column=0)
acc = tk.StringVar()
myentry = tk.Entry(window, textvariable=acc)    #指定本欄位對應的變數名稱
myentry.grid(row=0, column=1)

mylabel2 = tk.Label(window, text='Password:')
mylabel2.grid(row=1, column=0)
pwd = tk.StringVar()
myentry2 = tk.Entry(window, textvariable=pwd, show='*')   #要求得用*顯示輸入的字
myentry2.grid(row=1, column=1)

mylabel3 = tk.Label(window, text='Member ID:')
mylabel3.grid(row=2, column=0)
vcmd = (window.register(validate), '%P')          #限制只能輸入數字
member = tk.StringVar()
myentry = tk.Entry(window, validate='key', validatecommand=vcmd, textvariable=member)
myentry.grid(row=2, column=1)

mybutton = tk.Button(window, text='OK', command=OK_event)
mybutton.grid(row=3, column=1)

window.mainloop()
