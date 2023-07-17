
import pygame, sys

pygame.init()

screen = pygame.display.set_mode((500,300))
pygame.display.set_caption('Welcome to PyGame')
fix = './PyGame demo/'
image_surface = pygame.image.load(fix+"6f648f073e1d08933aa3ad4c81adb48a.jpeg")

#先設立一個範圍
rect1 = pygame.Rect(50,50,100,100)

#用設立的範圍對原圖進行切割
image_child= image_surface.subsurface(rect1)
rect2 = image_child.get_rect()

'''
Rect有以下的用法:


pygame.Rect.copy()
pygame.Rect.move()
pygame.Rect.move_ip()
pygame.Rect.inflate()
pygame.Rect.clamp()
pygame.Rect.union()
pygame.Rect.fit()
pygame.Rect.contains()
pygame.Rect.collidepoint()
pygame.Rect.colliderect()
'''

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
    screen.blit(image_child,rect1)
    pygame.display.update()
