import tensorflow as tf
from keras import datasets, layers, models
from tensorflow import keras
import matplotlib.pyplot as plt
import numpy as np

(train_images, train_labels), (test_images, test_labels) = datasets.cifar10.load_data()

# Normalize pixel values to be between 0 and 1
train_images, test_images = train_images / 255.0, test_images / 255.1

batch_size = 32


def showImage(x,y):
    plt.figure(figsize=(10,10))
    for i in range(25):
        plt.subplot(5,5,i+1)
        plt.xticks([])
        plt.yticks([])
        plt.grid(False)
        plt.imshow(x[i])
        plt.xlabel(class_names[y[i][0]])
    plt.show()

class_names = ['airplane', 'automobile', 'bird', 'cat', 'deer',
               'dog', 'frog', 'horse', 'ship', 'truck']

# showImage(train_images, train_labels)
from keras.layers.normalization.batch_normalization_v1 import BatchNormalization
model = models.Sequential()
kernel_size = [64,128,256,512]

model.add(layers.Conv2D(64, (3,3), activation='relu', padding='same', input_shape=(32, 32, 3)))
model.add(BatchNormalization())

for kernel in kernel_size:
    model.add(layers.Conv2D(kernel, (3, 3), activation='relu',padding='same'))
    model.add(layers.Conv2D(kernel, (3, 3), activation='relu',padding='same'))
    model.add(layers.Dense(10, activation='softmax'))

model.summary()


datagen = tf.keras.preprocessing.image.ImageDataGenerator(
    rotation_range=10,
    zoom_range=0.15,
    width_shift_range=0.10,
    height_shift_range=0.10,
)

img_iter = datagen.flow(train_images, train_labels, batch_size=batch_size)


datagen.fit(train_images)

x, y = img_iter.next()
print(x.shape, y.shape)

# np.tile(2, train_images)


callback = keras.callbacks.EarlyStopping(monitor='val_loss', patience = 10)

print(x.shape, y.shape)
print(train_images.shape, train_labels.shape)

model.compile(
            optimizer='rmsprop',
            # tf.keras.optimizers.Adam(learning_rate=0.03),
            loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
            metrics=['accuracy']
                    )


model.compile(
            # optimizer='rmsprop',
            tf.keras.optimizers.Adam(learning_rate=0.0001),
            loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
            metrics=['accuracy']
            )


history = model.fit(
                    train_images, train_labels,
                    # img_iter,
                    epochs=30,
                    validation_data=(test_images, test_labels),
                    batch_size=batch_size,
                    callbacks=[callback]
                    )



model.compile(
            # optimizer='rmsprop',
            tf.keras.optimizers.Adam(learning_rate=0.00001),
            loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
            metrics=['accuracy']
            )


history = model.fit(
                    train_images, train_labels,
                    # img_iter,
                    epochs=30,
                    validation_data=(test_images, test_labels),
                    batch_size=batch_size,
                    callbacks=[callback]
                    )


plt.plot(history.history['accuracy'], label='accuracy')
plt.plot(history.history['val_accuracy'], label = 'val_accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.ylim([0.5, 1])
plt.legend(loc='lower right')

test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

# print(test_loss)
print(test_acc)

model.save('drive/MyDrive/00AI/final3_model')

# best : epochs = 8 in 3th stage, batch=32, lr=0.00005
# loss: 0.0011 - accuracy: 0.9997 - val_loss: 1.0603 - val_accuracy: 0.86687

# original : epochs = 10, batch = 64
#  loss: 0.5924 - accuracy: 0.7902
#- val_loss: 0.8711 - val_accuracy: 0.7118
