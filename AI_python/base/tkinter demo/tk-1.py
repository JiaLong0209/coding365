import tkinter as tk

window = tk.Tk()                #主核心
window.title('Tkinter demo')
window.geometry('380x400')      #解析度，視窗的大小
window.resizable(False, False)  #規定固定大小，不可以變更
window.iconbitmap('Laisan.ico') #顯示插圖
window.mainloop()
