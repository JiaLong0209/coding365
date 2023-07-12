
import pygame
from pygame.locals import *

pygame.init()
screen = pygame.display.set_mode((1600,800))
pygame.display.set_caption('Welcome to PyGame')

fix = './PyGame demo/'
image_surface = pygame.image.load(fix+"2128521_so.jpg").convert()
image_new = pygame.transform.scale(image_surface,(300,300))

#旋轉圖片45度
image_1 =pygame.transform.rotate(image_new,45)

#用rotozoom()轉0度，圖片只剩0.5倍
image_2 = pygame.transform.rotozoom(image_1,0,0.5)

while True:
    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            exit()
    screen.blit(image_surface,(0,0))
    pygame.display.update()
