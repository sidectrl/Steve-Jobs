import java.io.File;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.Scanner;

public class UtilSave {
    private String path;
    private ArrayList<Person> people = new ArrayList<>();

    public UtilSave(String path) throws Exception {
        this.path = path;
        this.readFile();
    }

    private void readFile() throws Exception {
        File f = new File(this.path);
        Scanner scanner = new Scanner(f);
        this.people.clear();
        while (scanner.hasNextLine()) {
            String data = scanner.nextLine();
            String[] rows = data.split(";");
            Person p = new Person(rows[0], rows[1], rows[2]);
            this.people.add(p);
        }
        scanner.close();
    }

    public void savePerson(Person p) throws Exception {
        FileWriter f = new FileWriter(this.path, true);
        f.append(p.toCsv());
        f.close();
        // this.people.add(p);
        this.readFile();

    }

    public ArrayList<Person> getPeople() {
        return people;
    }

}
