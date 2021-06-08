from backend.app.models.entities.user import User
from .entities.user import User


class ModelUser:
    @classmethod
    def login(self, db, user):
        try:
            cursor = db.connection.cursor()
            sql = """SELECT id, user, password FROM user WHERE user = '{0}'""".format(
                user.user
            )
            cursor.execute(sql)
            data = cursor.fetchone()
            if data != None:
                coincide = User.verify_password(data[2], user.password)
                if coincide:
                    logged_user = User(data[0], data[1], None, None)
                    return logged_user
                else:
                    return None
            else:
                return None
        except Exception as ex:
            raise Exception(ex)

    @classmethod
    def get_id(self, db, id):
        try:
            cursor = db.connection.cursor()
            sql = """SELECT id, user FROM user WHERE user = '{0}'""".format(id)
            cursor.execute(sql)
            data = cursor.fetchone()
            logged_user = User(data[0], data[1], None)
            return logged_user
        except Exception as ex:
            raise Exception(ex)
