from operator import truediv
from random import randint

# definiamo le costanti utili dentor il codice
DIM_STUDIO = 10
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


def test(S):
    """
    sorteggia un paziente e se non ha fatto il test,
    esegue il test altrimenti segnala una ripetizione
    """
    chiavi = S.keys()
    chiavi = list(chiavi)
    p = chiavi[randint(0, len(chiavi)-1)]
    if not S[p]["test"]:
        S[p]["test"] = True
        print("il paziente {} viene vaccinato".format(S[p]["nome"]))
    else:
        print("il paziente {} è già vaccinato".format(S[p]["nome"]))


def percentualeVaccinati(S):
    count = 0
    for p in S:
        if p["test"]:
            count += 1
    return count/len(S)*100


studio = {}
for i in range(10):
    # creo il paziente i-esimo
    p = creaPaziente()
    # lo aggiungo allo studio
    studio[i] = p

# print(studio)
# cerco di vaccinare K pazienti
K = len(studio)//2  # // <-- divisione intere
for i in range(K):
    test(studio)

print("Il {}% dei pazienti è stato vaccinato".format(percentualeVaccinati(studio)))
