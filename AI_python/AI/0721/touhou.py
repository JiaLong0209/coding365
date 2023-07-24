# Load Model
from tensorflow import keras
import tensorflow as tf
import numpy as np
import glob
import os
import sys
import matplotlib.pyplot as plt
import matplotlib

lables = ['flandre', 'scarlet']
batch_size = 32
units = 600
target_size = (int(units*1), int(units*1), -1)
img_size = (units, units)
imgUtils = keras.preprocessing.image

directory = './AI/src/touhou/'
base_path = './AI/src/touhou/flandre/'
jpg = 'flandre01.jpg'

# model = keras.models.load_model('./AI/mnist_model')

# model.summary()


def save(name):
    plt.savefig('./AI/src/touhou_plt/' + name)


def show_image(path):
    image = matplotlib.image.imread(path)
    plt.imshow(image)


def loadScaleImg(path):
    return imgUtils.load_img(path,
                             target_size=target_size,
                             keep_aspect_ratio=True,
                             interpolation="hamming")
    # bicubic, bilinear, nearest , lanczos, box , hamming


def predictImage(path):
    image = loadScaleImg(path)
    image = imgUtils.img_to_array(image).reshape(target_size)

    x = image.reshape(1, 28, 28, 3) / 255.0
    answer = np.argmax(model.predict(x))
    return answer


image = loadScaleImg(base_path+jpg)
image = imgUtils.img_to_array(image).reshape(target_size)/255.0
print(image.shape)
plt.imshow(image)
save('flandre01.png')

# images = sorted([f for f in glob.glob(os.path.join(base_path, '*'))])
# print(images)

data_and_label = tf.keras.utils.image_dataset_from_directory(
    directory,
    labels="inferred",
    label_mode="int",
    class_names=lables,
    color_mode="rgb",
    batch_size=batch_size,
    image_size=img_size,
    shuffle=False,
    seed=1337,
    validation_split=None,
    subset=None,
    interpolation="bilinear",
    follow_links=True,
    crop_to_aspect_ratio=True,
)

it = iter(data_and_label)
train_data, train_label = next(it)
train_data = train_data/255.0

for i in range(0, len(train_data)):
    plt.subplot(2, 2, i+1)
    plt.ylabel(lables[train_label[i]])
    plt.imshow(train_data[i])

save('all.png')

