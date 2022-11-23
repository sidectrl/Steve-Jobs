import math
import numpy as np
from matplotlib import pyplot as pt
import pandas as pd

# Series

# Creation

# 1° from list
L = [12, 4, 17, 85, 1]
S01 = pd.Series(L)
print(S01)

print(len(S01))
print(sum(S01))
print(S01[3])
print(S01[1:4])

print(S01.min())
print(S01.max())
print(S01.median())  # mediana
print(S01.mean())  # valore medio
print(S01.quantile(0.25))
print(S01.quantile(0.75))  # non ho capito
print(S01.quantile([0.25, 0.5, 0.75]))

# 2° from list with personalized index
weight = [78, 68, 68, 81, 57]
names = ["A", "B", "C", "D", "E"]
S02 = pd.Series(weight, names)
print(S02)

print(S02["D"])
print(S02[3])
S02["Z"] = 78

# 3° same as 2 but with number

matricola = [1, 5, 2, 4, 12]
S03 = pd.Series(weight, matricola)
print(S03[1])  # priorità di accesso secondo le etichette
print(S03.loc[1])  # loc indica priorità per etichetta
print(S03.iloc[1])  # iloc segue l'indice automatico

S03.unique()
S03.nunique()

# 4° with dictonary

D = {"A": 78, "B": 68, "C": 80}
S04 = pd.Series(D)
print(S04)
print(S04.index)
print(S04.values)
print(S04.describe())
print(S04[(S04 > 70) & (S04 < 79)])


def doppio(x):
    return x*2

S05 = S04.apply(doppio)
S06 = S04.apply(math.sqrt)


