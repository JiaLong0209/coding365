import tensorflow as tf
import tensorflow.keras as keras
import matplotlib
import matplotlib.pyplot as plt

model = keras.applications.VGG16(weights='imagenet')
model.summary()

image_utils = tf.keras.preprocessing.image
preprocess_input = tf.keras.applications.vgg16.preprocess_input
decode_predictions=tf.keras.applications.vgg16.decode_predictions

def loadProcessImage(path):	
    image = image_utils.load_img(image_path, target_size=(224, 224))
    image = image_utils.img_to_array(image)
    image = image.reshape(1,224,224,3)
    image = preprocess_input(image)
    return image
              

def prediction(path):
    image = loadProcessImage(path)
    predictions = model.predict(image)
    print("Predicted:", decode_predictions(predictions, top=3))

prediction("drive/MyDrive/00AI/touhou/flandre01.jpg")