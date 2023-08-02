# -*- coding: utf-8 -*-
"""final5_92_x2_dataStandardization_cifar10.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1RUFvRrWrtjAgu9Lu8iOWzMDdhSePj43_
"""

# use one hot
# use datagen iterator
# conclusion: Using one hot encoding and not using it has basically the same accuracy,
# but not using one hot encoding may result in incorrect accuracy (about 0.10)

import tensorflow as tf
from keras import datasets, layers, models
from tensorflow import keras
import matplotlib.pyplot as plt
import numpy as np

(train_images, train_labels), (test_images, test_labels) = datasets.cifar10.load_data()

# train_images, test_images = train_images / 255.0, test_images / 255.0
train_images_mean = np.mean(train_images, axis=(0,1,2))
train_images_std = np.std(train_images, axis=(0,1,2))

print(train_images_mean)
print(train_images_mean.shape)
print(train_images_std)
print(train_images_std.shape)

train_images = (train_images - train_images_mean) / train_images_std
test_images = (test_images - train_images_mean) / train_images_std

# print(train_images)

print(train_labels.shape, test_labels.shape)

train_labels = keras.utils.to_categorical(train_labels, 10)
test_labels = keras.utils.to_categorical(test_labels, 10)

def showImage(x,y, title=''):
    plt.figure(figsize=(10,10))
    for i in range(25 if len(x) >= 25 else len(x)):
        plt.subplot(5,5,i+1)
        plt.xticks([])
        plt.yticks([])
        plt.grid(False)
        plt.imshow(x[i])
        plt.xlabel(class_names[y[i][0]])
        plt.title(title)
    plt.show()

class_names = ['airplane', 'automobile', 'bird', 'cat', 'deer',
               'dog', 'frog', 'horse', 'ship', 'truck']

# showImage(train_images, train_labels)

datagen = tf.keras.preprocessing.image.ImageDataGenerator(
    rotation_range=30,
    zoom_range=0.3,
    width_shift_range=0.25,
    height_shift_range=0.25,
    horizontal_flip=True,
)

# train_images, train_labels = train_images[:1] , train_labels[:1]

# showImage(train_images, train_labels)

new_images = np.repeat(train_images, 2, axis=0)
new_labels = np.repeat(train_labels, 2, axis=0)
batch_size =  len(new_images)

print(train_images.shape)
print(new_images.shape)


datagen.fit(new_images)

# img_iter = datagen.flow(new_images, new_labels, batch_size=batch_size)
# x, y = img_iter.next()
# print(x.shape, y.shape)

callback = keras.callbacks.EarlyStopping(monitor='val_loss', patience = 5)

from keras.layers.normalization.batch_normalization_v1 import BatchNormalization
model = models.Sequential()
kernel_size = [64,128,256,512]

model.add(layers.Conv2D(64, (3,3), activation='relu', padding='same', input_shape=(32, 32, 3)))
model.add(BatchNormalization())

for i,kernel in enumerate(kernel_size):
    model.add(layers.Conv2D(kernel, (3, 3), activation='relu',padding='same'))
    model.add(layers.Conv2D(kernel, (3, 3), activation='relu',padding='same'))
    if(i > len(kernel_size)/2): model.add(layers.Conv2D(kernel, (3, 3), activation='relu', padding='same'))
    model.add(layers.BatchNormalization())
    model.add(layers.MaxPooling2D((2, 2)))

model.add(layers.Flatten())
model.add(layers.Dense(512, activation='relu'))
model.add(layers.Dropout(0.1))
model.add(layers.Dense(512, activation='relu'))
model.add(layers.Dropout(0.1))
model.add(layers.BatchNormalization())

model.add(layers.Dense(10, activation='softmax'))

model.summary()

batch_size = 128

# print(train_images.shape, train_labels.shape)

model.compile(
            optimizer='rmsprop',
            # loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
            loss='categorical_crossentropy',
            metrics=['accuracy']
            )


history = model.fit(
                    # train_images, train_labels,
                    datagen.flow(new_images, new_labels, batch_size=batch_size),
                    # x,y,
                    epochs=40,
                    validation_data=(test_images, test_labels),
                    batch_size=batch_size,
                    callbacks=[callback]
                    )

batch_size = 64

model.compile(
            # optimizer='rmsprop',
            tf.keras.optimizers.Adam(learning_rate=0.0003),
            # loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
            loss='categorical_crossentropy',
            metrics=['accuracy']
            )


history2 = model.fit(
                    train_images, train_labels,
                    epochs=40,
                    validation_data=(test_images, test_labels),
                    batch_size=batch_size,
                    callbacks=[callback]
                    )

# 以下因為 Colab 的系統RAM不足，導致程式中斷沒有跑到。

batch_size = 32

model.compile(
            # optimizer='rmsprop',
            tf.keras.optimizers.Adam(learning_rate=0.0001),
            # loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
            loss='categorical_crossentropy',
            metrics=['accuracy']
            )


history3 = model.fit(
                    train_images, train_labels,
                    # x,y,
                    epochs=40,
                    validation_data=(test_images, test_labels),
                    batch_size=batch_size,
                    callbacks=[callback]
                    )

batch_size = 128

# print(train_images.shape, train_labels.shape)

model.compile(
            # optimizer='rmsprop',
            tf.keras.optimizers.Adam(learning_rate=0.0003),
            # loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
            loss='categorical_crossentropy',
            metrics=['accuracy']
            )


history4 = model.fit(
                    # train_images, train_labels,
                    datagen.flow(new_images, new_labels, batch_size=batch_size),
                    # x,y,
                    epochs=20,
                    validation_data=(test_images, test_labels),
                    batch_size=batch_size,
                    callbacks=[callback]
                    )

hist = [history,history2,history3]
acc_list = [acc for i in hist for acc in i.history['accuracy']]
val_acc_list = [acc for i in hist for acc in i.history['val_accuracy']]

print(acc_list)

plt.plot(acc_list, label='accuracy')
plt.plot(val_acc_list, label = 'val_accuracy')
plt.title('Cifar10')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.ylim([0.5, 1])
plt.legend(loc='lower right')

test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

# print(test_loss)
print(test_acc)

model.save('drive/MyDrive/00AI/final2_cifar10_model')

# best : epochs = 4 in 2nd stage, batch = 64
# loss: 0.0088 - accuracy: 0.9973 - val_loss: 0.4284 - val_accuracy: 0.9278

# original : epochs = 10, batch = 64
#  loss: 0.5924 - accuracy: 0.7902
#- val_loss: 0.8711 - val_accuracy: 0.7118

