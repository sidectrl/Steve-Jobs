package EsRubrica;

public class Rubric {
    // #region Attributes
    private Person[] contacts = new Person[10];
    private int pplNumber = 0;
    // #endregion

    // #region Costructor
    public Rubric() {

    }
    // #endregion

    // #region Methods
    public void addContact(Person contact) {
        if (pplNumber < this.contacts.length) {
            this.contacts[pplNumber] = contact;
            pplNumber++;
        }
    }

    public void removeContact(int index) {
        int counter = 0;
        Person[] dummy = new Person[10];
        if (index < contacts.length && contacts[index] != null) {
            contacts[index] = null;
            pplNumber--;
            for (int count = 0; count < contacts.length; count++) {
                if (contacts[count] != null) {
                    dummy[counter] = contacts[count];
                    counter++;
                }
            }
            contacts = dummy;
        } else
            System.out.println("Cannot remove.");

    }

    public void searchContact(String name) {
        for (int count = 0; count < contacts.length; count++) {
            if (this.contacts[count] != null && (this.contacts[count].getName().equalsIgnoreCase(name)
                    || this.contacts[count].getSurname().equalsIgnoreCase(name)
                    || this.contacts[count].getTelNumber().equalsIgnoreCase(name))) {
                System.out.println(this.contacts[count].toString());
            }
        }
    }

    public String toString() {
        String tostring = "";
        for (int count = 0; count < this.contacts.length; count++) {
            if (this.contacts[count] != null) {
                tostring += count + " - " + contacts[count].toString() + "\n\r";
            }
        }
        return tostring;
    }
    // #endregion
}
