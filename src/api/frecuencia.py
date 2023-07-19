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

def calcular_frecuencia(datos):
    frecuencia = {}
    for dato in datos:
        frecuencia[dato] = frecuencia.get(dato, 0) + 1
    return frecuencia

def imprimir_tabla_frecuencia(columna, frecuencia):
    print(f"\nTabla de Frecuencia para {columna}:")
    print("Dato\tFrecuencia")
    for dato, freq in frecuencia.items():
        print(f"{dato}\t{freq}")

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
            # Realiza el cálculo de la frecuencia con los datos de la columna actual
            frecuencia = calcular_frecuencia(datos[i])
            imprimir_tabla_frecuencia(columna, frecuencia)

    except ValueError:
        print("Error: Ingresa solo valores numéricos válidos.")

if __name__ == "__main__":
    main()
