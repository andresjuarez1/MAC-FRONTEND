import mysql.connector

def conectar_base_datos():
    config = {
        'host': '18.208.99.204',
        'user': 'mauricio',
        'password': 'mauricio',
        'database': 'weathersense',
        'port': '3306' 
    }

    try:
        conexion = mysql.connector.connect(**config)
        return conexion

    except mysql.connector.Error as error:
        print("Error al conectarse a la base de datos:", error)
        return None

def obtener_datos_desde_bd(conexion):
    try:
        cursor = conexion.cursor()

        consulta = "SELECT DHT11temperature, BMP180temperature, humidity, pressurePA, pressureATM, altitude, co2level FROM datasensors WHERE id BETWEEN 1 AND 10"
        cursor.execute(consulta)

        datos = cursor.fetchall()[:10]

        cursor.close()
        conexion.close()

        datos_transpuestos = list(map(list, zip(*datos)))

        return datos_transpuestos

    except mysql.connector.Error as error:
        print("Error al obtener los datos desde la base de datos:", error)
        return None

def calcular_media(datos):
    return sum(datos) / len(datos)

def calcular_mediana(datos):
    datos_ordenados = sorted(datos)
    n = len(datos_ordenados)
    if n % 2 == 0:
        medio1 = datos_ordenados[n // 2 - 1]
        medio2 = datos_ordenados[n // 2]
        mediana = (medio1 + medio2) / 2
    else:
        mediana = datos_ordenados[n // 2]
    return mediana

def calcular_moda(datos):
    frecuencia = {}
    for dato in datos:
        frecuencia[dato] = frecuencia.get(dato, 0) + 1
    moda = [dato for dato, freq in frecuencia.items() if freq == max(frecuencia.values())]
    return moda

def imprimir_medidas_tendencia_central(columna, media, mediana, moda):
    print(f"\nMedidas de Tendencia Central para {columna}:")
    print(f"Media: {media:.2f}")
    print(f"Mediana: {mediana}")
    print(f"Moda: {', '.join(map(str, moda))}")

def main():
    try:
        conexion = conectar_base_datos()
        if not conexion:
            return

        datos = obtener_datos_desde_bd(conexion)
        if not datos:
            return

        columnas = ['DHT11temperature', 'BMP180temperature', 'humidity', 'pressurePA', 'pressureATM', 'altitude', 'co2level']

        for i, columna in enumerate(columnas):
            # Realiza los cálculos con los datos de la columna actual
            media = calcular_media(datos[i])
            mediana = calcular_mediana(datos[i])
            moda = calcular_moda(datos[i])
            imprimir_medidas_tendencia_central(columna, media, mediana, moda)

    except ValueError:
        print("Error: Ingresa solo valores numéricos válidos.")

if __name__ == "__main__":
    main()
