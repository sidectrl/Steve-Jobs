package Dame;

enum Player {
    Black, White
};

public class Checkers {
    private boolean[][] gameBoard = new boolean[8][8];
    
    // #region Set and get Methods
    // #endregion

    // #region Methods

    public boolean move(String position, String destination) {
        int posX = translatePosition(position.charAt(0));
        int posY = position.charAt(1);

        return true;
    }

    public void ceateBoard() {
        boolean value = true;
        for (int row = 0; row < 8; row++) {
            for (int column = 0; column < 8; column++) {
                this.gameBoard[row][column] = value;
                value = !value;
            }
            value = !value;
        }
    }

    private int translatePosition(char position) {
        int response = 0;
        switch (position) {
            case 'A':
                response = 0;
                break;
            case 'B':
                response = 1;
                break;
            case 'C':
                response = 2;
                break;
            case 'D':
                response = 3;
                break;
            case 'E':
                response = 4;
                break;
            case 'F':
                response = 5;
                break;
            case 'G':
                response = 6;
                break;
            case 'H':
                response = 7;
                break;
        }
        return response;
    }
    // #endregion
}
