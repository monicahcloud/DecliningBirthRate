#################################################
# Flask and Database Setup
#################################################

# Import Flask
from flask import Flask , render_template, request
from flask_sqlalchemy import SQLAlchemy
from config import username, password, servername, port, dbname
import sqlalchemy

app = Flask(__name__)

ENV = 'dev'

if ENV == 'dev':

    app.debug = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://{username}:{password}@{servername}/{dbname}'
else:
    app.debug = False
    app.config['SQLALCHEMY_DATABASE_URI'] = ''

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


# Map to database
class Birth(db.Model):
    __tablename__ = "births"
    state = db.Column('state', db.String, primary_key=True)
    year = db.Column('year', db.Integer)
    race = db.Column('race', db.String)
    births = db.Column('births', db.Integer)

    def __init__(self, state, year, race, births):
        self.state = state
        self.year = year
        self.race = race
        self.births = births

# Define what to do when a user hits the index route
@app.route("/")
def index():
    return render_template("index.html")


# # Define main behavior
if __name__ == "__main__":
    app.run(debug=True)








# from sqlalchemy import create_engine
# from sqlalchemy import Table, Column, Integer, String, MetaData, ForeignKey
# from sqlalchemy  import Sequence
# import sqlalchemy
# from sqlalchemy import create_engine, inspect, func
# from config import username , password
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session

# dbname=''
# servername='localhost'
# port=5432
# conn_string = f'postgres://{username}:{password}@{servername}:{port}/{dbname}'
# engine = create_engine( conn_string , echo = False)

# Base = automap_base()
# Base.prepare(engine, reflect=True)

# Base.classes.keys()
# inspector = inspect(engine)
# tables = inspector.get_table_names()
# print(tables)

# views = inspector.get_view_names()
# print(views)

# print(f'Sqlclchemy version : {sqlalchemy.__version__}' )

# from sqlalchemy.orm import Session
# session = Session(bind=engine)

# # Create an app, being sure to pass __name__
# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://mpiljlhpdduyfa:2332f5bec0021e7c8a94d4f2450748ccf8aeaf1a965c62cc3d3885a838a5e316@ec2-52-22-238-188.compute-1.amazonaws.com:5432/d29t1m9qk328vp"

# db = SQLAlchemy(app)

# # Map to database
# class Birth(db.Model):
#     __tablename__ = "births"
#     state = db.Column('state', db.Unicode, primary_key=True)
#     year = db.Column('year', db.Unicode)
#     race = db.Column('race', db.Unicode)
#     births = db.Column('births', db.Unicode)

    
# births = Birth()
# print(births)

# import sqlalchemy
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine, func

# engine = create_engine(app.config['SQLALCHEMY_DATABASE_URI'])

# Base = automap_base()
# Base.prepare(engine, reflect=True)

# Base.classes.keys()
# birth = Base.classes.births

