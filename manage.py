from config import config
from routes.base_routes import initiate_app
from flask_script import Manager, Server


configuration = config["development"]
app = initiate_app(configuration)


manager = Manager(app)
# Running app with "python3 manage.py runserver"
manager.add_command("runserver", Server(host="127.0.0.1", port="5000"))


if __name__ == "__main__":
    manager.run()
