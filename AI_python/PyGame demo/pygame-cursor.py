
import pygame
from pygame.locals import *
from sys import exit

BG_IMAGE = 'tanuki.jpeg'
MOUSE_IMAGE = 'mouse.PNG'
pygame.init()

#設定視窗的大小
screen = pygame.display.set_mode((500, 500), 0, 32)
pygame.display.set_caption('NTUT EECS')
bg = pygame.image.load(BG_IMAGE).convert()

mouse_cursor = pygame.image.load(MOUSE_IMAGE).convert_alpha()

while True:
  for event in pygame.event.get():
    if event.type == QUIT:
      pygame.quit()
      exit()

  screen.blit(bg, (0, 0))

  #滑鼠的x,y座標
  x, y = pygame.mouse.get_pos()

  #隱藏滑鼠
  pygame.mouse.set_visible(False)
  x -= mouse_cursor.get_width() / 2
  y -= mouse_cursor.get_height() / 2

  #用其他圖形代替滑鼠
  screen.blit(mouse_cursor, (x, y))
  pygame.display.update()