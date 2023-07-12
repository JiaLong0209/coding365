#把 Matplotlib 的統計圖 用 Tkinter 展示
import tkinter as tk
import matplotlib

matplotlib.use('TkAgg')

from matplotlib.figure import Figure
from matplotlib.backends.backend_tkagg import (
    FigureCanvasTkAgg,
    NavigationToolbar2Tk
)

class App(tk.Tk):
    def __init__(self):
        super().__init__()

        self.title('Tkinter x Matplotlib')

        #你的資料是這個
data = {
            'Braised Rice \n with Pork \n and Soy Sauce': 11.27,
            'stinky tofu': 11.16,
            'Large \n Intestine \n Mee Sua': 10.46,
            'Four kinds \n of sliced \n ice': 7.5,
            'rice noodle \n soup': 5.26
        }
        languages = data.keys()
        popularity = data.values()

        figure = Figure(figsize=(6, 4), dpi=100)
#自建 Toolbox
        figure_canvas = FigureCanvasTkAgg(figure, self)
        NavigationToolbar2Tk(figure_canvas, self)

        axes = figure.add_subplot()

        #畫出直條圖
        axes.bar(languages, popularity)
        axes.set_title('Taiwan Famous Food')
        axes.set_ylabel('Popularity')

        figure_canvas.get_tk_widget().pack(side=tk.TOP, fill=tk.BOTH, expand=1)


if __name__ == '__main__':
    app = App()
    app.mainloop()