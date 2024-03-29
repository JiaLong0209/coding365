# -*- coding: utf-8 -*-
"""DL03.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/153AY4A4O8ojx_jRY84BwvP5QmuanWohu
"""

import pandas as pd
valid_df = pd.read_csv("drive/MyDrive/00AI/sign_mnist_test.csv")
train_df = pd.read_csv("drive/MyDrive/00AI/sign_mnist_train.csv")

train_df.head()

train_label = train_df['label']
valid_label = valid_df['label']

train_label

del train_df['label']
del valid_df['label']

train_image = train_df.values
valid_image = valid_df.values

train_image.shape

import matplotlib.pyplot as plt

plt.figure(figsize=(100,100))
num_images = 20
for i in range(num_images):
	row = train_image[i]
	label = train_label[i]

	image = row.reshape(28,28)
	plt.subplot(1, num_images, i+1)
	plt.title(label, fontdict={'fontsize': 30})
	plt.axis('off')
	plt.imshow(image, cmap='gray')

train_image = train_image / 255
valid_image = valid_image / 255

#import tensorflow.keras as keras
import tensorflow as tf
keras=tf.keras
num_classes = 25
train_label = keras.utils.to_categorical(train_label, num_classes)
valid_label = keras.utils.to_categorical(valid_label, num_classes)

#from tensorflow.keras.models import Sequential
#from tensorflow.keras.layers import Dense
#model = Sequential()
model=tf.keras.models.Sequential()
Dense=tf.keras.layers.Dense

model.add(Dense(units = 512, activation='relu', input_shape=(784,)))
model.add(Dense(units = 512, activation='relu'))
model.add(Dense(units = num_classes, activation='softmax'))
model.summary()

model.compile(loss="categorical_crossentropy", metrics=["accuracy"])

model.fit(train_image, train_label, epochs=20, verbose=1, validation_data=(valid_image, valid_label))