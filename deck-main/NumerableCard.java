public class NumerableCard extends Card {

    private int value;

    NumerableCard(String seem, int value) {
        super(seem);
        this.value = value;
    }

    public String getSeem() {
        return super.getName();
    }

    public int getValue() {
        return value;
    }

    @Override
    public String toString() {
        return this.value + " " + super.toString();
    }

}
