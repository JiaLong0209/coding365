# For Gaomei wetland form

import time
import random
import numpy as np
import requests as rq

url = 'https://docs.google.com/forms/d/e/1FAIpQLSdR2pOtqA3-ATgXqWmze_0fwob4t8R1hK69-LpZll8RC6Q2pw/formResponse'

params = [
        ['沒有去過'],
        ['鳥類生態','生物的生態習性','觀察生物','都可以','參加生態導覽','濕地生態系統',],
        ['沒有'],
        ['1','2','3'],
        ['不知道','知道'],
        ['黑面琵鷺','卷羽鵜鶘','黑嘴鷗','遊隼'], # checkbox index: 4
        ['濕地逐漸陸化','外來種植物入侵','棲地遭人類開發','遊客的不良行為'], # checkbox index: 5
        ['是','否'],
        ['願意','不願意','不願意','不願意'],
        ['2','3','4','5'],
    ]

condition_answer = [
    ['沒有','無','沒有去過' ],
    ['沒有特別想學習或體驗哪方面的生態知識','不知道','不願意','無'],
]

entries = [
        "entry.1777138884" , # experience: any
        "entry.1451552789" , # what aspect you want learn or experience: any
        "entry.1440397287" , # have visited ?
        "entry.1729198482" , # know about this location: 1 ~ 5
        "entry.1270058187" , # <the international importance : yes, no
        "entry.1515624175" , # Checkbox> the endangered species: 黑面琵鷺,
        "entry.513100857" ,  # <Checkbox> the crises or threats:
        "entry.1927197578" , # should strengthen ecological education activities? :
        "entry.1533228073" , # Would you participate the activities? :
        "entry.1822746617" , # would you like to know more about this? 1 ~ 5
        ]

payload = {
    "entry.1777138884" : "",
    "entry.1451552789"  : "",
    "entry.1440397287" : "",
    "entry.1729198482" : "",
    "entry.1270058187" : "", # checkbox
    "entry.1515624175" : "", # checkbox
    "entry.513100857" : "",
    "entry.1927197578" : "",
    "entry.1533228073" : "",
    "entry.1822746617" : "",

    "entry.1440397287_sentinel" : "",
    "entry.1729198482_sentinel" : "",
    "entry.1270058187_sentinel" : "",
    "entry.1515624175_sentinel" : "",
    "entry.513100857_sentinel" : "",
    "entry.1927197578_sentinel" : "",
    "entry.1533228073_sentinel" : "",
    "entry.1822746617_sentinel" : "",
    "fvv" : "1",
    "partialResponse" :  '[null,null,"-8790612009638299349"]',
    "pageHistory" : "0",
    "fbzx" : "-8790612009638299349",
}

num = 1  # number of executions
period = np.arange(0.02, 1.0, 0.01)
delay = 0  # delay of execution
delay_mode = False
checkbox_index = [5,6]
headers = {'Content-Type': 'application/json'}
payload_list = []

for times in range(num):
    try:
        for index, entry in enumerate(entries):
            answer = random.choice(params[index])

            # Conditional question
            if(index == 1):
                if payload[entries[index-1]] == '沒有':
                    answer = random.choice(condition_answer[0])
            elif(index == 8):
                if payload[entries[index-1]] == '不願意':
                    answer = random.choice(condition_answer[1])

            # checkbox answer
            if(index in checkbox_index):
                answer = []
                for p in params[index]:
                    answer.append(random.choice(params[index]))

                answer = list(set(answer))
                for j, value in enumerate(answer):

                    if(j==0):
                        payload[entry] = value
                        continue

                    payload_list.append((entry, value))
                payload[entry] = answer
                continue

            payload[entry] = answer

        print(payload)

        for key,value in payload.items():
            payload_list.append((key,value))
        print(payload_list)

        res = rq.post(url, data = payload_list)
        # res = rq.post(url, data = json.dumps(payload), headers = headers)
        res.raise_for_status()



        if res.status_code == 200 :
            delay = round(random.choice(period), 2)  # round off to the 2nd decimal place


            print(f'Count : {times+1}')
            for i in payload:
                if not payload[i]: continue
                # print(f'\tFill Out: {payload[i]} \t\tdelay: {delay} sec')
                print('\t{:<16} : {:<40}'.format(str(i), str(payload[i])) + '\t\tdelay : {:<4}'.format(str(delay)) + ' sec')

            if delay_mode:
                time.sleep(delay)

    except rq.HTTPError:
        print(res.status_code)
        print('HTTP Error!')
