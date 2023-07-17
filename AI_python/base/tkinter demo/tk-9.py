
#另外一個方法：改用Frame
import tkinter as tkinter

window = tkinter.Tk()

for x in range(5):
    window.columnconfigure(x, weight=2, minsize=25)
    window.rowconfigure(x, weight=1, minsize=45)

    for y in range(0,6):
        framegrid = tkinter.Frame(master=window, relief=tkinter.RIDGE, borderwidth=1.5)
        framegrid.grid(row=x, column=y, padx=7, pady=3)
        labelgrid = tkinter.Label(master=framegrid, text=f"Row no. {x}\nColumn no. {y}")
        labelgrid.pack()

window.mainloop()