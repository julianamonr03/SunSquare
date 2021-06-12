from flask_login import UserMixin
from werkzeug.security import check_password_hash, generate_password_hash


class User(UserMixin):
    def __init__(self, id, user, password):
        """Parameters for User Login"""
        self.id = id
        self.user = user
        self.password = password

    @classmethod
    def verify_password(self, encrypt, password):  # Verify password if matches
        return check_password_hash(encrypt, password)


class UserData:
    pass
