import tkinter as tk

window = tk.Tk()
window.title('Tkinter demo')
window.geometry('200x150')

#以後其他的元件，也可以用 bg 和 fg 來指定顏色
mylabel = tk.Label(window, text='Hello, everybody!', font=('Arial', 20), bg='yellow', fg='green')
mylabel.pack(side=tk.LEFT)

window.mainloop()
