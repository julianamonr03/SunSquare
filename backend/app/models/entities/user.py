from werkzeug.security import check_password_hash
from flask_login import UserMixin

class User(UserMixin):

    def __init__(self, id, user, password):
        self.id = id
        self.user = user
        self.password = password

    @classmethod
    def verify_password(self, encrypt, password):
        return check_password_hash(encrypt, password)
