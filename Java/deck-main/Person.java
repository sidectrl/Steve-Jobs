public class Person {
    private String name;
    private String surname;
    private String phone;

    Person(String name, String surname, String phone) {
        this.name = name;
        this.surname = surname;
        this.phone = phone;
    }

    @Override
    public String toString() {
        return this.name + " " + this.surname + " " + this.phone;
    }

    public String toCsv() {
        return this.name + ";" + this.surname + ";" + this.phone + ";\n";
    }

}
