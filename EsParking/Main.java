package EsParking;

import java.security.Principal;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int choice, position;
        System.out.println("Inserire la dimensione del parcheggio: ");
        int dimension = input.nextInt();
        Parking parking1 = new Parking(dimension);
        while (true) {
            System.out.println(
                    "Type: \n\r 0 - to Exit. \n\r 1 - to insert a car. \n\r 2 - to insert a car on a specific place. \n\r 3 - to remove a car on a specific place. \n\r 4 - to see the empty");
            choice = input.nextInt();
            switch (choice) {
                case 0:
                    input.close();
                    break;
                case 1:
                    parking1.insretCar(createCar(input));
                    break;
                case 2:
                    System.out.println("Type the position:");
                    position = input.nextInt();
                    parking1.insretCar(createCar(input), position);
                    break;
                case 3:
                    System.out.println("Type the position:");
                    position = input.nextInt();
                    parking1.removeCar(position);
                    break;
                case 4:
                    if (parking1.empty() == null) {
                        System.out.println("Semi-empty");
                    } else if (parking1.empty()) {
                        System.out.println("Parking empty");
                    } else
                        System.out.println();
                        System.out.println(parking1);
                    break;
            }
        }

    }

    // #region Methods
    public static Car createCar(Scanner input) {
        Car car1;
        System.out.println("Insert the brand: ");
        String brand = input.next();
        System.out.println("Insert the model: ");
        String model = input.next();
        System.out.println("Insert the type: ");
        String type = input.next();
        System.out.println("Insert the cc: ");
        double cc = input.nextDouble();
        System.out.println("Insert the weight: ");
        double weight = input.nextDouble();
        System.out.println("Insert the color: ");
        String color = input.next();
        return car1 = new Car(brand, model, type, cc, weight, color);
    }
    // #endregion

}
