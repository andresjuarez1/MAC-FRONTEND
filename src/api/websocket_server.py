import asyncio
import websockets
import random
import json
import mysql.connector

# Configura la conexión a la base de datos MySQL
db_config = {
    'host': '18.208.99.204',
    'user': 'mauricio',
    'password': 'mauricio',
    'database': 'weathersense',
}

# Función para obtener los datos de la base de datos
def get_data_from_database():
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        # Realizar una consulta para obtener los datos (reemplaza 'nombre_de_tu_tabla' con el nombre correcto)
        query = "SELECT * FROM datasensors WHERE id = 83"
        cursor.execute(query)

        # Obtener los resultados de la consulta
        result = cursor.fetchone()

        cursor.close()

        if result:
            # Construir un diccionario con los datos de la consulta
            data = {
                'date': str(result[1]),
                'hour': str(result[2]),
                'DHT11temperature': result[3],
                'BMP180temperature': result[4],
                'humidity': result[5],
                'pressurePA': result[6],
                'pressureATM': result[7],
                'altitude': result[8],
                'co2level': result[9],
            }
            return data
        else:
            return None

    except mysql.connector.Error as error:
        print("Error al obtener datos de la base de datos:", error)

    finally:
        if connection.is_connected():
            connection.close()



async def websocket_handler(websocket, path):
    data = get_data_from_database()

    if data:
        data_json = json.dumps(data)
        await websocket.send(data_json)


host = "127.0.0.1"
port = 8765

# Iniciar el servidor WebSocket
start_server = websockets.serve(websocket_handler, host, port)

print(f"Servidor WebSocket iniciado en ws://{host}:{port}")

# Ejecutar el servidor de forma asíncrona
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
