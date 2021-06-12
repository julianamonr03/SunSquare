from .entities.property import Property


class ModelAnnoun:
    @classmethod
    def list_announ(self, db):
        """ Function for list the properties saved in database """
        try:
            point = db.connection.point()
            sql = """SELECT id, type, price, neighborhood, city, carpark, footage, numbath, numroom FROM properties ORDER BY ASC"""
            point.execute(sql)
            data = point.fetchall()
            properties = []
            for row in data:
                proper = Property(
                    row[1],
                    row[2],
                    row[3]
                )
                properties.append(proper)
            return properties
        except Exception as ex:
            raise Exception(ex)
