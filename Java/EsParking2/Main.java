package EsParking2;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        boolean programRun = true;
        int choice;
        Parking parking1 = new Parking("Esposito Parking", 0.25);
        while (programRun) {
            System.out.println(
                    "Type: \n\r 0 - Exit. \n\r 1 - Add a car to the whitelist.\n\r 2 - Start a break.\n\r 3 - Stop a break.\n\r 4 - Get the profit");
            choice = input.nextInt();
            switch (choice) {
                case 0:
                    input.close();
                    programRun = false;
                    System.out.println("Closing..");
                    break;
                case 1:
                    System.out.println("Add the plate's car to the whitelist: ");
                    String plate = input.next();
                    parking1.addWlElement(plate);
                    System.out.println(parking1);
                    break;
                case 2:
                    parking1.addBreak(createPlate(input));
                    System.out.println(parking1);
                    break;
                case 3:
                    System.out.println(parking1);
                    System.out.println("Type the plate:");
                    plate = input.next();
                    parking1.stopBreak(plate);
                    System.out.println(parking1);
                    break;
                case 4:
                    System.out.println("The profit is:" + parking1.getProfit());
                    break;
            }
        }

    }

    // #region Methods
    public static String createPlate(Scanner input) {
        String plate = "";
        System.out.println("Type the plate of the car: ");
        plate = input.next();
        return plate;
    }
    // #endregion
}
