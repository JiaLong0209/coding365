
import sys
import pygame
import random

pygame.init()

screen = pygame.display.set_mode((500,700))
pygame.display.set_caption('Welcome to PyGame')

font = 'ubuntumono'
fonts = pygame.font.get_fonts()
rand = random.randint(0, len(fonts))
print(f'Total fonts count: {len(fonts)}')
print(rand, fonts[rand])

f = pygame.font.SysFont(['ubuntumono'],50)
text = f.render("I love coding",True,(255,0,0),(0,0,0))

#顯示的字串，第二項參數只是要否消除鋸齒

textRect =text.get_rect()
textRect.center = (200,200)
screen.blit(text,textRect)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
    pygame.display.flip()
