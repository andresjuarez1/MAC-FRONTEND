import mysql.connector
import numpy as np
from scipy.stats import spearmanr

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

        datos = cursor.fetchall()

        cursor.close()
        conexion.close()

        return datos

    except mysql.connector.Error as error:
        print("Error al obtener los datos desde la base de datos:", error)
        return None

def calcular_coeficiente_pearson(x, y):
    n = len(x)
    if n != len(y):
        raise ValueError("Los conjuntos de datos deben tener la misma longitud.")
    
    sum_x = sum(x)
    sum_y = sum(y)
    sum_x_sq = sum(xi**2 for xi in x)
    sum_y_sq = sum(yi**2 for yi in y)
    sum_xy = sum(xi*yi for xi, yi in zip(x, y))

    numerador = n * sum_xy - sum_x * sum_y
    denominador1 = np.sqrt(n * sum_x_sq - sum_x**2)
    denominador2 = np.sqrt(n * sum_y_sq - sum_y**2)
    
    if denominador1 == 0 or denominador2 == 0:
        raise ValueError("Los datos no pueden tener una desviación estándar de cero.")
    
    coeficiente_pearson = numerador / (denominador1 * denominador2)
    return coeficiente_pearson

def imprimir_coeficientes_correlacion(pearson, spearman):
    print("\nCoeficientes de Correlación:")
    print(f"Pearson: {pearson:.4f}")
    print(f"Spearman: {spearman:.4f}")

def main():
    try:
        conexion = conectar_base_datos()
        if not conexion:
            return

        datos = obtener_datos_desde_bd(conexion)
        if not datos:
            return

        x = [dato[0] for dato in datos]
        y = [dato[1] for dato in datos]

        coeficiente_pearson = calcular_coeficiente_pearson(x, y)
        coeficiente_spearman, _ = spearmanr(x, y)
        imprimir_coeficientes_correlacion(coeficiente_pearson, coeficiente_spearman)

    except ValueError:
        print("Error: Ingresa solo valores numéricos válidos.")

if __name__ == "__main__":
    main()
