package Java;

import java.util.Scanner;

public class mainProgram {
    public static void main(String[] args) {

        Car myCar; 
        myCar= inputValues();
        System.out.println(myCar);
    }
    public static Car inputValues() {
        Car car1;
        Scanner input = new Scanner(System.in);
        System.out.println("Insert the model: ");
        String model = input.next();
        System.out.println("Insert the producer: ");
        String producer = input.next();
        System.out.println("Insert the type: ");
        String type = input.next();
        System.out.println("Insert the displacement: ");
        double displacement = input.nextDouble();
        System.out.println("Insert the weight: ");
        double weight = input.nextDouble();
        System.out.println("Insert the color: ");
        String color = input.next();
        return car1 = new Car(producer,model, type, displacement, weight, color);
    }
}
