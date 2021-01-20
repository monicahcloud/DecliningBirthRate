#################################################
# Flask and Database Setup
#################################################

# Import Flask
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

# Create an app, being sure to pass __name__
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = ''
db = SQLAlchemy(app)

# Design database


# Define what to do when a user hits the index route
@app.route("/")
def index():
    return render_template("index.html")

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
