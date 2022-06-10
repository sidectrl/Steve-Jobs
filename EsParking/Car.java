
public class Car {
    // #region Attributes
    private double weight = 0;
    private double cc = 0;
    private String model = "";
    private String brand = "";
    private String type = "";
    private String color = "";
    // #endregion

    // #region Costructor
    public Car(String model, String type, String producer) {
        this.model = model;
        this.brand = producer;
        this.type = type;
    }

    public Car(String brand, String model,  String type, double weight) {
        this.model = model;
        this.brand = brand;
        this.weight = weight;
        this.type = type;
    }

    public Car(String model, String type, double cc, String brand) {
        this.model = model;
        this.brand = brand;
        this.cc = cc;
        this.type = type;
    }

    public Car(String brand, String model,  String type, double cc, double weight, String color) {
        this.model = model;
        this.brand = brand;
        this.cc = cc;
        this.weight = weight;
        this.type = type;
        this.color = color;
    }
    // #endregion

    // #region Get and Set Methods
    public double getCc() {
        return cc;
    }

    public String getType() {
        return type;
    }

    public String getModel() {
        return model;
    }

    public String getBrand() {
        return brand;
    }

    public double getWeight() {
        return weight;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setCc(Double cc) {
        this.cc = cc;
    }
    // #endregion

    // #region Methods
    public double getAcceleration() {
        return (this.weight / this.cc) * 100/10;
    }
    public double getAcceleration(double value) {
        
        return Math.round((this.weight / this.cc) * value/10);
    }

    public String toString() {
        return this.getBrand() + " " + this.getModel() + "\n\rType: " + this.getType() + " - " + "Weight: "
                + this.getWeight() + " - "
                + "Cc: "
                + this.getCc() + " - " + "Color: " + this.getColor() + " - " + "Acceleration: " + this.getAcceleration() + ".";
    }
    // #endregion
}
