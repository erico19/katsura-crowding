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

response = requests.get('http://153.127.3.13/katsura/csv/5min/1215.csv', auth=HTTPBasicAuth('katsura', 'katsura'), stream=True)
df = pd.read_csv(response.raw)

name = "john"

@app.route('/')
def index():
    return render_template('index.html', variable=len(df))

@app.route("/hello")
def hello_world():
  return "<p>Hello, World! {{ name }}</p>"

@app.route("/api")
def katsura_data():
  return {
    'Name':"geek", 
    "Age":"22",
    "Date":x, 
    "programming":"python javascript",
    "programming2": name
    }

if __name__ == "__main__":
  app.run(debug=True)