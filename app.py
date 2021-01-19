#################################################
# Flask and Database Setup
#################################################

# Import Flask
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

# Create an app, being sure to pass __name__
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///birthRate.db'
db = SQLAlchemy(app)

# Design database
class birth(db.Model):
    state = db.Column(db.String, primary_key=True)
    county = db.Column(db.String(128), nullable=False, default='N/A')
    year = db.Column(db.Integer, nullable=False, default='N/A')
    births = db.Column(db.Integer,  nullable=False, default='N/A')
    birthrate = db.Column(db.Integer,  nullable=False, default='N/A')
    fertilityrate = db.Column(db.Integer,  nullable=False, default='N/A')

    def __repr__(self):
        return 'birth' + str(self.state)

class fertility_info(db.Model):
    state = db.Column(db.String, primary_key=True)
    year = db.Column(db.Integer, nullable=False, default='N/A')
    race = db.Column(db.String,  nullable=False, default='N/A')
    births = db.Column(db.Integer,  nullable=False, default='N/A')
    fertilityrate = db.Column(db.Integer,  nullable=False, default='N/A')
    femalePopulation = db.Column(db.Integer,  nullable=False, default='N/A')
    def __repr__(self):
        return 'fertility_info' + str(self.state)

class birth_rate(db.Model):
    state = db.Column(db.String, primary_key=True)
    year = db.Column(db.Integer, nullable=False, default='N/A')
    race = db.Column(db.String,  nullable=False, default='N/A')
    age = db.Column(db.Integer, nullable=False, default= "N/A")
    births = db.Column(db.Integer,  nullable=False, default='N/A')
    femalePopulation = db.Column(db.Integer,  nullable=False, default='N/A')
    fertilityrate = db.Column(db.Integer,  nullable=False, default='N/A')
    totalPopulation = db.Column(db.Integer, nullable=False, default='N/A')
    birthrate = db.Column(db.Integer,  nullable=False, default='N/A')
    def __repr__(self):
        return 'birth_rate' + str(self.state)
 
class moms_education(db.Model):
    state = db.Column(db.String, primary_key=True)
    year = db.Column(db.Integer, nullable=False, default='N/A')
    race = db.Column(db.String,  nullable=False, default='N/A')
    age = db.Column(db.Integer, nullable=False, default= "N/A")
    births = db.Column(db.Integer,  nullable=False, default='N/A')
    education = db.Column(db.String,  nullable=False, default='N/A')
    
    def __repr__(self):
        return 'moms_education' + str(self.state)

class infant(db.Model):
    state = db.Column(db.String, primary_key=True)
    year = db.Column(db.Integer, nullable=False, default='N/A')
    sex = db.Column(db.String,  nullable=False, default='N/A')
    plurality = db.Column(db.String, nullable=False, default= "N/A")
    mom_age = db.Column(db.Integer,  nullable=False, default='N/A')
    births = db.Column(db.Integer,  nullable=False, default='N/A')

    def __repr__(self):
        return 'infant' + str(self.state)

# Define what to do when a user hits the index route
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")  

@app.route("/race")
def race():
    return render_template("race.html")  

@app.route("/state")
def state():
    return render_template("state.html")       

@app.route("/total")
def total():
    return render_template("total.html")       

@app.route("/age")
def age():
    return render_template("age.html")

# Define main behavior
if __name__ == "__main__":
    app.run(debug=True)
