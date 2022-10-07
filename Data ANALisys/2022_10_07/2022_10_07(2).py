from random import randint


def lumen(T):  # T deve essere una tupla (R,G,B)
    return T[0]+2*T[1]+T[2]


# test funzione lumen
lumen((255, 0, 0))

# generare la lista degli indirizzi

indirizzi = [(randint(0, 100), randint(0, 100)) for x in range(20)]

pixels = {}
for coppia in indirizzi:
    pixels[coppia] = (randint(0, 255), randint(0, 255), randint(0, 255))

# trovare l'indirizzo del pixel più luminoso

maxLumen = 0
maxInd = (0,0)
for p in pixels:
    l= lumen(pixels[p]) # Luminanza all'indirizzo p
    if l>maxLumen:
        maxLumen = l
        maxInd = p

print(maxInd, pixels[maxInd])

