package EsRubrica;

public class Rubric {
    // #region Attributes
    private Person[] contact = new Person[10];
    private int pplNumber = 0;
    // #endregion

    // #region Costructor
    public Rubric() {

    }
    // #endregion

    // #region Attributes
    public void setContact(Person contact) {
        if (pplNumber < this.contact.length) {
            this.contact[pplNumber] = contact;
            pplNumber++;
        }
    }

    public void removeContact(int index) {
        int counter = 0;
        Person[] dummy = new Person[10];
        if (index < contact.length && contact[index] != null  ) {
            contact[index] = null;
            pplNumber--;
            for (int count = 0; count < contact.length; count++) {
                if (contact[count] != null) {
                    dummy[counter] = contact[count];
                    counter++;
                }
            }
            contact = dummy;
        } else
            System.out.println("Cannot remove.");

    }

    public void searchContact(String name) {
        for (int count = 0; count < contact.length; count++) {
            if (this.contact[count] != null && this.contact[count].getName().equalsIgnoreCase(name)) {
                System.out.println(this.contact[count].toString());
            }
        }
    }

    public String toString() {
        String tostring = "";
        for (int count = 0; count < this.contact.length; count++) {
            if (this.contact[count] != null) {
                tostring += count + " - " + this.contact[count].getName() + " " + this.contact[count].getSurname()
                        + "\n\r";
            }
        }
        return tostring;
    }
    // #endregion
}
