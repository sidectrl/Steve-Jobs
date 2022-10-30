public class MainSampleStatic {
    public static void main(String[] args) {
        Math.random();
        Util.randomBoolean();
        //metodi statici o metodi della classe
        System.out.println(Util.path);
        //proprietà statica o proprietà della classe

        Util u = new Util();
        Util u2 = new Util(0.8);
        Util u3 = new Util(0.3);
        //proprietà dell'instanza NON statico

        Util.randomBoolean();
       // Util.sValue = 0.7;
        Util.randomBoolean();
    }
}
