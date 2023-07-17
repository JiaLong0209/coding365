
import tkinter as tk
from PIL import Image, ImageTk

root = tk.Tk()
root.title('NTUT EECS')
root.geometry('800x600')

img = Image.open('tanuki.jpeg')
tk_img = ImageTk.PhotoImage(img)

label = tk.Label(root, image=tk_img, width=800, height=600, anchor='nw')  # 設定 anchor
label.pack()

root.mainloop()