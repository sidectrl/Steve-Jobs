package Java;

public class circle {
    // #region attributes
    private double radius = 0;
    // #endregion

    // #region costructor
    public circle(double value) {
        if (this.radius > 0) {
            this.radius = value;
        }
    }

    // #endregion

    // #region Methods
    public void setRadius(double value) {
        this.radius = value;
    }

    public double getPerimeter() {
        double perimeter = 0;
        perimeter = (3.14 * 2) * radius;
        return perimeter;
    }

    public double getArea() {
        double area = 0;
        area = (radius * radius) * 3.14;
        return area;
    }
    // #endregion
}
