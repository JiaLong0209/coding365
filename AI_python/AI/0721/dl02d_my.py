import tensorflow as tf
from tensorflow import keras
from keras.layers import Dense, Dropout

target_size = 28 * 28
categories = 10

def preprocessInput(images):
    return images.reshape(len(images), 28, 28, 1)/255.0

def labelsCategorical(labels):
    return keras.utils.to_categorical(labels)

# 1. Get training data
mnist = keras.datasets.mnist
(train_images, train_labels),(test_images, test_labels) = mnist.load_data()

# 2. Make dataset to target size
train_images = preprocessInput(train_images)
test_images = preprocessInput(test_images)

# 3. Make labels to categorical label
train_labels = labelsCategorical(train_labels)
test_labels = labelsCategorical(test_labels)

# 4. Initialize a model
model = tf.keras.models.Sequential()

from keras.layers import Flatten, BatchNormalization, Conv2D, MaxPool2D
# 5. Add model layers
model.add(Conv2D(32, (3,3), strides=1, padding='same', activation='relu', input_shape=(28,28,1)))
model.add(BatchNormalization())
model.add(MaxPool2D((2,2), strides=2, padding='same'))
model.add(Conv2D(8, (3,3), strides=1, padding='same', activation='relu'))
model.add(BatchNormalization())
model.add(MaxPool2D((2,2), strides=3, padding='same'))
model.add(Flatten())
model.add(Dense(units=28*8, activation='relu'))
model.add(Dropout(0.2))
model.add(Dense(units=28*8, activation='relu'))
model.add(Dense(units=categories, activation='softmax'))

model.summary()

# quit()
# 6. Configure the training method
model.compile(optimizer='adam',loss='categorical_crossentropy', metrics=['accuracy'])

# 7. Training start
model.fit(train_images, train_labels,
             epochs=8,
             batch_size = 100,
             verbose=1,
            #  validation_split=0.2,
             validation_data=(test_images,test_labels),
            #  validation_freq=20
             )

model.save('./AI/mnist_model')
from keras.models import model_from_json
json_string = model.to_json()
with open("./AI/config/dl02_my_mnist.config", "w") as text_file:
    text_file.write(json_string)


model.save_weights("./AI/config/dl02_my_mnist.weight")