import java.util.Date;

public class Break {
    private String plate;
    private long start;
    private long stop;
    private String type;

    // #region Costructor
    public Break(String plate, String type) {
        this.plate = plate;
        this.type = type;
        Date d = new Date();
        this.start = d.getTime();
    }
    // #endregion

    // #region Get and Set methods
    public String getPlate() {
        return plate;
    }

    public String getVeicleType() {
        return this.type;
    }

    public void setStart(long start) {
        this.start = start;
    }

    public void setStop() {
        Date d = new Date();
        this.stop = d.getTime();
    }

    public void setStop(long stop) {
        this.stop = stop;
    }

    public double getPriece(double prieceForSecond) {
        if (this.stop == 0)
            return 0;
        return (this.stop - this.start / 1000) * prieceForSecond;
    }

    public long getStop()
    {
        return this.stop;
    }

    // #endregion
    public String toString() {
        String response = "\n\r" + this.type + " Plate: " + this.plate + "\n\r" + "start: " + this.start;
        if (this.stop != 0)
            response += "\n\rstop: " + this.stop;
        return response;
    }

    public String toCsv() {
        return this.plate + ";" + this.type + ";" + this.start + ";" + this.stop + "\n";
    }
}
