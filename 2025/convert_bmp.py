from PIL import Image
import numpy as np
import re
from tkinter import filedialog as fd
import pandas as pd

'''
This script converts an image in PNG format into a bitmap as a JavaScript array.

Each pixel in the image will be represented with the integer that matches with its color in COLORS.
The completed line of JavaScript code will appear in the user's clipboard.
'''

COLORS = {1:[0, 0, 0, 255], 2:[85, 85, 85, 255], 3:[170, 170, 170, 255], 4:[255, 255, 255, 255]}

def to_palette(file_path):
    '''
    Return a numpy array containing the image located at FILE_PATH, with each pixel replaced with an integer 1-4.
    '''
    img_array = np.array(Image.open(file_path))
    result = np.zeros(img_array.shape[:2])
    for key in COLORS:
        result += np.all(img_array == COLORS[key], axis=2) * key

    return result.astype(int)

def get_javascript(file_path):
    '''
    Return a string containing the image at FILE_PATH converted into a JavaScript array.
    '''
    matches = re.findall("([^/]+?).png", file_path)
    if matches:
        name = matches[0]
    else:
        name = "bitmap"
    arr = to_palette(file_path)
    result = "const " + name + "_bmp = ["

    for row in arr:
        result += "["
        for color in row:
            result += str(color) + ", "
        result = result[:-2]
        result += "], "
    result = result[:-2]
    result += "];"

    return result

filenames = fd.askopenfilenames()

result = ""

for filename in filenames:
    result += get_javascript(filename) + "\n"

df = pd.DataFrame([result])
df.to_clipboard(index=False,header=False)

print(result)