import numpy as np
from scipy.stats import spearmanr

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
        n = int(input("Ingresa la cantidad de datos: "))
        x = []
        y = []
        for i in range(n):
            dato_x = float(input(f"Ingresa el dato x{i + 1}: "))
            dato_y = float(input(f"Ingresa el dato y{i + 1}: "))
            x.append(dato_x)
            y.append(dato_y)

        coeficiente_pearson = calcular_coeficiente_pearson(x, y)
        coeficiente_spearman, _ = spearmanr(x, y)
        imprimir_coeficientes_correlacion(coeficiente_pearson, coeficiente_spearman)

    except ValueError:
        print("Error: Ingresa solo valores numéricos válidos.")

if __name__ == "__main__":
    main()
