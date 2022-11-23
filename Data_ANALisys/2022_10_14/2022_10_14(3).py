from random import randint
from studioMedico import *
paziente = Paziente("Gino", "M", 34, True)

# creo dizionario pazienti
N_PAZIENTI = 30
AGE_MIN = 18
AGE_MAX = 60
MIN_LEN_NOME = 5
MAX_LEN_NOME = 7
ALFABETO = "abcdefghijklmnopqrstuvwxyz"


def creaPaziente():
    paziente = {}
    paziente["nome"] = nomeCasuale()
    paziente["genere"] = genereCasuale()
    paziente["age"] = randint(AGE_MIN, AGE_MAX)
    paziente["test"] = False
    return paziente


def nomeCasuale():
    nome = ""
    lungNome = randint(MIN_LEN_NOME, MAX_LEN_NOME)
    for i in range(lungNome):
        nome += ALFABETO[randint(0, len(ALFABETO)-1)]
    return nome


def genereCasuale():
    """
    Questa funzione sceglie casualmente 50/50 
    il genere del paziente
    Returns
    -------
    str
        "M" per maschio e "F" per femmina
    """
    if randint(0, 100) > 50:
        return "F"
    else:
        return "M"
S = {}
for i in range(N_PAZIENTI):
    S[i] = Paziente(nomeCasuale(), genereCasuale(), randint(AGE_MIN, AGE_MAX), False)

studio = Studio(S)

print (studio)
studio.vaccinazioni(5)
print ("Percentuale vaccinati: {}%".format(studio.percentualeVaccinati()))
