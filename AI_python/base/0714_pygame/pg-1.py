import pygame
import sys

size = [1080,900]
pygame.init()
screen = pygame.display.set_mode(size)
pygame.display.set_caption('Game')

bg = pygame.Surface(size).convert()
bg.fill((100,10,10))

f = pygame.font.SysFont('ubuntumono', 40)
text = f.render('OuO >_< O-O >u<', True, (200,200,200), (120,30,30))
fix = './PyGame demo/'

img = pygame.image.load(fix+"2128521_so.jpg").convert()
img_new = pygame.transform.scale(img, (400,400))

rect = pygame.Rect(250, 50, 150 ,150)
img_child = img_new.subsurface(rect)
img_c_new =  pygame.transform.scale(img_child, (400,400))


while True:
    for e in pygame.event.get():
        if e.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    screen.blit(bg, (0,0))
    screen.blit(text,(size[0]/2-text.get_width()/2, 100))
    screen.blit(img_new, [50,200])
    screen.blit(img_c_new, [550,200])

    pygame.display.update()
    pygame.time.Clock().tick(60)