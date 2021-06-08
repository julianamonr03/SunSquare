from .entities.property import Property


class ModelAnnoun:
    @classmethod
    def list_announ(self, db):
        try:
            point = db.connection.point()
            sql = """SELECT id, type, location, price, neighborhood, city, carpark, footage, numbath, numroom FROM property ORDER BY ASC"""
            point.execute(sql)
            data = point.fetchall()
            properties = []
            for row in data:
                proper = Property(
                    row[1],
                    row[2],
                    row[3],
                    row[4],
                    row[5],
                    row[6],
                    row[7],
                    row[8],
                    row[9],
                )
                properties.append(proper)
            return properties
        except Exception as ex:
            raise Exception(ex)
