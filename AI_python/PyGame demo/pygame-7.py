
import pygame
import sys

pygame.init()
size = width, height = 600, 400
bg = (255, 255, 255)

fix = './PyGame demo/'
img = pygame.image.load(fix+"169280225.gif")

position = img.get_rect()
screen = pygame.display.set_mode(size)
pygame.display.set_caption("神槍少女")

while True:
    site = [0, 0]
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

        #可以用鍵盤方向按鈕控制移動
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_UP:
                site[1] -= 8
            if event.key == pygame.K_DOWN:
                site[1] += 8
            if event.key == pygame.K_LEFT:
                site[0] -= 8
            if event.key == pygame.K_RIGHT:
                site[0] += 8

    position = position.move(site)
    screen.fill(bg)
    screen.blit(img, position)

    pygame.display.flip()
