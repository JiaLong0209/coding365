import tensorflow as tf
import tensorflow.keras as keras
import matplotlib
import matplotlib.pyplot as plt

model = keras.applications.VGG16(weights='imagenet')
model.summary()

image_utils = tf.keras.preprocessing.image
preprocess_input = tf.keras.applications.vgg16.preprocess_input

