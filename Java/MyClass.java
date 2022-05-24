package Java;

public class MyClass {
    public static void main(String[] args) {
        circle mycircle = new circle(2.5);
        System.out.println("Il perimetro è: " + mycircle.GetPerimeter());
        System.out.println("L'area è: " + mycircle.GetArea());
    }
};