import pandas as pd
path = "c:/xampp/htdocs/Università/Steve-Jobs/Data_ANALisys/2022_11_23/"
DF = pd.read_csv(path + "incidentiBarcelona.csv")

print(DF)
print(DF.info())
print(DF.describe())

print(DF.veicolo)
print(DF.head())
print(DF.head(8))
print(DF.tail())

print(DF.veicolo.unique())
print(DF.veicolo.nunique())

print(DF.genere.unique())

print(DF.esito.unique())

print(DF.età.unique())
print(sum(DF.età == "Desconegut"))
# prima strategia: eliminare i record incompleti, solo se sono pochi
DF2 = DF[DF.età != "Desconegut"]

# seconda strategia: "inventare" un valore credibile
# un possibile valore credibile è la media

meanAge = int(pd.to_numeric(DF2.età).mean())
DF.età = DF.età.replace("Desconegut", meanAge)

DF["età"] = DF.età.astype("int64")

DF.boxplot("età")

age = pd.DataFrame() # DataFrame vuoto

ageM= DF[DF.genere=="M"]["età"]
ageF= DF[DF.genere=="F"]["età"]
print(ageF.describe()["mean"])
print(ageM.describe()["mean"])

DF["genere"].hist()
DF["età"].hist(bins=60)
DF["età"].plot.hist()
