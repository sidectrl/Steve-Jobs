package Checkers;

import java.util.ArrayList;

public class Table { // tavolo da gioco con le pedine
    private boolean[][] board = new boolean[8][8]; // row - column
    private ArrayList<Pawn> pawns = new ArrayList<>(); // Create an ArrayList object

    public Table() {
        CreateBoard();
    }

    public void CreateBoard() {
        boolean value = true;
        for (int column = 0; column < 8; column++) {
            for (int row = 0; row < 8; row++) {
                this.board[row][column] = value;
                if (value && (column < 3 || column >= 5))
                    if (column < 3) {
                        pawns.add(new Pawn(row, column, Player.WHITE));
                    } else if (column >= 5) {
                        pawns.add(new Pawn(row, column, Player.BLACK));
                    }
                value = !value;
            }
            value = !value;
        }
    }

    public boolean CheckPos(int row, int column) // c'è una pedina
    {
        boolean flag = true;
        for (Pawn pawnIesim : pawns) {
            if (pawnIesim.getPosX() == row && pawnIesim.getPosY() == column) {
                flag = false;
            }
        }
        return flag;
    }

    public boolean setPosPawn(int posX, int posY, int destX, int destY) {
        boolean flag = true;
        /*for(int count=0; count < pawns.size();count++)
        {
            if (pawns.get(count).getPosX() == posX && pawns.get(count).getPosY() == posY) {
                pawns.get(count).setPosX(destX);
                pawns.get(count).setPosY(destY);
            } else
                flag = false;
        } */
        for (Pawn pawnIesim : pawns) {
            if (pawnIesim.getPosX() == (posX) && pawnIesim.getPosY() == (posY)) {
                pawnIesim.setPosX(destX);
                pawnIesim.setPosY(destY);
            } else
                flag = false;
        }
        return flag;
    }

    public void gnammu(int destX, int destY) {
        for (int index = 0; index < pawns.size(); index++) {
            if (CheckPos(destX, destY) && pawns.get(index).getColor() == Player.BLACK) {
                pawns.remove(index);
                System.out.println("Gnammete kusassai!");
            }
        }

    }

    public String toString() {
        String result = "|";
        int count = 0;
        for (int column = 0; column < 8; column++) {
            for (int row = 0; row < 8; row++) {
                if ((board[row][column] && count < pawns.size()) && pawns.get(count).getPosX() == row
                        && pawns.get(count).getPosY() == column) {
                    result += " " + pawns.get(count).toString() + " |";
                    count++;
                } else {
                    result += "empty" + "|";
                }
            }
            result += "\n" + "|";
        }
        return result;
    }
}
