
import pygame
from sys import exit

#啟動PyGame
pygame.init()

#規劃出一個400x400的區域給PyGame的螢幕空間
screen = pygame.display.set_mode((400,400))
pygame.display.set_caption('PyGame Framework')

#決定你的換頁效率
clock = pygame.time.Clock()

while True:

    #取得目前玩家和系統所輸入的訊息(事件啦！)
    for event in pygame.event.get():

        #根據不同的事件，一個個對應處理

        #如果是結束
        if event.type == pygame.QUIT:
            pygame.quit()
            exit()  #很重要！一定得連系統的資源一起放掉

    #這個一定要有！因為系統要不斷更新各項訊息以及畫面內容
    pygame.display.update()

    #設定FPS = 60
    clock.tick(60)