from config import db
from flask_login import UserMixin

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(45), nullable=False)
    #name = db.Column(db.String(45), nullable=False)
    #lastname = db.Column(db.String(45), nullable=False)
    #age = db.Column(db.Integer, nullable=False)
    #typeofwork = db.Column(db.String(100), nullable=False)
    #incomes = db.Column(db.Integer, nullable=False)
    #phone = db.Column(db.Integer, nullable=False)
    #references = db.Column(db.String(200), nullable=False)
