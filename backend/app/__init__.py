#!/usr/bin/python3
from flask.json import jsonify
from backend.app.models.entities.property import Property
from backend.app.models.modelUser import ModelUser
from flask import Flask, render_template, request, url_for, redirect, jsonify
from flask.helpers import url_for
from werkzeug.utils import redirect
from flask_wtf.csrf import CSRFProtect
from .models.entities.user import User
from .models.modelUser import ModelUser
from flask_login import (
    LoginManager,
    login_user,
    logout_user,
    login_required,
    current_user,
)

from flask_mysqldb import MySQL
from .models.modelAnnoun import ModelAnnoun

app = Flask(__name__)

csrf = CSRFProtect()
db = MySQL(app)
login_manager_app = LoginManager(app)


@login_manager_app.user_loader
def load_user(id):
    return ModelUser.get_id(db, id)


@app.route("/")
# @login_required
def index():
    return render_template("index.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    # CSRF Cross-site Request Forgery (Attack)

    if request.method == "POST":
        user = User(None, request.form["user"], request.form["password"], None)
        logged_user = ModelUser.login(db, user)
        if logged_user != None:
            login_user(logged_user)
            return redirect(url_for("index"))
        else:
            return render_template("auth/login.html")
    else:
        return render_template("auth/login.html")


@app.route("/logout")
def logout():
    logout_user()
    return redirect(url_for("login"))


"""
Route for authenticate the session
@app.route("/apply")
#@login_required
def index():
    if current_user.is_authenticated:
        my_properties = []
        data = {
            'type': 'Property type',
            'price': 'price',
            'property': my_properties
        }
        return render_template("index.html")
    else:
        return redirect(url_for('login'))

"""


@app.route("/announ")
# @login_required
def list_properties():
    try:
        properties = ModelAnnoun.list_properties(db)
        data = {"properties": properties}
        return render_template("list_properties.html", data=data)
    except Exception as ex:
        print(ex)

@app.route("/applyProperty", methods=['POST'])
#@login_required
def apply_property():
    data_request=request.get_json()
    data = {}
    try:
        property=Property(data_request['id'], None)
        data['success']=True
    except Exception as ex:
        data['message']=format(ex)
        data['success']=False
    return jsonify(data)


def page_not_found(error):
    return render_template("errors/404.html"), 404


def page_not_authorized(error):
    return redirect(url_for("login"))


def initiate_app(config):
    app.config.from_object(config)
    csrf.init_app(app)
    app.register_error_handler(404, page_not_found)
    app.register_error_handler(401, page_not_authorized)
    return app
