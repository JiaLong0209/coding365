# -*- coding: utf-8 -*-
"""DL05b.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1FGQjyWc8tkMkk2G2sqriLM8un2kV7Wr_
"""

import tensorflow as tf
base_model = tf.keras.applications.VGG16(
    weights='imagenet',  # Load weights pre-trained on ImageNet.
    input_shape=(224, 224, 3),
    include_top=False)

base_model.summary()

base_model.trainable = False

keras=tf.keras
inputs = keras.Input(shape=(224, 224, 3))
x = base_model(inputs, training=False)
x = keras.layers.GlobalAveragePooling2D()(x)
outputs = keras.layers.Dense(1)(x)
model = keras.Model(inputs, outputs)

model.summary()

model.compile(loss=keras.losses.BinaryCrossentropy(from_logits=True), metrics=[keras.metrics.BinaryAccuracy()])

datagen = tf.keras.preprocessing.image.ImageDataGenerator(
    samplewise_center=True,  # set each sample mean to 0
    rotation_range=10,  # randomly rotate images in the range (degrees, 0 to 180)
    zoom_range = 0.1, # Randomly zoom image
    width_shift_range=0.1,  # randomly shift images horizontally (fraction of total width)
    height_shift_range=0.1,  # randomly shift images vertically (fraction of total height)
    horizontal_flip=True,  # randomly flip images
    vertical_flip=False)

train_it = datagen.flow_from_directory('drive/MyDrive/00AI/train/',
      target_size=(224, 224),
      color_mode='rgb',
      class_mode='binary',
      batch_size=8)

valid_it = datagen.flow_from_directory('drive/MyDrive/00AI/valid/',
      target_size=(224, 224),
      color_mode='rgb',
      class_mode='binary',
      batch_size=8)

model.fit(train_it, steps_per_epoch=12, validation_data=valid_it, validation_steps=4, epochs=20)

# minor fix by very small learning rate

base_model.trainable = True
model.compile(optimizer=keras.optimizers.RMSprop(learning_rate = .00001),  # Very low learning rate
              loss=keras.losses.BinaryCrossentropy(from_logits=True),
              metrics=[keras.metrics.BinaryAccuracy()])

model.fit(train_it, steps_per_epoch=12, validation_data=valid_it, validation_steps=4, epochs=10)

import matplotlib.pyplot as plt
import matplotlib.image as mpimg
#from tensorflow.keras.preprocessing import image as image_utils
#from tensorflow.keras.applications.imagenet_utils import preprocess_input
image_utils=tf.keras.preprocessing.image
preprocess_input=tf.keras.applications.vgg16.preprocess_input

def show_image(image_path):
    image = mpimg.imread(image_path)
    plt.imshow(image)

def make_predictions(image_path):
    show_image(image_path)
    image = image_utils.load_img(image_path, target_size=(224, 224))
    image = image_utils.img_to_array(image)
    image = image.reshape(1,224,224,3)
    image = preprocess_input(image)
    preds = model.predict(image)
    return preds

x=make_predictions('drive/MyDrive/00AI/valid_other/bo4.JPG')
x

make_predictions('drive/MyDrive/00AI/valid_other/not_bo1.jpg')

def my_doggy_door(image_path):
    preds = make_predictions(image_path)
    if preds[0] < 0:
        print("It's Bo! Let him in!")
    else:
        print("That's not Bo! Stay out!")

my_doggy_door('drive/MyDrive/00AI/valid_other/bo2.JPG')

my_doggy_door('drive/MyDrive/00AI/valid_other/not_bo3.jpg')