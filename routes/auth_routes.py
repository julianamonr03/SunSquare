from app.models.user import User
from flask import Blueprint, render_template, redirect, url_for, flash
from flask.globals import request
from . import db, app
from werkzeug.security import check_password_hash, generate_password_hash
from flask_login import LoginManager, login_required, login_user, logout_user


auth = Blueprint('auth', __name__)


login_manager = LoginManager()
login_manager.init_app(app)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


@auth.route('/login', methods=['POST', 'GET'])
def login():
    email = request.form.get('email')
    password = request.form.get('password')

    user = User.query.filter_by(email=email).first()

    # Checking is user exists or password matches with database
    if not user or not check_password_hash(user.password, password):
        flash('Incorrect user or password, try again.')
        return redirect(url_for('auth.login'))

    # If user and password is correct redirect to their profile
    login_user(user)
    return (url_for('blueprint.profile'))




@auth.route('/signup', methods=['POST'])
def signup():
    email = request.form.get('email')
    name = request.form.get('name')
    password = request.form.get('password')

    #user = User.query.filter_by(email=email).first()

    #if user:
     #   flash('Email address already exists')
    #return redirect(url_for('auth.signup'))

    new_user = User(email=email, name=name, password=generate_password_hash(password, method='sha256'))

    db.session.add(new_user)
    db.session.commit()
    return redirect(url_for('blueprint.index'))

@auth.route('/logout')
#@login_required
def logout():
    logout_user()
    return redirect(url_for("auth.login"))
