from tensorflow import keras
import tensorflow as tf
import numpy as np
import glob, os

model = keras.models.load_model('./AI/mnist_model')
model.summary()
imgSize = (28,28)

imgUtils = keras.preprocessing.image

def loadScaleImg(path):
    return imgUtils.load_img(path, color_mode="grayscale", target_size=imgSize)

def predictImage(path):
    image = loadScaleImg(path)
    image = imgUtils.img_to_array(image).reshape(imgSize)

    x = image.reshape(1,28*28) / 255.0
    answer = np.argmax(model.predict(x))
    return answer

# base_path = './AI/src/mnist/'
base_path = './AI/src/hard_mnist/'
# predictImage('./AI/src/01.png')
 
images = sorted([f for f in glob.glob(os.path.join(base_path, '*.png'))])
# print(images)
acc = np.array([])
for i,image in enumerate(images):
    predict = predictImage(image)
    print(image)
    print(f'predict: {predict} answer: {i%10}')
    acc = np.append(acc, predict==i%10)
print(acc.reshape(int(len(acc)/10),10))
print(f'{round(len(acc[acc==True])/len(acc)*100,3)}%')