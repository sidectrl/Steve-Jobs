public class FrenchCard extends NumerableCard {
    FrenchCard(String seem, int value) {
        super(seem, value);
    }

    private String switchNumber(int key) {
        switch (key) {
            case 1:
                return "A";
            case 11:
                return "J";
            case 12:
                return "Q";
            case 13:
                return "K";
            default:
                return key + "";
        }
    }

    @Override
    public String toString() {
        return switchNumber(super.getValue()) + " " + super.getSeem();
    }
}
