#!/usr/bin/env /Users/kcoufal/miniconda3/bin/python3.7
# -*- coding: utf8 -*-

from flask import Flask  
import datetime as dt
import platform

server = Flask(__name__)

@server.route("/")  
def message():
    return "<html><body><h1>Hi, welcome to the website</h1></body></html>"  

@server.route("/date")  
def date():
    return dt.datetime.now().strftime('%s')

if __name__ == "__main__":  
    server.run(host='0.0.0.0')