
base_path = './AI/src/'
# predictImage('./AI/src/01.png')

import glob, os

result = [os.path.basename(f) for f in glob.glob(os.path.join(base_path, '*.png'))]
print(result)