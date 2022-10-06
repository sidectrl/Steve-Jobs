package ThreadCar;

class Car extends Thread {
    private String name = "";

    public Car(String name) {
        this.name = name;
    }

    public void run() {
        for (int distance = 0; distance <= 1000;) {
            distance += race();
            System.out.println(this.name + " " + distance + "m");
            try{
                this.sleep(500);
            }
            catch (Exception e){
                System.out.println(e);
            }
            
        }
    }

    public int race() {
        return (int) (Math.random() * 50);
    }
}