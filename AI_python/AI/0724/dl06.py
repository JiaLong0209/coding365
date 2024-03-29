# -*- coding: utf-8 -*-
"""DL06.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1x0Pxpc5mHJNTNQWpOOWbtYR4s89x5hGw
"""

import os
import pandas as pd

all_headlines=[]
for filename in os.listdir('drive/MyDrive/00AI/articles/'):
  if 'Articles' in filename:
    headlines_df=pd.read_csv('drive/MyDrive/00AI/articles/'+filename)
    all_headlines.extend(list(headlines_df.headline.values))
len(all_headlines)

all_headlines[21:30]

"""首先清除"Unknown"資料"""

all_headlines=[h for h in all_headlines if h !="Unknown"]
len(all_headlines)

all_headlines[20:30]

"""移除標點符號與變化成小寫, 再將資料及內出現每個字轉換成數值，標記化(Tokenization)"""

import tensorflow as tf
tf.keras.preprocessing.text.Tokenizer(
    num_words=None,
    filters= '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}\t\n',
    lower=True,
    split=' ',
    char_level=False,
    oov_token=None,
    analyzer=None)

#Tokenizer=tf.keras.preprocessing.text.Tokenizer
#tokenizer=Tokenizer()
tokenizer=tf.keras.preprocessing.text.Tokenizer()
tokenizer.fit_on_texts(all_headlines)
total_words=len(tokenizer.word_index)+1
print('Total words',total_words)

all_headlines[:1]

#subset_dict={key: value for key, value in tokenizer.word_index.items() \
#       if key in ['a','man','a','plan','a','canal','panama']}
subset_dict={key: value for key, value in tokenizer.word_index.items() \
       if key in ['a','man','plan','canal','panama']}
print(subset_dict)

tokenizer.texts_to_sequences(['a','man','a','plan','a','canal','panama'])

tokenizer.texts_to_sequences(['a','man','a','plan','a','canal','panama'])[1]

input_sequences=[]
for line in all_headlines:
  token_list=tokenizer.texts_to_sequences([line])[0]
  for i in range(1,len(token_list)):
    partial_sequence = token_list[:i+1]
    input_sequences.append(partial_sequence)
print(tokenizer.sequences_to_texts(input_sequences[:5]))
input_sequences[:5]

"""為了讓序列長度相同 填充序列"""

from keras.utils.data_utils import pad_sequences
import numpy as np
max_sequence_len=max([len(x) for x in input_sequences])
input_sequences=np.array(pad_sequences(input_sequences,maxlen=max_sequence_len,padding='pre'))
input_sequences[0]

predictors = input_sequences[:,:-1]
labels=input_sequences[:,-1]
labels[:5]

utils=tf.keras.utils
labels=utils.to_categorical(labels,num_classes=total_words)

input_len=max_sequence_len-1
model = tf.keras.models.Sequential()
layers=tf.keras.layers
model.add(layers.Embedding(total_words,10,input_length=input_len))
model.add(layers.LSTM(100))
model.add(layers.Dropout(0.1))
model.add(layers.Dense(total_words, activation='softmax'))
model.summary()

model.compile(loss='categorical_crossentropy',optimizer='adam')

model.fit(predictors,labels,epochs=30,verbose=1)

model.save('drive/MyDrive/00AI/RNN_model')