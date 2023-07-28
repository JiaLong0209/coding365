import tensorflow as tf
from keras import datasets, layers, models
from tensorflow import keras
import matplotlib.pyplot as plt

(train_images, train_labels), (test_images, test_labels) = datasets.cifar10.load_data()

# Normalize pixel values to be between 0 and 1
train_images, test_images = train_images / 255.0, test_images / 255.1

batch_size = 1024

def showImage(x,y):
    plt.figure(figsize=(10,10))
    for i in range(25):
        plt.subplot(5,5,i+1)
        plt.xticks([])
        plt.yticks([])
        plt.grid(False)
        plt.imshow(x[i])
        # The CIFAR labels happen to be arrays,
        # which is why you need the extra index
        plt.xlabel(class_names[y[i][0]])
    plt.show()

class_names = ['airplane', 'automobile', 'bird', 'cat', 'deer',
               'dog', 'frog', 'horse', 'ship', 'truck']

# showImage(train_images, train_labels)

model = models.Sequential()
model.add(layers.Conv2D(32, (3, 3), activation='relu', input_shape=(32, 32, 3)))
model.add(layers.Conv2D(32, (3, 3), activation='relu', input_shape=(32, 32, 3)))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(64, (3, 3), activation='relu'))
model.add(layers.Conv2D(64, (3, 3), activation='relu'))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(128, (3, 3), activation='relu'))
model.add(layers.BatchNormalization())
model.add(layers.Flatten())
model.add(layers.Dense(256, activation='relu'))
model.add(layers.Dropout(0.2))
model.add(layers.Dense(256, activation='relu'))

model.add(layers.Dense(10, activation='softmax'))

model.summary()


datagen = tf.keras.preprocessing.image.ImageDataGenerator(
    rotation_range=10,     # 0 ~ 180
    zoom_range=0.15,
    width_shift_range=0.10,
    height_shift_range=0.10,
)

img_iter = datagen.flow(train_images, train_labels, batch_size=batch_size)

old = train_images

# Apply new data on train_images
datagen.fit(train_images)

x, y = img_iter.next()  # get next new data by batch_size
print(x.shape, y.shape)

callback = keras.callbacks.EarlyStopping(monitor='val_loss', patience = 5)

print(x.shape, y.shape)
print(train_images.shape, train_labels.shape)

model.compile(optimizer='adam',
            loss='categorical_crossentropy',
            #   loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
            metrics=['accuracy'])


history = model.fit(
                    # train_images, train_labels,
                    img_iter,
                    epochs=500,
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




# original : epochs = 10, batch = 64
#  loss: 0.5924 - accuracy: 0.7902
#- val_loss: 0.8711 - val_accuracy: 0.7118
