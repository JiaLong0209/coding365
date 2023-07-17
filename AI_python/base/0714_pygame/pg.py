import pygame 
import sys
import random

FPS = 120
size = [1080,900]
pygame.init()
screen = pygame.display.set_mode(size)
pygame.display.set_caption('Game')

def updateColor(color,index):
    return round((color+random.random()*3 +index*random.random()*3)%255,2)

def bgRender():
    bg.fill(bgColor)
    a.fill([((x*2)%255) for x in bgColor])
    pygame.draw.circle(bg, [230,40,40],(bgColor[2]*5,400), bgColor[0], 0)
    screen.blit(bg,(0,0))
    screen.blit(a,(bgColor[0]*2.2,400))


bgColor = [10,30,30]
bg = pygame.Surface(screen.get_size())
bg = bg.convert()

a = pygame.Surface([x/2 for x in size])

running = True
while running:
    for e in pygame.event.get():
        if(e.type == pygame.QUIT):
            running = False
    for index,i in enumerate(bgColor):
        bgColor[index] = updateColor(i,index)

    bgRender()
    pygame.display.update()
    pygame.time.Clock().tick(FPS)

pygame.quit()
sys.exit()


