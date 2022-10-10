import java.util.Scanner;

class MainParking {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        boolean programRun = true;
        int choice;
        Parking parking1 = new Parking("Esposito Parking", 0.25, 0.80);
        System.out.println(parking1);
        while (programRun) {
            System.out.println(
                    "Type: \n\r 0 - Exit. \n\r 1 - Start a break.\n\r 2 - Stop a break.\n\r 3 - Get the profit.");
            choice = input.nextInt();
            switch (choice) {
                case 0:
                    input.close();
                    programRun = false;
                    System.out.println("Closing..");
                    parking1.saveParking();
                    break;
                case 1:
                    Break dummy = createBreak(input);
                    parking1.setBreak(dummy);
                    System.out.println(parking1);
                    parking1.saveParking(dummy);
                    break;
                case 2:
                    System.out.println(parking1);
                    parking1.stopBreak(createPlate(input));
                    System.out.println(parking1);
                    break;
                case 3:
                    System.out.println("The profit is:" + parking1.getProfit());
                    break;
            }
        }

    }

    // #region Methods
    public static Break createBreak(Scanner input) {
        Break dummy;
        String type = "";
        System.out.println("Insert the type of veicle: Truck or Car");
        type = input.next();
        dummy = new Break(createPlate(input), type.toLowerCase());
        return dummy;
    }

    public static String createPlate(Scanner input) {
        String plate = "";
        System.out.println("Type the plate of the veicle: ");
        plate = input.next();
        return plate;
    }
    // #endregion
}
