#################################################
# Flask and Database Setup
#################################################

# Import Flask
from flask import Flask, render_template, request, redirect, jsonify
import sqlalchemy
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, func
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session

#Database setup

connection_string = "postgresql://postgres:postgres@localhost:5432/BirthRate"
engine = create_engine(f'{connection_string}')

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

birthrate = Base.classes.birthrate
births_table = Base.classes.births


#Flask Set up
app = Flask(__name__)
# Flask routes
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/data")
def data():
    return render_template("data.html")   


@app.route("/births")
def births():
    
    # Create our session (link) from Python to the DB
    session = Session(engine)

    #Return a list of data including the state, year, race and births"""
    # Query all data
    results = session.query(births_table.state, births_table.year, births_table.race, births_table.births).all()
# print(results)

    session.close()

    data = []
    for state, year, race, birth in results:
    # print(state, year, race, births)
# Create a dictionary from the row data and append to a list of all_passengers
        info = {}
        info['state'] = state
        info['year'] = year
        info['race'] = race
        info['births'] = birth
        data.append(info)
# print(data)

    return jsonify(data)
    
if __name__ == '__main__':
    app.run(debug=True)
