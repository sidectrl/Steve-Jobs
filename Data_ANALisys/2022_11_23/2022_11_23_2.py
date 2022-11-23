import pandas as pd
path = "c:/xampp/htdocs/Università/Steve-Jobs/Data_ANALisys/2022_11_23/"
DF = pd.read_csv(path + "peso.csv")
print(len(DF))
print(DF.size)
print(DF.W)
print(DF.H)
print(DF["W"])
print(DF["H"])
print(DF.iloc[0, 0])
print(DF.loc[0, "W"])

print(DF[DF["H"] > 170])

DF2 = pd.read_csv(path + "peso_no_header.csv", header=None)
print("\nDF2:")
print(DF2)

DF3 = pd.read_csv(path + "peso_no_header.csv", names=["Weight", "Height"])
print(DF3.columns)

# creare data frame direttamente
W = {"A": 78, "B": 69, "C": 80}
H = {"A": 172, "B": 179, "C": 180}
SW = pd.Series(W)
SH = pd.Series(H)

DF5 = pd.DataFrame([W, H])
print(DF5)

DF6 = pd.DataFrame()
print(DF6)
DF6["SW"] = SW
DF6["SH"] = SH
