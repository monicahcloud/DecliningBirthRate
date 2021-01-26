#################################################
# Flask and Database Setup
#################################################

# Import Flask
from flask import Flask, render_template, request, redirect, jsonify
import sqlalchemy
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, func
from sqlalchemy import Table, Column, Integer, String, MetaData, ForeignKey
from sqlalchemy import Sequence
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy.sql import text
import json

#Connect to database
connection_string = "postgresql://postgres:postgres@localhost:5432/BirthRate"
engine = create_engine(f'{connection_string}')

app = Flask(__name__)

db = SQLAlchemy(app)

#inspect the database 
from sqlalchemy import inspect
inspector = inspect(engine)

# Get names of tables in database
# print(inspector.get_table_names())

#Executing Raw SQL Statements
con = engine.connect()
rs = con.execute("SELECT * FROM births")

# print(rs.fetchall())


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/births")
def births():
    data = []
    for info in (rs.fetchall()):
        # print(info)      
        data.append({
            "state": info["state"],
            "year": info["year"],
            'race': info['race'],
            "births": info['births'],
            # 'total_pop':info['total_pop'] ,
            # 'birth_rate':info['birth_rate'],
            # 'female_pop':info['female_pop'],
            # 'fertility_rate':info['fertility_rate'],
        })
           
    return jsonify(data=data)


if __name__ == "__main__":
    app.run(debug=True)
