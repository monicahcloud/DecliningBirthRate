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
rs = con.execute("SELECT * FROM birthrate")

print(rs.fetchall())

# #Declare a mapping
# Base = automap_base()
# Base.prepare(engine, reflect=True)


# Base.classes.keys()
# birthrate = Base.classes.birthrate
# births = Base.classes.births

# session = Session(engine)

# session.query(birthrate)

# @app.route("/")
# def home():
#     return render_template("index.html")


# @app.route("/birthrate")
# def birthrate():
#     # data = []
#     # for info in (rs):
#     #     data.append({
#     #         "State": 'state',
#     #         "Year": 'year',
#     #         'Race':'race',
#     #         "Births": "births",
#     #         'Total Population': 'total_pop',
#     #         'Birth Rate' : 'birth_rate',
#     #         'Female Population': 'female_pop',
#     #         "Fertility Rate": 'fertility_rate',
#     #     })
#     # return jsonify(data=data)
#     return "Monicah Rocks... The world can't handle another!"


# if __name__ == "__main__":
#     app.run(debug=True)
