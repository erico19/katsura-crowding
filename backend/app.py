from flask import Flask, render_template
from flask_cors import CORS
import numpy as np
import pandas as pd
import requests
from requests.auth import HTTPBasicAuth
import datetime
from datetime import timedelta

app = Flask(__name__)
CORS(app)

# Define function to round the time ------------------------------------------------------------------------
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

# Generate the time variable -------------------------------------------------------------------------------
today = datetime.datetime.now()
time = roundTime(today)

timeCode = time.strftime("%H") + time.strftime("%M")
dataURL = 'http://153.127.3.13/katsura/csv/5min/' + timeCode + '.csv'

# Import CSV file from the server --------------------------------------------------------------------------
response = requests.get(dataURL, auth=HTTPBasicAuth('katsura', 'katsura'), stream=True)
df = pd.read_csv(response.raw)

# Count the total number of AMAC adresses ------------------------------------------------------------------
count = len(df)

# Function to find average reading -------------------------------------------------------------------------
def find_average_reading(date, data, location, no_prev_days=3):
    ''' Data should be in form of a DataFrame'''
    
    curr_reading = df[df.date==date]
    curr_wifi_value = curr_reading[location].values[0]

    i = 0
    sum = 0
    count = 0
    while True:
        i += 1
        prev_date = date - timedelta(days=7*i)
        prev_reading = df[df.date==prev_date]

        # Stop if there are no more days left
        if len(prev_reading) == 0:
            break

        # Ignore days that are not lecture days
        is_lect_day = prev_reading.Lect_day.values[0]
        if not is_lect_day:
            continue

        # Pick out reading at the required location    
        reading = prev_reading[location].values[0]
        sum += reading
        count += 1
        
        # Stop if you get the required number of days
        if count == no_prev_days:
            break

    if count > 0:
        ave_reading = sum/count
        
        if count < 3:
            print("*"*50)
            print("Warning!!! - Only {} historical values available. The average may not be accurate".format(count))
            print("*"*50)
        return ave_reading
    else:
        print("*"*30)
        print("Warning!!! - No historical data available")
        print("Returning the current reading as the average")
        print("*"*30)
        return curr_wifi_value



def wifi_popular_times(date, data, location='CafEntr', no_prev_days=3):
    ''' Data should be in form of a DataFrame'''

    curr_reading = df[df.date==date][location].values[0]
    ave_reading = find_average_reading(date, data, location, no_prev_days)
    percent_diff = (curr_reading - ave_reading)/ave_reading

    if percent_diff == 0 or abs(percent_diff) <= 0.05:
      return 1
    elif percent_diff > 0.05 and percent_diff <= 0.15:
      return 2
    elif percent_diff > 0.15:
      return 3
    elif percent_diff < -0.05 and percent_diff >= -0.15:
      return 4
    elif percent_diff < -0.15:
      return 5



# Read in the required csv file and format that columns appropriately ----------------------------
df = pd.read_csv('Weekdays15Min_1.csv')
df['date'] = pd.to_datetime(df['date'])

# Test service level api -------------------------------------------------------------------------
location = 'CafEntr'
sample_date = df.date[1000]
service_level = wifi_popular_times(sample_date, df, location)

print(service_level)

@app.route("/api")
def katsura_data():
  return {
    "time": time.strftime("%X"),
    "count": count
    }

@app.route("/service-level-api")
def service():
  return {
    "service-level": service_level,
    }

if __name__ == "__main__":
  app.run(debug=True)