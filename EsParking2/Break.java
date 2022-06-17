package EsParking2;
import java.util.Date;

public class Break {
    // #region Attributes
    String plate = "";
    private long start;
    private long stop;

    // #endregion

    // #region Costructor
    public Break(String plate, long start) {
        this.plate = plate;
        this.start = start;
    }

    public Break(String plate) {
        this.plate = plate;
        Date d = new Date();
        this.start = d.getTime();
    }
    // #endregion

    // #region Methods
    public String getPlate() {
        return plate;
    }

    public void setStop() {
        Date d = new Date();
        this.stop = d.getTime();
    }

    public double getPriece(double prieceForSecond) {
        if (this.stop == 0)
            return 0;
        return (this.stop - this.start / 1000) * prieceForSecond;
    }

    public String toString() {
        String response = "\n\rPlate: " + this.plate + "\n\r" + "start: " + this.start;
        if (this.stop != 0)
            response += "\n\rstop: " + this.stop;
        return response;
    }
    // #endregion

}
