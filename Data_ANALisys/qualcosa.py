def es(s1,s2):
    new_string = ""
    for index in range(len(s1) if len(s1) < len(s2) else len(s2)):
        new_string += s1[index] + s2[index]   
    return new_string

def es2(s1,s2):
    return "".join(s1[_]+s2[_] for _ in range(len(s1) if len(s1) < len(s2) else len(s2)))


test = es2("first", "test")
print(test)
