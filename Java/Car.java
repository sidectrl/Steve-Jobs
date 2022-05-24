package Java;

public class Car {
    // #region Attributes
    private double weight = 0;
    private double displacement = 0;
    private String model = "";
    private String producer = "";
    private String type = "";
    private String color = "";
    // #endregion

    // #region Costructor
    public Car(String model, String type, String producer) {
        this.model = model;
        this.producer = producer;
        this.type = type;
    }

    public Car(String model, String producer, String type, double weight) {
        this.model = model;
        this.producer = producer;
        this.weight = weight;
        this.type = type;
    }

    public Car(String model, String type, double displacement, String producer) {
        this.model = model;
        this.producer = producer;
        this.displacement = displacement;
        this.type = type;
    }

    public Car(String model, String producer, String type, double displacement, double weight, String color) {
        this.model = model;
        this.producer = producer;
        this.displacement = displacement;
        this.weight = weight;
        this.type = type;
        this.color = color;
    }
    // #endregion

    // #region Get and Set Methods
    public double getDisplacement() {
        return displacement;
    }

    public String getType() {
        return type;
    }

    public String getModel() {
        return model;
    }

    public String getProducer() {
        return producer;
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

    public void setProducer(String producer) {
        this.producer = producer;
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

    public void setDisplacement(Double displacement) {
        this.displacement = displacement;
    }
    // #endregion

    // #region Methods
    public String toString() {
        return this.getProducer() + " " + this.getModel() + "\n\rType: " + this.getType() + " - " + "Weight: "
                + this.getWeight() + " - "
                + "displacement: "
                + this.getDisplacement() + " - " + "color: " + this.getColor() + ".";
    }
    // #endregion
}
