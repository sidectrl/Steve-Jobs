#while
i=0
while i<10:
    print (i)
    i+=1 

L=[1,2,"ciao","buon appetito"]
for elemento in L:
    print("l'elemento è di tipo",type(elemento))

"""
esercizio: stampare tutti i numeri multipli di 7
da 1 a 100
"""

A=range(100)
for numero in range(100):
    if numero%7==0:
        print(numero)

"""
esercizio: stampare tutti i numeri multipli di 7 e di 3
da 1 a 100 dispari
"""
for numero in range(100):
    if numero%7==0 and numero%3==0 and (not numero%2==0):
        print(numero)
