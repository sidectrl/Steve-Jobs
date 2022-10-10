import java.io.File;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.Scanner;

public final class Save {
    private static String path = "path.csv";
    private static ArrayList<Break> breaks = new ArrayList<>();

    private Save() {
    }

    public static void readFile() throws Exception {
        File f = new File(Save.path);
        Scanner scanner = new Scanner(f);
        Save.breaks.clear();
        while (scanner.hasNextLine()) {
            String data = scanner.nextLine();
            String[] rows = data.split(";");
            Break b = new Break(rows[0], rows[1]);
            b.setStart(Long.valueOf(rows[2]));
            b.setStop(Long.valueOf(rows[3]));
            Save.breaks.add(b);
        }
        scanner.close();
    }

    public static void saveBreak(Break b) throws Exception {
        FileWriter f = new FileWriter(Save.path, true);
        f.append(b.toCsv());
        f.close();
    }

    public static void saveBreak(ArrayList<Break> b) throws Exception {
        FileWriter f = new FileWriter(Save.path, false);
        for (Break iesimBreak : b)
            saveBreak(iesimBreak);
        f.close();
    }

    public static ArrayList<Break> getbreaks() {
        return breaks;
    }

}
