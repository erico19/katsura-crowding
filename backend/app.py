from flask import Flask, render_template
from flask_cors import CORS
import numpy as np
import pandas as pd
import requests
from requests.auth import HTTPBasicAuth
import datetime
  
x = datetime.datetime.now()

app = Flask(__name__)
CORS(app)

def roundTime(dt=None, roundTo=5*60):
   """Round a datetime object to any time lapse in seconds
   dt : datetime.datetime object, default now.
   roundTo : Closest number of seconds to round to, default 1 minute.
   Author: Thierry Husson 2012 - Use it as you want but don't blame me.
   """
   if dt == None : dt = datetime.datetime.now()
   seconds = (dt.replace(tzinfo=None) - dt.min).seconds
   rounding = (seconds+roundTo/2) // roundTo * roundTo
   return dt + datetime.timedelta(0,rounding-seconds,-dt.microsecond)

response = requests.get('http://153.127.3.13/katsura/csv/5min/1215.csv', auth=HTTPBasicAuth('katsura', 'katsura'), stream=True)
df = pd.read_csv(response.raw)

x = datetime.datetime.now()

time = roundTime(x)
count = len(df)

@app.route('/')
def index():
    return render_template('index.html', variable=len(df))

@app.route("/hello")
def hello_world():
  return "<p>Hello, World! {{ name }}</p>"

@app.route("/api")
def katsura_data():
  return {
    "time": "12:15:00",
    "count": count
    }

if __name__ == "__main__":
  app.run(debug=True)


# "time": time.strftime("%X"),