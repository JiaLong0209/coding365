# Load Model
from tensorflow import keras
import tensorflow as tf
import numpy as np
import glob, os
import sys

hardMode = True if len(sys.argv)>1 else False
print(hardMode, sys.argv)
imgSize = (28,28)
imgUtils = keras.preprocessing.image

# 1. Loading model 
model = keras.models.load_model('./AI/mnist_model')

# 2. Checking the properties of model
model.summary()

# 3. Loading image
def loadScaleImg(path):
    return imgUtils.load_img(path, color_mode="grayscale", target_size=imgSize)

def predictImage(path):
    image = loadScaleImg(path)
    image = imgUtils.img_to_array(image).reshape(imgSize)

    x = image.reshape(1,28, 28, 1) / 255.0
    answer = np.argmax(model.predict(x))
    return answer

if hardMode:
    base_path = './AI/src/hard_mnist/'
else :
    base_path = './AI/src/mnist/'
    
# predictImage('./AI/src/01.png')

images = sorted([f for f in glob.glob(os.path.join(base_path, '*'))])
# print(images)
acc = np.array([])
for i,image in enumerate(images):
    predict = predictImage(image)
    print(image)
    print(f'predict: {predict} answer: {i%10}')
    acc = np.append(acc, predict==i%10)
print(acc.reshape(int(len(acc)/10),10))
print(f'{round(len(acc[acc==True])/len(acc)*100,3)}%')