# -*- coding: utf-8 -*-
from random import randint
from random import uniform
"""
Esercitazione/itinere 21 ottobre 2022

COMPLETA LA SCHEDA:
    
COGNOME: Limonelli
NOME: Francesco

Al termine del test salva questo file come

<cognome_nome.py> e consegnalo in classroom

"""

"""
ESERCIZIO 1
Generare un dizionario D con 100 elementi come segue
a) le chiavi sono stringhe di 5 caratteri maiuscoli
   tratti casualmente dall'alfabeto internazionale
b) i valori sono liste composte di tre elementi ciascuna
   b1) il primo elemento della lista è un intero random tra 0 e 100
   b2) il secondo elemento della lista è un float random tra 0 e 10
   b3) il terzo elemento della lista è un carattere a caso dell'alfabeto
       internazionale
       
Esempio di elemento del dizionario:
    "BGDGU":[34, 6.78, "K"]
    
Ottenere una stampa del dizionario generato
"""
ALFABETO = "abcdefghijklmnopqrstuvwxyz"
MAX_LEN_KEY = 5
MAX_LEN_INT = 100
MAX_LEN_FLOAT = 10


def randomLetters(n):
    name = ""
    for i in range(n):
        name += ALFABETO[randint(0, len(ALFABETO)-1)].upper()
    return name


def createItem() -> list:
    item = []
    item.append(randint(0, MAX_LEN_INT))
    item.append(uniform(0, 10))
    item.append(randomLetters(1))
    return item


D = {}

for i in range(100):
    D[randomLetters(MAX_LEN_KEY)] = createItem()

print(D)

"""
ESERCIZIO 2
Calcolare e stampare in console:
    a) quanti elementi di D stringaNome:[x,y,c] sono tali che 3y>x//2
    b) la stringaNome di tutti gli elementi di D per cui c è eguale al secondo carattere della stringaNome
    c) quanti elementi di D hanno un carattere che appare più di una volta
    nella stringaNome
    d) la stringanOme di tutti gli elementi di D che hanno c uguale a
    un carattere dato, per esempio "k"

Consiglio: definisci funzioni che ti aiutin a svolgere i compiti richiesti
"""


def exercise2A():
    count = 0
    for iesimD in D:
        if (float(D[iesimD][1]*3 > float(D[iesimD][0] // 2))):
            count += 1
    return count

def exercise2B():
    for iesimD in D:
        if(iesimD[1] == D[iesimD][2]):
            print("The second character of {} is equals then c".format(iesimD, D[iesimD][2]))

def exercise2C():
    count = 0
    for iesimD in D:
        i
    return 0

def exercise2D(c):
    for iesimD in D:
        if(D[iesimD][2] == c.upper()):
            print("The character {} is in {}'s c".format(c, iesimD))

print("Element with 3y > x//2 are: {}".format(exercise2A()))
exercise2B()
exercise2D('f')
"""
ESERCIZIO 3
Dato un carattere k genera un nuovo dizionario D2 che contenga solo gli
elementi di D che abbiano c == k.
"""
def exercise3(k):
    dummy = {}
    for iesimD in D:
        if(D[iesimD][2] == k.upper()):
            dummy[iesimD] = D[iesimD]
    return dummy

D2 = exercise3('f')
print(D2)
"""
ESERCIZIO 4
a) Stampa in console l'elemento di D per cui x è massimo
b) Stampa in console l'elemento di D per cui y è minimo
"""
def exercise4A():
    maxID = ""
    xplus = 0
    for iesimD in D:
        if (D[iesimD][0] > xplus):
            xplus = D[iesimD][0]
            maxID = iesimD
    print("The max x is in {}".format(maxID))

def exercise4B():
    lessID = ""
    xless = 0
    for iesimD in D:
        if (D[iesimD][1] < xless):
            xless = D[iesimD][1]
            lessID = iesimD
    print("The less y is in {}".format(lessID))

exercise4A()
exercise4B()
"""
ESERCIZIO 5
Rimuovi da D tutti gli elementi per cui x>y
Quanti elementi hai rimosso?
"""
