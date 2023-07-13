import tkinter as tk
import pandas as pd

data =[
   [
    {'name':'無','price':0},
    {'name':'A','price':120},
    {'name':'B','price':100},
    {'name':'C','price':180}
    ], [
    {'name':'無','price':0},
    {'name':'a','price':20},
    {'name':'b','price':30},
    {'name':'c','price':10}
    ],[
    {'name':'無','price':0},
    {'name':'I','price':20},
    {'name':'II','price':30},
    {'name':'III','price':10}
    ]
]
labels = ['主餐', '副餐','飲料']
window = tk.Tk()
window.title('GUI')
window.geometry('600x600')
window.resizable(False, False)

vars = [tk.IntVar() ,tk.IntVar() ,tk.IntVar()]
text = []
data_tk = [[],[],[]]

def showAll(index):
    text.append(tk.Label(window, text=labels[index]+': ', font=('Arial', 15)))
    text[index].grid(row=index*3, column=0)
    for i in data[index]:
        data_tk[index].append(tk.Radiobutton(text=f"{i['name']} ({i['price']}$)",variable=vars[index], value=i['price']))

    for i,item in enumerate(data_tk[index]):
        item.grid(row=1+index*3, column=i+1)

for i in range(0, 3):
    showAll(i)
sum_price = 0

def calculate():
    sum_price = vars[0].get() + vars[1].get() + vars[2].get()
    drink_text = tk.Label(window, text=f'總金額： {sum_price}', font=('Arial', 15))
    drink_text.grid(row=15, column=0)
    return 0


mybutton = tk.Button(window, text='calculate price', command=calculate)
mybutton.grid(row=13, column=2)

drink_text = tk.Label(window, text=f'總金額： {sum_price}', font=('Arial', 15))
drink_text.grid(row=15, column=0)


window.mainloop()

# side
# side_text = tk.Label(window, text='副餐：', font=('Arial', 15))
# side_text.grid(row=3, column=0)
# for i in side:
#     side_tk.append(tk.Radiobutton(text=f"{i['name']} ({i['price']}$)",variable=side_vars, value=i['price']))

# for i,item in enumerate(side_tk):
#     item.grid(row=4, column=i+1)


# # drink
# drink_text = tk.Label(window, text='副餐：', font=('Arial', 15))
# drink_text.grid(row=6, column=0)
# for i in drink:
#     drink_tk.append(tk.Radiobutton(text=f"{i['name']} ({i['price']}$)",variable=drink_vars, value=i['price']))

# for i,item in enumerate(drink_tk):
#     item.grid(row=7, column=i+1)
