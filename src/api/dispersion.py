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

def calcular_varianza(datos, media):
    return sum((x - media) ** 2 for x in datos) / len(datos)

def calcular_desviacion_estandar(varianza):
    return varianza ** 0.5

def calcular_rango(datos):
    return max(datos) - min(datos)

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
            varianza = calcular_varianza(datos[i], media)
            desviacion_estandar = calcular_desviacion_estandar(varianza)
            rango = calcular_rango(datos[i])

            print(f"\nResultados para {columna}:")
            print(f"Media: {media:.2f}")
            print(f"Varianza: {varianza:.2f}")
            print(f"Desviación estándar: {desviacion_estandar:.2f}")
            print(f"Rango: {rango:.2f}")

    except ValueError:
        print("Error: Ingresa solo valores numéricos válidos.")

if __name__ == "__main__":
    main()
