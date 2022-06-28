package Checkers;

public enum Posx {
    A(1),
    B(2),
    C(3),
    D(4),
    E(5),
    F(6),
    G(7),
    H(8);

    public int Posx;

    Posx(int Posx) {
        this.Posx = Posx;
    }

    public int getValue() 
    {
        return this.Posx;
    }
}
