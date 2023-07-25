# Data Enhancement
from keras.models import model_from_json
from keras.layers import Flatten, BatchNormalization, Conv2D, MaxPool2D
import tensorflow as tf
from tensorflow import keras
from keras.layers import Dense, Dropout
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.image as mpimg

target_size = 28 * 28
categories = 10


def doubleArray(arr):
    return np.append(arr, arr, axis=0)


def showImageTable(images, name):
    for i in range(0, 5):
        for j in range(0, 5):
            plt.subplot(5, 5, (i*5+j)+1)
            showImage(images[(i*5+j)])
    plt.savefig(f'./AI/src/mnist_plt/{name}')


def showImage(image):
    plt.imshow(image)


def preprocessInput(images):
    return images.reshape(len(images), 28, 28, 1)/255.0


def labelsCategorical(labels):
    return keras.utils.to_categorical(labels)


# 1. Get training data
mnist = keras.datasets.mnist
(train_images, train_labels), (test_images, test_labels) = mnist.load_data()

# 2. Make dataset to target size
train_images = preprocessInput(train_images)
test_images = preprocessInput(test_images)

# 3. Make labels to categorical label
train_labels = labelsCategorical(train_labels)
test_labels = labelsCategorical(test_labels)

# *. Extend data length
old_images = train_images
old_labelds = train_labels

train_images = doubleArray(train_images)
train_labels = doubleArray(train_labels)

# train_images = doubleArray(train_images)
# train_labels = doubleArray(train_labels)

# 4. Initialize a model
model = tf.keras.models.Sequential()

# 5. Add model layers

model.add(Conv2D(32, (3, 3), strides=1, padding='same',
          activation='relu', input_shape=(28, 28, 1)))
# model.add(BatchNormalization())
model.add(MaxPool2D((2, 2), strides=2, padding='same'))
model.add(Conv2D(8, (3, 3), strides=1, padding='same', activation='relu'))
model.add(BatchNormalization())
model.add(MaxPool2D((2, 2), strides=2, padding='same'))
# model.add(Conv2D(4, (3,3), strides=1, padding='same', activation='relu'))
# model.add(BatchNormalization())
# model.add(MaxPool2D((2,2), strides=2, padding='same'))

model.add(Flatten())
model.add(Dense(units=28*8, activation='relu'))
model.add(Dropout(0.2))
model.add(Dense(units=28*8, activation='relu'))
model.add(Dense(units=categories, activation='softmax'))

model.summary()

batch_size = 64

# Define ImageDataGenerator
datagen = tf.keras.preprocessing.image.ImageDataGenerator(
    rotation_range=10,     # 0 ~ 180
    zoom_range=0.25,
    width_shift_range=0.12,
    height_shift_range=0.12,
)

img_iter = datagen.flow(train_images, train_labels, batch_size=batch_size)

old = train_images

# Apply new data on train_images
datagen.fit(train_images)

x, y = img_iter.next()  # get next new data by batch_size
print(x.shape, y.shape)

showImageTable(old, 'old01.png')
showImageTable(x, 'new01.png')
# fig, ax = plt.subplots(nrows=5, ncols=5)
# for i in range(25):
#     image = x[i]
#     ax.flatten()[i].imshow(np.squeeze(image))
# plt.savefig('./AI/src/mnist_plt/01.png')

# quit()

# 6. Configure the training method
model.compile(optimizer='adam', loss='categorical_crossentropy',
              metrics=['accuracy'])

# 7. Training start
model.fit(img_iter,
          epochs=5,
          batch_size=batch_size,
          verbose=1,
          #  validation_split=0.2,
          validation_data=(test_images, test_labels),
          #  validation_freq=20
          )

model.save('./AI/mnist_model')
json_string = model.to_json()
with open("./AI/config/dl02_my_mnist.config", "w") as text_file:
    text_file.write(json_string)


model.save_weights("./AI/config/dl02_my_mnist.weight")

# best score batch: 64, data: 240000
# loss: 0.0442 - accuracy: 0.9862
# - val_loss: 0.0237 - val_accuracy: 0.9930

# best score batch: 32, data: 120000
# loss: 0.0572 - accuracy: 0.9827
# - val_loss: 0.0342 - val_accuracy: 0.9898

# best score batch: 500, data: 120000
# loss: 0.0650 - accuracy: 0.9793
# - val_loss: 0.0330 - val_accuracy: 0.9896


# batch: 1000, data: 60000
# src/mnist accuracy: 90%
# [[1. 1. 1. 1. 1. 1. 0. 1. 1. 1.]
#  [1. 1. 0. 1. 1. 1. 1. 1. 1. 1.]]


# batch: 500, data: 120000
# src/hard_mnist accuracy: 67.5%
# [[0. 1. 0. 0. 1. 0. 0. 0. 0. 1.]
#  [1. 1. 1. 1. 1. 1. 1. 1. 1. 1.]
#  [0. 0. 1. 1. 1. 1. 0. 1. 1. 0.]
#  [1. 1. 1. 1. 1. 1. 0. 1. 1. 0.]]

# batch: 50, data: 60000
# src/hard_mnist accuracy: 67.5%
# [[0. 1. 0. 1. 0. 1. 1. 0. 1. 1.]
#  [1. 1. 1. 1. 1. 1. 1. 1. 1. 1.]
#  [0. 0. 1. 1. 0. 1. 0. 0. 1. 0.]
#  [1. 1. 1. 1. 1. 1. 0. 1. 0. 0.]]

# batch: 64, data: 120000, epoch: 5
# src/hard_mnist accuracy: 77.5%
# [[1. 1. 0. 0. 1. 0. 0. 0. 0. 1.]
#  [1. 0. 1. 1. 1. 1. 1. 1. 1. 1.]
#  [0. 1. 1. 1. 1. 1. 1. 1. 1. 1.]
#  [1. 0. 1. 1. 1. 1. 1. 1. 1. 1.]]
# loss: 0.0658 - accuracy: 0.9798 -
# val_loss: 0.0618 - val_accuracy: 0.9796


# batch: 1000, data: 60000
# loss: 0.1416 - accuracy: 0.9560
# val_loss: 0.1121 - val_accuracy: 0.9801
