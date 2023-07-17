
# -*- coding: utf-8 -*-

import tkinter as tk
import tkinter.ttk as ttk

def choice():
    print(mycombobox.current(), mycombobox.get())   #用get()抓文字選項內容

def combobox_selected(event):
    if mycombobox.current() == 0:
        labelText.set('常吃消化好')
    elif mycombobox.current() == 1:
        labelText.set('補腦聖品')
    elif mycombobox.current() == 2:
        labelText.set('冬天感冒退火')
    elif mycombobox.current() == 3:
        labelText.set('夏天加愛玉')
    elif mycombobox.current() == 4:
        labelText.set('四季皆宜')

window = tk.Tk()
window.title('Tkinter demo')
window.geometry('200x150')

mycombobox = ttk.Combobox(window)
mycombobox['values'] = ['apple','banana','orange','lemon','tomato']
mycombobox.pack(pady=10)
mycombobox.current(0)       #目前是選到哪一個、預定哪一個，都用current()

mycombobox.bind('<<ComboboxSelected>>', combobox_selected)  #一編選一邊就動態回應

mybutton = tk.Button(window, text="Know the choice", command=choice)
mybutton.pack()

labelText = tk.StringVar()
mylabel = tk.Label(window, textvariable=labelText, height=5, font=('細明體', 12))
mylabel.pack()

window.mainloop()
