import tkinter as tk
from tkinter import messagebox

window = tk.Tk()
window.withdraw()

messagebox.showinfo('The message', 'This is a message box')

messagebox.showwarning('The warning', 'Icon is different')

messagebox.showerror('The warning', 'Something gose wrong')

messagebox.askokcancel('Hey, there!', 'You want it?')

MsgBox = messagebox.askquestion('Is this enough?','Exit?')  #可以直接回傳按鈕的文字
if MsgBox == 'yes':
    window.destroy()
