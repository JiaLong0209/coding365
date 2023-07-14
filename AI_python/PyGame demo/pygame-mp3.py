
import pygame as pg
import sys

pg.init()

pg.mixer.init()

#設定視窗
width, height = 800, 600                      
screen = pg.display.set_mode((width, height)) 
pg.display.set_caption("NTUT EECS") 

#建立畫布bg
bg = pg.Surface(screen.get_size())
bg = bg.convert()
bg.fill((255,255,255))           #白色

#顯示
screen.blit(bg, (0,0))
pg.display.update()

s = pg.mixer.Sound("blackout_dulcimer2.mp3")
s.set_volume(1.0)            #設定音量大小，1是最大聲
s.play()                     #播放

while True:
    for event in pg.event.get():
        if event.type == pg.QUIT:
            pg.quit()
            sys.exit()