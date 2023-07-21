import asyncio
import websockets
import json
import mysql.connector

db_config = {
    'host': '18.208.99.204',
    'user': 'mauricio',
    'password': 'mauricio',
    'database': 'weathersense',
}

def get_data_from_database():
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        query = "SELECT * FROM datasensors WHERE id = 96"
        cursor.execute(query)

        result = cursor.fetchone()

        cursor.close()

        if result:
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


# def get_data_from_database_ids_1_to_10():
#     try:
#         connection = mysql.connector.connect(**db_config)
#         cursor = connection.cursor()

#         query = "SELECT * FROM datasensors WHERE id BETWEEN 1 AND 10"
#         cursor.execute(query)

#         results = cursor.fetchall()

#         cursor.close()

#         if results:
#             data = []
#             for result in results:
#                 data.append({
#                     'date': str(result[1]),
#                     'hour': str(result[2]),
#                     'DHT11temperature': result[3],
#                     'BMP180temperature': result[4],
#                     'humidity': result[5],
#                     'pressurePA': result[6],
#                     'pressureATM': result[7],
#                     'altitude': result[8],
#                     'co2level': result[9],
#                 })
#             return data
#         else:
#             return None

#     except mysql.connector.Error as error:
#         print("Error al obtener datos de la base de datos:", error)

#     finally:
#         if connection.is_connected():
#             connection.close()



async def websocket_handler(websocket, path):
    data = get_data_from_database()
    if data:
        data_json = json.dumps(data)
        await websocket.send(data_json)

# async def websocket_handler(websocket, path):
#     while True:  
#         data = get_data_from_database()
#         data_ids_1_to_10 = get_data_from_database_ids_1_to_10()

#         combined_data = {
#             'id_83': data,
#             'ids_1_to_10': data_ids_1_to_10,
#         }

#         data_json = json.dumps(combined_data)
#         await websocket.send(data_json)



host = "127.0.0.1"
port = 8765

start_server = websockets.serve(websocket_handler, host, port)

print(f"Servidor WebSocket iniciado en ws://{host}:{port}")

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
