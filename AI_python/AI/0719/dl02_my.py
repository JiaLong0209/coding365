import tensorflow as tf
from tensorflow import keras
from keras.layers import Dense, Dropout
target_size = 28 * 28
categories = 10

def reshapeToTarget(images):
    return images.reshape(len(images), target_size)/255.0

def labelsCategorical(labels):
    return keras.utils.to_categorical(labels)

# 1. Get training data
mnist = keras.datasets.mnist
(train_images, train_labels),(test_images, test_labels) = mnist.load_data()

# 2. Make dataset to target size
train_images = reshapeToTarget(train_images)
test_images = reshapeToTarget(test_images)

# 3. Make labels to categorical label
train_labels = labelsCategorical(train_labels)
test_labels = labelsCategorical(test_labels)

# 4. Initialize a model
model = tf.keras.models.Sequential()

from keras.layers import BatchNormalization
# 5. Add model layers
model.add(Dense(units=28*8, activation='relu', input_shape=(target_size,)))
model.add(Dropout(0.2))
model.add(Dense(units=28*8, activation='relu'))
model.add(BatchNormalization())
model.add(Dense(units=28*4, activation='relu'))
# model.add(Dense(units=100, activation='relu'))
# model.add(Dense(units=128, activation='relu'))
# model.add(Dense(units=256, activation='relu'))
# model.add(Dense(units=256, activation='relu'))
model.add(Dense(units=categories, activation='softmax'))

model.summary()

# 6. Configure the training method
model.compile(optimizer='adam',loss='categorical_crossentropy', metrics=['accuracy'])

# 7. Training start
history = model.fit(train_images, train_labels,
             epochs=20,
             batch_size = 3000,
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


# best score
# loss: 0.0234 - accuracy: 0.9923
# val_loss: 0.0635 - val_accuracy: 0.9798

# src/mnist accuracy: 60%
# [0. 0. 1. 1. 1. 1. 0. 1. 1. 1
#  1. 0. 1. 0. 1. 0. 0. 0. 1. 1.]

# src/hard_mnist accuracy: 45%
# [[0. 0. 1. 0. 0. 0. 0. 0. 0. 0.]
#  [1. 1. 1. 1. 0. 0. 0. 1. 0. 0.]
#  [0. 1. 1. 1. 0. 1. 1. 1. 0. 0.]
#  [1. 1. 1. 1. 0. 1. 0. 1. 0. 0.]]
