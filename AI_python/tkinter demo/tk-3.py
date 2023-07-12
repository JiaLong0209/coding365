import tkinter as tk

window = tk.Tk()
window.title('Tkinter demo')
window.geometry('400x400')

#每個按鈕被按下時都會對應到一個副程式
def button_event():
    mybutton['text'] = 'Oh! You clicked.'

mybutton = tk.Button(window, text='Click', width=30, height=5, command=button_event)
mybutton2 = tk.Button(window, text='Exit', width=30, height=5, command=window.destroy)   #結束這個視窗

mybutton.pack(side=tk.TOP)
mybutton2.pack(side=tk.TOP)

window.mainloop()
