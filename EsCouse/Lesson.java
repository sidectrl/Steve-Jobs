package EsCouse;

public class Lesson {
    private String title = "";
    private double duration = 0;

    public Lesson(String title, double duration) {
        this.title = title;
        this.duration = duration;
    }

    // #region Set and get Methods
    public String getTitle() {
        return title;
    }

    public double getDuration() {
        return duration;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDuration(double duration) {
        this.duration = duration;
    }

    // #endregion

    // #region Methods
    public String toString()
    {
        String response = this.title + " " +  "duration: "+ duration +"h.";
        return response;
    }
    // #endregion
}
