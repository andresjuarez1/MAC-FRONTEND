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

def calcular_medida_distribucion_frecuencia(frecuencia, total_datos):
    medidas = {}
    medidas["Frecuencia Relativa"] = {dato: freq / total_datos for dato, freq in frecuencia.items()}
    medidas["Frecuencia Acumulada"] = {}
    acumulado = 0
    for dato, freq in sorted(frecuencia.items()):
        acumulado += freq
        medidas["Frecuencia Acumulada"][dato] = acumulado
    medidas["Frecuencia Relativa Acumulada"] = {dato: acumulado / total_datos for dato, acumulado in medidas["Frecuencia Acumulada"].items()}
    return medidas

def imprimir_medidas_distribucion_frecuencia(columna, medidas):
    print(f"\nMedidas de Distribución de Frecuencia para {columna}:")
    print("Dato\tFrecuencia\tFrec. Relativa\tFrec. Acumulada\tFrec. Rel. Acumulada")
    for dato, freq in medidas["Frecuencia Relativa"].items():
        frec_acumulada = medidas["Frecuencia Acumulada"][dato]
        frec_rel_acumulada = medidas["Frecuencia Relativa Acumulada"][dato]
        print(f"{dato}\t{freq}\t\t{freq:.4f}\t\t{frec_acumulada}\t\t{frec_rel_acumulada:.4f}")

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
            medidas_distribucion = calcular_medida_distribucion_frecuencia(frecuencia, len(datos[i]))
            imprimir_medidas_distribucion_frecuencia(columna, medidas_distribucion)

    except ValueError:
        print("Error: Ingresa solo valores numéricos válidos.")

if __name__ == "__main__":
    main()
