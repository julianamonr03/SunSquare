from config import app, db
from flask_login import LoginManager
from app.models.user import User
from routes.base_routes import blueprint as main_blueprint
from routes.auth_routes import auth as auth_blueprint


# blueprint for auth routes in our app
app.register_blueprint(auth_blueprint)

# blueprint for non-auth routes of app
app.register_blueprint(main_blueprint)
