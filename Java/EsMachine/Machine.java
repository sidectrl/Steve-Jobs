package EsMachine;

import java.util.ArrayList;

public class Machine {
    public ArrayList<Money> change(double d) {
        ArrayList<Money> moneys = new ArrayList<>();
        int value = (int) (d * 100);
        for (Money coin : Money.values()) {
            while (value >= coin.currency) {
                moneys.add(coin);
                value -= coin.currency;
            }
        }
        return moneys;
    }
}
