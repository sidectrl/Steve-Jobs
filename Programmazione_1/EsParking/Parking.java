package EsParking;

public class Parking {
    // #region attributes
    private Car[] cars;
    private int max_car = 0;

    // #endregion
    // #region Costructor
    public Parking(int dimension) {
        cars = new Car[dimension];
    }

    // #endregion
    // #region Set and Get methods
    public int getMax_car() {
        return this.max_car;
    }

    // #endregion
    // #region Methods
    public void insretCar(Car car) {
        for (int count = 0; count < cars.length; count++) {
            if (this.cars[count] == null) {
                this.cars[count] = car;
                this.max_car++;
                System.out.println("Macchina inserita");
                return;
            } else
                System.out.println("Macchina non inserita.");
        }

    }

    public void insretCar(Car car, int place) {
        if (place < cars.length){
        if (this.cars[place] == null) {
            this.cars[place] = car;
            this.max_car++;
        } else {
            System.out.println("Position occupated");
        }
    } else System.out.println("Impossible to insert.");
    }

    public void removeCarAt(int place) {
        if (place < cars.length)
            if (this.cars[place] != null) {
                this.cars[place] = null;
                this.max_car--;
            } else
                System.out.println("Impossible to remove.");
    }

    public Boolean empty() {
        Boolean empty = false;
        if (this.max_car == cars.length) {
            empty = false;
        } else if (this.max_car == 0) {
            empty = true;
        } else {
            empty = null;
        }
        return empty;
    }

    public String toString() {
        String parking_slots = "";
        for (int count = 0; count < cars.length; count++) {
            if (cars[count] == null) {
                parking_slots += "| Empty |";
            } else
                parking_slots += "| Car |";
        }
        return parking_slots;
    }
    // #endregion
}