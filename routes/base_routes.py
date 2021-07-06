from flask import Blueprint, blueprints, render_template
from config import app
from flask_login import login_required, current_user

blueprint = Blueprint('blueprint', __name__)


@blueprint.route('/')
def index():
    """ Route for index page """
    # return ("ok")
    return render_template('index.html')


@blueprint.route('/profile')
#@login_required
def profile():
    return render_template('profile.html', name='juli')


def initiate_app(config):
    app.config.from_object(config)
    # csrf.init_app(app)
    # app.register_error_handler(404, page_not_found)
    # app.register_error_handler(401, page_not_authorized)
    return app

