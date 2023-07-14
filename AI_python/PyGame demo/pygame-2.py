
import pygame, sys
from pygame.locals import *

pygame.init()

#注意！PyGame用笛卡爾座標系統
screen = pygame.display.set_mode((500,400))

pygame.display.set_caption('PyGame demo')
clock = pygame.time.Clock()

surface1 = pygame.Surface((500,400))

#PyGame用RGB外(前三個)，還有透明度(0~255)
Black = (0,0,0,128)
White = (255,255,255)
Red = (255,0,0,0)
Green = (0,255,0)
Blue = (0,0,255)
Yellow = (255,255,0,128)

#把畫布填入白色
surface1.fill(White)

pygame.draw.polygon(surface1,Green,((146,0),(291,106),(236,277),(56,277),(0,106)))
pygame.draw.line(surface1,Blue,(60,60),(120,60),4)
pygame.draw.line(surface1,Blue,(120,60),(60,120))
pygame.draw.line(surface1,Blue,(60,120),(120,120),4)
pygame.draw.circle(surface1,Yellow,(300,50),20,0)
pygame.draw.ellipse(surface1,Red,(300,250,40,80),2)
pygame.draw.rect(surface1,(0,255,255),(200,150,100,50))

pixObj=pygame.PixelArray(surface1)
pixObj[480][380]=Black
pixObj[482][382]=Black
pixObj[484][384]=Black
pixObj[486][386]=Black
pixObj[488][388]=Black
del pixObj

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    #畫布可以畫好後，貼到畫面上任何位置
    screen.blit(surface1,(0,0))

    pygame.display.update()
    clock.tick(60)
