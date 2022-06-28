package Checkers;

public class Pawn{
    int posX;
    int posY;
    Player color;

    public Pawn(int posX, int posY, Player color) {
        this.posX = posX;
        this.color = color;
        this.posY = posY;
    }

    public void setPosX(int posX)
    {
        this.posX = posX;
    }

    public void setPosY(int posY)
    {
        this.posY = posY;
    }

    public void setColor(Player color)
    {
        this.color = color;
    }

    public int getPosX()
    {
        return this.posX;
    }

    public int getPosY()
    {
        return this.posY;
    }

    public Player getColor()
    {
        return this.color;
    }

    public String toString()
    {
        String result="";
        result = posX + "-" + posY;
        return result;
    }
}