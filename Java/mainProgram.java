package Java;

import java.util.Scanner;

import EsParking.Car;

public class mainProgram {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        Car[] myCar = new Car[5];
        int counter = 0;
        int option = 1;
        while (true) {
            myCar[counter] = inputValues(input);
            System.out.println(myCar[counter]);
            counter++;
            System.out.println("Write 0 to exit or 1 to create another car.");
            option = input.nextInt();
            if (option == 0) {
                input.close();
                return;
            }
        }
    }

    public static Car inputValues(Scanner input) {
        Car car1;
        System.out.println("Insert the brand: ");
        String brand = input.next();
        System.out.println("Insert the model: ");
        String model = input.next();
        System.out.println("Insert the type: ");
        String type = input.next();
        System.out.println("Insert the displacement: ");
        double displacement = input.nextDouble();
        System.out.println("Insert the weight: ");
        double weight = input.nextDouble();
        System.out.println("Insert the color: ");
        String color = input.next();
        car1 = new Car(brand, model, type, displacement, weight, color);
        return car1;
    }
}
