import java.util.ArrayList;
import java.util.List;

public class Parking {
    private List<String> whitelList = new ArrayList<String>();
    private List<Break> breaks = new ArrayList<Break>();
    private double prieceForSecond = 0;
    private String name = "";

    // #region Costructor
    public Parking(String name, double prieceForSecond) {
        this.name = name;
        this.prieceForSecond = prieceForSecond;
    }
    // #endregion

    // #region Methods
    public void addBreak(String plate) {
        if (this.whitelList.contains(plate)) {
            breaks.add(new Break(plate));
        } else
            System.out.println("The car arent in whitelist.");
    }

    public void stopBreak(String plate) {
        for (Break iesimBreak : this.breaks) {
            if (iesimBreak.getPlate().equals(plate)) {
                iesimBreak.setStop();
            }
        }

    }

    public void addWlElement(String element) {
        if (!this.whitelList.contains(element))
            this.whitelList.add(element);
    }

    public double getProfit() {
        double profit = 0;
        for (Break breakIesim : this.breaks)
            profit += breakIesim.getPriece(prieceForSecond);
        return profit;
    }

    public String toString() {
        String response = this.name + " Whitelist: [";
        for (String plate : this.whitelList)
            response += plate + " ";
        response += "]";
        response += "\n\rBreaks: [";
        for (Break breakIesim : this.breaks) {
            response += breakIesim.toString() + "\n\r";
            response += "Priece: " + breakIesim.getPriece(this.prieceForSecond);
        }
        response += "\n\r]";
        return response;
    }
    // #endregion

}
