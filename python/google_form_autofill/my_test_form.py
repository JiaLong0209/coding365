# -*- coding: utf-8 -*-
"""form_auto_fill.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1NSq9zg7aJDjcL8Sbanf0y7BWBEBb-pEW
"""

# for my test form
import re
import time
import random
import numpy as np
import requests as rq
import json

url = 'https://docs.google.com/forms/d/e/1FAIpQLSeG-3kXi6ldRq89p7q1rgO4STHqkpd6iaPrwDXfwGX7CCcxzQ/formResponse'

params = [
        ['Ubuntu22.04', 'Ubuntu21.04', 'Win10', 'Win11', 'MacOS', 'Kali Linux', 'Debian', 'Mint', 'Unix', 'Minx'],
        ['Yes', 'No', 'Yes', 'Yes'],
        ['1','2','3','4'],
    ]

entries = [
        "entry.2005620554",
        "entry.1150564948",
        "entry.80932009",
        ]


payload = {
    "entry.2005620554"	:"",
    "entry.1150564948"	:"",
    "entry.80932009": "",

    "entry.1150564948_sentinel"	:"",
    "entry.80932009_sentinel": "",
    "fvv"	:"1",
    "partialResponse"	:'[null,null,"9196068090220534317"]',
    "pageHistory"	:"0",
    "fbzx"	:"9196068090220534317" ,
}

num = 1  # number of executions
period = np.arange(0.02, 1.0, 0.01)
delay = 0  # delay of execution
delay_mode = False
checkbox_data = ''
headers = {'Content-Type': 'application/json'}
payload_list = []

while num > 0:
    try:
        for index, entry in enumerate(entries):

            answer = random.choice(params[index])

            # if(index == 2):
            #     for p in params[index]:
            #     continue
            payload[entry] = answer


        print(json.dumps(payload)+'"entry.80932009": "3"')
        print(str(payload))

        for key,value in payload.items():
            payload_list.append((key,value))

        print(payload_list)

        res = rq.post(url, data = payload_list)
        # res = rq.post(url, json = json.dumps(payload))
        # res = rq.post(url, json = json.dumps(payload))
        # json_data = json.dumps(payload)
        # res = rq.post(url, data = json_data, headers = headers)

        res.raise_for_status()

        if res.status_code == 200 :
            delay = round(random.choice(period), 2)  # round off to the 2nd decimal place

            for i in entries:
                print('Fill Out : ' + payload[i] + ' delay : ' + str(delay) + ' sec')

            if delay_mode:
                time.sleep(delay)

    except rq.HTTPError:
        print(res.status_code)
        print('HTTP Error!')

    num -= 1
