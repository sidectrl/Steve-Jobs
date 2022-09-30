package Recupero;

public class Main {
    public static void main(String[] args) {
        Pila pila = new Pila();
        pila.setElements(5);
        System.out.println("The last element is: " + pila.getElement());
        pila.setElements(69);
        System.out.println("The last element is: " + pila.getElement());
        pila.setElements(80);   
    }
}
