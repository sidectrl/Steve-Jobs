package Dame;

import java.util.ArrayList;

enum Player {
    Black, White
};

public class Checkers {
    private boolean[][] gameBoard = new boolean[8][8];
    ArrayList<Pawn> pawns = new ArrayList<>();
    // #region Set and get Methods
    // #endregion

    // #region Methods

    public boolean move(String position, String destination) {
        for (Pawn pawnIesim : pawns)
            if (pawnIesim.getPosition() == position
                    && this.gameBoard[pawnIesim.getPosition(destination).charAt(0)][pawnIesim.getPosition(destination)
                            .charAt(1)]) {
                for (Pawn pawnIesim2 : pawns)
                    if (pawnIesim2.getPosition() == destination) {
                        pawnIesim2.setPosition(destination);
                    }
            }
        return true;
    }

    public void createBoard() {
        boolean value = true;
        for (int row = 0; row < 8; row++) {
            for (int column = 0; column < 8; column++) {
                this.gameBoard[row][column] = value;
                if (value && row < 3 || row > 4) {
                    if (row < 3)
                        pawns.add(new Pawn(row, column, Player.White));
                    else if (row >= 5) {
                        pawns.add(new Pawn(row, column, Player.Black));
                    }
                }
                value = !value;

            }
            value = !value;
        }
    }

    public String toString() {
        String response = "| ";
        int dummy = 0;
        for (int row = 7; row >= 0; row--) {
            for (int column = 7; column >= 0; column--) {
                if ((row < 3 || row >= 5) && gameBoard[row][column]) {
                    response += pawns.get(dummy).toString() + " |";
                    dummy++;
                } else {
                    response += "Empty| ";
                }
            }
            response += "\n\r|";
        }
        return response;
    }
    // #endregion
}
