from flask import Flask
from flask_sqlalchemy import SQLAlchemy

""" Configuration file """

# Secret key for password config
class Config:
    SECRET_KEY = "secret123345key"


app = Flask(__name__)


# sqlalchemy configuration for development
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = 'False'

# Save DB SQLAlchemy app
db = SQLAlchemy(app)

class DevelopmentConfig(Config):
    DEBUG = True
    MYSQL_HOST = "localhost"
    MYSQL_USER = "root"
    MYSQL_PASSWORD = ""
    MYSQL_DB = "sunsquare"

config = {"development": DevelopmentConfig, "default": DevelopmentConfig}
