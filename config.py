from flask import Flask
from flask_sqlalchemy import SQLAlchemy

""" Configuration file """


app = Flask(__name__)


app.secret_key = 'my12345secret0133key'

# sqlalchemy configuration for development
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = 'False'

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqldb://root@localhost/sunsquare'


# Save DB SQLAlchemy app
db = SQLAlchemy(app)
