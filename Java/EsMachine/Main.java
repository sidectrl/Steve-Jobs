package EsMachine;

import java.util.ArrayList;

class Main2 {
    public static void main(String[] args) {
        Machine m = new Machine();
        ArrayList<Money> moneys = m.change(6.00);
        // moneys = [Money.TWO, Money.TWO, Money.TWO]
        if (moneys.size() == 3) {
            System.out.println("stai facendo bene l'esercizio");
        } else {
            System.out.println("Studia di più");
        }
        ArrayList<Money> moneys2 = m.change(4.72);
        // moneys = [Money.TWO, Money.TWO, Money.FIFTHY_CENT, Money.TWENTY_CENT,
        // Money.TWO_CENT]
        if (moneys2.get(0) == Money.TWO) {
            System.out.println("stai facendo bene l'esercizio");
        }
        if (moneys2.get(4) == Money.TWO_CENT) {
            System.out.println("stai facendo bene l'esercizio");
        }

    }
}
