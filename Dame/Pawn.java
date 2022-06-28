package Dame;

public class Pawn {
    String position = "";
    Player color;

    public Pawn(int posX, int posY, Player color) {
        setPosition(posX, posY);
        this.color = color;
    }

    // #region Set and Get methods
    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        switch (position.charAt(0)) {
            case 0:
                this.position = "A";
                break;
            case 1:
                this.position = "B";
                break;
            case 2:
                this.position = "C";
                break;
            case 3:
                this.position = "D";
                break;
            case 4:
                this.position = "E";
                break;
            case 5:
                this.position = "F";
                break;
            case 6:
                this.position = "G";
                break;
            case 7:
                this.position = "H";
                break;
        }
        this.position += position;
        this.position += ((int) position.charAt(1) + 1);
    }

    public String getPosition(String position) {
        String response = "";
        switch (position.charAt(0)) {
            case 'A':
                response = "0";
                break;
            case 'B':
                response = "1";
                break;
            case 'C':
                response = "2";
                break;
            case 'D':
                response = "3";
                break;
            case 'E':
                response = "4";
                break;
            case 'F':
                response = "5";
                break;
            case 'G':
                response = "6";
                break;
            case 'H':
                response = "7";
                break;
        }
        response += position.charAt(1);
        return response;
    }

    public void setPosition(int posX, int posY) {
        switch (posX) {
            case 0:
                this.position = "A";
                break;
            case 1:
                this.position = "B";
                break;
            case 2:
                this.position = "C";
                break;
            case 3:
                this.position = "D";
                break;
            case 4:
                this.position = "E";
                break;
            case 5:
                this.position = "F";
                break;
            case 6:
                this.position = "G";
                break;
            case 7:
                this.position = "H";
                break;
        }
        this.position += posY + 1;
    }

    public String toString() {
        String response = color + " " + position;
        return response;
    }
    // #endregion
}
