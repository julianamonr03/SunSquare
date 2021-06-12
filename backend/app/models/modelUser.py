from .entities.user import User
from backend.app.models.entities.user import User


class ModelUser:
    @classmethod
    def login(self, db, user):
        """Function for manage User Login"""
        try:
            cursor = db.connection.cursor()
            sql = """SELECT id, user, password FROM user WHERE user = '{0}'""".format(
                user.user
            )
            cursor.execute(sql)  # Execute in mysql previous script
            data = cursor.fetchone()
            if data != None:  # If there's data in the database
                coincide = User.verify_password(data[2], user.password)
                if coincide:  # Verify if input password matches
                    print("coincide")
                    logged_user = User(data[0], data[1], None)
                    return logged_user
                else:
                    print("No")
                    return None
            else:
                return None
        except Exception as ex:
            raise Exception(ex)

    @classmethod
    def get_id(self, db, id):
        """Function for get User Id for Login"""
        try:
            cursor = db.connection.cursor()
            sql = """SELECT id, user FROM user WHERE id = '{0}'""".format(id)
            cursor.execute(sql)
            data = cursor.fetchone()
            logged_user = User(data[0], data[1], None)
            return logged_user
        except Exception as ex:
            raise Exception(ex)
