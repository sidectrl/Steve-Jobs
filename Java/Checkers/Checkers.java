package Checkers;

public class Checkers { // logica del gioco della dama
    private Table board = new Table();

    public String move(String position, String destination) // position start, position end
    {
        String result = "Done";
        int posX = TraduceX(position);
        int posY = TraduceY(position);
        int destX = TraduceX(destination);
        int destY = TraduceY(destination);
        if (!board.CheckPos(destX, destY)) {
            result = "Error there is a pawn already int the position";
            return result;
        }
        if (!board.setPosPawn(posX, posY, destX, destY)) {
            result = "Error there isn't a pawn in the position";
            return result;
        } else
            board.gnammu(destX, destY);
        return result;
    }

    private int TraduceY(String pos) {
        int result = 0;
        char p = pos.charAt(0);
        result = Posx.valueOf(Character.toString(p)).ordinal();
        return result;
    }

    private int TraduceX(String pos) {
        int result = 0;
        char p = pos.charAt(1);
        result = Character.getNumericValue(p);
        return result;
    }
    
    public String toString() {
        return board.toString();
    }
}
