import torch
import cv2
import numpy as np

# path = 'sample_data/'
path = ''
input_size = 608

device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")
print(f'device: {device}')

# 載入模型
checkpoint = torch.load(path + 'best.pt')
model = checkpoint['model']

model = model.to(dtype=torch.float32)
# model = model.to(device)

model.eval()

# 取得類別名稱
class_names = ['class1', 'class2', 'class3']  # 請替換為您自己的類別名稱

# 讀取影像
image = cv2.imread(path + '180.jpg')

# resize image to 608x608
image = cv2.resize(image, (input_size, input_size))

# 轉換成PyTorch的張量
image_tensor = torch.from_numpy(image.transpose(2, 0, 1)).float().div(255.0).unsqueeze(0)
image_tensor  = image_tensor.to(device)

# 模型 GPU or CPU
print(next(model.parameters()).is_cuda)

# 輸入數據 GPU or CPU
print(image_tensor.device)

# 進行推理
with torch.no_grad():
    detections = model(image_tensor)

# 解析模型的輸出
for detection in detections:
    # 處理檢測結果
    # 注意：這取決於您模型的輸出格式和內容，您可能需要根據您的模型進行調整
    pass

# 顯示結果
cv2.imshow('YOLOv8 Object Detection', image)
cv2.waitKey(0)
cv2.destroyAllWindows()
