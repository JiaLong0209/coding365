
import pygame, sys

pygame.init()

#座標要先y後x
screen = pygame.display.set_mode((900,500))

pygame.display.set_caption('Welcome to PyGame')
fix = './PyGame demo/'

#計算的單位是千分之一秒

t = pygame.time.get_ticks() #記住程式開始的時間

t1 =pygame.time.wait(3000)  #暫停三秒

image_surface = pygame.image.load(fix+"6f648f073e1d08933aa3ad4c81adb48a.jpeg")
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
    screen.blit(image_surface,(0,0))
    pygame.display.update()
