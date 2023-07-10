import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

def r(n): return round(n,2)
def percent(n): return str(r(n*100))+'%'

df = pd.read_csv('./0707/hw1.csv')

#Calculate BMI
df['BMI'] = r(df['weight'] / (df['height']/100)**2)
print(df)

#calculate Report Count and Unique Report Count
rpt = np.array(df['report_id'])
uni = np.unique(rpt)

print(f'Report Count:{len(rpt)}\nUnique Report Count:{len(uni)}')

#calculate Average age, weight and height
avgAge = df.describe().loc['mean','age']
avgHeight = df.describe().loc['mean','height']
avgWeight = df.describe().loc['mean','weight']
print(f'Average Age: {r(avgAge)}')
print(f'Average Weight: {r(avgWeight)}')
print(f'Average Height: {r(avgHeight)}')

#calculate the percentage of females and males with disease1
f_term = df['sex'] == 0
m_term = df['sex'] == 1
d1_true = df['disease'] == True

female = df[f_term]
femaleWithDisease = df[f_term & d1_true]
f_count = len(female)
f_d1_count = len(femaleWithDisease)
f_d1_prop = f_d1_count / f_count

male = df[m_term]
maleWithDisease = df[m_term & d1_true]
m_count = len(male)
m_d1_count = len(maleWithDisease)
m_d1_prop = m_d1_count / m_count

print()
print(f'Females with disease1: {percent(f_d1_prop)}')
print(f'Males with disease1: {percent(m_d1_prop)}')

people_d1_count = f_d1_count + m_d1_count
f_prop_d1 = f_d1_count / people_d1_count
m_prop_d1 = m_d1_count / people_d1_count

print()
print(f'Females and Males with disease1: \n    females: {percent(f_prop_d1)}\n    males: {percent(m_prop_d1)}')

#calculate the percentage of reported females and males
people_count = f_count + m_count
f_rpt_prop = f_count / people_count
m_rpt_prop = m_count / people_count

print()
print(f'Females and Males reporting: \n    females: {percent(f_rpt_prop)}\n    males: {percent(m_rpt_prop)}')

# show pie chart

def make_autopct(values):
    def autopct(percent):
        total = sum(values)
        val = int(round(percent * total/100))
        return f'{r(percent)}%\n({val})'
    return autopct

color = ['#8dc','#b96']
values = [f_count,m_count]
plt.subplot(221)
plt.title('Reporting Count')
plt.pie(values, labels=['female','male'], shadow=True, autopct=make_autopct(values),textprops={'color':'#333','size':9},colors=color)

values = [f_d1_count,m_d1_count]
plt.subplot(222)
plt.title('Gender with Disease1')
plt.pie(values, labels=['female','male'], shadow=True, autopct=make_autopct(values),textprops={'color':'#333','size':9},colors=color)

values = [f_count - f_d1_count, f_d1_count]
plt.subplot(223)
plt.title('Females with Disease1')
plt.pie(values, labels=['no has','has'], shadow=True, autopct=make_autopct(values),textprops={'color':'#333','size':9},colors=color)

values = [m_count - m_d1_count, m_d1_count]
plt.subplot(224)
plt.title('Males with Disease1')
plt.pie(values, labels=['no has','has'], shadow=True, autopct=make_autopct(values),textprops={'color':'#333','size':9},colors=color)
# print(df.describe())

plt.savefig('hw1.png')

# print(df[df['report_id']=='R0001190'])