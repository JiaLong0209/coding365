
from keras.datasets import imdb
(train_data,train_labels),(test_data,test_labels)=imdb.load_data(num_words=10000)

word_index=imdb.get_word_index()
reverse_word_index=dict(
    [(value,key) for (key,value) in word_index.items()])

decoded_review=' ' .join([reverse_word_index.get(i-3,'?') for i in train_data[100]])


import numpy as np
# multi-hot encoding
def vectorize_sequences(sequences, dimension=10000):
  results = np.zeros((len(sequences), dimension))
  for i, sequence in enumerate(sequences): #https://www.runoob.com/python/python-func-enumerate.html
    results[i, sequence] = 1
  return results

import numpy as np
xxlist=[[15,2,16],[1,7,18]]
#xxarr=np.array(xxlist)
xx = np.zeros((len(xxlist), 20))
print(xxlist)
print(xx)
for i, sequence in enumerate(xxlist):
  print(i,sequence)
  xx[i, sequence] = 1
print(xx)

x_train = vectorize_sequences(train_data) #25,000*10,000=250,000,000
x_test = vectorize_sequences(test_data)

y_train = np.asarray(train_labels).astype('float32')
y_test = np.asarray(test_labels).astype('float32')


from keras import models
from keras import layers

model = models.Sequential()
model.add(layers.Dense(16, activation='relu', input_shape=(10000,)))
model.add(layers.Dense(16, activation='relu'))
model.add(layers.Dense(1, activation='sigmoid'))

model.compile(optimizer='rmsprop', loss='binary_crossentropy', metrics=['accuracy'])

model.summary()

x_val = x_train[:10000]
partial_x_train = x_train[10000:]  # x:value,data,image
y_val = y_train[:10000]
partial_y_train = y_train[10000:]  # y:label

x_val.shape,partial_x_train.shape

# history = model.fit(partial_x_train,
#       partial_y_train,
#       epochs=20,
#       batch_size=512,
#       validation_data=(x_val, y_val))

history = model.fit(x_train,
      y_train,
      epochs=20,
      batch_size=256,
      validation_data=(x_test, y_test))

def textToSequences(str):
    str = str.lower().split()
    return [word_index.get(i,'?') for i in (str)] 

str_list = ["This movie is really good","This is the worst movie I've ever seen"]
my_train = np.array([ textToSequences(i) for i in (str_list)])
my_train = vectorize_sequences(my_train)
print(my_train)
model.predict(my_train)


# import matplotlib.pyplot as plt
# history_dict = history.history
# loss_values = history_dict['loss']
# val_loss_values = history_dict['val_loss']
# epochs = range(1, len(loss_values) + 1)
# plt.plot(epochs, loss_values, 'bo', label='Training loss')
# plt.plot(epochs, val_loss_values, 'b', label='Validation loss')
# plt.title('Training and validation loss')
# plt.xlabel('Epochs')
# plt.ylabel('Loss')
# plt.legend()
# plt.show()

# acc_values = history_dict['accuracy']
# val_acc_values = history_dict['val_accuracy']
# plt.plot(epochs, acc_values, 'bo', label='Training acc')
# plt.plot(epochs, val_acc_values, 'b', label='Validation acc')
# plt.title('Training and validation accuracy')
# plt.xlabel('Epochs')
# plt.ylabel('Accuracy')
# plt.legend()
# plt.show()

# [loss, acc] = model.evaluate(x_test, y_test)
# print('Accuracy: ', acc)

# partial_y_train[:10]

# print( model.predict(partial_x_train[:10]))