package ThreadCar;

import java.util.ArrayList;
import java.util.Scanner;

public class Race {
    ArrayList<Thread> cars = new ArrayList<>();

    public void setCars() {
        Scanner s = new Scanner(System.in);
        for (int count = 0; count < 3; count++) {
            System.out.println("Set " + (count+1) + " car");
            cars.add(new Car(s.nextLine()));
        }
        s.close();
    }

    public void startRace() {
        for (Thread iesimCar : cars) {
            iesimCar.start();
        }
    }
}
