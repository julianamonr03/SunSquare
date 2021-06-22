from config import app


def initiate_app(config):
    app.config.from_object(config)
    # csrf.init_app(app)
    # app.register_error_handler(404, page_not_found)
    # app.register_error_handler(401, page_not_authorized)
    return app
