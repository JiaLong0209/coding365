import pygame
import random
import math
import time

# 更改的部分：
# 1. 更改Ball, Brick, Bar的顏色
# 2. 調整字體的大小、字體、顏色、位置
# 3. 更改背景透明度，看起來會有殘影
# 4. 球會隨著分數的增加而變快
# 5. 背景圖片的旋轉速率會隨著分數越來越快，圖片大小也越大
# 6. 背景音樂的音量會隨著分數越來越大
# 7. GameOver時，可以透過點擊左鍵重新開始遊戲 
# TODO. 寫出預測ball軌道的function，讓bar自己去接球

FPS = 120
brick_size = [40, 25]
brick_color = [230, 230, 230]
# ball_color = [230, 230, 230]
ball_color = [230, 40, 40]
bg_color = [0, 0, 0, 50]
bg2_size = 150
moveclip_color = [230, 230, 230]
moveclip_size = [150, 20]
text_color = [255, 150, 150]
speed_buff = 0.4
ball_x , ball_y = 250 , 300
ball_speed = 4
row, column = 4, 15
res_msg = ' Restart?'

path = 1
fix = './0714_pygame/brickGame/' if path else ''
class ball(pygame.sprite.Sprite):  # 輸入代表這個類別是特殊的角色類別
    direction = 0
    speed = 0
    x = 0
    y = 0
    dx = 0
    dy = 0

    def __init__(self, inputspeed, inputx, inputy, radius, color):  # 類別建構事 建立物件時執行
        pygame.sprite.Sprite.__init__(self)  # 一定要有這行
        self.speed = inputspeed
        self.x = inputx
        self.y = inputy
        #!!!image,rect不是自己定的變量 特殊的角色類別一定要有 image是角色類別的畫布 可以在上面畫東西 rect式畫布的區塊!!!
        
        self.image = pygame.Surface([radius*2, radius*2]).convert_alpha()  # 繪製畫布
        self.image.fill([0,0,0,0])  # 畫布塗上背景色
        
        pygame.draw.circle(self.image, color,
                           (radius, radius), radius, 0)  # 在畫布上畫圓
        self.rect = self.image.get_rect()  # 取得畫布的區塊
        self.rect.center = (inputx, inputy)  # 設置畫布區塊的中心點
        self.direction = random.randint(25, 65)  # 初始化角度

    def update(self):
        radian = math.radians(self.direction)  # 角度轉弧度 才能用sin cos函數
        self.dx = self.speed*math.cos(radian)
        self.dy = -self.speed*math.sin(radian)
        self.x += self.dx
        self.y += self.dy
        self.rect.x = self.x
        self.rect.y = self.y
        # 碰到左右邊界，x方向的速度變號
        if (self.rect.left <= 0 or self.rect.right >= window.get_width()):
            self.hitleftright()
        # 碰到上下邊界，y方向的速度變號
        elif (self.rect.top <= 0):
            self.hittop()

    def hittop(self):
        self.direction = 360-self.direction

    def hitleftright(self):
        self.direction = 180-self.direction
        # if 180 >= self.direction >= 0:
        #     self.direction = 180-self.direction
        # else:
        #     self.direction = 540-self.direction


class brick(pygame.sprite.Sprite):
    def __init__(self, color, x, y):
        pygame.sprite.Sprite.__init__(self)
        self.size = brick_size
        self.image = pygame.Surface(self.size)
        self.image.fill(color)
        self.rect = self.image.get_rect()
        self.rect.x = x
        self.rect.y = y


class moveclip(pygame.sprite.Sprite):
    def __init__(self, color, x, y):
        pygame.sprite.Sprite.__init__(self)
        self.image = pygame.Surface(moveclip_size)
        self.image.fill(color)
        self.rect = self.image.get_rect()
        self.rect.x = x
        self.rect.y = y

    def update(self):
        pos = pygame.mouse.get_pos()
        self.rect.x = pos[0]-self.rect.width/2


def gameover(message):
    global isGameOver
    global playing
    for s in bricksprite.sprites():
        s.kill()

    playing = False
    isGameOver = True
    text = font.render(message+res_msg, 1, text_color)
    window.blit(text, (window.get_width()/2-text.get_width() /
                2, window.get_height()/2-text.get_height()/2))
    allsprite.draw(window)
    pygame.display.update()

