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
# 8. 寫出預測ball軌道的function，讓bar自己去接球

FPS = 120
window_size = [1200,700]
# window_size = [1600,800]
# window_size = [600,400]
brick_size = [40, 25]
brick_color = [230, 230, 230]
# ball_color = [230, 230, 230]
ball_color = [200, 40, 40]
bg_color = [0, 0, 0, 40]
bg2_size = 150
moveclip_color = [230, 230, 230]
moveclip_size = [120, 30]
moveclip_pos = [window_size[0]/2-moveclip_size[0]/2,window_size[1]- 10]
text_color = [205, 80, 80]
speed_buff = 0.4
ball_x , ball_y = window_size[0]/2-10 , window_size[1]*0.9
ball_speed = 4
ball_size = 25
max_speed = 75

row, column = round((window_size[1]/brick_size[1])*0.8), round(window_size[0]/brick_size[0])
res_msg = ' Restart?'
autoMode = True
activeBackground2 = False
simplePredict = False
path = 1
fix = './0714_pygame/brickGame/' if path else ''

class ball(pygame.sprite.Sprite):  # 輸入代表這個類別是特殊的角色類別
    direction = 0
    speed = 0
    x = 0
    y = 0
    dx = 0
    dy = 0
    bound_count = 0
    prex = 0
    prey = 0
    count = 0

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
        self.count += 1
        radian = math.radians(self.direction)  # 角度轉弧度 才能用sin cos函數
        self.speed = max_speed if self.speed > max_speed else self.speed
        self.dx, self.dy  = self.speed*math.cos(radian),  -self.speed*math.sin(radian)
        if (self.count % 1 == 0) :
            self.prex, self.prey = self.x, self.y
        self.x += self.dx
        self.y += self.dy
        self.rect.x , self.rect.y = self.x, self.y
        
        pre_pos = [self.prex + ball_size - (self.dx * 0.75), self.prey + ball_size - (self.dy * 0.75)]
        pos = [self.x + ball_size, self.y + ball_size]
        pygame.draw.line(window, [100,10,10] ,pre_pos, pos,round(ball_size*2.5))
        pygame.draw.line(window, [70,100,190],pre_pos, pos, round(ball_size*2.2))
        pygame.draw.line(window, ball_color,pre_pos, pos, round(ball_size*2))
        pygame.draw.line(window, [255,190,130],pre_pos, pos, round(ball_size*1.7))
        pygame.draw.line(window, [255,230,150],pre_pos, pos, round(ball_size*1.3))
        pygame.draw.line(window, [245,250,200],pre_pos, pos, round(ball_size*1))
        pygame.draw.line(window, [255,250,250],pre_pos, pos, round(ball_size*0.6))
        if(self.bound_count > 40):
            self.direction *= random.random()
            self.bound_count = 0
        # 碰到左右邊界，x方向的速度變號
        if (self.rect.left <= 0 or self.rect.right >= window.get_width()):
            self.hitleftright()
        # 碰到上下邊界，y方向的速度變號
        elif (self.rect.top <= 0):
            self.hittop()

    def hittop(self):
        self.direction = 360-self.direction
        self.bound_count += 1

    def hitleftright(self):
        if 180 >= self.direction >= 0:
            self.direction = 180-self.direction
        else:
            self.direction = 540-self.direction
        self.bound_count += 1
        print(self.bound_count)


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
        if autoMode:
            self.rect.x = predictPos()
        else:
            pos = pygame.mouse.get_pos()
            self.rect.x = pos[0]-self.rect.width/2

def predictPos():
    temp = random.randint(0, window.get_width())
    x = temp
    if(theball.direction > 180 and theball.direction < 360):
        dx, dy = theball.dx , theball.dy
        x, y = theball.x , theball.y
        count = 0
        reverse = 1
        while(y < moveclip_pos[1]):
            x += dx * reverse
            y += abs(dy)
            count += 1
            # print(x,y, dx, dy)
            if(x < 0 or x > window.get_width()):
                reverse *= -1

        x = x - dx*count
        
    return theball.x - moveclip_size[0]/3 if simplePredict else x - moveclip_size[0]/3

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
                brick_color, j*(brick_size[0]+1)-column/2, i*(brick_size[1]+1))
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
    if(activeBackground2):
        window.blit(bg2, (window.get_width()/2-bg2.get_width()/2, window.get_height()/2-bg2.get_height()/2)) 
        

def updateMusciVolumn():
    pygame.mixer.music.set_volume(0.2 + (point/(row*column))*0.8)

rot = 10
pygame.init()
font = pygame.font.SysFont("ubuntumono", 30)

point = 0
window = pygame.display.set_mode(window_size)
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

theball = ball(ball_speed, ball_x, ball_y, ball_size, ball_color)
allsprite.add(theball)


controller = moveclip(moveclip_color, moveclip_pos[0], moveclip_pos[1])
allsprite.add(controller)
controllersprite.add(controller)



spawnBricks(row,column)
clock = pygame.time.Clock()

playing = False  
run = True  
isGameOver = False

msgstart = "Click mouse button to start"
msgstartdisplay = font.render(msgstart, 100, text_color)
window.blit(msgstartdisplay, (window.get_width()/2 -
            msgstartdisplay.get_width()/2, window.get_height()/2))
            
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
        if theball.y >= window.get_height() + theball.rect.y /2:
            gameover("you lose!")
        controller.update()

        # 如果球撞到磚塊 加分 球往下反彈 且判定有沒有剩下的方塊 後面的True代表要把bricksprite裡碰撞到的東西消除掉
        hitbrick = pygame.sprite.spritecollide(theball, bricksprite, True)
        if len(hitbrick) > 0:
            point += len(hitbrick)
            print(theball.speed,theball.bound_count)
            theball.bound_count = 0
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
