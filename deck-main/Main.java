import java.util.Scanner;

import javax.xml.transform.Source;

public class Main {
    public static void main(String[] args) {

        // BlackJack b = new BlackJack();
        // b.start();
        // Scanner s = new Scanner(System.in);
        // System.out.println(b);
        // System.out.println("Chiami (1) o Stai (0)");
        // int call = s.nextInt();
        // while (call == 1) {
        // b.call();
        // System.out.println(b);
        // if (b.current.isStone() ||
        // b.current.getScore().get(b.current.getScore().size() - 1) == 21) {
        // break;
        // }
        // System.out.println("Chiami (1) o Stai (0)");
        // call = s.nextInt();
        // }
        // System.out.println(b);
        // b.playDealer();
        // System.out.println(b);
        // System.out.println("The winner is :" + b.getWinner());

        try {
            UtilSave us = new UtilSave("path.csv");
            System.out.println(us.getPeople().size());
            Scanner s = new Scanner(System.in);
            Person p = new Person(s.nextLine(), s.nextLine(), s.nextLine());
            us.savePerson(p);
            System.out.println(us.getPeople().size());
            s.close();

        } catch (Exception e) {
            System.out.println(e);
        }

    }
}
