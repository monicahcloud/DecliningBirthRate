#################################################
# Flask and Database Setup
#################################################

# Import Flask
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

# Create an app, being sure to pass __name__
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://mpiljlhpdduyfa:2332f5bec0021e7c8a94d4f2450748ccf8aeaf1a965c62cc3d3885a838a5e316@ec2-52-22-238-188.compute-1.amazonaws.com:5432/d29t1m9qk328vp"

db = SQLAlchemy(app)

# Map to database
class Birth(db.Model):
    __tablename__ = "births"
    state = db.Column('state', db.Unicode, primary_key=True)
    year = db.Column('year', db.Unicode)
    race = db.Column('race', db.Unicode)
    births = db.Column('births', db.Unicode)

    
births = Birth()
print(births)

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

engine = create_engine(app.config['SQLALCHEMY_DATABASE_URI'])

Base = automap_base()
Base.prepare(engine, reflect=True)

Base.classes.keys()
birth = Base.classes.births

# Define what to do when a user hits the index route
# @app.route("/")
# def index():
#     return render_template("index.html")

# @app.route("/race")
# def race():
#     return render_template("race.html")  

# @app.route("/state")
# def state():
#     return render_template("state.html")       

# @app.route("/total")
# def total():
#     return render_template("total.html")       

# @app.route("/age")
# def age():
#     return render_template("age.html")

# # Define main behavior
# if __name__ == "__main__":
#     app.run(debug=True)
