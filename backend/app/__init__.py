#!/usr/bin/python3
from flask.json import jsonify
from flask_mysqldb import MySQL
from flask.helpers import url_for
from flask_wtf.csrf import CSRFProtect
from flask import Flask, render_template, request, url_for, redirect, jsonify

from backend.app.models.modelUser import ModelUser
from backend.app.models.entities.property import Property

from werkzeug.utils import redirect
from werkzeug.security import check_password_hash, generate_password_hash

from .models.entities.user import User
from .models.modelUser import ModelUser
from .models.modelAnnoun import ModelAnnoun

from flask_login import (
    LoginManager,
    login_user,
    logout_user,
    login_required,
    current_user,
)

# Running flask app
app = Flask(__name__)

csrf = CSRFProtect()
# MySQL database
db = MySQL(app)
login_manager_app = LoginManager(app)


@login_manager_app.user_loader
def load_user(id):
    """Function for keep user logged"""
    return ModelUser.get_id(db, id)


@app.route("/")
# @login_required
def index():
    """Route Index page"""
    return render_template("index.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    # CSRF Cross-site Request Forgery (Attack)
    """Route for User Login"""

    if request.method == "POST":
        user = User(None, request.form["user"], request.form["password"])
        logged_user = ModelUser.login(db, user)
        if logged_user != None:  # If user is logged
            login_user(logged_user)
            print("logged")
            return redirect(url_for("index"))
        else:
            return render_template("auth/login.html")
    else:
        return render_template("auth/login.html")


@app.route("/logout")
def logout():
    """Route for User Logout"""
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


@app.route("/password/<password>")
# @login_required
def generate_pass(password):
    """Function for generate encrypted password"""
    encriptado = generate_password_hash(password)
    return "ENCRIPTADO: {0}".format(encriptado)


@app.route("/announ")
# @login_required
def list_properties():
    """Route for list all the properties available"""
    """
    try:
        properties = ModelAnnoun.list_properties(db)
        data = {"properties": properties}
        return render_template("list_properties.html", data=data)
    except Exception as ex:
        print(ex)
    """

    try:
        cursor = db.connection.cursor()
        sql = "SELECT id, type, footage, numroom, numbath FROM properties"
        cursor.execute(sql)
        data = cursor.fetchall()
        data = {"properties": data}
        return render_template("list_properties.html", data=data)
    except Exception as ex:
        print(ex)


@app.route("/applyProperty", methods=["POST"])
# @login_required
def apply_property():
    """Route for apply to a property"""
    data_request = request.get_json()
    data = {}
    try:
        property = Property(data_request["id"], None)
        data["success"] = True
    except Exception as ex:
        data["message"] = format(ex)
        data["success"] = False
    return jsonify(data)


def page_not_found(error):
    """Function for manage error 404 - Not found"""
    return render_template("errors/404.html"), 404


def page_not_authorized(error):
    """Function for manage error login - Not authorized"""
    return redirect(url_for("login"))


def initiate_app(config):
    app.config.from_object(config)
    csrf.init_app(app)
    app.register_error_handler(404, page_not_found)
    app.register_error_handler(401, page_not_authorized)
    return app
