from random import randint


class Paziente:
    def __init__(self, nome, genere, age, test):
        self.nome = nome
        self.genere = genere
        self.age = age
        self.test = test

    def isVaccinato(self):
        return self.test

    def __str__(self):
        s = ""
        s += self.nome + " genere = " + \
            self.genere + ", età = " + str(self.age)
        if self.test:
            s += ", vaccinato"
        else:
            s += ", non vaccinato"
        return s

    def vaccino(self):
        self.test = True
        print("Sto vaccinando il paziente")


class Studio:
    def __init__(self, dictPazienti):
        self.pazienti = dictPazienti

    def __str__(self):
        s = ""
        for p in self.pazienti:
            s += "Il paziente con chiave {} si chiama {} \n".format(
                p, str(self.pazienti[p]))
        return s

    def percentualeVaccinati(self):
        cont = 0
        for p in self.pazienti:
            if self.pazienti[p].test:
                cont += 1
        return cont/len(self.pazienti) * 100

    def vaccinazioni(self, k):
        for i in range(k):
            chiavi = list(self.pazienti.keys())
            selected = chiavi[randint(0, len(chiavi)-1)]
            self.pazienti[selected].vaccino()

    def vaccinazioneSmart(self,k):
        cont = 0
        while cont<k:
            chiavi = list(self.pazienti.keys())
            selected = chiavi[randint(0, len(chiavi)-1)]
            if not self.pazienti[selected].test:
                self.pazienti[selected].vaccino()
                cont+=1