def spawnBricks(row, column):
    for i in range(row):
        for j in range(0, column):
            thebrick = brick(
                brick_color, j*(brick_size[0]+1)-10, i*(brick_size[1]+1))
            bricksprite.add(thebrick)
            allsprite.add(thebrick)
    print(3,bricksprite)


def restart():
    global point
    point = 0
    pygame.mixer.music.set_volume(0.1)
    theball.x, theball.y = ball_x, ball_y
    theball.speed = ball_speed
    theball.direction = random.randint(25, 65)
    spawnBricks(row, column)

def drawBackground():
    window.blit(background, (0, 0)) 
    # bg2 = pygame.transform.rotate(pygame.transform.scale(background2,[bg2_size+point*2, bg2_size+point*2]),0)
    bg2 = pygame.transform.scale(pygame.transform.rotate(background2,rot),[bg2_size+point*3, bg2_size+point*3])
    window.blit(bg2, (window.get_width()/2-bg2.get_width()/2, window.get_height()/2-bg2.get_height()/2)) 

def updateMusciVolumn():
    pygame.mixer.music.set_volume(0.2 + (point/(row*column))*0.8)
    print(0.2 + (point/(row*column))*0.8)

rot = 10
pygame.init()
font = pygame.font.SysFont("ubuntumono", 30)

point = 0
window = pygame.display.set_mode((600, 400))
pygame.display.set_caption("打磚塊")


# music = pygame.mixer.Sound(fix+'Eglair.mp3')
pygame.mixer.music.load(fix+'Eglair.mp3')
pygame.mixer.music.set_volume(0.2)
pygame.mixer.music.play(-1)

background = pygame.Surface(window.get_size()) 
background = background.convert_alpha() 
background.fill(bg_color)  
background2 = pygame.transform.scale(pygame.image.load(fix+'brick2.png'),[bg2_size,bg2_size])
background2 = background2.convert_alpha()

window.blit(background, (0, 0)) 
window.blit(background2, (window.get_width()/2-background2.get_width()/2, window.get_height()/2-background2.get_height()/2)) 

allsprite = pygame.sprite.Group()
bricksprite = pygame.sprite.Group()
controllersprite = pygame.sprite.Group()

theball = ball(ball_speed, ball_x, ball_y, 20, ball_color)
allsprite.add(theball)


controller = moveclip(moveclip_color, 0, 360)
allsprite.add(controller)
controllersprite.add(controller)


clock = pygame.time.Clock()

spawnBricks(row,column)

msgstart = "Click mouse button to start"
msgstartdisplay = font.render(msgstart, 100, text_color)
window.blit(msgstartdisplay, (window.get_width()/2 -
            msgstartdisplay.get_width()/2, window.get_height()/2))
playing = False  
run = True  
isGameOver = False

while run:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:   
            run = False  
    
    button = pygame.mouse.get_pressed() 
    if button[0]:
        if isGameOver == True:
            restart()
            isGameOver = False
            playing = True
        elif(playing == False):
            playing = True
    

    if playing:
        rot += 0.1 * theball.speed *1.5
        drawBackground()
        if theball.y >= window.get_height():
            gameover("you lose!")
        controller.update()

        # 如果球撞到磚塊 加分 球往下反彈 且判定有沒有剩下的方塊 後面的True代表要把bricksprite裡碰撞到的東西消除掉
        hitbrick = pygame.sprite.spritecollide(theball, bricksprite, True)
        if len(hitbrick) > 0:
            point += len(hitbrick)
            updateMusciVolumn()
            theball.rect.y += 20
            theball.hittop()
            theball.speed += speed_buff
            if len(bricksprite) == 0:
                gameover("you win!")

        # 如果球撞倒打版 球往上反彈 後面的False代表不要把bricksprite裡碰撞到的東西消除掉
        hitclip = pygame.sprite.spritecollide(theball, controllersprite, False)
        if len(hitclip):
            theball.hittop()
        theball.update()

    allsprite.draw(window)
    msgscore = "score: "+str(point)
    msgscoredisplay = font.render(msgscore, 1, text_color)
    window.blit(msgscoredisplay, (window.get_width() -
                msgscoredisplay.get_width(), window.get_height()-30))
    pygame.display.update()
    clock.tick(FPS)

pygame.quit()
