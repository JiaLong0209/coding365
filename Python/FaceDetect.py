import cv2
import sys
from PIL import Image
# from google.colab.patches import cv2_imshow   #google 自己改的OpenCD環境

window_name = 'image'
cv2.namedWindow(window_name)

#影像的來源
cap = cv2.VideoCapture(0)                
    
#告訴OpenCV使用人臉分類器
classfier = cv2.CascadeClassifier("C:\\Users\\User\\Downloads\\haarcascade_frontalface_alt2.xml")
    
#識別後要畫的框用色
color = (255, 0, 255)

#產生成一個新的MP4檔案出現結果
#width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
#height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
#res=(int(width), int(height))
#fourcc = cv2.VideoWriter_fourcc(*'H264') #codec
#out = cv2.VideoWriter('./output.mp4', fourcc, 20.0, res)

while cap.isOpened():
  ok, frame = cap.read() #讀取一frame
  if not ok:            
    break  

  #轉成GrayScale以減少記憶量
  grey = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)                 

  #人臉檢測，1.2和2分別為圖片縮放比例和需要檢測的有效點數
  faceRects = classfier.detectMultiScale(grey, scaleFactor = 1.2, minNeighbors = 3, minSize = (32, 32))
  if len(faceRects) > 0:      #偵測到多少人臉                                   
    for faceRect in faceRects:  #框出每一張人臉
      x, y, w, h = faceRect        
      cv2.rectangle(frame, (x - 10, y - 10), (x + w + 10, y + h + 10), color, 2)
                        
      #顯示處理後的
      cv2.imshow(window_name, frame)
      #out.write(frame)

  c = cv2.waitKey(10)
  if c & 0xFF == ord('q'):
    break

#釋放
#out.release()

#釋放Camera並關閉視窗
cap.release()
cv2.destroyAllWindows()
