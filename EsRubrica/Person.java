package EsRubrica;

public class Person {
    // #region Attributes
    private String name = "";
    private String surname = "";
    private String telNumber = "";
    // #endregion

    // #region Costructor
    public Person(String name, String surname, String telNumber) {
        this.name = name;
        this.surname = surname;
        this.telNumber = telNumber;
    }

    // #endregion

    // #region Set and Get methods
    public String getTelNumber() {
        return telNumber;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setTelNumber(String telNumber) {
        this.telNumber = telNumber;
    }
    // #endregion
    
    //#region Methods
    public String toString(){
        return this.name + " " + this.surname;
    }
    //#endregion
}
