package EsMachine;

public enum Money {
    TWO(200),
    ONE(100),
    FIFTY_CENT(50),
    TWENTY_CENT(20),
    TEN_CENT(10),
    FIVE_CENT(5),
    TWO_CENT(2),
    ONE_CENT(1);

    public int currency;

    Money(int currency) {
        this.currency = currency;
    }
}
