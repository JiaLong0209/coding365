import pygame,random,math,time,sys

class ball(pygame.sprite.Sprite):#輸入代表這個類別是特殊的角色類別
    direction=0
    speed=0
    x=0
    y=0
    dx=0
    dy=0

    def __init__(self,inputspeed,inputx,inputy,radius,color):#類別建構事 建立物件時執行
        pygame.sprite.Sprite.__init__(self)#一定要有這行
        self.speed=inputspeed
        self.x=inputx
        self.y=inputy
        #!!!image,rect不是自己定的變量 特殊的角色類別一定要有 image是角色類別的畫布 可以在上面畫東西 rect式畫布的區塊!!!
        self.image=pygame.Surface([radius*2,radius*2])#繪製畫布
        self.image.fill((255,255,255))#畫布塗上背景色
        pygame.draw.circle(self.image,color,(radius,radius),radius,0)#在畫布上畫圓
        self.rect=self.image.get_rect()#取得畫布的區塊
        self.rect.center=(inputx,inputy)#設置畫布區塊的中心點
        self.direction=random.randint(20,70)#初始化角度
        
    def update(self):
        radian=math.radians(self.direction)#角度轉弧度 才能用sin cos函數
        self.dx=self.speed*math.cos(radian)
        self.dy=-self.speed*math.sin(radian)
        self.x+=self.dx
        self.y+=self.dy
        self.rect.x=self.x
        self.rect.y=self.y
        #碰到左右邊界，x方向的速度變號
        if(self.rect.left<=0 or self.rect.right>=window.get_width()):
            self.hitleftright()
        #碰到上下邊界，y方向的速度變號
        elif(self.rect.top<=0):
            self.hittop()

    def hittop(self):
        self.direction=360-self.direction

    def hitleftright(self):
        if 180>=self.direction>=0:
            self.direction=180-self.direction
        else:
            self.direction=540-self.direction

class brick(pygame.sprite.Sprite):
    def __init__(self,color,x,y):
        pygame.sprite.Sprite.__init__(self)
        self.image=pygame.Surface([40,15])
        self.image.fill(color)
        self.rect=self.image.get_rect()
        self.rect.x=x
        self.rect.y=y

class moveclip(pygame.sprite.Sprite):
    def __init__(self,color,x,y):
        pygame.sprite.Sprite.__init__(self)
        self.image=pygame.Surface([50,20])
        self.image.fill(color)
        self.rect=self.image.get_rect()
        self.rect.x=x
        self.rect.y=y

    def update(self):
        pos=pygame.mouse.get_pos()
        self.rect.x=pos[0]
        if self.rect.x>window.get_width()-self.rect.width:
            self.rect.x=window.get_width()-self.rect.width

pygame.init()
font=pygame.font.SysFont("Arial.ttf",20)

def gameover(message):
    global run
    text=font.render(message,1,(255,0,0))
    window.blit(text,(window.get_width()/2-150,window.get_height()/2))
    pygame.display.update()
    run=False
    time.sleep(3)

point=0

window=pygame.display.set_mode((600,400))
pygame.display.set_caption("打磚塊")

background=pygame.Surface(window.get_size())#畫布
background=background.convert()#可有可無
background.fill((255,255,255))#畫布上色
window.blit(background,(0,0))#把畫布貼在繪圖視窗window上

allsprite=pygame.sprite.Group()#角色群組變數
bricksprite=pygame.sprite.Group()
controllersprite=pygame.sprite.Group()
theball=ball(6,100,100,20,(0,0,255))

allsprite.add(theball)
controller=moveclip((255,0,0),0,350)
allsprite.add(controller)
controllersprite.add(controller)

clock=pygame.time.Clock()

#這一段是畫出各個磚塊
for i in range(3):
    for j in range(0,15):
        thebrick=brick((random.randint(0,255),random.randint(0,255),random.randint(0,255)),j*40+1,i*15+1)
        bricksprite.add(thebrick)
        allsprite.add(thebrick)

msgstart="Click mouse button to start"
msgstartdisplay=font.render(msgstart,100,(255,0,0))
window.blit(msgstartdisplay, (window.get_width()/2-50,window.get_height()/2))

playing=False#playing true代表球正在動
run=True#run false代表程式結束

while run:
    clock.tick(40)
    for event in pygame.event.get():
        if event.type==pygame.QUIT:#使用者者按x結束視窗
            running=False#跳出pygame

    button=pygame.mouse.get_pressed()

    #按下滑鼠左鍵開始遊戲（求開始動）
    if button[0]:
        playing=True

    if playing:
        window.blit(background,(0,0))#清除繪圖視窗window

        if theball.y>=window.get_height():
            gameover("you lose!")

        controller.update()

        #如果球撞到磚塊 加分 球往下反彈 且判定有沒有剩下的方塊 後面的True代表要把bricksprite裡碰撞到的東西消除掉
        hitbrick=pygame.sprite.spritecollide(theball,bricksprite,True)
        if len(hitbrick)>0:
            point+=len(hitbrick)
            theball.rect.y+=20
            theball.hittop()
            if len(bricksprite)==0:
                gameover("you win!")

        #如果球撞倒打版 球往上反彈 後面的False代表不要把bricksprite裡碰撞到的東西消除掉
        hitclip=pygame.sprite.spritecollide(theball,controllersprite,False)
        if len(hitclip)>0:
            theball.hittop()

        #繪製所有的角色 球 磚塊 打版
        theball.update()

    allsprite.draw(window)  #剩下的都畫出來

    msgscore="score: "+str(point)
    msgscoredisplay=font.render(msgscore,5,(255,0,0))

    window.blit(msgscoredisplay, (window.get_width()-60,window.get_height()-30))
    pygame.display.update()

pygame.quit()
sys.exit()