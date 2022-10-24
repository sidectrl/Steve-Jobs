public class Util {

    public double value = 0.2;
    public static String path = "/path/example/pippo";
    public static final double sValue = 0.5; //finale -> costante -> non modificabile.

    public static boolean randomBoolean()
    {
        return Math.random() > sValue;
    }
    
    public Util() {
        System.out.println("Ciao");
    }

    public Util (double value){
        this.value = value;
    }
}
