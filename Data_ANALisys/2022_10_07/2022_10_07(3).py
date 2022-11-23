"""
Esercizio
Sia data una lista 100 clienti indentificati con interi successivi a partire di 1
Per ogni cliente generare a caso un dare (int tra 0 e 100) e
un avere (int tra 0 e 100)
"""
from random import randint

clienti = {}

for indice in range(1, 100):
    clienti[indice] = (randint(0, 100), randint(0, 100))

bilancio = 0
for c in clienti:
    bilancio = bilancio + clienti[c][0]


# fornire un elenco di tutti i clienti per cui dare è maggiore di avere

debitori = []
for c in clienti:
    if clienti[c][0] < clienti[c][1]:
        debitori.append(c)

print(debitori)

# voglio il nome-indice del cliente col maggiore avere

indiceMax = 1
massimo = clienti[1][1]
for c in clienti:
    if clienti[c][1] > indiceMax:
        massimo = clienti[c][1]
        indiceMax = c

print("il cliente da cui debbo avere di più è il n.", indiceMax)
print("il suo dare è {} mentre l'avere è {}".format(clienti[indiceMax][0], clienti[indiceMax][1]))

# elenco dei clienti che hanno il bilancio compreso tra -10 e 10

pesciPiccoli = {} #creo un nuovo dizionario
for c in clienti:
    bilancio = clienti[c][0] - clienti[c][1]
    if bilancio >= -10 and bilancio <= 10:
        pesciPiccoli[c]= clienti[c]

for c in pesciPiccoli:
    print(c, pesciPiccoli[c])

print("\nI clienti con bilancio > di -10 e < di 10 sono:",len(pesciPiccoli))
