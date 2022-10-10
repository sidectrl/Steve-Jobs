import java.util.ArrayList;

public class Parking {
    private ArrayList<Break> breaks = new ArrayList<>();
    private String name = "";
    private double[] cost = new double[2]; // cost[0] = tariffa truck, cost[1] = tariffa car
    private int parkingSize = 0;

    public Parking(String name, double camionTax, double carTax) {
        this.name = name;
        this.cost[0] = camionTax;
        this.cost[1] = carTax;
        try {
            Save.readFile();
            breaks = Save.getbreaks();
            getParkingSize();
        } catch (Exception e) {
            System.out.println(e);
        }

    }

    private void getParkingSize() {
        for (Break iesimBreak : breaks) {
            if (iesimBreak.getStop() == 0) {
                this.parkingSize += iesimBreak.getVeicleType()  == "truck" ? 2 : 1;
            }
        }
    }

    public void setBreak(Break break1) {
        if (this.parkingSize <= 100) {
            this.breaks.add(break1);
            this.parkingSize += break1.getVeicleType().toLowerCase() == "truck" ? 2 : 1;
        }
    }

    public void stopBreak(String plate) {
        for (Break iesimBreak : this.breaks) {
            if (iesimBreak.getPlate().equals(plate.toLowerCase())) {
                iesimBreak.setStop();
                parkingSize -= iesimBreak.getVeicleType().toLowerCase() == "truck" ? 2 : 1;
            }
        }

    }

    public double getProfit() {
        double profit = 0;
        for (Break breakIesim : this.breaks)
            if (breakIesim.getVeicleType().toLowerCase() == "truck") {
                profit += breakIesim.getPriece(this.cost[0]);
            } else
                profit += breakIesim.getPriece(this.cost[1]);
        return profit;
    }

    public void saveParking(Break b) {
        try {
            Save.saveBreak(b);
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public void saveParking() {
        try {
            Save.saveBreak(breaks);
        } catch (Exception e) {
            System.out.println(e);
        }

    }

    public String toString() {
        String response = this.name + "\n\rBreaks: [";
        for (Break breakIesim : this.breaks) {
            response += breakIesim.toString() + "\n\r";
            response += "Price: ";
            response += breakIesim.getVeicleType() == "truck" ? breakIesim.getPriece(this.cost[0])
                    : breakIesim.getPriece(this.cost[1]) + "\n\r";
        }
        response += "\n\r] Space occupated: ";
        response += this.parkingSize <= 100 ? this.parkingSize : "Full";
        return response;
    }
}
