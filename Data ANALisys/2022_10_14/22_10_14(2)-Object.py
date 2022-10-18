"""
Introduciamo gli oggetti
"""


class Scatola:
    # definendo una variabile di classe
    contiene = "piombo"
    pesoSpecifico = 100  # non realistico

    # metodo costruttore

    def __init__(self, x, y, z):
        self.larg = x
        self.lung = y
        self.alt = z

    def __str__(self):
        s = "Scatola di dimensioni: \n"
        s += "larghezza == " + str(self.larg) + "\n"
        s += "lunghezza == " + str(self.lung) + "\n"
        s += "altezza == " + str(self.alt) + "\n"
        return s

    def volume(self):
        return self.larg * self.lung * self.alt

    def peso(self):
        return self.pesoSpecifico * self.volume()

    def __eq__(self, s):
        # due scatole sono uguali se
        # e solo se hanno le stesse dimensioni
        return self.larg == s.larg and \
            self.lung == s.lung and \
            self.alt == s.alt

    def __gt__(self, s):
        return self.volume() > s.volume()

    def __ge__(self, s):
        return self.volume() >= s.volume()

    def __lt__(self, s):
        return self.volume() < s.volume()

    def __le__(self, s):
        return self.volume() <= s.volume()

# estensione di classe
class ScatolaColorata(Scatola):
    
    def __init__(self, x, y, z, c):
        super().__init__(x, y, z)
        self.colore = c

    def __str__(self):
        return super().__str__() + "colore == " + self.colore

    def __eq__(self, s):
        return super().__eq__(s) and self.colore == s.colore
# torno identazione a sinistra termina la classe


s1 = Scatola(1, 2, 3)
s2 = Scatola(1, 2, 3)
s3 = Scatola(2, 2, 6)
s4 = ScatolaColorata(3,3,3,"rosso")
s5 = ScatolaColorata(3,3,3,"verde")

print (s4 == s5)