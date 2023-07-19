from flask import Flask, request, jsonify
from flask_cors import CORS
import dbcon
import asyncio
from scipy.stats import spearmanr
from dispersion import conectar_base_datos, obtener_datos_desde_bd, calcular_media, calcular_varianza, calcular_desviacion_estandar, calcular_rango
from tendencia import conectar_base_datos, obtener_datos_desde_bd, calcular_media, calcular_mediana, calcular_moda
from frecuencia import conectar_base_datos, obtener_datos_desde_bd, calcular_frecuencia
from distribucion import conectar_base_datos, obtener_datos_desde_bd, calcular_frecuencia, calcular_medida_distribucion_frecuencia, calcular_medida_distribucion_frecuencia,imprimir_medidas_distribucion_frecuencia
from coeficientes import conectar_base_datos, obtener_datos_desde_bd, calcular_coeficiente_pearson, imprimir_coeficientes_correlacion

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

        datos_transpuestos = list(map(list, zip(*datos)))  # Transponer los datos

        for i, columna in enumerate(columnas):
            media = calcular_media(datos_transpuestos[i])
            varianza = calcular_varianza(datos_transpuestos[i], media)
            desviacion_estandar = calcular_desviacion_estandar(varianza)
            rango = calcular_rango(datos_transpuestos[i])

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

        datos_transpuestos = list(map(list, zip(*datos)))  # Transponer los datos

        for i, columna in enumerate(columnas):
            media = calcular_media(datos_transpuestos[i])
            mediana = calcular_mediana(datos_transpuestos[i])
            moda = calcular_moda(datos_transpuestos[i])

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

        datos_transpuestos = list(map(list, zip(*datos)))  # Transponer los datos

        for i, columna in enumerate(columnas):
            frecuencia = calcular_frecuencia(datos_transpuestos[i])

            resultados[columna] = frecuencia

        # Devuelve los resultados en formato JSON
        return jsonify(resultados)

    except ValueError:
        return jsonify({"error": "Ingresa solo valores numéricos válidos."})


@app.route('/calcularMedidasDistribucionFrecuencia', methods=['GET'])
def calcular_medidas_distribucion_frecuencia_route():
    try:
        conexion = conectar_base_datos()
        if not conexion:
            return jsonify({"error": "No se pudo conectar a la base de datos"})

        datos = obtener_datos_desde_bd(conexion)
        if not datos:
            return jsonify({"error": "No se pudieron obtener los datos desde la base de datos"})

        columnas = ['DHT11temperature', 'BMP180temperature', 'humidity', 'pressurePA', 'pressureATM', 'altitude', 'co2level']

        resultados = {}

        datos_transpuestos = list(map(list, zip(*datos)))  # Transponer los datos

        for i, columna in enumerate(columnas):
            # Realiza el cálculo de la frecuencia con los datos de la columna actual
            frecuencia = calcular_frecuencia(datos_transpuestos[i])
            medidas_distribucion = calcular_medida_distribucion_frecuencia(frecuencia, len(datos_transpuestos[i]))

            # Agrupa los resultados en un diccionario
            resultados[columna] = medidas_distribucion

        # Devuelve los resultados en formato JSON
        return jsonify(resultados)

    except ValueError:
        return jsonify({"error": "Ingresa solo valores numéricos válidos."})




@app.route('/calcularCoeficientesCorrelacion', methods=['GET'])
def calcular_coeficientes_correlacion_route():
    try:
        conexion = conectar_base_datos()
        if not conexion:
            return jsonify({"error": "No se pudo conectar a la base de datos"})

        datos = obtener_datos_desde_bd(conexion)
        if not datos:
            return jsonify({"error": "No se pudieron obtener los datos desde la base de datos"})

        x = [dato[0] for dato in datos]
        y = [dato[1] for dato in datos]

        coeficiente_pearson = calcular_coeficiente_pearson(x, y)
        coeficiente_spearman, _ = spearmanr(x, y)

        resultados = {
            "coeficiente_pearson": coeficiente_pearson,
            "coeficiente_spearman": coeficiente_spearman
        }

        return jsonify(resultados)

    except ValueError:
        return jsonify({"error": "Ingresa solo valores numéricos válidos."})



if __name__ == '__main__':
    app.run(port=5050)
