"""
Esercizio:
Data una lista di "caratteri", ottenere una stringa composta da N
caratteri casuali estratti dalla lista
"""
from random import randint
N = int(input("Di quanti caratteri vuoi la tua stringa?-> "))

alfabeto = "abcdefghijklmnoprstwxyz"
alfa=[x for x in alfabeto]

parola = ""
for i in range(N):
    parola= parola+alfa[randint(0,len(alfa)-1)]

print(parola)