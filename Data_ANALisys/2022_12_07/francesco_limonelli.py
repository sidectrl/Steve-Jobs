import pandas as pd
from random import randint
import numpy as np
from matplotlib import pyplot as plt

"""
Parte 1 (50% del voto finale)
a) scrivere una funzione esercizio1(L) che presa una lista di numeri restituisca una nuova lista M
ottenuta da L rimuovendo tutte le copie (tranne una) degli eventuali elementi duplicati.
Esempio: L=[12,1,4,1,1,3,45,3]→ [12,1,4,3,45]
"""


def esercizio1(L):
    return list(dict.fromkeys(L))


print("esercizio a: {}" .format(esercizio1([1, 2, 6, 9, 2, 3, 4, 6, 1])))
"""

b) scrivere una funzione cifraVocali(s,k) che presa una stringa ne restituisca una in cui solo le vo-
cali sono “slittate” ciclicamente di k posti in avanti nell’elenco delle vocali “aeiou”.

I caratteri siano tutti minuscoli.
"""



def cifraVocali(s, k):
    vocals = "aeiou"
    new_string = ""
    for iesim in s:
        if (vocals.__contains__(iesim)):
            new_string += vocals[(vocals.find(iesim)+k) % len(vocals)]
        else:
            new_string += iesim
    return new_string


print("esercizio b: {}".format(cifraVocali("ciaociao", 2)))

"""
c1) scrivere una funzione lanciDiDado(k) che restituisce un dizionario le cui chiavi sono gli interi
da 0 a k-1 e i cui valori sono i risultati ottenuti dal lancio casuale di un dado a sei facce.
"""


def lanciDiDado(k):
    return {_: randint(1, 6) for _ in range(k - 1)}


print("Esercizio c1: {}" .format(lanciDiDado(10)))

"""

c2) scrivere una funzione esercizio 3(Lanci,v) che dato un dizionario ottenuto come sopra lancian-
do 10 volte un dado riporta tutte le chiavi che hanno come valore v.
"""


def esercizio3(lanci, v):
    keys = []
    for iesim in lanci:
        if (lanci[iesim] == v):
            keys.append(iesim)
    return keys


print("esercizio c2: {}".format(esercizio3(lanciDiDado(10), 3)))

"""
d) scrivere una funzione esercizio4(n,m) che crei due set composti da n elementi. Gli elementi sia-
no interi a caso estratti nell’intervallo [1,m]. La funzione restituisca l’insieme formato da tutte le
coppie formate prendendo un elemento dal primo insieme e uno dal secondo.
"""


def esercizio4(n, m):
    S1 = set({randint(1, m) for _ in range(n)})
    S2 = set({randint(1, m) for _ in range(n)})
    return set((i, j) for i in S1 for j in S2)


print(esercizio4(5, 10))

"""
Parte 2 (50% del voto finale)
Si ottenga il file bici.csv e lo si importi in un DataFrame (attenti al separatore, è “;”, come gestirlo?)
Quanti sono i suoi record?
Quanti sono i suoi campi?

Gli studenti useranno solo due colonne del Dataframe come segue
• studenti A_L : useranno le colonne season, count
• studenti M_Z: useranno le colonne workingday, count
a) a seconda delle colonne assegnate lo studente produca:
• pie chart per le colonne “season” e “workingday”
• istogramma per la colonna “count”
"""
DF = pd.DataFrame(pd.read_csv("bici.csv", ";"))
season1 = sum(DF["season"][DF["season"] == 1])
season2 = sum(DF["season"][DF["season"] == 2])
season3 = sum(DF["season"][DF["season"] == 3])
season4 = sum(DF["season"][DF["season"] == 4])
seasonPie = pd.DataFrame([season1, season2, season3, season4])
seasonPie[0].plot.pie()
columnCount = pd.DataFrame(DF["count"])
columnCount.hist()

"""
b) (tutti gli studenti) produrre il boxplot per la colonna “count”
"""
columnCount.boxplot()
"""
c) (tutti gli studenti) creare una nuova colonna “lower” derivata dalla colonna “count” come segue:
se il valore “count” è minore della media di “count”: “lower” è True, altrimenti è False.
"""
DF["lower"] = np.where(DF["count"] < DF["count"].mean(), True, False)

"""
d) calcolare le probabilità:
studenti A_L: P(season), P(lower), P(season|lower)
studenti M_Z: P(workingday), P(lower), P(workingday|lower)
"""
season_counter = DF.groupby(["season"]).count().copy()
percentuale_season = (season_counter.iloc[:, 0]/len(DF)).copy()
lower_counter = DF.groupby(["lower"]).count().copy()
percentuale_lower = (lower_counter.iloc[:, 0]/len(DF)).copy()
percentuale_season_lower = pd.crosstab(DF["season"], DF["lower"])/len(DF)
season_lower = pd.crosstab(DF["season"], DF["lower"])
percentuale_season_1 = sum(season_lower.iloc[0, :])
percentuale_season_2 = sum(season_lower.iloc[1, :])
percentuale_season_3 = sum(season_lower.iloc[2, :])
percentuale_season_4 = sum(season_lower.iloc[3, :])
season_lower.iloc[0, :] = season_lower.iloc[0, :]/percentuale_season_1
season_lower.iloc[1, :] = season_lower.iloc[1, :]/percentuale_season_2
season_lower.iloc[2, :] = season_lower.iloc[2, :]/percentuale_season_3
season_lower.iloc[3, :] = season_lower.iloc[3, :]/percentuale_season_4
"""
e) usando la formula di Bayes calcolare le probabilità a posteriori:
studenti A_L: P(lower|season)
studenti M_Z: P(lower|workingday)
"""

"""
f) calcolare il count medio nei workingday=False: Mw e in tutti i giorni: M
Usando il metodo bootstrap indicare se la differenza tra i due valori ha probabilità
maggiore del 25% di NON essersi prodotta per caso.
"""
Mw = DF["count"][DF["workingday"]== False]
M = DF["count"].mean()
from random import randint
means=[]
for i in range(len(DF)):
    values=[]
    for k in range(5):
        values.append(DF["count"][randint(0,len(DF)-1)])
    means.append(sum(values)/len(values))

DF_means=pd.DataFrame(means)
DF_means[0].plot.density()