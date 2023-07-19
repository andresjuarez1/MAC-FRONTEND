from flask import Flask, request, jsonify
from flask_cors import CORS
import dbcon
import asyncio
from dispersion import conectar_base_datos, obtener_datos_desde_bd, calcular_media, calcular_varianza, calcular_desviacion_estandar, calcular_rango
from tendencia import conectar_base_datos, obtener_datos_desde_bd, calcular_media, calcular_mediana, calcular_moda
from frecuencia import conectar_base_datos, obtener_datos_desde_bd, calcular_frecuencia
from distribucion import conectar_base_datos, obtener_datos_desde_bd, calcular_frecuencia, calcular_medida_distribucion_frecuencia


connection = dbcon.Connection()
connection.setup('18.208.99.204', 'mauricio', 'mauricio', 3306, 'users', 'weathersense', 'datasensors')

loop=asyncio.get_event_loop()

loop.run_until_complete(connection.connect())

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hola mundo'


@app.route('/login', methods=['POST'])
def login():
    global connection, loop
    req = request.get_json()
    logSuccess = loop.run_until_complete(connection.login(req))

    if logSuccess:
        return ('login Success')
    
    else:
        return('failed login')


@app.route('/createUser', methods=['POST'])
def createUser():
    global connection, loop
    req2 = request.get_json()
    regSuccess = loop.run_until_complete(connection.createUser(req2))
    if regSuccess:
        return ('register Success')
    else:
        return('failed register')


@app.route('/calcularMedidasDispersion', methods=['GET'])
def calcular_medidas_dispersion():
    try:
        conexion = conectar_base_datos()
        if not conexion:
            return jsonify({"error": "No se pudo conectar a la base de datos"})

        datos = obtener_datos_desde_bd(conexion)
        if not datos:
            return jsonify({"error": "No se pudieron obtener los datos desde la base de datos"})

        columnas = ['DHT11temperature', 'BMP180temperature', 'humidity', 'pressurePA', 'pressureATM', 'altitude', 'co2level']

        resultados = {}

        for i, columna in enumerate(columnas):
            # Realiza los cálculos con los datos de la columna actual
            media = calcular_media(datos[i])
            varianza = calcular_varianza(datos[i], media)
            desviacion_estandar = calcular_desviacion_estandar(varianza)
            rango = calcular_rango(datos[i])

            # Agrupa los resultados en un diccionario
            resultados[columna] = {
                "media": media,
                "varianza": varianza,
                "desviacion_estandar": desviacion_estandar,
                "rango": rango
            }

        # Devuelve los resultados en formato JSON
        return jsonify(resultados)

    except ValueError:
        return jsonify({"error": "Ingresa solo valores numéricos válidos."})


@app.route('/calcularMedidasTendencia', methods=['GET'])
def calcular_medidas_tendencia():
    try:
        conexion = conectar_base_datos()
        if not conexion:
            return jsonify({"error": "No se pudo conectar a la base de datos"})

        datos = obtener_datos_desde_bd(conexion)
        if not datos:
            return jsonify({"error": "No se pudieron obtener los datos desde la base de datos"})

        columnas = ['DHT11temperature', 'BMP180temperature', 'humidity', 'pressurePA', 'pressureATM', 'altitude', 'co2level']

        resultados = {}

        for i, columna in enumerate(columnas):
            media = calcular_media(datos[i])
            mediana = calcular_mediana(datos[i])
            moda = calcular_moda(datos[i])

            # Agrupa los resultados en un diccionario
            resultados[columna] = {
                "media": media,
                "mediana": mediana,
                "moda": moda
            }

        # Devuelve los resultados en formato JSON
        return jsonify(resultados)

    except ValueError:
        return jsonify({"error": "Ingresa solo valores numéricos válidos."})


@app.route('/calcularMedidasFrecuencia', methods=['GET'])
def calcular_medidas_frecuencia():
    try:
        conexion = conectar_base_datos()
        if not conexion:
            return jsonify({"error": "No se pudo conectar a la base de datos"})

        datos = obtener_datos_desde_bd(conexion)
        if not datos:
            return jsonify({"error": "No se pudieron obtener los datos desde la base de datos"})

        columnas = ['DHT11temperature', 'BMP180temperature', 'humidity', 'pressurePA', 'pressureATM', 'altitude', 'co2level']

        resultados = {}

        for i, columna in enumerate(columnas):
            frecuencia = calcular_frecuencia(datos[i])

            resultados[columna] = frecuencia

        # Devuelve los resultados en formato JSON
        return jsonify(resultados)

    except ValueError:
        return jsonify({"error": "Ingresa solo valores numéricos válidos."})


@app.route('/calcularMedidasDistribucionFrecuencia', methods=['GET'])
def calcular_medidas_distribucion_frecuencia():
    try:
        conexion = conectar_base_datos()
        if not conexion:
            return jsonify({"error": "No se pudo conectar a la base de datos"})

        datos = obtener_datos_desde_bd(conexion)
        if not datos:
            return jsonify({"error": "No se pudieron obtener los datos desde la base de datos"})

        columnas = ['DHT11temperature', 'BMP180temperature', 'humidity', 'pressurePA', 'pressureATM', 'altitude', 'co2level']

        resultados = {}

        for i, columna in enumerate(columnas):
            # Realiza el cálculo de la frecuencia con los datos de la columna actual
            frecuencia = calcular_frecuencia(datos[i])
            medidas_distribucion = calcular_medida_distribucion_frecuencia(frecuencia, len(datos[i]))

            # Agrupa los resultados en un diccionario
            resultados[columna] = medidas_distribucion

        # Devuelve los resultados en formato JSON
        return jsonify(resultados)

    except ValueError:
        return jsonify({"error": "Ingresa solo valores numéricos válidos."})



if __name__ == '__main__':
    app.run(port=5050)
