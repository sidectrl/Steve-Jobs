import random

# counter[0] = numero 1, counter[1] = numero 2, counter[2] = numero 3,
counter = [0, 0, 0, 0, 0, 0]
# counter[3] = numero 4, counter[4] = numero 5, counter[5] = numero 6.


for number in range(1000000):
    nut = random.randint(1, 6)
    if nut == 1:
        counter[0] += 1
    elif nut == 2:
        counter[1] += 1
    elif nut == 3:
        counter[2] += 1
    elif nut == 4:
        counter[3] += 1
    elif nut == 5:
        counter[4] += 1
    elif nut == 6:
        counter[5] += 1


for counting in range(len(counter)):
    print("numero", counting+1, counter[counting])
    maximum = max(counter)

print("Il numero lanciato più  frequentemente è:",
      counter.index(maximum)+1, "uscito", maximum, "volte")
minor = min(counter)
print("Il numero lanciato meno frequentemente è:",
      counter.index(minor)+1, "uscito", minor, "volte")

for i in range(6):
    print("il numero {} è uscito {}% volte".format(i+1, (counter[i]/10**6)*100))
