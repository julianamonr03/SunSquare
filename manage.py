from config import app
from routes.base_routes import initiate_app


if __name__ == "__main__":
    app.run(debug=True)
