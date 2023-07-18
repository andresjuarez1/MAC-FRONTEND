import asyncio
import websockets
import random  # Usamos esta librería para generar datos de prueba (puedes obtener los datos de tus sensores reales)
import json

async def websocket_handler(websocket, path):
    while True:
        # Generar datos de prueba (puedes obtener los datos reales de tus sensores aquí)
        data = {
            'date': '2023-07-16',
            'hour': '14:30:00s',
            'DHT11temperature': 22,
            'BMP180temperature': random.uniform(25, 35),
            'humidity': random.uniform(40, 60),
            'pressurePA': random.uniform(950, 1050),
            'pressureATM': random.uniform(0.95, 1.05),
            'altitude': random.uniform(100, 200),
            'co2level': random.uniform(300, 500),
        }

        # Convertir el diccionario de datos a una cadena JSON
        data_json = json.dumps(data)

        # Enviar los datos al cliente
        await websocket.send(data_json)

        # Esperar un tiempo antes de enviar los siguientes datos (simulando actualizaciones de sensores)
        await asyncio.sleep(5)

# Configurar el servidor websocket en la dirección y puerto deseado
host = "192.168.0.20"
port = 8765

# Iniciar el servidor websocket
start_server = websockets.serve(websocket_handler, host, port)

print(f"Servidor websocket iniciado en ws://{host}:{port}")

# Ejecutar el servidor de forma asíncrona
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()