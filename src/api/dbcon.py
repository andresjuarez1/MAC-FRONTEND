import aiomysql
from flask_cors import CORS


class Connection:

    connection = None
    isConnected = False

    # Table info
    table = "users"
    table2 = "datasensors"
    databaseName = "weathersense"

    # Credentials
    host = "18.208.99.204"
    port = 3306
    user = "mauricio"
    password = "mauricio"

    #PRUEBA LOCAL
    # table = "usuarios"
    # databaseName = "weathersense2"
    # host = "127.0.0.1"
    # port = 3306
    # user = "root"
    # password = "root"


    def __init__(self) -> None:
        pass

    def setup(self, host: str, user: str, password: str, port: int, table: str, databaseName: str, table2: str):
        self.host = host
        self.user = user
        self.port = port
        self.password = password
        self.table = table
        self.databaseName = databaseName
        self.table2 = table2
        pass

    async def connect(self):
            try:
                self.connection = await aiomysql.connect(host=self.host, port=self.port, user=self.user, password=self.password, db=self.databaseName)
                print("Conexion exitosa")
                self.isConnected = True
            except:
                print("Conexion fallida")
                self.isConnected = False


    async def createUser(self, data):
        if(data['email'] == '' or data['password'] == ''):
            print('Necesitas ingresar datos')
            return False
        
        query = f'INSERT INTO {self.databaseName}.{self.table} (email, pwd) VALUES ("{data["email"]}", "{data["password"]}")'
        # try:
        cursor = await self.connection.cursor()
        await cursor.execute(query)
        r = await cursor.fetchall()
        print(r)
        await self.connection.commit()
        await cursor.close()
        print("Query success!")
        return True
        # except:
        print('No se completo el registro')
        return False


    async def login(self, data):
        print (data)
        query = f'SELECT * FROM {self.databaseName}.{self.table} WHERE email = "{data["email"]}" and pwd = "{data["password"]}"'
        cursor = await self.connection.cursor()
        await cursor.execute(query)
        a = await cursor.fetchall()
        print(a)
        await cursor.close()
        print("Query success!")
        if len(a)>0:
            return True
        else:
            return False
        

    # async def datasensors(self, dataSensors):
    #     query =f'SELECT * FROM {self.databaseName}.{self.table2} WHERE id= "{dataSensors["id"]}"  and date = "{dataSensors["fecha"]}" and hour = "{dataSensors["hora"]}" and DHT11temperature = "{dataSensors["dht11"]}" and BMP180temperature = "{dataSensors["bmp180"]}" and humidity = "{dataSensors["humedad"]}" and pressurePA = "{dataSensors["presion-pascales"]}" and pressureATM = "{dataSensors["presion-atmosfera"]}" and altitude = "{dataSensors["altitud"]}" and co2level = "{dataSensors["contaminacion"]}"'
    #     print(dataSensors)
    #     cursor = await self.connection.cursor()
    #     await cursor.execute(query)
    #     d = await cursor.fetchall()
    #     print(d)
    #     await cursor.close()
    #     print("Query buscado")

# loop = asyncio.get_event_loop()

# dbmanager = Connection()

# dbmanager.setup('18.208.99.204', 'mauricio', 'mauricio', 3306, 'users', 'weathersense')
# loop.run_until_complete(dbmanager.connect())

# body = {"email": "andres@andres.com", "password": "andres"}

# # loop.run_until_complete(dbmanager.createUser(body))
# loop.run_until_complete(dbmanager.login(body))
