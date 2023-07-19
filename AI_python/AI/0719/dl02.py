# -*- coding: utf-8 -*-
"""DL02.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1yIkDHAWG6ZBA1aEaUfmvoRX1eQt0616_
"""

#from tensorflow.keras.datasets import mnist
import tensorflow as tf
mnist = tf.keras.datasets.mnist
(train_images, train_labels), (test_images, test_labels) = mnist.load_data()

train_images.shape

test_images.shape

train_labels.shape, test_labels.shape

train_images.dtype

train_images.max(),train_images.min()

train_images[3]

train_labels[3]

import matplotlib.pyplot as plt
image=train_images[3]
plt.imshow(image,cmap='gray')
train_labels[3]

train_images=train_images.reshape(60000,784)
test_images=test_images.reshape(10000,784)

train_images.shape

train_images[3]

train_images=train_images/255.0
test_images=test_images/255.0

train_images.dtype,train_images.max()

train_labels[0:9]

import tensorflow.keras as keras
num_categories=10
train_labels=keras.utils.to_categorical(train_labels,num_categories)
test_labels=keras.utils.to_categorical(test_labels,num_categories)

train_labels[0:9]

#from tensorflow.keras.models import Sequential
#model=Sequential()
model = tf.keras.models.Sequential()

#from tensorflow.keras.layers import Dense
Dense=tf.keras.layers.Dense
model.add(Dense(units=512,activation='relu',input_shape=(784,)))
model.add(Dense(units=512,activation='relu'))
model.add(Dense(units=10,activation='softmax'))

model.summary()

model.compile(loss='categorical_crossentropy', metrics=['accuracy'])
history=model.fit(train_images, train_labels, epochs=5,verbose=1,validation_data=(test_images,test_labels))

model.save('drive/MyDrive/00AI/mnist_model')