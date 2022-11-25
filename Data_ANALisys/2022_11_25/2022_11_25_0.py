import pandas as pd

# lettura del file
DF = pd.read_csv("incidentiBis.csv")
print(DF.info())

print(DF["genere"].unique())
print(DF["genere"][DF["genere"] == "M"].count())
print(DF["genere"][DF["genere"] == "F"].count())
#CERCARE SE CI SONO VALORI NAN e trovare un rimendio
print(DF["genere"].isnull().sum())
DF["genere"][DF["genere"].isnull().values]
DF[DF["genere"].isnull()]

DF.fillna("M", inplace=True)
print(DF)

