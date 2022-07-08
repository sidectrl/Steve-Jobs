package Snake;
public class Main {
    public static void main(String[] args) {
        SnakeGame s = new SnakeGame(10, 10);
        System.out.println(s);
        s.move(Direction.UP);
        System.out.println(s);
        s.move(Direction.LEFT);
        System.out.println(s);
    }
}
