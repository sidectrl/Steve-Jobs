import java.io.File;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.Scanner;

public final class UtilSave {
    private static String path = "deck-main/path.csv";
    public static ArrayList<Person> people = new ArrayList<>();

    private UtilSave(){
    }

    public static void readFile() throws Exception {
        File f = new File(UtilSave.path);
        Scanner scanner = new Scanner(f);
        UtilSave.people.clear();
        while (scanner.hasNextLine()) {
            String data = scanner.nextLine();
            String[] rows = data.split(";");
            Person p = new Person(rows[0], rows[1], rows[2]);
            UtilSave.people.add(p);
        }
        scanner.close();
    }

    public static void savePerson(Person p) throws Exception {
        FileWriter f = new FileWriter(UtilSave.path, true);
        f.append(p.toCsv());
        f.close();
        UtilSave.people.add(p);
        UtilSave.readFile();
    }

    public ArrayList<Person> getPeople() {
        return people;
    }

}
