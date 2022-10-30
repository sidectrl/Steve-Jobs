package Dame;

public class Board {
    boolean[][] gameBoard = new boolean[8][8];

    public String createBoard() {
        boolean dummy = true;
        String result = "| ";
        for (int row = 0; row < 8; row++) {
            for (int column = 0; column < 8; column++) {
                this.gameBoard[row][column] = dummy;
                
                if (dummy) {
                    dummy = false;
                    result+=this.gameBoard[row][column]+" |";
                } else {
                    dummy = true;
                    result+=this.gameBoard[row][column]+ " |";
                }
                
            }
            result += "\n\r";
        }
        return result;
    }
}
