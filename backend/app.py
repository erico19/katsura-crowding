from flask import Flask, render_template
from flask_cors import CORS
import numpy as np
import pandas as pd
import requests
from requests.auth import HTTPBasicAuth
import datetime

app = Flask(__name__)
CORS(app)

# Define function to round the time
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

# Generate the time variable
today = datetime.datetime.now()
time = roundTime(today)

timeCode = time.strftime("%H") + time.strftime("%M")
dataURL = 'http://153.127.3.13/katsura/csv/5min/' + timeCode + '.csv'

# Import CSV file from the server
response = requests.get(dataURL, auth=HTTPBasicAuth('katsura', 'katsura'), stream=True)
df = pd.read_csv(response.raw)

# Count the total number of AMAC adresses
count = len(df)

@app.route("/api")
def katsura_data():
  return {
    "time": time.strftime("%X"),
    "count": count
    }

if __name__ == "__main__":
  app.run(debug=True)